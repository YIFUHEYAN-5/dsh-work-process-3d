// Machines restyled for the white atrium: palette, holo readouts, console display, labels.
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
const { createMaterials } = await import('../src/client/scene/materials.js');
const { buildStations, HOLO_Y } = await import('../src/client/scene/stations.js');
const { buildEngine, CONSOLE_PX } = await import('../src/client/scene/engine.js');
const { buildWorld, CAMERA_PRESETS } = await import('../src/client/scene/world.js');
const { solidsFromScene } = await import('../src/client/scene/camspace.js');
const { initialState, reduceAll } = await import('../src/model/reducer.js');
const { STATION_ORDER } = await import('../src/model/stations.js');

const { M } = createMaterials('medium');
const fx = { sparks() {}, puff() {} };
// Materials of the first, workshop-style drawing that the atrium palette replaces. Brushed
// aluminium stays on station details; the engine housings turn to ceramic as well.
const WORKSHOP = ['orange', 'hazard', 'blue', 'rubber', 'darkSteel', 'brass', 'ceramic', 'aluDark', 'steel'];

function materialsOf(root) {
  const out = new Set();
  root.traverse((o) => {
    if (o.isMesh || o.isSprite) for (const m of [].concat(o.material)) out.add(m);
  });
  return out;
}

const T0 = Date.UTC(2026, 10, 15, 12, 0, 0);
const ev = (type, data, i) => ({ type, seq: i, time: T0 + i * 100, data });
function sessionWith(calls) {
  const events = [
    ev('request/header', { header: { config: { provider: 'deepseek', model: 'deepseek-flash' } }, reason: 'initial' }, 1),
    ev('turn/start', { turn: 1 }, 2),
    ev('step/start', { turn: 1, step: 1 }, 3),
  ];
  calls.forEach(([name, args, result], i) => {
    events.push(ev('tool/call', { turn: 1, step: 1, callId: `c${i}`, name, arguments: JSON.stringify(args) }, 10 + i * 2));
    if (result) events.push(ev('tool/result', { turn: 1, step: 1, message: { role: 'tool', toolCallId: `c${i}`, isError: result === 'error' } }, 11 + i * 2));
  });
  return reduceAll(initialState(), events);
}

test('stations and the engine wear the atrium palette', () => {
  const stations = buildStations(M, fx);
  const engine = buildEngine(M);
  for (const root of [stations.root, engine.root]) {
    const banned = root === engine.root ? [...WORKSHOP, 'alu'] : WORKSHOP;
    for (const m of materialsOf(root)) {
      assert.ok(!m.isMeshPhysicalMaterial, `${root.name}: no physical workshop plastics left`);
      for (const key of banned) assert.notEqual(m, M[key], `${root.name} still uses M.${key}`);
    }
  }
});

test('every station carries a holo readout above its machine', () => {
  const stations = buildStations(M, fx);
  stations.root.updateMatrixWorld(true);
  const solids = solidsFromScene(stations.root);
  for (const s of stations.list) {
    const holo = s.holo;
    assert.ok(holo && holo.isMesh, `${s.kind} has a holo`);
    assert.equal(holo.renderOrder, 3);
    assert.ok(holo.material.transparent && holo.material.depthWrite === false);
    assert.equal(holo.castShadow, false);
    const hb = new THREE.Box3().setFromObject(holo);
    // Nothing solid of the machine reaches into the readout (light beams may pass through).
    s.root.traverse((o) => {
      if (!o.isMesh || o === holo || o.material.visible === false || o.material.blending === THREE.AdditiveBlending) return;
      const b = new THREE.Box3().setFromObject(o);
      assert.ok(b.max.y < hb.min.y, `${s.kind}: ${o.name || o.type} (top ${b.max.y.toFixed(2)}) stays below the holo (${hb.min.y.toFixed(2)})`);
    });
    assert.ok(s.anchor.y > hb.max.y, `${s.kind}: the label sits above the holo`);
    // The readout is see-through for the camera: it does not grow the station's solid.
    const solid = solids.find((x) => x.id === `station:${s.kind}`);
    assert.ok(solid && solid.max.y < HOLO_Y - 0.1, `${s.kind}: solid stops below the holo`);
  }
});

test('the holo readouts count calls per station and keep the latest outcomes', () => {
  const stations = buildStations(M, fx);
  const state = sessionWith([
    ['write', { file_path: 'a.js', content: 'a\n' }, 'ok'],
    ['write', { file_path: 'b.js', content: 'b\n' }, 'error'],
    ['write', { file_path: 'c.js', content: 'c\n' }],
  ]);
  stations.setStats(state);
  const kind = state.calls[0].kind;
  const r = stations.byKind[kind].readout();
  assert.equal(r.count, 3);
  assert.deepEqual(r.history, ['ok', 'error', 'running']);
  for (const other of STATION_ORDER.filter((k) => k !== kind)) assert.equal(stations.byKind[other].readout().count, 0);
  const many = sessionWith(Array.from({ length: 12 }, (_, i) => ['write', { file_path: `f${i}.js`, content: '' }, 'ok']));
  stations.setStats(many);
  assert.equal(stations.byKind[kind].readout().history.length, 8, 'only the latest 8 outcomes are shown');
  stations.setStats(null);
  assert.equal(stations.byKind[kind].readout().count, 0);
  assert.deepEqual(stations.byKind[kind].readout().history, []);
});

test('in the world the readouts face the camera and labels report live state', () => {
  const world = buildWorld(null, 'medium', { environment: false });
  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.2, 9000);
  const p = CAMERA_PRESETS.stations;
  camera.position.set(...p.pos);
  camera.lookAt(new THREE.Vector3(...p.target));
  camera.updateMatrixWorld(true);
  const state = sessionWith([['write', { file_path: 'a.js', content: 'a\n' }]]);
  const kind = state.calls[0].kind;
  world.setState(state);
  for (let i = 0; i < 90; i++) world.update(1 / 60, i / 60, camera);
  world.scene.updateMatrixWorld(true);
  const normal = new THREE.Vector3();
  const pos = new THREE.Vector3();
  for (const k of STATION_ORDER) {
    const holo = world.scene.getObjectByName(`holo-${k}`);
    holo.getWorldPosition(pos);
    normal.set(0, 0, 1).applyQuaternion(holo.getWorldQuaternion(new THREE.Quaternion()));
    const toCam = camera.position.clone().sub(pos).normalize();
    assert.ok(normal.dot(toCam) > 0.99, `holo-${k} faces the camera`);
  }
  const anchors = world.labelAnchors.filter((a) => a.id.startsWith('station:'));
  assert.equal(anchors.length, STATION_ORDER.length);
  for (const a of anchors) {
    assert.ok(a.near > 3, `${a.id} steps aside up close`);
    assert.match(a.accent, /^#[0-9a-f]{6}$/i);
  }
  assert.equal(world.labelState(`station:${kind}`), 'working');
  const idle = STATION_ORDER.find((k) => k !== kind);
  assert.equal(world.labelState(`station:${idle}`), '');
  assert.equal(world.labelState('dock'), '');
  assert.equal(world.labelState('tank'), '');
  world.dispose();
});

test('the console shows one digital display and repaints at a limited rate', () => {
  const engine = buildEngine(M);
  let instanced = 0;
  let display = null;
  engine.root.traverse((o) => {
    if (o.isInstancedMesh) instanced++;
    const map = o.isMesh && o.material.emissiveMap;
    if (map && map.image && map.image.width === CONSOLE_PX[0] && map.image.height === CONSOLE_PX[1]) display = map;
  });
  assert.equal(instanced, 0, 'the odometer drums are gone');
  assert.ok(display, 'the console display exists');
  const s = (miss) => ({ phase: 'generating', tps: 42, ctx: 0.3, counters: { miss, hit: 0, output: 0, reasoning: 0, cost: 0.01 }, errorPulse: false });
  let v = display.version;
  engine.update(1 / 60, 10, s(1000));
  assert.ok(display.version > v, 'a change repaints');
  v = display.version;
  engine.update(1 / 60, 10.05, s(5000));
  assert.equal(display.version, v, 'not again within 0.15 s');
  engine.update(1 / 60, 10.3, s(5000));
  assert.ok(display.version > v, 'repaints once the interval has passed');
  v = display.version;
  // Settle the rolling counters, then an unchanged reading does not repaint.
  for (let i = 0; i < 400; i++) engine.update(1 / 60, 11 + i / 60, s(5000));
  v = display.version;
  engine.update(1 / 60, 20, s(5000));
  engine.update(1 / 60, 21, s(5000));
  assert.equal(display.version, v, 'steady values cost nothing');
});
