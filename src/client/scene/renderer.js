import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildWorld } from './world.js';
import { createPost } from './post.js';
import { BACKGROUND } from './environment.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import { ATRIUM, CAMERA_LIMIT, cameraRegion, clampCameraPoint } from './layout.js';
import { BRIGHTNESS, DEFAULT_LOOK, LOOK_IDS } from './looks.js';
import { createLookControls } from './controls.js';
import { angleLerp, clamp, damp, easeInOut, lerp } from './util.js';

/** Camera modes: orbit around a target, or roam freely (look around, walk). */
export const CAMERA_MODES = ['orbit', 'look'];

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
 *         onMode(mode) }.
 * onPerf receives once per second: { fps, target, slow, scale, minScale, cpuMs, gpuMs, calls, triangles, width, height, cap }.
 * The container receives keyboard focus for the roaming camera, so give it a tabIndex.
 * Returns a controller; call dispose() when the view unmounts.
 */
export function createFactoryScene(container, opts = {}) {
  const { onHover, onSelect, onPerf, onError, onFocus, onActive, onReady, onMode } = opts;
  const demo = !!opts.demo;
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

  // Far plane covers the city outside the atrium; the sky dome is drawn at the far plane.
  const camera = new THREE.PerspectiveCamera(40, 1, 0.2, 700);
  // Floors and floor decals live on their own layer so the reflection pass can skip them.
  camera.layers.enable(NO_REFLECT_LAYER);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 2.2;
  controls.maxDistance = 26;
  controls.zoomToCursor = true;
  // Up to 150° so the camera can drop below a raised target and look up at the ceiling.
  controls.maxPolarAngle = 150 * (Math.PI / 180);
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
  const focusPt = new THREE.Vector3();
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
    shadowGuard.bakes = 0;
    shadowGuard.next = simT + 0.5;
    bakeShadows();
  }

  function applyPost() {
    if (!post || !world) return;
    if (world.post) post.set(world.post);
    if (reduceMotion) post.set({ grain: 0.006 });
  }

  // Keep the camera inside the atrium (glass wall, floor, ceiling) and the orbit target near
  // the machines; OrbitControls alone would let a zoom or pan leave the building.
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
  function clampCamera() {
    clampInside(controls.target, CAMERA_LIMIT.targetR, CAMERA_LIMIT.targetYMin, CAMERA_LIMIT.targetYMax);
    clampInside(camera.position, CAMERA_LIMIT.r, CAMERA_LIMIT.yMin, CAMERA_LIMIT.yMax);
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
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
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
    camMode = m;
    if (m === 'look') {
      follow = false;
      controls.enabled = false;
      roam.enable();
    } else {
      roam.disable();
      controls.enabled = true;
    }
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
    controls.target.copy(camera.position).addScaledVector(_dir, 6);
    clampInside(controls.target, CAMERA_LIMIT.targetR, CAMERA_LIMIT.targetYMin, CAMERA_LIMIT.targetYMax);
    controls.update();
    clampCamera();
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
      controls.target.copy(target);
      controls.update();
      clampCamera();
    }
  }
  // The flight interpolates position and yaw/pitch (no roll) in both modes; an orbit flight
  // hands the target to OrbitControls when it lands.
  function flyTo(name, d = 1.2) {
    if (reduceMotion) {
      jumpTo(name);
      return;
    }
    const { pos, target, mode } = presetPose(name);
    applyMode(mode);
    _euler.setFromQuaternion(camera.quaternion, 'YXZ');
    const a = aimAngles(pos, target);
    tween = {
      t: 0,
      d,
      p0: camera.position.clone(),
      p1: pos,
      yaw0: _euler.y,
      pitch0: _euler.x,
      yaw1: a.yaw,
      pitch1: a.pitch,
      target,
      mode,
    };
  }
  const touch = () => {
    lastInteract = performance.now();
  };
  controls.addEventListener('start', () => {
    tween = null;
    touch();
  });
  controls.addEventListener('change', touch);
  controls.addEventListener('end', touch);

  // Roaming camera; the stage container takes the keyboard focus for walking.
  const roam = createLookControls(camera, canvas, {
    keyTarget: container,
    clampPosition: clampCameraPoint,
    floorY: 0,
    onStart: () => {
      tween = null;
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
      pv.copy(l.anchor).project(camera);
      if (!(pv.z < 1 && Math.abs(pv.x) < 1.05 && Math.abs(pv.y) < 1.05)) {
        hideLabel(l);
        continue;
      }
      l.sx = (pv.x * 0.5 + 0.5) * width;
      l.sy = (-pv.y * 0.5 + 0.5) * height;
      l.dist = camera.position.distanceTo(l.anchor);
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
    camera.updateMatrixWorld();
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(world.hoverTargets(), true);
    for (const h of hits) {
      for (let o = h.object; o; o = o.parent) if (o.userData && o.userData.hoverId) return { id: o.userData.hoverId, obj: o };
    }
    return null;
  }
  const local = (e) => {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const onMove = (e) => {
    pointer = local(e);
    hoverDirty = true;
    if (down && Math.hypot(pointer.x - down.x, pointer.y - down.y) > 5) dragging = true;
  };
  const onLeave = () => {
    pointer = null;
    hoverDirty = true;
  };
  const onDown = (e) => {
    down = { ...local(e), t: performance.now() };
    dragging = false;
    touch();
    canvas.style.cursor = 'grabbing';
  };
  const onUp = (e) => {
    const p = local(e);
    // While roaming, clicks are left to the walk controls (double-click walks to a spot).
    if (camMode === 'orbit' && down && !dragging && performance.now() - down.t < 450 && onSelect) {
      const hit = pick(p);
      onSelect(hit ? hit.id : null);
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
    if (!o || !attached(o)) {
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
    const active = !!tween || follow || !!down || roam.active() || performance.now() - lastInteract < 900 || (world && world.busy());
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
        else controls.target.copy(done.target);
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
      const off = camera.position.clone().sub(controls.target);
      controls.target.lerp(focusPt, 1 - Math.exp(-2.4 * dt));
      if (followZoom > 0) {
        followZoom -= dt;
        const want = focusId ? 6.8 : presetPose('overview').pos.distanceTo(presetPose('overview').target);
        off.setLength(damp(off.length(), want, 2, dt));
      }
      camera.position.copy(controls.target).add(off);
    }
    // A flight drives the camera itself (and may cross the glass through the open doors).
    if (!tween) {
      if (camMode === 'orbit') {
        controls.update();
        clampCamera();
      } else {
        roam.update(dt);
      }
    }
    if (world) world.update(dt, simT, camera);

    hoverWait -= dt;
    if (hoverDirty && hoverWait <= 0) {
      hoverWait = 0.08;
      hoverDirty = false;
      const hit = pointer && !down ? pick(pointer) : null;
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
      camera.updateMatrixWorld();
      world.prerender(camera);
      post.render(world.scene, camera, reduceMotion ? 0 : simT);
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
    /** 'orbit' or 'look' (roaming). onMode also fires when a preset or Follow switches modes. */
    setMode(m) {
      if (!CAMERA_MODES.includes(m) || m === camMode) return;
      tween = null;
      if (m === 'look') applyMode('look');
      else enterOrbit();
      touch();
    },
    setFollow(on) {
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
    dispose: destroy,
  };
}
