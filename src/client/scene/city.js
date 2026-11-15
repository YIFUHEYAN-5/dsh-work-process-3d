import * as THREE from 'three';
import { canvasTexture, FONT_SANS, FONT_MONO, clamp } from './util.js';
import { ATRIUM } from './layout.js';

/*
 * The city outside the glass: several hundred instanced towers with procedural windows, neon
 * edges and crowns, haze that thickens toward the ground far below, flying traffic on rings
 * around the atrium tower (density and speed follow the token rate), neon signs, a live
 * billboard with the model name and rate, blinking aviation lights, and the cloud compute tower
 * whose energy beam feeds the fuel tank while tokens are consumed. Everything is a handful of
 * draw calls; all animation runs on the GPU from a few uniforms.
 */

const TAU = Math.PI * 2;
const BASE_Y = -220;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function polar(r, a) {
  return [ATRIUM.cx + r * Math.cos(a), ATRIUM.cz - r * Math.sin(a)];
}

function segDist(px, pz, a, b) {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const t = clamp(((px - a[0]) * dx + (pz - a[1]) * dz) / (dx * dx + dz * dz), 0, 1);
  return Math.hypot(px - (a[0] + dx * t), pz - (a[1] + dz * t));
}

// ── Towers ───────────────────────────────────────────────────────

const TOWER_VERT = /* glsl */ `
attribute vec3 aSize;
attribute vec3 aInfo;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying float vHalfW;
varying float vTop;
varying vec3 vInfo;
varying vec3 vSize;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(m) * normal);
  vec3 lp = position * aSize;
  bool sideX = abs(normal.x) > 0.5;
  vFace = sideX ? vec2(lp.z, lp.y) : vec2(lp.x, lp.y);
  vHalfW = sideX ? aSize.z * 0.5 : aSize.x * 0.5;
  vTop = normal.y;
  vInfo = aInfo;
  vSize = aSize;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const TOWER_FRAG = /* glsl */ `
uniform vec3 uBody;
uniform vec3 uSkyRefl;
uniform vec3 uHaze;
uniform vec3 uHazeHigh;
uniform float uHazeDensity;
uniform float uWindows;
uniform float uNeon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying float vHalfW;
varying float vTop;
varying vec3 vInfo;
varying vec3 vSize;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float band(float d, float w, float aa) { aa = max(aa, 1e-4); return 1.0 - smoothstep(w - aa, w + aa, d); }
void main() {
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float seed = vInfo.x;
  float style = vInfo.y;
  float sun = max(dot(n, uSunDir), 0.0);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  float glassy = style < 0.5 ? 1.0 : 0.45;
  vec3 col = uBody * (0.55 + 0.9 * sun) + uSunColor * sun * 0.04;
  col += uSkyRefl * (0.12 + 0.88 * fres) * glassy;
  if (vTop < 0.5) {
    vec2 cellSize = vec2(2.0 + style * 0.9, 3.4);
    vec2 g = vFace / cellSize;
    vec2 cell = floor(g);
    vec2 f = fract(g);
    vec2 aa2 = fwidth(g);
    float pane = band(abs(f.x - 0.5), 0.36, aa2.x) * band(abs(f.y - 0.5), style > 1.5 ? 0.22 : 0.3, aa2.y);
    float r = h21(cell + seed * 13.1);
    float lit = step(1.0 - uWindows * (0.45 + 0.55 * fract(seed * 7.31)), r);
    float floorOn = step(0.18, h21(vec2(cell.y, seed * 3.7)));
    float pick = fract(r * 17.3);
    vec3 wc = pick < 0.62 ? vec3(1.0, 0.7, 0.4) : (pick < 0.86 ? vec3(0.72, 0.85, 1.0) : vec3(0.35, 0.9, 1.0));
    float detail = 1.0 - smoothstep(0.35, 0.8, max(aa2.x, aa2.y));
    float near = pane * lit * floorOn * (1.0 + 1.8 * fract(r * 31.0));
    float far = lit * floorOn * 0.35;
    col += wc * mix(far, near, detail) * step(0.01, uWindows);
    if (style > 2.5) {
      float edge = band(vHalfW - abs(vFace.x), 0.22, fwidth(vFace.x));
      vec3 neon = fract(seed * 3.3) < 0.5 ? vec3(1.0, 0.25, 0.85) : vec3(0.25, 0.9, 1.0);
      col += neon * edge * 3.0 * uNeon;
    }
    float crown = band(abs(vSize.y - vFace.y - 2.0), 0.35, fwidth(vFace.y));
    vec3 cc = fract(seed * 5.1) < 0.5 ? vec3(0.3, 0.8, 1.0) : vec3(1.0, 0.45, 0.2);
    col += cc * crown * 1.8 * uNeon * step(0.4, fract(seed * 9.7));
  } else {
    col *= 0.6;
  }
  float dist = length(vWorld - cameraPosition);
  float low = clamp(-vWorld.y / 120.0, 0.0, 1.0);
  float hz = 1.0 - exp(-dist * uHazeDensity * (1.0 + 2.5 * low));
  col = mix(col, mix(uHazeHigh, uHaze, low), hz);
  gl_FragColor = vec4(col, 1.0);
}`;

/** Tower list: rings of jittered towers, low near the glass, a few megatowers far out. */
function generateTowers({ beamFrom, beamTo, billboard }) {
  const r = rng(11);
  const list = [];
  for (let rr = 30; rr < 190; ) {
    const spacing = 9 + rr * 0.05;
    const n = Math.floor((TAU * rr) / spacing);
    const off = r() * TAU;
    for (let i = 0; i < n; i++) {
      if (r() < 0.12) continue;
      const a = off + ((i + (r() - 0.5) * 0.5) * TAU) / n;
      const rad = rr + (r() - 0.5) * spacing * 0.5;
      const [x, z] = polar(rad, a);
      if (segDist(x, z, beamFrom, beamTo) < 11) continue;
      if (billboard && Math.hypot(x - billboard.pos[0], z - billboard.pos[1]) < 16) continue;
      const grow = 1 + rad / 200;
      const w = (5 + r() * 7) * grow;
      const d = (5 + r() * 7) * grow;
      let top;
      if (rad < 45) top = -40 + r() * 38;
      else if (rad > 70 && r() < 0.15) top = 40 + r() * 100;
      else top = -32 + Math.pow(r(), 0.8) * 58;
      list.push({ x, z, w, d, top, rot: a + (r() - 0.5) * 0.6, style: Math.floor(r() * 4), seed: r() * 100 });
    }
    rr += spacing;
  }
  return list;
}

function buildTowers(list) {
  const geo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const n = list.length;
  const size = new Float32Array(n * 3);
  const info = new Float32Array(n * 3);
  const mat = new THREE.ShaderMaterial({
    name: 'city-towers',
    vertexShader: TOWER_VERT,
    fragmentShader: TOWER_FRAG,
    uniforms: {
      uBody: { value: new THREE.Color() },
      uSkyRefl: { value: new THREE.Color() },
      uHaze: { value: new THREE.Color() },
      uHazeHigh: { value: new THREE.Color() },
      uHazeDensity: { value: 0.004 },
      uWindows: { value: 0.6 },
      uNeon: { value: 1 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color(1, 1, 1) },
    },
  });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  mesh.name = 'city-towers';
  const o = new THREE.Object3D();
  list.forEach((t, i) => {
    const h = t.top - BASE_Y;
    o.position.set(t.x, BASE_Y, t.z);
    o.rotation.set(0, t.rot, 0);
    o.scale.set(t.w, h, t.d);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
    size.set([t.w, h, t.d], i * 3);
    info.set([t.seed, t.style, 0], i * 3);
  });
  geo.setAttribute('aSize', new THREE.InstancedBufferAttribute(size, 3));
  geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 3));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  return { mesh, uniforms: mat.uniforms };
}

// ── Aviation lights ──────────────────────────────────────────────

const BEACON_VERT = /* glsl */ `
attribute float aSeed;
uniform float uTime;
varying float vOn;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vOn = step(0.55, fract(uTime * (0.45 + fract(aSeed * 3.1) * 0.3) + aSeed));
  gl_PointSize = clamp(900.0 / -mv.z, 2.0, 9.0);
  gl_Position = projectionMatrix * mv;
}`;

const BEACON_FRAG = /* glsl */ `
uniform float uIntensity;
varying float vOn;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = (1.0 - smoothstep(0.15, 0.5, d)) * vOn * uIntensity;
  gl_FragColor = vec4(vec3(1.0, 0.12, 0.08) * 4.0, a);
}`;

function buildBeacons(list) {
  const pts = [];
  const seeds = [];
  for (const t of list) {
    if (t.top < 4) continue;
    pts.push(t.x, t.top + 0.8, t.z);
    seeds.push(t.seed * 0.37);
    if (t.top > 40) {
      const c = Math.cos(t.rot);
      const s = Math.sin(t.rot);
      for (const [sx, sz] of [[1, 1], [-1, -1]]) {
        const lx = (sx * t.w) / 2;
        const lz = (sz * t.d) / 2;
        pts.push(t.x + lx * c + lz * s, t.top + 0.4, t.z - lx * s + lz * c);
        seeds.push(t.seed * 0.53 + sx);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seeds, 1));
  const mat = new THREE.ShaderMaterial({
    name: 'city-beacons',
    vertexShader: BEACON_VERT,
    fragmentShader: BEACON_FRAG,
    uniforms: { uTime: { value: 0 }, uIntensity: { value: 1 } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.name = 'city-beacons';
  points.frustumCulled = false;
  return { points, uniforms: mat.uniforms };
}

// ── Flying traffic ───────────────────────────────────────────────

const TRAFFIC_VERT = /* glsl */ `
attribute vec4 aLane;
attribute vec3 aCar;
uniform float uTravel;
uniform float uDensity;
uniform vec2 uCenter;
varying float vU;
varying float vV;
varying vec3 vColor;
varying float vFade;
void main() {
  float R = aLane.x;
  float ang = aLane.w * 6.2831853 + uTravel * aLane.z / R;
  vec3 c = vec3(uCenter.x + R * cos(ang), aLane.y, uCenter.y - R * sin(ang));
  vec3 T = normalize(vec3(-sin(ang), 0.0, -cos(ang))) * sign(aLane.z);
  vec3 toCam = normalize(cameraPosition - c);
  vec3 W = normalize(cross(T, toCam));
  float visible = step(fract(aCar.y * 7.13), uDensity);
  vec3 p = c + T * (position.x * aCar.x) + W * (position.y * 0.34);
  vU = position.x + 0.5;
  vV = position.y * 2.0;
  vColor = aCar.z < 0.5 ? vec3(1.0, 0.9, 0.78) : (aCar.z < 1.5 ? vec3(1.0, 0.16, 0.1) : (aCar.z < 2.5 ? vec3(0.3, 0.9, 1.0) : vec3(1.0, 0.3, 0.9)));
  vFade = exp(-length(cameraPosition - c) * 0.006);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0) * visible;
}`;

const TRAFFIC_FRAG = /* glsl */ `
uniform float uIntensity;
varying float vU;
varying float vV;
varying vec3 vColor;
varying float vFade;
void main() {
  float core = 1.0 - smoothstep(0.0, 1.0, abs(vV));
  float trail = pow(vU, 2.2);
  float a = core * trail * vFade * uIntensity;
  gl_FragColor = vec4(vColor * 3.0, a);
}`;

const LANES = [30, 34, 41, 48, 57, 66, 78, 92, 108];

function buildTraffic(quality) {
  const r = rng(29);
  const lanes = [];
  const cars = [];
  const per = quality === 'low' ? 26 : 13; // metres of lane per car
  for (const R of LANES) {
    const y = -6 + r() * 28;
    for (const dir of [1, -1]) {
      const n = Math.floor((TAU * R) / per);
      const speed = (10 + r() * 12) * dir;
      for (let i = 0; i < n; i++) {
        lanes.push(R + dir * 0.9, y + dir * 0.8 + (r() - 0.5) * 0.3, speed * (0.9 + r() * 0.2), r());
        const kind = r() < 0.42 ? 0 : r() < 0.62 ? 1 : r() < 0.6 ? 2 : 3;
        cars.push(2.5 + r() * 2.5, r(), kind);
      }
    }
  }
  const n = lanes.length / 4;
  const geo = new THREE.InstancedBufferGeometry();
  const quad = new THREE.PlaneGeometry(1, 1);
  geo.index = quad.index;
  geo.setAttribute('position', quad.getAttribute('position'));
  geo.setAttribute('uv', quad.getAttribute('uv'));
  geo.setAttribute('aLane', new THREE.InstancedBufferAttribute(new Float32Array(lanes), 4));
  geo.setAttribute('aCar', new THREE.InstancedBufferAttribute(new Float32Array(cars), 3));
  geo.instanceCount = n;
  const mat = new THREE.ShaderMaterial({
    name: 'city-traffic',
    vertexShader: TRAFFIC_VERT,
    fragmentShader: TRAFFIC_FRAG,
    uniforms: {
      uTravel: { value: 0 },
      uDensity: { value: 0.5 },
      uCenter: { value: new THREE.Vector2(ATRIUM.cx, ATRIUM.cz) },
      uIntensity: { value: 1 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'city-traffic';
  mesh.frustumCulled = false;
  return { mesh, uniforms: mat.uniforms, count: n };
}

// ── Neon signs ───────────────────────────────────────────────────

const SIGN_WORDS = [
  ['算力', '#ff4fd8'], ['TOKEN', '#46e6ff'], ['NEURAL', '#a487ff'], ['推理中心', '#46e6ff'],
  ['数据港', '#ffb347'], ['AI CORE', '#ff4fd8'], ['云端', '#46e6ff'], ['∞ CONTEXT', '#ffb347'],
  ['GPU 集群', '#46e6ff'], ['SYNAPSE', '#ff4fd8'], ['模型工厂', '#a487ff'], ['NODE-07', '#46e6ff'],
  ['光子网络', '#ff4fd8'], ['0 ms', '#46e6ff'], ['量子缓存', '#ffb347'], ['OPEN API', '#a487ff'],
];

const SIGN_VERT = /* glsl */ `
attribute vec4 aCell;
attribute vec4 aTint;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
void main() {
  vUv = aCell.xy + uv * aCell.zw;
  vTint = aTint.rgb;
  vSeed = aTint.w;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`;

const SIGN_FRAG = /* glsl */ `
uniform sampler2D tAtlas;
uniform float uTime;
uniform float uNeon;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
void main() {
  float m = texture2D(tAtlas, vUv).a;
  float fl = vSeed > 0.82 ? step(0.16, fract(sin(floor(uTime * 9.0 + vSeed * 50.0) * 12.9898) * 43758.5453)) : 1.0;
  gl_FragColor = vec4(vTint * 3.2 * fl * uNeon, m);
}`;

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
      g.restore();
    });
  }, { anisotropy: 4 });
  return { atlas, cols, rows };
}

function buildSigns(list) {
  const { atlas, cols, rows } = signAtlas();
  const r = rng(53);
  const picks = list.filter((t) => {
    const d = Math.hypot(t.x - ATRIUM.cx, t.z - ATRIUM.cz);
    return d > 34 && d < 100 && t.top > -12;
  });
  const chosen = [];
  for (let i = 0; i < picks.length && chosen.length < 18; i += 1 + Math.floor(r() * 4)) chosen.push(picks[i]);
  const n = chosen.length;
  const cell = new Float32Array(n * 4);
  const tint = new Float32Array(n * 4);
  const geo = new THREE.PlaneGeometry(1, 1);
  const mat = new THREE.ShaderMaterial({
    name: 'city-signs',
    vertexShader: SIGN_VERT,
    fragmentShader: SIGN_FRAG,
    uniforms: { tAtlas: { value: atlas.tex }, uTime: { value: 0 }, uNeon: { value: 1 } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  mesh.name = 'city-signs';
  const o = new THREE.Object3D();
  const color = new THREE.Color();
  chosen.forEach((t, i) => {
    const k = Math.floor(r() * SIGN_WORDS.length);
    const [, hex] = SIGN_WORDS[k];
    const dx = ATRIUM.cx - t.x;
    const dz = ATRIUM.cz - t.z;
    const dl = Math.hypot(dx, dz);
    const half = Math.max(t.w, t.d) / 2 + 0.8;
    const wide = 9 + r() * 6;
    o.position.set(t.x + (dx / dl) * half, t.top - 3 - r() * 9, t.z + (dz / dl) * half);
    o.rotation.set(0, Math.atan2(dx, dz), 0);
    o.scale.set(wide, wide / 4, 1);
    o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
    cell.set([(k % cols) / cols, 1 - (Math.floor(k / cols) + 1) / rows, 1 / cols, 1 / rows], i * 4);
    color.set(hex);
    tint.set([color.r, color.g, color.b, r()], i * 4);
  });
  geo.setAttribute('aCell', new THREE.InstancedBufferAttribute(cell, 4));
  geo.setAttribute('aTint', new THREE.InstancedBufferAttribute(tint, 4));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.frustumCulled = false;
  return { mesh, uniforms: mat.uniforms };
}

// ── Live billboard ───────────────────────────────────────────────

function drawBillboard(g, w, h, d) {
  const bg = g.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#0b0626');
  bg.addColorStop(1, '#03111f');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(70,230,255,0.9)';
  g.lineWidth = 6;
  g.strokeRect(10, 10, w - 20, h - 20);
  g.fillStyle = 'rgba(255,79,216,0.95)';
  g.fillRect(10, 10, 220, 46);
  g.fillStyle = '#0b0626';
  g.font = `800 30px ${FONT_SANS}`;
  g.textBaseline = 'middle';
  g.fillText('LIVE · 实时推理', 26, 34);
  g.fillStyle = '#e8f0ff';
  g.font = `700 92px ${FONT_SANS}`;
  g.textBaseline = 'alphabetic';
  const model = d.model || 'MODEL';
  let size = 92;
  while (size > 40 && g.measureText(model).width > w * 0.58) {
    size -= 6;
    g.font = `700 ${size}px ${FONT_SANS}`;
  }
  g.fillText(model, 34, 190);
  g.fillStyle = '#46e6ff';
  g.font = `600 30px ${FONT_SANS}`;
  g.fillText(d.phase || '', 38, 240);
  g.textAlign = 'right';
  g.fillStyle = '#ffffff';
  g.font = `800 150px ${FONT_MONO}`;
  g.fillText(String(Math.round(d.tps || 0)), w - 40, 220);
  g.fillStyle = '#ff4fd8';
  g.font = `700 34px ${FONT_SANS}`;
  g.fillText('TOKENS / S', w - 44, 266);
  g.textAlign = 'left';
  // Rate history.
  const hist = d.hist;
  const x0 = 34;
  const x1 = w - 34;
  const y0 = h - 40;
  const y1 = h - 120;
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

function buildBillboard({ pos, rotY, w, h }) {
  const hist = new Array(40).fill(0);
  const screen = canvasTexture(1024, Math.round((1024 * h) / w), (g, cw, ch) => drawBillboard(g, cw, ch, { model: '', tps: 0, hist }), {
    anisotropy: 8,
  });
  const mat = new THREE.MeshBasicMaterial({ map: screen.tex, toneMapped: false, name: 'city-billboard' });
  mat.color.setScalar(1.6);
  const group = new THREE.Group();
  group.name = 'city-billboard';
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  group.add(plane);
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x151a26, metalness: 0.8, roughness: 0.4, name: 'billboard-frame' });
  const back = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, h + 0.8, 0.6), frameMat);
  back.position.z = -0.34;
  group.add(back);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(w + 0.9, 0.18, 0.2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x46e6ff).multiplyScalar(3), toneMapped: false }));
  edge.position.set(0, -h / 2 - 0.45, 0);
  group.add(edge);
  group.position.set(pos[0], pos[2], pos[1]);
  group.rotation.y = rotY;
  let sig = '';
  let acc = 0;
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

// ── Cloud compute tower and its energy beam ─────────────────────

const BEAM_VERT = /* glsl */ `
uniform float uLen;
varying float vAlong;
varying float vEdge;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normal);
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const BEAM_FRAG = /* glsl */ `
uniform float uIntensity;
uniform float uTime;
uniform float uLen;
uniform float uCore;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.6) : pow(vEdge, 3.0) * 0.32;
  float pulse = pow(fract(vAlong / 9.0 - uTime * 1.6), 6.0);
  float ends = smoothstep(0.0, 3.0, vAlong) * smoothstep(0.0, 1.2, uLen - vAlong);
  float k = prof * (0.5 + 2.4 * pulse) * ends * uIntensity;
  gl_FragColor = vec4(uColor * 3.0, k);
}`;

function buildComputeTower(spec, beamTo) {
  const group = new THREE.Group();
  group.name = 'compute-tower';
  const glowMat = (hex, k) => {
    const m = new THREE.MeshBasicMaterial({ toneMapped: false });
    m.color.setHex(hex).multiplyScalar(k);
    return m;
  };
  const ringMat = glowMat(0x46e6ff, 4);
  const crownMat = glowMat(0xff4fd8, 3.4);
  const [x, z] = spec.pos;
  const halo = [];
  for (const [y, r, mat] of [[12, 12.4, ringMat], [30, 11.6, ringMat], [48, 10.8, ringMat], [spec.top + 5, 8.5, crownMat]]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, y > spec.top ? 0.45 : 0.28, 8, 96), mat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, y, z);
    group.add(ring);
    halo.push(ring);
  }
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.7, 22, 8), new THREE.MeshStandardMaterial({ color: 0x2a3142, metalness: 0.8, roughness: 0.35 }));
  spire.position.set(x, spec.top + 11, z);
  group.add(spire);

  // Beam from the lowest ring, on the side facing the tank, to the tank top.
  const dirXZ = new THREE.Vector2(beamTo.x - x, beamTo.z - z).normalize();
  const from = new THREE.Vector3(x + dirXZ.x * 12.4, 12, z + dirXZ.y * 12.4);
  const delta = new THREE.Vector3().subVectors(beamTo, from);
  const len = delta.length();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize());
  const beamGeo = new THREE.CylinderGeometry(1, 1, 1, 16, 1, true).translate(0, 0.5, 0);
  const uniforms = {
    uIntensity: { value: 0 },
    uTime: { value: 0 },
    uLen: { value: len },
    uColor: { value: new THREE.Color(0x5fdcff) },
  };
  const beams = [];
  for (const [radius, core] of [[0.16, 1], [0.85, 0]]) {
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
    const beam = new THREE.Mesh(beamGeo, mat);
    beam.position.copy(from);
    beam.quaternion.copy(q);
    beam.scale.set(radius, len, radius);
    beam.frustumCulled = false;
    beam.renderOrder = 3;
    group.add(beam);
    beams.push(beam);
  }
  const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 12), glowMat(0x9feaff, 5));
  emitter.position.copy(from);
  group.add(emitter);
  const receiver = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 8, 48), glowMat(0x5fdcff, 4));
  receiver.rotation.x = Math.PI / 2;
  receiver.position.copy(beamTo);
  group.add(receiver);
  return { group, uniforms, emitter, receiver, halo, ringMat, crownMat };
}

// ── Builder ──────────────────────────────────────────────────────

/**
 * buildCity({ quality, beamTarget }) → { root, update(dt, t, info), setLook(look) }.
 * info = { activity (0..1), tps, model, phase }.
 */
export function buildCity({ quality = 'high', beamTarget = new THREE.Vector3(-8, 3.0, -0.7) } = {}) {
  const root = new THREE.Group();
  root.name = 'city';
  const compute = { pos: [-38, -90], w: 16, d: 16, top: 64 };
  const billboardAngle = 48 * (Math.PI / 180);
  const bbR = 48;
  const bb = { pos: polar(bbR, billboardAngle), y: 5.5, w: 22, h: 9 };
  const towersList = generateTowers({ beamFrom: compute.pos, beamTo: [beamTarget.x, beamTarget.z], billboard: bb });
  // Landmarks: the compute tower and the tower carrying the billboard.
  towersList.push({ x: compute.pos[0], z: compute.pos[1], w: compute.w, d: compute.d, top: compute.top, rot: 0.3, style: 3, seed: 42.4 });
  const [bx, bz] = polar(bbR + 7, billboardAngle);
  towersList.push({ x: bx, z: bz, w: 12, d: 12, top: 15, rot: billboardAngle, style: 1, seed: 17.7 });

  const towers = buildTowers(towersList);
  const beacons = buildBeacons(towersList);
  const traffic = buildTraffic(quality);
  const signs = buildSigns(towersList);
  const toCenter = Math.atan2(ATRIUM.cx - bb.pos[0], ATRIUM.cz - bb.pos[1]);
  const billboard = buildBillboard({ pos: [bb.pos[0], bb.pos[1], bb.y], rotY: toCenter, w: bb.w, h: bb.h });
  const tower = buildComputeTower(compute, beamTarget);
  root.add(towers.mesh, beacons.points, traffic.mesh, signs.mesh, billboard.group, tower.group);

  let activity = 0;
  let trafficScale = 1;
  let travel = 0;
  return {
    root,
    update(dt, t, info = {}) {
      const target = clamp(info.activity || 0, 0, 1);
      activity += (target - activity) * Math.min(1, dt * 1.5);
      travel = (travel + dt * (0.5 + 1.5 * activity)) % 100000;
      traffic.uniforms.uTravel.value = travel;
      traffic.uniforms.uDensity.value = (0.3 + 0.7 * activity) * trafficScale;
      beacons.uniforms.uTime.value = t;
      signs.uniforms.uTime.value = t;
      tower.uniforms.uTime.value = t;
      tower.uniforms.uIntensity.value = activity;
      tower.emitter.scale.setScalar(0.6 + activity * 0.8);
      tower.receiver.scale.setScalar(0.8 + activity * 0.6 + Math.sin(t * 6) * 0.05 * activity);
      tower.halo[3].rotation.z = t * 0.12;
      billboard.update(dt, info);
    },
    setLook(look) {
      const c = look.city;
      const u = towers.uniforms;
      u.uBody.value.set(c.body);
      u.uSkyRefl.value.set(c.skyRefl);
      u.uHaze.value.set(c.haze);
      u.uHazeHigh.value.set(c.hazeHigh);
      u.uHazeDensity.value = c.hazeDensity;
      u.uWindows.value = c.windows;
      u.uNeon.value = c.neon;
      u.uSunDir.value.fromArray(look.sun.dir).normalize();
      u.uSunColor.value.set(look.sun.color);
      signs.uniforms.uNeon.value = c.neon;
      beacons.uniforms.uIntensity.value = look.id === 'day' ? 0.5 : 1;
      traffic.uniforms.uIntensity.value = c.traffic;
      trafficScale = look.id === 'day' ? 0.8 : 1;
    },
  };
}
