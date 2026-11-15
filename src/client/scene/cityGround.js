import * as THREE from 'three';
import { ATRIUM, TOWER } from './layout.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import { CITY_GLSL, GROUND_Y, HAZE_UNIFORMS, pickUniforms } from './cityCommon.js';

/*
 * The city floor 420 m below the atrium and the facade of the tower the atrium sits on.
 *
 * Ground: one disc with a procedural street grid. Streets glow sodium amber, every fourth one is
 * an avenue with a cyan median, kerb lamps and two lanes of car lights move along each street,
 * and blocks between them carry low roofs, parks and scattered lights. Lines are drawn with
 * pixel coverage and fade to their average once a block is only a few pixels wide, so the
 * grid neither aliases nor shimmers toward the horizon. The tower's foot stands in a round
 * plaza with light rings and a ring road.
 *
 * Facade: an open cylinder from the city floor up to the atrium slab with 64 glass columns,
 * 100 floors of offices (some lit), vertical light spines and glowing mechanical floors.
 */

const GROUND_VERT = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const GROUND_FRAG = /* glsl */ `
${CITY_GLSL}
uniform vec2 uCenter;
uniform float uTravel;
uniform float uLights;
uniform float uDensity;
uniform vec3 uBase;
uniform vec3 uStreet;
uniform vec3 uAvenue;
uniform vec3 uRoof;
uniform vec3 uPark;
varying vec3 vWorld;

#define PLAZA_R 77.0

const vec3 HEAD = vec3(1.0, 0.92, 0.8) * 2.4;
const vec3 TAIL = vec3(1.0, 0.12, 0.06) * 1.9;

// One family of parallel streets: centre lines at a = (k + 0.5) * GRID_P, traffic along b.
vec3 streetFamily(float a, float b, float px, float fam, inout float cov) {
  float k = floor(a / GRID_P);
  float off = a - (k + 0.5) * GRID_P;
  float d = abs(off);
  float avenue = 1.0 - step(0.5, mod(k, 4.0));
  float hw = mix(7.0, 11.0, avenue);
  float c = 1.0 - smoothstep(hw - px, hw + px, d);
  cov = max(cov, c);
  vec3 col = uStreet * (exp(-1.6 * d * d / (hw * hw)) * 0.5 * c);
  col += uAvenue * (avenue * cLine(d, 0.55, px) * 2.2);
  float near = 1.0 - smoothstep(1.5, 4.5, px);
  if (near > 0.001) {
    float lampSide = abs(d - (hw - 0.9));
    float lampAlong = abs(fract(b / 24.0 + 0.5) - 0.5) * 24.0;
    col += uStreet * (4.0 * cLine(lampSide, 0.45, px) * cLine(lampAlong, 0.45, px) * near);
    float laneOff = hw * 0.42;
    for (int i = 0; i < 2; i++) {
      float sgn = i == 0 ? 1.0 : -1.0;
      float t = b * sgn + uTravel * (18.0 + 6.0 * avenue);
      float slot = floor(t / 13.0);
      float u = t - slot * 13.0;
      float present = step(cHash(vec2(slot, k * 3.0 + fam * 1.7 + float(i) * 0.61)), uDensity * 0.85);
      float car = cLine(abs(u - 3.0), 2.0, px) * cLine(abs(off - sgn * laneOff), 0.75, px) * present;
      col += (i == 0 ? HEAD : TAIL) * (car * near);
    }
  }
  // Far away the cars melt into a slightly brighter street.
  col += uStreet * (c * (1.0 - near) * 0.22 * uDensity);
  return col;
}

void main() {
  vec2 rel = vWorld.xz - uCenter;
  vec2 q = vec2(GRID_C * rel.x - GRID_S * rel.y, GRID_S * rel.x + GRID_C * rel.y);
  float px = max(max(fwidth(q.x), fwidth(q.y)), 1e-3);
  float r = length(rel);

  // Blocks: low roofs, a few parks, scattered roof lights.
  vec2 blk = floor(q / GRID_P + 0.5);
  float park = step(cHash(blk + 0.37), 0.07);
  vec2 sub = floor(q / 12.0);
  float sh = cHash(sub + 0.11);
  vec3 col = mix(uBase * (0.7 + 0.6 * sh) + uRoof * (sh * 0.4), uPark * (0.8 + 0.4 * sh), park);
  float detail = 1.0 - smoothstep(2.0, 6.0, px);
  vec2 o = vec2(cHash(sub + 3.1), cHash(sub + 7.3)) - 0.5;
  float roofLight = cLine(length(q - (sub + 0.5 + o * 0.6) * 12.0), 0.6, px) * step(sh, 0.4) * (1.0 - park);
  vec3 emit = vec3(1.0, 0.76, 0.48) * (roofLight * 2.4 * detail + 0.03 * (1.0 - detail));

  // Streets in both directions, faded to their average once a block is a few pixels wide.
  float cov = 0.0;
  vec3 st = streetFamily(q.x, q.y, px, 0.0, cov) + streetFamily(q.y, q.x, px, 1.0, cov);
  float gf = smoothstep(GRID_P * 0.05, GRID_P * 0.22, px);
  st = mix(st, uStreet * 0.12 + uAvenue * 0.012, gf);
  cov = mix(cov, 0.3, gf);

  // The plaza at the tower's foot: no grid streets inside the ring road.
  float inPlaza = 1.0 - smoothstep(PLAZA_R - 2.0, PLAZA_R, r);
  st *= 1.0 - inPlaza;
  cov *= 1.0 - inPlaza;
  emit *= 1.0 - inPlaza;
  col = mix(col, uBase * 1.25 + uRoof * 0.2, inPlaza);
  emit += uAvenue * ((cLine(abs(r - 46.0), 0.5, px) + cLine(abs(r - 62.0), 0.4, px)) * 2.2);
  float rd = abs(r - PLAZA_R);
  float road = 1.0 - smoothstep(7.0 - px, 7.0 + px, rd);
  cov = max(cov, road);
  st += uStreet * (exp(-1.6 * rd * rd / 49.0) * 0.5 * road);
  float arc = atan(rel.y, rel.x) * PLAZA_R;
  for (int i = 0; i < 2; i++) {
    float sgn = i == 0 ? 1.0 : -1.0;
    float t = arc * sgn + uTravel * 20.0;
    float slot = floor(t / 13.0);
    float u = t - slot * 13.0;
    float present = step(cHash(vec2(slot, 91.0 + float(i))), uDensity * 0.85);
    float car = cLine(abs(u - 3.0), 2.0, px) * cLine(abs(r - PLAZA_R - sgn * 3.0), 0.75, px) * present;
    st += (i == 0 ? HEAD : TAIL) * car;
  }
  col = mix(col, uBase * 0.55, cov);
  col += (st + emit) * uLights;
  gl_FragColor = vec4(cityHaze(col, vWorld), 1.0);
}
`;

const FACADE_VERT = /* glsl */ `
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FACADE_FRAG = /* glsl */ `
${CITY_GLSL}
uniform vec2 uCenter;
uniform vec3 uFrame;
uniform vec3 uGlassC;
uniform vec3 uSkyRefl;
uniform vec3 uSpine;
uniform float uWindows;
uniform float uLights;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunK;
varying vec3 vWorld;
varying vec3 vNormalW;

#define COLS 64.0
#define FLOOR_H 4.2
#define TOWER_R ${TOWER.r.toFixed(3)}

void main() {
  vec2 rel = vWorld.xz - uCenter;
  float u = (atan(rel.y, rel.x) / 6.2831853 + 0.5) * COLS;
  float colW = 6.2831853 * TOWER_R / COLS;
  float depth = -vWorld.y;
  float px = max(length(fwidth(vWorld)), 1e-3);
  float ci = floor(u);
  float fu = u - ci;
  float fi = floor(depth / FLOOR_H);
  float fy = depth / FLOOR_H - fi;
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
  vec3 lightK = vec3(0.3) + uSunColor * (max(dot(n, uSunDir), 0.0) * uSunK);
  vec3 glass = uGlassC * lightK + uSkyRefl * (0.2 + 0.8 * fres);
  float dm = min(fu, 1.0 - fu) * colW;
  float df = min(fy, 1.0 - fy) * FLOOR_H;
  float frame = max(cLine(dm, 0.08, px), cLine(df, 0.35, px));
  float detail = 1.0 - smoothstep(0.5, 1.5, px);
  float lit = step(cHash(vec2(ci, fi) + 0.37), uWindows * 0.55);
  float tone = cHash(vec2(ci, fi) + 5.1);
  vec3 wc = tone < 0.6 ? vec3(1.0, 0.8, 0.56) : vec3(0.8, 0.88, 1.0);
  vec3 win = wc * ((0.8 + 0.9 * cHash(vec2(fi, ci) + 9.2)) * lit);
  vec3 emit = mix(vec3(0.92, 0.84, 0.74) * (1.25 * uWindows * 0.55), win, detail);
  vec3 c = mix(glass + emit * 0.9, uFrame * lightK, frame);
  float nb = fu < 0.5 ? ci : ci + 1.0;
  float spine = (1.0 - step(0.5, mod(nb, 8.0))) * cLine(dm, 0.12, px);
  float mech = cLine(abs(mod(depth + 60.0, 120.0) - 60.0), 0.9, px);
  float lobby = smoothstep(400.0, 416.0, depth);
  c += uSpine * (uLights * (spine * 3.0 + mech * 1.6)) + vec3(1.0, 0.82, 0.6) * (uLights * lobby * 1.2);
  gl_FragColor = vec4(cityHaze(c, vWorld), 1.0);
}
`;

/**
 * buildGround(shared, { quality }) → { mesh, uniforms, setLook(city) }.
 * shared = createCityUniforms() (haze, clocks, lights, density are read from it).
 */
export function buildGround(shared, { quality = 'high' } = {}) {
  const uniforms = pickUniforms(shared, [...HAZE_UNIFORMS, 'uCenter', 'uTravel', 'uLights', 'uDensity'], {
    uBase: { value: new THREE.Color(0x070c16) },
    uStreet: { value: new THREE.Color(0xffa04a) },
    uAvenue: { value: new THREE.Color(0x46d2ff) },
    uRoof: { value: new THREE.Color(0x1a2232) },
    uPark: { value: new THREE.Color(0x07140f) },
  });
  const material = new THREE.ShaderMaterial({
    name: 'city-ground',
    vertexShader: GROUND_VERT,
    fragmentShader: GROUND_FRAG,
    uniforms,
  });
  const radius = quality === 'low' ? 4200 : 6000;
  const geo = new THREE.CircleGeometry(radius, 96).rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'city-ground';
  mesh.position.set(ATRIUM.cx, GROUND_Y, ATRIUM.cz);
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  mesh.layers.set(NO_REFLECT_LAYER);
  return {
    mesh,
    uniforms,
    setLook(city) {
      uniforms.uBase.value.set(city.base);
      uniforms.uStreet.value.set(city.street);
      uniforms.uAvenue.value.set(city.avenue);
      uniforms.uRoof.value.set(city.roof);
      uniforms.uPark.value.set(city.park);
    },
  };
}

/** buildHostFacade(shared) → { mesh, uniforms, setLook(city) }: the atrium tower below the slab. */
export function buildHostFacade(shared) {
  const uniforms = pickUniforms(shared, [...HAZE_UNIFORMS, 'uCenter', 'uSkyRefl', 'uWindows', 'uLights', 'uSunDir', 'uSunColor', 'uSunK'], {
    uFrame: { value: new THREE.Color(0x1b2534) },
    uGlassC: { value: new THREE.Color(0x0a1424) },
    uSpine: { value: new THREE.Color(0x46d2ff) },
  });
  const material = new THREE.ShaderMaterial({
    name: 'city-host-facade',
    vertexShader: FACADE_VERT,
    fragmentShader: FACADE_FRAG,
    uniforms,
  });
  const top = -0.45;
  const height = top - GROUND_Y;
  const geo = new THREE.CylinderGeometry(TOWER.r, TOWER.r, height, 128, 1, true);
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'city-host-facade';
  mesh.position.set(ATRIUM.cx, (top + GROUND_Y) / 2, ATRIUM.cz);
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  mesh.layers.set(NO_REFLECT_LAYER);
  return {
    mesh,
    uniforms,
    setLook(city) {
      uniforms.uFrame.value.set(city.facade);
      uniforms.uGlassC.value.set(city.facadeGlass);
      uniforms.uSpine.value.set(city.spine);
    },
  };
}
