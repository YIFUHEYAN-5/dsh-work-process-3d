import * as THREE from 'three';
import { mesh } from './util.js';
import { createSky } from './sky.js';
import { buildAtrium } from './atrium.js';
import { buildCity } from './city.js';
import { NO_REFLECT_LAYER } from './reflection.js';

/*
 * Stage = everything that is not a machine: sky and environment lighting, the glass atrium with
 * its floors and media wall, the city outside, and the sun / sky / fill lights of the current look.
 */

/** Clear colour behind the sky dome (only visible for a frame while the scene builds). */
export const BACKGROUND = 0x0b0e18;

/** Unlit HDR colour: values above the bloom threshold glow. */
export function glowMaterial(color, intensity = 1) {
  const m = new THREE.MeshBasicMaterial({ toneMapped: false });
  m.color.set(color).multiplyScalar(intensity);
  return m;
}

const SHADOW_SIZE = { low: 0, medium: 1024, high: 2048, ultra: 4096 };

export function configureShadows(key, quality) {
  const size = SHADOW_SIZE[quality] ?? 2048;
  key.castShadow = size > 0;
  if (!size) return;
  key.shadow.mapSize.set(size, size);
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.03;
  key.shadow.radius = quality === 'ultra' ? 5 : 3.5;
  if (key.shadow.map) {
    key.shadow.map.dispose();
    key.shadow.map = null;
  }
}

const _corner = new THREE.Vector3();
const _center = new THREE.Vector3();
const _probe = new THREE.OrthographicCamera();

/**
 * Point the sun at the islands from `dir` (unit vector toward the sun) and fit its orthographic
 * shadow camera around the casting volume. Shadows that fall past the islands stay inside the
 * map because they lie on the same light rays as their casters; only the depth range grows.
 */
export function fitShadowCamera(key, dir, bounds, height = 4.6) {
  _center.set((bounds.x0 + bounds.x1) / 2, 0, (bounds.z0 + bounds.z1) / 2);
  key.position.copy(_center).addScaledVector(dir, 60);
  key.target.position.copy(_center);
  key.updateMatrixWorld();
  key.target.updateMatrixWorld();
  _probe.position.copy(key.position);
  _probe.lookAt(_center);
  _probe.updateMatrixWorld();
  let x0 = Infinity;
  let x1 = -Infinity;
  let y0 = Infinity;
  let y1 = -Infinity;
  let d0 = Infinity;
  let d1 = -Infinity;
  for (const x of [bounds.x0, bounds.x1]) {
    for (const y of [0, height]) {
      for (const z of [bounds.z0, bounds.z1]) {
        _corner.set(x, y, z).applyMatrix4(_probe.matrixWorldInverse);
        x0 = Math.min(x0, _corner.x);
        x1 = Math.max(x1, _corner.x);
        y0 = Math.min(y0, _corner.y);
        y1 = Math.max(y1, _corner.y);
        d0 = Math.min(d0, -_corner.z);
        d1 = Math.max(d1, -_corner.z);
      }
    }
  }
  const cam = key.shadow.camera;
  cam.left = x0 - 0.5;
  cam.right = x1 + 0.5;
  cam.bottom = y0 - 0.5;
  cam.top = y1 + 0.5;
  cam.near = Math.max(0.5, d0 - 2);
  cam.far = d1 + 40;
  cam.updateProjectionMatrix();
}

/** Soft contact shadow decal under an object (floor decal: not mirrored by the reflection). */
export function blobShadow(M, w, d, p, opacity = 0.55) {
  const mat = opacity === 0.55 ? M.shadow : M.shadow.clone();
  mat.opacity = opacity;
  const m = mesh(new THREE.PlaneGeometry(w, d), mat, [p[0], 0.006, p[2]], [-Math.PI / 2, 0, 0], null, { cast: false, receive: false });
  m.renderOrder = -1;
  m.layers.set(NO_REFLECT_LAYER);
  return m;
}

/**
 * buildStage(M, tex, quality, { renderer, look, reflection, beamTarget }) → { root, key, sky,
 * reflectors, bounds, envTexture, update(dt, t, info), setLook(look) }.
 */
export function buildStage(M, tex, quality, { renderer = null, look, reflection = null, beamTarget } = {}) {
  const root = new THREE.Group();
  root.name = 'stage';

  const sky = createSky(renderer, look, { quality });
  root.add(sky.dome);
  const atrium = buildAtrium(M, { reflection });
  root.add(atrium.root);
  const city = buildCity({ quality, beamTarget });
  root.add(city.root);

  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.name = 'sun';
  root.add(key, key.target);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1);
  hemi.name = 'sky-light';
  const fill = new THREE.DirectionalLight(0xffffff, 0.5);
  fill.name = 'fill';
  root.add(hemi, fill, fill.target);
  configureShadows(key, quality);

  const dir = new THREE.Vector3();
  function setLook(next) {
    sky.setLook(next);
    dir.fromArray(next.sun.dir).normalize();
    key.color.set(next.sun.color);
    key.intensity = next.sun.intensity;
    fitShadowCamera(key, dir, atrium.bounds);
    hemi.color.set(next.hemi.sky);
    hemi.groundColor.set(next.hemi.ground);
    hemi.intensity = next.hemi.intensity;
    fill.color.set(next.fill.color);
    fill.intensity = next.fill.intensity;
    fill.position.fromArray(next.fill.dir).normalize().multiplyScalar(30);
    fill.target.position.set(0, 0, -1);
    fill.updateMatrixWorld();
    fill.target.updateMatrixWorld();
    atrium.setLook(next);
    city.setLook(next);
  }
  setLook(look);

  return {
    root,
    key,
    sky,
    reflectors: atrium.reflectors,
    bounds: atrium.bounds,
    get envTexture() {
      return sky.envTexture;
    },
    update(dt, t, info) {
      atrium.update(dt, t, info);
      city.update(dt, t, info);
    },
    setLook,
    dispose() {
      sky.dispose();
    },
  };
}
