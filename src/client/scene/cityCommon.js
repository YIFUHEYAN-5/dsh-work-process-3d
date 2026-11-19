import * as THREE from 'three';
import { ATRIUM, TOWER } from './layout.js';

/*
 * Shared pieces of the city below the atrium: the street grid frame, seeded random numbers,
 * the uniforms every city material reads (haze, lights, traffic clocks, sun) and the GLSL
 * helpers that go with them. The atrium is the top floor of a tower whose foot stands on the
 * city ground TOWER.groundY metres below the hall floor.
 */

export const GROUND_Y = TOWER.groundY;

/** Street grid: 96 m blocks, turned 18° against the atrium axes, a block centred on the tower. */
export const GRID = { pitch: 96, rot: (18 * Math.PI) / 180 };
const GC = Math.cos(GRID.rot);
const GS = Math.sin(GRID.rot);

/** Ground and air traffic clocks wrap at these values so every pattern repeats seamlessly. */
export const TRAVEL_WRAP = 13 * 289;
export const AIR_SPAN = 2400;

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Grid frame (metres, block centres at multiples of the pitch) → world x/z. */
export function gridToWorld(qx, qz, out = [0, 0]) {
  out[0] = ATRIUM.cx + GC * qx + GS * qz;
  out[1] = ATRIUM.cz - GS * qx + GC * qz;
  return out;
}

/** World position at an atrium angle (same convention as layout.arcPoint) and radius. */
export function polar(a, r, out = [0, 0]) {
  out[0] = ATRIUM.cx + r * Math.cos(a);
  out[1] = ATRIUM.cz - r * Math.sin(a);
  return out;
}

/**
 * Uniform objects shared by reference between the city materials, so one setLook() or one
 * clock update reaches all of them.
 */
export function createCityUniforms() {
  return {
    uHaze: { value: new THREE.Color(0x2c4a6e) },
    uHazeHigh: { value: new THREE.Color(0x4f7aa5) },
    uHazeDensity: { value: 0.00042 },
    uCenter: { value: new THREE.Vector2(ATRIUM.cx, ATRIUM.cz) },
    uTime: { value: 0 },
    uTravel: { value: 0 },
    uAir: { value: 0 },
    uDensity: { value: 0.3 },
    uLights: { value: 1 },
    uNeon: { value: 1 },
    uWindows: { value: 0.6 },
    uBeacons: { value: 1 },
    uTraffic: { value: 1 },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color(0xffffff) },
    uSunK: { value: 0.2 },
    uSkyRefl: { value: new THREE.Color(0x2f5a8c) },
  };
}

/** Pick the shared uniforms a material needs (same objects, not copies). */
export function pickUniforms(shared, names, extra = {}) {
  const out = {};
  for (const n of names) out[n] = shared[n];
  return Object.assign(out, extra);
}

export const HAZE_UNIFORMS = ['uHaze', 'uHazeHigh', 'uHazeDensity'];

/**
 * GLSL shared by the city shaders: grid constants, a hash that stays precise for large cell
 * indices, an anti-aliased line with coverage, and height-dependent haze (thicker near the
 * ground far below, thinner at the atrium's height).
 */
export const CITY_GLSL = /* glsl */ `
#define GROUND_Y (${GROUND_Y.toFixed(1)})
#define GRID_P ${GRID.pitch.toFixed(1)}
#define GRID_C ${GC.toFixed(7)}
#define GRID_S ${GS.toFixed(7)}
uniform vec3 uHaze;
uniform vec3 uHazeHigh;
uniform float uHazeDensity;
float cHash(vec2 p) {
  p = mod(p, 289.0);
  p = fract(p * vec2(0.1031, 0.1030));
  p += dot(p, p.yx + 33.33);
  return fract((p.x + p.y) * p.x);
}
float cLine(float d, float w, float px) {
  px = max(px, 1e-4);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}
float cLow(float y) {
  return clamp(1.0 - (y - GROUND_Y) / 560.0, 0.0, 1.0);
}
float cHazeT(vec3 wp) {
  float dist = length(wp - cameraPosition);
  return exp(-dist * uHazeDensity * (0.55 + 1.5 * cLow(wp.y)));
}
vec3 cityHaze(vec3 col, vec3 wp) {
  return mix(mix(uHazeHigh, uHaze, cLow(wp.y)), col, cHazeT(wp));
}
`;
