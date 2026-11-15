// Headless smoke tests for the 3D scene: builds the whole factory without WebGL
// (stub 2D canvases, no environment map) and drives it with the demo session.
import test from 'node:test';
import assert from 'node:assert/strict';
import { setCanvasFactory } from '../src/client/scene/util.js';

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
const { createDemo } = await import('../src/model/demo.js');
const { initialState, reduce, reduceAll } = await import('../src/model/reducer.js');

function assertFinite(scene) {
  scene.traverse((o) => {
    for (const v of [o.position.x, o.position.y, o.position.z, o.quaternion.x, o.quaternion.y, o.quaternion.z, o.quaternion.w, o.scale.x, o.scale.y, o.scale.z]) {
      if (!Number.isFinite(v)) assert.fail(`non-finite transform on "${o.name || o.type}"`);
    }
  });
}

function countMeshes(scene) {
  let n = 0;
  scene.traverse((o) => {
    if (o.isMesh || o.isInstancedMesh || o.isSprite) n += 1;
  });
  return n;
}

test('world builds at every quality tier and disposes cleanly', () => {
  for (const q of ['low', 'medium', 'high', 'ultra']) {
    const world = buildWorld(null, q, { environment: false });
    assert.ok(countMeshes(world.scene) > 150, `${q}: scene has meshes`);
    assert.ok(world.hoverTargets().length >= 18, `${q}: hover targets`);
    assert.ok(world.labelAnchors.length >= 15, `${q}: label anchors`);
    world.update(1 / 60, 0);
    assertFinite(world.scene);
    world.dispose();
  }
});

test('demo session flows wafers through stations into batches', () => {
  const world = buildWorld(null, 'high', { environment: false });
  const demo = createDemo({});
  const events = demo.prefill(3);
  assert.ok(events.length > 30);
  let state = initialState();
  let i = 0;
  let clock = events[0].time;
  const dt = 1 / 30;
  let t = 0;
  let frames = 0;
  const seen = { deliver: 0, collect: 0, station: 0, out: 0, transfer: 0, maxInflight: 0 };
  const end = events[events.length - 1].time + 90_000;
  world.setLive({ phase: 'generating', tps: 55, balance: 52.8, currency: 'CNY' });
  while (clock < end) {
    let changed = false;
    while (i < events.length && events[i].time <= clock) {
      state = reduce(state, events[i]);
      i += 1;
      changed = true;
    }
    if (changed) world.setState(state);
    world.update(dt, t);
    t += dt;
    clock += dt * 1000;
    frames += 1;
    const st = world.stats();
    if (st.robot === 'deliver') seen.deliver += 1;
    if (st.robot === 'collect') seen.collect += 1;
    if (st.stages.station) seen.station += 1;
    if (st.stages.out) seen.out += 1;
    if (st.transfer) seen.transfer += 1;
    seen.maxInflight = Math.max(seen.maxInflight, st.inflight);
    if (frames % 600 === 0) assertFinite(world.scene);
  }
  assertFinite(world.scene);
  const st = world.stats();
  assert.equal(state.turnCount, 3);
  assert.ok(seen.deliver > 0, 'robot delivered wafers');
  assert.ok(seen.collect > 0, 'robot collected wafers');
  assert.ok(seen.station > 0, 'wafers waited at stations');
  assert.ok(seen.out > 0, 'wafers used the outbound track');
  assert.ok(seen.transfer > 0, 'wafers were loaded into a FOUP');
  assert.equal(st.inflight, 0, `all wafers stored at the end: ${JSON.stringify(st)}`);
  assert.equal(st.robot, 'idle');
  assert.ok(world.hoverTargets().some((o) => String(o.userData.hoverId).startsWith('foup:')), 'batches are hoverable');
  world.dispose();
});

test('labels and hover targets match the naming table', async () => {
  const { MACHINE_INFO, STATION_ORDER } = await import('../src/model/stations.js');
  const world = buildWorld(null, 'medium', { environment: false, demo: true });
  const stations = STATION_ORDER.map((k) => `station:${k}`);
  const anchors = new Set(world.labelAnchors.map((a) => a.id));
  for (const id of ['tank', 'engine', 'robot', 'loadport', 'stocker', ...stations]) assert.ok(anchors.has(id), `label anchor ${id}`);
  const named = new Set([...Object.keys(MACHINE_INFO), ...stations]);
  for (const o of world.hoverTargets()) {
    const id = String(o.userData.hoverId);
    assert.ok(named.has(id) || id.startsWith('foup:'), `hover id ${id} has a name`);
  }
  world.dispose();
});

test('machines stand on the floating islands inside the atrium', async () => {
  const THREE = await import('three');
  const { sdIslands, sdWell, ISLANDS, ATRIUM, MEDIA, CAMERA_LIMIT, mediaScreens, cameraRegion } = await import('../src/client/scene/layout.js');
  const world = buildWorld(null, 'medium', { environment: false });
  world.update(1 / 60, 0);
  world.scene.updateMatrixWorld(true);
  for (const a of world.labelAnchors) assert.ok(sdIslands(a.anchor.x, a.anchor.z) < 0, `${a.id} is above an island`);
  // Everything that stands on the floor must stand on an island (5 cm tolerance).
  const box = new THREE.Box3();
  const machines = new Set(['fuel', 'engine', 'cell', 'stations', 'stocker']);
  for (const top of world.scene.children) {
    if (!machines.has(top.name)) continue;
    top.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || !o.geometry) return;
      box.setFromObject(o);
      if (box.isEmpty() || box.min.y > 0.1 || box.max.y < 0.02) return;
      const ix = Math.min(0.15, (box.max.x - box.min.x) / 4);
      const iz = Math.min(0.15, (box.max.z - box.min.z) / 4);
      for (const x of [box.min.x + ix, box.max.x - ix]) {
        for (const z of [box.min.z + iz, box.max.z - iz]) {
          assert.ok(sdIslands(x, z) < 0.05, `${top.name}/${o.name || o.type} overhangs the island at (${x.toFixed(2)}, ${z.toFixed(2)})`);
        }
      }
    });
  }
  // Islands sit inside the well, apart from the bridges that reach the outer floor.
  for (const s of ISLANDS) {
    if (s.type === 'box') continue;
    const pts = s.type === 'circle' ? [s.c] : [s.a, s.b];
    for (const [cx, cz] of pts) {
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        assert.ok(sdWell(cx + Math.cos(a) * s.r, cz + Math.sin(a) * s.r) < 0, `${s.id} stays inside the well`);
      }
    }
  }
  for (const [name, p] of Object.entries(world.presets)) {
    const region = cameraRegion({ x: p.pos[0], y: p.pos[1], z: p.pos[2] });
    if (p.mode === 'look') {
      assert.ok(region, `${name} roaming preset stands in a walkable region`);
    } else {
      assert.ok(Math.hypot(p.pos[0] - ATRIUM.cx, p.pos[2] - ATRIUM.cz) <= CAMERA_LIMIT.r, `${name} preset camera is inside the glass`);
      assert.ok(p.pos[1] >= CAMERA_LIMIT.yMin && p.pos[1] <= CAMERA_LIMIT.yMax, `${name} preset camera height`);
    }
  }
  for (const s of mediaScreens()) assert.ok(s.a0 >= MEDIA.a0 && s.a1 <= MEDIA.a1, `${s.id} fits on the media wall`);
  world.dispose();
});

test('the roaming camera reaches the balcony only through the open doors', async () => {
  const { ATRIUM, CAMERA_LIMIT, FACADE, BALCONY, cameraRegion, clampCameraPoint } = await import('../src/client/scene/layout.js');
  const at = (deg, r, y) => {
    const a = (deg * Math.PI) / 180;
    return { x: ATRIUM.cx + r * Math.cos(a), y, z: ATRIUM.cz - r * Math.sin(a) };
  };
  const radius = (v) => Math.hypot(v.x - ATRIUM.cx, v.z - ATRIUM.cz);
  const doorMid = ((FACADE.doorA0 + FACADE.doorA1) / 2) * (180 / Math.PI);
  const balconyMid = ((BALCONY.a0 + BALCONY.a1) / 2) * (180 / Math.PI);

  assert.equal(cameraRegion(at(200, 10, 1.6)), 'hall');
  assert.equal(cameraRegion(at(doorMid, 22, 1.6)), 'door');
  assert.equal(cameraRegion(at(balconyMid, 24, 1.6)), 'balcony');
  assert.equal(cameraRegion(at(180, 23, 1.6)), null, 'no balcony on the left side');
  assert.equal(cameraRegion(at(doorMid, 22, 3.5)), null, 'the door is not full height');

  // Walking into the glass beside the doors stops at the glass.
  const wall = clampCameraPoint(at(250, 22.4, 1.6), at(250, 21.0, 1.6));
  assert.ok(radius(wall) <= CAMERA_LIMIT.r + 1e-6, 'blocked by the glass');
  // Through the doors: hall → door → balcony.
  const door = clampCameraPoint(at(doorMid, 22.1, 1.6), at(doorMid, 21.2, 1.6));
  assert.equal(cameraRegion(door), 'door');
  const out = clampCameraPoint(at(doorMid, 23.0, 1.6), door);
  assert.equal(cameraRegion(out), 'balcony');
  // From the balcony the glass blocks the way back in except at the doors.
  const back = clampCameraPoint(at(250, 21.5, 1.6), at(250, 23.5, 1.6));
  assert.equal(cameraRegion(back), 'balcony');
  assert.ok(radius(back) > CAMERA_LIMIT.r, 'stays outside');
  // The parapet and the canopy bound the balcony.
  const rail = clampCameraPoint(at(balconyMid, 27, 1.6), at(balconyMid, 24, 1.6));
  assert.ok(radius(rail) <= CAMERA_LIMIT.balconyR + 1e-6);
  const roof = clampCameraPoint(at(balconyMid, 24, 6), at(balconyMid, 24, 1.6));
  assert.ok(roof.y <= CAMERA_LIMIT.balconyYMax + 1e-6);
  // The hall keeps the camera between floor and ceiling.
  const low = clampCameraPoint(at(120, 8, -1), at(120, 8, 1));
  assert.ok(low.y >= CAMERA_LIMIT.yMin - 1e-6);
});

test('looks and brightness change the post settings without a rebuild', () => {
  const world = buildWorld(null, 'high', { environment: false, look: 'dusk' });
  assert.equal(world.getLook(), 'dusk');
  const dusk = world.post;
  assert.equal(world.setLook('day'), true);
  assert.equal(world.getLook(), 'day');
  assert.equal(world.setLook('day'), false);
  assert.notDeepEqual(world.post, dusk);
  world.setBrightness(1.4);
  assert.ok(Math.abs(world.post.exposure - 1.4) < 1e-9, 'brightness scales exposure');
  world.setBrightness(99);
  assert.ok(world.post.exposure <= 1.6 + 1e-9, 'brightness is clamped');
  world.setLive({ phase: 'generating', tps: 60 });
  for (let k = 0; k < 60; k++) world.update(1 / 30, k / 30);
  assertFinite(world.scene);
  world.dispose();
});

test('first sync places history without animation and survives a reset', () => {
  const demo = createDemo({});
  const state = reduceAll(initialState(), demo.prefill(2));
  const world = buildWorld(null, 'medium', { environment: false });
  world.setState(state);
  for (let k = 0; k < 150; k++) world.update(1 / 30, k / 30);
  assert.equal(world.stats().inflight, 0);
  const foups = world.hoverTargets().filter((o) => String(o.userData.hoverId).startsWith('foup:'));
  assert.ok(foups.length >= 2, 'finished batches are on the stocker');
  // A shorter history (new session) clears the floor.
  world.setState(initialState());
  for (let k = 0; k < 30; k++) world.update(1 / 30, k / 30);
  assert.equal(world.stats().inflight, 0);
  assertFinite(world.scene);
  world.dispose();
});
