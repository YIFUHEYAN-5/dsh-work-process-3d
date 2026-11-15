import * as THREE from 'three';

/*
 * Planar reflection for the floors at y = 0 (same math as three's Reflector, shared by several
 * floor materials). The scene is rendered once more from a camera mirrored below the floor into a
 * small HalfFloat target with mipmaps; floor shaders sample it with a roughness-dependent mip bias,
 * which gives soft, polished-stone reflections at a fraction of the main pass cost.
 *
 * Objects on NO_REFLECT_LAYER are drawn by the main camera only: the floors themselves, decals and
 * helpers that would look wrong mirrored.
 */

export const NO_REFLECT_LAYER = 1;

const PARS_VERTEX = /* glsl */ `
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`;

const VERTEX = /* glsl */ `
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`;

const PARS_FRAGMENT = /* glsl */ `
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`;

// Needs `float reflMask` declared by the host shader before <opaque_fragment>.
const FRAGMENT = /* glsl */ `
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;

/**
 * createReflection(renderer, { scale, strength, blur }) → { uniforms, inject(shader), update(scene, camera),
 * setStrength(v), dispose() }. `renderer` may be null (headless tests): update() then does nothing.
 */
export function createReflection(renderer, { scale = 0.4, strength = 0.5, blur = 1.0 } = {}) {
  const target = new THREE.WebGLRenderTarget(16, 16, {
    type: THREE.HalfFloatType,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: true,
  });
  target.texture.name = 'planar-reflection';

  const uniforms = {
    tReflect: { value: target.texture },
    uReflMatrix: { value: new THREE.Matrix4() },
    uReflStrength: { value: strength },
    uReflBlur: { value: blur },
  };

  const camera = new THREE.PerspectiveCamera();
  camera.layers.set(0);
  const normal = new THREE.Vector3(0, 1, 0);
  const origin = new THREE.Vector3(0, 0, 0);
  const camPos = new THREE.Vector3();
  const rotation = new THREE.Matrix4();
  const lookAt = new THREE.Vector3();
  const view = new THREE.Vector3();
  const aim = new THREE.Vector3();
  const plane = new THREE.Plane();
  const clip = new THREE.Vector4();
  const q = new THREE.Vector4();
  const size = new THREE.Vector2();
  const clipBias = 0.0;

  /** Patch a MeshStandard/MeshPhysical shader inside onBeforeCompile. */
  function inject(shader) {
    shader.uniforms.tReflect = uniforms.tReflect;
    shader.uniforms.uReflMatrix = uniforms.uReflMatrix;
    shader.uniforms.uReflStrength = uniforms.uReflStrength;
    shader.uniforms.uReflBlur = uniforms.uReflBlur;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${PARS_VERTEX}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>\n${VERTEX}`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${PARS_FRAGMENT}`)
      .replace('#include <opaque_fragment>', `${FRAGMENT}\n#include <opaque_fragment>`);
  }

  function update(scene, viewCamera) {
    if (!renderer) return false;
    renderer.getDrawingBufferSize(size);
    const w = Math.max(16, Math.round(size.x * scale));
    const h = Math.max(16, Math.round(size.y * scale));
    if (target.width !== w || target.height !== h) target.setSize(w, h);

    camPos.setFromMatrixPosition(viewCamera.matrixWorld);
    view.subVectors(origin, camPos);
    if (view.dot(normal) > 0) return false; // camera below the floor
    view.reflect(normal).negate().add(origin);

    rotation.extractRotation(viewCamera.matrixWorld);
    lookAt.set(0, 0, -1).applyMatrix4(rotation).add(camPos);
    aim.subVectors(origin, lookAt).reflect(normal).negate().add(origin);

    camera.position.copy(view);
    camera.up.set(0, 1, 0).applyMatrix4(rotation).reflect(normal);
    camera.lookAt(aim);
    camera.far = viewCamera.far;
    camera.updateMatrixWorld();
    camera.projectionMatrix.copy(viewCamera.projectionMatrix);
    camera.projectionMatrix.elements[8] *= -1;
    camera.projectionMatrix.elements[12] *= -1;

    const tm = uniforms.uReflMatrix.value;
    tm.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    tm.multiply(camera.projectionMatrix);
    tm.multiply(camera.matrixWorldInverse);

    // Oblique near plane = the floor, so nothing below y = 0 shows up in the mirror.
    plane.setFromNormalAndCoplanarPoint(normal, origin);
    plane.applyMatrix4(camera.matrixWorldInverse);
    clip.set(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const P = camera.projectionMatrix.elements;
    q.x = (Math.sign(clip.x) + P[8]) / P[0];
    q.y = (Math.sign(clip.y) + P[9]) / P[5];
    q.z = -1.0;
    q.w = (1.0 + P[10]) / P[14];
    clip.multiplyScalar(2.0 / clip.dot(q));
    P[2] = clip.x;
    P[6] = clip.y;
    P[10] = clip.z + 1.0 - clipBias;
    P[14] = clip.w;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();

    const prevTarget = renderer.getRenderTarget();
    const prevAutoClear = renderer.autoClear;
    const prevShadow = renderer.shadowMap.autoUpdate;
    // A pending shadow bake must wait for the main pass: the shadow map filters casters by the
    // viewing camera's layers, and this camera does not see NO_REFLECT_LAYER.
    const prevNeeds = renderer.shadowMap.needsUpdate;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = false;
    renderer.setRenderTarget(target);
    renderer.state.buffers.depth.setMask(true);
    renderer.autoClear = false;
    renderer.clear(true, true, false);
    renderer.render(scene, camera);
    renderer.autoClear = prevAutoClear;
    renderer.shadowMap.autoUpdate = prevShadow;
    renderer.shadowMap.needsUpdate = prevNeeds;
    renderer.setRenderTarget(prevTarget);
    return true;
  }

  return {
    uniforms,
    inject,
    update,
    setStrength(v) {
      uniforms.uReflStrength.value = v;
    },
    dispose() {
      target.dispose();
    },
  };
}
