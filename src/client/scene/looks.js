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
  // Blue-hour dusk: the sun sets in front of the balcony, the sky turns from navy to steel blue,
  // amber afterglow only near the sun, and the city far below lights up.
  dusk: {
    id: 'dusk',
    clear: 0x0d1a33,
    sun: { dir: sunDirection(112, 8), color: 0xffb070, intensity: 3.0, disc: 0xffd29a, discPower: 22 },
    hemi: { sky: 0xa9c0ff, ground: 0x8f96a6, intensity: 1.2 },
    fill: { dir: unit([0.15, 0.8, -0.58]), color: 0xd6e2ff, intensity: 0.75 },
    envIntensity: 1.05,
    exposure: 1.0,
    post: { bloomStrength: 0.24, threshold: 2.2, knee: 0.9, vignette: 0.24 },
    sky: {
      zenith: '#050b1f',
      high: '#0c1d45',
      mid: '#163a6f',
      low: '#2a5f93',
      horizon: '#5d93b8',
      sunGlow: '#ffb35a',
      belt: '#5fb7c8',
      below: '#060c1a',
      ground: '#132238',
      // Must equal city.haze: the painted band below the horizon meets the 3D city floor there.
      groundHaze: '#2c4a6e',
      stars: 0.7,
      clouds: 0.5,
      cloudLit: '#ffb56b',
      cloudDark: '#1b2a48',
      far: { body: '#0b1630', haze: '#3c6290', windows: 0.55, neon: 0.6 },
      lights: 1.0,
    },
    city: {
      body: 0x0b1222,
      glass: 0x070d1a,
      skyRefl: 0x2f5a8c,
      haze: 0x2c4a6e,
      hazeHigh: 0x4f7aa5,
      hazeDensity: 0.00042,
      windows: 0.62,
      neon: 1.0,
      lights: 1.0,
      beacons: 1.0,
      traffic: 1.0,
      trafficScale: 1.0,
      sunK: 0.16,
      street: 0xffa04a,
      avenue: 0x46d2ff,
      base: 0x070c16,
      roof: 0x1a2232,
      park: 0x07140f,
      facade: 0x1b2534,
      facadeGlass: 0x0a1424,
      spine: 0x46d2ff,
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
      ground: '#8a97a9',
      groundHaze: '#b4c5d9',
      stars: 0,
      clouds: 0.8,
      cloudLit: '#ffffff',
      cloudDark: '#b8c6d8',
      far: { body: '#8796ab', haze: '#cfdaea', windows: 0.04, neon: 0.12 },
      lights: 0.1,
    },
    city: {
      body: 0x6b7686,
      glass: 0x2c3c52,
      skyRefl: 0x9cc0ea,
      haze: 0xb4c5d9,
      hazeHigh: 0xd6e3f1,
      hazeDensity: 0.00034,
      windows: 0.05,
      neon: 0.22,
      lights: 0.1,
      beacons: 0.45,
      traffic: 0.4,
      trafficScale: 0.7,
      sunK: 0.34,
      street: 0xffd2a0,
      avenue: 0x8fdcff,
      base: 0x59606b,
      roof: 0x7a828e,
      park: 0x4d6a4a,
      facade: 0xc9d0d9,
      facadeGlass: 0x3b5068,
      spine: 0x8fdcff,
    },
    interior: { ceiling: 0xf4f6fa, ring: 0xffffff, floor: 0xd8dce2, column: 0xf6f8fb, media: 0x0b1426, ringPower: 3.0, screen: 0x2a5cff },
    glow: 0.8,
  },
};

export function lookOf(id) {
  return LOOKS[id] || LOOKS[DEFAULT_LOOK];
}
