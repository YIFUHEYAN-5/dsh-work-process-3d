import * as THREE from 'three';
import { Kit, tf, box, cyl, rbox, torus, arcBand, wallStrip, pipeGeometry, clamp } from './util.js';
import { fakeGlass } from './materials.js';
import { ATRIUM, WELL, ISLANDS, MEDIA, ISLAND_THICKNESS, FACADE, BALCONY, TOWER, glslLayout, wellOutline, arcPoint } from './layout.js';
import { NO_REFLECT_LAYER } from './reflection.js';

/*
 * The hall: the round top floor of a skyscraper. Floor-to-ceiling curved glass panes on glass
 * fins (no columns, no gallery), a lit cove where the glass meets the ceiling, a ceiling with a
 * ring light around a skylight, and two open sliding doors onto a balcony on the sunset side.
 * Inside: a polished stone floor around a sunken "well", white floating islands that carry
 * the machines, a glowing data pool at the bottom of the well, a glass railing, and the curved
 * media wall at the back with a row of white compute modules under the screens.
 * Static parts are merged per material.
 */

const TAU = Math.PI * 2;
const LAYOUT_GLSL = glslLayout();

function glow(hex, k, name) {
  const m = new THREE.MeshBasicMaterial({ name, toneMapped: false });
  m.userData.glow = { hex, k };
  m.color.setHex(hex).multiplyScalar(k);
  return m;
}

// ── Floor shaders ────────────────────────────────────────────────

const FLOOR_COMMON = /* glsl */ `
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;

function patchFloorVertex(shader) {
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec2 vFloor;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFloor = (modelMatrix * vec4(transformed, 1.0)).xz;');
}

/** Polished light stone around the well: 2.4 m slabs, a lit border along the well edge. */
function stoneFloorMaterial(reflection) {
  // Polished almost to a mirror; the diffuse part stays so sun shadows remain readable.
  const m = new THREE.MeshStandardMaterial({ color: 0xd4d8de, metalness: 0, roughness: 0.07, name: 'atrium-floor' });
  m.onBeforeCompile = (shader) => {
    patchFloorVertex(shader);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${FLOOR_COMMON}\n${LAYOUT_GLSL}`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
float wellD = sdWell(vFloor);
if (wellD < 0.0) discard;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
float px = length(fwidth(vFloor));
vec2 tc = vFloor / 2.4;
vec2 fr = fract(tc);
float tileN = fHash(floor(tc));
float seamD = min(min(fr.x, 1.0 - fr.x), min(fr.y, 1.0 - fr.y)) * 2.4;
float seam = fLine(seamD, 0.003, px);
diffuseColor.rgb *= (0.95 + 0.07 * tileN) * (1.0 - seam * 0.4);
float reflMask = 1.0 - seam;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (tileN - 0.5) * 0.04 + seam * 0.5, 0.03, 1.0);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
float border = fLine(abs(wellD - 0.62), 0.011, px);
float ringD = length(vFloor - vec2(${ATRIUM.cx.toFixed(3)}, ${ATRIUM.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`);
    if (reflection) reflection.inject(shader);
  };
  m.customProgramCacheKey = () => (reflection ? 'dwp3d-atrium-floor-r' : 'dwp3d-atrium-floor');
  return m;
}

/** White island tops: 1.2 m tiles, a light line along the rim, the hub inlay of the robot cell. */
function islandTopMaterial(reflection) {
  const m = new THREE.MeshStandardMaterial({ color: 0xeef1f5, metalness: 0, roughness: 0.05, name: 'island-top' });
  m.onBeforeCompile = (shader) => {
    patchFloorVertex(shader);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${FLOOR_COMMON}\n${LAYOUT_GLSL}`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
float islD = sdIslands(vFloor);
if (islD > 0.0 || sdWell(vFloor) > 0.0) discard;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
float px = length(fwidth(vFloor));
vec2 tc = vFloor / 1.2;
vec2 fr = fract(tc);
float tileN = fHash(floor(tc));
float seamD = min(min(fr.x, 1.0 - fr.x), min(fr.y, 1.0 - fr.y)) * 1.2;
float seam = fLine(seamD, 0.0028, px);
float hubD = length(vFloor - HUB_C);
float inHub = 1.0 - smoothstep(HUB_R - 0.64, HUB_R - 0.6, hubD);
float edge = smoothstep(-0.05, 0.0, islD);
diffuseColor.rgb *= mix(0.97 + 0.04 * tileN, 0.88, inHub) * (1.0 - seam * 0.45 * (1.0 - inHub)) * (1.0 - edge * 0.3);
float reflMask = (1.0 - seam * (1.0 - inHub)) * (1.0 - edge);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
roughnessFactor = mix(clamp(roughnessFactor + (tileN - 0.5) * 0.03 + seam * 0.5, 0.03, 1.0), 0.035, inHub);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
float rim = fLine(abs(islD + 0.07), 0.009, px);
float ring = fLine(abs(hubD - (HUB_R - 0.2)), 0.014, px);
float inner = fLine(abs(hubD - 1.08), 0.006, px);
float ang = atan(vFloor.y - HUB_C.y, vFloor.x - HUB_C.x + 1e-6);
float a72 = ang / 6.2831853 * 72.0;
float tickD = abs(a72 - floor(a72 + 0.5)) * 6.2831853 * hubD / 72.0;
float ticks = fLine(tickD, 0.006, px) * step(HUB_R - 0.52, hubD) * step(hubD, HUB_R - 0.36);
// The bright hub ring at HUB_R − 0.2 is the floor channel 'ring' (channels.js), driven by activity.
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`);
    if (reflection) reflection.inject(shader);
  };
  m.customProgramCacheKey = () => (reflection ? 'dwp3d-island-top-r' : 'dwp3d-island-top');
  return m;
}

// ── Data pool at the bottom of the well ──────────────────────────

const POOL_VERT = /* glsl */ `
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const POOL_FRAG = /* glsl */ `
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${FLOOR_COMMON}
${LAYOUT_GLSL}
void main() {
  float wellD = sdWell(vFloor);
  if (wellD > 0.0) discard;
  float px = length(fwidth(vFloor));
  vec3 col = vec3(0.010, 0.026, 0.07);
  vec2 g = abs(fract(vFloor / 0.6 + 0.5) - 0.5) * 0.6;
  float grid = max(fLine(g.x, 0.005, px), fLine(g.y, 0.005, px));
  col += vec3(0.05, 0.22, 0.55) * grid * 0.45;
  float lane = floor(vFloor.y / 0.9);
  float lz = (fract(vFloor.y / 0.9) - 0.5) * 0.9;
  float lr = fHash(vec2(lane, 7.0));
  float on = step(0.35, fHash(vec2(lane, 3.1)));
  float dir = lr < 0.5 ? 1.0 : -1.0;
  float seg = vFloor.x / (2.2 + lr * 1.6) - uTravel * (0.5 + lr) * dir;
  float k = fract(seg + lr * 7.13);
  float comet = pow(dir > 0.0 ? k : 1.0 - k, 10.0);
  float laneLine = fLine(abs(lz), 0.011, px) * on;
  col += vec3(0.25, 0.75, 1.0) * laneLine * (0.1 + comet * 3.6 * uFlow);
  float isl = sdIslands(vFloor);
  col += vec3(0.2, 0.55, 1.0) * exp(-max(isl, 0.0) * 1.6) * 0.45 * uGlow;
  col += vec3(0.3, 0.8, 1.0) * fLine(abs(wellD + 0.14), 0.01, px) * 1.6;
  gl_FragColor = vec4(col, 1.0);
}`;

// ── Compute module doors (dark glass with server LEDs) ──────────

const DOOR_VERT = /* glsl */ `
attribute float aSeed;
varying vec2 vUv;
varying float vSeed;
void main() {
  vUv = uv;
  vSeed = aSeed;
  vec4 p = vec4(position, 1.0);
  #ifdef USE_INSTANCING
    p = instanceMatrix * p;
  #endif
  gl_Position = projectionMatrix * modelViewMatrix * p;
}`;

const DOOR_FRAG = /* glsl */ `
uniform float uTime;
uniform float uActivity;
uniform vec2 uSize;
varying vec2 vUv;
varying float vSeed;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float dotMask(vec2 p, vec2 c, float r, float aa) {
  float rr = max(r, aa * 0.7);
  float d = length(p - c);
  return (1.0 - smoothstep(rr - aa * 0.5, rr + aa * 0.5, d)) * (r * r) / (rr * rr);
}
void main() {
  vec2 p = vUv * uSize;
  float aa = length(fwidth(p));
  float uh = uSize.y / 24.0;
  float ui = floor(p.y / uh);
  float fy = p.y - ui * uh;
  float cy = ui * uh + uh * 0.5;
  float r = h21(vec2(vSeed, ui));
  vec3 col = vec3(0.014, 0.02, 0.034) + vec3(0.02, 0.028, 0.04) * (p.y / uSize.y);
  col += (1.0 - smoothstep(0.0, 0.003 + aa, fy)) * vec3(0.03, 0.036, 0.046);
  float server = step(0.12, r);
  float storage = step(0.7, r) * (1.0 - step(0.86, r));
  float amber = step(0.9, r);
  float rate = (0.5 + h21(vec2(r, 3.7)) * 3.5) * (0.4 + uActivity * 1.2);
  float blink = step(0.35, h21(vec2(r * 17.0, floor(uTime * rate + r * 13.0))));
  vec3 c1 = mix(vec3(0.22, 0.62, 1.0), vec3(1.0, 0.55, 0.12), amber);
  vec3 led = dotMask(p, vec2(0.06, cy), 0.0075, aa) * blink * c1 * 4.0 * server;
  led += dotMask(p, vec2(0.09, cy), 0.0075, aa) * vec3(0.15, 0.9, 0.45) * 1.6 * step(0.3, r);
  float k = clamp(floor((p.x - 0.14) / 0.022), 0.0, 5.0);
  float inRow = step(0.14, p.x) * step(p.x, 0.272);
  float act = step(0.5 - uActivity * 0.25, h21(vec2(k + r * 31.0, floor(uTime * (3.0 + k)))));
  led += dotMask(p, vec2(0.151 + k * 0.022, cy), 0.005, aa) * act * vec3(0.3, 0.75, 1.0) * 3.0 * storage * inRow;
  float vent = step(0.36, p.x) * step(p.x, uSize.x - 0.07) * step(0.02, fy) * step(fy, uh - 0.02);
  col += vent * (0.5 + 0.5 * sin(p.x * 300.0)) * 0.01;
  float strip = 1.0 - smoothstep(0.004, 0.004 + aa * 1.5, abs(p.x - (uSize.x - 0.03)));
  col += strip * vec3(0.2, 0.6, 1.0) * (1.4 + uActivity * 1.4) + led;
  gl_FragColor = vec4(col, 1.0);
}`;

// ── Outlines ─────────────────────────────────────────────────────

/** Closed outline of one island shape grown by `offset`, plus its centre for outward normals. */
function shapeOutline(s, offset = 0, step = 0.3) {
  const pts = [];
  if (s.type === 'circle') {
    const r = s.r + offset;
    const n = Math.max(32, Math.ceil((TAU * r) / step));
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU;
      pts.push([s.c[0] + r * Math.cos(a), s.c[1] - r * Math.sin(a)]);
    }
    return { pts, center: () => s.c };
  }
  if (s.type === 'capsule') {
    const dx = s.b[0] - s.a[0];
    const dz = s.b[1] - s.a[1];
    const L = Math.hypot(dx, dz);
    const ux = dx / L;
    const uz = dz / L;
    const px = -uz;
    const pz = ux;
    const r = s.r + offset;
    const n = Math.max(16, Math.ceil((Math.PI * r) / step));
    const arc = (c, from) => {
      for (let i = 0; i <= n; i++) {
        const th = from - (Math.PI * i) / n;
        pts.push([c[0] + r * (Math.cos(th) * ux + Math.sin(th) * px), c[1] + r * (Math.cos(th) * uz + Math.sin(th) * pz)]);
      }
    };
    arc(s.b, Math.PI / 2);
    arc(s.a, -Math.PI / 2);
    const center = (mx, mz) => {
      const t = clamp(((mx - s.a[0]) * ux + (mz - s.a[1]) * uz) / L, 0, 1);
      return [s.a[0] + dx * t, s.a[1] + dz * t];
    };
    return { pts, center };
  }
  const hx = s.h[0] + offset;
  const hz = s.h[1] + offset;
  pts.push([s.c[0] - hx, s.c[1] - hz], [s.c[0] + hx, s.c[1] - hz], [s.c[0] + hx, s.c[1] + hz], [s.c[0] - hx, s.c[1] + hz]);
  return { pts, center: () => s.c };
}

function outwardStrip(shape, offset, y0, y1) {
  const { pts, center } = shapeOutline(shape, offset);
  return wallStrip(pts, y0, y1, {
    closed: true,
    facing: (mx, mz, nx, nz) => {
      const c = center(mx, mz);
      return (mx - c[0]) * nx + (mz - c[1]) * nz > 0;
    },
  });
}

/** Move outline points of the well `d` metres toward its inside (negative d = outward). */
function insetWell(points, d) {
  const kx = WELL.hx - WELL.r;
  const kz = WELL.hz - WELL.r;
  return points.map(([x, z]) => {
    const qx = WELL.cx + clamp(x - WELL.cx, -kx, kx);
    const qz = WELL.cz + clamp(z - WELL.cz, -kz, kz);
    const dx = qx - x;
    const dz = qz - z;
    const l = Math.hypot(dx, dz) || 1;
    return [x + (dx / l) * d, z + (dz / l) * d];
  });
}

const facingWellInside = (mx, mz, nx, nz) => (WELL.cx - mx) * nx + (WELL.cz - mz) * nz > 0;

/** Railing runs along the well edge, interrupted where bridges reach the outer floor. */
function railingRuns(points) {
  const bridges = ISLANDS.filter((s) => s.type === 'box');
  const blocked = (x, z) => bridges.some((b) => Math.abs(x - b.c[0]) < b.h[0] + 0.12 && Math.abs(z - b.c[1]) < b.h[1] + 0.12);
  const n = points.length;
  const keep = points.map((p, i) => {
    const q = points[(i + 1) % n];
    return !blocked((p[0] + q[0]) / 2, (p[1] + q[1]) / 2) && !blocked(p[0], p[1]) && !blocked(q[0], q[1]);
  });
  const start = keep.indexOf(false);
  if (start < 0) return [points.concat([points[0]])];
  const runs = [];
  let run = null;
  for (let k = 1; k <= n; k++) {
    const i = (start + k) % n;
    if (keep[i]) {
      if (!run) run = [points[i]];
      run.push(points[(i + 1) % n]);
    } else if (run) {
      runs.push(run);
      run = null;
    }
  }
  if (run) runs.push(run);
  return runs.filter((r) => r.length >= 2);
}

function islandBounds() {
  let x0 = Infinity;
  let x1 = -Infinity;
  let z0 = Infinity;
  let z1 = -Infinity;
  const grow = (x, z, r) => {
    x0 = Math.min(x0, x - r);
    x1 = Math.max(x1, x + r);
    z0 = Math.min(z0, z - r);
    z1 = Math.max(z1, z + r);
  };
  for (const s of ISLANDS) {
    if (s.type === 'circle') grow(s.c[0], s.c[1], s.r);
    else if (s.type === 'capsule') {
      grow(s.a[0], s.a[1], s.r);
      grow(s.b[0], s.b[1], s.r);
    } else {
      x0 = Math.min(x0, s.c[0] - s.h[0]);
      x1 = Math.max(x1, s.c[0] + s.h[0]);
      z0 = Math.min(z0, s.c[1] - s.h[1]);
      z1 = Math.max(z1, s.c[1] + s.h[1]);
    }
  }
  // Island tops are clipped to the well.
  x0 = Math.max(x0, WELL.cx - WELL.hx);
  x1 = Math.min(x1, WELL.cx + WELL.hx);
  z0 = Math.max(z0, WELL.cz - WELL.hz);
  z1 = Math.min(z1, WELL.cz + WELL.hz);
  return { x0, x1, z0, z1 };
}

// ── Balcony ──────────────────────────────────────────────────────

/** A straight open cylinder from p0 to p1 (tension rods). */
function rod(p0, p1, radius, seg = 6) {
  const d = new THREE.Vector3().subVectors(p1, p0);
  const len = d.length();
  const g = new THREE.CylinderGeometry(radius, radius, len, seg, 1, true);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.divideScalar(len)));
  g.translate((p0.x + p1.x) / 2, (p0.y + p1.y) / 2, (p0.z + p1.z) / 2);
  return g;
}

/**
 * The balcony on the sunset side, outside the open doors: the stone floor runs out to a
 * frameless glass parapet with a chrome handrail; a cantilevered canopy with downlights hangs
 * from tension rods; two benches; the slab edge and the tower cornice below the floor line.
 * Static parts go into the kits; returns the floor mesh, which samples the floor reflection.
 */
function buildBalcony({ kit, low, glassKit, floorMat, at }) {
  const { cx, cz, r: R } = ATRIUM;
  const B = BALCONY;
  const span = B.a1 - B.a0;
  const pt = (a, r) => [cx + r * Math.cos(a), cz - r * Math.sin(a)];

  const floor = new THREE.Mesh(tf(new THREE.RingGeometry(R + 0.2, B.r1, 96, 3, B.a0, span), [0, 0, 0], [-Math.PI / 2, 0, 0]), floorMat);
  floor.name = 'balcony-floor';
  floor.position.set(cx, 0, cz);
  floor.receiveShadow = true;
  floor.layers.set(NO_REFLECT_LAYER);

  // A narrow ledge outside the glass along the rest of the tower top.
  kit.add('white', tf(new THREE.RingGeometry(R + 0.2, TOWER.r, 160, 1, B.a1, TAU - span), [cx, 0, cz], [-Math.PI / 2, 0, 0]));

  // Below the floor line: the tower cornice with a light line, and the balcony slab edge.
  low.add('white', arcBand(cx, cz, TOWER.r, B.a1, B.a0 + TAU, -0.45, 0, 160, false));
  low.add('glowCyan', arcBand(cx, cz, TOWER.r + 0.004, B.a1, B.a0 + TAU, -0.24, -0.21, 160, false));
  low.add('white', arcBand(cx, cz, B.r1, B.a0, B.a1, -B.slab, 0, 72, false));
  low.add('silver', arcBand(cx, cz, B.r1 + 0.004, B.a0, B.a1, -0.04, 0, 72, false));
  low.add('glowCyan', arcBand(cx, cz, B.r1 + 0.006, B.a0, B.a1, -B.slab + 0.03, -B.slab + 0.06, 72, false));
  for (const a of [B.a0, B.a1]) low.add('white', tf(box(B.r1 - TOWER.r, B.slab, 0.04), at(a, (TOWER.r + B.r1) / 2, -B.slab / 2), [0, a, 0]));

  // Frameless glass parapet: side runs from the facade out to the edge, then the arc.
  const pr = B.r1 - 0.06;
  const pin = R + 0.05;
  const path = [];
  for (let k = 0; k <= 4; k++) path.push(pt(B.a0, pin + ((pr - pin) * k) / 4));
  const steps = Math.ceil((span * pr) / 0.45);
  for (let k = 1; k <= steps; k++) path.push(pt(B.a0 + (span * k) / steps, pr));
  for (let k = 3; k >= 0; k--) path.push(pt(B.a1, pin + ((pr - pin) * k) / 4));
  const centre = pt((B.a0 + B.a1) / 2, (R + B.r1) / 2);
  const inward = (mx, mz, nx, nz) => (centre[0] - mx) * nx + (centre[1] - mz) * nz > 0;
  const outward = (mx, mz, nx, nz) => !inward(mx, mz, nx, nz);
  glassKit.add('rail', wallStrip(path, 0.045, B.rail));
  kit.add('chrome', pipeGeometry(path.map(([x, z]) => [x, B.rail + 0.026, z]), 0.026, 0.1, 8));
  kit.add('silver', wallStrip(path, 0, 0.045, { facing: outward }));
  kit.add('glowCyan', wallStrip(path, 0, 0.04, { facing: inward }));
  for (let i = 0; i < path.length; i += 5) kit.add('chrome', tf(cyl(0.018, 0.018, B.rail, 8), [path[i][0], B.rail / 2, path[i][1]]));

  // Cantilevered canopy: white top, lit soffit with downlights and a light line near the edge,
  // silver edge, hung from the facade on tension rods.
  const cy = B.canopyY;
  const cIn = R + 0.02;
  const cOut = B.r1 + 0.35;
  kit.add('white', tf(new THREE.RingGeometry(cIn, cOut, 96, 1, B.a0, span), [cx, cy + 0.14, cz], [-Math.PI / 2, 0, 0]));
  kit.add('ceiling', tf(new THREE.RingGeometry(cIn, cOut, 96, 1, -B.a1, span), [cx, cy, cz], [Math.PI / 2, 0, 0]));
  kit.add('glowCyan', tf(new THREE.RingGeometry(cOut - 0.13, cOut - 0.09, 96, 1, -B.a1, span), [cx, cy - 0.003, cz], [Math.PI / 2, 0, 0]));
  kit.add('silver', arcBand(cx, cz, cOut, B.a0, B.a1, cy, cy + 0.14, 72, false));
  kit.add('silver', arcBand(cx, cz, cOut - 0.002, B.a0, B.a1, cy, cy + 0.14, 72, true));
  for (const a of [B.a0, B.a1]) kit.add('silver', tf(box(cOut - cIn, 0.14, 0.04), at(a, (cIn + cOut) / 2, cy + 0.07), [0, a, 0]));
  for (const [rr, n] of [[23.3, 17], [25.2, 19]]) {
    for (let k = 0; k < n; k++) {
      const a = B.a0 + ((k + 0.5) * span) / n;
      kit.add('glowWhite', tf(new THREE.CircleGeometry(0.085, 16), at(a, rr, cy - 0.003), [Math.PI / 2, 0, 0]));
      kit.add('chrome', tf(new THREE.RingGeometry(0.085, 0.11, 16, 1), at(a, rr, cy - 0.002), [Math.PI / 2, 0, 0]));
    }
  }
  const rp0 = new THREE.Vector3();
  const rp1 = new THREE.Vector3();
  for (let k = 0; k < 6; k++) {
    const a = B.a0 + ((k + 0.5) * span) / 6;
    arcPoint(a, cOut - 0.15, cy + 0.14, rp0);
    arcPoint(a, R + 0.03, cy + 3.4, rp1);
    kit.add('silver', rod(rp0, rp1, 0.014));
    kit.add('chrome', tf(cyl(0.05, 0.05, 0.03, 14), rp1.toArray(), [0, a, Math.PI / 2]));
  }

  // Two benches facing the sunset, floating on a dark plinth with a light gap.
  for (const deg of [250, 290]) {
    const a = (deg * Math.PI) / 180;
    kit.add('white', tf(rbox(0.5, 0.34, 2.4, 0.05, 3), at(a, 23.4, 0.27), [0, a, 0]));
    kit.add('dark', tf(box(0.32, 0.1, 2.1), at(a, 23.4, 0.05), [0, a, 0]));
    kit.add('glowCyan', tf(box(0.33, 0.012, 2.11), at(a, 23.4, 0.094), [0, a, 0]));
  }
  return { floor };
}

// ── Builder ──────────────────────────────────────────────────────

/**
 * buildAtrium(M, { reflection }) → { root, reflectors, bounds, update(dt, t, info), setLook(look) }.
 * `reflection` (optional) is the planar reflection whose texture the floors sample.
 */
export function buildAtrium(M, { reflection = null } = {}) {
  const root = new THREE.Group();
  root.name = 'atrium';
  const { cx, cz, r: R, h: H } = ATRIUM;

  const mats = {
    white: new THREE.MeshStandardMaterial({ color: 0xf3f5f8, metalness: 0, roughness: 0.34, name: 'atrium-white' }),
    satin: new THREE.MeshStandardMaterial({ color: 0xe1e5eb, metalness: 0, roughness: 0.55, name: 'atrium-satin' }),
    ceiling: new THREE.MeshStandardMaterial({
      color: 0xf4f6f9,
      metalness: 0,
      roughness: 0.85,
      emissive: 0xe6edf6,
      emissiveIntensity: 0.22,
      name: 'atrium-ceiling',
    }),
    silver: new THREE.MeshStandardMaterial({ color: 0xc9ced6, metalness: 1, roughness: 0.28, name: 'atrium-silver' }),
    chrome: M.chrome,
    dark: new THREE.MeshStandardMaterial({ color: 0x0a101c, metalness: 0.6, roughness: 0.2, name: 'atrium-dark' }),
    glowCyan: glow(0x46d2ff, 3.0, 'atrium-glow-cyan'),
    glowBlue: glow(0x4f8dff, 2.2, 'atrium-glow-blue'),
    glowWhite: glow(0xfff6ea, 3.2, 'atrium-glow-white'),
  };
  const glows = [mats.glowCyan, mats.glowBlue, mats.glowWhite];
  const ringMat = glow(0xffffff, 5.0, 'atrium-ring-light');
  // Seen from the hall and from the balcony, so both faces are drawn.
  const curtainGlass = fakeGlass({ color: 0xcfe0f2, opacity: 0.045, fresnel: 0.5, side: THREE.DoubleSide });
  const finGlass = fakeGlass({ color: 0xd6e6f6, opacity: 0.1, fresnel: 0.6, side: THREE.DoubleSide });
  const railGlass = fakeGlass({ color: 0xd8e6f5, opacity: 0.08, fresnel: 0.5, side: THREE.DoubleSide });
  const skyGlass = fakeGlass({ color: 0xcfe0f2, opacity: 0.04, fresnel: 0.4 });

  const kit = new Kit(); // above the floor plane, reflected
  const low = new Kit(); // below the floor plane, never reflected

  const glassKit = new Kit(); // facade panes, fins, door leaves and the balcony parapet
  const tmpP = new THREE.Vector3();
  const at = (a, r, y) => arcPoint(a, r, y, tmpP).toArray();

  // Facade: floor-to-ceiling curved panes on glass fins. No columns, no gallery: the city is
  // the view. Two panes are cut at the doorway, which leaves only the glass above the header.
  const { doorA0, doorA1, doorH } = FACADE;
  const doorTop = doorH + 0.12;
  const paneSpan = TAU / FACADE.panes;
  const joint = 0.006 / R;
  const inDoor = (a) => a > doorA0 + 1e-6 && a < doorA1 - 1e-6;
  for (let i = 0; i < FACADE.panes; i++) {
    const p0 = i * paneSpan + joint;
    const p1 = (i + 1) * paneSpan - joint;
    const cuts = [p0];
    for (const d of [doorA0, doorA1]) if (d > p0 && d < p1) cuts.push(d);
    cuts.push(p1);
    for (let k = 0; k + 1 < cuts.length; k++) {
      const s0 = cuts[k];
      const s1 = cuts[k + 1];
      const y0 = inDoor((s0 + s1) / 2) ? doorTop : 0.05;
      const segs = Math.max(2, Math.ceil(((s1 - s0) / paneSpan) * 16));
      glassKit.add('glass', arcBand(cx, cz, R, s0, s1, y0, H, segs, true));
    }
  }

  // Glass fins at the joints, with silver shoes, caps and small patch fittings that clamp fin
  // and glass together.
  const finD = FACADE.finDepth;
  const finH = H - 0.55;
  const finR = R - finD / 2 - 0.004;
  for (let i = 0; i < FACADE.panes; i++) {
    const a = i * paneSpan;
    if (inDoor(a)) continue;
    glassKit.add('fin', tf(box(finD, finH, 0.022), at(a, finR, finH / 2), [0, a, 0]));
    kit.add('silver', tf(box(finD + 0.04, 0.06, 0.05), at(a, finR, 0.03), [0, a, 0]));
    kit.add('silver', tf(box(finD + 0.04, 0.06, 0.05), at(a, finR, finH - 0.03), [0, a, 0]));
    for (const y of [1.1, 4.7, 8.3, 11.9]) {
      kit.add('chrome', tf(box(0.025, 0.09, 0.17), at(a, R - 0.0175, y), [0, a, 0]));
      kit.add('chrome', tf(box(0.09, 0.09, 0.045), at(a, R - 0.075, y), [0, a, 0]));
      for (const side of [-1, 1]) {
        kit.add('chrome', tf(cyl(0.022, 0.022, 0.018, 14), at(a + side * (0.055 / R), R - 0.039, y), [0, a, Math.PI / 2]));
      }
    }
  }

  // Lit cove where the glass meets the ceiling.
  const coveY = H - 0.55;
  kit.add('white', arcBand(cx, cz, R - 0.6, 0, TAU, coveY, H, 160, true));
  kit.add('satin', tf(new THREE.RingGeometry(R - 0.6, R - 0.01, 160, 1), [cx, coveY, cz], [Math.PI / 2, 0, 0]));
  kit.add('glowWhite', tf(new THREE.RingGeometry(R - 0.16, R - 0.1, 160, 1), [cx, coveY - 0.004, cz], [Math.PI / 2, 0, 0]));
  kit.add('glowCyan', arcBand(cx, cz, R - 0.605, 0, TAU, coveY + 0.02, coveY + 0.05, 160, true));

  // A light line along the glass base and a low silver sill, both open at the doorway.
  const wallA0 = doorA1;
  const wallLen = TAU - (doorA1 - doorA0);
  kit.add('glowCyan', tf(new THREE.RingGeometry(R - 0.17, R - 0.13, 160, 1, wallA0, wallLen), [cx, 0.003, cz], [-Math.PI / 2, 0, 0]));
  kit.add('silver', arcBand(cx, cz, R - 0.03, wallA0, wallA0 + wallLen, 0, 0.05, 160, true));

  // The doorway: slim posts, a header with a light line, a threshold, and two glass leaves
  // slid open along a track inside the glass.
  for (const a of [doorA0, doorA1]) kit.add('silver', tf(box(0.14, doorTop, 0.06), at(a, R - 0.03, doorTop / 2), [0, a, 0]));
  const doorSpan = doorA1 - doorA0;
  kit.add('silver', arcBand(cx, cz, R - 0.06, doorA0, doorA1, doorH, doorTop, 16, true));
  kit.add('silver', arcBand(cx, cz, R + 0.04, doorA0, doorA1, doorH, doorTop, 16, false));
  kit.add('silver', tf(new THREE.RingGeometry(R - 0.06, R + 0.04, 16, 1, -doorA1, doorSpan), [cx, doorH, cz], [Math.PI / 2, 0, 0]));
  kit.add('glowWhite', tf(new THREE.RingGeometry(R - 0.025, R + 0.005, 16, 1, -doorA1, doorSpan), [cx, doorH - 0.002, cz], [Math.PI / 2, 0, 0]));
  kit.add('silver', tf(new THREE.RingGeometry(R - 0.22, R + 0.24, 16, 1, doorA0, doorSpan), [cx, 0.003, cz], [-Math.PI / 2, 0, 0]));
  const leafW = doorSpan / 2;
  const leafR = R - 0.09;
  for (const [l0, l1, lead] of [[doorA0 - leafW, doorA0, 0.9], [doorA1, doorA1 + leafW, 0.1]]) {
    glassKit.add('fin', arcBand(cx, cz, leafR, l0 + 0.03 / leafR, l1 - 0.03 / leafR, 0.06, doorH - 0.06, 12, true));
    kit.add('silver', arcBand(cx, cz, leafR - 0.02, l0, l1, 0, 0.06, 12, true));
    kit.add('silver', arcBand(cx, cz, leafR - 0.02, l0, l1, doorH - 0.06, doorH, 12, true));
    for (const a of [l0, l1]) kit.add('silver', tf(box(0.05, doorH, 0.05), at(a, leafR, doorH / 2), [0, a, 0]));
    kit.add('chrome', tf(cyl(0.012, 0.012, 1.1, 8), at(l0 + (l1 - l0) * lead, leafR - 0.05, 1.05)));
  }
  kit.add('silver', arcBand(cx, cz, leafR - 0.035, doorA0 - leafW, doorA1 + leafW, doorH, doorH + 0.08, 24, true));

  // Ceiling: coffered ring around the skylight with a ring light.
  kit.add('ceiling', tf(new THREE.RingGeometry(6.4, R, 160, 2), [cx, H, cz], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const mr = (R + 6.4) / 2;
    kit.add('white', tf(box(R - 6.4, 0.34, 0.3), [cx + mr * Math.cos(a), H - 0.17, cz - mr * Math.sin(a)], [0, a, 0]));
  }
  for (const rr of [9.0, 16.5]) {
    kit.add('white', arcBand(cx, cz, rr, 0, TAU, H - 0.34, H, 160, true));
    kit.add('white', arcBand(cx, cz, rr + 0.3, 0, TAU, H - 0.34, H, 160, false));
    kit.add('white', tf(new THREE.RingGeometry(rr, rr + 0.3, 160, 1), [cx, H - 0.34, cz], [Math.PI / 2, 0, 0]));
  }
  for (const rr of [11.15, 11.85]) {
    kit.add('satin', arcBand(cx, cz, rr, 0, TAU, H - 0.24, H, 160, true));
    kit.add('satin', arcBand(cx, cz, rr, 0, TAU, H - 0.24, H, 160, false));
  }
  const ringLight = new THREE.Mesh(tf(torus(11.5, 0.12, 10, 240), [0, 0, 0], [Math.PI / 2, 0, 0]), ringMat);
  ringLight.name = 'ring-light';
  ringLight.position.set(cx, H - 0.15, cz);
  root.add(ringLight);
  kit.add('chrome', tf(torus(6.4, 0.1, 10, 160), [cx, H, cz], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 4; i++) kit.add('silver', tf(box(12.8, 0.12, 0.12), [cx, H + 0.03, cz], [0, (i * Math.PI) / 4, 0]));
  const skylight = new THREE.Mesh(tf(new THREE.CircleGeometry(6.4, 96), [0, 0, 0], [Math.PI / 2, 0, 0]), skyGlass);
  skylight.name = 'skylight';
  skylight.position.set(cx, H + 0.06, cz);
  root.add(skylight);

  // Media wall: dark glass band for the screens, white fascia, back face, caps and light lines.
  const { a0, a1 } = MEDIA;
  const shelfR = MEDIA.moduleR - 0.36;
  kit.add('dark', arcBand(cx, cz, MEDIA.r, a0, a1, MEDIA.bandY0, MEDIA.bandY1, 72, true));
  kit.add('white', arcBand(cx, cz, MEDIA.r, a0, a1, MEDIA.bandY1, MEDIA.top, 72, true));
  kit.add('white', arcBand(cx, cz, MEDIA.r, a0, a1, 2.3, MEDIA.bandY0, 72, true));
  kit.add('satin', arcBand(cx, cz, MEDIA.r, a0, a1, 0, 2.3, 72, true));
  kit.add('white', arcBand(cx, cz, MEDIA.back, a0, a1, 0, MEDIA.top, 72, false));
  kit.add('white', tf(new THREE.RingGeometry(MEDIA.r, MEDIA.back, 72, 1, a0, a1 - a0), [cx, MEDIA.top, cz], [-Math.PI / 2, 0, 0]));
  kit.add('white', tf(new THREE.RingGeometry(shelfR, MEDIA.r, 72, 1, a0, a1 - a0), [cx, 2.3, cz], [-Math.PI / 2, 0, 0]));
  kit.add('white', arcBand(cx, cz, shelfR, a0, a1, 2.22, 2.3, 72, true));
  kit.add('glowBlue', arcBand(cx, cz, shelfR - 0.004, a0, a1, 2.245, 2.265, 72, true));
  kit.add('glowCyan', arcBand(cx, cz, MEDIA.r - 0.012, a0, a1, 7.1, 7.14, 72, true));
  kit.add('glowCyan', arcBand(cx, cz, MEDIA.r - 0.012, a0, a1, 2.64, 2.68, 72, true));
  const capLen = MEDIA.back - shelfR + 0.04;
  const capR = (MEDIA.back + shelfR) / 2;
  for (const [a, side] of [[a0 - 0.07 / capR, -1], [a1 + 0.07 / capR, 1]]) {
    kit.add('white', tf(box(capLen, MEDIA.top, 0.14), [cx + capR * Math.cos(a), MEDIA.top / 2, cz - capR * Math.sin(a)], [0, a, 0]));
    // A light line down the inner edge of each cap.
    const ga = a - side * (0.075 / shelfR);
    kit.add('glowCyan', tf(box(0.04, MEDIA.top - 0.4, 0.03), [cx + (shelfR + 0.02) * Math.cos(ga), MEDIA.top / 2, cz - (shelfR + 0.02) * Math.sin(ga)], [0, a, 0]));
  }

  // Compute modules under the screens.
  const N = 24;
  const bodies = new THREE.InstancedMesh(new THREE.BoxGeometry(0.62, 2.22, 0.78), mats.white, N);
  bodies.name = 'compute-modules';
  const doorSize = new THREE.Vector2(0.7, 2.08);
  const doorGeo = new THREE.PlaneGeometry(doorSize.x, doorSize.y);
  const doorMat = new THREE.ShaderMaterial({
    name: 'module-doors',
    vertexShader: DOOR_VERT,
    fragmentShader: DOOR_FRAG,
    uniforms: { uTime: { value: 0 }, uActivity: { value: 0 }, uSize: { value: doorSize } },
  });
  const doors = new THREE.InstancedMesh(doorGeo, doorMat, N);
  doors.name = 'module-doors';
  const seeds = new Float32Array(N);
  const o = new THREE.Object3D();
  for (let i = 0; i < N; i++) {
    const a = a0 + ((i + 0.5) * (a1 - a0)) / N;
    arcPoint(a, MEDIA.moduleR, 1.11, o.position);
    o.rotation.set(0, a, 0);
    o.updateMatrix();
    bodies.setMatrixAt(i, o.matrix);
    arcPoint(a, MEDIA.moduleR - 0.316, 1.11, o.position);
    o.rotation.set(0, a - Math.PI / 2, 0);
    o.updateMatrix();
    doors.setMatrixAt(i, o.matrix);
    seeds[i] = i * 7.31 + 3.7;
    kit.add('chrome', tf(box(0.66, 0.03, 0.82), [o.position.x, 0.015, o.position.z], [0, a, 0]));
  }
  doorGeo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 1));
  bodies.instanceMatrix.needsUpdate = true;
  doors.instanceMatrix.needsUpdate = true;
  bodies.computeBoundingSphere();
  doors.computeBoundingSphere();
  bodies.receiveShadow = true;
  root.add(bodies, doors);

  // Floors.
  const floorMat = stoneFloorMaterial(reflection);
  const floor = new THREE.Mesh(tf(new THREE.CircleGeometry(R + 0.2, 128), [0, 0, 0], [-Math.PI / 2, 0, 0]), floorMat);
  floor.name = 'atrium-floor';
  floor.position.set(cx, 0, cz);
  floor.receiveShadow = true;
  floor.layers.set(NO_REFLECT_LAYER);
  const balcony = buildBalcony({ kit, low, glassKit, floorMat, at });
  root.add(balcony.floor);
  const bounds = islandBounds();
  const tops = new THREE.Mesh(
    tf(new THREE.PlaneGeometry(bounds.x1 - bounds.x0, bounds.z1 - bounds.z0), [0, 0, 0], [-Math.PI / 2, 0, 0]),
    islandTopMaterial(reflection),
  );
  tops.name = 'island-tops';
  tops.position.set((bounds.x0 + bounds.x1) / 2, 0, (bounds.z0 + bounds.z1) / 2);
  tops.receiveShadow = true;
  tops.layers.set(NO_REFLECT_LAYER);
  root.add(floor, tops);

  // Island sides: white band with a silver edge trim and an underglow line.
  for (const s of ISLANDS) {
    low.add('satin', outwardStrip(s, 0, -ISLAND_THICKNESS, 0));
    low.add('silver', outwardStrip(s, 0.004, -0.045, -0.001));
    low.add('glowCyan', outwardStrip(s, 0.006, -ISLAND_THICKNESS, -ISLAND_THICKNESS + 0.05));
  }

  // Well walls with light bands near the rim and the bottom.
  const outline = wellOutline(0.5);
  low.add('satin', wallStrip(outline, -WELL.depth, 0, { closed: true, facing: facingWellInside }));
  const inner = insetWell(outline, 0.012);
  low.add('glowCyan', wallStrip(inner, -0.17, -0.13, { closed: true, facing: facingWellInside }));
  low.add('glowBlue', wallStrip(inner, -WELL.depth + 0.1, -WELL.depth + 0.14, { closed: true, facing: facingWellInside }));

  // Data pool.
  const poolMat = new THREE.ShaderMaterial({
    name: 'data-pool',
    vertexShader: POOL_VERT,
    fragmentShader: POOL_FRAG,
    uniforms: { uTravel: { value: 0 }, uFlow: { value: 0.3 }, uGlow: { value: 1 } },
  });
  const pool = new THREE.Mesh(tf(new THREE.PlaneGeometry(WELL.hx * 2, WELL.hz * 2), [0, 0, 0], [-Math.PI / 2, 0, 0]), poolMat);
  pool.name = 'data-pool';
  pool.position.set(WELL.cx, -WELL.depth, WELL.cz);
  pool.layers.set(NO_REFLECT_LAYER);
  root.add(pool);

  // Glass railing along the well edge, open where bridges meet the floor.
  const railLine = insetWell(outline, -0.06);
  const railGeos = [];
  for (const run of railingRuns(railLine)) {
    railGeos.push(wallStrip(run, 0.035, 1.0));
    kit.add('chrome', pipeGeometry(run.map(([x, z]) => [x, 1.01, z]), 0.022, 0.08, 8));
    kit.add('glowCyan', wallStrip(run, 0.0, 0.035));
    kit.add('glowCyan', wallStrip(run.slice().reverse(), 0.0, 0.035));
    for (let i = 0; i < run.length; i += 5) kit.add('chrome', tf(cyl(0.018, 0.018, 1.0, 8), [run[i][0], 0.5, run[i][1]]));
  }
  if (railGeos.length) {
    const k = new Kit();
    for (const g of railGeos) k.add('glass', g);
    const railing = k.build({ glass: railGlass }, { castShadow: false, receiveShadow: false, name: 'railing' });
    root.add(railing);
  }

  const glassGroup = glassKit.build(
    { glass: curtainGlass, fin: finGlass, rail: railGlass },
    { castShadow: false, receiveShadow: false, name: 'facade-glass' },
  );
  glassGroup.traverse((m) => {
    if (m.isMesh) m.renderOrder = 2;
  });
  root.add(glassGroup);
  const upper = kit.build(mats, { castShadow: false, receiveShadow: true, name: 'atrium' });
  root.add(upper);
  const lower = low.build(mats, { castShadow: false, receiveShadow: false, name: 'atrium-low' });
  lower.traverse((m) => m.layers.set(NO_REFLECT_LAYER));
  root.add(lower);

  let flow = 0.3;
  return {
    root,
    reflectors: [floor, tops, balcony.floor],
    bounds,
    update(dt, t, info = {}) {
      const activity = clamp(info.activity || 0, 0, 1);
      flow += (0.3 + 0.7 * activity - flow) * Math.min(1, dt * 2);
      poolMat.uniforms.uTravel.value = (poolMat.uniforms.uTravel.value + dt * (0.25 + 1.4 * activity)) % 1000;
      poolMat.uniforms.uFlow.value = flow;
      doorMat.uniforms.uTime.value = t;
      doorMat.uniforms.uActivity.value = flow;
    },
    setLook(look) {
      const k = look.glow == null ? 1 : look.glow;
      for (const m of glows) m.color.setHex(m.userData.glow.hex).multiplyScalar(m.userData.glow.k * k);
      ringMat.color.set(look.interior.ring).multiplyScalar(look.interior.ringPower);
      mats.ceiling.emissiveIntensity = look.id === 'day' ? 0.16 : 0.22;
      poolMat.uniforms.uGlow.value = k;
    },
  };
}
