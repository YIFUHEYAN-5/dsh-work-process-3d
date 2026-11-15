import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildWorld } from './world.js';
import { createPost } from './post.js';
import { BACKGROUND } from './environment.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import { ATRIUM, CAMERA_LIMIT, cameraRegion } from './layout.js';
import {
  SCREEN_MIN_D,
  screenAngle,
  screenFit as fitScreen,
  screenPanLimits,
  screenPosition,
  screenYaw,
} from './screenview.js';
import { BRIGHTNESS, DEFAULT_LOOK, LOOK_IDS } from './looks.js';
import { createLookControls } from './controls.js';
import { createCameraSpace, CAMERA_PAD, TARGET_CLEARANCE } from './camspace.js';
import { angleLerp, clamp, damp, easeInOut, lerp } from './util.js';

/**
 * Camera modes the user picks: orbit around a target, or roam freely (look around, walk).
 * A third, internal mode 'screen' holds the camera square in front of a media-wall screen.
 */
export const CAMERA_MODES = ['orbit', 'look'];

// Screen close-up.
const SCREEN_EASE = 12;
const SCREEN_DETAIL = 2; // canvas resolution of the screen in close-up

export const QUALITY_TIERS = ['low', 'medium', 'high', 'ultra'];
/** Frame-rate caps offered to the user; 0 means "as fast as the display refreshes". */
export const FPS_CAPS = ['auto', 30, 60, 120, 0];

// dpr: cap on device pixel ratio; msaa: samples of the HDR target; bloom: dual-filter bloom.
// Shadow-map sizes per tier live in environment.js (configureShadows).
const TIER = {
  low: { dpr: 1, msaa: 0, bloom: false, minScale: 0.7 },
  medium: { dpr: 1, msaa: 2, bloom: true, minScale: 0.7 },
  high: { dpr: 1.25, msaa: 4, bloom: true, minScale: 0.7 },
  ultra: { dpr: 1.5, msaa: 4, bloom: true, minScale: 0.75 },
};
const ACTIVE_FPS = 60;
const IDLE_FPS = 30;

// Orbit camera.
const MAX_POLAR = 150 * (Math.PI / 180);
const ZOOM_MIN = 0.8; // closest orbit distance (m)
const ZOOM_MAX = 30; // farthest orbit distance (m)
const ZOOM_ANCHOR_MIN = 0.45; // zooming in stops this far from the surface under the pointer
const ZOOM_RATE = 0.0013; // log-distance per wheel pixel
const ZOOM_EASE = 14; // 1/s
const ARM_EASE = 7; // 1/s, how fast a pulled-in view backs out again
const ARM_MIN = 0.25;

// GPU names that usually mean a discrete or high-end GPU. Integrated graphics and
// masked names start at "medium"; software renderers start at "low".
const STRONG_GPU = /nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i;
const SOFTWARE_GPU = /swiftshader|llvmpipe|softpipe|software|basic render/i;

/** Default quality tier for this GPU, read from the WebGL renderer string. */
export function detectQuality(gl) {
  try {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
    if (SOFTWARE_GPU.test(name)) return 'low';
    if (STRONG_GPU.test(name)) return 'high';
  } catch {
    // Fall through to the safe default.
  }
  return 'medium';
}

/** Corner brackets of a unit cube centred at the origin; drawn around the hovered object. */
function bracketGeometry(f = 0.24) {
  const pts = [];
  for (const sx of [-0.5, 0.5]) {
    for (const sy of [-0.5, 0.5]) {
      for (const sz of [-0.5, 0.5]) {
        const c = [sx, sy, sz];
        for (let axis = 0; axis < 3; axis++) {
          const e = c.slice();
          e[axis] -= Math.sign(c[axis]) * f;
          pts.push(c[0], c[1], c[2], e[0], e[1], e[2]);
        }
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  return g;
}

/** Optional GPU frame timing (EXT_disjoint_timer_query_webgl2); only runs while requested. */
function createGpuTimer(gl) {
  let ext = null;
  try {
    ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
  } catch {
    ext = null;
  }
  const pending = [];
  const samples = [];
  let active = null;
  return {
    supported: !!ext,
    begin() {
      if (!ext || active || pending.length > 4) return;
      active = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, active);
    },
    end() {
      if (!active) return;
      gl.endQuery(ext.TIME_ELAPSED_EXT);
      pending.push(active);
      active = null;
    },
    poll() {
      if (!ext) return;
      const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
      while (pending.length) {
        const q = pending[0];
        if (!gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) break;
        const ns = gl.getQueryParameter(q, gl.QUERY_RESULT);
        pending.shift();
        gl.deleteQuery(q);
        if (!disjoint) samples.push(ns / 1e6);
      }
    },
    /** Mean GPU milliseconds since the previous call, or null without samples. */
    take() {
      if (!samples.length) return null;
      const v = samples.reduce((a, b) => a + b, 0) / samples.length;
      samples.length = 0;
      return v;
    },
    dispose() {
      if (active) {
        gl.endQuery(ext.TIME_ELAPSED_EXT);
        gl.deleteQuery(active);
        active = null;
      }
      for (const q of pending) gl.deleteQuery(q);
      pending.length = 0;
    },
  };
}

/**
 * Mount the factory into `container` (which must be position: relative and sized).
 * opts: { quality ('auto' | tier), fps ('auto' | 30 | 60 | 120 | 0), demo, look ('dusk' | 'day'),
 *         brightness (0.6..1.6), onHover, onSelect, onPerf, onError, onFocus, onActive, onReady,
 *         onMode(mode), onScreen(id | null) }.
 * onMode reports 'orbit', 'look' or 'screen'; onScreen the media-wall screen in close-up.
 * onPerf receives once per second: { fps, target, slow, scale, minScale, cpuMs, gpuMs, calls, triangles, width, height, cap }.
 * The container receives keyboard focus for the roaming camera, so give it a tabIndex.
 * Returns a controller; call dispose() when the view unmounts.
 */
export function createFactoryScene(container, opts = {}) {
  const { onHover, onSelect, onPerf, onError, onFocus, onActive, onReady, onMode, onScreen } = opts;
  let demo = !!opts.demo;
  const reduceMotion = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 'default' lets dual-GPU laptops stay on the integrated GPU; the quality tiers, dynamic
  // resolution and the automatic downgrade keep the frame rate acceptable there.
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'default', stencil: false, alpha: false });
  const autoQuality = detectQuality(renderer.getContext());
  let quality = TIER[opts.quality] ? opts.quality : autoQuality;
  let capSetting = FPS_CAPS.includes(opts.fps) ? opts.fps : 'auto';
  renderer.setClearColor(BACKGROUND, 1);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // Shadows are rendered once and refreshed only when a shadow-casting object moved.
  renderer.shadowMap.autoUpdate = false;
  renderer.info.autoReset = false;
  // A shader that fails on this GPU/driver only hides the objects using it; report it so
  // the view can say so instead of silently missing parts of the scene.
  renderer.debug.onShaderError = (gl, program, vs, fs) => {
    const src = gl.getShaderSource(fs) || '';
    const named = /#define SHADER_NAME (.*)/.exec(src);
    const name = (named && named[1].trim()) || 'shader';
    const log = [gl.getShaderInfoLog(vs), gl.getShaderInfoLog(fs), gl.getProgramInfoLog(program)]
      .map((x) => (x || '').trim()).filter(Boolean).join('\n');
    console.error(`[dsh-work-process-3d] shader "${name}" failed to compile\n${log}`);
    const first = log.split('\n').find((l) => /error/i.test(l)) || log.split('\n')[0] || '';
    if (onError) onError('shader', `${name}: ${first}`.slice(0, 220));
  };
  const gpuTimer = createGpuTimer(renderer.getContext());
  let gpuDetail = false;
  const canvas = renderer.domElement;
  canvas.className = 'dwp3d-gl';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;';
  // Purely visual: the HUD carries the same information as text.
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  const labelLayer = document.createElement('div');
  labelLayer.className = 'dwp3d-labels';
  container.appendChild(labelLayer);

  // Two cameras. `camera` is the control camera: OrbitControls, roaming, presets and flights
  // move it, and it keeps the pose the user asked for. `viewCam` renders: it copies the control
  // pose, except that an orbit view is pulled in towards the target when the glass or the media
  // wall stands in the way (a spring arm), and eases back out once the way is clear.
  // The far plane reaches the city floor at the horizon (6 km) and the far landmark towers.
  const camera = new THREE.PerspectiveCamera(40, 1, 0.2, 9000);
  const viewCam = new THREE.PerspectiveCamera(40, 1, 0.2, 9000);
  // Floors and floor decals live on their own layer so the reflection pass can skip them.
  camera.layers.enable(NO_REFLECT_LAYER);
  viewCam.layers.enable(NO_REFLECT_LAYER);
  const camspace = createCameraSpace();
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  // Wheel zoom is ours (damped, towards the pointer, see onWheel); these limits only bound
  // pinch zoom on touch screens.
  controls.minDistance = 0.5;
  controls.maxDistance = 40;
  controls.zoomToCursor = false;
  // Polar limits are recomputed every frame from the target height (updatePolarLimits);
  // 150° lets the camera drop below a raised target and look up at the ceiling.
  controls.maxPolarAngle = MAX_POLAR;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.7;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.8;

  let world = null;
  let post = null;
  let highlight = null;
  const bracketGeo = bracketGeometry();
  let lastState = null;
  let lastLive = null;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let scale = 1;
  let tween = null;
  let camMode = 'orbit';
  let follow = false;
  let focusId;
  let focusTimer = 0;
  let followZoom = 0;
  let overviewDist = 0; // orbit distance of the overview preset; 0 = measure again
  const focusPt = new THREE.Vector3();
  const _off = new THREE.Vector3();
  let labels = [];
  let labelSpec = [];
  let labelsOn = true;
  let disposed = false;
  let lost = false;
  let readyFired = false;
  let lastInteract = 0;
  let simT = 0;
  let look = LOOK_IDS.includes(opts.look) ? opts.look : DEFAULT_LOOK;
  let brightness = clamp(Number(opts.brightness) || BRIGHTNESS.initial, BRIGHTNESS.min, BRIGHTNESS.max);

  // ── Static shadows ──────────────────────────────────────────
  // The shadow map is baked once. Every half second the casters are compared with their
  // baked transforms; anything that moved stops casting and the map is re-baked (debounced).
  // Objects that start casting after a bake (spawned wafers, carriers) are treated as moving.
  const shadowGuard = { casters: new Map(), next: 0, pending: false, lastBake: -100, bakes: 0 };
  function bakeShadows() {
    shadowGuard.casters.clear();
    shadowGuard.pending = false;
    if (!world || !renderer.shadowMap.enabled) return;
    world.scene.updateMatrixWorld(true);
    world.scene.traverse((o) => {
      if (o.castShadow && (o.isMesh || o.isPoints || o.isLine)) {
        shadowGuard.casters.set(o, { m: o.matrixWorld.clone(), v: o.isInstancedMesh ? o.instanceMatrix.version : 0 });
      }
    });
    renderer.shadowMap.needsUpdate = true;
    shadowGuard.lastBake = simT;
    shadowGuard.bakes += 1;
  }
  function checkShadows() {
    if (!world || !renderer.shadowMap.enabled || simT < shadowGuard.next) return;
    shadowGuard.next = simT + 0.5;
    let changed = false;
    for (const [o, rec] of shadowGuard.casters) {
      if (!o.castShadow || !attached(o)) {
        shadowGuard.casters.delete(o);
        changed = true;
        continue;
      }
      const moved = !o.matrixWorld.equals(rec.m) || (o.isInstancedMesh && o.instanceMatrix.version !== rec.v);
      if (moved) {
        o.castShadow = false;
        shadowGuard.casters.delete(o);
        changed = true;
      }
    }
    world.scene.traverse((o) => {
      if (o.castShadow && !shadowGuard.casters.has(o)) o.castShadow = false;
    });
    if (changed) shadowGuard.pending = true;
    const gap = shadowGuard.bakes < 4 ? 0.5 : 2;
    if (shadowGuard.pending && simT - shadowGuard.lastBake >= gap) bakeShadows();
  }

  // ── Pipeline ─────────────────────────────────────────────────
  function disposeWorld() {
    if (post) {
      post.dispose();
      post = null;
    }
    if (highlight) {
      highlight.removeFromParent();
      highlight.material.dispose();
      highlight = null;
    }
    if (world) {
      world.dispose();
      world = null;
    }
    shadowGuard.casters.clear();
    renderer.renderLists.dispose();
  }

  function build() {
    const tier = TIER[quality];
    renderer.shadowMap.enabled = quality !== 'low';
    world = buildWorld(renderer, quality, { demo, look, brightness });
    highlight = new THREE.LineSegments(bracketGeo, new THREE.LineBasicMaterial({
      color: 0x2f9bff, transparent: true, opacity: 0.85, depthTest: false, depthWrite: false, toneMapped: false,
    }));
    highlight.name = 'hover-highlight';
    highlight.matrixAutoUpdate = false;
    highlight.frustumCulled = false;
    highlight.renderOrder = 20;
    highlight.visible = false;
    highlight.layers.set(NO_REFLECT_LAYER);
    world.scene.add(highlight);
    post = createPost(renderer, { msaa: tier.msaa, bloom: tier.bloom });
    applyPost();
    scale = 1;
    resize(true);
    if (lastState) world.setState(lastState);
    if (lastLive) world.setLive(lastLive);
    buildLabels();
    camspace.setObjects(world.solids || []);
    overviewDist = 0;
    shadowGuard.bakes = 0;
    shadowGuard.next = simT + 0.5;
    bakeShadows();
    precompile();
  }

  // Compile every material's shader up front (in parallel where the browser supports it), so
  // turning towards the city or the balcony for the first time does not stall a frame.
  function precompile() {
    if (!world || typeof renderer.compileAsync !== 'function') return;
    try {
      world.scene.updateMatrixWorld(true);
      const p = renderer.compileAsync(world.scene, viewCam);
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
      // Shaders then compile on first use, as before.
    }
  }

  function applyPost() {
    if (!post || !world) return;
    if (world.post) post.set(world.post);
    if (reduceMotion) post.set({ grain: 0.006 });
  }

  // ── Orbit limits ─────────────────────────────────────────────
  // The orbit target stays near the machines and clear of walls; when it has to move, the
  // camera moves with it so the view does not swing. The camera height is bounded through the
  // polar angle, and the rendered view is pulled in front of the glass and walls (updateView),
  // so the control camera itself is never shoved around.
  const _clampV = new THREE.Vector2();
  function clampInside(v, r, y0, y1) {
    _clampV.set(v.x - ATRIUM.cx, v.z - ATRIUM.cz);
    if (_clampV.length() > r) {
      _clampV.setLength(r);
      v.x = ATRIUM.cx + _clampV.x;
      v.z = ATRIUM.cz + _clampV.y;
    }
    v.y = clamp(v.y, y0, y1);
  }
  function placeTarget(T) {
    clampInside(T, CAMERA_LIMIT.targetR, CAMERA_LIMIT.targetYMin, CAMERA_LIMIT.targetYMax);
    camspace.keepClear(T, TARGET_CLEARANCE);
    clampInside(T, CAMERA_LIMIT.targetR, CAMERA_LIMIT.targetYMin, CAMERA_LIMIT.targetYMax);
    return T;
  }
  const _t0 = new THREE.Vector3();
  function clampTarget() {
    const T = controls.target;
    _t0.copy(T);
    placeTarget(T);
    if (T.x !== _t0.x || T.y !== _t0.y || T.z !== _t0.z) camera.position.add(_t0.subVectors(T, _t0));
  }
  function updatePolarLimits() {
    const T = controls.target;
    const L = Math.max(1e-3, camera.position.distanceTo(T));
    const lo = clamp((CAMERA_LIMIT.yMin + 0.02 - T.y) / L, -1, 1);
    const hi = clamp((CAMERA_LIMIT.yMax - 0.02 - T.y) / L, -1, 1);
    controls.maxPolarAngle = Math.min(MAX_POLAR, Math.acos(lo));
    controls.minPolarAngle = Math.min(Math.acos(hi), controls.maxPolarAngle);
  }

  // ── Spring arm ───────────────────────────────────────────────
  // The view snaps in front of an obstruction at once (never shows the inside of a wall) and
  // backs out smoothly; unobstructed, it is exactly the control camera.
  const arm = { len: 0, pulled: false, easing: false };
  const _arm = new THREE.Vector3();
  function resetArm() {
    arm.len = 0;
    arm.pulled = false;
    arm.easing = false;
  }
  function updateView(dt) {
    let placed = false;
    if (camMode === 'orbit' && !tween) {
      const T = controls.target;
      _arm.subVectors(camera.position, T);
      const L = _arm.length();
      if (L > 1e-4) {
        _arm.divideScalar(L);
        let want = Math.min(L, camspace.containerExit(T, _arm) - 0.02);
        want = Math.min(want, camspace.armLength(T, _arm, want, CAMERA_PAD));
        want = Math.max(want, Math.min(L, ARM_MIN));
        if (!arm.pulled || want < arm.len) arm.len = want;
        else arm.len = Math.min(want, damp(arm.len, want, ARM_EASE, dt));
        if (arm.len > L - 1e-3 && want >= L - 1e-4) arm.len = L;
        arm.pulled = arm.len < L - 1e-4;
        arm.easing = arm.pulled && want > arm.len + 1e-3;
        viewCam.position.copy(T).addScaledVector(_arm, arm.len);
        placed = true;
      }
    }
    if (!placed) {
      viewCam.position.copy(camera.position);
      resetArm();
    }
    viewCam.quaternion.copy(camera.quaternion);
    viewCam.updateMatrixWorld();
  }
  /** Before another controller, a flight or a zoom takes over, start from what is on screen. */
  function adoptView() {
    if (camMode === 'orbit' && !tween && arm.pulled) {
      camera.position.copy(viewCam.position);
      resetArm();
    }
  }

  function applyTargetSize() {
    if (post) post.setSize(Math.round(width * pixelRatio * scale), Math.round(height * pixelRatio * scale));
  }

  function resize(force = false) {
    const w = Math.max(1, Math.floor(container.clientWidth));
    const h = Math.max(1, Math.floor(container.clientHeight));
    const dpr = Math.min((typeof window !== 'undefined' && window.devicePixelRatio) || 1, TIER[quality].dpr);
    if (!force && w === width && h === height && dpr === pixelRatio) return;
    width = w;
    height = h;
    pixelRatio = dpr;
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    applyTargetSize();
    camera.aspect = viewCam.aspect = w / h;
    camera.updateProjectionMatrix();
    viewCam.updateProjectionMatrix();
    overviewDist = 0;
    if (scr.def) {
      // Refit the close-up: it should still show the whole screen at the widest zoom.
      const wasFit = Math.abs(scr.td - scr.fit) < 1e-3;
      scr.fit = screenFit(scr.def);
      if (wasFit) scr.td = scr.fit;
      clampScreen();
    }
  }

  // ── Camera ───────────────────────────────────────────────────
  // Presets are { pos, target, mode? }. Orbit presets are pulled back on narrow views so the
  // framing still fits; roaming presets ('look') are eye positions and keep their exact spot.
  function presetPose(name) {
    const presets = world ? world.presets : null;
    const p = (presets && (presets[name] || presets.overview)) || { pos: [0, 7, 16], target: [0, 2, -1] };
    const target = new THREE.Vector3().fromArray(p.target);
    const pos = new THREE.Vector3().fromArray(p.pos);
    const mode = p.mode === 'look' ? 'look' : 'orbit';
    if (mode === 'orbit') {
      const k = clamp(1.7 / Math.max(0.3, camera.aspect), 1, 2.3);
      pos.sub(target).multiplyScalar(k).add(target);
      clampInside(pos, CAMERA_LIMIT.r, CAMERA_LIMIT.yMin, CAMERA_LIMIT.yMax);
    }
    return { pos, target, mode };
  }
  /** Yaw and pitch (radians) of a camera at `pos` looking at `target`. */
  function aimAngles(pos, target) {
    const dx = target.x - pos.x;
    const dy = target.y - pos.y;
    const dz = target.z - pos.z;
    return { yaw: Math.atan2(-dx, -dz), pitch: Math.atan2(dy, Math.hypot(dx, dz)) };
  }
  const _euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const _dir = new THREE.Vector3();
  function setAim(yaw, pitch) {
    _euler.set(pitch, yaw, 0, 'YXZ');
    camera.quaternion.setFromEuler(_euler);
  }

  /** Switch the active controller without moving the camera. */
  function applyMode(m) {
    if (m === camMode) return;
    adoptView();
    zoom.log = 0;
    const wasScreen = camMode === 'screen';
    camMode = m;
    if (m === 'look') {
      follow = false;
      controls.enabled = false;
      roam.enable();
    } else if (m === 'screen') {
      follow = false;
      controls.enabled = false;
      roam.disable();
    } else {
      roam.disable();
      controls.enabled = true;
    }
    labelLayer.style.visibility = m === 'screen' ? 'hidden' : '';
    if (wasScreen) leaveScreen();
    if (onMode) onMode(m);
  }
  /** Leave roaming: orbit around the point straight ahead, or fly back in from the balcony. */
  function enterOrbit() {
    const inHall = cameraRegion(camera.position) === 'hall';
    applyMode('orbit');
    if (!inHall) {
      flyTo('overview');
      return;
    }
    camera.getWorldDirection(_dir);
    placeTarget(controls.target.copy(camera.position).addScaledVector(_dir, 6));
    updatePolarLimits();
    controls.update();
    resetArm();
  }
  function jumpTo(name) {
    const { pos, target, mode } = presetPose(name);
    tween = null;
    applyMode(mode);
    camera.position.copy(pos);
    if (mode === 'look') {
      const a = aimAngles(pos, target);
      setAim(a.yaw, a.pitch);
      roam.sync();
    } else {
      placeTarget(controls.target.copy(target));
      updatePolarLimits();
      controls.update();
    }
    resetArm();
  }
  // The flight interpolates position and yaw/pitch (no roll) in every mode; an orbit flight
  // hands the target to OrbitControls when it lands.
  function flyTo(name, d = 1.2) {
    if (reduceMotion) {
      jumpTo(name);
      return;
    }
    adoptView();
    zoom.log = 0;
    const { pos, target, mode } = presetPose(name);
    applyMode(mode);
    const a = aimAngles(pos, target);
    flyPose(pos, a.yaw, a.pitch, target, mode, d);
  }
  function flyPose(pos, yaw1, pitch1, target, mode, d = 1.2) {
    _euler.setFromQuaternion(camera.quaternion, 'YXZ');
    tween = {
      t: 0,
      d: reduceMotion ? 1e-3 : d,
      p0: camera.position.clone(),
      p1: pos.clone(),
      yaw0: _euler.y,
      pitch0: _euler.x,
      yaw1,
      pitch1,
      target,
      mode,
    };
  }

  // ── Screen close-up ─────────────────────────────────────────
  // Clicking a media-wall screen (or the 大屏 view) flies the camera square in front of it and
  // redraws that screen at twice the resolution. The wheel zooms toward the pointer, dragging
  // pans across the screen; clicking beside it, or 返回, flies back to where the camera was.
  // The camera pose is (u, v, d): offsets along the screen's right and up axes and the
  // distance from the screen centre, eased toward targets (tu, tv, td).
  // u runs along the curved screen (arc length), so panning slides the camera around the
  // wall at a constant distance and it always looks straight at the screen.
  const scr = { id: null, def: null, u: 0, v: 0, d: 0, tu: 0, tv: 0, td: 0, fit: 0, back: null, moving: false };
  const _sp = new THREE.Vector3();
  const screenDefs = () => (world && world.screenDefs) || [];
  const screenDef = (id) => screenDefs().find((s) => s.id === id) || null;
  const halfTan = () => Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const screenFit = (def) => fitScreen(def, camera.fov, camera.aspect);
  function clampScreen() {
    const def = scr.def;
    if (!def) return;
    scr.td = clamp(scr.td, SCREEN_MIN_D, scr.fit * 1.05);
    const lim = screenPanLimits(def, scr.td, camera.fov, camera.aspect);
    scr.tu = clamp(scr.tu, -lim.u, lim.u);
    scr.tv = clamp(scr.tv, -lim.v, lim.v);
  }
  const screenPose = (out, u, v, d) => screenPosition(scr.def, u, v, d, out);
  function focusScreen(id) {
    const def = screenDef(id);
    if (!def || !world) return false;
    if (camMode !== 'screen') {
      // Come back to what was on screen, not to the pose orbit wanted.
      adoptView();
      scr.back = { mode: camMode, pos: camera.position.clone(), quat: camera.quaternion.clone(), target: controls.target.clone() };
    }
    follow = false;
    applyMode('screen');
    scr.id = id;
    scr.def = def;
    scr.fit = screenFit(def);
    scr.u = scr.tu = 0;
    scr.v = scr.tv = 0;
    scr.d = scr.td = scr.fit;
    scr.moving = false;
    world.setScreenDetail(id, SCREEN_DETAIL);
    flyPose(screenPose(_sp, 0, 0, scr.fit), screenYaw(def.a), 0, null, 'screen', 1.0);
    if (onScreen) onScreen(id);
    touch();
    return true;
  }
  /** Screen state only; applyMode calls this when the camera leaves the close-up. */
  function leaveScreen() {
    scr.id = null;
    scr.def = null;
    scr.back = null;
    scr.moving = false;
    if (world && world.setScreenDetail) world.setScreenDetail(null, 1);
    if (onScreen) onScreen(null);
  }
  function exitScreen() {
    if (camMode !== 'screen') return;
    const back = scr.back;
    applyMode(back ? back.mode : 'orbit');
    if (!back) {
      flyTo('overview');
      return;
    }
    _euler.setFromQuaternion(back.quat, 'YXZ');
    flyPose(back.pos, _euler.y, _euler.x, back.target, back.mode, 1.0);
    touch();
  }
  function stepScreen(dir) {
    const list = screenDefs();
    if (!list.length) return;
    const i = Math.max(0, list.findIndex((s) => s.id === scr.id));
    const next = list[(i + dir + list.length) % list.length];
    focusScreen(next.id);
  }
  function updateScreen(dt) {
    const k = 1 - Math.exp(-SCREEN_EASE * dt);
    scr.u += (scr.tu - scr.u) * k;
    scr.v += (scr.tv - scr.v) * k;
    scr.d += (scr.td - scr.d) * k;
    scr.moving = Math.abs(scr.tu - scr.u) + Math.abs(scr.tv - scr.v) + Math.abs(scr.td - scr.d) > 1e-3;
    screenPose(camera.position, scr.u, scr.v, scr.d);
    setAim(screenYaw(screenAngle(scr.def, scr.u)), 0);
  }
  /** Wheel in close-up: zoom about the point under the pointer. */
  function zoomScreen(step, p) {
    const tv = halfTan();
    const th = tv * Math.max(0.2, camera.aspect);
    const nx = (p.x / width) * 2 - 1;
    const ny = -(p.y / height) * 2 + 1;
    const cu = scr.tu + nx * th * scr.td;
    const cv = scr.tv + ny * tv * scr.td;
    const d1 = clamp(scr.td * Math.exp(step), SCREEN_MIN_D, scr.fit * 1.05);
    const k = d1 / scr.td;
    scr.tu = cu - (cu - scr.tu) * k;
    scr.tv = cv - (cv - scr.tv) * k;
    scr.td = d1;
    clampScreen();
  }
  /** Drag in close-up: the screen follows the pointer. */
  function panScreen(dx, dy) {
    const k = (2 * scr.td * halfTan()) / Math.max(1, height);
    scr.tu -= dx * k;
    scr.tv += dy * k;
    clampScreen();
  }
  const touch = () => {
    lastInteract = performance.now();
  };
  /**
   * The user grabbed the camera mid-flight: keep the current view and hand it to the active
   * controller (orbit around the point straight ahead, or roam from here).
   */
  function interruptTween() {
    const t = tween;
    if (!t) return;
    tween = null;
    if (camMode === 'look') {
      roam.sync();
      return;
    }
    camera.getWorldDirection(_dir);
    const reach = Math.max(1, camera.position.distanceTo(t.target));
    placeTarget(controls.target.copy(camera.position).addScaledVector(_dir, reach));
    resetArm();
  }
  controls.addEventListener('start', () => {
    interruptTween();
    touch();
  });
  controls.addEventListener('change', touch);
  controls.addEventListener('end', touch);

  // Roaming camera; the stage container takes the keyboard focus for walking.
  // Positions pass through camspace.resolve: hall/door/balcony regions, then out of the media
  // wall and the machines, sliding along them.
  const roam = createLookControls(camera, canvas, {
    keyTarget: container,
    clampPosition: (v, prev) => camspace.resolve(v, prev),
    floorY: 0,
    onStart: () => {
      interruptTween();
      touch();
    },
    onChange: touch,
  });

  // ── Labels ───────────────────────────────────────────────────
  function buildLabels() {
    for (const l of labels) l.el.remove();
    labels = [];
    if (!world) return;
    for (const spec of labelSpec) {
      const a = world.labelAnchors.find((x) => x.id === spec.id);
      if (!a) continue;
      const el = document.createElement('div');
      el.className = 'dwp3d-label';
      const title = document.createElement('span');
      title.className = 'dwp3d-label-title';
      title.textContent = spec.text;
      el.appendChild(title);
      if (spec.sub) {
        const sub = document.createElement('span');
        sub.className = 'dwp3d-label-sub';
        sub.textContent = spec.sub;
        el.appendChild(sub);
      }
      labelLayer.appendChild(el);
      labels.push({ id: spec.id, el, anchor: a.anchor, shown: null, tf: '', w: 0, h: 0, sx: 0, sy: 0, dist: 0 });
    }
  }
  const pv = new THREE.Vector3();
  const candidates = [];
  const placed = [];
  function hideLabel(l) {
    if (l.shown !== false) {
      l.el.style.opacity = '0';
      l.shown = false;
    }
  }
  function updateLabels() {
    if (!labelsOn) return;
    candidates.length = 0;
    for (const l of labels) {
      pv.copy(l.anchor).project(viewCam);
      if (!(pv.z < 1 && Math.abs(pv.x) < 1.05 && Math.abs(pv.y) < 1.05)) {
        hideLabel(l);
        continue;
      }
      l.sx = (pv.x * 0.5 + 0.5) * width;
      l.sy = (-pv.y * 0.5 + 0.5) * height;
      l.dist = viewCam.position.distanceTo(l.anchor);
      candidates.push(l);
    }
    // Nearest first; a label that would overlap a nearer one stays hidden.
    candidates.sort((a, b) => a.dist - b.dist);
    placed.length = 0;
    for (const l of candidates) {
      if (!l.w) {
        l.w = l.el.offsetWidth;
        l.h = l.el.offsetHeight;
      }
      const r = { x0: l.sx - l.w / 2 - 3, x1: l.sx + l.w / 2 + 3, y0: l.sy - l.h - 3, y1: l.sy + 7 };
      if (placed.some((p) => r.x0 < p.x1 && r.x1 > p.x0 && r.y0 < p.y1 && r.y1 > p.y0)) {
        hideLabel(l);
        continue;
      }
      placed.push(r);
      const op = clamp(1.45 - l.dist / 24, 0.3, 1).toFixed(2);
      const tf = `translate(${l.sx.toFixed(1)}px, ${l.sy.toFixed(1)}px) translate(-50%, -100%)`;
      if (tf !== l.tf) {
        l.el.style.transform = tf;
        l.tf = tf;
      }
      if (l.shown !== op) {
        l.el.style.opacity = op;
        l.shown = op;
      }
    }
  }

  // ── Pointer: hover and click ────────────────────────────────
  const raycaster = new THREE.Raycaster();
  // Small parts live on the main-camera-only layer (kept out of the floor reflection); still pickable.
  raycaster.layers.enable(NO_REFLECT_LAYER);
  const ndc = new THREE.Vector2();
  let pointer = null;
  let hoverDirty = false;
  let hoverWait = 0;
  let hoverId = null;
  let hoverObj = null;
  let down = null;
  let dragging = false;
  function pick(p) {
    if (!world) return null;
    ndc.set((p.x / width) * 2 - 1, -(p.y / height) * 2 + 1);
    viewCam.updateMatrixWorld();
    raycaster.setFromCamera(ndc, viewCam);
    const hits = raycaster.intersectObjects(world.hoverTargets(), true);
    for (const h of hits) {
      for (let o = h.object; o; o = o.parent) if (o.userData && o.userData.hoverId) return { id: o.userData.hoverId, obj: o, distance: h.distance };
    }
    return null;
  }

  // ── Wheel zoom (orbit) ───────────────────────────────────────
  // Damped. Zooming in heads for whatever is under the pointer (a machine, the floor, a wall,
  // the glass): camera and target are scaled about that point, so it stays under the pointer.
  // Zooming out backs away from the target and stops at the glass. Roaming walks with the
  // wheel instead (controls.js), and pinch zoom on touch screens stays with OrbitControls.
  const zoom = { log: 0, anchor: new THREE.Vector3(), anchored: false };
  const _zd = new THREE.Vector3();
  function zoomAnchor(p) {
    const hit = pick(p); // also aims the raycaster through p
    const ray = raycaster.ray;
    let t = camspace.surfaceHit(ray.origin, ray.direction);
    if (hit && hit.distance < t) t = hit.distance;
    if (!Number.isFinite(t)) return false;
    zoom.anchor.copy(ray.origin).addScaledVector(ray.direction, t);
    return true;
  }
  function applyZoom(dt) {
    if (!zoom.log) return;
    let step = zoom.log * (1 - Math.exp(-ZOOM_EASE * dt));
    if (Math.abs(zoom.log - step) < 1e-3) step = zoom.log;
    zoom.log -= step;
    const T = controls.target;
    const C = camera.position;
    const L = Math.max(1e-3, C.distanceTo(T));
    let s = Math.exp(step);
    if (step < 0) {
      const A = zoom.anchored ? zoom.anchor : T;
      s = Math.max(s, ZOOM_MIN / L, ZOOM_ANCHOR_MIN / Math.max(1e-3, C.distanceTo(A)));
      if (s >= 1) {
        zoom.log = 0;
        return;
      }
      C.sub(A).multiplyScalar(s).add(A);
      if (A !== T) T.sub(A).multiplyScalar(s).add(A);
    } else {
      _zd.subVectors(C, T).divideScalar(L);
      const exit = camspace.containerExit(T, _zd) - 0.02;
      const free = camspace.armLength(T, _zd, Math.min(ZOOM_MAX, exit), CAMERA_PAD, false);
      s = Math.min(s, ZOOM_MAX / L, Math.max(1, (free + 0.5) / L));
      if (s <= 1) {
        zoom.log = 0;
        return;
      }
      C.sub(T).multiplyScalar(s).add(T);
    }
  }
  const onWheel = (e) => {
    if (camMode === 'screen' && world) {
      e.preventDefault();
      e.stopPropagation();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
      const step = clamp(e.deltaY * unit * ZOOM_RATE, -0.6, 0.6);
      if (step && !tween && scr.def) zoomScreen(step, local(e));
      touch();
      return;
    }
    if (camMode !== 'orbit' || !world || !controls.enabled) return; // roaming walks with the wheel
    e.preventDefault();
    e.stopPropagation(); // keep OrbitControls' own, undamped wheel zoom out of it
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
    const step = clamp(e.deltaY * unit * ZOOM_RATE, -0.6, 0.6);
    if (!step) return;
    interruptTween();
    touch();
    if (zoom.log && Math.sign(step) !== Math.sign(zoom.log)) zoom.log = 0;
    if (step < 0) {
      adoptView();
      zoom.anchored = !follow && zoomAnchor(local(e));
    }
    zoom.log = clamp(zoom.log + step, -1.2, 1.2);
  };
  // Capture on the container so the event never reaches OrbitControls on the canvas.
  container.addEventListener('wheel', onWheel, { passive: false, capture: true });
  const local = (e) => {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const onMove = (e) => {
    pointer = local(e);
    hoverDirty = true;
    if (down && Math.hypot(pointer.x - down.x, pointer.y - down.y) > 5) dragging = true;
    if (down && camMode === 'screen' && !tween && scr.def) {
      panScreen(pointer.x - down.lx, pointer.y - down.ly);
      touch();
    }
    if (down) {
      down.lx = pointer.x;
      down.ly = pointer.y;
    }
  };
  const onLeave = () => {
    pointer = null;
    hoverDirty = true;
  };
  const onDown = (e) => {
    const p = local(e);
    down = { ...p, lx: p.x, ly: p.y, t: performance.now() };
    dragging = false;
    touch();
    canvas.style.cursor = 'grabbing';
  };
  const onUp = (e) => {
    const p = local(e);
    const click = down && !dragging && performance.now() - down.t < 450;
    // A click on a screen opens its close-up in every mode; in the close-up a click beside it
    // goes back. Otherwise clicks select only while orbiting: roaming leaves them to the walk
    // controls (double-click walks to a spot), and clicks during a flight are ignored.
    if (click && !tween) {
      const hit = pick(p);
      const sid = hit && String(hit.id).startsWith('screen:') ? String(hit.id).slice(7) : null;
      if (camMode === 'screen') {
        if (!sid) exitScreen();
        else if (sid !== scr.id) focusScreen(sid);
      } else if (sid) {
        focusScreen(sid);
      } else if (camMode === 'orbit' && onSelect) {
        onSelect(hit ? hit.id : null);
      }
    }
    down = null;
    dragging = false;
    hoverDirty = true;
    touch();
    canvas.style.cursor = hoverId ? 'pointer' : 'grab';
  };
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerleave', onLeave);
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onUp);
  // ← / → switch screens in the close-up while the 3D view has the keyboard focus.
  const onKey = (e) => {
    if (camMode !== 'screen' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    e.stopPropagation();
    if (!tween) stepScreen(e.key === 'ArrowLeft' ? -1 : 1);
  };
  container.addEventListener('keydown', onKey);

  function attached(o) {
    let p = o;
    while (p.parent) p = p.parent;
    return !!world && p === world.scene;
  }
  const hlSize = new THREE.Vector3();
  const hlCenter = new THREE.Vector3();
  const hlQuat = new THREE.Quaternion();
  const hlLocal = new THREE.Matrix4();
  const hlBox = new THREE.Box3();
  function placeHighlight(t) {
    if (!highlight) return;
    const o = hoverObj;
    if (!o || o.userData.noHighlight || !attached(o)) {
      highlight.visible = false;
      return;
    }
    o.updateWorldMatrix(true, false);
    if (o.geometry) {
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      o.geometry.boundingBox.getSize(hlSize);
      o.geometry.boundingBox.getCenter(hlCenter);
      hlSize.multiplyScalar(1.06).addScalar(0.03);
      hlLocal.compose(hlCenter, hlQuat.identity(), hlSize);
      highlight.matrix.multiplyMatrices(o.matrixWorld, hlLocal);
    } else {
      hlBox.setFromObject(o);
      hlBox.getSize(hlSize).multiplyScalar(1.06).addScalar(0.03);
      hlBox.getCenter(hlCenter);
      highlight.matrix.compose(hlCenter, hlQuat.identity(), hlSize);
    }
    highlight.matrixWorldNeedsUpdate = true;
    highlight.material.opacity = reduceMotion ? 0.85 : 0.62 + 0.28 * (0.5 + 0.5 * Math.sin(t * 5));
    highlight.visible = true;
  }

  // ── Frame pacing ────────────────────────────────────────────
  // 'auto' renders at 60 fps while something moves (camera, robot, wafers, a running turn)
  // and at 30 fps otherwise. High-refresh displays would otherwise render 144–240 frames
  // per second for no visible gain.
  function frameCap() {
    if (capSetting !== 'auto') return capSetting;
    const active =
      !!tween || follow || !!down || !!zoom.log || arm.easing || roam.active() || scr.moving ||
      performance.now() - lastInteract < 900 || (world && world.busy());
    return active ? ACTIVE_FPS : IDLE_FPS;
  }

  // ── Loop ─────────────────────────────────────────────────────
  let raf = 0;
  let running = false;
  let lastTick = 0;
  let lastRender = 0;
  let lastFrame = 0;
  const perf = { frames: 0, ticks: 0, t: 0, capTime: 0, cpu: 0, calls: 0, tris: 0, slow: 0, good: 0 };
  let inView = true;
  let docVisible = typeof document === 'undefined' || !document.hidden;

  function resetPerf() {
    perf.frames = 0;
    perf.ticks = 0;
    perf.t = 0;
    perf.capTime = 0;
    perf.cpu = 0;
  }

  function reportPerf() {
    const fps = perf.frames / perf.t;
    const tickRate = perf.ticks / perf.t;
    const capAvg = perf.capTime / perf.t;
    const target = Math.max(1, Math.min(capAvg > 0 ? capAvg : tickRate, tickRate));
    const slow = fps < target * 0.85;
    const tier = TIER[quality];
    // Dynamic resolution: shrink the scene image while frames are late, grow it back slowly.
    if (slow) {
      perf.good = 0;
      perf.slow += 1;
      if (perf.slow >= 2 && scale > tier.minScale) {
        scale = Math.max(tier.minScale, Math.round((scale - 0.1) * 100) / 100);
        perf.slow = 0;
        applyTargetSize();
      }
    } else {
      perf.slow = 0;
      if (fps >= target * 0.95) perf.good += 1;
      if (perf.good >= 5 && scale < 1) {
        scale = Math.min(1, Math.round((scale + 0.05) * 100) / 100);
        perf.good = 0;
        applyTargetSize();
      }
    }
    gpuTimer.poll();
    if (onPerf) {
      onPerf({
        fps,
        target,
        slow,
        scale,
        minScale: tier.minScale,
        cpuMs: perf.frames ? perf.cpu / perf.frames : 0,
        gpuMs: gpuDetail ? gpuTimer.take() : null,
        gpuTimer: gpuTimer.supported,
        calls: perf.calls,
        triangles: perf.tris,
        width: Math.round(width * pixelRatio * scale),
        height: Math.round(height * pixelRatio * scale),
        cap: capSetting,
      });
    }
    resetPerf();
  }

  function frame(nowMs) {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    const tickDt = Math.max(0, (nowMs - lastTick) / 1000);
    lastTick = nowMs;
    perf.ticks += 1;
    perf.t += tickDt;
    const cap = frameCap();
    perf.capTime += cap * tickDt;
    if (perf.t >= 1) reportPerf();

    if (cap > 0) {
      const interval = 1000 / cap;
      const elapsed = nowMs - lastRender;
      if (elapsed < interval - 1.5) return;
      // Keep an even cadence; after a stall start counting again from now.
      lastRender = elapsed < interval * 2 ? lastRender + interval : nowMs;
    } else {
      lastRender = nowMs;
    }

    const cpu0 = performance.now();
    const dt = Math.min(0.1, Math.max(0, (nowMs - lastFrame) / 1000));
    lastFrame = nowMs;
    simT += dt;

    if (tween) {
      tween.t += dt;
      const e = easeInOut(Math.min(1, tween.t / tween.d));
      camera.position.lerpVectors(tween.p0, tween.p1, e);
      setAim(angleLerp(tween.yaw0, tween.yaw1, e), lerp(tween.pitch0, tween.pitch1, e));
      if (tween.t >= tween.d) {
        const done = tween;
        tween = null;
        if (done.mode === 'look') roam.sync();
        else if (done.mode === 'orbit') controls.target.copy(done.target);
      }
    } else if (follow && world) {
      focusTimer -= dt;
      if (focusTimer <= 0) {
        focusTimer = 0.4;
        const id = world.focus(focusPt);
        if (!id) focusPt.fromArray(world.presets.overview.target);
        if (id !== focusId) {
          focusId = id;
          followZoom = 1.6;
          if (onFocus) onFocus(id);
        }
      }
      _off.subVectors(camera.position, controls.target);
      controls.target.lerp(focusPt, 1 - Math.exp(-2.4 * dt));
      if (followZoom > 0) {
        followZoom -= dt;
        if (!overviewDist) {
          const o = presetPose('overview');
          overviewDist = o.pos.distanceTo(o.target);
        }
        _off.setLength(damp(_off.length(), focusId ? 6.8 : overviewDist, 2, dt));
      }
      camera.position.copy(controls.target).add(_off);
    }
    // A flight drives the camera itself (and may cross the glass through the open doors).
    if (!tween) {
      if (camMode === 'orbit') {
        applyZoom(dt);
        updatePolarLimits();
        controls.update();
        clampTarget();
      } else if (camMode === 'screen') {
        if (scr.def) updateScreen(dt);
      } else {
        roam.update(dt);
      }
    }
    updateView(dt);
    if (world) world.update(dt, simT, viewCam);

    hoverWait -= dt;
    if (hoverDirty && hoverWait <= 0) {
      hoverWait = 0.08;
      hoverDirty = false;
      let hit = pointer && !down ? pick(pointer) : null;
      // The screen in close-up is not a hover target: dragging pans it.
      if (hit && camMode === 'screen' && hit.id === `screen:${scr.id}`) hit = null;
      const id = hit ? hit.id : null;
      hoverObj = hit ? hit.obj : null;
      if (!down) canvas.style.cursor = id ? 'pointer' : 'grab';
      if (id || hoverId) {
        hoverId = id;
        if (onHover) onHover(id ? { id, x: pointer.x, y: pointer.y } : null);
      }
    }
    placeHighlight(simT);
    checkShadows();

    renderer.info.reset();
    if (gpuDetail) gpuTimer.begin();
    if (post && world) {
      viewCam.updateMatrixWorld();
      world.prerender(viewCam);
      post.render(world.scene, viewCam, reduceMotion ? 0 : simT);
    }
    if (gpuDetail) gpuTimer.end();
    perf.calls = renderer.info.render.calls;
    perf.tris = renderer.info.render.triangles;
    updateLabels();
    perf.frames += 1;
    perf.cpu += performance.now() - cpu0;
    if (!readyFired) {
      readyFired = true;
      if (onReady) onReady();
    }
  }

  function updateRun() {
    const should = !disposed && !lost && inView && docVisible && width > 1 && height > 1;
    if (should && !running) {
      running = true;
      lastTick = lastRender = lastFrame = performance.now();
      resetPerf();
      raf = requestAnimationFrame(frame);
      if (onActive) onActive(true);
    } else if (!should && running) {
      running = false;
      cancelAnimationFrame(raf);
      if (onActive) onActive(false);
    }
  }

  const ro = new ResizeObserver(() => {
    resize();
    updateRun();
  });
  ro.observe(container);
  const io = typeof IntersectionObserver === 'function' ? new IntersectionObserver((entries) => {
    inView = entries.some((e) => e.isIntersecting);
    updateRun();
  }) : null;
  if (io) io.observe(container);
  const onVis = () => {
    docVisible = !document.hidden;
    updateRun();
  };
  document.addEventListener('visibilitychange', onVis);
  const onLost = (e) => {
    e.preventDefault();
    lost = true;
    updateRun();
    if (onError) onError('context-lost');
  };
  const onRestored = () => {
    lost = false;
    disposeWorld();
    build();
    updateRun();
  };
  canvas.addEventListener('webglcontextlost', onLost);
  canvas.addEventListener('webglcontextrestored', onRestored);

  function destroy() {
    if (disposed) return;
    disposed = true;
    running = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    if (io) io.disconnect();
    document.removeEventListener('visibilitychange', onVis);
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerleave', onLeave);
    canvas.removeEventListener('pointerdown', onDown);
    canvas.removeEventListener('pointerup', onUp);
    canvas.removeEventListener('webglcontextlost', onLost);
    canvas.removeEventListener('webglcontextrestored', onRestored);
    container.removeEventListener('wheel', onWheel, { capture: true });
    container.removeEventListener('keydown', onKey);
    controls.dispose();
    roam.dispose();
    try {
      gpuTimer.dispose();
      disposeWorld();
    } finally {
      bracketGeo.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
      labelLayer.remove();
    }
  }

  try {
    resize(true);
    build();
    jumpTo('overview');
  } catch (err) {
    // A failed first build must not leave a half-initialised renderer behind.
    destroy();
    throw err;
  }
  updateRun();

  return {
    setState(state) {
      lastState = state;
      if (world) world.setState(state);
    },
    setLive(live) {
      lastLive = { ...(lastLive || {}), ...live };
      if (world) world.setLive(live);
    },
    /** Mark the shown data as fictional (demo) or real. */
    setDemo(on) {
      demo = !!on;
      if (world) world.setDemo(demo);
    },
    /** Drop everything the previous session or data source left in the scene. */
    resetState() {
      lastState = null;
      if (world) world.resetState();
    },
    getQuality: () => quality,
    /** The tier this GPU gets when the user has not chosen one. */
    autoQuality: () => autoQuality,
    setQuality(q) {
      if (!TIER[q] || q === quality) return;
      quality = q;
      hoverObj = null;
      disposeWorld();
      build();
    },
    getFrameCap: () => capSetting,
    setFrameCap(v) {
      if (FPS_CAPS.includes(v)) capSetting = v;
    },
    getLook: () => look,
    /** Switch between the dusk and day looks without rebuilding the machines. */
    setLook(id) {
      if (!LOOK_IDS.includes(id) || id === look) return;
      look = id;
      if (world && world.setLook(id)) {
        applyPost();
        bakeShadows();
      }
      touch();
    },
    getBrightness: () => brightness,
    setBrightness(v) {
      brightness = clamp(Number(v) || BRIGHTNESS.initial, BRIGHTNESS.min, BRIGHTNESS.max);
      if (world) {
        world.setBrightness(brightness);
        applyPost();
      }
      touch();
    },
    /** GPU timing costs a query per frame, so it only runs while the performance panel is open. */
    setPerfDetail(on) {
      gpuDetail = !!on && gpuTimer.supported;
    },
    setCameraPreset(name) {
      follow = false;
      flyTo(name);
      touch();
    },
    getMode: () => camMode,
    /** 'orbit' or 'look' (roaming). onMode also fires when a preset, Follow or a screen close-up switches modes. */
    setMode(m) {
      if (!CAMERA_MODES.includes(m) || m === camMode) return;
      tween = null;
      if (m === 'look') applyMode('look');
      else enterOrbit();
      touch();
    },
    /** Media-wall screens in order, left to right: [{ id, a, ... }]. */
    screens: () => screenDefs().map((s) => s.id),
    /** Screen in close-up, or null. */
    getScreen: () => scr.id,
    /** Fly square in front of a media-wall screen (sharper text); returns false for an unknown id. */
    focusScreen: (id) => focusScreen(id),
    /** Next (+1) or previous (−1) screen while in the close-up. */
    stepScreen(dir) {
      if (camMode === 'screen' && !tween) stepScreen(dir < 0 ? -1 : 1);
    },
    /** Leave the close-up and fly back to where the camera was. */
    exitScreen,
    setFollow(on) {
      if (on && camMode === 'screen') {
        tween = null;
        applyMode(scr.back ? scr.back.mode : 'orbit');
      }
      if (on && camMode !== 'orbit') {
        if (cameraRegion(camera.position) === 'hall') enterOrbit();
        else jumpTo('overview');
      }
      follow = !!on;
      focusId = undefined;
      focusTimer = 0;
      if (follow) tween = null;
    },
    /** Labels: [{ id, text, sub }] anchored to scene objects. */
    setLabels(list) {
      labelSpec = Array.isArray(list) ? list : [];
      buildLabels();
    },
    setLabelsVisible(on) {
      labelsOn = !!on;
      labelLayer.style.display = labelsOn ? '' : 'none';
    },
    stats: () => (world ? world.stats() : null),
    /** Subagent dock counters for the tooltip: { running, done, failed, stopped, overflow, wf, last }. */
    dockInfo: () => (world ? world.dockInfo() : null),
    dispose: destroy,
  };
}
