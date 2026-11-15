import * as THREE from 'three';

export const WAFER_R = 0.15;
export const WAFER_T = 0.006;

/**
 * Shared wafer geometry and the four looks a work piece goes through:
 * raw (polished blank) → normal (patterned) | gold (productive output) | bad (failed call).
 * Each look is a single material, so a wafer costs one draw call (the 6 mm rim simply
 * shows a sliver of the face texture).
 */
export function createWaferKit(M) {
  const geo = new THREE.CylinderGeometry(WAFER_R, WAFER_R, WAFER_T, 40, 1, false);
  const raw = new THREE.MeshStandardMaterial({
    name: 'wafer-raw',
    color: 0xa7adb8,
    metalness: 1,
    roughness: 0.08,
  });
  const gold = M.waferTop.clone();
  gold.name = 'wafer-gold';
  gold.color.set(0xffc766);
  if ('iridescence' in gold) gold.iridescence = Math.min(gold.iridescence, 0.35);
  const bad = M.waferTop.clone();
  bad.name = 'wafer-bad';
  bad.color.set(0x7a2222);
  bad.roughness = Math.max(0.45, bad.roughness || 0);
  if ('iridescence' in bad) bad.iridescence = Math.min(bad.iridescence, 0.05);
  const looks = { raw, normal: M.waferTop, gold, bad };
  return {
    geo,
    looks,
    create(look = 'raw') {
      const m = new THREE.Mesh(geo, looks[look] || looks.normal);
      m.name = 'wafer';
      // Wafers move all the time; the baked shadow map ignores them.
      m.castShadow = false;
      m.receiveShadow = true;
      m.userData.look = look;
      return m;
    },
    setLook(m, look) {
      if (m.userData.look === look) return;
      m.material = looks[look] || looks.normal;
      m.userData.look = look;
    },
    dispose() {
      geo.dispose();
      raw.dispose();
      gold.dispose();
      bad.dispose();
    },
  };
}
