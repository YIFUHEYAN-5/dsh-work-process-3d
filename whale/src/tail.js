// Procedural whale tail for the maid whale girl (units: metres, character ~1.35 m, feet at y = 0, facing +z).
// Slim tail from under the back of the skirt, hanging behind the legs, horizontal flukes just above the floor.
// createTail() -> { root, bones, meshes, update(t, state) }; toon-shaded with vertex colours and an inverted-hull outline.
import * as THREE from 'three';

// fitted to the Tripo body (1.35 m, feet y=0, facing +z): leg backs at z = -0.02, skirt back hem z = -0.153 at y = 0.50, hip back z = -0.085 at y = 0.70
export const SPINE = [[0, 0.70, -0.04], [0, 0.52, -0.10], [0, 0.34, -0.09], [0, 0.18, -0.082], [0, 0.09, -0.095], [0, 0.055, -0.175]];
const COL = { dorsal: new THREE.Color('#1f2a66'), mid: new THREE.Color('#3a5cc0'), belly: new THREE.Color('#d3e3f8'), edge: new THREE.Color('#9cbcec') };
const X = new THREE.Vector3(1, 0, 0);
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function toonGradient() {
  const d = new Uint8Array([150, 150, 150, 255, 215, 215, 215, 255, 255, 255, 255, 255]);
  const t = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  return t;
}
export function outlineMaterial(color = '#0d1233', width = 0.0035) {
  const m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide });
  m.onBeforeCompile = s => {
    s.uniforms.outlineW = { value: width };
    s.vertexShader = 'uniform float outlineW;\n' + s.vertexShader.replace('#include <skinning_vertex>', '#include <skinning_vertex>\n\ttransformed += normalize( objectNormal ) * outlineW;');
  };
  return m;
}
function shade(n, v) {
  const d = n.dot(v);
  return COL.dorsal.clone().lerp(COL.mid, sstep(-0.25, 0.45, d)).lerp(COL.belly, sstep(0.5, 0.92, d));
}

export function createTail({ spine = SPINE, r0 = 0.038, r1 = 0.015, nBones = 7, gradient = toonGradient(), material = null, outline = null } = {}) {
  const curve = new THREE.CatmullRomCurve3(spine.map(p => new THREE.Vector3(...p)), false, 'centripetal');
  const L = 72, M = 20;
  const pos = [], nor = [], col = [], si = [], sw = [], idx = [];
  const weights = t => { const f = t * (nBones - 1); const i = Math.min(nBones - 2, Math.floor(f)); const w = f - i; return [i, i + 1, 1 - w, w]; };
  const P = new THREE.Vector3(), T = new THREE.Vector3(), V = new THREE.Vector3(), N = new THREE.Vector3(), Q = new THREE.Vector3();
  for (let i = 0; i <= L; i++) {
    const t = i / L;
    curve.getPointAt(t, P); curve.getTangentAt(t, T);
    V.crossVectors(T, X).normalize();
    const r = r1 + (r0 - r1) * Math.pow(1 - t, 1.15) * (1 + 0.15 * Math.sin(Math.PI * t));
    const s = sstep(0.78, 1, t), rx = r * (1 + 0.55 * s), rv = r * (1 - 0.3 * s);
    const [b0, b1, w0, w1] = weights(t);
    for (let j = 0; j < M; j++) {
      const a = (j / M) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      Q.copy(P).addScaledVector(X, rx * c).addScaledVector(V, rv * sn);
      N.copy(X).multiplyScalar(c / rx).addScaledVector(V, sn / rv).normalize();
      pos.push(Q.x, Q.y, Q.z); nor.push(N.x, N.y, N.z);
      const k = shade(N, V); col.push(k.r, k.g, k.b);
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
  function update(t, { sway = 0.1, swing = 0.035, speed = 0.45, curl = 0 } = {}) {
    let roll = 0;
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
  }
  return { root, bones, meshes, curve, update };
}
