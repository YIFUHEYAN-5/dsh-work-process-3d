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
  'float hairW = 0.0;',
  '#ifdef USE_TOON_ZONES',
  'hairW = vToon.z;',
  'lit = mix( lit, 1.0, vToon.x );', // face skin: always the lit tone
  // The cheek stain and the mouth line are repainted straight into the base colour texture (hairfix/paint_face.py), so no
  // colour-space trickery is needed here: any shader rule keyed on mid-tone desaturated texels also bleached the mouth.,
  'vec3 shade = base * mix( vec3( 1.0 ), base, uSat ) * mix( uShadow, uSkinShadow, vToon.w );',
  '#else',
  'vec3 shade = base * mix( vec3( 1.0 ), base, uSat ) * uShadow;',
  '#endif',
  // Hair. The texture's own highlight peaks at white, so the locks read as blown-out grey with a soft 40 px gradient:
  // cap the lock luminance so nothing can clip to white, and drop the rim on hair entirely (the rim was what pushed the
  // brightest texels to pure white).
  'float hairL = dot( base, vec3( 0.2126, 0.7152, 0.0722 ) );',
  'base *= mix( 1.0, min( 1.0, 0.72 / max( hairL, 1e-3 ) ), hairW );',
  'float rim = smoothstep( 0.62, 0.9, 1.0 - max( dot( normal, normalize( vViewPosition ) ), 0.0 ) ) * uRim * ( 1.0 - hairW );',
  'vec3 lit3 = mix( shade, base, lit ) + rim * mix( base, vec3( 1.0 ), 0.6 ) * ( 0.35 + 0.65 * lit );',
  // The cel highlight band cannot come from the texture (Tripo bakes one blob on the crown) nor from N.L (the back of the
  // head faces away from the key light, so the band vanished there). A per-vertex attribute was tried next: its edge runs
  // along triangle borders, which reads as a staircase, and baking it into a 1024 texture blurred into clouds because the
  // hair islands are a handful of texels each. So the belt is evaluated per pixel in bind space instead - an analytic
  // field is smooth at any zoom, and fwidth() gives it a one-pixel edge.
  '#ifdef USE_TOON_BAND',
  'float bandV = 0.0;',
  'vec3 bandCol = vec3( 0.31, 0.40, 0.85 );',
  '{',
  '  float th = atan( vObjPos.x, vObjPos.z );',
  // One random offset per lock. A plain function of the azimuth puts the band at the same height on every lock, which
  // reads as a brim; quantising the azimuth into sectors and hashing the sector gives each lock its own phase, and the
  // steps land on the white seams where the locks already separate.
  '  float sec = floor( ( th + 3.14159265 ) * 2.2 );',
  '  float ar = fract( sin( sec * 12.9898 + 4.1 ) * 43758.5453 );',
  '  float yb = 0.826 + 0.009 * sin( 5.0 * th ) + ( ar - 0.5 ) * 0.050;',
  '  float d = vObjPos.y - yb;',
  '  float aa = fwidth( d ) * 1.2 + 0.0008;',
  '  bandV = smoothstep( -0.042 - aa, -0.034 + aa, d ) * ( 1.0 - smoothstep( 0.038 - aa, 0.046 + aa, d ) );',
  // Flat colour across the whole crown reads as a painted brim, so keep the band off surfaces that face the camera and
  // give the inside a little tonal grit.
  '  float nv = abs( dot( normalize( normal ), normalize( vViewPosition ) ) );',
  // Each lock also gets its own strength, so the belt breaks into a row of separate highlights instead of one ring.
  '  bandV *= ( 0.35 + 0.65 * smoothstep( 0.10, 0.35, nv ) ) * hairW;',
  '  bandV *= 0.68 + 0.32 * ( 0.5 + 0.5 * sin( sec * 4.7 + 1.3 ) );',
  '  float grit = fract( sin( dot( vObjPos, vec3( 91.7, 137.1, 71.3 ) ) ) * 43758.5453 );',
  '  bandCol *= ( 0.84 + 0.18 * smoothstep( 0.10, 0.60, bandV ) ) * ( 0.95 + 0.10 * grit );',
  '}',
  'lit3 = mix( lit3, bandCol, clamp( bandV, 0.0, 1.0 ) * 0.92 );',
  // The tips bake a light blue gradient, and a 10 px pale triangle on an otherwise pointed tip reads as lining turned
  // inside out. Pull that corner of the texture back toward the body tone.
  'lit3 *= 1.0 - 0.18 * hairW * ( 1.0 - smoothstep( 0.440, 0.500, vObjPos.y ) );',
  '#endif',
  // Double sided cards were tried here to fake ruffle thickness. The skirt is a thin shell, so its front and back faces
  // fight for the same depth and the gold lace turned into a mottled smear, so cards stay single sided.
  'vec3 outgoingLight = lit3 + totalEmissiveRadiance;'
].join('\n\t');
const LIGHT_LINE = 'vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;';

// zones: the geometry carries the 'toon' attribute (applyToon renames the GLB's _toon).
export function toonMaterial({ map = null, color = 0xffffff, vertexColors = false, side = THREE.FrontSide, zones = false, band = false, ...o } = {}) {
  const p = { ...TOON, ...o };
  const m = new THREE.MeshToonMaterial({ map, color, vertexColors, side });
  if (zones) m.defines = { USE_TOON_ZONES: '' };
  if (band) m.defines = { ...(m.defines || {}), USE_TOON_BAND: '' };
  const u = {
    uLight: { value: new THREE.Vector3(...p.light).normalize() }, uShadow: { value: new THREE.Color(...p.shadow) }, uSkinShadow: { value: new THREE.Color(...p.skinShadow) },
    uThr: { value: p.threshold }, uSoft: { value: p.soft }, uRim: { value: p.rim }, uSat: { value: p.sat }, uVib: { value: p.vib }
  };
  m.userData.toon = u;
  m.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    if (!s.fragmentShader.includes(LIGHT_LINE)) throw new Error('toonMaterial: three.js toon shader changed');
    if (zones) s.vertexShader = 'attribute vec4 toon;\nvarying vec4 vToon;\n' + s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n\tvToon = toon;');
    if (band) s.vertexShader = 'varying vec3 vObjPos;\n' + s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n\tvObjPos = position;');
    s.fragmentShader = 'uniform vec3 uLight;\nuniform vec3 uShadow, uSkinShadow;\nuniform float uThr, uSoft, uRim, uSat, uVib;\n'
      + (zones ? 'varying vec4 vToon;\n' : '') + (band ? 'varying vec3 vObjPos;\n' : '')
      + s.fragmentShader.replace(LIGHT_LINE, FRAG);
  };
  m.customProgramCacheKey = () => 'whale-toon' + (zones ? '-z' : '') + (band ? '-b' : '');
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
    if (geo.attributes._band && !geo.attributes.band) { geo.setAttribute('band', geo.attributes._band); geo.deleteAttribute('_band'); }
    // The band is analytic (see FRAG), so any mesh that carries the hair weight gets it; hairW gates it per pixel.
    const zones = !!geo.attributes.toon, band = !!geo.attributes.toon;
    x.material = toonMaterial({ map: old.map || null, color: old.map ? 0xffffff : (old.color || 0xffffff), vertexColors: !!old.vertexColors, zones, band, ...o });
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
