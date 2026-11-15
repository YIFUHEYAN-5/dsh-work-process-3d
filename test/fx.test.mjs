// Detail effects: the compute beam that feeds the fuel tank.
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
const { buildCity, beamTube } = await import('../src/client/scene/city.js');
const { createEffects, RIPPLE_LIFE } = await import('../src/client/scene/effects.js');
const { createMaterials } = await import('../src/client/scene/materials.js');
const { buildStations } = await import('../src/client/scene/stations.js');
const { NO_REFLECT_LAYER } = await import('../src/client/scene/reflection.js');
const { ringPos, RING_R } = await import('../src/client/scene/cell.js');

const TANK = new THREE.Vector3(-8, 3.0, -0.7);

function beamParts(city) {
  const out = {};
  city.root.traverse((o) => {
    if (o.name === 'beam-core' || o.name === 'beam-glow' || o.name === 'beam-flare') out[o.name] = o;
  });
  return out;
}

test('the beam tube crowds its rings toward the tank end', () => {
  const geo = beamTube(0.05, 1.6, 12, 48);
  const pos = geo.getAttribute('position');
  assert.equal(pos.count, 49 * 12);
  const ys = [];
  for (let i = 0; i <= 48; i++) ys.push(pos.getY(i * 12));
  assert.equal(ys[0], 0);
  assert.ok(Math.abs(ys[48] - 1) < 1e-6);
  for (let i = 1; i <= 48; i++) assert.ok(ys[i] > ys[i - 1], 'rings go up monotonically');
  // About 700 m long: the first ring step stays under a metre, the last one is tens of metres.
  assert.ok(ys[1] * 700 < 1, `first step ${(ys[1] * 700).toFixed(2)} m`);
  assert.ok((ys[48] - ys[47]) * 700 > 30);
  // The radius tapers linearly with height.
  const r = (i) => Math.hypot(pos.getX(i * 12), pos.getZ(i * 12));
  assert.ok(Math.abs(r(0) - 0.05) < 1e-6 && Math.abs(r(48) - 1.6) < 1e-6);
  assert.equal(geo.getIndex().count, 48 * 12 * 6);
});

test('the beam runs from the compute tower to the tank and sets its pixel size per camera', () => {
  const city = buildCity({ quality: 'low', beamTarget: TANK });
  const { 'beam-core': core, 'beam-glow': glow, 'beam-flare': flare } = beamParts(city);
  assert.ok(core && glow && flare, 'core, halo and landing flare exist');
  for (const m of [core, glow, flare]) {
    assert.equal(m.material.blending, THREE.AdditiveBlending);
    assert.equal(m.material.depthWrite, false);
  }
  assert.ok(core.position.distanceTo(TANK) < 1e-6 && flare.position.distanceTo(TANK) < 1e-6);
  // The tube points up and away toward the emitter, hundreds of metres out.
  const len = core.scale.y;
  assert.ok(len > 300, `beam length ${len.toFixed(0)} m`);
  const top = new THREE.Vector3(0, 1, 0).applyMatrix4(new THREE.Matrix4().compose(core.position, core.quaternion, core.scale));
  assert.ok(top.y > 80, 'the far end is high above the hall');
  // One pixel at unit distance for a 40° camera on a 900 px tall target.
  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.2, 9000);
  camera.updateProjectionMatrix();
  const renderer = { getRenderTarget: () => ({ height: 900 }), getDrawingBufferSize: (v) => v.set(1600, 900) };
  core.onBeforeRender(renderer, null, camera);
  const expected = (2 * Math.tan((20 * Math.PI) / 180)) / 900;
  assert.ok(Math.abs(core.material.uniforms.uPixel.value - expected) < 1e-9);
  assert.equal(glow.material.uniforms.uPixel.value, core.material.uniforms.uPixel.value, 'core and halo share it');
  assert.ok(glow.material.uniforms.uMinPx.value > core.material.uniforms.uMinPx.value, 'the halo keeps a wider minimum');
  // Without a render target the drawing buffer decides.
  const screen = { getRenderTarget: () => null, getDrawingBufferSize: (v) => v.set(1600, 1200) };
  glow.onBeforeRender(screen, null, camera);
  assert.ok(Math.abs(core.material.uniforms.uPixel.value - (expected * 900) / 1200) < 1e-9);
});

test('the beam brightens and flows faster with activity, within a soft range', () => {
  const city = buildCity({ quality: 'low', beamTarget: TANK });
  const { 'beam-core': core, 'beam-flare': flare } = beamParts(city);
  const u = core.material.uniforms;
  const sample = (activity, secs) => {
    const before = u.uFlow.value;
    let moved = 0;
    for (let i = 0; i < secs * 60; i++) {
      const prev = u.uFlow.value;
      city.update(1 / 60, i / 60, { activity });
      moved += (u.uFlow.value - prev + 1) % 1;
    }
    assert.ok(u.uFlow.value >= 0 && u.uFlow.value < 1, 'the flow phase wraps');
    return { moved, before, intensity: u.uIntensity.value, flare: flare.material.uniforms.uIntensity.value };
  };
  const idle = sample(0, 4);
  const busy = sample(1, 6);
  assert.ok(busy.intensity > idle.intensity * 2, 'brighter while generating');
  assert.ok(busy.flare > idle.flare, 'the landing flare grows');
  assert.ok(idle.intensity > 0, 'a faint beam stays while idle');
  assert.ok(busy.intensity <= 1, 'kept below the bloom threshold');
  // Per second of simulated time the packets move about 4x faster at full activity.
  assert.ok(busy.moved / 6 > (idle.moved / 4) * 2.5);
});

test('a floor ripple spreads, fades and frees its slot', () => {
  const { tex } = createMaterials('low');
  const fx = createEffects(tex);
  assert.equal(fx.busy(), false);
  fx.ripple(new THREE.Vector3(1, 0, 2), 0x34d17a, { from: 0.5, to: 1.5 });
  let [r] = fx.ripples();
  assert.ok(r && Math.abs(r.radius - 0.5) < 1e-6 && r.position.y > 0 && r.position.y < 0.01);
  const mesh = fx.root.children.find((o) => o.name === 'ripple' && o.visible);
  assert.ok(mesh.layers.isEnabled(NO_REFLECT_LAYER) && !mesh.layers.isEnabled(0), 'kept out of the floor mirror');
  fx.update(RIPPLE_LIFE * 0.5);
  [r] = fx.ripples();
  assert.ok(r.radius > 1.0 && r.radius < 1.5, 'it has spread most of the way (ease-out)');
  assert.ok(r.opacity > 0 && r.opacity < 0.5);
  fx.update(RIPPLE_LIFE * 0.6);
  assert.equal(fx.ripples().length, 0);
  assert.equal(fx.busy(), false);
  // The pool recycles: many ripples at once never exceed the pool.
  for (let i = 0; i < 40; i++) fx.ripple(new THREE.Vector3(i, 0, 0), 0xffffff);
  assert.ok(fx.ripples().length <= 12);
});

test('a finished call sends a ripple from its station, red when it failed', () => {
  const { M, tex } = createMaterials('low');
  const fx = createEffects(tex);
  const stations = buildStations(M, fx);
  const s = stations.byKind.terminal;
  s.onEnd({ id: 'x', name: 'pwsh' }, true);
  s.onEnd({ id: 'y', name: 'pwsh' }, false);
  const active = fx.ripples();
  assert.equal(active.length, 2);
  const at = ringPos(s.theta, RING_R, 0);
  for (const r of active) assert.ok(Math.hypot(r.position.x - at.x, r.position.z - at.z) < 1e-6, 'centred on the station');
  const colors = fx.root.children.filter((o) => o.name === 'ripple' && o.visible).map((o) => o.material.color.clone().multiplyScalar(1 / 1.6).getHex());
  assert.ok(colors.includes(0xff5a4f), 'the failed call is red');
  assert.ok(colors.includes(parseInt(s.accent.slice(1), 16)), "the finished call wears the station's accent");
});
