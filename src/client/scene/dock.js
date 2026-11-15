// SA-1 subagent dock on the back-left island. Every running subagent or workflow agent gets
// one of eight drones: it takes off from its landing pad, collects a task capsule above the
// cobot station (ST-05), circles the mast while the agent works and lands again carrying the
// result (green = done, red = failed, grey = stopped). Drones are instanced: 7 draw calls.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Kit, tf, cyl, sphere, torus, lathe, box, rbox, canvasTexture, FONT_SANS, FONT_MONO, TAU, clamp, damp, angleLerp } from './util.js';
import { ledMaterial, plateMaterial, fakeGlass } from './materials.js';
import { nameplate, roundRect, fitText } from './displays.js';
import { ISLANDS } from './layout.js';
import { MACHINE_INFO } from '../../model/stations.js';

const ISLAND = ISLANDS.find((s) => s.id === 'dock');
/** Centre of the dock on the floor. */
export const DOCK = new THREE.Vector3(ISLAND.c[0], 0, ISLAND.c[1]);
export const DRONE_COUNT = 8;

const PLINTH_R = 1.82;
const PLINTH_TOP = 0.12;
const PAD_RING = 1.3;
const PAD_R = 0.24;
const PAD_TOP = 0.42;
const PARK_LIFT = 0.074; // body centre above the pad surface when landed
const MAST_TOP = 1.96;
const HOLO_Y = 2.46;
const HOLO_PX = [512, 240];
const HOLO_W = 1.16;
const CRUISE_Y = 3.0;
/** Working drones circle the mast: workflow agents on the inner ring, subagents outside. */
const RINGS = {
  inner: { r: 1.1, y: 2.66, speed: -0.34 },
  outer: { r: 1.66, y: 3.02, speed: 0.24 },
};
const MAX_SPEED = 3.4;
const RESULT_HOLD = 2.4; // s the result capsule stays on the landed drone
const PAD_RESULT = 8; // s the pad ring keeps showing the result
const HUB = 0.13; // rotor hub offset on both axes
const CAPSULE_Y = 0.058; // capsule cradle height on the drone's back

const C = (hex, k) => new THREE.Color(hex).multiplyScalar(k);
const COLOR = {
  standby: C(0x3a6fc4, 0.55),
  reserved: C(0x46d2ff, 0.7),
  transit: C(0x7f9cff, 2.0),
  running: C(0x46d2ff, 2.4),
  done: C(0x34d17a, 2.3),
  error: C(0xff4d5e, 2.3),
  stopped: C(0xa7b1c2, 1.3),
};
const RESULT_STATUS = new Set(['done', 'error', 'stopped']);

/** Pad i sits at this angle around the mast (x = cos, z = sin). */
export const padAngle = (i) => (i / DRONE_COUNT) * TAU + Math.PI / DRONE_COUNT;

function padPoint(i, y, out = new THREE.Vector3()) {
  const a = padAngle(i);
  return out.set(DOCK.x + Math.cos(a) * PAD_RING, y, DOCK.z + Math.sin(a) * PAD_RING);
}

function merged(list) {
  const geos = list.map((g) => {
    const n = g.index ? g.toNonIndexed() : g;
    for (const k of Object.keys(n.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') n.deleteAttribute(k);
    return n;
  });
  const out = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
  return out;
}

/** Drone parts in local space (+z forward, origin at the body centre). */
function droneGeometry() {
  const shell = [tf(sphere(0.1, 32, 16), [0, 0, 0], [0, 0, 0], [1, 0.38, 1.2])];
  const under = [];
  const hub = [];
  const led = [];
  const hubs = [];
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const yaw = Math.atan2(sx, sz);
    under.push(tf(box(0.024, 0.014, Math.hypot(HUB, HUB)), [(sx * HUB) / 2, 0.004, (sz * HUB) / 2], [0, yaw, 0]));
    hub.push(tf(cyl(0.019, 0.022, 0.03, 20), [sx * HUB, 0.012, sz * HUB]));
    under.push(tf(box(0.13, 0.003, 0.012), [sx * HUB, 0.03, sz * HUB], [0, yaw + 0.6, 0])); // prop at rest
    hubs.push(new THREE.Vector3(sx * HUB, 0.032, sz * HUB));
  }
  under.push(tf(cyl(0.07, 0.062, 0.024, 32), [0, -0.03, 0])); // battery belly
  for (const sx of [-1, 1]) {
    under.push(tf(box(0.012, 0.01, 0.2), [sx * 0.062, -0.066, 0])); // landing skids
    for (const sz of [-1, 1]) under.push(tf(box(0.008, 0.036, 0.008), [sx * 0.062, -0.047, sz * 0.06]));
  }
  for (const sz of [-1, 1]) under.push(tf(box(0.056, 0.012, 0.014), [0, 0.04, sz * 0.042])); // capsule cradle
  // Status lights: a ring around the waist and a light bar at the nose.
  led.push(tf(torus(0.102, 0.0042, 6, 64), [0, -0.004, 0], [Math.PI / 2, 0, 0], [1, 1.2, 1]));
  led.push(tf(box(0.05, 0.008, 0.006), [0, 0.006, 0.121]));
  return {
    shell: merged(shell),
    under: merged(under),
    hub: merged(hub),
    led: merged(led),
    rotor: tf(new THREE.CircleGeometry(0.075, 32), [0, 0, 0], [-Math.PI / 2, 0, 0]),
    capGlass: tf(new THREE.CapsuleGeometry(0.027, 0.085, 6, 16), [0, 0, 0], [Math.PI / 2, 0, 0]),
    capCore: tf(new THREE.CapsuleGeometry(0.015, 0.07, 4, 12), [0, 0, 0], [Math.PI / 2, 0, 0]),
    hubs,
  };
}

function rotorTexture() {
  return canvasTexture(64, 64, (g, w, h) => {
    const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(0.3, 'rgba(255,255,255,0.06)');
    grd.addColorStop(0.8, 'rgba(255,255,255,0.45)');
    grd.addColorStop(0.94, 'rgba(255,255,255,0.18)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.clearRect(0, 0, w, h);
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
  }, { anisotropy: 1 });
}

/** Floating status panel above the mast. */
function drawHolo(g, w, h, d) {
  g.clearRect(0, 0, w, h);
  roundRect(g, 3, 3, w - 6, h - 6, 18);
  g.fillStyle = 'rgba(5, 12, 24, 0.84)';
  g.fill();
  g.lineWidth = 2.5;
  g.strokeStyle = 'rgba(70, 210, 255, 0.75)';
  g.stroke();
  const info = MACHINE_INFO.dock;
  g.textBaseline = 'alphabetic';
  g.textAlign = 'left';
  g.font = `600 22px ${FONT_SANS}`;
  g.fillStyle = '#86a7c9';
  g.fillText(`${info.code} · ${info.zh}`, 22, 40);
  g.textAlign = 'right';
  g.font = `600 18px ${FONT_MONO}`;
  g.fillText('SUBAGENT DOCK', w - 22, 40);

  g.textAlign = 'left';
  const n = String(d.running);
  g.font = `700 74px ${FONT_MONO}`;
  g.fillStyle = d.running ? '#e8f0ff' : '#6f84a3';
  g.fillText(n, 22, 122);
  const nw = g.measureText(n).width;
  g.font = `700 28px ${FONT_SANS}`;
  g.fillStyle = d.running ? '#46d2ff' : '#7d90ab';
  g.fillText(d.running ? '运行中' : '待命', 36 + nw, 92);
  g.font = `600 18px ${FONT_MONO}`;
  g.fillStyle = '#9fb7d3';
  g.fillText(d.running ? 'AGENTS ACTIVE' : 'STANDBY', 36 + nw, 119);
  g.textAlign = 'right';
  g.font = `700 30px ${FONT_MONO}`;
  g.fillStyle = d.done ? '#34d17a' : '#5d7391';
  g.fillText(`✓ ${d.done}`, w - 22, 86);
  g.fillStyle = d.failed ? '#ff6b7a' : '#5d7391';
  g.fillText(`✗ ${d.failed}`, w - 22, 122);

  g.textAlign = 'left';
  const y = 172;
  if (d.wf) {
    const { name, phase, done, failed, agents, status } = d.wf;
    const head = `${status === 'running' ? '▶' : '■'} ${name}${phase ? ` · ${phase}` : ''}`;
    g.fillStyle = '#e8f0ff';
    fitText(g, head, w - 150, 23, 600, FONT_SANS);
    g.fillText(head, 22, y);
    g.textAlign = 'right';
    g.font = `600 22px ${FONT_MONO}`;
    g.fillStyle = '#9fb7d3';
    g.fillText(`${done + failed}/${agents}`, w - 22, y);
    const bx = 22;
    const by = y + 15;
    const bw = w - 44;
    const bh = 10;
    g.fillStyle = 'rgba(120, 150, 190, 0.25)';
    roundRect(g, bx, by, bw, bh, 5);
    g.fill();
    const fd = agents ? clamp(done / agents, 0, 1) : 0;
    const ff = agents ? clamp(failed / agents, 0, 1 - fd) : 0;
    if (fd > 0) {
      g.fillStyle = '#34d17a';
      g.fillRect(bx, by, bw * fd, bh);
    }
    if (ff > 0) {
      g.fillStyle = '#ff6b7a';
      g.fillRect(bx + bw * fd, by, bw * ff, bh);
    }
  } else {
    const text = d.last ? `最近 · ${d.last}` : '暂无子智能体任务 · NO AGENTS YET';
    g.fillStyle = d.last ? '#c9d6ea' : '#7d90ab';
    fitText(g, text, w - 44, 23, 600, FONT_SANS);
    g.fillText(text, 22, y);
  }
  if (d.overflow > 0) {
    g.textAlign = 'right';
    g.font = `700 20px ${FONT_MONO}`;
    g.fillStyle = '#ffc65c';
    g.fillText(`+${d.overflow} 排队 QUEUED`, w - 22, h - 18);
  }
}

/** Static deck: plinth, eight landing pads, the mast with its crown, the name console. */
function buildDeck(M, cyan) {
  const k = new Kit();
  k.add('rubber', tf(cyl(PLINTH_R - 0.05, PLINTH_R - 0.05, 0.02, 96), [0, 0.01, 0])); // shadow gap
  k.add('white', lathe([
    [0.001, 0.02], [PLINTH_R - 0.02, 0.02], [PLINTH_R, 0.04], [PLINTH_R, PLINTH_TOP - 0.025],
    [PLINTH_R - 0.025, PLINTH_TOP], [0.001, PLINTH_TOP],
  ], 128));
  // Inlaid centre disc and landing guide lines towards the pads.
  k.add('plastic', tf(cyl(0.62, 0.62, 0.006, 72), [0, PLINTH_TOP + 0.003, 0]));
  k.add('chrome', tf(torus(0.62, 0.005, 8, 112), [0, PLINTH_TOP + 0.003, 0], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < DRONE_COUNT; i++) {
    const a = padAngle(i);
    const yaw = Math.atan2(Math.cos(a), Math.sin(a));
    const at = (r, y) => [Math.cos(a) * r, y, Math.sin(a) * r];
    k.add('plastic', tf(box(0.012, 0.004, 0.36), at(0.83, PLINTH_TOP + 0.002), [0, yaw, 0]));
    // Pad: graphite stem, pearl-white disc with a dark landing target and charging contacts.
    k.add('graphite', tf(cyl(0.05, 0.065, PAD_TOP - PLINTH_TOP - 0.03, 24), at(PAD_RING, (PLINTH_TOP + PAD_TOP - 0.03) / 2)));
    k.add('white', tf(lathe([
      [0.001, PAD_TOP - 0.035], [PAD_R - 0.012, PAD_TOP - 0.035], [PAD_R, PAD_TOP - 0.024],
      [PAD_R, PAD_TOP - 0.008], [PAD_R - 0.012, PAD_TOP], [0.001, PAD_TOP],
    ], 48), at(PAD_RING, 0)));
    k.add('plastic', tf(cyl(0.15, 0.15, 0.003, 40), at(PAD_RING, PAD_TOP + 0.0015)));
    k.add('chrome', tf(torus(0.15, 0.003, 6, 48), at(PAD_RING, PAD_TOP + 0.002), [Math.PI / 2, 0, 0]));
    for (const s of [-1, 1]) {
      const off = [-Math.sin(a) * 0.062 * s, 0, Math.cos(a) * 0.062 * s];
      const p = at(PAD_RING, PAD_TOP + 0.005);
      k.add('chrome', tf(cyl(0.012, 0.012, 0.008, 12), [p[0] + off[0], p[1], p[2] + off[2]]));
    }
  }
  // Mast: flange, tapering ceramic column, graphite sleeve, crown with the holo emitter.
  k.add('white', lathe([
    [0.001, PLINTH_TOP], [0.24, PLINTH_TOP], [0.24, PLINTH_TOP + 0.05], [0.2, PLINTH_TOP + 0.075],
    [0.095, PLINTH_TOP + 0.11], [0.085, 1.0], [0.072, MAST_TOP - 0.09], [0.11, MAST_TOP - 0.05],
    [0.11, MAST_TOP], [0.001, MAST_TOP],
  ], 64));
  k.add('chrome', tf(torus(0.24, 0.005, 8, 72), [0, PLINTH_TOP + 0.05, 0], [Math.PI / 2, 0, 0]));
  k.add('graphite', tf(cyl(0.091, 0.093, 0.16, 48), [0, 0.86, 0]));
  k.add('chrome', tf(torus(0.112, 0.006, 8, 64), [0, MAST_TOP - 0.05, 0], [Math.PI / 2, 0, 0]));
  k.add('glass', tf(cyl(0.07, 0.07, 0.02, 40), [0, MAST_TOP + 0.01, 0]));
  // Name console at the front edge, facing the hall.
  const cz = PLINTH_R - 0.2;
  k.add('white', tf(rbox(0.52, 0.26, 0.14, 0.03, 2), [0, PLINTH_TOP + 0.13, cz], [-0.32, 0, 0]));
  k.add('graphite', tf(box(0.4, 0.08, 0.1), [0, PLINTH_TOP + 0.04, cz - 0.01]));
  const deck = k.build(M, { name: 'dock-deck' });

  const glow = new Kit();
  glow.add('led', tf(torus(PLINTH_R - 0.035, 0.005, 6, 192), [0, PLINTH_TOP + 0.001, 0], [Math.PI / 2, 0, 0]));
  glow.add('led', tf(cyl(0.086, 0.086, 0.03, 48, true), [0, 1.42, 0]));
  glow.add('led', tf(cyl(0.06, 0.06, 0.012, 32), [0, MAST_TOP + 0.002, 0]));
  const glowMesh = glow.build({ led: cyan }, { name: 'dock-glow', castShadow: false });

  const plate = nameplate(MACHINE_INFO.dock.zh, MACHINE_INFO.dock.en, MACHINE_INFO.dock.code, '#2fa8d8');
  const plateMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.124), plateMaterial(plate.tex, 0.2));
  // On the console's sloped front face: the console leans back by 0.32 rad, so its face centre
  // (local z = +0.07) sits at y + 0.07·sin 0.32, z + 0.07·cos 0.32; 2 mm in front of it.
  const lean = 0.32;
  const faceD = 0.072;
  plateMesh.position.set(0, PLINTH_TOP + 0.13 + Math.sin(lean) * faceD, cz + Math.cos(lean) * faceD);
  plateMesh.rotation.x = -lean;
  plateMesh.name = 'dock-plate';
  return { deck, glowMesh, plateMesh, plate };
}

function instanced(geo, mat, count, name) {
  const m = new THREE.InstancedMesh(geo, mat, count);
  m.name = name;
  m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  m.castShadow = false;
  m.receiveShadow = false;
  m.frustumCulled = false; // instances move around the whole hall
  return m;
}

/**
 * buildDock(M, { pickup }) → { root, hover, labelAnchor, sync(agents, workflows), reset(), busy(),
 * update(dt, t, camera), counts(), dispose() }. `pickup` is where drones collect their task
 * capsule (above the cobot station); without it they load the capsule on the pad.
 */
export function buildDock(M, { pickup = null } = {}) {
  const root = new THREE.Group();
  root.name = 'dock';
  root.position.copy(DOCK);

  const cyan = ledMaterial(0x46d2ff, 2.0);
  const { deck, glowMesh, plateMesh, plate } = buildDeck(M, cyan);
  // Camera solid: the deck with its mast (drones and the holo panel stay outside).
  const base = new THREE.Group();
  base.name = 'dock-base';
  base.userData.solid = 'dock';
  base.add(deck, glowMesh, plateMesh);
  root.add(base);

  // Pad status rings (one instanced mesh, colour per pad).
  const padLedMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const padLeds = new THREE.InstancedMesh(tf(torus(0.205, 0.0065, 6, 64), [0, 0, 0], [Math.PI / 2, 0, 0]), padLedMat, DRONE_COUNT);
  padLeds.name = 'dock-pad-leds';
  padLeds.castShadow = false;
  const _m = new THREE.Matrix4();
  for (let i = 0; i < DRONE_COUNT; i++) {
    const a = padAngle(i);
    _m.makeTranslation(Math.cos(a) * PAD_RING, PAD_TOP + 0.004, Math.sin(a) * PAD_RING);
    padLeds.setMatrixAt(i, _m);
    padLeds.setColorAt(i, COLOR.standby);
  }
  root.add(padLeds);

  // Holo panel above the mast; turns to face the camera.
  const holo = canvasTexture(HOLO_PX[0], HOLO_PX[1], null, { anisotropy: 8 });
  const holoMat = new THREE.MeshBasicMaterial({ map: holo.tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, name: 'dock-holo' });
  holoMat.color.setScalar(1.25);
  const holoPanel = new THREE.Mesh(new THREE.PlaneGeometry(HOLO_W, (HOLO_W * HOLO_PX[1]) / HOLO_PX[0]), holoMat);
  holoPanel.position.set(0, HOLO_Y, 0);
  holoPanel.renderOrder = 3;
  holoPanel.name = 'dock-holo';
  root.add(holoPanel);

  // Drones (world space, so they are not parented to the dock).
  const geo = droneGeometry();
  const rotorTex = rotorTexture();
  const mats = {
    rotor: new THREE.MeshBasicMaterial({ color: 0xe6edf5, map: rotorTex.tex, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide }),
    led: new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }),
    capGlass: fakeGlass({ color: 0xdfe9f5, opacity: 0.16, fresnel: 0.6 }),
    capCore: new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }),
  };
  const fleet = new THREE.Group();
  fleet.name = 'dock-drones';
  const parts = {
    shell: instanced(geo.shell, M.white, DRONE_COUNT, 'drone-shell'),
    under: instanced(geo.under, M.graphite, DRONE_COUNT, 'drone-frame'),
    hub: instanced(geo.hub, M.chrome, DRONE_COUNT, 'drone-hubs'),
    led: instanced(geo.led, mats.led, DRONE_COUNT, 'drone-leds'),
    rotor: instanced(geo.rotor, mats.rotor, DRONE_COUNT * 4, 'drone-rotors'),
    capGlass: instanced(geo.capGlass, mats.capGlass, DRONE_COUNT, 'drone-capsule'),
    capCore: instanced(geo.capCore, mats.capCore, DRONE_COUNT, 'drone-capsule-core'),
  };
  parts.rotor.renderOrder = 2;
  parts.capGlass.renderOrder = 2;
  for (const p of Object.values(parts)) fleet.add(p);

  // Data links from the crown to every working drone (one line-segment draw).
  const crown = new THREE.Vector3(DOCK.x, MAST_TOP + 0.03, DOCK.z);
  const linkPos = new Float32Array(DRONE_COUNT * 6);
  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPos, 3).setUsage(THREE.DynamicDrawUsage));
  const linkMat = new THREE.LineBasicMaterial({ color: COLOR.running.clone().multiplyScalar(0.7), transparent: true, opacity: 0.4, depthWrite: false, toneMapped: false });
  const links = new THREE.LineSegments(linkGeo, linkMat);
  links.name = 'dock-links';
  links.frustumCulled = false;
  fleet.add(links);

  const drones = Array.from({ length: DRONE_COUNT }, (_, i) => {
    const park = padPoint(i, PAD_TOP + PARK_LIFT);
    const a = padAngle(i);
    return {
      i,
      park,
      parkYaw: Math.atan2(Math.cos(a), Math.sin(a)),
      mode: 'docked',
      t: 0,
      agent: null,
      status: null,
      order: 0,
      viaPickup: false,
      snap: false,
      p: park.clone(),
      v: new THREE.Vector3(),
      acc: new THREE.Vector3(),
      target: new THREE.Vector3(),
      tv: new THREE.Vector3(), // target velocity (orbit slots move)
      orbit: null,
      yaw: Math.atan2(Math.cos(a), Math.sin(a)),
      pitch: 0,
      roll: 0,
      spin: 0,
      carry: 0,
      carryTo: 0,
      flash: 0,
      capColor: COLOR.running.clone(),
      freeSince: -i,
      landedAt: 0,
    };
  });

  const hover = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.9, 3.5, 24), new THREE.MeshBasicMaterial({ visible: false }));
  hover.position.set(0, 1.75, 0);
  hover.name = 'dock-hover';
  root.add(hover);

  let first = true;
  let now = 0;
  let orderSeq = 0;
  let overflow = 0;
  let agentsRef = [];
  let workflowsRef = [];
  let holoSig = '';
  let holoT = 1;
  const ringRot = { inner: 0, outer: 0.7 };

  function freeDrone() {
    let best = null;
    for (const d of drones) {
      if (d.mode !== 'docked') continue;
      if (!best || d.freeSince < best.freeSince) best = d;
    }
    if (best) return best;
    for (const d of drones) {
      if (d.mode !== 'result') continue;
      if (!best || d.landedAt < best.landedAt) best = d;
    }
    return best;
  }

  function assign(d, a, instant) {
    d.agent = { id: a.id, label: a.label || a.name || '', kind: a.kind, runId: a.runId || '' };
    d.status = 'running';
    d.order = ++orderSeq;
    d.capColor.copy(COLOR.running);
    d.t = 0;
    if (instant) {
      d.mode = 'work';
      d.snap = true;
      d.carry = d.carryTo = 1;
      d.spin = 1;
    } else {
      d.mode = 'launch';
      d.viaPickup = !!pickup;
      d.carryTo = pickup ? 0 : 1;
      if (!pickup) d.carry = 0;
    }
  }

  function finish(d, status, instant) {
    d.status = RESULT_STATUS.has(status) ? status : 'done';
    d.capColor.copy(COLOR[d.status]);
    d.t = 0;
    if (instant) {
      release(d);
      d.p.copy(d.park);
      d.v.set(0, 0, 0);
      d.yaw = d.parkYaw;
      d.spin = 0;
      return;
    }
    d.carryTo = 1;
    d.mode = d.mode === 'launch' && d.p.y < d.park.y + 0.3 ? 'land' : 'return';
  }

  function relaunch(d) {
    d.status = 'running';
    d.capColor.copy(COLOR.running);
    d.carryTo = 1;
    d.viaPickup = false;
    d.t = 0;
    d.mode = d.mode === 'return' ? 'toWork' : 'launch';
  }

  function release(d) {
    d.mode = 'docked';
    d.agent = null;
    d.status = null;
    d.carry = d.carryTo = 0;
    d.freeSince = now;
  }

  function sync(agents, workflows) {
    agentsRef = Array.isArray(agents) ? agents : [];
    workflowsRef = Array.isArray(workflows) ? workflows : [];
    const instant = first;
    first = false;
    const byId = new Map(agentsRef.map((a) => [a.id, a]));
    for (const d of drones) {
      if (!d.agent) continue;
      const a = byId.get(d.agent.id);
      if (a && a.status === 'running') {
        d.agent.label = a.label || a.name || d.agent.label;
        if (d.status !== 'running') relaunch(d);
        continue;
      }
      if (d.status === 'running') finish(d, a ? a.status : 'done', instant);
    }
    assignQueued(instant);
  }

  /** Give every running agent without a drone a free one; the rest wait (overflow). */
  function assignQueued(instant) {
    const flying = new Set();
    for (const d of drones) if (d.agent && d.status === 'running') flying.add(d.agent.id);
    overflow = 0;
    for (const a of agentsRef) {
      if (!a || a.status !== 'running' || flying.has(a.id)) continue;
      const d = freeDrone();
      if (!d) {
        overflow += 1;
        continue;
      }
      if (d.agent) release(d);
      assign(d, a, instant);
      flying.add(a.id);
    }
  }

  function reset() {
    for (const d of drones) {
      release(d);
      d.p.copy(d.park);
      d.v.set(0, 0, 0);
      d.yaw = d.parkYaw;
      d.pitch = d.roll = 0;
      d.spin = 0;
      d.flash = 0;
      d.landedAt = 0;
      d.freeSince = -d.i;
    }
    first = true;
    overflow = 0;
    agentsRef = [];
    workflowsRef = [];
    holoT = 1;
  }

  function counts() {
    let running = 0;
    let done = 0;
    let failed = 0;
    let stopped = 0;
    for (const a of agentsRef) {
      if (a.status === 'running') running += 1;
      else if (a.status === 'done') done += 1;
      else if (a.status === 'error') failed += 1;
      else if (a.status === 'stopped') stopped += 1;
    }
    let wf = null;
    for (let i = workflowsRef.length - 1; i >= 0; i--) {
      const w = workflowsRef[i];
      if (w.status === 'running') {
        wf = w;
        break;
      }
      if (!wf) wf = w;
    }
    let last = '';
    for (let i = agentsRef.length - 1; i >= 0 && !last; i--) {
      if (agentsRef[i].status === 'running') last = agentsRef[i].label || agentsRef[i].name || '';
    }
    if (!last && agentsRef.length) {
      const a = agentsRef[agentsRef.length - 1];
      last = a.label || a.name || '';
    }
    return { running, done, failed, stopped, overflow, wf, last };
  }

  function redrawHolo() {
    const d = counts();
    const wf = d.wf;
    const sig = `${d.running}|${d.done}|${d.failed}|${d.overflow}|${d.last}|${wf ? `${wf.runId}:${wf.status}:${wf.phase}:${wf.done}:${wf.failed}:${wf.agents}` : ''}`;
    if (sig === holoSig) return;
    holoSig = sig;
    holo.redraw((g, w, h) => drawHolo(g, w, h, d));
  }

  // ── Flight ────────────────────────────────────────────────
  const _v = new THREE.Vector3();
  const _dv = new THREE.Vector3();
  const _f = new THREE.Vector3();
  function orbitTargets(t) {
    for (const ring of ['inner', 'outer']) {
      const R = RINGS[ring];
      const list = drones
        .filter((d) => (d.mode === 'work' || d.mode === 'toWork') && ((d.agent && d.agent.kind === 'workflow') ? 'inner' : 'outer') === ring)
        .sort((a, b) => (a.agent.runId === b.agent.runId ? a.order - b.order : a.agent.runId < b.agent.runId ? -1 : 1));
      const n = list.length;
      list.forEach((d, k) => {
        const ang = ringRot[ring] + (TAU * k) / Math.max(1, n);
        const bob = t * 1.5 + d.i * 1.7;
        const y = R.y + (k % 2 ? 0.12 : 0) + 0.05 * Math.sin(bob);
        d.orbit = d.orbit || new THREE.Vector3();
        d.orbit.set(DOCK.x + Math.cos(ang) * R.r, y, DOCK.z + Math.sin(ang) * R.r);
        // Slot velocity, fed forward into the spring so the drone does not trail behind its slot.
        d.tv.set(-Math.sin(ang) * R.r * R.speed, 0.075 * Math.cos(bob), Math.cos(ang) * R.r * R.speed);
      });
    }
  }

  /**
   * Critically damped spring toward d.target (moving at d.tv), speed-limited; records the
   * acceleration for banking.
   */
  function fly(d, dt, omega) {
    const steps = Math.max(1, Math.ceil(dt / 0.02));
    const h = dt / steps;
    d.acc.set(0, 0, 0);
    for (let s = 0; s < steps; s++) {
      _dv.subVectors(d.tv, d.v).multiplyScalar(2 * omega);
      _v.subVectors(d.target, d.p).multiplyScalar(omega * omega).add(_dv);
      d.v.addScaledVector(_v, h);
      const sp = d.v.length();
      if (sp > MAX_SPEED) d.v.multiplyScalar(MAX_SPEED / sp);
      d.p.addScaledVector(d.v, h);
      d.acc.add(_v);
    }
    d.acc.multiplyScalar(1 / steps);
  }

  function step(d, dt, t) {
    d.t += dt;
    let omega = 2.6;
    if (d.mode !== 'work' && d.mode !== 'toWork') d.tv.set(0, 0, 0);
    switch (d.mode) {
      case 'docked':
      case 'result':
        d.target.copy(d.park);
        break;
      case 'launch':
        d.target.set(d.park.x, CRUISE_Y, d.park.z);
        if (d.p.y > CRUISE_Y - 0.3) {
          d.mode = d.viaPickup ? 'toPickup' : 'toWork';
          d.t = 0;
        }
        break;
      case 'toPickup': {
        const far = Math.hypot(d.p.x - pickup.x, d.p.z - pickup.z) > 0.7;
        d.target.set(pickup.x, far ? CRUISE_Y : pickup.y, pickup.z);
        if (!far && d.p.distanceTo(pickup) < 0.14) {
          d.mode = 'pickup';
          d.t = 0;
        }
        break;
      }
      case 'pickup':
        d.target.copy(pickup);
        omega = 3.2;
        if (d.t > 0.25 && d.carryTo < 1) {
          d.carryTo = 1;
          d.flash = 1;
        }
        if (d.t > 0.9) {
          d.mode = 'toWork';
          d.t = 0;
        }
        break;
      case 'toWork':
      case 'work':
        // A drone that switched to toWork during this frame gets its orbit slot next frame.
        if (d.orbit) d.target.copy(d.orbit);
        omega = d.mode === 'work' ? 3.0 : 2.6;
        if (d.snap) {
          d.p.copy(d.target);
          d.v.set(0, 0, 0);
          d.snap = false;
        }
        if (d.mode === 'toWork' && d.p.distanceTo(d.target) < 0.3) {
          d.mode = 'work';
          d.t = 0;
        }
        break;
      case 'return':
        d.target.set(d.park.x, d.park.y + 0.9, d.park.z);
        if (d.p.distanceTo(d.target) < 0.2) {
          d.mode = 'land';
          d.t = 0;
        }
        break;
      case 'land':
        d.target.copy(d.park);
        omega = 2.2;
        if (d.p.distanceTo(d.park) < 0.012 && d.v.length() < 0.08) {
          d.mode = 'result';
          d.t = 0;
          d.landedAt = now;
          d.p.copy(d.park);
          d.v.set(0, 0, 0);
        }
        break;
      default:
        break;
    }
    if (d.mode === 'docked' || d.mode === 'result') {
      // Parked: settle onto the pad without the spring overshooting into it.
      d.p.lerp(d.park, 1 - Math.exp(-10 * dt));
      d.v.set(0, 0, 0);
      d.acc.set(0, 0, 0);
    } else {
      fly(d, dt, omega);
      // Never sink into the pad while landing.
      if (Math.hypot(d.p.x - d.park.x, d.p.z - d.park.z) < PAD_R + 0.1 && d.p.y < d.park.y) d.p.y = d.park.y;
    }
    if (d.mode === 'result') {
      if (d.t > RESULT_HOLD) d.carryTo = 0;
      if (d.t > PAD_RESULT) release(d);
    }
    // Attitude: yaw along the horizontal velocity, bank into the acceleration.
    const hs = Math.hypot(d.v.x, d.v.z);
    const parked = d.mode === 'docked' || d.mode === 'result' || d.mode === 'land';
    const yawTo = hs > 0.25 ? Math.atan2(d.v.x, d.v.z) : parked ? d.parkYaw : d.yaw;
    d.yaw = angleLerp(d.yaw, yawTo, 1 - Math.exp(-(parked ? 3 : 4.5) * dt));
    _f.set(Math.sin(d.yaw), 0, Math.cos(d.yaw));
    const af = d.acc.x * _f.x + d.acc.z * _f.z;
    const ar = d.acc.x * _f.z - d.acc.z * _f.x;
    d.pitch = damp(d.pitch, clamp(af * 0.045, -0.32, 0.32), 6, dt);
    d.roll = damp(d.roll, clamp(-ar * 0.045, -0.32, 0.32), 6, dt);
    d.spin = damp(d.spin, d.mode === 'docked' || d.mode === 'result' ? 0 : 1, 4, dt);
    d.carry = damp(d.carry, d.carryTo, d.carryTo > d.carry ? 7 : 4, dt);
    if (d.carry < 0.002 && d.carryTo === 0) d.carry = 0;
    d.flash = Math.max(0, d.flash - dt * 2.2);
  }

  // ── Instance buffers ──────────────────────────────────────
  const _q = new THREE.Quaternion();
  const _qi = new THREE.Quaternion();
  const _e = new THREE.Euler(0, 0, 0, 'YXZ');
  const _one = new THREE.Vector3(1, 1, 1);
  const _s = new THREE.Vector3();
  const _c = new THREE.Vector3(0, CAPSULE_Y, 0);
  const _l = new THREE.Matrix4();
  const _w = new THREE.Matrix4();
  const _col = new THREE.Color();

  function ledColor(d, t, out) {
    switch (d.mode) {
      case 'docked':
        return out.copy(COLOR.standby);
      case 'work':
        return out.copy(COLOR.running).multiplyScalar(0.85 + 0.25 * Math.sin(t * 4 + d.i));
      case 'launch':
      case 'toPickup':
      case 'pickup':
      case 'toWork':
        return out.copy(d.status === 'running' ? COLOR.transit : COLOR[d.status] || COLOR.transit);
      default:
        return out.copy(COLOR[d.status] || COLOR.standby);
    }
  }

  function padColor(d, t, out) {
    if (d.mode === 'result') {
      const k = clamp(1 - d.t / PAD_RESULT, 0, 1);
      return out.copy(COLOR[d.status] || COLOR.done).multiplyScalar(0.35 + 0.65 * k);
    }
    if (d.mode === 'docked') return out.copy(COLOR.standby).multiplyScalar(0.85 + 0.15 * Math.sin(t * 0.8 + d.i * 0.7));
    if (d.mode === 'launch' && d.t < 1.2) return out.copy(COLOR.running);
    return out.copy(COLOR.reserved);
  }

  function writeBuffers(t) {
    for (const d of drones) {
      _e.set(d.pitch, d.yaw, d.roll, 'YXZ');
      _q.setFromEuler(_e);
      _w.compose(d.p, _q, _one);
      parts.shell.setMatrixAt(d.i, _w);
      parts.under.setMatrixAt(d.i, _w);
      parts.hub.setMatrixAt(d.i, _w);
      parts.led.setMatrixAt(d.i, _w);
      const sp = Math.max(1e-4, d.spin);
      for (let r = 0; r < 4; r++) {
        _l.compose(geo.hubs[r], _qi, _s.set(sp, 1, sp));
        _l.premultiply(_w);
        parts.rotor.setMatrixAt(d.i * 4 + r, _l);
      }
      _l.compose(_c, _qi, _s.setScalar(Math.max(1e-4, d.carry)));
      _l.premultiply(_w);
      parts.capGlass.setMatrixAt(d.i, _l);
      parts.capCore.setMatrixAt(d.i, _l);
      parts.led.setColorAt(d.i, ledColor(d, t, _col));
      parts.capCore.setColorAt(d.i, _col.copy(d.capColor).multiplyScalar(1 + 2.5 * d.flash));
      padLeds.setColorAt(d.i, padColor(d, t, _col));
      const o = d.i * 6;
      if (d.mode === 'work' || d.mode === 'toWork') {
        linkPos[o] = crown.x;
        linkPos[o + 1] = crown.y;
        linkPos[o + 2] = crown.z;
        linkPos[o + 3] = d.p.x;
        linkPos[o + 4] = d.p.y - 0.03;
        linkPos[o + 5] = d.p.z;
      } else {
        for (let k = 0; k < 6; k++) linkPos[o + k] = crown.getComponent(k % 3);
      }
    }
    for (const p of Object.values(parts)) {
      p.instanceMatrix.needsUpdate = true;
      if (p.instanceColor) p.instanceColor.needsUpdate = true;
    }
    padLeds.instanceColor.needsUpdate = true;
    linkGeo.attributes.position.needsUpdate = true;
  }

  // Seed every colour attribute before the first render so the shaders compile with it.
  for (const d of drones) {
    parts.led.setColorAt(d.i, COLOR.standby);
    parts.capCore.setColorAt(d.i, COLOR.running);
  }
  writeBuffers(0);

  const moving = () => drones.some((d) => d.mode !== 'docked' && !(d.mode === 'result' && d.carry === 0 && d.carryTo === 0));

  return {
    root,
    fleet,
    hover: [{ id: 'dock', object: hover }],
    labelAnchor: new THREE.Vector3(DOCK.x, 3.75, DOCK.z),
    sync,
    reset,
    counts,
    /** Drone poses for tests: [{ mode, agent, status, position }]. */
    drones: () => drones.map((d) => ({ mode: d.mode, agent: d.agent ? d.agent.id : null, status: d.status, position: d.p.clone(), carry: d.carry })),
    busy: () => moving(),
    update(dt, t, camera) {
      const h = Math.min(Math.max(dt, 0), 0.1);
      now += h;
      ringRot.inner += RINGS.inner.speed * h;
      ringRot.outer += RINGS.outer.speed * h;
      // Queued agents take the next drone that lands.
      if (overflow > 0 && drones.some((d) => d.mode === 'docked' || d.mode === 'result')) assignQueued(false);
      orbitTargets(t);
      for (const d of drones) step(d, h, t);
      // Pad rings breathe slowly even while everything is parked, so the buffers are always written.
      writeBuffers(t);
      holoT += h;
      if (holoT >= 0.25) {
        holoT = 0;
        redrawHolo();
      }
      if (camera) {
        const yaw = Math.atan2(camera.position.x - DOCK.x, camera.position.z - DOCK.z);
        holoPanel.rotation.y = angleLerp(holoPanel.rotation.y, yaw, 1 - Math.exp(-5 * h));
      }
      const pulse = 0.35 + 0.1 * Math.sin(t * 3.1);
      linkMat.opacity = pulse;
    },
    dispose() {
      for (const p of Object.values(parts)) p.dispose();
      padLeds.dispose();
      for (const g of [geo.shell, geo.under, geo.hub, geo.led, geo.rotor, geo.capGlass, geo.capCore]) g.dispose();
      for (const m of Object.values(mats)) m.dispose();
      rotorTex.tex.dispose();
      holo.tex.dispose();
      plate.tex.dispose();
      linkGeo.dispose();
      linkMat.dispose();
      cyan.dispose();
      padLedMat.dispose();
    },
  };
}
