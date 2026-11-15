// Cel shading shared by the Tripo body and the procedural parts (tail, ahoge).
// Two tones with a soft terminator, saturated cool shadows and a thin rim; it ignores scene lights so the
// character looks the same in the bright preview and in the host's env-map-lit factory.
import * as THREE from 'three';

// vib: extra saturation for blue-dominant texels only (hair, eyes, navy cloth); skin, gold and neutral whites are untouched.
export const TOON = { light: [0.45, 0.85, 0.6], shadow: [0.74, 0.76, 0.93], threshold: 0.44, soft: 0.035, rim: 0.2, sat: 0.4, vib: 0 };

const FRAG = [
  'vec3 Lv = normalize( ( viewMatrix * vec4( uLight, 0.0 ) ).xyz );',
  'float lit = smoothstep( uThr - uSoft, uThr + uSoft, dot( normal, Lv ) * 0.5 + 0.5 );',
  'vec3 base = diffuseColor.rgb;',
  'float vibW = smoothstep( 0.015, 0.08, base.b - max( base.r, base.g ) );',
  'base = clamp( mix( vec3( dot( base, vec3( 0.2126, 0.7152, 0.0722 ) ) ), base, 1.0 + uVib * vibW ), 0.0, 1.0 );',
  'vec3 shade = base * mix( vec3( 1.0 ), base, uSat ) * uShadow;',
  'float rim = smoothstep( 0.62, 0.9, 1.0 - max( dot( normal, normalize( vViewPosition ) ), 0.0 ) ) * uRim;',
  'vec3 outgoingLight = mix( shade, base, lit ) + rim * mix( base, vec3( 1.0 ), 0.6 ) * ( 0.35 + 0.65 * lit ) + totalEmissiveRadiance;'
].join('\n\t');
const LIGHT_LINE = 'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;';

export function toonMaterial({ map = null, color = 0xffffff, vertexColors = false, side = THREE.FrontSide, ...o } = {}) {
  const p = { ...TOON, ...o };
  const m = new THREE.MeshToonMaterial({ map, color, vertexColors, side });
  const u = {
    uLight: { value: new THREE.Vector3(...p.light).normalize() }, uShadow: { value: new THREE.Color(...p.shadow) },
    uThr: { value: p.threshold }, uSoft: { value: p.soft }, uRim: { value: p.rim }, uSat: { value: p.sat }, uVib: { value: p.vib }
  };
  m.userData.toon = u;
  m.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    if (!s.fragmentShader.includes(LIGHT_LINE)) throw new Error('toonMaterial: three.js toon shader changed');
    s.fragmentShader = 'uniform vec3 uLight;\nuniform vec3 uShadow;\nuniform float uThr, uSoft, uRim, uSat, uVib;\n' + s.fragmentShader.replace(LIGHT_LINE, FRAG);
  };
  m.customProgramCacheKey = () => 'whale-toon';
  return m;
}

// Inverted hull. width is in the mesh's local units; works for static and skinned meshes.
export function outlineMaterial({ color = 0x141a3a, width = 0.0022 } = {}) {
  const m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide });
  const u = { uOutlineW: { value: width } };
  m.userData.outline = u;
  m.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    s.vertexShader = 'uniform float uOutlineW;\n' + s.vertexShader.replace('#include <skinning_vertex>',
      '#include <skinning_vertex>\n#ifdef USE_SKINNING\n\ttransformed += normalize( objectNormal ) * uOutlineW;\n#else\n\ttransformed += normalize( normal ) * uOutlineW;\n#endif');
  };
  m.customProgramCacheKey = () => 'whale-outline';
  return m;
}

// Replaces every mesh material under root with toonMaterial (keeping its colour map) and adds an outline hull.
// outline is the hull width in world metres.
export function applyToon(root, { outline = 0.0022, outlineColor = 0x141a3a, ...o } = {}) {
  const list = []; root.traverse(x => { if (x.isMesh && !x.userData.isOutline) list.push(x); });
  const ws = new THREE.Vector3();
  root.updateWorldMatrix(true, true);
  for (const x of list) {
    const old = x.material;
    x.material = toonMaterial({ map: old.map || null, color: old.map ? 0xffffff : (old.color || 0xffffff), vertexColors: !!old.vertexColors, ...o });
    old.dispose();
    if (!(outline > 0)) continue;
    x.getWorldScale(ws);
    const om = outlineMaterial({ color: outlineColor, width: outline / ws.x });
    const hull = x.isSkinnedMesh ? new THREE.SkinnedMesh(x.geometry, om) : new THREE.Mesh(x.geometry, om);
    hull.userData.isOutline = true; hull.frustumCulled = x.frustumCulled; hull.renderOrder = x.renderOrder;
    if (x.isSkinnedMesh) { x.parent.add(hull); hull.position.copy(x.position); hull.quaternion.copy(x.quaternion); hull.scale.copy(x.scale); hull.bind(x.skeleton, x.bindMatrix); }
    else x.add(hull);
  }
}
