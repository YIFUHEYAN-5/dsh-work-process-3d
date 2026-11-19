import * as THREE from 'three';
import { Kit, tf, box, cyl, rbox, sphere, arcBand, wallStrip, pipeGeometry, DEG } from './util.js';
import { plateMaterial } from './materials.js';
import { nameplate } from './displays.js';
import { ATRIUM, POOL, BALCONY, arcPoint } from './layout.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import { MACHINE_INFO } from '../../model/stations.js';

/*
 * The sky pool on the balcony: an annular-sector basin cut into the deck, filled to just below
 * the deck. On the outer arc the water runs over a knife edge into a catch trough, so seen from
 * the deck it meets the sky with no rail in between. Mosaic tiles with moving caustics, pool
 * lights under the water line, a water surface that mirrors the scene (planar reflection, or the
 * sky texture without one), loungers and parasols on the side decks, a ladder, and the SP-1 sign.
 * Everything below the deck is on NO_REFLECT_LAYER; the furniture is mirrored by the floor.
 */

const TAU = Math.PI * 2;
const KNIFE = 0.05; // thickness of the knife edge
const KNIFE_Y = POOL.water - 0.012; // the water runs over it
const TROUGH_IN = POOL.r1 + KNIFE;
const TROUGH_OUT = POOL.r1 + POOL.trough; // inner face of the outer lip
const TROUGH_Y = -0.56; // trough floor
const TROUGH_WATER = -0.47;
const LIP_Y = -0.32; // top of the outer lip
const LIGHT_Y = [-0.43, -0.39]; // pool light band under the water line

function glow(hex, k, name) {
  const m = new THREE.MeshBasicMaterial({ name, toneMapped: false });
  m.userData.glow = { hex, k };
  m.color.setHex(hex).multiplyScalar(k);
  return m;
}

const HIDDEN = new THREE.MeshBasicMaterial({ visible: false });

/** An invisible box under its own group, measured by camspace.solidsFromScene. */
function solidBox(id, w, h, d, p, rotY = 0, y0 = 0) {
  const g = new THREE.Group();
  g.name = `solid-${id}`;
  g.position.set(p.x, y0, p.z);
  g.rotation.y = rotY;
  g.userData.solid = `pool:${id}`;
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), HIDDEN);
  m.position.y = h / 2;
  g.add(m);
  return g;
}

/** A flat annular sector at height y (RingGeometry turned into the x–z plane, atrium angles). */
function sector(r0, r1, a0, a1, y, segs = 48) {
  return tf(new THREE.RingGeometry(r0, r1, segs, 1, a0, a1 - a0), [ATRIUM.cx, y, ATRIUM.cz], [-Math.PI / 2, 0, 0]);
}

const pt = (a, r) => [ATRIUM.cx + r * Math.cos(a), ATRIUM.cz - r * Math.sin(a)];

// ── Basin tiles: mosaic, depth tint and caustics ─────────────────

const CAUSTIC_GLSL = /* glsl */ `
vec2 cHash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}
// Caustic network: the edges between drifting Voronoi cells.
float cLayer(vec2 p, float t) {
  vec2 g = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0;
  float d2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 o = vec2(float(i), float(j));
      vec2 h = cHash2(g + o);
      vec2 r = o + 0.5 + 0.38 * sin(t * (0.55 + 0.5 * h) + 6.2831853 * h) - f;
      float d = dot(r, r);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
    }
  }
  return 1.0 - smoothstep(0.0, 0.16, sqrt(d2) - sqrt(d1));
}
float caustic(vec2 p, float t, float px) {
  float a = cLayer(p * 1.35, t);
  float b = cLayer(p * 2.2 + vec2(3.7, 1.3), t * 1.3);
  // Fade the network out where it would alias.
  return (0.65 * a + 0.35 * b) * (1.0 - smoothstep(0.08, 0.3, px * 2.2));
}`;

function tileMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0xa6dbe6, metalness: 0, roughness: 0.32, name: 'pool-tile' });
  const uniforms = { uTime: { value: 0 }, uCaustic: { value: 1 }, uCausticColor: { value: new THREE.Color(0.75, 0.95, 1.0) } };
  m.userData.uniforms = uniforms;
  m.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vPoolP;\nvarying vec3 vPoolN;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvPoolP = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvPoolN = normalize(mat3(modelMatrix) * objectNormal);',
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform float uTime;
uniform float uCaustic;
uniform vec3 uCausticColor;
varying vec3 vPoolP;
varying vec3 vPoolN;
${CAUSTIC_GLSL}`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
vec3 pn = normalize(vPoolN);
vec2 tc = abs(pn.y) > 0.5 ? vPoolP.xz : vec2(dot(vPoolP.xz, vec2(-pn.z, pn.x)), vPoolP.y);
float tpx = length(fwidth(tc));
vec2 cell = tc / 0.11;
vec2 fr = abs(fract(cell) - 0.5);
float grout = (1.0 - smoothstep(0.42, 0.47, max(fr.x, fr.y))) ;
float tileN = fract(sin(dot(floor(cell), vec2(12.9898, 78.233))) * 43758.5453);
float groutK = mix(0.72, 1.0, mix(grout, 1.0, smoothstep(0.004, 0.02, tpx)));
diffuseColor.rgb *= groutK * (0.92 + 0.12 * tileN);
// Light that reaches the walls and the floor has passed through the water.
float under = clamp(-vPoolP.y / ${POOL.depth.toFixed(3)}, 0.0, 1.0);
diffuseColor.rgb *= mix(vec3(1.0), vec3(0.42, 0.78, 0.86), under);`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
float ck = caustic(tc, uTime, tpx) * uCaustic * (1.0 - smoothstep(-0.25, -0.02, vPoolP.y));
totalEmissiveRadiance += uCausticColor * ck * (0.35 + 0.65 * max(pn.y, 0.0));`,
      );
  };
  m.customProgramCacheKey = () => 'dwp3d-pool-tile';
  return m;
}

// ── Water ────────────────────────────────────────────────────────

const WATER_VERT = /* glsl */ `
varying vec3 vWorld;
#ifdef USE_REFL
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
#endif
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
#ifdef USE_REFL
  vReflCoord = uReflMatrix * vec4(wp.x, 0.0, wp.z, 1.0);
#endif
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const WATER_FRAG = /* glsl */ `
#include <common>
uniform float uTime;
uniform vec3 uBody;
uniform float uGlow;
uniform float uClarity;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uGlint;
uniform sampler2D tSky;
uniform float uSkyK;
uniform vec2 uCentre;
uniform float uEdgeR;
#ifdef USE_REFL
uniform sampler2D tReflect;
varying vec4 vReflCoord;
#endif
varying vec3 vWorld;

vec2 wave(vec2 p, float t, vec2 d, float lambda, float amp, float speed) {
  float k = 6.2831853 / lambda;
  return d * (amp * k * cos((dot(d, p) - t * speed) * k));
}

void main() {
  vec3 toEye = cameraPosition - vWorld;
  float dist = length(toEye);
  vec3 V = toEye / dist;
  float px = length(fwidth(vWorld.xz));
  vec2 p = vWorld.xz;
  float t = uTime;
  vec2 g = wave(p, t, vec2(0.83, 0.56), 2.4, 0.012, 0.55);
  g += wave(p, t, vec2(-0.47, 0.88), 1.55, 0.007, 0.45);
  g += wave(p, t, vec2(0.21, -0.98), 0.97, 0.004, 0.38);
  // Fine ripples only where a pixel is smaller than the ripple.
  float fine = 1.0 - smoothstep(0.02, 0.09, px);
  g += fine * wave(p, t, vec2(-0.93, -0.36), 0.42, 0.0016, 0.3);
  g += fine * wave(p, t, vec2(0.6, -0.8), 0.27, 0.0009, 0.26);
  g *= 1.0 / (1.0 + dist * 0.02);
  vec3 N = normalize(vec3(-g.x, 1.0, -g.y));

  float cosT = clamp(dot(N, V), 0.0, 1.0);
  float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
  vec3 R = reflect(-V, N);
#ifdef USE_REFL
  vec2 ruv = vReflCoord.xy / max(vReflCoord.w, 1e-4) + N.xz * 0.03;
  vec3 refl = texture2D(tReflect, ruv).rgb;
#else
  vec2 suv = vec2(atan(R.z, R.x) * RECIPROCAL_PI2 + 0.5, asin(clamp(R.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5);
  vec3 refl = texture2D(tSky, suv).rgb * uSkyK;
#endif
  vec3 H = normalize(uSunDir + V);
  float glint = pow(max(dot(N, H), 0.0), 380.0) * uGlint * step(0.0, uSunDir.y);

  // Scattered light in the water body (lit by the pool lights at night).
  vec3 body = uBody * (0.35 + uGlow);
  float trans = (1.0 - F) * uClarity;
  vec3 col = refl * F + body * (1.0 - F) * (1.0 - uClarity) + uSunColor * glint;
  // The water curls over the knife edge: a faint bright line along the outer arc, dying out at
  // the knife itself so the catch trough beyond it stays dark.
  float r = length(p - uCentre);
  float lip = smoothstep(uEdgeR - 0.05, uEdgeR, r) * (1.0 - smoothstep(uEdgeR + 0.002, uEdgeR + 0.05, r));
  col += vec3(0.55, 0.85, 1.0) * lip * 0.12;
  gl_FragColor = vec4(col, 1.0 - trans);
}`;

function waterMaterial(reflection, skyTexture) {
  const uniforms = {
    uTime: { value: 0 },
    uBody: { value: new THREE.Color(0x1aa6bd) },
    uGlow: { value: 0.3 },
    uClarity: { value: 0.82 },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color(1, 1, 1) },
    uGlint: { value: 6 },
    tSky: { value: skyTexture || null },
    uSkyK: { value: 1 },
    uCentre: { value: new THREE.Vector2(ATRIUM.cx, ATRIUM.cz) },
    uEdgeR: { value: POOL.r1 },
  };
  const defines = {};
  if (reflection) {
    uniforms.tReflect = reflection.uniforms.tReflect;
    uniforms.uReflMatrix = reflection.uniforms.uReflMatrix;
    defines.USE_REFL = '';
  }
  return new THREE.ShaderMaterial({
    name: 'pool-water',
    uniforms,
    defines,
    vertexShader: WATER_VERT,
    fragmentShader: WATER_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.OneFactor,
    side: THREE.FrontSide,
  });
}

// ── Builder ──────────────────────────────────────────────────────

/** Transform geometry built in a local frame (+x radial outward, +y up) to angle a, radius r. */
function placer(a, r, y = 0, extraRot = 0) {
  const m = new THREE.Matrix4().makeRotationY(a + extraRot);
  const p = arcPoint(a, r, y);
  m.setPosition(p);
  return (geo) => geo.applyMatrix4(m);
}

/**
 * buildPool(M, { reflection, skyTexture }) → { root, hover, labelAnchor, update(dt, t),
 * setLook(look), dispose() }. `reflection` (optional) is the floor mirror the water samples;
 * without it the water reflects `skyTexture`.
 */
export function buildPool(M, { reflection = null, skyTexture = null } = {}) {
  const root = new THREE.Group();
  root.name = 'pool';
  const { a0, a1, r0, r1, depth } = POOL;
  const centre = pt((a0 + a1) / 2, (r0 + r1) / 2);
  const towardPool = (mx, mz, nx, nz) => (centre[0] - mx) * nx + (centre[1] - mz) * nz > 0;

  const tile = tileMaterial();
  const mats = {
    tile,
    silver: new THREE.MeshStandardMaterial({ color: 0xc9ced6, metalness: 1, roughness: 0.26, name: 'pool-silver' }),
    light: glow(0x5fe8ff, 3.2, 'pool-light'),
  };

  // Basin and trough, all below the deck.
  const basin = new Kit();
  basin.add('tile', sector(r0, r1, a0, a1, -depth, 64));
  basin.add('tile', arcBand(ATRIUM.cx, ATRIUM.cz, r0, a0, a1, -depth, 0, 64, false));
  basin.add('tile', arcBand(ATRIUM.cx, ATRIUM.cz, r1, a0, a1, -depth, KNIFE_Y, 64, true));
  basin.add('silver', sector(r1, TROUGH_IN, a0, a1, KNIFE_Y, 64));
  basin.add('tile', arcBand(ATRIUM.cx, ATRIUM.cz, TROUGH_IN, a0, a1, TROUGH_Y, KNIFE_Y, 64, false));
  basin.add('tile', sector(TROUGH_IN, TROUGH_OUT, a0, a1, TROUGH_Y, 64));
  basin.add('tile', arcBand(ATRIUM.cx, ATRIUM.cz, TROUGH_OUT, a0, a1, TROUGH_Y, LIP_Y, 64, true));
  basin.add('silver', sector(TROUGH_OUT, BALCONY.r1, a0, a1, LIP_Y, 64));
  for (const a of [a0, a1]) {
    basin.add('tile', wallStrip([pt(a, r0), pt(a, r1)], -depth, 0, { facing: towardPool }));
    basin.add('tile', wallStrip([pt(a, r1), pt(a, TROUGH_OUT)], TROUGH_Y, 0, { facing: towardPool }));
    basin.add('tile', wallStrip([pt(a, TROUGH_OUT), pt(a, BALCONY.r1)], LIP_Y, 0, { facing: towardPool }));
  }
  // Pool lights: a band under the water line all round the basin.
  const inset = 0.004;
  basin.add('light', arcBand(ATRIUM.cx, ATRIUM.cz, r0 + inset, a0, a1, LIGHT_Y[0], LIGHT_Y[1], 64, false));
  basin.add('light', arcBand(ATRIUM.cx, ATRIUM.cz, r1 - inset, a0, a1, LIGHT_Y[0], LIGHT_Y[1], 64, true));
  for (const [a, s] of [[a0, 1], [a1, -1]]) {
    const ai = a + (s * inset) / ((r0 + r1) / 2);
    basin.add('light', wallStrip([pt(ai, r0), pt(ai, r1)], LIGHT_Y[0], LIGHT_Y[1], { facing: towardPool }));
  }
  const basinGroup = basin.build(mats, { castShadow: false, receiveShadow: false, name: 'pool-basin' });
  basinGroup.traverse((o) => o.layers.set(NO_REFLECT_LAYER));
  root.add(basinGroup);

  // Water: the pool and the trough share one material.
  const water = waterMaterial(reflection, skyTexture);
  const surface = new THREE.Mesh(sector(r0, r1, a0, a1, POOL.water, 96), water);
  surface.name = 'pool-water';
  const trough = new THREE.Mesh(sector(TROUGH_IN, TROUGH_OUT, a0, a1, TROUGH_WATER, 64), water);
  trough.name = 'pool-trough-water';
  for (const w of [surface, trough]) {
    w.renderOrder = 1;
    w.layers.set(NO_REFLECT_LAYER);
    root.add(w);
  }

  // Deck furniture (mirrored by the floor): loungers and a parasol on each side deck, a ladder,
  // the SP-1 sign.
  const cushion = new THREE.MeshStandardMaterial({ color: 0xe7eaee, metalness: 0, roughness: 0.88, name: 'pool-cushion' });
  const fabric = new THREE.MeshStandardMaterial({ color: 0xf4f1ea, metalness: 0, roughness: 0.85, side: THREE.DoubleSide, name: 'pool-fabric' });
  const furn = new Kit();
  const shade = new Kit();
  const solids = new THREE.Group();
  solids.name = 'pool-solids';
  const decks = [
    { from: BALCONY.a0, to: a0 },
    { from: a1, to: BALCONY.a1 },
  ];
  let loungers = 0;
  for (const deck of decks) {
    const w = deck.to - deck.from;
    for (let k = 0; k < 3; k++) {
      const a = deck.from + (w * (k + 0.75)) / 3.5;
      const r = 26.9;
      const place = placer(a, r);
      // Frame, seat cushion, raised back, legs, a rolled towel.
      furn.add('white', place(tf(rbox(1.9, 0.08, 0.66, 0.03, 2), [0, 0.27, 0])));
      furn.add('cushion', place(tf(rbox(1.22, 0.07, 0.6, 0.03, 2), [0.3, 0.345, 0])));
      furn.add('cushion', place(tf(rbox(0.66, 0.07, 0.6, 0.03, 2), [-0.63, 0.55, 0], [0, 0, -35 * DEG])));
      furn.add('white', place(tf(rbox(0.66, 0.05, 0.64, 0.02, 2), [-0.6, 0.5, 0], [0, 0, -35 * DEG])));
      for (const lx of [-0.8, 0.8]) for (const lz of [-0.27, 0.27]) furn.add('chrome', place(tf(cyl(0.017, 0.017, 0.25, 8), [lx, 0.125, lz])));
      furn.add('towel', place(tf(cyl(0.07, 0.07, 0.52, 14), [0.8, 0.45, 0], [Math.PI / 2, 0, 0])));
      shade.add('shadow', place(tf(new THREE.PlaneGeometry(2.2, 1.0), [0, 0.006, 0], [-Math.PI / 2, 0, 0])));
      solids.add(solidBox(`lounger-${++loungers}`, 1.95, 0.78, 0.7, arcPoint(a, r), a));
    }
    // Parasol between the loungers and the balustrade.
    const a = (deck.from + deck.to) / 2;
    const r = 29.2;
    const place = placer(a, r);
    furn.add('graphite', place(tf(cyl(0.24, 0.27, 0.06, 24), [0, 0.03, 0])));
    furn.add('chrome', place(tf(cyl(0.022, 0.022, 2.32, 10), [0, 1.2, 0])));
    furn.add('fabric', place(tf(new THREE.ConeGeometry(1.4, 0.42, 24, 1, true), [0, 2.24, 0])));
    furn.add('chrome', place(tf(sphere(0.04, 10, 8), [0, 2.47, 0])));
    for (let k = 0; k < 8; k++) {
      const ra = (k / 8) * TAU;
      const tip = [Math.cos(ra) * 1.38, 2.03, Math.sin(ra) * 1.38];
      furn.add('chrome', place(pipeGeometry([[0, 2.43, 0], tip], 0.008, 0.01, 5)));
    }
    shade.add('shadow', place(tf(new THREE.CircleGeometry(1.25, 24), [0, 0.006, 0], [-Math.PI / 2, 0, 0])));
    const pos = arcPoint(a, r);
    solids.add(solidBox(`parasol-pole-${deck.from > a0 ? 2 : 1}`, 0.3, 2.0, 0.3, pos));
    solids.add(solidBox(`parasol-${deck.from > a0 ? 2 : 1}`, 2.8, 0.5, 2.8, pos, 0, 1.98));
  }

  // Ladder at the inner edge: two chrome rails over the coping, steps under the water.
  {
    const a = 262 * DEG;
    const place = placer(a, r0);
    for (const z of [-0.26, 0.26]) {
      const rail = [[-0.36, 0, z], [-0.36, 0.78, z], [-0.22, 0.95, z], [0.02, 0.95, z], [0.12, 0.72, z], [0.12, -0.95, z]];
      furn.add('chrome', place(pipeGeometry(rail, 0.021, 0.12, 10)));
      furn.add('chrome', place(tf(cyl(0.04, 0.04, 0.012, 14), [-0.36, 0.006, z])));
    }
    for (const y of [-0.28, -0.58, -0.88]) furn.add('chrome', place(tf(box(0.06, 0.025, 0.5), [0.15, y, 0])));
  }

  // SP-1 sign at the corner of the left deck, facing the hall.
  const info = MACHINE_INFO.pool;
  const plate = nameplate(info.zh, info.en, info.code, '#2fa8d8');
  const signA = 247.5 * DEG;
  const signR = 24.9;
  {
    const place = placer(signA, signR, 0, -Math.PI / 2);
    furn.add('white', place(tf(rbox(0.62, 1.04, 0.12, 0.03, 2), [0, 0.52, 0])));
    furn.add('graphite', place(tf(box(0.5, 0.02, 0.1), [0, 0.01, 0])));
    furn.add('glow', place(tf(box(0.58, 0.012, 0.004), [0, 0.62, 0.061])));
  }
  const plateMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.14), plateMaterial(plate.tex, 0.2));
  plateMesh.name = 'pool-nameplate';
  {
    const p = arcPoint(signA, signR, 0.82);
    plateMesh.position.copy(p);
    plateMesh.rotation.y = signA - Math.PI / 2;
    plateMesh.translateZ(0.0605);
  }
  root.add(plateMesh);
  solids.add(solidBox('sign', 0.66, 1.06, 0.18, arcPoint(signA, signR), signA - Math.PI / 2));

  const furnGroup = furn.build(
    { white: M.white, chrome: M.chrome, graphite: M.graphite, towel: M.blue, cushion, fabric, glow: mats.light },
    { castShadow: false, receiveShadow: true, name: 'pool-furniture' },
  );
  root.add(furnGroup);
  const shadeGroup = shade.build({ shadow: M.shadow }, { castShadow: false, receiveShadow: false, name: 'pool-shadows' });
  shadeGroup.traverse((o) => {
    o.layers.set(NO_REFLECT_LAYER);
    o.renderOrder = -1;
  });
  root.add(shadeGroup, solids);

  // Hover proxy: the water surface.
  const proxy = new THREE.Mesh(sector(r0, TROUGH_OUT, a0, a1, POOL.water, 24), HIDDEN);
  proxy.name = 'pool-hover';
  root.add(proxy);

  const glows = [mats.light];
  const sunDir = water.uniforms.uSunDir.value;
  return {
    root,
    hover: [{ id: 'pool', object: proxy }],
    labelAnchor: arcPoint((a0 + a1) / 2, (r0 + r1) / 2 + 0.6, 2.5),
    water,
    update(dt, t) {
      water.uniforms.uTime.value = t;
      tile.userData.uniforms.uTime.value = t;
    },
    setLook(look) {
      const P = look.pool || {};
      const k = look.glow == null ? 1 : look.glow;
      const lights = P.lights == null ? 1 : P.lights;
      for (const m of glows) m.color.setHex(m.userData.glow.hex).multiplyScalar(m.userData.glow.k * k * lights);
      water.uniforms.uBody.value.set(P.body == null ? 0x1aa6bd : P.body);
      water.uniforms.uGlow.value = P.glow == null ? 0.3 : P.glow;
      water.uniforms.uClarity.value = P.clarity == null ? 0.82 : P.clarity;
      water.uniforms.uGlint.value = P.glint == null ? 6 : P.glint;
      water.uniforms.uSkyK.value = P.skyK == null ? 1 : P.skyK;
      sunDir.fromArray(look.sun.dir).normalize();
      water.uniforms.uSunColor.value.set(look.sun.color).multiplyScalar(look.sun.intensity / 3);
      tile.userData.uniforms.uCaustic.value = P.caustic == null ? 1 : P.caustic;
    },
    dispose() {
      plate.tex.dispose();
    },
  };
}

/** Exposed for tests: heights of the basin parts. */
export const POOL_LEVELS = { knife: KNIFE_Y, troughFloor: TROUGH_Y, troughWater: TROUGH_WATER, lip: LIP_Y, troughOut: TROUGH_OUT };
