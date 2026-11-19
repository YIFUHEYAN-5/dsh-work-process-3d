// Procedural whale tail for the maid whale girl (units: metres, character ~1.35 m, feet at y = 0, facing +z).
// Slim tail from under the back of the skirt, hanging behind the legs, horizontal flukes just above the floor.
// createTail() -> { root, bones, meshes, curve, update(t, state), follow(anchor, { floor }) }; toon-shaded with vertex colours and an inverted-hull outline.
// Real-time use: call update(t, { ...state, dt }) every frame after the animation mixer; dt adds a short lag (see smooth()).
import * as THREE from 'three';

// fitted to the Tripo body (1.35 m, feet y=0, facing +z): leg backs at z = -0.02, skirt back hem z = -0.153 at y = 0.50, hip back z = -0.085 at y = 0.70.
// The tail stays inside the skirt down to the hem and crosses the fabric right at the white ruffle (z = -0.166 at y = 0.475),
// so the skirt is not cut open higher up and the tail below the hem is unobstructed.
// A gentle S keeps the tail from reading as a straight bar from behind, and the skirt hem (z = -0.153 at y = 0.50) is
// cleared at z = -0.168 so the fabric is not cut open where the tail leaves the skirt.
// Inside the skirt the spine stays well forward of the fabric: the tube plus its radius has to clear the skirt's back
// surface, otherwise the tail pokes a dark blob through the navy cloth around y 0.6.
export const SPINE = [[0, 0.70, -0.03], [0.008, 0.58, -0.052], [0.014, 0.52, -0.075], [0.018, 0.475, -0.166], [0.010, 0.36, -0.156], [-0.008, 0.24, -0.14], [-0.022, 0.12, -0.15], [-0.03, 0.05, -0.212]];
// Three flat cel values, no gradient: the tail has to sit in the same banded world as the dress (flat #2a2d5c with one
// hard cel edge), so the cylinder is painted in three steps that run along its length.
const COL = { dorsal: new THREE.Color('#232a66'), mid: new THREE.Color('#34408a'), belly: new THREE.Color('#6f86d8'), edge: new THREE.Color('#9cbcec') };
const X = new THREE.Vector3(1, 0, 0);
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function toonGradient() {
  const d = new Uint8Array([150, 150, 150, 255, 215, 215, 215, 255, 255, 255, 255, 255]);
  const t = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  return t;
}
// Same dark navy as the body outline (whale/src/toon.js LINE.color) so the tail edge closes like the skirt hem does.
export function outlineMaterial(color = '#141a3a', width = 0.0022) {
  const m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide });
  m.onBeforeCompile = s => {
    s.uniforms.outlineW = { value: width };
    s.vertexShader = 'uniform float outlineW;\n' + s.vertexShader.replace('#include <skinning_vertex>', '#include <skinning_vertex>\n\ttransformed += normalize( objectNormal ) * outlineW;');
  };
  return m;
}
// Hard cel bands by cross-section angle (sin a < 0 is the back of the tail): the back is the darkest value, the flanks
// step straight up to the mid value, the belly one more step. No interpolation anywhere, so no airbrush gradient.
function shade(sn) {
  return sn < -0.55 ? COL.dorsal.clone() : sn > 0.55 ? COL.belly.clone() : COL.mid.clone();
}

export function createTail({ spine = SPINE, r0 = 0.036, r1 = 0.0075, nBones = 7, gradient = toonGradient(), material = null, outline = null } = {}) {
  const curve = new THREE.CatmullRomCurve3(spine.map(p => new THREE.Vector3(...p)), false, 'centripetal');
  const L = 72, M = 20;
  const pos = [], nor = [], col = [], si = [], sw = [], idx = [];
  const radius = t => (r1 + (r0 - r1) * Math.pow(1 - t, 1.5) * (1 + 0.10 * Math.sin(Math.PI * t))) * (0.78 + 0.22 * sstep(0.18, 0.45, t));
  const weights = t => { const f = t * (nBones - 1); const i = Math.min(nBones - 2, Math.floor(f)); const w = f - i; return [i, i + 1, 1 - w, w]; };
  const P = new THREE.Vector3(), T = new THREE.Vector3(), V = new THREE.Vector3(), N = new THREE.Vector3(), Q = new THREE.Vector3();
  for (let i = 0; i <= L; i++) {
    const t = i / L;
    curve.getPointAt(t, P); curve.getTangentAt(t, T);
    V.crossVectors(T, X).normalize();
    const r = radius(t);
    const s = sstep(0.78, 1, t), rx = r * (1 + 0.55 * s), rv = r * (1 - 0.3 * s);
    const [b0, b1, w0, w1] = weights(t);
    for (let j = 0; j < M; j++) {
      const a = (j / M) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      Q.copy(P).addScaledVector(X, rx * c).addScaledVector(V, rv * sn);
      N.copy(X).multiplyScalar(c / rx).addScaledVector(V, sn / rv).normalize();
      pos.push(Q.x, Q.y, Q.z); nor.push(N.x, N.y, N.z);
      // Baked cel bands: three hard steps around the tube, so it reads as a round tail without any gradient.
      const k = shade(sn);
      col.push(k.r, k.g, k.b);
      si.push(b0, b1, 0, 0); sw.push(w0, w1, 0, 0);
    }
  }
  for (let i = 0; i < L; i++) for (let j = 0; j < M; j++) {
    const a = i * M + j, b = i * M + (j + 1) % M, c = a + M, d = b + M;
    idx.push(a, b, c, b, d, c);
  }
  const body = new THREE.BufferGeometry();
  body.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  body.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  body.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  body.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  body.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  body.setIndex(idx);

  // Flukes: outline in (u = sideways, w = backwards) metres, extruded 4 mm with a 3 mm bevel, tips drooping slightly.
  const half = [[0.0, -0.012], [0.06, 0.004], [0.125, 0.04], [0.185, 0.09], [0.215, 0.13], [0.2, 0.135], [0.16, 0.122], [0.105, 0.104], [0.05, 0.096], [0.0, 0.076]];
  const shape = new THREE.Shape();
  const pts = [...half.map(([u, w]) => new THREE.Vector2(u, w)), ...half.slice(1, -1).reverse().map(([u, w]) => new THREE.Vector2(-u, w))];
  shape.setFromPoints(new THREE.SplineCurve([...pts, pts[0]]).getPoints(80));
  const fl = new THREE.ExtrudeGeometry(shape, { depth: 0.004, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 3, curveSegments: 24 });
  fl.rotateX(-Math.PI / 2); fl.translate(0, -0.002, 0);
  const end = curve.getPointAt(1);
  const fp = fl.attributes.position, fn = fl.attributes.normal, fc = [], fsi = [], fsw = [];
  for (let i = 0; i < fp.count; i++) {
    const u = fp.getX(i), w = -fp.getZ(i);
    fp.setY(i, fp.getY(i) - 0.3 * u * u - 0.03 * Math.max(0, w - 0.08));
    fp.setXYZ(i, fp.getX(i) + end.x, fp.getY(i) + end.y, fp.getZ(i) + end.z - 0.004);
    const ny = fn.getY(i);
    const k = ny > 0.3 ? COL.dorsal.clone().lerp(COL.mid, sstep(0.12, 0.2, Math.abs(u)) * 0.35) : ny < -0.3 ? COL.belly.clone() : COL.edge.clone();
    fc.push(k.r, k.g, k.b); fsi.push(nBones - 1, nBones - 2, 0, 0); fsw.push(w < 0.01 ? 0.7 : 1, w < 0.01 ? 0.3 : 0, 0, 0);
  }
  fl.computeVertexNormals();
  fl.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3));
  fl.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(fsi, 4));
  fl.setAttribute('skinWeight', new THREE.Float32BufferAttribute(fsw, 4));

  const root = new THREE.Group(); root.name = 'whaleTail';
  const bones = [];
  for (let i = 0; i < nBones; i++) {
    const b = new THREE.Bone(); b.name = 'tail_' + i;
    const p = curve.getPointAt(i / (nBones - 1));
    if (i === 0) { b.position.copy(p); root.add(b); } else { b.position.copy(p).sub(curve.getPointAt((i - 1) / (nBones - 1))); bones[i - 1].add(b); }
    bones.push(b);
  }
  root.updateMatrixWorld(true);
  const restPos = bones.map(b => b.position.clone());
  // floor clearance of each joint: tube radius (flukes: their droop below the last joint) + 4 mm
  // the tube may never come closer than 2 cm to the floor: the test guards that, and the flukes droop about that far
  const clear = bones.map((b, i) => (i === nBones - 1 ? 0.02 : Math.max(0.02, radius(i / (nBones - 1)))) + 0.004);
  const skeleton = new THREE.Skeleton(bones);
  const mat = material || new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradient });
  const meshes = [];
  for (const g of [body, fl]) {
    for (const m of [mat, outline || outlineMaterial()]) {
      const sm = new THREE.SkinnedMesh(g, m); sm.frustumCulled = false; root.add(sm); sm.bind(skeleton); meshes.push(sm);
    }
  }
  const axes = bones.map((b, i) => { const t = i / (nBones - 1); const tg = curve.getTangentAt(t); return new THREE.Vector3().crossVectors(tg, X).normalize(); });
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qc = new THREE.Quaternion(), Z = new THREE.Vector3(0, 0, 1);
  // state: sway = yaw of the lower part along the floor (rad), swing = small pendulum of the hanging part (rad),
  // speed = Hz, curl = lift of the flukes (rad, + = up/back). The last bone cancels the accumulated roll so the flukes stay level.
  // hang, floor: see follow() below; dt, lag: see smooth().
  function update(t, { sway = 0.1, swing = 0.035, speed = 0.45, curl = 0, hang, floor, dt, lag = 0.08 } = {}) {
    let roll = 0;
    for (let i = 1; i < nBones; i++) bones[i].position.copy(restPos[i]);
    for (let i = 1; i < nBones; i++) {
      const k = i / (nBones - 1), ph = Math.PI * 2 * speed * t - i * 0.6;
      let pend = swing * (1 - k) * Math.sin(ph + 1.0);
      roll += pend;
      if (i === nBones - 1) pend -= roll;
      qa.setFromAxisAngle(Z, pend);
      qb.setFromAxisAngle(axes[i], sway * sstep(0.4, 1, k) * Math.sin(ph));
      qc.setFromAxisAngle(X, curl * sstep(0.3, 1, k));
      bones[i].quaternion.copy(qa).multiply(qb).multiply(qc);
    }
    if (fo.anchor) settle(hang ?? 0.8, floor ?? fo.floor);
    smooth(dt, lag);
    if (fo.anchor) keepAbove(floor ?? fo.floor);
  }
  // While the lag trails a fast drop a joint can end up too low: lift it straight up until its tube clears the floor.
  // The segment above it is a little shorter for that moment.
  function keepAbove(floor) {
    for (let i = 1; i < nBones; i++) {
      bones[i].getWorldPosition(W.a);
      const d = floor + clear[i] * fo.s - W.a.y; if (d <= 0) continue;
      bones[i].parent.getWorldQuaternion(W.q1).invert();
      bones[i].position.add(W.v.set(0, d / fo.s, 0).applyQuaternion(W.q1)); bones[i].updateMatrixWorld(true);
    }
    levelFlukes(floor, null);
  }

  // state.dt (seconds since the previous call) makes the tail follow its target pose with a lag of state.lag seconds
  // (default 0.08) instead of jumping to it, e.g. when a joint hanging straight down reaches the floor and has to swing
  // out quickly. Without dt every call is independent of the previous one, so the preview can sample any time directly.
  let prevQ = null;
  function smooth(dt, lag) {
    if (dt === undefined) { prevQ = null; return; }
    if (!prevQ || !(dt > 0) || dt > 0.5) { prevQ = bones.map(b => b.quaternion.clone()); return; }
    const k = 1 - Math.exp(-dt / Math.max(lag, 1e-3));
    for (let i = 0; i < nBones; i++) bones[i].quaternion.copy(prevQ[i].slerp(bones[i].quaternion, k));
  }

  // Rigged body. follow(anchor) parents the tail to the anchor bone (the pelvis) without moving it. After that update() also
  // lets the tail hang: state.hang (0 = rigid, 1 = always straight down) removes that share of the anchor's tilt since
  // follow(), 35 % at the tail base and the rest at the skirt hem, and keeps the heading. A joint that would sink below
  // state.floor (world y, default: the floor given to follow) plus the flukes' rest height is lifted; once one touches, the
  // joints after it are laid on the floor and the flukes turned flat, faded in over the first 3 cm of contact.
  // The anchor's world matrix is refreshed here, so update() may run right after the mixer.
  const fo = { anchor: null, qA0i: new THREE.Quaternion(), qR0: new THREE.Quaternion(), minH: 0, s: 1, soft: 0.03, floor: 0, d: new THREE.Vector3() };
  const W = { dA: new THREE.Quaternion(), tw: new THREE.Quaternion(), sw: new THREE.Quaternion(), q: new THREE.Quaternion(), q1: new THREE.Quaternion(), q2: new THREE.Quaternion(),
    a: new THREE.Vector3(), b: new THREE.Vector3(), v: new THREE.Vector3(), h: new THREE.Vector3(), back: new THREE.Vector3(), Y: new THREE.Vector3(0, 1, 0) };
  function follow(anchor, { floor = 0 } = {}) {
    for (const b of bones) b.quaternion.identity();
    anchor.updateWorldMatrix(true, false); root.updateWorldMatrix(true, true);
    anchor.getWorldQuaternion(fo.qA0i).invert(); root.getWorldQuaternion(fo.qR0);
    bones[nBones - 2].getWorldPosition(W.a); bones[nBones - 1].getWorldPosition(W.b);
    fo.minH = W.b.y - floor; fo.floor = floor; fo.s = root.getWorldScale(W.v).y; fo.soft = 0.03 * fo.s;
    fo.d.subVectors(W.b, W.a).setY(0).normalize();
    anchor.attach(root); fo.anchor = anchor;
  }
  function rotateWorld(b, q) { // pre-multiply a world-space rotation onto bone b
    b.getWorldQuaternion(W.q1); b.parent.getWorldQuaternion(W.q2);
    b.quaternion.copy(W.q2.invert().multiply(W.q1.premultiply(q))); b.updateMatrixWorld(true);
  }
  function settle(hang, floor) {
    const { dA, tw, sw, q, a, b, v, h, back } = W;
    fo.anchor.getWorldQuaternion(dA).multiply(fo.qA0i);
    tw.set(0, dA.y, 0, dA.w); if (tw.lengthSq() < 1e-12) tw.identity(); else tw.normalize();
    sw.copy(tw).invert().premultiply(dA).invert(); // undoes the tilt: dA = tilt · heading
    bones[0].quaternion.identity();
    rotateWorld(bones[0], q.identity().slerp(sw, hang * 0.35));
    rotateWorld(bones[1], q.identity().slerp(sw, hang * 0.65));
    back.set(0, 0, -1).applyQuaternion(fo.qR0).applyQuaternion(tw).setY(0).normalize();
    const minY = floor + fo.minH; let press = 0, grounded = false;
    for (let i = 0; i < nBones - 1; i++) {
      bones[i].getWorldPosition(a); bones[i + 1].getWorldPosition(b);
      let ty;
      if (b.y < minY) { ty = minY; press = Math.max(press, minY - b.y); grounded = true; }
      else if (grounded) ty = b.y + (minY - b.y) * sstep(0, fo.soft, press);
      else continue;
      v.subVectors(b, a); const l = v.length(), dy = Math.max(-l, Math.min(l, ty - a.y)), m = Math.sqrt(l * l - dy * dy);
      h.set(v.x, 0, v.z); const hl = h.length();
      if (m <= hl) { if (hl > 0) h.multiplyScalar(m / hl); } // lowering: keep the heading
      else { // lifting: widen towards the heading, turning towards the back the more it widens (continuous except
        // for one direction pointing forwards, which cannot be avoided)
        h.addScaledVector(back, m - hl); const n = h.length();
        if (n > 1e-9 * l) h.multiplyScalar(m / n); else h.copy(back).multiplyScalar(m);
      }
      h.y = dy;
      rotateWorld(bones[i], q.setFromUnitVectors(v.divideScalar(l), h.divideScalar(l)));
    }
    levelFlukes(floor, minY);
  }
  // Flukes: turned flat (keeping the heading of the last segment) as they come near minY (skipped when minY is null), and
  // never tilted so far that a tip (up to 25 cm from the last joint) reaches the floor.
  function levelFlukes(floor, minY) {
    const { a, b, v, h, q } = W, last = bones[nBones - 1];
    last.getWorldPosition(b); last.getWorldQuaternion(W.q1);
    const up = v.set(0, 1, 0).applyQuaternion(W.q2.copy(fo.qR0).invert()).applyQuaternion(W.q1), tilt = Math.acos(Math.max(-1, Math.min(1, up.y)));
    const room = (b.y - floor - 0.025 * fo.s) / (0.25 * fo.s), aMax = room >= 1 ? Math.PI / 2 : room <= 0 ? 0 : Math.asin(room);
    const f0 = minY === null ? 0 : 1 - sstep(0.05 * fo.s, 0.25 * fo.s, b.y - minY);
    const f = Math.max(f0, tilt > aMax ? 1 - aMax / tilt : 0); if (f <= 0) return;
    bones[nBones - 2].getWorldPosition(a);
    h.subVectors(b, a).setY(0); if (h.lengthSq() < 1e-12) h.copy(W.back); h.normalize();
    q.setFromAxisAngle(W.Y, Math.atan2(fo.d.z * h.x - fo.d.x * h.z, fo.d.x * h.x + fo.d.z * h.z)).multiply(fo.qR0);
    W.q1.slerp(q, f); last.parent.getWorldQuaternion(W.q2);
    last.quaternion.copy(W.q2.invert().multiply(W.q1)); last.updateMatrixWorld(true);
  }
  return { root, bones, meshes, curve, update, follow };
}
