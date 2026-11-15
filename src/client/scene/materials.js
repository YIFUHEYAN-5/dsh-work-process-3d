import * as THREE from 'three';
import { canvasTexture, TAU } from './util.js';

// Deterministic pseudo-random numbers so textures look the same on every load.
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

function brushedTexture() {
  const r = rng(7);
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = 'rgb(205,205,205)';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const y = r() * h;
      const v = 150 + r() * 105;
      g.strokeStyle = `rgba(${v},${v},${v},${0.18 + r() * 0.35})`;
      g.lineWidth = 0.5 + r() * 1.2;
      g.beginPath();
      const x0 = r() * w;
      g.moveTo(x0 - w, y);
      g.lineTo(x0 + w * (0.3 + r()), y + (r() - 0.5) * 0.6);
      g.stroke();
    }
  }, { srgb: false, repeat: [2, 2] });
}

function waferTexture() {
  const r = rng(23);
  return canvasTexture(512, 512, (g, w, h) => {
    const cx = w / 2;
    const rad = w / 2;
    const grad = g.createRadialGradient(cx, cx, 10, cx, cx, rad);
    grad.addColorStop(0, '#5a6372');
    grad.addColorStop(1, '#2c323d');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
    const die = 26;
    for (let x = 0; x < w; x += die) {
      for (let y = 0; y < h; y += die) {
        const dx = x + die / 2 - cx;
        const dy = y + die / 2 - cx;
        if (Math.hypot(dx, dy) > rad - die * 0.9) continue;
        const v = 70 + r() * 40;
        g.fillStyle = `rgb(${v - 8},${v},${v + 22})`;
        g.fillRect(x + 2, y + 2, die - 4, die - 4);
        g.fillStyle = `rgba(190,205,230,${0.15 + r() * 0.2})`;
        g.fillRect(x + 6, y + 6, die - 14, 3);
        g.fillRect(x + 6, y + die - 10, 6, 4);
      }
    }
    g.strokeStyle = 'rgba(210,220,235,0.55)';
    g.lineWidth = 6;
    g.beginPath();
    g.arc(cx, cx, rad - 4, 0, TAU);
    g.stroke();
  }, { anisotropy: 8 });
}

function radialTexture() {
  return canvasTexture(128, 128, (g, w) => {
    const grad = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.clearRect(0, 0, w, w);
    g.fillStyle = grad;
    g.fillRect(0, 0, w, w);
  });
}

function hazardTexture() {
  return canvasTexture(256, 32, (g, w, h) => {
    g.fillStyle = '#b89a52';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#2a2d33';
    for (let x = -h; x < w + h; x += 32) {
      g.beginPath();
      g.moveTo(x, h);
      g.lineTo(x + 16, h);
      g.lineTo(x + 16 + h, 0);
      g.lineTo(x + h, 0);
      g.closePath();
      g.fill();
    }
  }, { repeat: [1, 1] });
}

function grilleTexture() {
  return canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#9aa1ab';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#4b5059';
    for (let y = 8; y < h - 4; y += 12) g.fillRect(8, y, w - 16, 6);
  });
}

const standard = (o) => new THREE.MeshStandardMaterial(o);

/**
 * Glass without a transmission pass: a transparent standard material whose opacity rises
 * towards grazing angles (Fresnel), drawn premultiplied so environment reflections stay
 * bright on a nearly clear pane. Costs one ordinary transparent draw.
 */
export function fakeGlass({
  color = 0xd4e2ff, opacity = 0.06, fresnel = 0.5, roughness = 0.04, metalness = 0,
  envMapIntensity = 1.3, side = THREE.FrontSide, emissive = 0x000000, emissiveIntensity = 0,
} = {}) {
  const m = new THREE.MeshStandardMaterial({
    color, opacity, roughness, metalness, envMapIntensity, side, emissive, emissiveIntensity,
    transparent: true, depthWrite: false,
  });
  m.blending = THREE.CustomBlending;
  m.blendSrc = THREE.OneFactor;
  m.blendDst = THREE.OneMinusSrcAlphaFactor;
  m.blendSrcAlpha = THREE.OneFactor;
  m.blendDstAlpha = THREE.OneMinusSrcAlphaFactor;
  m.userData.fresnel = fresnel;
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uFresnel = { value: fresnel };
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uFresnel;')
      .replace('#include <opaque_fragment>', /* glsl */ `
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`);
  };
  m.customProgramCacheKey = () => 'dwp3d-fake-glass';
  return m;
}

/**
 * Build the shared material library. quality: 'low' | 'medium' | 'high' | 'ultra'.
 * Palette (bright future factory): pearl-white ceramic shells ("white", "ceramic"), titanium
 * grey for frames and bases ("graphite"), satin silver and chrome trims, near-black only for
 * rubber, plastics and screens. Colour comes from light strips and status lights, not paint.
 * Everything is MeshStandardMaterial except the iridescent wafer face.
 */
export function createMaterials(quality = 'high') {
  const tex = {
    brushed: brushedTexture().tex,
    wafer: waferTexture().tex,
    radial: radialTexture().tex,
    hazard: hazardTexture().tex,
    grille: grilleTexture().tex,
  };
  const M = {
    // Satin silver and brushed aluminium for frames, rails and housings.
    alu: standard({ color: 0xc3c8cf, metalness: 1, roughness: 0.34, roughnessMap: tex.brushed }),
    aluDark: standard({ color: 0x7b818b, metalness: 0.9, roughness: 0.38, roughnessMap: tex.brushed }),
    chrome: standard({ color: 0xe3e7ec, metalness: 1, roughness: 0.08 }),
    steel: standard({ color: 0xb1b6be, metalness: 1, roughness: 0.28 }),
    darkSteel: standard({ color: 0x5f656e, metalness: 1, roughness: 0.34 }),
    brass: standard({ color: 0xd3bd96, metalness: 1, roughness: 0.3 }),
    copper: standard({ color: 0xc58b66, metalness: 1, roughness: 0.3 }),
    gold: standard({ color: 0xe9c77f, metalness: 1, roughness: 0.22 }),
    // Pearl-white ceramic shell (the main body colour of every machine).
    white: standard({ color: 0xf1f3f6, metalness: 0, roughness: 0.32 }),
    // Titanium grey: bases, frames and secondary panels, so white shells keep an outline.
    graphite: standard({ color: 0x8e95a0, metalness: 0.55, roughness: 0.34, roughnessMap: tex.brushed }),
    blue: standard({ color: 0x4d6bfe, metalness: 0.2, roughness: 0.35 }),
    orange: standard({ color: 0xc8763a, metalness: 0.3, roughness: 0.36 }),
    rubber: standard({ color: 0x15171b, metalness: 0, roughness: 0.8 }),
    plastic: standard({ color: 0x23262c, metalness: 0, roughness: 0.45 }),
    ceramic: standard({ color: 0xe4e7eb, metalness: 0, roughness: 0.42 }),
    grille: standard({ map: tex.grille, metalness: 0.6, roughness: 0.45 }),
    hazard: standard({ map: tex.hazard, metalness: 0.2, roughness: 0.55 }),
    glass: fakeGlass({ color: 0xdfe9f5, opacity: 0.08, fresnel: 0.55 }),
    smoke: fakeGlass({ color: 0xa8bfd8, opacity: 0.22, fresnel: 0.45, roughness: 0.1, side: THREE.DoubleSide }),
    fuel: standard({ color: 0x0a2a6e, emissive: 0x2f86ff, emissiveIntensity: 2.2, roughness: 0.25, metalness: 0 }),
    fuelTop: standard({ color: 0x1d4bb0, emissive: 0x8cc4ff, emissiveIntensity: 3.0, roughness: 0.15, metalness: 0 }),
    bubble: standard({ color: 0xbfd6ff, emissive: 0xb4d2ff, emissiveIntensity: 2.4, roughness: 0.1, metalness: 0 }),
    floor: standard({ color: 0xd4d8de, metalness: 0, roughness: 0.25 }),
    wall: standard({ color: 0xe6e9ee, metalness: 0, roughness: 0.5 }),
    shadow: new THREE.MeshBasicMaterial({ color: 0x000000, map: tex.radial, transparent: true, opacity: 0.55, depthWrite: false }),
    waferTop: new THREE.MeshPhysicalMaterial({
      color: 0xffffff, map: tex.wafer, metalness: 0.85, roughness: 0.16,
      iridescence: quality === 'low' ? 0 : 1, iridescenceIOR: 1.35,
      iridescenceThicknessMinimum: 180, iridescenceThicknessMaximum: 520,
    }),
    waferEdge: standard({ color: 0x6d737d, metalness: 0.9, roughness: 0.3 }),
  };
  return { M, tex, transmission: false };
}

/** Emissive indicator material; intensity is driven at runtime. */
export function ledMaterial(color, intensity = 0) {
  const c = new THREE.Color(color);
  return new THREE.MeshStandardMaterial({
    color: c.clone().multiplyScalar(0.25),
    emissive: c,
    emissiveIntensity: intensity,
    roughness: 0.3,
    metalness: 0,
  });
}

/** Self-lit display surface driven by a canvas texture. */
export function screenMaterial(tex, intensity = 1.25) {
  return new THREE.MeshStandardMaterial({
    color: 0x050607,
    emissive: 0xffffff,
    emissiveMap: tex,
    emissiveIntensity: intensity,
    roughness: 0.32,
    metalness: 0,
  });
}

/** Printed / engraved plate (not self-lit). */
export function plateMaterial(tex, metal = 0.55) {
  return new THREE.MeshStandardMaterial({ map: tex, metalness: metal, roughness: 0.42 });
}
