// Pooled effects: smoke puffs for failed tool calls, sparks for the laser engraver and floor
// ripples that spread from a station's base when a call finishes.
import * as THREE from 'three';
import { NO_REFLECT_LAYER } from './reflection.js';

export const RIPPLE_LIFE = 1.1;
const RIPPLE_COUNT = 12;

export function createEffects(tex) {
  const root = new THREE.Group();
  root.name = 'effects';
  // Thin bright ring with a soft inner fade; one shared geometry, one material per pooled ring.
  const ringGeo = new THREE.RingGeometry(0.9, 1.0, 64, 1).rotateX(-Math.PI / 2);
  const ripples = Array.from({ length: RIPPLE_COUNT }, () => {
    const mat = new THREE.MeshBasicMaterial({
      name: 'ripple',
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const mesh = new THREE.Mesh(ringGeo, mat);
    mesh.name = 'ripple';
    mesh.visible = false;
    mesh.renderOrder = 2;
    // Flat on the mirror floor already: drawing it into the reflection would only double it.
    mesh.layers.set(NO_REFLECT_LAYER);
    root.add(mesh);
    return { mesh, mat, life: 0, from: 0.3, to: 1.2, gain: 1 };
  });
  let ri = 0;
  const make = (count, color, additive) =>
    Array.from({ length: count }, () => {
      const mat = new THREE.SpriteMaterial({
        map: tex.radial,
        color,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      });
      const sp = new THREE.Sprite(mat);
      sp.visible = false;
      root.add(sp);
      return { sp, mat, life: 0, max: 1, v: new THREE.Vector3(), size: 0.1, grow: 0, gravity: 0, alpha: 1 };
    });
  const smoke = make(48, 0x8b9099, false);
  const sparks = make(96, 0xffb46b, true);
  let si = 0;
  let ki = 0;

  function emit(pool, cursor, pos, o) {
    const p = pool[cursor % pool.length];
    p.life = p.max = o.life;
    p.sp.position.copy(pos);
    p.v.copy(o.v);
    p.size = o.size;
    p.grow = o.grow;
    p.gravity = o.gravity;
    p.alpha = o.alpha;
    p.sp.scale.setScalar(o.size);
    p.mat.opacity = o.alpha;
    p.sp.visible = true;
  }

  return {
    root,
    /** Grey smoke rising from pos (failed tool call). */
    puff(pos, count = 9) {
      for (let i = 0; i < count; i++) {
        emit(smoke, si++, pos, {
          life: 1.4 + Math.random() * 0.9,
          v: new THREE.Vector3((Math.random() - 0.5) * 0.18, 0.28 + Math.random() * 0.25, (Math.random() - 0.5) * 0.18),
          size: 0.08 + Math.random() * 0.06,
          grow: 0.32,
          gravity: -0.02,
          alpha: 0.42,
        });
      }
    },
    /** Hot sparks thrown from pos (laser engraving). */
    sparks(pos, count = 3) {
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 0.35 + Math.random() * 0.7;
        emit(sparks, ki++, pos, {
          life: 0.25 + Math.random() * 0.35,
          v: new THREE.Vector3(Math.cos(a) * s, 0.3 + Math.random() * 0.7, Math.sin(a) * s),
          size: 0.012 + Math.random() * 0.012,
          grow: -0.01,
          gravity: 3.2,
          alpha: 1,
        });
      }
    },
    /**
     * A ring spreading over the floor from pos (a finished call). color = hex; radius from → to.
     */
    ripple(pos, color, { from = 0.35, to = 1.25, gain = 1 } = {}) {
      const r = ripples[ri++ % ripples.length];
      r.life = RIPPLE_LIFE;
      r.from = from;
      r.to = to;
      r.gain = gain;
      r.mat.color.setHex(color).multiplyScalar(1.6);
      r.mesh.position.set(pos.x, pos.y + 0.004, pos.z);
      r.mesh.scale.setScalar(from);
      r.mat.opacity = gain;
      r.mesh.visible = true;
    },
    /** Active ripples, for tests: [{ position, radius, opacity }]. */
    ripples() {
      return ripples.filter((r) => r.life > 0).map((r) => ({ position: r.mesh.position.clone(), radius: r.mesh.scale.x, opacity: r.mat.opacity }));
    },
    busy() {
      return ripples.some((r) => r.life > 0);
    },
    update(dt) {
      for (const r of ripples) {
        if (r.life <= 0) continue;
        r.life -= dt;
        if (r.life <= 0) {
          r.mesh.visible = false;
          r.mat.opacity = 0;
          continue;
        }
        const age = 1 - r.life / RIPPLE_LIFE;
        const ease = 1 - (1 - age) * (1 - age) * (1 - age);
        r.mesh.scale.setScalar(r.from + (r.to - r.from) * ease);
        r.mat.opacity = r.gain * (1 - age) * (1 - age);
      }
      for (const pool of [smoke, sparks]) {
        for (const p of pool) {
          if (p.life <= 0) continue;
          p.life -= dt;
          if (p.life <= 0) {
            p.sp.visible = false;
            p.mat.opacity = 0;
            continue;
          }
          p.v.y -= p.gravity * dt;
          p.sp.position.addScaledVector(p.v, dt);
          if (p.sp.position.y < 0.01) {
            p.sp.position.y = 0.01;
            p.v.set(p.v.x * 0.3, Math.abs(p.v.y) * 0.25, p.v.z * 0.3);
          }
          const age = 1 - p.life / p.max;
          p.sp.scale.setScalar(Math.max(0.002, p.size + p.grow * age));
          p.mat.opacity = p.alpha * (pool === smoke ? Math.sin(Math.PI * Math.min(1, age * 1.15)) : 1 - age);
        }
      }
    },
  };
}
