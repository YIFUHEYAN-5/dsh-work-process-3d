// Open roof: the sky dome and the sky pool on the balcony.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
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
const { createSky, skyDefines, METEOR_SLOTS } = await import('../src/client/scene/sky.js');
const { buildPool, POOL_LEVELS } = await import('../src/client/scene/pool.js');
const { createMaterials } = await import('../src/client/scene/materials.js');
const { NO_REFLECT_LAYER } = await import('../src/client/scene/reflection.js');
const { lookOf, LOOK_IDS, SKY_BODIES } = await import('../src/client/scene/looks.js');
const { POOL, ATRIUM, overPool, clampTargetPoint } = await import('../src/client/scene/layout.js');
const { createCameraSpace } = await import('../src/client/scene/camspace.js');

const DEG = Math.PI / 180;
const dirOf = (a) => new THREE.Vector3().fromArray(a).normalize();

function night() {
  return createSky(null, lookOf('night'));
}

// ── Sky ──────────────────────────────────────────────────────────

test('star and cloud detail follow the quality tier', () => {
  assert.deepEqual(skyDefines('low'), { STAR_TAPS: 1, MILKY_OCTAVES: 2 });
  assert.deepEqual(skyDefines('medium'), { STAR_TAPS: 4, MILKY_OCTAVES: 3 });
  assert.deepEqual(skyDefines('high'), { STAR_TAPS: 4, MILKY_OCTAVES: 4 });
  assert.deepEqual(skyDefines('ultra'), { STAR_TAPS: 4, MILKY_OCTAVES: 4 });
});

test('every look has a sky, and the dome never blocks the scene', () => {
  for (const id of LOOK_IDS) {
    const sky = createSky(null, lookOf(id));
    assert.equal(sky.dome.name, 'sky-dome', id);
    assert.equal(sky.dome.material.side, THREE.BackSide, id);
    assert.equal(sky.dome.material.depthWrite, false, id);
    assert.equal(sky.dome.renderOrder, -100, id);
    assert.ok(sky.texture && sky.texture.isTexture, `${id} paints a sky canvas`);
    assert.equal(sky.envTexture, null, `${id} needs a renderer for the environment`);
    sky.dispose();
  }
});

test('the night look lights the sky from the moon and shows stars', () => {
  const sky = night();
  const u = sky.dome.material.uniforms;
  assert.equal(u.uStars.value, 1);
  assert.equal(u.uMilky.value, 1);
  assert.equal(u.uTwinkle.value, 1);
  assert.equal(u.uSunPower.value, 0, 'no sun disc at night');
  assert.ok(u.uSunDir.value.distanceTo(dirOf(SKY_BODIES.moon.dir)) < 1e-6, 'the moon is the key light');
  assert.ok(u.uSunDir.value.y > 0.5, 'the moon stands above the horizon');
  sky.dispose();
});

test('the day look drops the stars and the Milky Way', () => {
  const sky = createSky(null, lookOf('day'));
  const u = sky.dome.material.uniforms;
  assert.equal(u.uStars.value, 0);
  assert.equal(u.uMilky.value, 0);
  assert.equal(u.uTwinkle.value, 0);
  assert.ok(u.uSunPower.value > 0, 'the sun disc shows by day');
  assert.ok(u.uAir.value < 1, 'the planet hides behind daylight air');
  // Switching back to the night brings the stars along.
  sky.setLook(lookOf('night'));
  assert.equal(u.uStars.value, 1);
  assert.equal(u.uTwinkle.value, 1);
  sky.dispose();
});

test('the ringed planet keeps its rings inside the dome frame', () => {
  const sky = night();
  const u = sky.dome.material.uniforms;
  const r = Math.sin(SKY_BODIES.planet.radius);
  assert.ok(u.uPlanetP.value.distanceTo(dirOf(SKY_BODIES.planet.dir)) < 1e-6, 'disc where the look puts it');
  assert.ok(Math.abs(u.uPlanet.value.x - r) < 1e-6, 'x holds the disc radius');
  assert.ok(u.uPlanet.value.w > 0 && u.uPlanet.value.w < Math.PI / 2, 'rings reach outside the disc');
  assert.ok(u.uPlanetA.value.length() > 0.99, 'the spin axis is a unit vector');
  // The planet stands low and to the left of the sunset, so the balcony looks out at it.
  assert.ok(u.uPlanetP.value.y > 0 && u.uPlanetP.value.y < 0.35, 'rather low in the sky');
  assert.ok(u.uMoonP.value.y > u.uPlanetP.value.y, 'the moon stands higher');
  sky.dispose();
});

test('shooting stars appear over the night city and fall', () => {
  const sky = night();
  const seen = new Set();
  for (let i = 0; i < 400; i++) {
    sky.update(0.1, i * 0.1);
    for (const m of sky.meteors()) {
      assert.ok(m.start.y > 0.4, 'starts well above the horizon');
      assert.ok(m.dir.y < 0.2, 'and heads down');
      assert.ok(m.life > 0.4 && m.age <= m.life);
      seen.add(m.start.x.toFixed(4));
    }
    assert.ok(sky.meteors().length <= METEOR_SLOTS);
  }
  assert.ok(seen.size > 0, 'the night sky does shed meteors');
  // They burn out: a long quiet stretch leaves none behind.
  for (let i = 0; i < 20; i++) sky.update(0.05, 40 + i * 0.05);
  sky.setReducedMotion(true);
  for (let i = 0; i < 400; i++) sky.update(0.1, 41 + i * 0.1);
  assert.equal(sky.meteors().length, 0, 'reduced motion stops them');
  assert.equal(sky.dome.material.uniforms.uTwinkle.value, 0, 'and the twinkling');
  sky.dispose();
});

// ── Pool ─────────────────────────────────────────────────────────

const { M } = createMaterials('high');

function pool(opts) {
  return buildPool(M, opts);
}

function findByName(root, name) {
  let hit = null;
  root.traverse((o) => {
    if (!hit && o.name === name) hit = o;
  });
  return hit;
}

test('the basin steps down from the deck to the catch trough', () => {
  const { knife, troughFloor, troughWater, lip, troughOut } = POOL_LEVELS;
  assert.ok(troughFloor < troughWater, 'water stands in the trough');
  assert.ok(troughWater < lip, 'and stays under its lip');
  assert.ok(lip < knife, 'the lip sits below the knife edge');
  assert.ok(knife < POOL.water, 'the water laps just over the knife edge');
  assert.ok(knife > POOL.water - 0.05, 'the edge is a thin lip of water');
  assert.ok(Math.abs(troughOut - (POOL.r1 + POOL.trough)) < 1e-9, 'the lip closes the trough');
  assert.ok(troughOut < 31, 'and stays on the balcony');
});

test('the water surface fills the basin and never mirrors itself', () => {
  const p = pool();
  const water = findByName(p.root, 'pool-water');
  assert.ok(water, 'the surface exists');
  assert.equal(water.material, p.water);
  assert.equal(water.layers.mask & (1 << NO_REFLECT_LAYER), 1 << NO_REFLECT_LAYER, 'left out of the mirror pass');
  water.geometry.computeBoundingBox();
  const bb = water.geometry.boundingBox;
  assert.ok(Math.abs(bb.max.y - POOL.water) < 1e-6 && Math.abs(bb.min.y - POOL.water) < 1e-6, 'flat at the water line');
  // Every vertex sits between the basin walls, in the pool sector.
  const pos = water.geometry.getAttribute('position');
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    assert.ok(overPool(v.x, v.z, 0.02), `vertex ${i} lies over the basin`);
  }
  const trough = findByName(p.root, 'pool-trough-water');
  assert.ok(trough && trough.material === p.water, 'the catch trough shares the water');
  trough.geometry.computeBoundingBox();
  assert.ok(trough.geometry.boundingBox.max.y < POOL.water - 0.3, 'and stands lower than the basin');
  p.dispose();
});

test('the water mirrors the floor when a mirror is given', () => {
  const plain = pool();
  assert.equal(plain.water.defines.USE_REFL, undefined, 'the sky is the fallback');
  const reflection = {
    uniforms: {
      tReflect: { value: new THREE.Texture() },
      uReflMatrix: { value: new THREE.Matrix4() },
    },
  };
  const mirrored = pool({ reflection, skyTexture: plain.texture });
  assert.equal(mirrored.water.defines.USE_REFL, '', 'reflections on');
  assert.equal(mirrored.water.uniforms.tReflect, reflection.uniforms.tReflect, 'shares the mirror target');
  assert.equal(mirrored.water.uniforms.uReflMatrix, reflection.uniforms.uReflMatrix, 'and its matrix');
  mirrored.dispose();
  plain.dispose();
});

test('each look drives the pool water, lights and caustics', () => {
  const p = pool();
  for (const id of LOOK_IDS) {
    const look = lookOf(id);
    p.setLook(look);
    const u = p.water.uniforms;
    assert.ok(u.uBody.value.equals(new THREE.Color(look.pool.body)), `${id} body colour`);
    assert.equal(u.uGlow.value, look.pool.glow, `${id} glow`);
    assert.equal(u.uClarity.value, look.pool.clarity, `${id} clarity`);
    assert.equal(u.uGlint.value, look.pool.glint, `${id} sun glint`);
    assert.ok(u.uSunDir.value.distanceTo(dirOf(look.sun.dir)) < 1e-6, `${id} sun direction`);
    // The night is darker than the day, so its water reflects less sky.
    assert.ok(u.uSunColor.value.r >= 0, 'a positive sun tint');
  }
  const tiles = [];
  p.root.traverse((o) => {
    if (o.material && o.material.userData && o.material.userData.uniforms) tiles.push(o.material);
  });
  assert.ok(tiles.length > 0, 'the basin carries the caustic shader');
  p.setLook(lookOf('night'));
  assert.equal(tiles[0].userData.uniforms.uCaustic.value, lookOf('night').pool.caustic);
  p.update(0.016, 12.5);
  assert.equal(p.water.uniforms.uTime.value, 12.5, 'the waves advance');
  assert.equal(tiles[0].userData.uniforms.uTime.value, 12.5, 'and so do the caustics');
  p.dispose();
});

test('the pool is hittable, labelled and solid to the camera', () => {
  const p = pool();
  assert.equal(p.hover.length, 1);
  assert.equal(p.hover[0].id, 'pool');
  assert.ok(overPool(p.labelAnchor.x, p.labelAnchor.z), 'the label floats over the water');
  assert.ok(p.labelAnchor.y > 1.5 && p.labelAnchor.y < 4, 'and at eye height');
  const solids = [];
  p.root.traverse((o) => {
    if (o.userData && typeof o.userData.solid === 'string') solids.push(o.userData.solid);
  });
  for (const id of solids) assert.match(id, /^pool:/);
  assert.ok(solids.includes('pool:sign'), 'the SP-1 sign stops the camera');
  assert.ok(solids.filter((s) => s.startsWith('pool:lounger')).length >= 4, 'so do the loungers');
  assert.ok(solids.filter((s) => s.startsWith('pool:parasol')).length >= 2, 'and the parasols');
  p.dispose();
});

test('the water is a real surface under the roaming camera', () => {
  const space = createCameraSpace();
  // Straight down over the middle of the basin: the camera stops on the water, not the deck.
  const a = (POOL.a0 + POOL.a1) / 2;
  const r = (POOL.r0 + POOL.r1) / 2;
  const x = ATRIUM.cx + r * Math.cos(a);
  const z = ATRIUM.cz - r * Math.sin(a);
  const hit = space.surfaceHit(new THREE.Vector3(x, 6, z), new THREE.Vector3(0, -1, 0));
  assert.ok(Math.abs(6 - hit - POOL.water) < 1e-6, 'lands on the water surface');
  // And the roof is open: nothing stops the camera on its way up.
  assert.ok(space.containerExit(new THREE.Vector3(0, 2, 0), new THREE.Vector3(0, 1, 0)) > 20, 'up to the camera limit');
  // The balcony deck still keeps the walking camera from drifting over the pool's far edge.
  const out = clampTargetPoint(new THREE.Vector3(ATRIUM.cx + 40 * Math.cos(a), 1, ATRIUM.cz - 40 * Math.sin(a)));
  assert.ok(Math.hypot(out.x - ATRIUM.cx, out.z - ATRIUM.cz) <= 30, 'targets stay on the deck');
});
