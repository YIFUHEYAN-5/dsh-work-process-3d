import * as THREE from 'three';
import { NO_REFLECT_LAYER } from './reflection.js';
import { AIR_SPAN, CITY_GLSL, GRID, HAZE_UNIFORMS, pickUniforms, rng } from './cityCommon.js';

/*
 * Flying traffic: streams of light along air lanes that follow the avenues of the street grid,
 * mostly 100–250 m above the ground (well below the atrium) and a few high lanes far out near the
 * skyline. Each car is one camera-facing streak positioned entirely on the GPU from its lane, a
 * phase and the shared air clock; the share of cars that are visible and their speed follow the
 * token rate.
 */

const TRAFFIC_VERT = /* glsl */ `
${CITY_GLSL}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${AIR_SPAN.toFixed(1)}

void main() {
  float visible = step(fract(aCar.z * 7.13), uDensity);
  float s = (fract(aCar.x + uAir * aLane.w / (2.0 * SPAN)) * 2.0 - 1.0) * SPAN;
  vec2 q = aLane.x < 0.5 ? vec2(aLane.y, s) : vec2(s, aLane.y);
  vec2 dq = (aLane.x < 0.5 ? vec2(0.0, 1.0) : vec2(1.0, 0.0)) * sign(aLane.w);
  vec2 p2 = uCenter + vec2(GRID_C * q.x + GRID_S * q.y, -GRID_S * q.x + GRID_C * q.y);
  vec2 d2 = vec2(GRID_C * dq.x + GRID_S * dq.y, -GRID_S * dq.x + GRID_C * dq.y);
  vec3 c = vec3(p2.x, aLane.z, p2.y);
  vec3 dir = vec3(d2.x, 0.0, d2.y);
  vec3 toCam = cameraPosition - c;
  float dist = length(toCam);
  vec3 side = cross(dir, toCam);
  side /= max(length(side), 1e-4);
  float grow = max(1.0, dist * 0.0022);
  vec3 p = c + dir * (position.x * aCar.y * grow) + side * (position.y * 1.2 * grow);
  vUv = position.xy + 0.5;
  // Fade toward the far end of the lane so the wrap-around is never seen.
  float ends = 1.0 - smoothstep(SPAN * 0.82, SPAN * 0.98, abs(s));
  vFade = cHazeT(c) * visible * ends;
  float k = aCar.w;
  vColor = k < 0.5 ? vec3(1.0, 0.93, 0.82) * 2.4
    : (k < 1.5 ? vec3(1.0, 0.1, 0.05) * 2.0
    : (k < 2.5 ? vec3(0.3, 0.9, 1.0) * 2.4 : vec3(1.0, 0.68, 0.25) * 2.2));
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  if (vFade < 0.002) gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
}
`;

const TRAFFIC_FRAG = /* glsl */ `
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;

/** buildTraffic(shared, { quality }) → { mesh }. Animated through shared.uAir / uDensity / uTraffic. */
export function buildTraffic(shared, { quality = 'high' } = {}) {
  const r = rng(91);
  const P = GRID.pitch;
  const thin = quality === 'low' ? 2 : 1;
  const lanes = [];
  // Low lanes along every avenue line within 2 km, one stream each way.
  for (let n = -20; n <= 20; n += 4) {
    const coord = (n + 0.5) * P;
    for (const axis of [0, 1]) {
      const y = -330 + r() * 120;
      const v = 28 + Math.floor(r() * 22);
      lanes.push({ axis, coord: coord - 6, y, speed: v, spacing: 34 * thin });
      lanes.push({ axis, coord: coord + 6, y: y + 5, speed: -(v + 3), spacing: 34 * thin });
    }
  }
  // High lanes far out, visible from the hall near the skyline.
  for (const n of [-16, -12, 12, 16]) {
    const coord = (n + 0.5) * P;
    for (const axis of [0, 1]) {
      const y = -70 + r() * 70;
      const v = 40 + Math.floor(r() * 20);
      lanes.push({ axis, coord, y, speed: r() < 0.5 ? v : -v, spacing: 60 * thin });
    }
  }
  const laneData = [];
  const carData = [];
  for (const lane of lanes) {
    const count = Math.floor((2 * AIR_SPAN) / lane.spacing);
    for (let i = 0; i < count; i++) {
      laneData.push(lane.axis, lane.coord, lane.y, lane.speed);
      const pick = r();
      const kind = lane.speed > 0 ? (pick < 0.8 ? 0 : pick < 0.92 ? 2 : 3) : pick < 0.8 ? 1 : pick < 0.92 ? 3 : 2;
      carData.push((i + r() * 0.6) / count, 7 + r() * 8, r(), kind);
    }
  }
  const count = laneData.length / 4;
  const quad = new THREE.PlaneGeometry(1, 1);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = quad.index;
  geo.setAttribute('position', quad.getAttribute('position'));
  geo.setAttribute('aLane', new THREE.InstancedBufferAttribute(new Float32Array(laneData), 4));
  geo.setAttribute('aCar', new THREE.InstancedBufferAttribute(new Float32Array(carData), 4));
  geo.instanceCount = count;
  const material = new THREE.ShaderMaterial({
    name: 'city-traffic',
    vertexShader: TRAFFIC_VERT,
    fragmentShader: TRAFFIC_FRAG,
    uniforms: pickUniforms(shared, [...HAZE_UNIFORMS, 'uAir', 'uDensity', 'uCenter', 'uTraffic']),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.name = 'city-traffic';
  mesh.frustumCulled = false;
  mesh.layers.set(NO_REFLECT_LAYER);
  return { mesh, count };
}
