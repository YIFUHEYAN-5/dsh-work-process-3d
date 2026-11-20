// Camera maths for the media-wall close-up. A close-up pose is (u, v, d): u metres along
// the curved screen to the viewer's right (arc length), v metres up from the screen centre
// and d metres from the screen. The camera then stands on the wall's radius, so panning
// slides it around the wall at a constant distance and it always looks straight at it.
import * as THREE from 'three';
import { MEDIA, arcPoint } from './layout.js';
import { clamp } from './util.js';

/** Closest the camera comes to a screen, in metres. */
export const SCREEN_MIN_D = 1.6;

/** tan of the half field of view, vertically and horizontally. */
function halfTans(fovDeg, aspect) {
  const tv = Math.tan(THREE.MathUtils.degToRad(fovDeg / 2));
  return { tv, th: tv * Math.max(0.2, aspect) };
}

/** Yaw (Euler YXZ) that looks straight out at the wall at atrium angle a. */
export const screenYaw = (a) => Math.atan2(-Math.cos(a), Math.sin(a));

/** Atrium angle of the point u metres to the viewer's right of the screen centre. */
export const screenAngle = (def, u) => def.a - u / MEDIA.screenR;

/**
 * Distance from the screen centre at which the whole curved screen fits the view with a margin.
 * The vertical margin is generous (about 16 % top and bottom): the close-up puts a bar with the
 * screen name and the step buttons along the bottom of the view, and the last row of the screen
 * (the recent tool calls and the running wafer) has to clear it.
 */
export function screenFit(def, fovDeg, aspect) {
  const { tv, th } = halfTans(fovDeg, aspect);
  const span = def.a1 - def.a0;
  const R = MEDIA.screenR;
  const chord = 2 * R * Math.sin(span / 2);
  const sag = R * (1 - Math.cos(span / 2)); // the edges are this much closer than the centre
  const h = def.y1 - def.y0;
  return clamp(Math.max(sag + ((chord / 2) * 1.08) / th, sag + ((h / 2) * 1.32) / tv), SCREEN_MIN_D + 0.4, 18);
}

/**
 * How far the close-up may pan at distance d: { u, v } half ranges. The screen edge may come
 * a little inside the view (10 %) so the user sees where it ends; at the fitted distance there
 * is next to nothing to pan.
 */
export function screenPanLimits(def, d, fovDeg, aspect) {
  const { tv, th } = halfTans(fovDeg, aspect);
  return {
    u: Math.max(0, ((def.a1 - def.a0) * MEDIA.screenR) / 2 - d * th * 0.9),
    v: Math.max(0, (def.y1 - def.y0) / 2 - d * tv * 0.9),
  };
}

/** Camera position for a close-up pose. */
export function screenPosition(def, u, v, d, out = new THREE.Vector3()) {
  return arcPoint(screenAngle(def, u), MEDIA.screenR - d, (def.y0 + def.y1) / 2 + v, out);
}
