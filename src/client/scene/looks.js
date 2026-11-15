/*
 * Lighting looks for the atrium. Everything that differs between dusk and day lives here:
 * sun, sky fill and front fill lights, sky colours, the city outside, exposure and bloom.
 * Colours are sRGB hex numbers (THREE.Color input) or CSS strings (canvas painting).
 */

const DEG = Math.PI / 180;

/** Unit vector toward the sun. Azimuth is measured in the x–z plane from +x toward +z (the front). */
export function sunDirection(azimuthDeg, elevationDeg) {
  const a = azimuthDeg * DEG;
  const e = elevationDeg * DEG;
  return [Math.cos(e) * Math.cos(a), Math.sin(e), Math.cos(e) * Math.sin(a)];
}

function unit(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

export const LOOK_IDS = ['dusk', 'day'];
export const DEFAULT_LOOK = 'dusk';

/** Brightness slider range; the value multiplies the look's exposure. */
export const BRIGHTNESS = { min: 0.6, max: 1.6, step: 0.05, initial: 1.0 };

export const LOOKS = {
  // Cyberpunk dusk: the sun sets behind the left-front glass, the city below lights up in neon.
  dusk: {
    id: 'dusk',
    clear: 0x24183f,
    sun: { dir: sunDirection(143, 19), color: 0xffb27f, intensity: 3.1, disc: 0xffd0a0, discPower: 26 },
    hemi: { sky: 0xb7c2ff, ground: 0x9d9198, intensity: 1.05 },
    fill: { dir: unit([0.28, 0.7, 0.66]), color: 0xe2e9ff, intensity: 0.6 },
    envIntensity: 1.0,
    exposure: 1.0,
    post: { bloomStrength: 0.24, threshold: 2.2, knee: 0.9, vignette: 0.24 },
    sky: {
      zenith: '#0a1030',
      high: '#271e66',
      mid: '#5f2b84',
      low: '#c64b8c',
      horizon: '#ff8a76',
      sunGlow: '#ffc690',
      belt: '#ff9ac0',
      below: '#160d2b',
      ground: '#21123a',
      groundHaze: '#8a3f8a',
      stars: 0.85,
      clouds: 0.55,
      cloudLit: '#ffb39c',
      cloudDark: '#45306a',
      far: { body: '#1d1338', haze: '#9a4a8e', windows: 0.6, neon: 0.85 },
      lights: 1.0,
    },
    city: {
      body: 0x0e1226,
      skyRefl: 0x51428c,
      haze: 0x6b3479,
      hazeHigh: 0xa4558f,
      hazeDensity: 0.0042,
      windows: 0.62,
      neon: 1.0,
      traffic: 1.0,
      rim: 0xff9a78,
    },
    interior: { ceiling: 0xe8ebf2, ring: 0xffffff, floor: 0xcfd3db, column: 0xf2f4f8, media: 0x0b1426, ringPower: 5.0, screen: 0x2a5cff },
    glow: 1.0,
  },
  // Clear day: high sun from the right-front, pale sky, the city in daylight.
  day: {
    id: 'day',
    clear: 0x9fbde3,
    sun: { dir: sunDirection(53, 52), color: 0xfff0dc, intensity: 3.3, disc: 0xfff7ea, discPower: 30 },
    hemi: { sky: 0xd3e4ff, ground: 0xb7b3ac, intensity: 1.15 },
    fill: { dir: unit([-0.42, 0.68, 0.6]), color: 0xeef3ff, intensity: 0.45 },
    envIntensity: 1.0,
    exposure: 1.0,
    post: { bloomStrength: 0.16, threshold: 2.6, knee: 0.9, vignette: 0.18 },
    sky: {
      zenith: '#2d6cd0',
      high: '#4a8be2',
      mid: '#82b3ee',
      low: '#bcd7f4',
      horizon: '#e4edf6',
      sunGlow: '#fff4dc',
      belt: '#dce8f6',
      below: '#a3b1c2',
      ground: '#6f7d90',
      groundHaze: '#c3d0df',
      stars: 0,
      clouds: 0.8,
      cloudLit: '#ffffff',
      cloudDark: '#b8c6d8',
      far: { body: '#8796ab', haze: '#cfdaea', windows: 0.04, neon: 0.12 },
      lights: 0.12,
    },
    city: {
      body: 0x4c5b72,
      skyRefl: 0x9cc0ea,
      haze: 0xb4c5d9,
      hazeHigh: 0xd6e3f1,
      hazeDensity: 0.0036,
      windows: 0.1,
      neon: 0.28,
      traffic: 0.55,
      rim: 0xffffff,
    },
    interior: { ceiling: 0xf4f6fa, ring: 0xffffff, floor: 0xd8dce2, column: 0xf6f8fb, media: 0x0b1426, ringPower: 3.0, screen: 0x2a5cff },
    glow: 0.8,
  },
};

export function lookOf(id) {
  return LOOKS[id] || LOOKS[DEFAULT_LOOK];
}
