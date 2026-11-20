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
const { ATRIUM, MEDIA, WELL, POOL, RAIL, BALCONY, CAMERA_LIMIT, arcPoint, cameraRegion } = await import('../src/client/scene/layout.js');

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

test('the orbit arm stops in front of the wall and at the edge of the walkable space', () => {
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
  // The walkable space: the hall disc beside the balustrade, the balcony sector out to its
  // walkway, the floor and the height limit under the open sky. The exit is found by
  // marching and bisection, so it is exact to about a millimetre.
  const centre = new THREE.Vector3(ATRIUM.cx, 3, ATRIUM.cz);
  const mm = 2e-3;
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(1, 0, 0)), CAMERA_LIMIT.r, mm), 'hall edge');
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(0, 0, 1)), CAMERA_LIMIT.balconyR, mm), 'balcony edge');
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(0, 1, 0)), CAMERA_LIMIT.yMax - 3, mm), 'height limit');
  assert.ok(near(space.containerExit(centre, new THREE.Vector3(0, -1, 0)), 3 - CAMERA_LIMIT.yMin, mm), 'floor');
  assert.equal(space.containerExit(new THREE.Vector3(ATRIUM.cx + 40, 3, ATRIUM.cz), new THREE.Vector3(-1, 0, 0)), 0, 'outside');
});

test('zoom finds the floor, the data pool, the sky pool, the balustrade and the screens', () => {
  const down = new THREE.Vector3(0, -1, 0);
  const up = new THREE.Vector3(0, 1, 0);
  assert.ok(near(space.surfaceHit(new THREE.Vector3(2.6, 5, -1), down), 5), 'island top');
  assert.ok(near(space.surfaceHit(new THREE.Vector3(6, 5, -5), down), 5 + WELL.depth), 'data pool');
  const overPool = arcPoint((POOL.a0 + POOL.a1) / 2, (POOL.r0 + POOL.r1) / 2, 5);
  assert.ok(near(space.surfaceHit(overPool, down), 5 - POOL.water), 'pool water');
  assert.equal(space.surfaceHit(new THREE.Vector3(2.6, 5, -1), up), Infinity, 'the roof is open');
  const T = arcPoint(MID, 6, MEDIA.screenY);
  const outward = new THREE.Vector3(Math.cos(MID), 0, -Math.sin(MID));
  assert.ok(near(space.surfaceHit(T, outward), MEDIA.screenR - 6, 1e-4), 'screen front');
  // The glass balustrade around the hall, and beside the pool; the infinity edge is open.
  const low = new THREE.Vector3(ATRIUM.cx, 0.6, ATRIUM.cz);
  const toward = (a) => new THREE.Vector3(Math.cos(a), 0, -Math.sin(a));
  assert.ok(near(space.surfaceHit(low, toward(0)), RAIL.r, 1e-4), 'balustrade round the hall');
  assert.ok(near(space.surfaceHit(low, toward((BALCONY.a0 + POOL.a0) / 2)), BALCONY.r1 - 0.06, 1e-4), 'balustrade beside the pool');
  assert.equal(space.surfaceHit(low, toward((POOL.a0 + POOL.a1) / 2)), Infinity, 'infinity edge');
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

const { screenFit, screenPanLimits, screenPosition, screenYaw, screenAngle, SCREEN_MIN_D } = await import(
  '../src/client/scene/screenview.js'
);

function screenCam(def, u, v, d, aspect) {
  const cam = new THREE.PerspectiveCamera(40, aspect, 0.2, 100);
  screenPosition(def, u, v, d, cam.position);
  cam.rotation.set(0, screenYaw(screenAngle(def, u)), 0, 'YXZ');
  cam.updateMatrixWorld(true);
  return cam;
}

test('the screen close-up shows each whole screen and pans along the curve', () => {
  const defs = world.screenDefs;
  assert.deepEqual(defs.map((s) => s.id), ['flow', 'main', 'cost']);
  const p = new THREE.Vector3();
  const fwd = new THREE.Vector3();
  for (const aspect of [16 / 9, 1.25, 2.4]) {
    for (const def of defs) {
      const fit = screenFit(def, 40, aspect);
      const cam = screenCam(def, 0, 0, fit, aspect);
      // Corners and edge midpoints of the curved screen land inside the view, in front of the camera.
      for (const a of [def.a0, def.a, def.a1]) {
        for (const y of [def.y0, def.y1]) {
          arcPoint(a, MEDIA.screenR, y, p).project(cam);
          assert.ok(Math.abs(p.x) < 0.99 && Math.abs(p.y) < 0.99, `${def.id} @${aspect.toFixed(2)} corner in view (${p.x.toFixed(2)}, ${p.y.toFixed(2)})`);
          assert.ok(p.z > -1 && p.z < 1, `${def.id} in front`);
        }
      }
      // Fitted, there is next to nothing to pan; at the closest distance most of the screen is reachable.
      const atFit = screenPanLimits(def, fit, 40, aspect);
      assert.ok(atFit.u < 0.3 && atFit.v < 0.3, `${def.id} hardly pans when fitted (${atFit.u.toFixed(2)}, ${atFit.v.toFixed(2)})`);
      const close = screenPanLimits(def, SCREEN_MIN_D, 40, aspect);
      const halfW = ((def.a1 - def.a0) * MEDIA.screenR) / 2;
      assert.ok(close.u > halfW * 0.5, `${def.id} pans when close`);
      // Panning slides around the wall: same distance, still looking straight at it, inside the hall.
      for (const u of [-close.u, 0, close.u]) {
        for (const v of [-close.v, close.v]) {
          for (const d of [SCREEN_MIN_D, fit]) {
            const c = screenCam(def, u, v, d, aspect);
            const r = Math.hypot(c.position.x - ATRIUM.cx, c.position.z - ATRIUM.cz);
            assert.ok(near(r, MEDIA.screenR - d, 1e-6), 'constant distance');
            c.getWorldDirection(fwd);
            arcPoint(screenAngle(def, u), MEDIA.screenR, c.position.y, p).sub(c.position).normalize();
            assert.ok(fwd.dot(p) > 0.9999, 'looks straight at the screen');
            assert.equal(cameraRegion(c.position), 'hall');
            assert.equal(space.contains(c.position), false, `${def.id} close-up pose is free`);
          }
        }
      }
    }
  }
});

test('nothing solid stands between a fitted close-up and its screen', () => {
  world.scene.updateMatrixWorld(true);
  const ray = new THREE.Raycaster();
  ray.layers.enableAll();
  const centre = new THREE.Vector3();
  const opaque = (o) => {
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    return o.visible && m && m.visible !== false && !m.transparent && m.blending === THREE.NormalBlending;
  };
  for (const def of world.screenDefs) {
    const cam = screenCam(def, 0, 0, screenFit(def, 40, 16 / 9), 16 / 9);
    for (const [a, y] of [[def.a, (def.y0 + def.y1) / 2], [def.a0 + 0.02, def.y0 + 0.2], [def.a1 - 0.02, def.y1 - 0.2]]) {
      arcPoint(a, MEDIA.screenR, y, centre);
      const dir = centre.clone().sub(cam.position);
      const len = dir.length();
      ray.set(cam.position, dir.normalize());
      ray.camera = cam; // sprites need it
      ray.far = len - 0.05;
      const blockers = ray.intersectObject(world.scene, true).filter((h) => opaque(h.object));
      assert.deepEqual(blockers.map((h) => h.object.name || h.object.parent?.name || h.object.type), [], `${def.id}: clear view`);
    }
  }
});

test('the screen in close-up is redrawn at twice the resolution', () => {
  const panels = {};
  world.scene.traverse((o) => {
    if (o.userData && o.userData.screenId) panels[o.userData.screenId] = o;
  });
  assert.deepEqual(Object.keys(panels).sort(), ['cost', 'flow', 'main']);
  const size = (id) => [panels[id].material.map.image.width, panels[id].material.map.image.height];
  const base = Object.fromEntries(world.screenDefs.map((s) => [s.id, s.px]));
  world.setScreenDetail('main', 2);
  assert.deepEqual(size('main'), [base.main[0] * 2, base.main[1] * 2]);
  assert.deepEqual(size('flow'), base.flow);
  world.setScreenDetail('flow', 2);
  assert.deepEqual(size('flow'), [base.flow[0] * 2, base.flow[1] * 2]);
  assert.deepEqual(size('main'), base.main);
  world.setScreenDetail(null, 1);
  for (const id of ['flow', 'main', 'cost']) assert.deepEqual(size(id), base[id]);
  // The panels are hover targets with their own ids.
  const ids = new Set(world.hoverTargets().map((o) => o.userData.hoverId));
  for (const id of ['screen:flow', 'screen:main', 'screen:cost']) assert.ok(ids.has(id), id);
});
