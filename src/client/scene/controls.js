import * as THREE from 'three';
import { clamp, damp, easeInOut } from './util.js';

/*
 * Roaming camera ("漫游"): stand anywhere and look around.
 *   drag            look around (full turn, ±85° up/down); the scene follows the pointer
 *   right-drag      slide sideways / up and down (also Shift + drag)
 *   wheel           move along the view direction
 *   double-click    walk to that spot on the floor
 *   W A S D / ←↑↓→  walk, Q / E down / up, Shift faster (only while the 3D view has focus)
 * Every position passes through clampPosition(next, prev), which keeps the camera inside the
 * hall and lets it out onto the balcony only through the open doors.
 */

const PITCH_LIMIT = (85 * Math.PI) / 180;
const EYE = 1.65;
const WALK = 3.2; // m/s
const RUN = 2.6; // Shift multiplier
const KEYS = {
  KeyW: 'f',
  ArrowUp: 'f',
  KeyS: 'b',
  ArrowDown: 'b',
  KeyA: 'l',
  ArrowLeft: 'l',
  KeyD: 'r',
  ArrowRight: 'r',
  KeyE: 'u',
  PageUp: 'u',
  KeyQ: 'd',
  PageDown: 'd',
};

/**
 * createLookControls(camera, element, { keyTarget, clampPosition, floorY, onStart, onChange })
 * → { enable(), disable(), enabled, sync(), active(), update(dt) → moved, dispose() }.
 * `keyTarget` is a focusable element that receives keyboard input; it is focused on pointer down.
 */
export function createLookControls(camera, element, opts = {}) {
  const { keyTarget = null, clampPosition = (v) => v, floorY = 0, onStart = null, onChange = null } = opts;
  let enabled = false;
  let yaw = 0;
  let pitch = 0;
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const keys = new Set();
  let shift = false;
  const vel = new THREE.Vector3();
  const want = new THREE.Vector3();
  let wheel = 0; // metres still to travel along the view
  let drag = null;
  let glide = null;
  let lastActive = 0;
  const prev = new THREE.Vector3();
  const fwd = new THREE.Vector3();
  const right = new THREE.Vector3();
  const step = new THREE.Vector3();
  const aim = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  function apply() {
    euler.set(pitch, yaw, 0, 'YXZ');
    camera.quaternion.setFromEuler(euler);
  }

  /** Take yaw and pitch from the camera's current orientation. */
  function sync() {
    euler.setFromQuaternion(camera.quaternion, 'YXZ');
    yaw = euler.y;
    pitch = clamp(euler.x, -PITCH_LIMIT, PITCH_LIMIT);
    apply();
  }

  /** Move by `d`; returns how far the limits pulled the camera back. */
  function moveBy(d) {
    prev.copy(camera.position);
    aim.copy(prev).add(d);
    camera.position.copy(aim);
    clampPosition(camera.position, prev);
    return camera.position.distanceTo(aim);
  }

  const mark = () => {
    lastActive = performance.now();
    if (onChange) onChange();
  };
  const start = () => {
    if (onStart) onStart();
    mark();
  };

  function onPointerDown(e) {
    if (!enabled) return;
    if (keyTarget && typeof document !== 'undefined' && document.activeElement !== keyTarget) {
      try {
        keyTarget.focus({ preventScroll: true });
      } catch {
        /* focus is best effort */
      }
    }
    const mode = e.button === 2 || (e.button === 0 && e.shiftKey) ? 'pan' : e.button === 0 ? 'look' : null;
    if (!mode) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, mode };
    glide = null;
    try {
      element.setPointerCapture(e.pointerId);
    } catch {
      /* capture is best effort */
    }
    start();
  }

  function onPointerMove(e) {
    if (!enabled || !drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    drag.x = e.clientX;
    drag.y = e.clientY;
    const h = Math.max(300, element.clientHeight || 600);
    if (drag.mode === 'look') {
      const k = 2.4 / h;
      yaw += dx * k;
      pitch = clamp(pitch + dy * k, -PITCH_LIMIT, PITCH_LIMIT);
      apply();
    } else {
      const s = 6 / h;
      right.set(1, 0, 0).applyQuaternion(camera.quaternion);
      step.copy(right).multiplyScalar(-dx * s);
      step.y += dy * s;
      moveBy(step);
    }
    mark();
  }

  function onPointerUp(e) {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null;
    try {
      element.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    mark();
  }

  function onWheel(e) {
    if (!enabled) return;
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
    wheel = clamp(wheel + clamp(-e.deltaY * unit * 0.006, -4, 4), -8, 8);
    glide = null;
    start();
  }

  function onDoubleClick(e) {
    if (!enabled) return;
    const r = element.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / Math.max(1, r.width)) * 2 - 1, -((e.clientY - r.top) / Math.max(1, r.height)) * 2 + 1);
    camera.updateMatrixWorld();
    raycaster.setFromCamera(ndc, camera);
    const { origin, direction } = raycaster.ray;
    if (direction.y > -0.02) return;
    const t = (floorY - origin.y) / direction.y;
    if (t <= 0 || t > 60) return;
    const end = new THREE.Vector3().copy(direction).multiplyScalar(t).add(origin);
    // Stop a little short of the clicked spot so the camera lands in front of what was there.
    const hx = end.x - camera.position.x;
    const hz = end.z - camera.position.z;
    const hl = Math.hypot(hx, hz);
    if (hl > 1.5) {
      end.x -= (hx / hl) * 1.2;
      end.z -= (hz / hl) * 1.2;
    }
    end.y = floorY + EYE;
    const dist = end.distanceTo(camera.position);
    glide = { t: 0, d: clamp(dist / 6, 0.45, 1.6), p0: camera.position.clone(), p1: end };
    start();
  }

  function onKey(e, isDown) {
    if (!enabled) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    shift = !!e.shiftKey;
    const k = KEYS[e.code];
    if (!k) return;
    e.preventDefault();
    e.stopPropagation();
    if (isDown) keys.add(k);
    else keys.delete(k);
    if (isDown) {
      glide = null;
      start();
    } else mark();
  }
  const onKeyDown = (e) => onKey(e, true);
  const onKeyUp = (e) => onKey(e, false);
  const onBlur = () => {
    keys.clear();
    shift = false;
  };
  const onContextMenu = (e) => {
    if (enabled) e.preventDefault();
  };

  element.addEventListener('pointerdown', onPointerDown);
  element.addEventListener('pointermove', onPointerMove);
  element.addEventListener('pointerup', onPointerUp);
  element.addEventListener('pointercancel', onPointerUp);
  element.addEventListener('wheel', onWheel, { passive: false });
  element.addEventListener('dblclick', onDoubleClick);
  element.addEventListener('contextmenu', onContextMenu);
  if (keyTarget) {
    keyTarget.addEventListener('keydown', onKeyDown);
    keyTarget.addEventListener('keyup', onKeyUp);
    keyTarget.addEventListener('blur', onBlur);
  }

  function update(dt) {
    if (!enabled) return false;
    let moved = false;
    if (glide) {
      glide.t += dt;
      const e = easeInOut(Math.min(1, glide.t / glide.d));
      step.lerpVectors(glide.p0, glide.p1, e).sub(camera.position);
      const blocked = moveBy(step) > 0.02;
      if (blocked || glide.t >= glide.d) glide = null;
      moved = true;
    }
    want.set(0, 0, 0);
    if (keys.size) {
      fwd.set(-Math.sin(yaw), 0, -Math.cos(yaw));
      right.set(Math.cos(yaw), 0, -Math.sin(yaw));
      if (keys.has('f')) want.add(fwd);
      if (keys.has('b')) want.sub(fwd);
      if (keys.has('r')) want.add(right);
      if (keys.has('l')) want.sub(right);
      if (keys.has('u')) want.y += 1;
      if (keys.has('d')) want.y -= 1;
      if (want.lengthSq() > 0) want.normalize().multiplyScalar(WALK * (shift ? RUN : 1));
    }
    vel.set(damp(vel.x, want.x, 9, dt), damp(vel.y, want.y, 9, dt), damp(vel.z, want.z, 9, dt));
    if (vel.lengthSq() > 1e-6) {
      moveBy(step.copy(vel).multiplyScalar(dt));
      moved = true;
    } else vel.set(0, 0, 0);
    if (Math.abs(wheel) > 1e-3) {
      const d = wheel * (1 - Math.exp(-9 * dt));
      wheel -= d;
      camera.getWorldDirection(fwd);
      if (moveBy(step.copy(fwd).multiplyScalar(d)) > 0.02) wheel = 0;
      moved = true;
    } else wheel = 0;
    if (moved) mark();
    return moved;
  }

  return {
    get enabled() {
      return enabled;
    },
    enable() {
      enabled = true;
      sync();
    },
    disable() {
      enabled = false;
      drag = null;
      glide = null;
      keys.clear();
      vel.set(0, 0, 0);
      wheel = 0;
    },
    sync,
    /** True while the user is driving the camera (keeps the frame rate up). */
    active() {
      return (
        enabled &&
        (!!drag || !!glide || keys.size > 0 || Math.abs(wheel) > 1e-3 || vel.lengthSq() > 1e-4 || performance.now() - lastActive < 300)
      );
    },
    update,
    dispose() {
      element.removeEventListener('pointerdown', onPointerDown);
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerup', onPointerUp);
      element.removeEventListener('pointercancel', onPointerUp);
      element.removeEventListener('wheel', onWheel);
      element.removeEventListener('dblclick', onDoubleClick);
      element.removeEventListener('contextmenu', onContextMenu);
      if (keyTarget) {
        keyTarget.removeEventListener('keydown', onKeyDown);
        keyTarget.removeEventListener('keyup', onKeyUp);
        keyTarget.removeEventListener('blur', onBlur);
      }
    },
  };
}
