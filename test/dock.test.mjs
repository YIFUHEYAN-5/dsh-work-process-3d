// Subagent dock (dock.js): drones for running subagents and workflow agents.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { setCanvasFactory } from '../src/client/scene/util.js';

// Minimal 2D canvas so the scene can be built without a browser (labels, screens).
function fakeCanvas(width, height) {
  const canvas = { width, height, style: {}, toDataURL: () => '' };
  const store = {};
  const noop = () => {};
  const gradient = { addColorStop: noop };
  const imageData = (w, h) => ({ data: new Uint8ClampedArray(Math.max(4, w * h * 4)), width: w, height: h });
  const ctx = new Proxy(
    {},
    {
      get(_, prop) {
        if (prop in store) return store[prop];
        if (prop === 'canvas') return canvas;
        if (prop === 'measureText') return (text) => ({ width: String(text).length * 10, actualBoundingBoxAscent: 8, actualBoundingBoxDescent: 2 });
        if (prop === 'createLinearGradient' || prop === 'createRadialGradient' || prop === 'createConicGradient') return () => gradient;
        if (prop === 'createPattern') return () => ({});
        if (prop === 'getImageData') return (x, y, w, h) => imageData(w, h);
        if (prop === 'createImageData') return (a, b) => (typeof a === 'object' ? imageData(a.width, a.height) : imageData(a, b));
        if (prop === 'getLineDash') return () => [];
        return noop;
      },
      set(_, prop, value) {
        store[prop] = value;
        return true;
      },
    },
  );
  canvas.getContext = () => ctx;
  return canvas;
}

setCanvasFactory(fakeCanvas);
const { buildWorld } = await import('../src/client/scene/world.js');
const { buildDock, DOCK, DRONE_COUNT } = await import('../src/client/scene/dock.js');
const { createMaterials } = await import('../src/client/scene/materials.js');
const { createCameraSpace } = await import('../src/client/scene/camspace.js');
const { ISLANDS, MEDIA, CAMERA_LIMIT, ATRIUM, arcPoint, cameraRegion } = await import('../src/client/scene/layout.js');
const { screenFit, screenPosition, screenYaw, screenAngle } = await import('../src/client/scene/screenview.js');
const { createDemo } = await import('../src/model/demo.js');
const { initialState, reduceAll } = await import('../src/model/reducer.js');

const world = buildWorld(null, 'medium', { environment: false });
const { M, tex } = createMaterials('medium');
const PICKUP = new THREE.Vector3(1.8, 2.45, -4.6);

test.after(() => {
  world.dispose();
  for (const m of Object.values(M)) if (m && m.dispose) m.dispose();
  for (const t of Object.values(tex)) if (t && t.dispose) t.dispose();
});

const agent = (id, status = 'running', extra = {}) => ({
  id, name: id, label: `Task ${id}`, kind: 'subagent', mode: 'one-shot', runId: '', seq: -1, phase: '',
  status, startedAt: 0, endedAt: 0, turn: 1, ...extra,
});

/** Step the dock at 60 Hz for `secs`, calling watch(dock, t) after every frame. */
function run(dock, secs, watch, clock = { t: 0 }) {
  const dt = 1 / 60;
  for (let i = 0; i < Math.round(secs * 60); i++) {
    clock.t += dt;
    dock.update(dt, clock.t, null);
    if (watch) watch(dock, clock.t);
  }
  return clock;
}

test('the dock stands on its island and keeps the camera out', () => {
  const island = ISLANDS.find((s) => s.id === 'dock');
  const root = world.scene.getObjectByName('dock');
  assert.ok(root, 'dock group');
  world.scene.updateMatrixWorld(true);
  const v = new THREE.Vector3();
  let rMax = 0;
  let yMin = Infinity;
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.name === 'dock-hover') return;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      rMax = Math.max(rMax, Math.hypot(v.x - island.c[0], v.z - island.c[1]));
      yMin = Math.min(yMin, v.y);
    }
  });
  assert.ok(rMax < island.r - 0.2, `inside the island (${rMax.toFixed(2)} < ${island.r})`);
  assert.ok(yMin >= -1e-6 && yMin < 0.03, `stands on the floor (${yMin.toFixed(3)})`);

  const s = world.solids.find((x) => x.id === 'dock');
  assert.ok(s, 'dock camera solid');
  const space = createCameraSpace(world.solids);
  assert.equal(space.contains(new THREE.Vector3(DOCK.x + 0.5, 1.2, DOCK.z)), true, 'mast area is solid');
  assert.equal(space.contains(new THREE.Vector3(DOCK.x, 3.4, DOCK.z + 2.6)), false, 'air beside the dock is free');

  assert.ok(world.labelAnchors.some((l) => l.id === 'dock'), 'label');
  assert.ok(world.hoverTargets().some((o) => o.userData.hoverId === 'dock'), 'hover');

  // The preset frames it from inside the hall with nothing in the way.
  const P = world.presets.dock;
  const pos = new THREE.Vector3().fromArray(P.pos);
  const tgt = new THREE.Vector3().fromArray(P.target);
  assert.equal(cameraRegion(pos), 'hall');
  assert.equal(space.contains(pos), false);
  assert.ok(Math.hypot(tgt.x - ATRIUM.cx, tgt.z - ATRIUM.cz) <= CAMERA_LIMIT.targetR, 'target within the orbit limit');
  const dir = pos.clone().sub(tgt);
  const L = dir.length();
  dir.normalize();
  assert.ok(Math.abs(space.armLength(tgt, dir, L) - L) < 1e-3, 'clear line of sight');
});

test('a subagent drone collects its capsule at the cobot station, works and lands with the result', () => {
  const dock = buildDock(M, { pickup: PICKUP });
  dock.sync([], []);
  run(dock, 0.5);
  assert.ok(dock.drones().every((d) => d.mode === 'docked'), 'all parked');

  dock.sync([agent('a1')], []);
  const seen = [];
  let atPickup = Infinity;
  let maxY = 0;
  run(dock, 14, (k) => {
    const d = k.drones().find((x) => x.agent === 'a1');
    if (seen[seen.length - 1] !== d.mode) seen.push(d.mode);
    if (d.mode === 'pickup') atPickup = Math.min(atPickup, d.position.distanceTo(PICKUP));
    maxY = Math.max(maxY, d.position.y);
  });
  assert.deepEqual(seen, ['launch', 'toPickup', 'pickup', 'toWork', 'work']);
  assert.ok(atPickup < 0.2, `hovers at the pickup point (${atPickup.toFixed(2)})`);
  assert.ok(maxY < 3.5, `stays low (${maxY.toFixed(2)})`);
  const working = dock.drones().find((x) => x.agent === 'a1');
  assert.ok(working.carry > 0.95, 'carries the capsule');
  const r = Math.hypot(working.position.x - DOCK.x, working.position.z - DOCK.z);
  assert.ok(Math.abs(r - 1.66) < 0.15, `circles on the outer ring (${r.toFixed(2)})`);
  assert.equal(dock.counts().running, 1);

  dock.sync([agent('a1', 'done')], []);
  const after = [];
  // Fly back (~3 s), land, show the result on the pad for 8 s, then free the pad.
  run(dock, 16, (k) => {
    const d = k.drones().find((x) => x.agent === 'a1');
    const mode = d ? d.mode : 'released';
    if (after[after.length - 1] !== mode) after.push(mode);
  });
  assert.deepEqual(after, ['return', 'land', 'result', 'released']);
  const parked = dock.drones();
  assert.ok(parked.every((d) => d.mode === 'docked' && d.carry === 0), 'back on the pads');
  assert.equal(dock.counts().done, 1);
  assert.equal(dock.busy(), false);
  dock.dispose();
});

test('agents already running fly at once, workflow agents take the inner ring, extras queue', () => {
  const dock = buildDock(M, { pickup: PICKUP });
  const wf = (i) => agent(`w${i}`, 'running', { kind: 'workflow', runId: 'run-1', seq: i });
  dock.sync([agent('s1'), wf(0), wf(1)], [{ runId: 'run-1', name: 'verify', status: 'running', startedAt: 0, endedAt: 0, agents: 2, done: 0, failed: 0, phase: 'Verify' }]);
  run(dock, 0.2);
  const list = dock.drones().filter((d) => d.agent);
  assert.equal(list.length, 3);
  assert.ok(list.every((d) => d.mode === 'work' && d.carry === 1), 'working without a launch');
  for (const d of list) {
    const r = Math.hypot(d.position.x - DOCK.x, d.position.z - DOCK.z);
    const want = d.agent.startsWith('w') ? 1.1 : 1.66;
    assert.ok(Math.abs(r - want) < 0.12, `${d.agent} ring ${r.toFixed(2)}`);
  }
  const info = dock.counts();
  assert.equal(info.running, 3);
  assert.equal(info.wf.name, 'verify');

  // Eleven new agents: five free drones launch at once, the three that were busy land first
  // and then take the next queued agents; three agents keep waiting.
  const many = Array.from({ length: 11 }, (_, i) => agent(`m${i}`));
  dock.sync(many, []);
  run(dock, 0.5);
  const runningNow = () => dock.drones().filter((d) => d.agent && d.status === 'running').length;
  assert.equal(runningNow(), DRONE_COUNT - 3);
  assert.equal(dock.counts().overflow, 11 - (DRONE_COUNT - 3));
  run(dock, 12);
  assert.equal(runningNow(), DRONE_COUNT);
  assert.equal(dock.counts().overflow, 11 - DRONE_COUNT);

  dock.reset();
  run(dock, 0.2);
  assert.ok(dock.drones().every((d) => d.mode === 'docked' && !d.agent), 'reset parks every drone');
  assert.equal(dock.counts().running, 0);
  dock.dispose();
});

test('a subagent that is messaged again takes off again', () => {
  const dock = buildDock(M, { pickup: null });
  dock.sync([], []);
  dock.sync([agent('r1')], []);
  run(dock, 6);
  assert.equal(dock.drones().find((d) => d.agent === 'r1').mode, 'work', 'loads on the pad when there is no pickup point');
  dock.sync([agent('r1', 'done')], []);
  run(dock, 1.5);
  assert.equal(dock.drones().find((d) => d.agent === 'r1').mode, 'return');
  dock.sync([agent('r1')], []);
  run(dock, 0.1);
  const d = dock.drones().find((x) => x.agent === 'r1');
  assert.ok(d.mode === 'toWork' || d.mode === 'launch', `back to work (${d.mode})`);
  assert.equal(d.status, 'running');
  dock.dispose();
});

test('drones never fly into the close-up view of the flow screen', () => {
  const dock = buildDock(M, { pickup: PICKUP });
  dock.sync([], []);
  const agents = Array.from({ length: DRONE_COUNT }, (_, i) => (i % 2 ? agent(`a${i}`) : agent(`w${i}`, 'running', { kind: 'workflow', runId: 'r' })));
  dock.sync(agents, []);
  const def = world.screenDefs.find((s) => s.id === 'flow');
  const cams = [16 / 9, 1.25].map((aspect) => {
    const cam = new THREE.PerspectiveCamera(40, aspect, 0.2, 100);
    screenPosition(def, 0, 0, screenFit(def, 40, aspect), cam.position);
    cam.rotation.set(0, screenYaw(screenAngle(def, 0)), 0, 'YXZ');
    cam.updateMatrixWorld(true);
    cam.updateProjectionMatrix();
    return cam;
  });
  const p = new THREE.Vector3();
  let inView = 0;
  run(dock, 25, (k) => {
    for (const d of k.drones()) {
      for (const cam of cams) {
        p.copy(d.position).project(cam);
        if (Math.abs(p.x) < 1.05 && Math.abs(p.y) < 1.05 && p.z > -1 && p.z < 1) inView += 1;
      }
    }
  });
  assert.equal(inView, 0);
  // The fitted camera stays well above the drones' highest ring.
  arcPoint(def.a, MEDIA.screenR, def.y0, p);
  assert.ok(p.y > 3.4, 'screen bottom above the rings');
  dock.dispose();
});

test('the demo sends drones out for its subagents and workflow', () => {
  const demo = createDemo({});
  let s = reduceAll(initialState(), demo.prefill(2));
  s = reduceAll(s, demo.prefill(1));
  assert.ok(s.agents.some((a) => a.kind === 'workflow'), 'workflow agents');
  assert.ok(s.agents.some((a) => a.kind === 'subagent'), 'subagents');
  world.resetState();
  world.setState(s);
  for (let i = 0; i < 30; i++) world.update(1 / 30, i / 30, null);
  const info = world.dockInfo();
  assert.equal(info.running, 0);
  assert.equal(info.done + info.failed, s.agents.length);
  assert.ok(info.failed >= 1, 'the failed workflow check is counted');
});
