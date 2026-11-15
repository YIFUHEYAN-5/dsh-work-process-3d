// Cel shading shared by the Tripo body and the procedural parts (tail, ahoge).
// Two tones with a soft terminator, saturated cool shadows and a thin rim; it ignores scene lights so the
// character looks the same in the bright preview and in the host's env-map-lit factory.
import * as THREE from 'three';

// vib: extra saturation for blue-dominant texels only (hair, eyes, navy cloth); skin, gold and neutral whites are untouched.
// skinShadow: shadow tint on skin (warm instead of the cool cloth shadow). It and the face rule need the zones that
// whale/tools/rig/toon_zones.py bakes into the GLB (attribute _TOON: face, outline width, hair, skin); meshes without it
// (tail, ahoge) shade as before.
export const TOON = { light: [0.45, 0.85, 0.6], shadow: [0.74, 0.76, 0.93], skinShadow: [0.89, 0.78, 0.89], threshold: 0.44, soft: 0.035, rim: 0.2, sat: 0.4, vib: 0 };
// outline colours: clothes and everything without zones, hair, skin
export const LINE = { color: 0x141a3a, hair: 0x1e265c, skin: 0x603834 };

const FRAG = [
  'vec3 Lv = normalize( ( viewMatrix * vec4( uLight, 0.0 ) ).xyz );',
  'float lit = smoothstep( uThr - uSoft, uThr + uSoft, dot( normal, Lv ) * 0.5 + 0.5 );',
  'vec3 base = diffuseColor.rgb;',
  'float vibW = smoothstep( 0.015, 0.08, base.b - max( base.r, base.g ) );',
  'base = clamp( mix( vec3( dot( base, vec3( 0.2126, 0.7152, 0.0722 ) ) ), base, 1.0 + uVib * vibW ), 0.0, 1.0 );',
  '#ifdef USE_TOON_ZONES',
  'lit = mix( lit, 1.0, vToon.x );', // face skin: always the lit tone
  'vec3 shade = base * mix( vec3( 1.0 ), base, uSat ) * mix( uShadow, uSkinShadow, vToon.w );',
  '#else',
  'vec3 shade = base * mix( vec3( 1.0 ), base, uSat ) * uShadow;',
  '#endif',
  'float rim = smoothstep( 0.62, 0.9, 1.0 - max( dot( normal, normalize( vViewPosition ) ), 0.0 ) ) * uRim;',
  'vec3 outgoingLight = mix( shade, base, lit ) + rim * mix( base, vec3( 1.0 ), 0.6 ) * ( 0.35 + 0.65 * lit ) + totalEmissiveRadiance;'
].join('\n\t');
const LIGHT_LINE = 'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;';

// zones: the geometry carries the 'toon' attribute (applyToon renames the GLB's _toon).
export function toonMaterial({ map = null, color = 0xffffff, vertexColors = false, side = THREE.FrontSide, zones = false, ...o } = {}) {
  const p = { ...TOON, ...o };
  const m = new THREE.MeshToonMaterial({ map, color, vertexColors, side });
  if (zones) m.defines = { USE_TOON_ZONES: '' };
  const u = {
    uLight: { value: new THREE.Vector3(...p.light).normalize() }, uShadow: { value: new THREE.Color(...p.shadow) }, uSkinShadow: { value: new THREE.Color(...p.skinShadow) },
    uThr: { value: p.threshold }, uSoft: { value: p.soft }, uRim: { value: p.rim }, uSat: { value: p.sat }, uVib: { value: p.vib }
  };
  m.userData.toon = u;
  m.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    if (!s.fragmentShader.includes(LIGHT_LINE)) throw new Error('toonMaterial: three.js toon shader changed');
    if (zones) s.vertexShader = 'attribute vec4 toon;\nvarying vec4 vToon;\n' + s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n\tvToon = toon;');
    s.fragmentShader = 'uniform vec3 uLight;\nuniform vec3 uShadow, uSkinShadow;\nuniform float uThr, uSoft, uRim, uSat, uVib;\n' + (zones ? 'varying vec4 vToon;\n' : '') + s.fragmentShader.replace(LIGHT_LINE, FRAG);
  };
  m.customProgramCacheKey = () => (zones ? 'whale-toon-z' : 'whale-toon');
  return m;
}

// Inverted hull. width is in the mesh's local units; works for static and skinned meshes. With zones the width is scaled by
// the baked factor (thinner on hair) and the colour blends to the hair and skin line colours. On the face the hull only grows
// where the skinned surface turns away from the camera, so the bumps of the Tripo face draw no lines while the jaw and cheek
// contour keep one.
export function outlineMaterial({ color = LINE.color, width = 0.0022, hair = LINE.hair, skin = LINE.skin, zones = false } = {}) {
  const m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide });
  if (zones) m.defines = { USE_TOON_ZONES: '' };
  const u = { uOutlineW: { value: width }, uLineHair: { value: new THREE.Color(hair) }, uLineSkin: { value: new THREE.Color(skin) } };
  m.userData.outline = u;
  const W = zones ? 'uOutlineW * owK' : 'uOutlineW';
  // the normal is taken before FLIP_SIDED negates transformedNormal for this back-side material
  const SIL = 'float owK = toon.y;\n#ifdef USE_SKINNING\n\tvec3 owP = ( modelViewMatrix * vec4( transformed, 1.0 ) ).xyz;\n\tvec3 owV = isPerspectiveMatrix( projectionMatrix ) ? normalize( -owP ) : vec3( 0.0, 0.0, 1.0 );\n\towK = mix( owK, 1.0 - smoothstep( 0.15, 0.5, dot( normalize( normalMatrix * objectNormal ), owV ) ), toon.x );\n#endif\n';
  m.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    s.vertexShader = 'uniform float uOutlineW;\n' + (zones ? 'attribute vec4 toon;\nvarying vec2 vLine;\n' : '') + s.vertexShader.replace('#include <skinning_vertex>',
      '#include <skinning_vertex>\n' + (zones ? SIL : '') + '#ifdef USE_SKINNING\n\ttransformed += normalize( objectNormal ) * ' + W + ';\n#else\n\ttransformed += normalize( normal ) * ' + W + ';\n#endif' + (zones ? '\n\tvLine = toon.zw;' : ''));
    if (zones) s.fragmentShader = 'uniform vec3 uLineHair, uLineSkin;\nvarying vec2 vLine;\n' + s.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );',
      'vec4 diffuseColor = vec4( mix( mix( diffuse, uLineHair, vLine.x ), uLineSkin, vLine.y ), opacity );');
  };
  m.customProgramCacheKey = () => (zones ? 'whale-outline-z' : 'whale-outline');
  return m;
}

// Replaces every mesh material under root with toonMaterial (keeping its colour map) and adds an outline hull.
// outline is the hull width in world metres.
// Meshes whose geometry has the baked zones (GLTFLoader names the attribute _toon) get the face, skin and outline rules.
export function applyToon(root, { outline = 0.0022, outlineColor = LINE.color, lineHair = LINE.hair, lineSkin = LINE.skin, ...o } = {}) {
  const list = []; root.traverse(x => { if (x.isMesh && !x.userData.isOutline) list.push(x); });
  const ws = new THREE.Vector3();
  root.updateWorldMatrix(true, true);
  for (const x of list) {
    const old = x.material, geo = x.geometry;
    if (geo.attributes._toon && !geo.attributes.toon) { geo.setAttribute('toon', geo.attributes._toon); geo.deleteAttribute('_toon'); }
    const zones = !!geo.attributes.toon;
    x.material = toonMaterial({ map: old.map || null, color: old.map ? 0xffffff : (old.color || 0xffffff), vertexColors: !!old.vertexColors, zones, ...o });
    old.dispose();
    if (!(outline > 0)) continue;
    x.getWorldScale(ws);
    const om = outlineMaterial({ color: outlineColor, width: outline / ws.x, hair: lineHair, skin: lineSkin, zones });
    const hull = x.isSkinnedMesh ? new THREE.SkinnedMesh(x.geometry, om) : new THREE.Mesh(x.geometry, om);
    hull.userData.isOutline = true; hull.frustumCulled = x.frustumCulled; hull.renderOrder = x.renderOrder;
    if (x.isSkinnedMesh) { x.parent.add(hull); hull.position.copy(x.position); hull.quaternion.copy(x.quaternion); hull.scale.copy(x.scale); hull.bind(x.skeleton, x.bindMatrix); }
    else x.add(hull);
  }
}
