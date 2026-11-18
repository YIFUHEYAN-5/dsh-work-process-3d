import * as THREE from 'three';
import {
  ATRIUM, MEDIA, WELL, BALCONY, POOL, RAIL, TOWER,
  cameraRegion, clampCameraPoint, inBalconySector, overPool, sdIslands, sdWell,
} from './layout.js';

/*
 * Where the camera may be.
 *
 * Solids are volumes the camera must stay out of:
 *   - 'sector' — an annular sector around the atrium axis (the curved media wall),
 *   - 'obb'    — an oriented box measured from a scene object tagged `userData.solid`.
 * Walls (block 'ray') may not stand between the orbit target and the camera. Machines
 * (block 'end') only keep the camera from ending up inside them, so orbiting past a machine
 * does not make the view jump back and forth.
 *
 * The orbit camera keeps its own wanted position; the rendered view is pulled in along the
 * line to the target when it would leave the walkable space (past the balustrade, below the
 * floor or above the height limit) or a wall is in the way (a third-person "spring arm") and
 * eases back out once the way is clear. The roaming camera slides along solids instead of
 * stopping dead.
 */

export const CAMERA_PAD = 0.3; // clearance between the camera and any solid (near plane 0.2)
export const TARGET_CLEARANCE = 0.65; // orbit targets stay this far from walls

const TAU = Math.PI * 2;
const CAP_A = 0.16 / MEDIA.screenR;
const WALL_TOP = MEDIA.top + 0.05;
const BACK = MEDIA.back + 0.05;
const MARCH = 0.1;
const EXIT_STEP = 0.25;
const EXIT_MAX = 80;

function sector(id, r0, r1, a0, a1, y0, y1) {
  return { kind: 'sector', block: 'ray', id, r0, r1, a0, a1, y0, y1 };
}

/** The media wall: screens and wall body, the compute-module plinth, and the two end caps. */
export const MEDIA_SOLIDS = [
  sector('media-wall', 12.36, BACK, MEDIA.a0 - CAP_A, MEDIA.a1 + CAP_A, 0, WALL_TOP),
  sector('media-modules', 11.78, BACK, MEDIA.a0 - CAP_A, MEDIA.a1 + CAP_A, 0, 2.34),
  sector('media-cap-right', 11.78, BACK, MEDIA.a0 - CAP_A, MEDIA.a0, 0, WALL_TOP),
  sector('media-cap-left', 11.78, BACK, MEDIA.a1, MEDIA.a1 + CAP_A, 0, WALL_TOP),
];

const angleOf = (dx, dz) => {
  const a = Math.atan2(-dz, dx);
  return a < 0 ? a + TAU : a;
};

function setPolar(v, a, r) {
  v.x = ATRIUM.cx + r * Math.cos(a);
  v.z = ATRIUM.cz - r * Math.sin(a);
}

const _q = new THREE.Vector3();
const _o = new THREE.Vector3();
const _d = new THREE.Vector3();
const _p = new THREE.Vector3();

function contains(s, p, pad) {
  if (s.kind === 'sector') {
    if (p.y < s.y0 - pad || p.y > s.y1 + pad) return false;
    const dx = p.x - ATRIUM.cx;
    const dz = p.z - ATRIUM.cz;
    const r = Math.hypot(dx, dz);
    if (r < s.r0 - pad || r > s.r1 + pad) return false;
    const a = angleOf(dx, dz);
    const pa = pad / Math.max(r, 1e-3);
    return a >= s.a0 - pa && a <= s.a1 + pa;
  }
  _q.copy(p).applyMatrix4(s.inv);
  return (
    _q.x >= s.min.x - pad && _q.x <= s.max.x + pad &&
    _q.z >= s.min.z - pad && _q.z <= s.max.z + pad &&
    _q.y >= s.min.y - pad && _q.y <= s.max.y + pad
  );
}

/** Move `v` to the nearest point outside `s` (grown by pad): sideways or over the top. */
function pushOut(s, v, pad) {
  const e = 1e-4;
  if (s.kind === 'sector') {
    const dx = v.x - ATRIUM.cx;
    const dz = v.z - ATRIUM.cz;
    const r = Math.max(1e-3, Math.hypot(dx, dz));
    const a = angleOf(dx, dz);
    const pa = pad / r;
    const cIn = r - (s.r0 - pad);
    const cOut = s.r1 + pad - r;
    const cA0 = r * (a - (s.a0 - pa));
    const cA1 = r * (s.a1 + pa - a);
    const cUp = s.y1 + pad - v.y;
    const m = Math.min(cIn, cOut, cA0, cA1, cUp);
    if (m === cIn) setPolar(v, a, Math.max(0, s.r0 - pad - e));
    else if (m === cOut) setPolar(v, a, s.r1 + pad + e);
    else if (m === cA0) setPolar(v, s.a0 - (pad + e) / r, r);
    else if (m === cA1) setPolar(v, s.a1 + (pad + e) / r, r);
    else v.y = s.y1 + pad + e;
    return;
  }
  _q.copy(v).applyMatrix4(s.inv);
  const cx0 = _q.x - (s.min.x - pad);
  const cx1 = s.max.x + pad - _q.x;
  const cz0 = _q.z - (s.min.z - pad);
  const cz1 = s.max.z + pad - _q.z;
  const cUp = s.max.y + pad - _q.y;
  const m = Math.min(cx0, cx1, cz0, cz1, cUp);
  if (m === cx0) _q.x = s.min.x - pad - e;
  else if (m === cx1) _q.x = s.max.x + pad + e;
  else if (m === cz0) _q.z = s.min.z - pad - e;
  else if (m === cz1) _q.z = s.max.z + pad + e;
  else _q.y = s.max.y + pad + e;
  v.copy(_q).applyMatrix4(s.mat);
}

/** Distance along the ray at which it enters box `s` (grown by pad), or Infinity. */
function rayEnterBox(s, origin, dir, maxT, pad) {
  _o.copy(origin).applyMatrix4(s.inv);
  _d.copy(dir).transformDirection(s.inv);
  let t0 = 0;
  let t1 = maxT;
  for (const k of ['x', 'y', 'z']) {
    const lo = s.min[k] - pad;
    const hi = s.max[k] + pad;
    const o = _o[k];
    const d = _d[k];
    if (Math.abs(d) < 1e-9) {
      if (o < lo || o > hi) return Infinity;
      continue;
    }
    let ta = (lo - o) / d;
    let tb = (hi - o) / d;
    if (ta > tb) [ta, tb] = [tb, ta];
    t0 = Math.max(t0, ta);
    t1 = Math.min(t1, tb);
    if (t0 > t1) return Infinity;
  }
  return t0;
}

/** Positive ray parameters where the ray meets the vertical cylinder of radius r around the atrium axis. */
function cylinderRoots(origin, dir, r, out) {
  const px = origin.x - ATRIUM.cx;
  const pz = origin.z - ATRIUM.cz;
  const a = dir.x * dir.x + dir.z * dir.z;
  out.length = 0;
  if (a < 1e-12) return out;
  const b = 2 * (px * dir.x + pz * dir.z);
  const c = px * px + pz * pz - r * r;
  const disc = b * b - 4 * a * c;
  if (disc < 0) return out;
  const s = Math.sqrt(disc);
  const t0 = (-b - s) / (2 * a);
  const t1 = (-b + s) / (2 * a);
  if (t0 > 1e-6) out.push(t0);
  if (t1 > 1e-6) out.push(t1);
  return out;
}

/**
 * Oriented boxes for every object tagged `userData.solid` under `root` (a tagged object's own
 * children are not searched again). Boxes are measured in the object's local frame, so a
 * rotated machine gets a tight box. Assumes unscaled transforms.
 */
export function solidsFromScene(root) {
  const out = [];
  if (!root) return out;
  root.updateMatrixWorld(true);
  const m = new THREE.Matrix4();
  const tmp = new THREE.Box3();
  const visit = (o) => {
    if (o.userData && o.userData.solid) {
      const inv = new THREE.Matrix4().copy(o.matrixWorld).invert();
      const box = new THREE.Box3();
      o.traverse((c) => {
        // Holograms opt out with userData.noSolid; additive light (beams, glows) is not matter.
        if (!c.isMesh || !c.geometry || c.isInstancedMesh || c.userData.noSolid) return;
        if (c.material && c.material.blending === THREE.AdditiveBlending) return;
        if (!c.geometry.boundingBox) c.geometry.computeBoundingBox();
        m.multiplyMatrices(inv, c.matrixWorld);
        tmp.copy(c.geometry.boundingBox).applyMatrix4(m);
        box.union(tmp);
      });
      if (!box.isEmpty()) {
        const inset = Number(o.userData.solidInset) || 0;
        if (inset) box.expandByVector(_p.set(-inset, 0, -inset));
        out.push({
          kind: 'obb',
          block: 'end',
          id: typeof o.userData.solid === 'string' ? o.userData.solid : o.name || 'solid',
          mat: o.matrixWorld.clone(),
          inv,
          min: box.min.clone(),
          max: box.max.clone(),
        });
      }
      return;
    }
    for (const c of o.children) visit(c);
  };
  visit(root);
  return out;
}

/**
 * createCameraSpace(objects = []) → {
 *   solids, setObjects(list),
 *   contains(p, pad), resolve(v, prev), keepClear(v, clearance),
 *   containerExit(origin, dir), armLength(origin, dir, maxT, pad), surfaceHit(origin, dir, maxT)
 * }
 */
export function createCameraSpace(objects = []) {
  let solids = [...MEDIA_SOLIDS, ...objects];
  const roots = [];

  function anyContains(p, pad, skip = null) {
    for (const s of solids) if (s !== skip && contains(s, p, pad)) return s;
    return null;
  }

  /** Keep a roaming camera position walkable and out of solids, sliding along them. Modifies `v`. */
  function resolve(v, prev = null) {
    clampCameraPoint(v, prev);
    for (let k = 0; k < 4; k++) {
      let hit = false;
      for (const s of solids) {
        if (contains(s, v, CAMERA_PAD)) {
          pushOut(s, v, CAMERA_PAD);
          hit = true;
        }
      }
      if (!hit) return v;
      clampCameraPoint(v, prev);
    }
    // A tight corner: stay where we were if that was a clear spot.
    if (prev && cameraRegion(prev) && !anyContains(prev, CAMERA_PAD - 1e-3)) v.copy(prev);
    return v;
  }

  /** Push a point (an orbit target) away from walls so the camera always has room in front. */
  function keepClear(v, clearance = TARGET_CLEARANCE) {
    for (let k = 0; k < 3; k++) {
      let hit = false;
      for (const s of solids) {
        if (s.block === 'ray' && contains(s, v, clearance)) {
          pushOut(s, v, clearance);
          hit = true;
        }
      }
      if (!hit) break;
    }
    return v;
  }

  /**
   * How far the ray can go before it leaves the walkable space (the hall disc and the balcony
   * sector between the floor and the height limit). The space is not convex, so the ray is
   * marched and the exit refined by bisection. 0 when the origin is already outside.
   */
  function containerExit(origin, dir, maxT = EXIT_MAX) {
    if (!cameraRegion(origin)) return 0;
    let inside = 0;
    for (let s = EXIT_STEP; inside < maxT; s += EXIT_STEP) {
      const ss = Math.min(s, maxT);
      _p.copy(origin).addScaledVector(dir, ss);
      if (!cameraRegion(_p)) {
        let lo = inside;
        let hi = ss;
        for (let k = 0; k < 8; k++) {
          const mid = (lo + hi) / 2;
          _p.copy(origin).addScaledVector(dir, mid);
          if (cameraRegion(_p)) lo = mid;
          else hi = mid;
        }
        return lo;
      }
      inside = ss;
    }
    return maxT;
  }

  /**
   * Free length of the orbit arm from `origin` (the target) along unit `dir`, up to maxT:
   * stops `pad` before the first wall, and (unless machines is false) before any machine the
   * end point would sit in.
   */
  function armLength(origin, dir, maxT, pad = CAMERA_PAD, machines = true) {
    let free = maxT;
    if (!(free > 0)) return 0;
    // Walls the target itself sits in (should not happen; targets are kept clear) are ignored.
    let start = 0;
    for (let s = MARCH; start < free; s += MARCH) {
      const ss = Math.min(s, free);
      _p.copy(origin).addScaledVector(dir, ss);
      if (hitsWall(_p, pad, origin)) {
        let lo = start;
        let hi = ss;
        for (let k = 0; k < 7; k++) {
          const mid = (lo + hi) / 2;
          _p.copy(origin).addScaledVector(dir, mid);
          if (hitsWall(_p, pad, origin)) hi = mid;
          else lo = mid;
        }
        free = lo;
        break;
      }
      start = ss;
    }
    if (!machines) return Math.max(0, free);
    _p.copy(origin).addScaledVector(dir, free);
    for (const s of solids) {
      if (s.block !== 'end' || !contains(s, _p, pad) || contains(s, origin, 0)) continue;
      const t = rayEnterBox(s, origin, dir, free, pad);
      if (t < free) free = t;
    }
    return Math.max(0, free);
  }

  function hitsWall(p, pad, origin) {
    for (const s of solids) {
      if (s.block === 'ray' && contains(s, p, pad) && !contains(s, origin, pad)) return true;
    }
    return false;
  }

  /**
   * Nearest architectural surface along a ray (deck floor, data pool, sky pool water, the glass
   * balustrade, media wall front or back), for zooming towards whatever is under the pointer.
   * The roof is open: a ray into the sky or past the tower edge hits nothing. Returns the
   * distance or Infinity. Machines are picked separately through their hover proxies.
   */
  function surfaceHit(origin, dir, maxT = 200) {
    let best = maxT;
    if (dir.y < -1e-6) {
      const t = -origin.y / dir.y;
      if (t > 0 && t < best) {
        _p.copy(origin).addScaledVector(dir, t);
        const r = Math.hypot(_p.x - ATRIUM.cx, _p.z - ATRIUM.cz);
        const a = angleOf(_p.x - ATRIUM.cx, _p.z - ATRIUM.cz);
        let level = null;
        if (r <= TOWER.r) level = sdWell(_p.x, _p.z) < 0 && sdIslands(_p.x, _p.z) > 0 ? -WELL.depth : 0;
        else if (r <= BALCONY.r1 && inBalconySector(a)) level = overPool(_p.x, _p.z) ? POOL.water : 0;
        if (level !== null) {
          const tl = (level - origin.y) / dir.y;
          if (tl > 0 && tl < best) best = tl;
        }
      }
    }
    // The balustrade: around the hall outside the balcony, and along the balcony's outer arc
    // beside the pool (the infinity edge itself is open).
    for (const r of [RAIL.r, BALCONY.r1 - 0.06]) {
      cylinderRoots(origin, dir, r, roots);
      for (const t of roots) {
        if (t >= best) continue;
        _p.copy(origin).addScaledVector(dir, t);
        if (_p.y < 0 || _p.y > RAIL.h) continue;
        const a = angleOf(_p.x - ATRIUM.cx, _p.z - ATRIUM.cz);
        const onRail = r === RAIL.r ? !inBalconySector(a) : inBalconySector(a) && (a < POOL.a0 || a > POOL.a1);
        if (onRail) best = t;
      }
    }
    for (const r of [MEDIA.screenR, MEDIA.back]) {
      cylinderRoots(origin, dir, r, roots);
      for (const t of roots) {
        if (t >= best) continue;
        _p.copy(origin).addScaledVector(dir, t);
        const a = angleOf(_p.x - ATRIUM.cx, _p.z - ATRIUM.cz);
        if (a < MEDIA.a0 || a > MEDIA.a1 || _p.y < 0 || _p.y > MEDIA.top) continue;
        best = t;
      }
    }
    return best < maxT ? best : Infinity;
  }

  return {
    get solids() {
      return solids;
    },
    setObjects(list) {
      solids = [...MEDIA_SOLIDS, ...(list || [])];
    },
    contains: (p, pad = CAMERA_PAD) => !!anyContains(p, pad),
    resolve,
    keepClear,
    containerExit,
    armLength,
    surfaceHit,
  };
}
