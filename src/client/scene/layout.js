import * as THREE from 'three';

/*
 * Floor plan of the roof deck, shared by the scene builders, the camera limits, the shaders and
 * the tests. World units are metres, Y is up. Machines stand on islands whose tops are at
 * y = 0; the islands float over a recessed data pool (the "well"); a polished floor rings the
 * well and runs out to a low glass balustrade at the edge of the tower. There is no roof: the
 * sky is open. Angles use the same convention as the station ring: x = cx + r·cos(a),
 * z = cz − r·sin(a), so a = 90° points to the back (−z).
 */

export const DEG = Math.PI / 180;

/** The round hall on top of the tower (radius of the floor edge). */
export const ATRIUM = { cx: 0.5, cz: -1.0, r: 22 };

/** Frameless glass balustrade along the hall edge; it stays open across the balcony. */
export const RAIL = { r: 21.97, h: 1.1 };

/**
 * Balcony on the sunset side (front, +z): an annular sector at hall floor level with the sky
 * pool in the middle and sun decks on both sides. The balustrade follows its sides and outer
 * arc, except along the pool's infinity edge.
 */
export const BALCONY = { a0: 232 * DEG, a1: 308 * DEG, r0: 22.0, r1: 31.0, slab: 0.6, rail: 1.1 };

/**
 * Sky pool: an annular-sector basin in the balcony deck. The water stands just below the deck;
 * on the outer arc it spills over a knife edge into a catch trough, so it seems to run straight
 * into the sky.
 */
export const POOL = { a0: 250 * DEG, a1: 290 * DEG, r0: 24.4, r1: 30.2, water: -0.05, depth: 1.35, trough: 0.75 };

/** The hall is the top of a skyscraper; the city's street level lies far below. */
export const TOWER = { r: 22.35, groundY: -420 };

/**
 * Camera limits. With the roof gone the camera may rise high over the deck; it stays inside
 * the balustrade, except over the balcony, which is open to the hall along its whole width.
 * Targets are orbit centres.
 */
export const CAMERA_LIMIT = {
  r: 21.3,
  yMin: 0.35,
  yMax: 24.0,
  balconyR: 30.45,
  edge: 1.5 * DEG,
  targetR: 17,
  // Over the balcony, orbit targets keep a little more room from its sides and outer edge.
  targetBalconyR: 29.2,
  targetEdge: 4 * DEG,
  // Orbit targets stay a little above the floor so the camera can always swing under them.
  targetYMin: 0.4,
  targetYMax: 12,
};

/** The well: a rounded rectangle (centre, half size, corner radius) sunk `depth` metres. */
export const WELL = { cx: 0.25, cz: -1.0, hx: 11.75, hz: 6.6, r: 4.5, depth: 2.6 };

export const ISLAND_THICKNESS = 0.45;

/**
 * Islands and bridges. Their union is one walkable surface at y = 0; the machine layout in
 * fuel.js, engine.js, cell.js, stations.js and stocker.js must stay inside it (tested).
 */
export const ISLANDS = [
  { id: 'energy', type: 'capsule', a: [-8.2, -0.5], b: [-2.5, -0.5], r: 2.6 },
  { id: 'cell', type: 'circle', c: [2.6, -1.0], r: 4.45 },
  { id: 'delivery', type: 'circle', c: [8.55, 0.75], r: 2.6 },
  { id: 'dock', type: 'circle', c: [-5.3, -5.0], r: 2.1 },
  { id: 'bridge-in', type: 'box', c: [-0.8, 1.65], h: [1.5, 0.75] },
  { id: 'bridge-out', type: 'box', c: [6.25, 1.6], h: [0.75, 0.75] },
  { id: 'bridge-front-cell', type: 'box', c: [2.6, 4.6], h: [0.9, 1.5] },
  { id: 'bridge-front-energy', type: 'box', c: [-5.4, 4.0], h: [0.8, 2.0] },
  { id: 'bridge-back-cell', type: 'box', c: [2.6, -6.6], h: [0.9, 1.4] },
  { id: 'bridge-back-dock', type: 'box', c: [-5.3, -7.3], h: [0.8, 0.7] },
];

/** Curved media wall behind the islands: screens over a row of compute modules. */
export const MEDIA = {
  r: 12.5, // front face of the wall structure
  back: 12.95,
  screenR: 12.38,
  moduleR: 12.17, // centre line of the compute modules
  a0: 38 * DEG,
  a1: 142 * DEG,
  screenY: 4.9,
  gap: 0.5,
  top: 7.9,
  bandY0: 2.6,
  bandY1: 7.2,
};

/** Screens left → right as seen from the hall; canvas sizes keep each screen's aspect ratio. */
export const MEDIA_SCREENS = [
  { id: 'flow', w: 6.0, px: [1152, 532] },
  { id: 'main', w: 7.6, px: [1536, 636] },
  { id: 'cost', w: 6.0, px: [1152, 532] },
];

export function arcPoint(a, r, y = 0, out = new THREE.Vector3()) {
  return out.set(ATRIUM.cx + r * Math.cos(a), y, ATRIUM.cz - r * Math.sin(a));
}

// ── Camera regions ───────────────────────────────────────────────

const TAU = Math.PI * 2;
const clampN = (v, a, b) => Math.min(b, Math.max(a, v));
const angDist = (a, b) => {
  const d = Math.abs(a - b) % TAU;
  return d > Math.PI ? TAU - d : d;
};

/** Angle of a point around the atrium axis (station-ring convention), in [0, 2π). */
export function atriumAngle(x, z) {
  const a = Math.atan2(-(z - ATRIUM.cz), x - ATRIUM.cx);
  return a < 0 ? a + TAU : a;
}

/** True when angle `a` (atriumAngle convention) lies within the balcony sector shrunk by `edge`. */
export function inBalconySector(a, edge = 0) {
  return a >= BALCONY.a0 + edge && a <= BALCONY.a1 - edge;
}

/** True when the point (x, z) lies over the pool basin or its catch trough. */
export function overPool(x, z, margin = 0) {
  const r = Math.hypot(x - ATRIUM.cx, z - ATRIUM.cz);
  if (r < POOL.r0 - margin || r > POOL.r1 + POOL.trough + margin) return false;
  const a = atriumAngle(x, z);
  const m = margin / Math.max(r, 1);
  return a >= POOL.a0 - m && a <= POOL.a1 + m;
}

/** The walkable camera region a point lies in: 'hall', 'balcony' or null. */
export function cameraRegion(v) {
  const L = CAMERA_LIMIT;
  const eps = 1e-6;
  if (v.y < L.yMin - eps || v.y > L.yMax + eps) return null;
  const r = Math.hypot(v.x - ATRIUM.cx, v.z - ATRIUM.cz);
  if (r <= L.r + eps) return 'hall';
  if (r > L.balconyR + eps) return null;
  return inBalconySector(atriumAngle(v.x, v.z), L.edge - eps) ? 'balcony' : null;
}

function clampRadius(v, rMin, rMax) {
  const dx = v.x - ATRIUM.cx;
  const dz = v.z - ATRIUM.cz;
  const r = Math.hypot(dx, dz);
  const t = clampN(r, rMin, rMax);
  if (r > 1e-9 && t !== r) {
    v.x = ATRIUM.cx + (dx * t) / r;
    v.z = ATRIUM.cz + (dz * t) / r;
  }
}

function clampSector(v, a0, a1) {
  const a = atriumAngle(v.x, v.z);
  if (a >= a0 && a <= a1) return;
  const t = angDist(a, a0) < angDist(a, a1) ? a0 : a1;
  const r = Math.hypot(v.x - ATRIUM.cx, v.z - ATRIUM.cz);
  v.x = ATRIUM.cx + r * Math.cos(t);
  v.z = ATRIUM.cz - r * Math.sin(t);
}

/**
 * Keep a camera position inside the walkable regions (modifies and returns `v`). `prev` is the
 * last accepted position: a move that leaves every region is pulled back into the region it
 * came from, so the camera slides along the balustrade instead of jumping across a corner.
 */
export function clampCameraPoint(v, prev = null) {
  if (cameraRegion(v)) return v;
  const L = CAMERA_LIMIT;
  v.y = clampN(v.y, L.yMin, L.yMax);
  if (cameraRegion(v)) return v;
  let from = prev ? cameraRegion(prev) : null;
  if (!from) {
    const r = Math.hypot(v.x - ATRIUM.cx, v.z - ATRIUM.cz);
    from = r > L.r && inBalconySector(atriumAngle(v.x, v.z)) ? 'balcony' : 'hall';
  }
  if (from === 'balcony') {
    clampSector(v, BALCONY.a0 + L.edge, BALCONY.a1 - L.edge);
    clampRadius(v, 0, L.balconyR);
  } else {
    clampRadius(v, 0, L.r);
  }
  return v;
}

/**
 * Keep an orbit target where the camera has room around it (modifies and returns `v`): within
 * targetR of the hall centre, or over the balcony. A target outside both moves to the nearer
 * of the two areas.
 */
export function clampTargetPoint(v) {
  const L = CAMERA_LIMIT;
  v.y = clampN(v.y, L.targetYMin, L.targetYMax);
  const dx = v.x - ATRIUM.cx;
  const dz = v.z - ATRIUM.cz;
  const r = Math.hypot(dx, dz);
  if (r <= L.targetR) return v;
  const lo = BALCONY.a0 + L.targetEdge;
  const hi = BALCONY.a1 - L.targetEdge;
  const a = atriumAngle(v.x, v.z);
  if (a >= lo && a <= hi && r <= L.targetBalconyR) return v;
  // Nearest point of the hall disc.
  const hx = ATRIUM.cx + (dx * L.targetR) / r;
  const hz = ATRIUM.cz + (dz * L.targetR) / r;
  // Nearest point of the balcony sector: on its ray when the angle is outside, else radial.
  let bx;
  let bz;
  if (a >= lo && a <= hi) {
    bx = ATRIUM.cx + (dx * L.targetBalconyR) / r;
    bz = ATRIUM.cz + (dz * L.targetBalconyR) / r;
  } else {
    const t = angDist(a, lo) < angDist(a, hi) ? lo : hi;
    const ux = Math.cos(t);
    const uz = -Math.sin(t);
    const s = clampN(dx * ux + dz * uz, 0, L.targetBalconyR);
    bx = ATRIUM.cx + ux * s;
    bz = ATRIUM.cz + uz * s;
  }
  const dh = (hx - v.x) ** 2 + (hz - v.z) ** 2;
  const db = (bx - v.x) ** 2 + (bz - v.z) ** 2;
  v.x = dh <= db ? hx : bx;
  v.z = dh <= db ? hz : bz;
  return v;
}

/** Screen placement on the media arc: centre angle and angular span, left (larger angle) first. */
export function mediaScreens() {
  const R = MEDIA.screenR;
  const total = MEDIA_SCREENS.reduce((s, d) => s + d.w, 0) + MEDIA.gap * (MEDIA_SCREENS.length - 1);
  let a = Math.PI / 2 + total / R / 2;
  return MEDIA_SCREENS.map((d) => {
    const span = d.w / R;
    const a1 = a;
    const a0 = a - span;
    a = a0 - MEDIA.gap / R;
    const h = d.w * (d.px[1] / d.px[0]);
    return { ...d, h, a0, a1, a: (a0 + a1) / 2, y0: MEDIA.screenY - h / 2, y1: MEDIA.screenY + h / 2 };
  });
}

// ── Signed distances (negative inside), JS and GLSL versions from the same data ──

function sdCapsule(px, pz, a, b, r) {
  const bax = b[0] - a[0];
  const baz = b[1] - a[1];
  const pax = px - a[0];
  const paz = pz - a[1];
  const h = Math.min(1, Math.max(0, (pax * bax + paz * baz) / (bax * bax + baz * baz)));
  return Math.hypot(pax - bax * h, paz - baz * h) - r;
}

function sdBox(px, pz, c, h) {
  const qx = Math.abs(px - c[0]) - h[0];
  const qz = Math.abs(pz - c[1]) - h[1];
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0);
}

function sdShape(s, x, z) {
  if (s.type === 'circle') return Math.hypot(x - s.c[0], z - s.c[1]) - s.r;
  if (s.type === 'capsule') return sdCapsule(x, z, s.a, s.b, s.r);
  return sdBox(x, z, s.c, s.h);
}

/** Distance to the island union at floor level (negative = on an island or bridge). */
export function sdIslands(x, z, shapes = ISLANDS) {
  let d = Infinity;
  for (const s of shapes) d = Math.min(d, sdShape(s, x, z));
  return d;
}

/** Distance to the well outline (negative = over the pool). */
export function sdWell(x, z) {
  const qx = Math.abs(x - WELL.cx) - WELL.hx + WELL.r;
  const qz = Math.abs(z - WELL.cz) - WELL.hz + WELL.r;
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - WELL.r;
}

const f = (v) => {
  const s = Number(v).toFixed(4);
  return s.includes('.') ? s : `${s}.0`;
};

function glslShape(s) {
  if (s.type === 'circle') return `length(p - vec2(${f(s.c[0])}, ${f(s.c[1])})) - ${f(s.r)}`;
  if (s.type === 'capsule') return `lSdCapsule(p, vec2(${f(s.a[0])}, ${f(s.a[1])}), vec2(${f(s.b[0])}, ${f(s.b[1])}), ${f(s.r)})`;
  return `lSdBox(p, vec2(${f(s.c[0])}, ${f(s.c[1])}), vec2(${f(s.h[0])}, ${f(s.h[1])}))`;
}

/** GLSL for sdIslands(vec2 xz), sdWell(vec2 xz) and hubDist(vec2 xz), generated from the tables above. */
export function glslLayout() {
  const hub = ISLANDS.find((s) => s.id === 'cell');
  const lines = ISLANDS.map((s, i) => (i === 0 ? `  float d = ${glslShape(s)};` : `  d = min(d, ${glslShape(s)});`));
  return /* glsl */ `
float lSdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
float lSdBox(vec2 p, vec2 c, vec2 h) {
  vec2 q = abs(p - c) - h;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
float sdIslands(vec2 p) {
${lines.join('\n')}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${f(WELL.cx)}, ${f(WELL.cz)})) - vec2(${f(WELL.hx - WELL.r)}, ${f(WELL.hz - WELL.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${f(WELL.r)};
}
const vec2 HUB_C = vec2(${f(hub.c[0])}, ${f(hub.c[1])});
const float HUB_R = ${f(hub.r)};
`;
}

/** Points along the well outline, counter-clockwise seen from above, spaced about `step` metres. */
export function wellOutline(step = 0.5) {
  const { cx, cz, hx, hz, r } = WELL;
  const pts = [];
  const corners = [
    [cx + hx - r, cz + hz - r, 0], // front-right (+x, +z)
    [cx - hx + r, cz + hz - r, Math.PI / 2],
    [cx - hx + r, cz - hz + r, Math.PI],
    [cx + hx - r, cz - hz + r, (3 * Math.PI) / 2],
  ];
  // Walk: right edge (front→back) is drawn between corners; go round corner arcs in order.
  const arcN = Math.max(6, Math.ceil(((Math.PI / 2) * r) / step));
  const edge = (x0, z0, x1, z1) => {
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / step));
    for (let i = 0; i < n; i++) pts.push([x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n]);
  };
  // Parametrise in screen-space angle where +z is "down"; use math angle on (x, z) plane.
  for (let k = 0; k < 4; k++) {
    const [ccx, ccz, start] = corners[k];
    for (let i = 0; i < arcN; i++) {
      const t = start + ((Math.PI / 2) * i) / arcN;
      pts.push([ccx + r * Math.cos(t), ccz + r * Math.sin(t)]);
    }
    const [nx, nz, nstart] = corners[(k + 1) % 4];
    const ex = ccx + r * Math.cos(start + Math.PI / 2);
    const ez = ccz + r * Math.sin(start + Math.PI / 2);
    const sx = nx + r * Math.cos(nstart);
    const sz = nz + r * Math.sin(nstart);
    edge(ex, ez, sx, sz);
  }
  return pts;
}
