import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

/*
 * A small post-processing chain tuned for low GPU cost:
 *   scene → HDR target (optional MSAA)
 *         → bloom: soft-threshold prefilter at ½ resolution, dual-filter blur down to 1/32 and back
 *         → one full-resolution pass: bloom composite, Neutral tone mapping, vignette, grain, sRGB.
 * Compared with EffectComposer + UnrealBloomPass + OutputPass this is one full-resolution
 * pass instead of three, and the blur runs on small targets only.
 */

const VERT = /* glsl */ `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const PREFILTER = /* glsl */ `
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uKnee;
varying vec2 vUv;
vec3 tap(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
void main() {
  // Four bilinear taps cover a 4×4 block of the full-resolution image.
  vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
  c = min(c, vec3(24.0));
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float w = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(c * w, 1.0);
}`;

const DOWN = /* glsl */ `
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
  s += texture2D(tSrc, vUv + vec2(-1.0, -1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, -1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, 1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, 1.0) * uTexel).rgb;
  gl_FragColor = vec4(s * 0.125, 1.0);
}`;

const UP = /* glsl */ `
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uWeight;
varying vec2 vUv;
void main() {
  vec2 h = uTexel * 0.5;
  vec3 s = texture2D(tSrc, vUv + vec2(-2.0, 0.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, 1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, 2.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, 1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(2.0, 0.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, -1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, -2.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, -1.0) * h).rgb * 2.0;
  gl_FragColor = vec4(s * (uWeight / 12.0), 1.0);
}`;

const FINAL = /* glsl */ `
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;
varying vec2 vUv;
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  #ifdef USE_BLOOM
    c += texture2D(tBloom, vUv).rgb * uBloom;
  #endif
  c = NeutralToneMapping(c);
  vec2 d = (vUv - 0.5) * vec2(1.12, 1.0);
  c *= 1.0 - uVignette * smoothstep(0.32, 0.98, length(d) * 1.3);
  vec4 o = sRGBTransferOETF(vec4(c, 1.0));
  // Grain in display space also hides banding in the dark gradients.
  float n = hash(floor(gl_FragCoord.xy) + fract(uTime * 7.31) * 113.0) - 0.5;
  o.rgb += n * uGrain;
  gl_FragColor = vec4(o.rgb, 1.0);
}`;

function target(w, h, opts = {}) {
  const rt = new THREE.WebGLRenderTarget(Math.max(1, w), Math.max(1, h), {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
    stencilBuffer: false,
    ...opts,
  });
  rt.texture.generateMipmaps = false;
  return rt;
}

function pass(fragmentShader, uniforms, extra = {}) {
  return new THREE.RawShaderMaterial({
    vertexShader: VERT,
    fragmentShader,
    uniforms,
    depthTest: false,
    depthWrite: false,
    ...extra,
  });
}

/**
 * createPost(renderer, { msaa, bloom }) → { setSize(w, h), render(scene, camera, time), set(opts), dispose() }.
 * Sizes are in device pixels of the scene image; the final pass always fills the canvas.
 */
export function createPost(renderer, { msaa = 0, bloom = true, levels = 5 } = {}) {
  const quad = new FullScreenQuad(null);
  const sceneRT = target(2, 2, { samples: msaa, depthBuffer: true });
  const chain = [];
  if (bloom) for (let i = 0; i < levels; i++) chain.push(target(2, 2));

  const prefilter = pass(PREFILTER, {
    tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.0 }, uKnee: { value: 0.45 },
  });
  const down = pass(DOWN, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
  const up = pass(UP, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uWeight: { value: 1 } }, {
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
  const final = pass(FINAL, {
    tScene: { value: sceneRT.texture },
    tBloom: { value: bloom ? chain[0].texture : null },
    uBloom: { value: 0.16 },
    uVignette: { value: 0.32 },
    uGrain: { value: 0.012 },
    uTime: { value: 0 },
    toneMappingExposure: { value: 1 },
  });
  if (bloom) final.defines = { USE_BLOOM: '' };

  function run(material, rt) {
    renderer.setRenderTarget(rt);
    quad.material = material;
    quad.render(renderer);
  }

  return {
    sceneTarget: sceneRT,
    setSize(w, h) {
      sceneRT.setSize(Math.max(1, w), Math.max(1, h));
      let cw = Math.max(1, Math.floor(w / 2));
      let ch = Math.max(1, Math.floor(h / 2));
      for (const rt of chain) {
        rt.setSize(cw, ch);
        cw = Math.max(1, Math.floor(cw / 2));
        ch = Math.max(1, Math.floor(ch / 2));
      }
    },
    set({ bloomStrength, threshold, knee, vignette, grain, exposure } = {}) {
      if (bloomStrength != null) final.uniforms.uBloom.value = bloomStrength;
      if (threshold != null) prefilter.uniforms.uThreshold.value = threshold;
      if (knee != null) prefilter.uniforms.uKnee.value = knee;
      if (vignette != null) final.uniforms.uVignette.value = vignette;
      if (grain != null) final.uniforms.uGrain.value = grain;
      if (exposure != null) final.uniforms.toneMappingExposure.value = exposure;
    },
    render(scene, camera, time = 0) {
      const autoClear = renderer.autoClear;
      renderer.autoClear = false;
      renderer.setRenderTarget(sceneRT);
      renderer.clear(true, true, false);
      renderer.render(scene, camera);

      if (chain.length) {
        prefilter.uniforms.tSrc.value = sceneRT.texture;
        prefilter.uniforms.uTexel.value.set(1 / sceneRT.width, 1 / sceneRT.height);
        run(prefilter, chain[0]);
        for (let i = 1; i < chain.length; i++) {
          const src = chain[i - 1];
          down.uniforms.tSrc.value = src.texture;
          down.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
          run(down, chain[i]);
        }
        for (let i = chain.length - 2; i >= 0; i--) {
          const src = chain[i + 1];
          up.uniforms.tSrc.value = src.texture;
          up.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
          run(up, chain[i]);
        }
      }

      final.uniforms.uTime.value = time;
      run(final, null);
      renderer.autoClear = autoClear;
    },
    dispose() {
      sceneRT.dispose();
      for (const rt of chain) rt.dispose();
      prefilter.dispose();
      down.dispose();
      up.dispose();
      final.dispose();
      quad.dispose();
    },
  };
}
