import * as THREE from 'three';
import { canvasTexture, FONT_SANS, FONT_MONO, clamp } from './util.js';
import { ATRIUM } from './layout.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import {
  AIR_SPAN,
  CITY_GLSL,
  GRID,
  GROUND_Y,
  HAZE_UNIFORMS,
  TRAVEL_WRAP,
  createCityUniforms,
  gridToWorld,
  pickUniforms,
  polar,
  rng,
} from './cityCommon.js';
import { buildGround, buildHostFacade } from './cityGround.js';
import { buildTraffic } from './cityTraffic.js';

/*
 * The city around the atrium tower. The hall is the top floor of a 420 m skyscraper; nothing
 * nearby reaches its height, so the view is open: roofs 100–400 m below on a glowing street grid,
 * rising toward a skyline of distant towers and a dozen landmark megatowers. The cloud compute
 * tower stands 700 m away and sends an energy beam to the fuel tank while tokens are consumed;
 * a space-elevator tether climbs into the sky behind the hall, a data ring circles a downtown
 * tower, and a live billboard shows the model and its token rate. Flying traffic follows the
 * avenues below (see cityTraffic.js). Everything is a few instanced draw calls; all animation runs
 * on the GPU from shared uniforms.
 */

const DEG = Math.PI / 180;
const P = GRID.pitch;

/** Downtown clusters that lift the skyline (atrium angle in degrees, distance, radius). */
const CLUSTERS = [
  { a: 240, r: 1000, radius: 300 },
  { a: 75, r: 900, radius: 260 },
  { a: 150, r: 1300, radius: 340 },
];

/** Landmark towers: atrium angle (°), distance (m), footprint (m), roof height above the hall floor (m). */
const MEGA = [
  { a: 62, r: 620, w: 104, d: 56, top: 96, style: 1, billboard: true, faceAtrium: true },
  { a: 95, r: 2400, w: 90, d: 90, top: 150, style: 3, tether: true },
  { a: 48, r: 1350, w: 70, d: 70, top: 120, style: 3 },
  { a: 112, r: 1500, w: 85, d: 85, top: 185, style: 0 },
  { a: 205, r: 1100, w: 70, d: 70, top: 140, style: 3 },
  { a: 233, r: 1300, w: 60, d: 60, top: 200, style: 0, twin: 0 },
  { a: 240, r: 1300, w: 60, d: 60, top: 185, style: 0, twin: 1 },
  { a: 285, r: 1900, w: 100, d: 100, top: 230, style: 3 },
  { a: 315, r: 1150, w: 64, d: 64, top: 110, style: 2 },
  { a: 175, r: 1250, w: 70, d: 70, top: 160, style: 3, ring: true },
  { a: 20, r: 1400, w: 80, d: 80, top: 170, style: 0 },
  { a: 345, r: 1600, w: 75, d: 75, top: 135, style: 3 },
];
const COMPUTE = { a: 120, r: 700, w: 72, d: 72, top: 205, style: 3, compute: true };

// ── Towers ────────────────────────────────────────────────────────

const TOWER_VERT = /* glsl */ `
attribute vec3 aSize;   // width (local x), height, depth (local z), metres
attribute vec3 aInfo;   // seed (0..1), style, flags
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;     // walls: (along the face, height above the base); roof: local x/z
varying vec3 vInfo;
varying vec3 vSize;
varying float vWall;
varying float vTop;
void main() {
  vec3 lp = position * aSize;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  bool sideX = abs(normal.x) > 0.5;
  vTop = normal.y > 0.5 ? 1.0 : 0.0;
  vFace = vTop > 0.5 ? lp.xz : vec2(sideX ? lp.z : lp.x, lp.y);
  vWall = sideX ? aSize.z : aSize.x;
  vInfo = aInfo;
  vSize = aSize;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const TOWER_FRAG = /* glsl */ `
${CITY_GLSL}
uniform vec3 uBody;
uniform vec3 uGlass;
uniform vec3 uSkyRefl;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunK;
uniform float uWindows;
uniform float uNeon;
uniform float uLights;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying vec3 vInfo;
varying vec3 vSize;
varying float vWall;
varying float vTop;

vec3 neonColor(float s) {
  float k = fract(s * 3.17);
  return k < 0.45 ? vec3(0.27, 0.9, 1.0)
    : (k < 0.78 ? vec3(0.3, 0.48, 1.0)
    : (k < 0.95 ? vec3(1.0, 0.68, 0.26) : vec3(1.0, 0.32, 0.85)));
}
float flag(float flags, float b) {
  return mod(floor(flags / b + 0.01), 2.0);
}

void main() {
  float seed = vInfo.x;
  float style = vInfo.y;
  float flags = vInfo.z;
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float px = max(length(fwidth(vWorld)), 1e-3);
  float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
  vec3 lightK = vec3(0.3 + 0.12 * n.y) + uSunColor * (max(dot(n, uSunDir), 0.0) * uSunK);
  vec3 neon = neonColor(seed);
  vec3 col;
  if (flag(flags, 4.0) > 0.5) {
    // Antenna mast.
    col = uBody * lightK * 0.8;
  } else if (vTop > 0.5) {
    // Roof: membrane patches, edge lights, helipad ring.
    vec2 rf = vFace;
    float rh = cHash(floor(rf / 4.0) + seed * 17.0);
    col = uBody * lightK * (0.5 + 0.3 * rh);
    float edge = min(vSize.x * 0.5 - abs(rf.x), vSize.z * 0.5 - abs(rf.y));
    col += neon * (uNeon * cLine(abs(edge - 0.6), 0.22, px) * 2.4 * flag(flags, 2.0));
    float pad = min(vSize.x, vSize.z) * 0.3;
    col += vec3(0.85, 0.95, 1.0) * (uLights * cLine(abs(length(rf) - pad), 0.35, px) * 2.2 * flag(flags, 1.0));
    col += vec3(1.0, 0.85, 0.6) * (uLights * 0.03);
  } else {
    // Walls: window grid by style, faded to its average once a cell is under a pixel or so.
    vec2 f = vFace;
    vec2 cell = style < 0.5 ? vec2(1.6, 3.6) : (style < 1.5 ? vec2(12.0, 3.6) : (style < 2.5 ? vec2(2.4, 3.6) : vec2(1.8, 4.0)));
    vec2 win = style < 0.5 ? vec2(0.86, 0.8) : (style < 1.5 ? vec2(0.96, 0.4) : (style < 2.5 ? vec2(0.5, 0.5) : vec2(0.9, 0.78)));
    vec2 g = f / cell;
    vec2 ci = floor(g);
    vec2 inner = win * 0.5 - abs(g - ci - 0.5);
    vec2 pxc = vec2(px) / cell;
    float wmask = smoothstep(-pxc.x, pxc.x, inner.x) * smoothstep(-pxc.y, pxc.y, inner.y);
    float cover = win.x * win.y;
    float detail = 1.0 - smoothstep(0.3, 0.75, px / min(cell.x, cell.y));
    float m = mix(cover, wmask, detail);
    float pLit = uWindows * (0.3 + 0.55 * fract(seed * 7.31));
    float lit = step(cHash(ci + seed * 13.1), pLit);
    float tone = cHash(ci * 1.37 + seed * 5.3);
    vec3 wc = tone < 0.55 ? vec3(1.0, 0.8, 0.55) : (tone < 0.9 ? vec3(0.8, 0.88, 1.0) : neon * 0.8);
    vec3 winLit = wc * ((0.8 + 0.9 * cHash(ci + 4.2 + seed)) * lit);
    vec3 winAvg = vec3(0.93, 0.84, 0.74) * (1.2 * pLit);
    vec3 emit = mix(winAvg * cover, winLit * wmask, detail);
    vec3 facade = uBody * lightK;
    vec3 glass = uGlass * lightK + uSkyRefl * (0.15 + 0.85 * fres);
    col = mix(facade, glass, m) + emit * 1.25;
    float crown = smoothstep(vSize.y - 3.2, vSize.y - 2.8, f.y) * (1.0 - smoothstep(vSize.y - 0.8, vSize.y - 0.4, f.y));
    col += neon * (uNeon * crown * 2.2 * flag(flags, 8.0));
    if (style > 2.5) {
      float corner = vWall * 0.5 - abs(f.x);
      float band = abs(fract(f.y / 40.0 + 0.5) - 0.5) * 40.0;
      col += neon * (uNeon * (cLine(corner, 0.35, px) * 2.6 + cLine(band, 0.45, px) * 1.8));
    }
  }
  gl_FragColor = vec4(cityHaze(col, vWorld), 1.0);
}
`;

function distToAtrium(x, z) {
  return Math.hypot(x - ATRIUM.cx, z - ATRIUM.cz);
}

function generateTowers(quality, keepOut) {
  const r = rng(17);
  const maxR = quality === 'low' ? 1500 : 2600;
  const n = Math.ceil(maxR / P) + 1;
  const lots = [[-24, -24], [24, -24], [-24, 24], [24, 24]];
  const clusters = CLUSTERS.map((c) => {
    const [x, z] = polar(c.a * DEG, c.r);
    return { x, z, r2: c.radius * c.radius };
  });
  const tmp = [0, 0];
  const list = [];
  for (let i = -n; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
      for (const [ox, oz] of lots) {
        const qx = i * P + ox;
        const qz = j * P + oz;
        const d = Math.hypot(qx, qz);
        if (d < 110 || d > maxR) continue;
        const fill = d < 2000 ? 0.62 : 0.62 * (1 - (d - 2000) / 650);
        if (r() > fill) continue;
        const w = 12 + r() * 20;
        const depth = 12 + r() * 20;
        const jx = (r() - 0.5) * Math.max(0, 37 - w);
        const jz = (r() - 0.5) * Math.max(0, 37 - depth);
        gridToWorld(qx + jx, qz + jz, tmp);
        const x = tmp[0];
        const z = tmp[1];
        if (keepOut.some((k) => Math.hypot(k.x - x, k.z - z) < k.rad)) continue;
        const near = clamp((d - 120) / 650, 0, 1);
        let h = 22 + Math.pow(r(), 2.2) * (70 + 250 * near);
        let cw = 0;
        for (const c of clusters) cw = Math.max(cw, Math.exp(-((x - c.x) ** 2 + (z - c.z) ** 2) / c.r2));
        h += cw * (140 + 220 * r());
        const top = Math.min(GROUND_Y + h, cw > 0.3 ? 60 : -40);
        const s = r();
        const style = cw > 0.3 ? (s < 0.3 ? 0 : s < 0.45 ? 1 : s < 0.6 ? 2 : 3) : s < 0.35 ? 0 : s < 0.6 ? 1 : s < 0.9 ? 2 : 3;
        let flags = 0;
        if (Math.min(w, depth) >= 22 && r() < 0.18) flags |= 1;
        if (r() < 0.45) flags |= 2;
        if (r() < 0.35) flags |= 8;
        list.push({ x, z, w, d: depth, base: GROUND_Y - 20, top, rot: GRID.rot, seed: r(), style, flags });
      }
    }
  }
  return list;
}

function addAntennas(grid) {
  const r = rng(29);
  const out = [];
  for (const t of grid) {
    if (t.top < -300 || r() > 0.25) continue;
    const h = 15 + r() * 30;
    out.push({
      x: t.x + (r() - 0.5) * t.w * 0.4,
      z: t.z + (r() - 0.5) * t.d * 0.4,
      w: 1.2,
      d: 1.2,
      base: t.top,
      top: t.top + h,
      rot: t.rot,
      seed: r(),
      style: 0,
      flags: 4,
    });
  }
  return out;
}

function landmarks() {
  const towers = [];
  const out = { towers, billboard: null, tether: null, ring: null, compute: null, twins: [] };
  const add = (m) => {
    const a = m.a * DEG;
    const [x, z] = polar(a, m.r);
    const rot = m.faceAtrium ? Math.atan2(-Math.cos(a), Math.sin(a)) : GRID.rot;
    const t = { x, z, w: m.w, d: m.d, base: GROUND_Y - 20, top: m.top, rot, seed: (m.a * 0.6180339) % 1, style: m.style, flags: 2 | 8, mega: true, a, r: m.r };
    towers.push(t);
    return t;
  };
  for (const m of MEGA) {
    const t = add(m);
    if (m.billboard) out.billboard = t;
    if (m.tether) out.tether = t;
    if (m.ring) out.ring = t;
    if (m.twin !== undefined) out.twins[m.twin] = t;
  }
  out.compute = add(COMPUTE);
  // Sky bridges between the twin towers.
  const [ta, tb] = out.twins;
  const dx = tb.x - ta.x;
  const dz = tb.z - ta.z;
  const len = Math.hypot(dx, dz) - Math.min(ta.w, tb.w) * 0.8;
  const rot = Math.atan2(-dz, dx);
  for (const [k, y] of [[0.31, 40], [0.47, 95], [0.73, 150]]) {
    towers.push({ x: (ta.x + tb.x) / 2, z: (ta.z + tb.z) / 2, w: len, d: 14, base: y, top: y + 8, rot, seed: k, style: 2, flags: 0, bridge: true });
  }
  return out;
}

function buildTowerMesh(list, material, name) {
  const geo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const n = list.length;
  const size = new Float32Array(n * 3);
  const info = new Float32Array(n * 3);
  const mesh = new THREE.InstancedMesh(geo, material, n);
  const o = new THREE.Object3D();
  list.forEach((t, i) => {
    const h = t.top - t.base;
    o.position.set(t.x, t.base, t.z);
    o.rotation.set(0, t.rot, 0);
    o.scale.set(t.w, h, t.d);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
    size[i * 3] = t.w;
    size[i * 3 + 1] = h;
    size[i * 3 + 2] = t.d;
    info[i * 3] = t.seed;
    info[i * 3 + 1] = t.style;
    info[i * 3 + 2] = t.flags;
  });
  geo.setAttribute('aSize', new THREE.InstancedBufferAttribute(size, 3));
  geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 3));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  mesh.name = name;
  return mesh;
}

// ── Aviation beacons ─────────────────────────────────────────────

const BEACON_VERT = /* glsl */ `
${CITY_GLSL}
attribute float aSeed;
uniform float uTime;
varying float vBlink;
varying float vFade;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_PointSize = clamp(1600.0 / max(-mv.z, 1.0), 1.5, 6.0);
  vBlink = step(0.55, fract(uTime * (0.45 + fract(aSeed * 3.1) * 0.3) + aSeed));
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const BEACON_FRAG = /* glsl */ `
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;

function rotated(t, lx, lz, y) {
  const c = Math.cos(t.rot);
  const s = Math.sin(t.rot);
  return [t.x + lx * c + lz * s, y, t.z - lx * s + lz * c];
}

function buildBeacons(shared, grid, antennas, marks) {
  const r = rng(71);
  const pts = [];
  for (const t of grid) if (t.top > -240 && r() < 0.5) pts.push(t.x, t.top + 1.5, t.z);
  for (const a of antennas) pts.push(a.x, a.top + 0.8, a.z);
  for (const t of marks.towers) {
    if (!t.mega) continue;
    for (const [ox, oz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) pts.push(...rotated(t, (ox * t.w) / 2.15, (oz * t.d) / 2.15, t.top + 1.5));
  }
  const n = pts.length / 3;
  const seeds = new Float32Array(n);
  for (let i = 0; i < n; i++) seeds[i] = r();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  const material = new THREE.ShaderMaterial({
    name: 'city-beacons',
    vertexShader: BEACON_VERT,
    fragmentShader: BEACON_FRAG,
    uniforms: pickUniforms(shared, [...HAZE_UNIFORMS, 'uTime', 'uBeacons']),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, material);
  points.name = 'city-beacons';
  points.frustumCulled = false;
  points.layers.set(NO_REFLECT_LAYER);
  return { points, count: n };
}

// ── Holo signs ───────────────────────────────────────────────────

const SIGN_WORDS = [
  ['算力', '#46e6ff'], ['TOKEN', '#4d7bff'], ['NEURAL', '#cfe8ff'], ['推理中心', '#46e6ff'],
  ['数据港', '#ffb347'], ['AI CORE', '#4d7bff'], ['云端算力', '#46e6ff'], ['∞ CONTEXT', '#ffb347'],
  ['GPU 集群', '#46e6ff'], ['SYNAPSE', '#ff4fd8'], ['模型工厂', '#cfe8ff'], ['NODE-07', '#46e6ff'],
  ['光子网络', '#4d7bff'], ['0 ms', '#46e6ff'], ['量子缓存', '#ffb347'], ['OPEN API', '#ff4fd8'],
];
const COMPUTE_WORD = 6;

const SIGN_VERT = /* glsl */ `
${CITY_GLSL}
attribute vec4 aCell;
attribute vec4 aTint;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
varying float vFade;
void main() {
  vUv = aCell.xy + uv * aCell.zw;
  vTint = aTint.rgb;
  vSeed = aTint.w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const SIGN_FRAG = /* glsl */ `
uniform sampler2D tAtlas;
uniform float uTime;
uniform float uNeon;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
varying float vFade;
void main() {
  float m = texture2D(tAtlas, vUv).a;
  float fl = vSeed > 0.82 ? step(0.16, fract(sin(floor(uTime * 9.0 + vSeed * 50.0) * 12.9898) * 43758.5453)) : 1.0;
  gl_FragColor = vec4(vTint * ((3.0 * m + 0.1) * fl * uNeon * vFade), 1.0);
}
`;

function signAtlas() {
  const cols = 2;
  const rows = 8;
  const cw = 512;
  const ch = 128;
  const atlas = canvasTexture(cols * cw, rows * ch, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    SIGN_WORDS.forEach(([text], i) => {
      const x = (i % cols) * cw;
      const y = Math.floor(i / cols) * ch;
      g.save();
      g.beginPath();
      g.rect(x, y, cw, ch);
      g.clip();
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      const size = /[\u4e00-\u9fff]/.test(text) ? 78 : 70;
      g.font = `700 ${size}px ${FONT_SANS}`;
      g.fillStyle = '#ffffff';
      g.shadowColor = '#ffffff';
      g.shadowBlur = 18;
      g.fillText(text, x + cw / 2, y + ch / 2 + 2);
      g.shadowBlur = 6;
      g.fillText(text, x + cw / 2, y + ch / 2 + 2);
      // Thin frame so each sign reads as a panel.
      g.shadowBlur = 0;
      g.strokeStyle = 'rgba(255,255,255,0.55)';
      g.lineWidth = 3;
      g.strokeRect(x + 6, y + 6, cw - 12, ch - 12);
      g.restore();
    });
  }, { anisotropy: 4 });
  return { atlas, cols, rows };
}

function signPlacements(grid, marks) {
  const r = rng(53);
  const out = [];
  const picks = grid.filter((t) => {
    const d = distToAtrium(t.x, t.z);
    return d > 150 && d < 800 && t.top > -330 && Math.min(t.w, t.d) >= 16;
  });
  const used = new Set();
  for (let k = 0; k < 60 && out.length < 14 && picks.length; k++) {
    const i = Math.floor(r() * picks.length);
    if (used.has(i)) continue;
    used.add(i);
    const t = picks[i];
    const w = 22 + r() * 18;
    out.push({ pos: [t.x, t.top + w / 8 + 2.5, t.z], w, word: Math.floor(r() * SIGN_WORDS.length), tilt: true });
  }
  for (const t of marks.towers) {
    if (!t.mega || t === marks.billboard) continue;
    const toward = [ATRIUM.cx - t.x, ATRIUM.cz - t.z];
    const l = Math.hypot(toward[0], toward[1]);
    const off = Math.max(t.w, t.d) * 0.72 + 2;
    const word = t === marks.compute ? COMPUTE_WORD : Math.floor(r() * SIGN_WORDS.length);
    const w = t === marks.compute ? 64 : 44 + r() * 14;
    out.push({ pos: [t.x + (toward[0] / l) * off, t.top - 30, t.z + (toward[1] / l) * off], w, word, tilt: false });
  }
  return out;
}

function buildSigns(shared, grid, marks) {
  const { atlas, cols, rows } = signAtlas();
  const r = rng(61);
  const list = signPlacements(grid, marks);
  const n = list.length;
  const cell = new Float32Array(n * 4);
  const tint = new Float32Array(n * 4);
  const geo = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.ShaderMaterial({
    name: 'city-signs',
    vertexShader: SIGN_VERT,
    fragmentShader: SIGN_FRAG,
    uniforms: pickUniforms(shared, [...HAZE_UNIFORMS, 'uTime', 'uNeon'], { tAtlas: { value: atlas.tex } }),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.InstancedMesh(geo, material, n);
  mesh.name = 'city-signs';
  const o = new THREE.Object3D();
  const color = new THREE.Color();
  list.forEach((s, i) => {
    o.position.set(s.pos[0], s.pos[1], s.pos[2]);
    o.rotation.set(0, 0, 0);
    o.lookAt(ATRIUM.cx, s.tilt ? 0 : s.pos[1], ATRIUM.cz);
    o.scale.set(s.w, s.w / 4, 1);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
    const k = s.word;
    cell.set([(k % cols) / cols, 1 - (Math.floor(k / cols) + 1) / rows, 1 / cols, 1 / rows], i * 4);
    color.set(SIGN_WORDS[k][1]);
    tint.set([color.r, color.g, color.b, r()], i * 4);
  });
  geo.setAttribute('aCell', new THREE.InstancedBufferAttribute(cell, 4));
  geo.setAttribute('aTint', new THREE.InstancedBufferAttribute(tint, 4));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  mesh.layers.set(NO_REFLECT_LAYER);
  return { mesh, count: n };
}

// ── Live billboard ───────────────────────────────────────────────

const PHASE_LABEL = {
  idle: '待机 · IDLE',
  thinking: '思考 · THINKING',
  reasoning: '推理 · REASONING',
  generating: '生成 · GENERATING',
  tool: '工具 · TOOL',
};

function drawBillboard(g, w, h, d) {
  const bg = g.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#04122a');
  bg.addColorStop(1, '#020a18');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(70,230,255,0.9)';
  g.lineWidth = 6;
  g.strokeRect(10, 10, w - 20, h - 20);
  g.fillStyle = 'rgba(255,179,71,0.95)';
  g.fillRect(10, 10, 236, 46);
  g.fillStyle = '#04122a';
  g.font = `800 30px ${FONT_SANS}`;
  g.textBaseline = 'middle';
  g.fillText('LIVE · 实时推理', 26, 34);
  g.fillStyle = '#e8f4ff';
  g.textBaseline = 'alphabetic';
  const model = d.model || 'MODEL';
  let size = 92;
  g.font = `700 ${size}px ${FONT_SANS}`;
  while (size > 40 && g.measureText(model).width > w * 0.56) {
    size -= 6;
    g.font = `700 ${size}px ${FONT_SANS}`;
  }
  g.fillText(model, 34, 180);
  g.fillStyle = '#46e6ff';
  g.font = `600 30px ${FONT_SANS}`;
  g.fillText(PHASE_LABEL[d.phase] || PHASE_LABEL.idle, 38, 232);
  g.textAlign = 'right';
  g.fillStyle = '#ffffff';
  g.font = `800 150px ${FONT_MONO}`;
  g.fillText(String(Math.round(d.tps || 0)), w - 40, 210);
  g.fillStyle = '#4d7bff';
  g.font = `700 34px ${FONT_SANS}`;
  g.fillText('TOKENS / S', w - 44, 254);
  g.textAlign = 'left';
  const hist = d.hist;
  const x0 = 34;
  const x1 = w - 34;
  const y0 = h - 34;
  const y1 = h - 110;
  const peak = Math.max(30, ...hist);
  g.strokeStyle = 'rgba(70,230,255,0.35)';
  g.lineWidth = 2;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x1, y0);
  g.stroke();
  g.fillStyle = 'rgba(70,230,255,0.85)';
  const bw = (x1 - x0) / hist.length;
  hist.forEach((v, i) => {
    const bh = ((y0 - y1) * v) / peak;
    g.fillRect(x0 + i * bw + 2, y0 - bh, Math.max(2, bw - 4), bh);
  });
}

function buildBillboard(tower) {
  const w = 96;
  const h = 40;
  const hist = new Array(40).fill(0);
  const screen = canvasTexture(1024, Math.round((1024 * h) / w), (g, cw, ch) => drawBillboard(g, cw, ch, { model: '', tps: 0, phase: 'idle', hist }), {
    anisotropy: 8,
  });
  const mat = new THREE.MeshBasicMaterial({ map: screen.tex, name: 'city-billboard' });
  mat.color.setScalar(1.3);
  const group = new THREE.Group();
  group.name = 'city-billboard';
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  group.add(plane);
  const back = new THREE.Mesh(new THREE.BoxGeometry(w + 2, h + 2, 1.2), new THREE.MeshBasicMaterial({ color: 0x050a14, name: 'billboard-back' }));
  back.position.z = -0.7;
  group.add(back);
  const edgeMat = new THREE.MeshBasicMaterial({ name: 'billboard-edge' });
  edgeMat.color.setHex(0x46e6ff).multiplyScalar(3);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(w + 2.4, 0.5, 0.5), edgeMat);
  edge.position.set(0, -h / 2 - 1.2, 0);
  group.add(edge);
  const off = tower.d / 2 + 1.6;
  group.position.set(tower.x + Math.sin(tower.rot) * off, 20, tower.z + Math.cos(tower.rot) * off);
  group.rotation.y = tower.rot;
  group.traverse((o) => {
    o.renderOrder = 5;
  });
  let sig = '';
  let acc = 1;
  let sample = 0;
  return {
    group,
    update(dt, info) {
      sample += dt;
      if (sample >= 1) {
        sample = 0;
        hist.shift();
        hist.push(info.tps || 0);
      }
      acc += dt;
      const key = `${info.model}|${Math.round(info.tps || 0)}|${info.phase}|${hist[hist.length - 1]}`;
      if (acc < 1 || key === sig) return;
      acc = 0;
      sig = key;
      screen.redraw((g, cw, ch) => drawBillboard(g, cw, ch, { model: info.model, tps: info.tps, phase: info.phase, hist }));
    },
  };
}

// ── Landmark glows: compute tower and beam, tether, data ring ───

const GLOW_VERT = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const GLOW_FRAG = /* glsl */ `
${CITY_GLSL}
uniform vec3 uColor;
uniform float uGain;
varying vec3 vWorld;
void main() {
#ifdef ADDITIVE
  gl_FragColor = vec4(uColor * (uGain * cHazeT(vWorld)), 1.0);
#else
  gl_FragColor = vec4(cityHaze(uColor * uGain, vWorld), 1.0);
#endif
}
`;

function glowMat(shared, hex, gain, additive = false) {
  return new THREE.ShaderMaterial({
    name: additive ? 'city-glow-add' : 'city-glow',
    vertexShader: GLOW_VERT,
    fragmentShader: GLOW_FRAG,
    defines: additive ? { ADDITIVE: '' } : {},
    uniforms: pickUniforms(shared, HAZE_UNIFORMS, { uColor: { value: new THREE.Color(hex) }, uGain: { value: gain } }),
    transparent: additive,
    depthWrite: !additive,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

// Tapered beam: thin where it enters the hall, a few pixels wide at the far emitter.
const BEAM_VERT = /* glsl */ `
uniform float uLen;
varying float vAlong;
varying float vEdge;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normalize(vec3(position.x, 0.0, position.z) + vec3(1e-5, 0.0, 0.0)));
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const BEAM_FRAG = /* glsl */ `
uniform float uIntensity;
uniform float uTime;
uniform float uLen;
uniform float uCore;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.7) : pow(vEdge, 2.5) * 0.35;
  // Pulses evenly spaced in log distance, so they look evenly spaced on screen, moving toward the tank.
  float pulse = pow(fract(log(vAlong + 3.0) * 6.0 + uTime * 3.0), 8.0);
  float ends = smoothstep(0.0, 1.5, vAlong) * smoothstep(0.0, 6.0, uLen - vAlong);
  float k = prof * (0.55 + 2.2 * pulse) * ends * uIntensity;
  gl_FragColor = vec4(uColor * (3.0 * k), 1.0);
}
`;

const TETHER_VERT = /* glsl */ `
${CITY_GLSL}
uniform float uLen;
varying float vAlong;
varying float vEdge;
varying float vFade;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normalize(vec3(position.x, 0.0, position.z) + vec3(1e-5, 0.0, 0.0)));
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const TETHER_FRAG = /* glsl */ `
uniform float uTime;
uniform float uCore;
uniform float uGain;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
varying float vFade;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.8) : pow(vEdge, 2.5) * 0.3;
  float pulse = pow(fract(vAlong / 140.0 - uTime * 0.35), 10.0);
  float fade = exp(-vAlong / 1600.0) * smoothstep(0.0, 20.0, vAlong);
  gl_FragColor = vec4(uColor * (prof * (0.6 + 2.0 * pulse) * fade * uGain * vFade * 2.5), 1.0);
}
`;

function radialTube(radiusBottom, radiusTop, segments = 16) {
  return new THREE.CylinderGeometry(radiusTop, radiusBottom, 1, segments, 1, true).translate(0, 0.5, 0);
}

function buildComputeTower(shared, t, beamTo) {
  const group = new THREE.Group();
  group.name = 'compute-tower';
  const ringMat = glowMat(shared, 0x46e6ff, 4);
  const collarMat = glowMat(shared, 0x9feaff, 5);
  const crownMat = glowMat(shared, 0x4d7bff, 4);
  const spireMat = glowMat(shared, 0x0e1522, 1);
  const glows = [ringMat, collarMat, crownMat];
  const R = Math.max(t.w, t.d) * 0.5 * Math.SQRT2 + 6;
  const ring = (radius, tube, y, mat) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 10, 160), mat);
    m.rotation.x = Math.PI / 2;
    m.position.set(t.x, y, t.z);
    group.add(m);
    return m;
  };
  ring(R, 1.0, 40, ringMat);
  ring(R, 1.0, 70, ringMat);
  ring(R + 2, 1.8, 100, collarMat);
  const crown = ring(R * 0.6, 1.3, t.top + 6, crownMat);
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 2.6, 60, 10), spireMat);
  spire.position.set(t.x, t.top + 30, t.z);
  group.add(spire);

  // Beam from the emitter on the collar (side facing the tank) to the top of the fuel tank.
  const dir = new THREE.Vector2(beamTo.x - t.x, beamTo.z - t.z).normalize();
  const from = new THREE.Vector3(t.x + dir.x * (R + 2), 100, t.z + dir.y * (R + 2));
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(4, 20, 14), collarMat);
  emitter.position.copy(from);
  group.add(emitter);
  const delta = new THREE.Vector3().subVectors(from, beamTo);
  const len = delta.length();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize());
  const uniforms = {
    uIntensity: { value: 0.1 },
    uTime: shared.uTime,
    uLen: { value: len },
    uColor: { value: new THREE.Color(0x5fdcff) },
  };
  for (const [r0, r1, core] of [[0.07, 2.0, 1], [0.38, 8.0, 0]]) {
    const mat = new THREE.ShaderMaterial({
      name: core ? 'beam-core' : 'beam-glow',
      vertexShader: BEAM_VERT,
      fragmentShader: BEAM_FRAG,
      uniforms: { ...uniforms, uCore: { value: core } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const beam = new THREE.Mesh(radialTube(r0, r1, 16), mat);
    beam.position.copy(beamTo);
    beam.quaternion.copy(q);
    beam.scale.set(1, len, 1);
    beam.frustumCulled = false;
    beam.renderOrder = 3;
    group.add(beam);
  }
  const recvMat = new THREE.MeshBasicMaterial({ name: 'beam-receiver' });
  recvMat.color.setHex(0x5fdcff).multiplyScalar(4);
  const receiver = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 8, 48), recvMat);
  receiver.rotation.x = Math.PI / 2;
  receiver.position.copy(beamTo);
  group.add(receiver);
  group.traverse((o) => {
    if (o.isMesh && o.renderOrder === 0) o.renderOrder = 5;
  });
  return {
    group,
    setLook(city) {
      ringMat.uniforms.uGain.value = 4 * (0.35 + 0.65 * city.neon);
      collarMat.uniforms.uGain.value = 5 * (0.4 + 0.6 * city.neon);
      crownMat.uniforms.uGain.value = 4 * (0.35 + 0.65 * city.neon);
      spireMat.uniforms.uColor.value.set(city.body);
    },
    update(t, activity, look) {
      uniforms.uIntensity.value = Math.max(0.08, activity) * look;
      emitter.scale.setScalar(0.6 + activity * 0.8);
      receiver.scale.setScalar(0.8 + activity * 0.6 + Math.sin(t * 6) * 0.05 * activity);
      crown.rotation.z = t * 0.12;
    },
    glows,
  };
}

function buildLandmarkExtras(shared, marks) {
  const group = new THREE.Group();
  group.name = 'city-landmarks';
  // Space-elevator tether from the roof of a far tower into the sky.
  const tt = marks.tether;
  const tetherLen = 2450;
  const tetherUniforms = { uTime: shared.uTime, uLen: { value: tetherLen }, uGain: { value: 1 }, uColor: { value: new THREE.Color(0x7fd8ff) } };
  for (const [radius, core] of [[5, 1], [20, 0]]) {
    const mat = new THREE.ShaderMaterial({
      name: core ? 'tether-core' : 'tether-glow',
      vertexShader: TETHER_VERT,
      fragmentShader: TETHER_FRAG,
      uniforms: pickUniforms(shared, HAZE_UNIFORMS, { ...tetherUniforms, uCore: { value: core } }),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const m = new THREE.Mesh(radialTube(1, 1, 14), mat);
    m.position.set(tt.x, tt.top, tt.z);
    m.scale.set(radius, tetherLen, radius);
    m.frustumCulled = false;
    group.add(m);
  }
  // Data rings circling a downtown tower.
  const rt = marks.ring;
  const ringR = Math.max(rt.w, rt.d) * 0.5 * Math.SQRT2 + 25;
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(ringR, 1.6, 8, 192), glowMat(shared, 0x46e6ff, 3.2, true));
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(ringR * 0.8, 1.1, 8, 160), glowMat(shared, 0x4d7bff, 3.0, true));
  const pivotA = new THREE.Group();
  const pivotB = new THREE.Group();
  pivotA.position.set(rt.x, rt.top - 45, rt.z);
  pivotB.position.set(rt.x, rt.top - 75, rt.z);
  ringA.rotation.x = Math.PI / 2 + 0.12;
  ringB.rotation.x = Math.PI / 2 - 0.1;
  pivotA.add(ringA);
  pivotB.add(ringB);
  group.add(pivotA, pivotB);
  group.traverse((o) => {
    if (o.isMesh) o.frustumCulled = false;
  });
  return {
    group,
    setLook(city) {
      tetherUniforms.uGain.value = 0.35 + 0.65 * city.neon;
      ringA.material.uniforms.uGain.value = 3.2 * (0.3 + 0.7 * city.neon);
      ringB.material.uniforms.uGain.value = 3.0 * (0.3 + 0.7 * city.neon);
    },
    update(t) {
      pivotA.rotation.y = t * 0.05;
      pivotB.rotation.y = -t * 0.07;
    },
  };
}

// ── Builder ──────────────────────────────────────────────────────

/**
 * buildCity({ quality, beamTarget }) → { root, update(dt, t, info), setLook(look), stats() }.
 * info = { activity (0..1), tps, model, phase }.
 */
export function buildCity({ quality = 'high', beamTarget = new THREE.Vector3(-8, 3.0, -0.7) } = {}) {
  const root = new THREE.Group();
  root.name = 'city';
  const shared = createCityUniforms();

  const marks = landmarks();
  const keepOut = marks.towers.filter((t) => t.mega).map((t) => ({ x: t.x, z: t.z, rad: Math.max(t.w, t.d) * 0.75 + 30 }));
  const grid = generateTowers(quality, keepOut);
  const antennas = addAntennas(grid);

  const towerUniforms = pickUniforms(shared, [...HAZE_UNIFORMS, 'uSkyRefl', 'uSunDir', 'uSunColor', 'uSunK', 'uWindows', 'uNeon', 'uLights'], {
    uBody: { value: new THREE.Color(0x0b1222) },
    uGlass: { value: new THREE.Color(0x070d1a) },
  });
  const towerMat = new THREE.ShaderMaterial({ name: 'city-towers', vertexShader: TOWER_VERT, fragmentShader: TOWER_FRAG, uniforms: towerUniforms });
  const towers = buildTowerMesh(grid.concat(antennas), towerMat, 'city-towers');
  towers.layers.set(NO_REFLECT_LAYER); // all below the hall floor: never in the floor mirror
  const mega = buildTowerMesh(marks.towers, towerMat, 'city-megatowers'); // rise above the floor: mirrored

  const beacons = buildBeacons(shared, grid, antennas, marks);
  const ground = buildGround(shared, { quality });
  const facade = buildHostFacade(shared);
  const traffic = buildTraffic(shared, { quality });
  const signs = buildSigns(shared, grid, marks);
  const billboard = buildBillboard(marks.billboard);
  const compute = buildComputeTower(shared, marks.compute, beamTarget);
  const extras = buildLandmarkExtras(shared, marks);
  root.add(ground.mesh, facade.mesh, towers, mega, beacons.points, traffic.mesh, signs.mesh, billboard.group, compute.group, extras.group);

  let activity = 0;
  let travel = 0;
  let air = 0;
  let trafficScale = 1;
  let beamLook = 1;
  return {
    root,
    update(dt, t, info = {}) {
      const target = clamp(info.activity || 0, 0, 1);
      activity += (target - activity) * Math.min(1, dt * 1.5);
      const speed = 0.5 + 1.5 * activity;
      travel = (travel + dt * speed) % TRAVEL_WRAP;
      air = (air + dt * speed) % (2 * AIR_SPAN);
      shared.uTime.value = t;
      shared.uTravel.value = travel;
      shared.uAir.value = air;
      shared.uDensity.value = (0.3 + 0.7 * activity) * trafficScale;
      compute.update(t, activity, beamLook);
      extras.update(t);
      billboard.update(dt, info);
    },
    setLook(look) {
      const c = look.city;
      shared.uHaze.value.set(c.haze);
      shared.uHazeHigh.value.set(c.hazeHigh);
      shared.uHazeDensity.value = c.hazeDensity;
      shared.uSkyRefl.value.set(c.skyRefl);
      shared.uWindows.value = c.windows;
      shared.uNeon.value = c.neon;
      shared.uLights.value = c.lights;
      shared.uBeacons.value = c.beacons;
      shared.uTraffic.value = c.traffic;
      shared.uSunK.value = c.sunK;
      shared.uSunDir.value.fromArray(look.sun.dir).normalize();
      shared.uSunColor.value.set(look.sun.color);
      towerUniforms.uBody.value.set(c.body);
      towerUniforms.uGlass.value.set(c.glass);
      ground.setLook(c);
      facade.setLook(c);
      compute.setLook(c);
      extras.setLook(c);
      trafficScale = c.trafficScale ?? 1;
      beamLook = 0.45 + 0.55 * c.neon;
    },
    stats() {
      return { towers: grid.length, antennas: antennas.length, landmarks: marks.towers.length, beacons: beacons.count, signs: signs.count, cars: traffic.count };
    },
  };
}
