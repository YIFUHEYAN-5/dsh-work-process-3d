import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------- canvas
let canvasFactory = (w, h) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};

/** Tests replace the canvas factory with a stub; the browser uses real canvases. */
export function setCanvasFactory(fn) {
  canvasFactory = fn;
}

export function makeCanvas(w, h) {
  return canvasFactory(w, h);
}

/** A canvas-backed texture with a redraw helper. draw(g, w, h) paints into the 2D context. */
export function canvasTexture(w, h, draw, { srgb = true, repeat = null, anisotropy = 4 } = {}) {
  const canvas = makeCanvas(w, h);
  const g = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat[0], repeat[1]);
  }
  const api = {
    canvas, g, tex, w, h,
    redraw(fn = draw) {
      if (!fn) return;
      g.save();
      fn(g, w, h);
      g.restore();
      tex.needsUpdate = true;
    },
  };
  api.redraw(draw);
  return api;
}

export const FONT_SANS = '"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';
export const FONT_MONO = '"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace';

// ---------------------------------------------------------------- math
export const TAU = Math.PI * 2;
export const DEG = Math.PI / 180;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};
export const easeInOut = (t) => {
  const x = clamp(t, 0, 1);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
/** Frame-rate independent exponential approach. */
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt));
export function angleLerp(a, b, t) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return a + d * t;
}
export function angleDelta(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

// ---------------------------------------------------------------- geometry
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

/** Apply position / rotation (radians, XYZ) / scale to a geometry in place and return it. */
export function tf(geo, p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) {
  _e.set(r[0], r[1], r[2]);
  _q.setFromEuler(_e);
  _p.set(p[0], p[1], p[2]);
  _s.set(s[0], s[1], s[2]);
  _m.compose(_p, _q, _s);
  geo.applyMatrix4(_m);
  return geo;
}

export const rbox = (w, h, d, r = 0.02, seg = 2) =>
  new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4));
export const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
export const cyl = (rt, rb, h, seg = 32, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
export const sphere = (r, ws = 24, hs = 16) => new THREE.SphereGeometry(r, ws, hs);
export const torus = (r, tube, rs = 12, ts = 48, arc = TAU) => new THREE.TorusGeometry(r, tube, rs, ts, arc);
/** Lathe around Y from [radius, y] pairs. */
export const lathe = (pts, seg = 48) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);

/** Bolt heads arranged on a circle in the XZ plane at height y (hex-ish 6-sided cylinders). */
export function boltRing(count, radius, y, boltR = 0.018, boltH = 0.014, phase = 0) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const a = phase + (i / count) * TAU;
    out.push(tf(cyl(boltR, boltR, boltH, 6), [Math.cos(a) * radius, y, Math.sin(a) * radius], [0, a, 0]));
  }
  return out;
}

/** Involute-looking spur gear extruded along +Z (centered), teeth on the XY plane. */
export function gearGeometry(teeth, rRoot, rTip, thickness, bore = 0.02) {
  const shape = new THREE.Shape();
  const step = TAU / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pts = [
      [rRoot, a],
      [rTip, a + step * 0.18],
      [rTip, a + step * 0.42],
      [rRoot, a + step * 0.6],
    ];
    for (let k = 0; k < pts.length; k++) {
      const [r, ang] = pts[k];
      const x = Math.cos(ang) * r;
      const y = Math.sin(ang) * r;
      if (i === 0 && k === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
  }
  shape.closePath();
  if (bore > 0) {
    const hole = new THREE.Path();
    hole.absarc(0, 0, bore, 0, TAU, true);
    shape.holes.push(hole);
  }
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: thickness * 0.08,
    bevelSize: thickness * 0.06,
    bevelSegments: 1,
    curveSegments: 6,
  });
  geo.translate(0, 0, -thickness / 2);
  return geo;
}

/** Pipe along a polyline with rounded corners. */
export function pipeGeometry(points, radius, corner = 0.12, radial = 16) {
  const pts = points.map((p) => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2])));
  const path = new THREE.CurvePath();
  let cursor = pts[0].clone();
  for (let i = 1; i < pts.length; i++) {
    const cur = pts[i];
    if (i < pts.length - 1) {
      const next = pts[i + 1];
      const dIn = cur.clone().sub(pts[i - 1]);
      const dOut = next.clone().sub(cur);
      const r = Math.min(corner, dIn.length() / 2, dOut.length() / 2);
      const a = cur.clone().sub(dIn.normalize().multiplyScalar(r));
      const b = cur.clone().add(dOut.normalize().multiplyScalar(r));
      if (a.distanceTo(cursor) > 1e-5) path.add(new THREE.LineCurve3(cursor.clone(), a));
      path.add(new THREE.QuadraticBezierCurve3(a, cur.clone(), b));
      cursor = b;
    } else if (cur.distanceTo(cursor) > 1e-5) {
      path.add(new THREE.LineCurve3(cursor.clone(), cur.clone()));
    }
  }
  const len = path.getLength();
  return new THREE.TubeGeometry(path, Math.max(16, Math.round(len * 40)), radius, radial, false);
}

/**
 * Kit collects static geometry per material key and merges it into one mesh per material,
 * which keeps draw calls low for the many small parts of a machine.
 */
export class Kit {
  constructor() {
    this.parts = new Map();
  }
  add(key, ...geos) {
    let list = this.parts.get(key);
    if (!list) this.parts.set(key, (list = []));
    for (const g of geos.flat()) list.push(g.index ? g.toNonIndexed() : g);
    return this;
  }
  build(materials, { castShadow = true, receiveShadow = true, name = 'kit' } = {}) {
    const group = new THREE.Group();
    group.name = name;
    for (const [key, list] of this.parts) {
      if (!list.length) continue;
      const mat = materials[key];
      if (!mat) throw new Error(`Kit: unknown material "${key}"`);
      for (const g of list) {
        for (const attr of Object.keys(g.attributes)) {
          if (attr !== 'position' && attr !== 'normal' && attr !== 'uv') g.deleteAttribute(attr);
        }
        g.clearGroups();
      }
      const merged = list.length === 1 ? list[0] : mergeGeometries(list, false);
      if (!merged) throw new Error(`Kit: merge failed for "${key}"`);
      if (list.length > 1) for (const g of list) g.dispose();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.name = `${name}:${key}`;
      mesh.castShadow = castShadow && !mat.transparent && !mat.transmission;
      mesh.receiveShadow = receiveShadow;
      group.add(mesh);
    }
    this.parts.clear();
    return group;
  }
}

/** A mesh helper with shadow flags. */
export function mesh(geo, mat, p, r, s, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  if (p) m.position.set(p[0], p[1], p[2]);
  if (r) m.rotation.set(r[0], r[1], r[2]);
  if (s) m.scale.set(s[0], s[1], s[2]);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

export function group(name, p, r) {
  const g = new THREE.Group();
  g.name = name || '';
  if (p) g.position.set(p[0], p[1], p[2]);
  if (r) g.rotation.set(r[0], r[1], r[2]);
  return g;
}

// ---------------------------------------------------------------- paths
/** Polyline with arc-length lookup. */
export class Polyline {
  constructor(points) {
    this.points = points.map((p) => (p.isVector3 ? p.clone() : new THREE.Vector3(p[0], p[1], p[2])));
    this.cum = [0];
    for (let i = 1; i < this.points.length; i++) {
      this.cum.push(this.cum[i - 1] + this.points[i].distanceTo(this.points[i - 1]));
    }
    this.length = this.cum[this.cum.length - 1];
  }
  at(s, out = new THREE.Vector3()) {
    const d = clamp(s, 0, this.length);
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < d) i++;
    const seg = this.cum[i] - this.cum[i - 1] || 1;
    return out.lerpVectors(this.points[i - 1], this.points[i], (d - this.cum[i - 1]) / seg);
  }
}

/** Dispose every geometry, material and texture under an object. */
export function disposeTree(root) {
  const textures = new Set();
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of mats) {
      for (const v of Object.values(m)) if (v && v.isTexture) textures.add(v);
      m.dispose();
    }
  });
  for (const t of textures) t.dispose();
}

/**
 * A vertical band on a circle of radius r around (cx, cz), between angles a0 < a1 and heights
 * y0 < y1. Angles follow the station ring: x = cx + r·cos(a), z = cz − r·sin(a). With `inward`
 * the band faces the axis; u always runs left → right as seen from the side the band faces.
 */
export function arcBand(cx, cz, r, a0, a1, y0, y1, segs = 32, inward = true) {
  const pos = [];
  const nor = [];
  const uv = [];
  const idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    // Seen from the axis larger angles are on the left; seen from outside they are on the right.
    const a = inward ? a1 - (a1 - a0) * t : a0 + (a1 - a0) * t;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const x = cx + r * c;
    const z = cz - r * s;
    const nx = inward ? -c : c;
    const nz = inward ? s : -s;
    pos.push(x, y0, z, x, y1, z);
    nor.push(nx, 0, nz, nx, 0, nz);
    uv.push(t, 0, t, 1);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    idx.push(a, a + 2, a + 3, a, a + 3, a + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  return geo;
}

/**
 * A vertical wall strip along a polyline of [x, z] points (closed when `closed`), between heights
 * y0 and y1. Normals point to the side `facing(mx, mz, nx, nz)` approves (return true to keep the
 * left-hand normal); u is the distance along the line in metres, v the height.
 */
export function wallStrip(points, y0, y1, { closed = false, facing = null } = {}) {
  const pos = [];
  const nor = [];
  const uv = [];
  const idx = [];
  const n = points.length;
  const segs = closed ? n : n - 1;
  let along = 0;
  for (let i = 0; i < segs; i++) {
    const p = points[i];
    const q = points[(i + 1) % n];
    const dx = q[0] - p[0];
    const dz = q[1] - p[1];
    const len = Math.hypot(dx, dz);
    if (len < 1e-6) continue;
    // Left-hand normal of the segment direction in the x–z plane.
    let nx = dz / len;
    let nz = -dx / len;
    let flip = false;
    if (facing && !facing((p[0] + q[0]) / 2, (p[1] + q[1]) / 2, nx, nz)) {
      nx = -nx;
      nz = -nz;
      flip = true;
    }
    const base = pos.length / 3;
    pos.push(p[0], y0, p[1], p[0], y1, p[1], q[0], y0, q[1], q[0], y1, q[1]);
    for (let k = 0; k < 4; k++) nor.push(nx, 0, nz);
    uv.push(along, 0, along, 1, along + len, 0, along + len, 1);
    along += len;
    // Counter-clockwise as seen from the side the normal points to.
    if (!flip) idx.push(base, base + 1, base + 3, base, base + 3, base + 2);
    else idx.push(base, base + 2, base + 3, base, base + 3, base + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  return geo;
}
