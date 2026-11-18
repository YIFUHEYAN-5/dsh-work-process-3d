/*
 * Lighting looks for the roof deck. Everything that differs between dusk, day and night lives
 * here: the key light (the sun, or the moon at night), sky fill and front fill lights, sky
 * colours and the bodies in the open sky, the city below, the sky pool, exposure and bloom.
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

/**
 * Fixed bodies in the open sky (sunDirection convention). The ringed planet rises a little to
 * the left of the sunset seen from the balcony; the moon stands higher on the left and lights
 * the night look; the Milky Way runs from its bright core near the horizon up over the zenith.
 */
export const SKY_BODIES = {
  planet: { dir: sunDirection(84, 14), radius: 7.2 * DEG, axisTilt: 24 * DEG, axisTurn: -18 * DEG },
  moon: { dir: sunDirection(140, 40), radius: 1.35 * DEG },
  galaxy: { core: sunDirection(118, 12), through: sunDirection(20, 70) },
};

export const LOOK_IDS = ['dusk', 'day', 'night'];
export const DEFAULT_LOOK = 'dusk';

/** Brightness slider range; the value multiplies the look's exposure. */
export const BRIGHTNESS = { min: 0.6, max: 1.6, step: 0.05, initial: 1.0 };

export const LOOKS = {
  // Blue-hour dusk: the sun sets in front of the balcony, the sky turns from navy to steel blue,
  // amber afterglow only near the sun, the first stars and the planet's crescent come out, and
  // the city far below lights up.
  dusk: {
    id: 'dusk',
    clear: 0x0d1a33,
    sun: { dir: sunDirection(112, 8), color: 0xffb070, intensity: 3.0, disc: 0xffd29a, discPower: 22, halo: 1 },
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
      sunK: 1,
      belt: '#5fb7c8',
      below: '#060c1a',
      ground: '#132238',
      // Must equal city.haze: the painted band below the horizon meets the 3D city floor there.
      groundHaze: '#2c4a6e',
      clouds: 0.5,
      cloudLit: '#ffb56b',
      cloudDark: '#1b2a48',
      far: { body: '#0b1630', haze: '#3c6290', windows: 0.55, neon: 0.6 },
      lights: 1.0,
    },
    celestial: {
      stars: 0.7,
      milky: 0.3,
      twinkle: 0.6,
      meteors: 1 / 40,
      // Lit by the low sun behind it: a thin crescent and a dark disc against the blue sky.
      planet: { light: 'sun', sun: 0.55, air: 0.42, mix: 1 },
      moon: { sun: 0.75, mix: 0.9 },
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
    pool: { body: 0x168fb0, glow: 0.45, lights: 1.0, caustic: 0.7, clarity: 0.8, glint: 7, skyK: 1 },
    interior: { floor: 0xcfd3db, column: 0xf2f4f8, media: 0x0b1426, screen: 0x2a5cff },
    glow: 1.0,
  },
  // Clear day: high sun from the right-front, pale sky, the city in daylight, a faint planet.
  day: {
    id: 'day',
    clear: 0x9fbde3,
    sun: { dir: sunDirection(53, 52), color: 0xfff0dc, intensity: 3.3, disc: 0xfff7ea, discPower: 30, halo: 1 },
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
      sunK: 1,
      belt: '#dce8f6',
      below: '#a3b1c2',
      ground: '#8a97a9',
      groundHaze: '#b4c5d9',
      clouds: 0.8,
      cloudLit: '#ffffff',
      cloudDark: '#b8c6d8',
      far: { body: '#8796ab', haze: '#cfdaea', windows: 0.04, neon: 0.12 },
      lights: 0.1,
    },
    celestial: {
      stars: 0,
      milky: 0,
      twinkle: 0,
      meteors: 0,
      planet: { light: 'sun', sun: 1.0, air: 0.8, mix: 0.7 },
      moon: { sun: 1.0, mix: 0.55 },
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
    pool: { body: 0x2bb8cf, glow: 0.12, lights: 0.45, caustic: 1.1, clarity: 0.86, glint: 9, skyK: 1 },
    interior: { floor: 0xd8dce2, column: 0xf6f8fb, media: 0x0b1426, screen: 0x2a5cff },
    glow: 0.8,
  },
  // Night: the moon is the key light, the sky is deep navy with the Milky Way and a lit ringed
  // planet, shooting stars now and then; the city and the pool lights glow.
  night: {
    id: 'night',
    clear: 0x02050c,
    sun: { dir: SKY_BODIES.moon.dir, color: 0xb4c8ff, intensity: 0.95, disc: 0xdfe8ff, discPower: 0, halo: 0.2 },
    hemi: { sky: 0x3d5288, ground: 0x1d2433, intensity: 0.5 },
    fill: { dir: unit([0.15, 0.8, -0.58]), color: 0x8ea6ff, intensity: 0.32 },
    envIntensity: 0.62,
    exposure: 1.05,
    post: { bloomStrength: 0.34, threshold: 1.8, knee: 0.9, vignette: 0.3 },
    sky: {
      zenith: '#010309',
      high: '#030a1a',
      mid: '#071431',
      low: '#0c2042',
      horizon: '#1a3358',
      sunGlow: '#1a2a4a',
      sunK: 0,
      belt: '#0d1d38',
      below: '#03060d',
      ground: '#0a1424',
      groundHaze: '#16273f',
      clouds: 0.22,
      cloudLit: '#24365a',
      cloudDark: '#070e1c',
      far: { body: '#050b18', haze: '#1a2c4c', windows: 0.9, neon: 1.0 },
      lights: 1.3,
    },
    celestial: {
      stars: 1,
      milky: 1,
      twinkle: 1,
      meteors: 1 / 7,
      // Lit from the side, about two thirds of the disc shows its bands.
      planet: { phase: 62 * DEG, side: -38 * DEG, sun: 0.42, air: 0.06, mix: 1 },
      // Nearly full, lit from just beside the viewer.
      moon: { phase: 22 * DEG, side: 130 * DEG, sun: 1.25, mix: 1 },
    },
    city: {
      body: 0x070c18,
      glass: 0x050912,
      skyRefl: 0x1b3256,
      haze: 0x16273f,
      hazeHigh: 0x2c4670,
      hazeDensity: 0.00048,
      windows: 0.82,
      neon: 1.15,
      lights: 1.25,
      beacons: 1.0,
      traffic: 1.0,
      trafficScale: 1.0,
      sunK: 0.06,
      street: 0xff9a40,
      avenue: 0x46d2ff,
      base: 0x050912,
      roof: 0x121a28,
      park: 0x050f0b,
      facade: 0x141c29,
      facadeGlass: 0x081221,
      spine: 0x46d2ff,
    },
    pool: { body: 0x0f8fb0, glow: 1.0, lights: 1.5, caustic: 0.55, clarity: 0.78, glint: 2.5, skyK: 1 },
    interior: { floor: 0x8d95a6, column: 0x9aa2b2, media: 0x0b1426, screen: 0x2a5cff },
    glow: 1.15,
  },
};

export function lookOf(id) {
  return LOOKS[id] || LOOKS[DEFAULT_LOOK];
}
