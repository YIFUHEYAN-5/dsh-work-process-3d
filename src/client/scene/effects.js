// Pooled sprite effects: smoke puffs for failed tool calls and sparks for the laser engraver.
import * as THREE from 'three';

export function createEffects(tex) {
  const root = new THREE.Group();
  root.name = 'effects';
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
    update(dt) {
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
