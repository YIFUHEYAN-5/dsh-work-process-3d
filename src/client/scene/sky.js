import * as THREE from 'three';
import { canvasTexture, arcBand } from './util.js';
import { ATRIUM, MEDIA, mediaScreens } from './layout.js';

/*
 * Sky outside the atrium. An equirectangular canvas is painted per look (gradient, sun glow,
 * Belt of Venus, clouds, stars, a far skyline and the lit city ground below the horizon) and
 * shown on a dome whose shader adds an HDR sun. The dome plus a few interior shapes (ceiling,
 * ring light, floor, glass head cove, media wall) are captured into a PMREM environment, so white and
 * chrome surfaces reflect the hall and the sky behind the glass.
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
  const r = rng(look.id === 'day' ? 7 : 3);

  // Base gradient by elevation.
  const grad = g.createLinearGradient(0, 0, 0, H);
  // Below the horizon the band down to about −4.5° is what lies beyond the modelled city floor
  // (which ends about 4° below the horizon seen from the atrium), so it is painted in the
  // city's haze colour.
  const stops = [
    [90, s.zenith], [48, s.high], [22, s.mid], [9, s.low], [2.5, s.horizon], [0, s.horizon],
    [-0.6, s.groundHaze], [-4.5, s.groundHaze], [-9, s.ground], [-90, s.below],
  ];
  for (const [e, c] of stops) grad.addColorStop(Math.min(1, Math.max(0, yOf(e) / H)), c);
  g.globalCompositeOperation = 'source-over';
  g.fillStyle = grad;
  g.fillRect(0, 0, W, H);

  // Sun glow: a wide band along the horizon plus a round halo.
  const sd = look.sun.dir;
  const sx = xOfAzimuth(Math.atan2(sd[2], sd[0]), W);
  const sy = yOf(Math.asin(sd[1]) / DEG);
  wrap(sx, (x) => {
    glow(g, x, yOf(3), 100 * ppd, 16 * ppd, s.sunGlow, 0.55);
    glow(g, x, sy, 60 * ppd, 60 * ppd, s.sunGlow, 0.42);
    glow(g, x, sy, 14 * ppd, 14 * ppd, '#fff4e4', 0.5);
  });
  // Belt of Venus on the side away from the sun.
  wrap(sx + W / 2, (x) => glow(g, x, yOf(8), 130 * ppd, 7 * ppd, s.belt, 0.2));

  // Thin cloud streaks, lit on the sun side.
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

  // Stars above the glow (dusk only).
  if (s.stars > 0) {
    for (let i = 0; i < 760; i++) {
      const sinE = Math.sin(16 * DEG) + r() * (1 - Math.sin(16 * DEG));
      const e = Math.asin(sinE) / DEG;
      const fade = Math.min(1, Math.max(0, (e - 16) / 26));
      const a = s.stars * fade * (0.25 + 0.7 * r() * r());
      if (a < 0.03) continue;
      const size = 0.7 + r() * 1.1;
      const stretch = 1 / Math.max(0.12, Math.cos(e * DEG));
      g.fillStyle = r() < 0.2 ? rgba('#bcd2ff', a) : rgba('#ffffff', a);
      g.fillRect(r() * W, yOf(e), size * stretch, size);
    }
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

const DOME_FRAG = /* glsl */ `
#include <common>
uniform sampler2D tSky;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunPower;
uniform float uIntensity;
varying vec3 vWorld;
void main() {
  vec3 d = normalize(vWorld - cameraPosition);
  vec2 uv = vec2(atan(d.z, d.x) * RECIPROCAL_PI2 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5);
  vec3 col = texture2D(tSky, uv).rgb * uIntensity;
  float s = max(dot(d, uSunDir), 0.0);
  float disc = smoothstep(0.999848, 0.999925, s);
  col += uSunColor * (disc * uSunPower + pow(s, 420.0) * 1.1 + pow(s, 28.0) * 0.1);
  gl_FragColor = vec4(col, 1.0);
}
`;

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
  add(new THREE.RingGeometry(6.4, ATRIUM.r, 64, 1).rotateX(Math.PI / 2), basic(I.ceiling, 0.9), [cx, ATRIUM.h, cz]);
  add(new THREE.TorusGeometry(11.5, 0.32, 8, 96).rotateX(Math.PI / 2), basic(I.ring, I.ringPower), [cx, ATRIUM.h - 0.25, cz]);
  add(new THREE.CircleGeometry(ATRIUM.r + 0.5, 64).rotateX(-Math.PI / 2), basic(I.floor, 0.62), [cx, 0, cz]);
  // The glass head cove under the ceiling edge; the walls themselves are glass, so the sky
  // shows through everywhere else.
  add(new THREE.RingGeometry(ATRIUM.r - 0.6, ATRIUM.r, 64, 1).rotateX(Math.PI / 2), basic(I.column, 0.8), [cx, ATRIUM.h - 0.55, cz]);
  add(arcBand(cx, cz, ATRIUM.r - 0.6, 0, Math.PI * 2, ATRIUM.h - 0.55, ATRIUM.h, 64, true), basic(I.column, 0.85));
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

/**
 * Sky dome and environment for a look. `renderer` may be null (tests): the dome and its canvas
 * are still built, but no PMREM environment is generated.
 */
export function createSky(renderer, look, { quality = 'high' } = {}) {
  const W = quality === 'low' ? 1024 : 2048;
  const H = W / 2;
  const sky = canvasTexture(W, H, null, { anisotropy: 1 });
  sky.tex.wrapS = THREE.RepeatWrapping;
  sky.tex.generateMipmaps = false;
  sky.tex.minFilter = THREE.LinearFilter;
  sky.tex.magFilter = THREE.LinearFilter;

  const material = new THREE.ShaderMaterial({
    name: 'sky-dome',
    uniforms: {
      tSky: { value: sky.tex },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color(1, 1, 1) },
      uSunPower: { value: 20 },
      uIntensity: { value: 1 },
    },
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

  let envRT = null;
  let current = look;

  function buildEnv() {
    if (!renderer) return;
    const scene = interiorScene(current, material);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const next = pmrem.fromScene(scene, 0.035, 0.1, 400, {
      size: 256,
      position: new THREE.Vector3(ATRIUM.cx, 1.6, ATRIUM.cz),
    });
    pmrem.dispose();
    disposeScene(scene, material);
    if (envRT) envRT.dispose();
    envRT = next;
  }

  function setLook(next) {
    current = next;
    sky.redraw((g, w, h) => paintSky(g, w, h, next));
    material.uniforms.uSunDir.value.fromArray(next.sun.dir).normalize();
    material.uniforms.uSunColor.value.set(next.sun.disc);
    material.uniforms.uSunPower.value = next.sun.discPower;
    buildEnv();
  }

  setLook(look);

  return {
    dome,
    texture: sky.tex,
    get envTexture() {
      return envRT ? envRT.texture : null;
    },
    setLook,
    dispose() {
      dome.geometry.dispose();
      material.dispose();
      sky.tex.dispose();
      if (envRT) envRT.dispose();
      envRT = null;
    },
  };
}
