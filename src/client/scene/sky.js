import * as THREE from 'three';
import { canvasTexture, arcBand, pixelAngle } from './util.js';
import { ATRIUM, MEDIA, mediaScreens } from './layout.js';
import { SKY_BODIES } from './looks.js';

/*
 * The open sky over the roof deck. An equirectangular canvas is painted per look (gradient, sun
 * glow, Belt of Venus, clouds, a far skyline and the lit city ground below the horizon) and shown
 * on a dome. The dome shader adds everything that has to stay sharp at any zoom: the HDR sun,
 * stars, the Milky Way, a ringed planet, the moon and now and then a shooting star. The dome plus
 * the hall floor and the media wall are captured into a PMREM environment, so white and chrome
 * surfaces reflect the open sky.
 *
 * Mapping (same as three.js equirectUv): u = atan2(d.z, d.x) / 2π + 0.5, v = asin(d.y) / π + 0.5;
 * the canvas is uploaded with flipY, so canvas y = (1 − v) · H.
 */

const DEG = Math.PI / 180;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rgba(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
}

function mixHex(a, b, t) {
  const pa = parseInt(a.replace('#', ''), 16);
  const pb = parseInt(b.replace('#', ''), 16);
  const ch = (s) => Math.round(((pa >> s) & 255) * (1 - t) + ((pb >> s) & 255) * t);
  return `#${((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, '0')}`;
}

/** Horizontal position of an azimuth (radians, atan2(z, x)) on a canvas of width W. */
function xOfAzimuth(az, W) {
  return (az / (2 * Math.PI) + 0.5) * W;
}

function glow(g, x, y, rx, ry, color, alpha) {
  g.save();
  g.translate(x, y);
  g.scale(rx / ry, 1);
  const grad = g.createRadialGradient(0, 0, 0, 0, 0, ry);
  grad.addColorStop(0, rgba(color, alpha));
  grad.addColorStop(0.45, rgba(color, alpha * 0.42));
  grad.addColorStop(1, rgba(color, 0));
  g.fillStyle = grad;
  g.beginPath();
  g.arc(0, 0, ry, 0, Math.PI * 2);
  g.fill();
  g.restore();
}

/** Paint the equirectangular sky for a look into a 2:1 canvas context. */
export function paintSky(g, W, H, look) {
  const s = look.sky;
  const ppd = W / 360; // canvas pixels per degree (same horizontally and vertically)
  const yOf = (e) => (0.5 - e / 180) * H;
  const wrap = (x, fn) => {
    fn(x - W);
    fn(x);
    fn(x + W);
  };
  const r = rng({ day: 7, night: 5 }[look.id] || 3);
  const sunK = typeof s.sunK === 'number' ? s.sunK : 1;

  // Base gradient by elevation.
  const grad = g.createLinearGradient(0, 0, 0, H);
  // Below the horizon the band down to about −4.5° is what lies beyond the modelled city floor
  // (which ends about 4° below the horizon seen from the roof), so it is painted in the city's
  // haze colour.
  const stops = [
    [90, s.zenith], [48, s.high], [22, s.mid], [9, s.low], [2.5, s.horizon], [0, s.horizon],
    [-0.6, s.groundHaze], [-4.5, s.groundHaze], [-9, s.ground], [-90, s.below],
  ];
  for (const [e, c] of stops) grad.addColorStop(Math.min(1, Math.max(0, yOf(e) / H)), c);
  g.globalCompositeOperation = 'source-over';
  g.fillStyle = grad;
  g.fillRect(0, 0, W, H);

  // Sun glow: a wide band along the horizon plus a round halo. At night the key light is the
  // moon, whose halo the dome shader draws, so the canvas glow is off.
  const sd = look.sun.dir;
  const sx = xOfAzimuth(Math.atan2(sd[2], sd[0]), W);
  const sy = yOf(Math.asin(sd[1]) / DEG);
  if (sunK > 0) {
    wrap(sx, (x) => {
      glow(g, x, yOf(3), 100 * ppd, 16 * ppd, s.sunGlow, 0.55 * sunK);
      glow(g, x, sy, 60 * ppd, 60 * ppd, s.sunGlow, 0.42 * sunK);
      glow(g, x, sy, 14 * ppd, 14 * ppd, '#fff4e4', 0.5 * sunK);
    });
    // Belt of Venus on the side away from the sun.
    wrap(sx + W / 2, (x) => glow(g, x, yOf(8), 130 * ppd, 7 * ppd, s.belt, 0.2 * sunK));
  }

  // Thin cloud streaks, lit on the side of the key light.
  if (s.clouds > 0) {
    g.filter = 'blur(2px)';
    for (let i = 0; i < 54; i++) {
      const e = 3 + 24 * Math.pow(r(), 1.6);
      const x = r() * W;
      const w = (8 + 42 * r()) * ppd;
      const h = (0.35 + 1.4 * r()) * ppd;
      let dx = Math.abs(x - sx) % W;
      dx = Math.min(dx, W - dx) / W; // 0 at the sun, 0.5 opposite
      const lit = Math.max(0, 1 - dx / 0.28);
      const color = mixHex(s.cloudDark, s.cloudLit, lit);
      const a = s.clouds * (0.18 + 0.32 * r()) * (0.6 + 0.4 * lit);
      wrap(x, (cx) => glow(g, cx, yOf(e), w, h, color, a));
    }
    g.filter = 'none';
  }

  // Far skyline beyond the modelled city: low, hazy silhouettes on the horizon.
  const far = s.far;
  const skyline = mixHex(far.body, far.haze, 0.55);
  let x = 0;
  while (x < W) {
    const w = 2 + Math.floor(r() * 12);
    const tall = r() < 0.07 ? 1.5 + r() * 1.1 : 0.15 + Math.pow(r(), 1.8) * 1.2;
    const top = yOf(tall);
    const base = yOf(-2.5);
    g.fillStyle = skyline;
    g.fillRect(x, top, w, base - top);
    if (tall > 2.1 && r() < 0.6) g.fillRect(x + w / 2 - 0.5, top - 3 - r() * 5, 1, 4 + r() * 5);
    if (far.windows > 0) {
      const lights = Math.floor((base - top) * w * 0.05 * far.windows);
      for (let k = 0; k < lights; k++) {
        const pick = r();
        const c = pick < 0.62 ? '#ffc078' : pick < 0.85 ? '#cfe3ff' : '#5fe1ff';
        g.fillStyle = rgba(c, (0.25 + 0.4 * r()) * Math.min(1, far.windows * 1.4));
        g.fillRect(x + Math.floor(r() * w), top + Math.floor(r() * (base - top)), 1, 1);
      }
    }
    if (far.neon > 0 && r() < 0.04) {
      g.fillStyle = rgba(r() < 0.7 ? '#46e6ff' : '#ffb347', 0.45 * far.neon);
      g.fillRect(x, top - 1, w, 1);
    }
    x += w + (r() < 0.3 ? Math.floor(r() * 8) : 0);
  }
  // Haze over the skyline: denser toward its foot.
  const haze = g.createLinearGradient(0, yOf(1.8), 0, yOf(-3.2));
  haze.addColorStop(0, rgba(far.haze, 0));
  haze.addColorStop(0.45, rgba(far.haze, 0.38));
  haze.addColorStop(1, rgba(far.haze, 0.62));
  g.fillStyle = haze;
  g.fillRect(0, yOf(1.8), W, yOf(-3.2) - yOf(1.8));

  // City lights beyond the modelled floor, faint in the haze, thinning toward the horizon.
  if (s.lights > 0) {
    const count = Math.round(9000 * s.lights);
    for (let i = 0; i < count; i++) {
      const t = Math.pow(r(), 1.3);
      const e = -0.3 - 3.9 * t;
      const pick = r();
      const c = pick < 0.6 ? '#ffb46a' : pick < 0.82 ? '#ffe2b0' : pick < 0.93 ? '#ffffff' : '#55dcff';
      g.fillStyle = rgba(c, (0.12 + 0.25 * r()) * Math.min(1, s.lights * 1.2) * (0.4 + 0.6 * t));
      g.fillRect(r() * W, yOf(e), 1, 1);
    }
  }
  // Blend into the haze colour where the modelled city floor takes over.
  const groundHaze = g.createLinearGradient(0, yOf(0.6), 0, yOf(-4.4));
  groundHaze.addColorStop(0, rgba(s.groundHaze, 0.1));
  groundHaze.addColorStop(1, rgba(s.groundHaze, 0.9));
  g.fillStyle = groundHaze;
  g.fillRect(0, yOf(0.6), W, yOf(-4.4) - yOf(0.6));
}

const DOME_VERT = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`;

/** Number of shooting-star slots in the dome shader. */
export const METEOR_SLOTS = 2;

const DOME_FRAG = /* glsl */ `
#include <common>
#ifndef STAR_TAPS
#define STAR_TAPS 4
#endif
#ifndef MILKY_OCTAVES
#define MILKY_OCTAVES 4
#endif
#define METEOR_SLOTS ${METEOR_SLOTS}
uniform sampler2D tSky;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunPower;
uniform float uSunHalo;
uniform float uIntensity;
uniform float uPixel;
uniform float uTime;
uniform float uStars;
uniform float uTwinkle;
uniform float uMilky;
uniform float uAir;
uniform vec3 uGalC;
uniform vec3 uGalB;
uniform vec3 uGalN;
uniform vec3 uPlanetP;
uniform vec3 uPlanetA;
uniform vec3 uPlanetL;
uniform vec4 uPlanet; // x sin(radius), y light, z mix, w cos(outer extent)
uniform vec3 uMoonP;
uniform vec3 uMoonL;
uniform vec4 uMoon; // x sin(radius), y light, z mix
uniform vec3 uMetS[METEOR_SLOTS];
uniform vec3 uMetQ[METEOR_SLOTS];
uniform vec4 uMetP[METEOR_SLOTS]; // x head angle, y tail length, z brightness, w alpha
varying vec3 vWorld;

const float STAR_N = 320.0;

float skyLum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float skyHash2(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float skyHash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }

float skyNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = skyHash3(i);
  float n100 = skyHash3(i + vec3(1.0, 0.0, 0.0));
  float n010 = skyHash3(i + vec3(0.0, 1.0, 0.0));
  float n110 = skyHash3(i + vec3(1.0, 1.0, 0.0));
  float n001 = skyHash3(i + vec3(0.0, 0.0, 1.0));
  float n101 = skyHash3(i + vec3(1.0, 0.0, 1.0));
  float n011 = skyHash3(i + vec3(0.0, 1.0, 1.0));
  float n111 = skyHash3(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float skyFbm(vec3 p) {
  float s = 0.0;
  float w = 0.5;
  for (int i = 0; i < MILKY_OCTAVES; i++) {
    s += w * skyNoise(p);
    p = p * 2.07 + vec3(17.1, 9.3, 4.7);
    w *= 0.5;
  }
  return s / (1.0 - 2.0 * w);
}

// Stars on an equal-angle cube map: every cell holds at most one star, placed away from the
// cell edges; the 2x2 cells around the nearest corner are tested so no star is cut off.
vec3 starField(vec3 d, float density, float px) {
  vec3 a = abs(d);
  float face;
  vec2 uv;
  if (a.x >= a.y && a.x >= a.z) {
    face = d.x > 0.0 ? 0.0 : 1.0;
    uv = d.yz / a.x;
  } else if (a.y >= a.z) {
    face = d.y > 0.0 ? 2.0 : 3.0;
    uv = d.xz / a.y;
  } else {
    face = d.z > 0.0 ? 4.0 : 5.0;
    uv = d.xy / a.z;
  }
  vec2 g = (atan(uv) * (4.0 / PI) * 0.5 + 0.5) * STAR_N;
  vec2 base = floor(g);
#if STAR_TAPS == 4
  vec2 o = step(0.5, g - base) - 1.0;
#endif
  vec3 sum = vec3(0.0);
  for (int k = 0; k < STAR_TAPS; k++) {
#if STAR_TAPS == 4
    vec2 c = base + o + vec2(float(k - (k / 2) * 2), float(k / 2));
#else
    vec2 c = base;
#endif
    if (c.x < 0.0 || c.y < 0.0 || c.x >= STAR_N || c.y >= STAR_N) continue;
    vec2 id = c + vec2(face * 401.0, 0.0);
    float h = skyHash2(id);
    if (h >= density) continue;
    vec2 j = vec2(skyHash2(id + 17.31), skyHash2(id + 59.17)) * 0.5 + 0.25;
    vec2 t = tan((((c + j) / STAR_N) * 2.0 - 1.0) * (PI * 0.25));
    vec3 s;
    if (face < 0.5) s = vec3(1.0, t.x, t.y);
    else if (face < 1.5) s = vec3(-1.0, t.x, t.y);
    else if (face < 2.5) s = vec3(t.x, 1.0, t.y);
    else if (face < 3.5) s = vec3(t.x, -1.0, t.y);
    else if (face < 4.5) s = vec3(t.x, t.y, 1.0);
    else s = vec3(t.x, t.y, -1.0);
    s = normalize(s);
    // Most stars are faint; a few per cent are bright enough to bloom.
    float m = h / density;
    float b = 0.012 + 2.6 * pow(m, 18.0);
    float hc = skyHash2(id + 101.7);
    b *= 1.0 + uTwinkle * (0.18 + 0.3 * (1.0 - d.y)) * sin(uTime * (1.3 + 3.7 * hc) + hc * 57.0);
    float sigma = 0.6 + 0.45 * sqrt(b);
    float r = length(d - s) / (px * sigma);
    vec3 tint = hc < 0.5
      ? mix(vec3(1.0, 0.74, 0.52), vec3(1.0), hc * 2.0)
      : mix(vec3(1.0), vec3(0.68, 0.79, 1.0), hc * 2.0 - 1.0);
    sum += tint * (b * exp(-0.5 * r * r));
  }
  return sum;
}

// Milky Way: a band along the galactic equator, wider and warmer toward the core, broken up
// into star clouds and crossed by dark dust lanes.
vec3 milkyWay(vec3 d, out float band) {
  float gb = dot(d, uGalN);
  float gl = atan(dot(d, uGalB), dot(d, uGalC));
  float core = exp(-gl * gl / 0.55);
  float width = 0.075 + 0.11 * core;
  band = exp(-(gb * gb) / (width * width));
  if (band < 0.01) return vec3(0.0);
  float clouds = skyFbm(d * 4.6);
  float dust = skyFbm(d * 10.5 + vec3(3.1, 7.7, 1.3));
  float laneY = (gb - 0.014 * sin(gl * 4.0)) / (0.018 + 0.02 * core);
  float lane = exp(-laneY * laneY) * (0.35 + 0.65 * core);
  float dark = (1.0 - 0.85 * lane * smoothstep(0.3, 0.62, dust)) * (1.0 - 0.4 * smoothstep(0.55, 0.8, dust));
  float glow = band * (0.22 + 0.78 * exp(-gl * gl / 1.6)) * (0.3 + 0.7 * smoothstep(0.28, 0.82, clouds)) * dark;
  vec3 tint = mix(vec3(0.62, 0.72, 1.0), vec3(1.0, 0.85, 0.66), core * band);
  return tint * glow * (0.05 + 0.08 * core);
}

// Ring opacity by radius in planet radii.
float ringDensity(float q, float fw) {
  float a = smoothstep(1.34 - fw, 1.42 + fw, q) * (1.0 - smoothstep(2.25 - fw, 2.36 + fw, q));
  float fine = 1.0 - smoothstep(0.015, 0.05, fw);
  a *= 0.62 + 0.22 * sin(q * 10.0 + 0.6) + 0.16 * fine * sin(q * 37.0);
  a *= 1.0 - 0.88 * (1.0 - smoothstep(0.012, 0.04 + fw, abs(q - 1.94)));
  a *= 1.0 - 0.55 * (1.0 - smoothstep(0.004, 0.012 + fw, abs(q - 2.17)));
  return clamp(a, 0.0, 1.0) * 0.82;
}

// A ringed ice giant, ray traced as a sphere at distance 1 with the ring plane through it.
void planetLayer(vec3 d, float tR, float q, float fw, float px, inout vec3 space, inout float occl) {
  float r = uPlanet.x;
  float b = dot(d, uPlanetP);
  float disc = b * b - (1.0 - r * r);
  float sinT = length(cross(d, uPlanetP));
  float cover = 1.0 - smoothstep(-px, px, sinT - r);
  float tP = b - sqrt(max(disc, 0.0));
  vec3 H = d * tP;
  vec3 n = normalize(H - uPlanetP);
  float mixv = uPlanet.z;

  // A distant ice giant: muted, desaturated bands rather than a saturated toy marble, one long
  // storm oval so the disc has a readable feature, and a visible night side instead of a hard
  // half-lit ball.
  float lat = dot(n, uPlanetA);
  float turb = skyNoise(n * 5.0 + 2.0) * 0.6 + skyNoise(n * 13.0) * 0.25;
  float w = lat * 7.5 + turb * 0.9;
  float b1 = 0.5 + 0.5 * sin(w * 6.2832);
  float b2 = 0.5 + 0.5 * sin(w * 15.0 + turb * 3.0);
  vec3 alb = mix(vec3(0.29, 0.31, 0.38), vec3(0.62, 0.62, 0.6), b1);
  alb = mix(alb, vec3(0.44, 0.4, 0.46), 0.35 * b2);
  alb *= 0.8 + 0.2 * (1.0 - lat * lat);
  vec3 stormC = normalize(uPlanetA + 0.42 * cross(uPlanetA, vec3(0.0, 1.0, 0.0)) + vec3(0.16, 0.0, 0.1));
  alb = mix(alb, vec3(0.58, 0.46, 0.4), 0.55 * smoothstep(0.55, 0.95, dot(n, stormC)));
  float ndl = dot(n, uPlanetL);
  float lit = smoothstep(-0.06, 0.32, ndl) * (0.4 + 0.6 * max(ndl, 0.0));
  // The rings cast a shadow band on the disc.
  float dL = dot(uPlanetL, uPlanetA);
  if (abs(dL) > 1e-3) {
    float sh = dot(uPlanetP - H, uPlanetA) / dL;
    if (sh > 0.0) lit *= 1.0 - 0.75 * ringDensity(length(H + uPlanetL * sh - uPlanetP) / r, 0.02);
  }
  float limb = 0.55 + 0.45 * pow(max(dot(n, -d), 0.0), 0.5);
  float night = 0.045 + 0.03 * max(dot(n, -d), 0.0);
  vec3 pc = alb * (lit * limb * uPlanet.y * 1.5 + night);
  pc = mix(pc, pc * vec3(0.72, 0.82, 1.15), smoothstep(-0.35, 0.2, ndl) * (1.0 - smoothstep(0.2, 0.65, ndl)));

  // Rings: warm-grey ice and dust in radial bands, lit from either face and glowing when the
  // light comes from behind them.
  float ringA = 0.0;
  vec3 ringC = vec3(0.0);
  if (tR > 0.0) {
    ringA = ringDensity(q, fw);
    if (ringA > 0.001) {
      vec3 v = d * tR - uPlanetP;
      float bl = dot(v, uPlanetL);
      float shadow = 1.0;
      if (bl < 0.0) shadow = smoothstep(r * r * 0.92, r * r * 1.08, dot(v, v) - bl * bl);
      float rlit = 0.12 + 0.88 * abs(dL);
      float fwd = pow(max(dot(d, uPlanetL), 0.0), 6.0);
      float band = 0.72 + 0.28 * sin(q * 6.1 + 1.3);
      vec3 ringAlb = mix(vec3(0.52, 0.47, 0.42), vec3(0.78, 0.74, 0.68), band);
      ringC = ringAlb * ((rlit * (0.6 + 0.4 * band) + 1.1 * fwd) * shadow * uPlanet.y + 0.004);
      ringC += vec3(0.5, 0.55, 0.62) * fwd * 0.25 * shadow * uPlanet.y;
    }
  }
  bool front = disc < 0.0 || tR < tP;
  if (!front) space = mix(space, ringC, ringA * mixv);
  space = mix(space, pc, cover * mixv);
  if (front) space = mix(space, ringC, ringA * mixv);

  // Thin atmosphere at the limb, brightest on the lit side and when backlit.
  float edge = (sinT - r) / (r * 0.045);
  float rim = exp(-edge * edge) * (smoothstep(-0.25, 0.45, dot(n, uPlanetL)) + 1.2 * pow(max(dot(d, uPlanetL), 0.0), 4.0));
  space += vec3(0.42, 0.68, 1.0) * rim * uPlanet.y * 0.8 * mixv;
  occl = max(occl, max(cover, ringA) * mixv);
}

void moonLayer(vec3 d, float px, inout vec3 space, inout float occl) {
  float rm = uMoon.x;
  float b = dot(d, uMoonP);
  float sinT = length(cross(d, uMoonP));
  if (uMoon.z <= 0.0 || b <= 0.0 || sinT > rm + px * 2.0) return;
  float cover = 1.0 - smoothstep(-px * 0.8, px * 0.8, sinT - rm);
  float disc = b * b - (1.0 - rm * rm);
  vec3 n = normalize(d * (b - sqrt(max(disc, 0.0))) - uMoonP);
  float maria = skyNoise(n * 3.2 + 7.0) * 0.6 + skyNoise(n * 7.5) * 0.28 + skyNoise(n * 19.0) * 0.12;
  vec3 alb = mix(vec3(0.52, 0.54, 0.58), vec3(0.9, 0.9, 0.92), smoothstep(0.38, 0.66, maria));
  float ndl = dot(n, uMoonL);
  float lit = smoothstep(-0.03, 0.12, ndl) * (0.35 + 0.65 * max(ndl, 0.0));
  vec3 mc = alb * (lit * uMoon.y * 1.8 + 0.01);
  space = mix(space, mc, cover * uMoon.z);
  occl = max(occl, cover * uMoon.z);
}

// Shooting stars: a bright head running along a great circle with a fading tail.
vec3 meteors(vec3 d, float px) {
  vec3 sum = vec3(0.0);
  for (int i = 0; i < METEOR_SLOTS; i++) {
    vec4 p = uMetP[i];
    if (p.w <= 0.0) continue;
    vec3 S = uMetS[i];
    vec3 Q = uMetQ[i];
    float x = dot(d, cross(S, Q));
    float wpx = px * 1.1;
    if (abs(x) > wpx * 8.0) continue;
    float phi = atan(dot(d, Q), dot(d, S));
    float u = (p.x - phi) / p.y; // 0 at the head, 1 at the end of the tail
    float tail = (u >= 0.0 && u <= 1.0) ? pow(1.0 - u, 2.2) : 0.0;
    float across = exp(-0.5 * x * x / (wpx * wpx));
    float dh = phi - p.x;
    float head = exp(-(dh * dh + x * x) / (wpx * wpx * 5.0));
    sum += vec3(0.75, 0.88, 1.0) * (tail * across + head * 1.6) * p.z * p.w;
  }
  return sum;
}

void main() {
  vec3 d = normalize(vWorld - cameraPosition);
  vec2 uv = vec2(atan(d.z, d.x) * RECIPROCAL_PI2 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5);
  vec3 sky = texture2D(tSky, uv).rgb * uIntensity;
  float s = max(dot(d, uSunDir), 0.0);
  float disc = smoothstep(0.999848, 0.999925, s);
  sky += uSunColor * (disc * uSunPower + (pow(s, 420.0) * 1.1 + pow(s, 28.0) * 0.1) * uSunHalo);

  float px = max(uPixel, 1e-6);
  // Ring-plane coordinate outside any branch: its screen derivative antialiases the ring edges.
  float dA = dot(d, uPlanetA);
  float tR = dot(uPlanetP, uPlanetA) / (abs(dA) > 1e-5 ? dA : 1e-5);
  float ringQ = length(d * tR - uPlanetP) / max(uPlanet.x, 1e-4);
  float ringFw = fwidth(ringQ);

  // Stars and the Milky Way fade out where the painted sky is bright and toward the horizon.
  float dark = (1.0 - smoothstep(0.03, 0.22, skyLum(sky))) * smoothstep(-0.02, 0.07, d.y);
  vec3 space = vec3(0.0);
  float band = 0.0;
  if (uMilky > 0.001 && dark > 0.001) space += milkyWay(d, band) * (uMilky * dark);
  if (uStars > 0.001 && dark > 0.001) space += starField(d, 0.085 * (1.0 + 1.6 * band), px) * (uStars * dark);
  float occl = 0.0;
  if (uPlanet.z > 0.0 && dot(d, uPlanetP) > uPlanet.w) planetLayer(d, tR, ringQ, ringFw, px, space, occl);
  moonLayer(d, px, space, occl);
  vec3 col = sky * (1.0 - occl * (1.0 - uAir)) + space;
  col += meteors(d, px) * smoothstep(-0.01, 0.05, d.y);
  gl_FragColor = vec4(col, 1.0);
}
`;

/** Shader quality by tier: fewer star taps and noise octaves on weak GPUs. */
export function skyDefines(quality) {
  return {
    STAR_TAPS: quality === 'low' ? 1 : 4,
    MILKY_OCTAVES: quality === 'low' ? 2 : quality === 'medium' ? 3 : 4,
  };
}

function interiorScene(look, domeMaterial) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(look.clear);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(150, 32, 16), domeMaterial);
  dome.frustumCulled = false;
  scene.add(dome);
  const I = look.interior;
  const basic = (hex, k = 1) => {
    const m = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, fog: false, toneMapped: false });
    m.color.set(hex).multiplyScalar(k);
    return m;
  };
  const add = (geo, mat, p = [0, 0, 0]) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(p[0], p[1], p[2]);
    scene.add(m);
    return m;
  };
  const cx = ATRIUM.cx;
  const cz = ATRIUM.cz;
  // The roof is open: only the deck floor and the media wall stand between the hall and the sky.
  add(new THREE.CircleGeometry(ATRIUM.r + 0.5, 64).rotateX(-Math.PI / 2), basic(I.floor, 0.62), [cx, 0, cz]);
  add(arcBand(cx, cz, MEDIA.r, MEDIA.a0, MEDIA.a1, MEDIA.bandY0, MEDIA.bandY1, 32, true), basic(I.media, 1));
  add(arcBand(cx, cz, MEDIA.r, MEDIA.a0, MEDIA.a1, MEDIA.bandY1, MEDIA.top, 32, true), basic(I.column, 0.85));
  add(arcBand(cx, cz, MEDIA.r - 0.3, MEDIA.a0, MEDIA.a1, 0, 2.25, 32, true), basic(I.column, 0.75));
  const screenMat = basic(I.screen, 0.7);
  for (const s of mediaScreens()) add(arcBand(cx, cz, MEDIA.screenR - 0.02, s.a0, s.a1, s.y0, s.y1, 12, true), screenMat);
  return scene;
}

function disposeScene(scene, keep) {
  const seen = new Set();
  scene.traverse((o) => {
    if (o.geometry && !seen.has(o.geometry)) {
      seen.add(o.geometry);
      o.geometry.dispose();
    }
    if (o.material && o.material !== keep && !seen.has(o.material)) {
      seen.add(o.material);
      o.material.dispose();
    }
  });
}

const _up = new THREE.Vector3(0, 1, 0);

/** Viewing frame of a sky direction: P toward it, U sky-up across it, R to its right. */
function frameOf(dir) {
  const P = new THREE.Vector3().fromArray(dir).normalize();
  const U = _up.clone().addScaledVector(P, -_up.dot(P)).normalize();
  const R = new THREE.Vector3().crossVectors(P, U).normalize();
  return { P, U, R };
}

/** Light direction on a sky body: the sun, or a phase angle away from the viewer's side. */
function lightOf(cfg, F, sunDir, out) {
  if (cfg && typeof cfg.phase === 'number') {
    const side = cfg.side || 0;
    const T = F.U.clone().multiplyScalar(Math.cos(side)).addScaledVector(F.R, Math.sin(side));
    return out.copy(F.P).multiplyScalar(-Math.cos(cfg.phase)).addScaledVector(T, Math.sin(cfg.phase)).normalize();
  }
  return out.fromArray(sunDir).normalize();
}

function newMeteor() {
  return { active: false, S: new THREE.Vector3(1, 0, 0), Q: new THREE.Vector3(0, -1, 0), len: 0, tail: 0, life: 1, age: 0, bright: 0 };
}

/**
 * Sky dome and environment for a look. `renderer` may be null (tests): the dome and its canvas
 * are still built, but no PMREM environment is generated.
 */
export function createSky(renderer, look, { quality = 'high', seed = 91 } = {}) {
  const W = quality === 'low' ? 1024 : 2048;
  const H = W / 2;
  const sky = canvasTexture(W, H, null, { anisotropy: 1 });
  sky.tex.wrapS = THREE.RepeatWrapping;
  sky.tex.generateMipmaps = false;
  sky.tex.minFilter = THREE.LinearFilter;
  sky.tex.magFilter = THREE.LinearFilter;

  const uniforms = {
    tSky: { value: sky.tex },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color(1, 1, 1) },
    uSunPower: { value: 20 },
    uSunHalo: { value: 1 },
    uIntensity: { value: 1 },
    uPixel: { value: 0.0006 },
    uTime: { value: 0 },
    uStars: { value: 0 },
    uTwinkle: { value: 0 },
    uMilky: { value: 0 },
    uAir: { value: 1 },
    uGalC: { value: new THREE.Vector3(1, 0, 0) },
    uGalB: { value: new THREE.Vector3(0, 0, 1) },
    uGalN: { value: new THREE.Vector3(0, 1, 0) },
    uPlanetP: { value: new THREE.Vector3(0, 0, 1) },
    uPlanetA: { value: new THREE.Vector3(0, 1, 0) },
    uPlanetL: { value: new THREE.Vector3(0, 1, 0) },
    uPlanet: { value: new THREE.Vector4(0.1, 0, 0, 1) },
    uMoonP: { value: new THREE.Vector3(0, 1, 0) },
    uMoonL: { value: new THREE.Vector3(0, 1, 0) },
    uMoon: { value: new THREE.Vector4(0.02, 0, 0, 0) },
    uMetS: { value: Array.from({ length: METEOR_SLOTS }, () => new THREE.Vector3(1, 0, 0)) },
    uMetQ: { value: Array.from({ length: METEOR_SLOTS }, () => new THREE.Vector3(0, -1, 0)) },
    uMetP: { value: Array.from({ length: METEOR_SLOTS }, () => new THREE.Vector4(0, 1, 0, 0)) },
  };
  const material = new THREE.ShaderMaterial({
    name: 'sky-dome',
    uniforms,
    defines: skyDefines(quality),
    vertexShader: DOME_VERT,
    fragmentShader: DOME_FRAG,
    side: THREE.BackSide,
    depthTest: false,
    depthWrite: false,
    fog: false,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 24), material);
  dome.name = 'sky-dome';
  dome.renderOrder = -100;
  dome.frustumCulled = false;
  // Stars are sized in pixels of whatever is being drawn (screen, mirror or a smaller target).
  dome.onBeforeRender = (gl, scene, camera) => {
    uniforms.uPixel.value = pixelAngle(gl, camera);
    material.uniformsNeedUpdate = true;
  };

  // Fixed frames: the Milky Way's plane and the planet's spin axis.
  const galC = new THREE.Vector3().fromArray(SKY_BODIES.galaxy.core).normalize();
  const galT = new THREE.Vector3().fromArray(SKY_BODIES.galaxy.through).normalize();
  uniforms.uGalC.value.copy(galC);
  uniforms.uGalN.value.crossVectors(galC, galT).normalize();
  uniforms.uGalB.value.crossVectors(uniforms.uGalN.value, galC).normalize();
  const planet = SKY_BODIES.planet;
  const planetFrame = frameOf(planet.dir);
  const moonFrame = frameOf(SKY_BODIES.moon.dir);
  uniforms.uPlanetP.value.copy(planetFrame.P);
  uniforms.uPlanetA.value
    .copy(planetFrame.U)
    .multiplyScalar(Math.cos(planet.axisTurn))
    .addScaledVector(planetFrame.R, Math.sin(planet.axisTurn))
    .multiplyScalar(Math.cos(planet.axisTilt))
    .addScaledVector(planetFrame.P, -Math.sin(planet.axisTilt))
    .normalize();
  uniforms.uMoonP.value.copy(moonFrame.P);
  const planetR = Math.sin(planet.radius);

  let envRT = null;
  let current = look;
  let reduced = false;
  const rand = rng(seed);
  const meteors = Array.from({ length: METEOR_SLOTS }, newMeteor);

  function applyCelestial(next) {
    const c = next.celestial || {};
    uniforms.uStars.value = c.stars || 0;
    uniforms.uMilky.value = c.milky || 0;
    uniforms.uTwinkle.value = reduced ? 0 : c.twinkle || 0;
    const p = c.planet || null;
    lightOf(p, planetFrame, next.sun.dir, uniforms.uPlanetL.value);
    uniforms.uPlanet.value.set(planetR, p ? p.sun : 0, p ? p.mix : 0, Math.sqrt(Math.max(0, 1 - 6.2 * planetR * planetR)));
    uniforms.uAir.value = p && typeof p.air === 'number' ? p.air : 1;
    const m = c.moon || null;
    lightOf(m, moonFrame, next.sun.dir, uniforms.uMoonL.value);
    uniforms.uMoon.value.set(Math.sin(SKY_BODIES.moon.radius), m ? m.sun : 0, m ? m.mix : 0, 0);
  }

  function buildEnv() {
    if (!renderer) return;
    const scene = interiorScene(current, material);
    // Single stars and shooting stars only sparkle in a 256 px cube; leave them out.
    const stars = uniforms.uStars.value;
    uniforms.uStars.value = 0;
    const alphas = uniforms.uMetP.value.map((v) => v.w);
    for (const v of uniforms.uMetP.value) v.w = 0;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const next = pmrem.fromScene(scene, 0.035, 0.1, 400, {
      size: 256,
      position: new THREE.Vector3(ATRIUM.cx, 1.6, ATRIUM.cz),
    });
    pmrem.dispose();
    uniforms.uStars.value = stars;
    uniforms.uMetP.value.forEach((v, i) => (v.w = alphas[i]));
    disposeScene(scene, material);
    if (envRT) envRT.dispose();
    envRT = next;
  }

  function setLook(next) {
    current = next;
    sky.redraw((g, w, h) => paintSky(g, w, h, next));
    uniforms.uSunDir.value.fromArray(next.sun.dir).normalize();
    uniforms.uSunColor.value.set(next.sun.disc);
    uniforms.uSunPower.value = next.sun.discPower;
    uniforms.uSunHalo.value = typeof next.sun.halo === 'number' ? next.sun.halo : 1;
    applyCelestial(next);
    buildEnv();
  }

  function spawn(m) {
    // Start high in the sky and fall mostly downward along a great circle.
    const az = rand() * Math.PI * 2;
    const el = (28 + rand() * 42) * DEG;
    m.S.set(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az));
    const down = new THREE.Vector3(0, -1, 0).addScaledVector(m.S, m.S.y).normalize();
    const side = new THREE.Vector3().crossVectors(m.S, down).normalize();
    const tilt = (rand() - 0.5) * 1.6;
    m.Q.copy(down).multiplyScalar(Math.cos(tilt)).addScaledVector(side, Math.sin(tilt)).normalize();
    m.len = (10 + rand() * 18) * DEG;
    m.tail = (5 + rand() * 6) * DEG;
    m.life = 0.55 + rand() * 0.6;
    m.age = 0;
    m.bright = 1.6 + rand() * 2.2;
    m.active = true;
  }

  function writeMeteors() {
    meteors.forEach((m, i) => {
      const p = uniforms.uMetP.value[i];
      if (!m.active) {
        p.w = 0;
        return;
      }
      const t = Math.min(1, m.age / m.life);
      const head = m.len * t;
      uniforms.uMetS.value[i].copy(m.S);
      uniforms.uMetQ.value[i].copy(m.Q);
      p.set(head, Math.max(1e-4, Math.min(m.tail, head)), m.bright, Math.pow(Math.sin(Math.PI * t), 0.7));
    });
  }

  /** Advance twinkling and shooting stars. */
  function update(dt, t) {
    uniforms.uTime.value = t;
    const step = Math.min(Math.max(dt, 0), 0.25);
    for (const m of meteors) {
      if (!m.active) continue;
      m.age += step;
      if (m.age >= m.life) m.active = false;
    }
    const rate = reduced ? 0 : (current.celestial && current.celestial.meteors) || 0;
    if (rate > 0 && step > 0 && rand() < 1 - Math.exp(-rate * step)) {
      const free = meteors.find((m) => !m.active);
      if (free) spawn(free);
    }
    writeMeteors();
  }

  function setReducedMotion(on) {
    reduced = !!on;
    uniforms.uTwinkle.value = reduced ? 0 : (current.celestial && current.celestial.twinkle) || 0;
    if (reduced) for (const m of meteors) m.active = false;
    writeMeteors();
  }

  setLook(look);

  return {
    dome,
    texture: sky.tex,
    get envTexture() {
      return envRT ? envRT.texture : null;
    },
    setLook,
    update,
    setReducedMotion,
    /** Test view: active shooting stars. */
    meteors: () => meteors.filter((m) => m.active).map((m) => ({ age: m.age, life: m.life, start: m.S.clone(), dir: m.Q.clone() })),
    dispose() {
      dome.geometry.dispose();
      material.dispose();
      sky.tex.dispose();
      if (envRT) envRT.dispose();
      envRT = null;
    },
  };
}
