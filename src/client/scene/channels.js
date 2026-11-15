import * as THREE from 'three';
import { HUB, LOCK_THETA, OUT_THETA, ringPos } from './cell.js';
import { stationTheta } from './stations.js';
import { TAU } from './util.js';
import { NO_REFLECT_LAYER } from './reflection.js';

/*
 * Energy channels inlaid in the platform floor. All channels are one mesh drawn with a
 * single additive shader; each channel has a level (0..1) and a scroll offset that the
 * world updates from the session, so pulses run along the channels that are busy:
 *   fuel  : tank → engine          (token flow)
 *   feed  : engine → load lock     (wafers being dispatched)
 *   spoke : hub → each station     (station working)
 *   lock / unload : hub ↔ chambers (robot transfers)
 *   out   : unload lock → stocker  (finished wafers)
 *   ring  : around the cell        (any station working)
 */

export const CHANNEL_COUNT = 16;
const Y = 0.004;
const WIDTH = 0.06;

const BLUE = new THREE.Color(0x3f8cff);
const CYAN = new THREE.Color(0x46d2ff);
const GOLD = new THREE.Color(0xffc56a);

const VERT = /* glsl */ `
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${CHANNEL_COUNT}];
uniform float uOffset[${CHANNEL_COUNT}];
uniform vec3 uColor[${CHANNEL_COUNT}];
varying float vS;
varying float vX;
varying float vLevel;
varying float vOffset;
varying vec3 vColor;
#include <fog_pars_vertex>
void main() {
  int c = int(aChan + 0.5);
  vLevel = uLevel[c];
  vOffset = uOffset[c];
  vColor = uColor[c];
  vS = aS;
  vX = aX;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const FRAG = /* glsl */ `
varying float vS;
varying float vX;
varying float vLevel;
varying float vOffset;
varying vec3 vColor;
#include <fog_pars_fragment>
void main() {
  float ax = abs(vX);
  float core = 1.0 - smoothstep(0.15, 0.7, ax);
  // Dark glass groove under the light, so the channel reads on the white floor.
  float groove = (1.0 - smoothstep(0.85, 1.0, ax)) * 0.55;
  float k = fract((vS - vOffset) / 1.6);
  // A comet: sharp head, fading tail behind it.
  float pulse = pow(k, 7.0) * (1.0 - smoothstep(0.95, 1.0, k));
  float a = core * (0.25 + vLevel * (0.6 + pulse * 4.0));
  vec3 col = vColor * a;
  #ifdef USE_FOG
    float f = 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    col *= f;
    groove *= f;
  #endif
  // Premultiplied: dst · (1 − groove) + glow.
  gl_FragColor = vec4(col, groove);
}`;

function polylineStrip(points, chan, out) {
  let s = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 1e-6) continue;
    // Extend each segment by half a width so corners close without gaps.
    const ux = dx / len;
    const uz = dz / len;
    const ext = WIDTH / 2;
    const ax = a[0] - ux * (i === 0 ? 0 : ext);
    const az = a[1] - uz * (i === 0 ? 0 : ext);
    const bx = b[0] + ux * (i === points.length - 2 ? 0 : ext);
    const bz = b[1] + uz * (i === points.length - 2 ? 0 : ext);
    const nx = -uz * (WIDTH / 2);
    const nz = ux * (WIDTH / 2);
    const s0 = s - (i === 0 ? 0 : ext);
    const s1 = s + len + (i === points.length - 2 ? 0 : ext);
    const quad = [
      [ax - nx, az - nz, s0, -1],
      [ax + nx, az + nz, s0, 1],
      [bx + nx, bz + nz, s1, 1],
      [bx - nx, bz - nz, s1, -1],
    ];
    for (const idx of [0, 1, 2, 0, 2, 3]) {
      const v = quad[idx];
      out.pos.push(v[0], Y, v[1]);
      out.s.push(v[2]);
      out.x.push(v[3]);
      out.chan.push(chan);
    }
    s += len;
  }
}

const xz = (v) => [v.x, v.z];

/** buildChannels() → { root, levels, speeds, update(dt) }. */
export function buildChannels() {
  const ids = {};
  const colors = [];
  const paths = [];
  const add = (id, color, points) => {
    ids[id] = paths.length;
    colors.push(color);
    paths.push(points);
  };
  const hub = [HUB.x, HUB.z];
  const radial = (theta, r0, r1) => [xz(ringPos(theta, r0)), xz(ringPos(theta, r1))];

  add('fuel', CYAN, [[-7.45, -0.7], [-4.6, -0.7]]);
  add('feed', BLUE, [[-3.3, -0.2], [-2.62, -0.2], [-2.62, 1.92], [0.38, 1.92]]);
  for (let i = 0; i < 10; i++) add(`spoke:${i}`, BLUE, radial(stationTheta(i), 0.95, 2.12));
  add('lock', CYAN, radial(LOCK_THETA, 0.95, 2.1));
  add('unload', GOLD, radial(OUT_THETA, 0.95, 2.1));
  add('out', GOLD, [[4.82, 1.92], [8.75, 1.92], [8.75, 1.2]]);
  const ring = [];
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * TAU;
    ring.push([hub[0] + Math.cos(a) * 4.27, hub[1] - Math.sin(a) * 4.27]);
  }
  add('ring', BLUE, ring);

  const buf = { pos: [], s: [], x: [], chan: [] };
  paths.forEach((p, i) => polylineStrip(p, i, buf));
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(buf.pos, 3));
  geo.setAttribute('aS', new THREE.Float32BufferAttribute(buf.s, 1));
  geo.setAttribute('aX', new THREE.Float32BufferAttribute(buf.x, 1));
  geo.setAttribute('aChan', new THREE.Float32BufferAttribute(buf.chan, 1));
  geo.computeBoundingSphere();

  const levels = new Float32Array(CHANNEL_COUNT);
  const offsets = new Float32Array(CHANNEL_COUNT);
  const speeds = new Float32Array(CHANNEL_COUNT);
  const target = new Float32Array(CHANNEL_COUNT);
  const colorValues = [];
  for (let i = 0; i < CHANNEL_COUNT; i++) colorValues.push((colors[i] || BLUE).clone());
  const material = new THREE.ShaderMaterial({
    name: 'floor-channels',
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uLevel: { value: levels }, uOffset: { value: offsets }, uColor: { value: colorValues } },
    ]),
    transparent: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
    blendSrcAlpha: THREE.ZeroFactor,
    blendDstAlpha: THREE.OneFactor,
    depthWrite: false,
    fog: true,
  });
  // UniformsUtils.merge clones values; point the uniforms back at the live arrays.
  material.uniforms.uLevel.value = levels;
  material.uniforms.uOffset.value = offsets;
  material.uniforms.uColor.value = colorValues;
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'floor-channels';
  mesh.renderOrder = -1;
  mesh.frustumCulled = false;
  mesh.layers.set(NO_REFLECT_LAYER);
  speeds.fill(0.8);

  return {
    root: mesh,
    ids,
    /** Set the target level (0..1) and pulse speed (m/s) of a channel by id. */
    set(id, level, speed) {
      const i = ids[id];
      if (i == null) return;
      target[i] = level;
      if (speed != null) speeds[i] = speed;
    },
    update(dt) {
      for (let i = 0; i < paths.length; i++) {
        levels[i] += (target[i] - levels[i]) * (1 - Math.exp(-4 * dt));
        offsets[i] = (offsets[i] + speeds[i] * dt * (0.25 + levels[i])) % 1600;
      }
    },
  };
}
