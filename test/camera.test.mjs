// Camera space (camspace.js): where the orbit and roaming cameras may go.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { setCanvasFactory } from '../src/client/scene/util.js';

// Minimal 2D canvas so the world can be built without a browser (labels, screens).
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
const { createCameraSpace, CAMERA_PAD, TARGET_CLEARANCE } = await import('../src/client/scene/camspace.js');
const { ATRIUM, MEDIA, WELL, CAMERA_LIMIT, arcPoint, cameraRegion } = await import('../src/client/scene/layout.js');

const world = buildWorld(null, 'medium', { environment: false });
const space = createCameraSpace(world.solids);
const MID = (MEDIA.a0 + MEDIA.a1) / 2;
const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;

function solid(id) {
  const s = world.solids.find((x) => x.id === id);
  assert.ok(s, `solid ${id}`);
  return s;
}
function centreOf(s) {
  return new THREE.Vector3().addVectors(s.min, s.max).multiplyScalar(0.5).applyMatrix4(s.mat);
}

test.after(() => world.dispose());

test('machines are measured as camera solids', () => {
  for (const id of ['tank', 'fuel-hmi', 'engine', 'dispenser', 'load-port', 'chamber:LL-1', 'chamber:UL-1']) solid(id);
  assert.equal(world.solids.filter((s) => s.id.startsWith('station:')).length, 10);
  for (const s of world.solids) {
    for (const k of ['x', 'y', 'z']) assert.ok(s.max[k] > s.min[k], `${s.id} has a size along ${k}`);
    assert.ok(s.max.y < 4, `${s.id} is machine-sized`);
  }
});

test('the media wall is solid and the space in front of it is free', () => {
  assert.equal(space.contains(arcPoint(MID, 11.0, 4)), false);
  assert.equal(space.contains(arcPoint(MID, 12.6, 4)), true);
  assert.equal(space.contains(arcPoint(MID, 12.0, 1.0)), true, 'compute modules under the screens');
  // Behind the wall (the future living area) is free again.
  assert.equal(space.contains(arcPoint(MID, 15.0, 2.0)), false);
});

test('a roaming step into a wall or a machine ends outside it, still in the hall', () => {
  const prev = arcPoint(MID, 11.6, 1.65);
  const next = space.resolve(arcPoint(MID, 12.7, 1.65), prev);
  assert.equal(space.contains(next), false);
  assert.equal(cameraRegion(next), 'hall');
  const hub = new THREE.Vector3(2.6, 1.0, -1.0); // over the robot, which the camera may pass
  assert.equal(space.contains(hub), false);
  for (const id of ['engine', 'station:archive', 'station:terminal', 'tank', 'load-port']) {
    const c = centreOf(solid(id));
    assert.equal(space.contains(c), true, `${id} centre is inside`);
    const out = space.resolve(c.clone(), hub);
    assert.equal(space.contains(out), false, `${id}: the camera ends outside`);
    assert.equal(cameraRegion(out), 'hall');
  }
});

test('the orbit arm stops in front of the wall and at the glass', () => {
  const T = arcPoint(MID, 8, 4);
  const outward = new THREE.Vector3(Math.cos(MID), 0, -Math.sin(MID));
  const len = space.armLength(T, outward, 12);
  const wallFront = 12.36 - 8 - CAMERA_PAD;
  assert.ok(len <= wallFront + 1e-3 && len > wallFront - 0.03, `arm ${len.toFixed(3)} vs ${wallFront.toFixed(3)}`);
  // Behind a machine the arm is shortened only when the camera would end inside it.
  const hub = new THREE.Vector3(2.6, 1.0, -1.0);
  const c = centreOf(solid('station:archive'));
  const dir = c.clone().sub(hub);
  const d = dir.length();
  dir.divideScalar(d);
  assert.ok(space.armLength(hub, dir, d) < d - 0.2, 'pulled in front of the station');
  assert.ok(near(space.armLength(hub, dir, d, CAMERA_PAD, false), d), 'no walls in between');
  assert.ok(space.armLength(hub, dir, d + 6) > d, 'a camera beyond the station is not pulled in front of it');
  // The hall: glass radius, floor and ceiling heights.
  const centre = new THREE.Vector3(ATRIUM.cx, 3, ATRIUM.cz);
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(1, 0, 0)), CAMERA_LIMIT.r));
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(0, 1, 0)), CAMERA_LIMIT.yMax - 3));
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(0, -1, 0)), 3 - CAMERA_LIMIT.yMin));
});

test('zoom finds the floor, the data pool, the ceiling and the screens', () => {
  const down = new THREE.Vector3(0, -1, 0);
  assert.ok(near(space.surfaceHit(new THREE.Vector3(2.6, 5, -1), down), 5), 'island top');
  assert.ok(near(space.surfaceHit(new THREE.Vector3(6, 5, -5), down), 5 + WELL.depth), 'data pool');
  assert.ok(near(space.surfaceHit(new THREE.Vector3(2.6, 5, -1), new THREE.Vector3(0, 1, 0)), ATRIUM.h - 5), 'ceiling');
  const T = arcPoint(MID, 6, MEDIA.screenY);
  const outward = new THREE.Vector3(Math.cos(MID), 0, -Math.sin(MID));
  assert.ok(near(space.surfaceHit(T, outward), MEDIA.screenR - 6, 1e-4), 'screen front');
});

test('orbit targets are kept off the walls', () => {
  const t = space.keepClear(arcPoint(MID, 12.5, 4), TARGET_CLEARANCE);
  assert.equal(space.contains(t, TARGET_CLEARANCE - 1e-3), false);
});

test('the living quarters fit behind the media wall and offer anchor points', () => {
  const living = world.scene.getObjectByName('living');
  assert.ok(living, 'living group');
  world.scene.updateMatrixWorld(true);
  const rOf = (x, z) => Math.hypot(x - ATRIUM.cx, z - ATRIUM.cz);
  // Every vertex stays between the back of the media wall and the glass, and below the wall top.
  const v = new THREE.Vector3();
  let rMin = Infinity;
  let rMax = 0;
  let yMax = -Infinity;
  living.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh) return;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      const r = rOf(v.x, v.z);
      rMin = Math.min(rMin, r);
      rMax = Math.max(rMax, r);
      yMax = Math.max(yMax, v.y);
    }
  });
  assert.ok(rMin > MEDIA.back + 0.5, `clear of the wall (${rMin.toFixed(2)})`);
  assert.ok(rMax < ATRIUM.r - 0.6, `inside the glass (${rMax.toFixed(2)})`);
  assert.ok(yMax < MEDIA.top, `lower than the media wall (${yMax.toFixed(2)})`);

  const poses = new Set(['sit', 'sleep', 'eat', 'work', 'stand']);
  assert.equal(world.mascotAnchors.length, 7);
  for (const a of world.mascotAnchors) {
    assert.ok(poses.has(a.pose), `${a.id} pose`);
    assert.ok(Number.isFinite(a.yaw), `${a.id} yaw`);
    const r = rOf(a.position.x, a.position.z);
    assert.ok(r > MEDIA.back + 0.5 && r < ATRIUM.r - 0.6, `${a.id} stands in the living area (${r.toFixed(2)})`);
    assert.ok(a.position.y >= 0 && a.position.y < 1, `${a.id} height`);
  }
  for (const id of ['living:bed', 'living:kitchen', 'living:aquarium', 'living:bookshelf', 'living:desk']) solid(id);

  // The preset frames it from inside the hall with nothing in the way.
  const P = world.presets.living;
  const pos = new THREE.Vector3().fromArray(P.pos);
  const tgt = new THREE.Vector3().fromArray(P.target);
  assert.equal(cameraRegion(pos), 'hall');
  assert.equal(space.contains(pos), false);
  assert.ok(rOf(tgt.x, tgt.z) <= CAMERA_LIMIT.targetR, 'target within the orbit limit');
  const dir = pos.clone().sub(tgt);
  const L = dir.length();
  dir.normalize();
  assert.ok(near(space.armLength(tgt, dir, L), L, 1e-3), 'clear line of sight');
  assert.ok(world.labelAnchors.some((l) => l.id === 'living'), 'label');
  assert.ok(world.hoverTargets().some((o) => o.userData.hoverId === 'living'), 'hover');
});
