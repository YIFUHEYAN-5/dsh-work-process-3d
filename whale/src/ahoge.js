// Procedural ahoge: a tapered strand rising from the crown and curling forward (+z = her front).
// Built separately because Tripo turned the ahoge loop of the input image into solid discs.
import * as THREE from 'three';
export const AHOGE = [[0, 0, 0], [-0.002, 0.026, -0.004], [-0.007, 0.052, 0.002], [-0.013, 0.069, 0.019], [-0.017, 0.073, 0.038], [-0.018, 0.064, 0.052]];
export function createAhoge({ base = [0, 1.3, 0], points = AHOGE, r0 = 0.0055, r1 = 0.0007, color0 = '#2c3f9a', color1 = '#5d7fd6', material = null, outline = null, seg = 48, radial = 10 } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  const g = new THREE.TubeGeometry(curve, seg, 1, radial, false); // radius 1: vertex = centre + unit normal
  const pos = g.attributes.position, col = new Float32Array(pos.count * 3);
  const c0 = new THREE.Color(color0), c1 = new THREE.Color(color1), c = new THREE.Color(), p = new THREE.Vector3(), o = new THREE.Vector3();
  for (let i = 0; i <= seg; i++) {
    const t = i / seg; curve.getPointAt(t, o);
    const rad = THREE.MathUtils.lerp(r0, r1, Math.pow(t, 0.8)); c.copy(c0).lerp(c1, t);
    for (let j = 0; j <= radial; j++) { const k = i * (radial + 1) + j; p.fromBufferAttribute(pos, k).sub(o).multiplyScalar(rad).add(o); pos.setXYZ(k, p.x, p.y, p.z); c.toArray(col, k * 3); }
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeBoundingSphere();
  const root = new THREE.Group(); root.name = 'whaleAhoge'; root.position.set(...base);
  const mesh = new THREE.Mesh(g, material || new THREE.MeshToonMaterial({ vertexColors: true })); root.add(mesh);
  if (outline) { const h = new THREE.Mesh(g, outline); h.userData.isOutline = true; root.add(h); }
  return { root, mesh, curve };
}
