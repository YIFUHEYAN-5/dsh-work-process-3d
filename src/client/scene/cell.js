// Wafer-handling cell: central transfer robot, load/unload locks, port pedestals and air tracks.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, box, lathe, torus, tf, clamp, DEG, TAU } from './util.js';
import { ledMaterial, plateMaterial } from './materials.js';
import { nameplate } from './displays.js';
import { blobShadow } from './environment.js';
import { MACHINE_INFO } from '../../model/stations.js';

export const HUB = new THREE.Vector3(2.6, 0, -1.0);
export const RING_R = 3.1;
export const PORT_R = 2.35;
export const RETRACT_R = 0.75;
export const WAFER_Y = 0.922;
export const LIFT = 0.012;
export const L1 = 1.0;
export const L2 = 1.0;
export const FORK = 0.4;
export const LOCK_THETA = 235 * DEG;
export const OUT_THETA = 305 * DEG;
export const TRACK_Z = 1.54;

/** Point on a circle around the hub; theta uses x = cos, z = -sin so 90° is the back of the cell. */
export function ringPos(theta, r, y = 0, out = new THREE.Vector3()) {
  return out.set(HUB.x + r * Math.cos(theta), y, HUB.z - r * Math.sin(theta));
}
/** rotation.y that turns a part's local +Z towards the hub. */
export const yawFacingHub = (theta) => Math.atan2(-Math.cos(theta), Math.sin(theta));

/** Port pedestal with lift pins and a status ring; local origin on the floor. */
export function buildPedestal(M) {
  const g = group('pedestal');
  const k = new Kit();
  k.add('graphite', tf(cyl(0.15, 0.17, 0.04, 40), [0, 0.02, 0]));
  k.add('alu', tf(cyl(0.055, 0.055, 0.78, 28), [0, 0.43, 0]));
  k.add('aluDark', tf(cyl(0.12, 0.1, 0.03, 48), [0, 0.835, 0]));
  k.add('chrome', tf(torus(0.115, 0.006, 8, 48), [0, 0.851, 0], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + 0.3;
    k.add('ceramic', tf(cyl(0.006, 0.006, 0.068, 10), [Math.cos(a) * 0.075, 0.884, Math.sin(a) * 0.075]));
  }
  g.add(k.build(M, { name: 'pedestal' }));
  const led = ledMaterial(0x4d7bff, 0.25);
  g.add(mesh(torus(0.128, 0.009, 8, 56), led, [0, 0.84, 0], [Math.PI / 2, 0, 0], null, { cast: false }));
  return { root: g, led };
}

// ---------------------------------------------------------------- robot
function buildRobot(M) {
  const root = group('robot', [HUB.x, 0, HUB.z]);
  const k = new Kit();
  k.add('graphite', lathe([[0.001, 0], [1.14, 0], [1.2, 0.03], [1.2, 0.6], [1.17, 0.64], [0.001, 0.64]], 96));
  k.add('rubber', tf(cyl(1.205, 1.205, 0.05, 96, true), [0, 0.03, 0]));
  k.add('alu', tf(cyl(1.15, 1.15, 0.05, 96), [0, 0.665, 0]));
  k.add('aluDark', tf(cyl(0.42, 0.44, 0.02, 64), [0, 0.7, 0]));
  k.add('white', tf(cyl(0.3, 0.32, 0.07, 64), [0, 0.745, 0]));
  k.add('chrome', tf(torus(0.31, 0.008, 8, 64), [0, 0.712, 0], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    k.add('chrome', tf(cyl(0.014, 0.014, 0.012, 6), [Math.cos(a) * 0.38, 0.715, Math.sin(a) * 0.38]));
  }
  root.add(k.build(M, { name: 'robot-base' }));
  const ring = ledMaterial(0x4d7bff, 1.4);
  root.add(mesh(torus(1.185, 0.01, 8, 128), ring, [0, 0.62, 0], [Math.PI / 2, 0, 0], null, { cast: false }));
  const plate = nameplate(MACHINE_INFO.robot.zh, MACHINE_INFO.robot.en, MACHINE_INFO.robot.code);
  root.add(mesh(new THREE.PlaneGeometry(0.62, 0.174), plateMaterial(plate.tex, 0.35), [0, 0.38, 1.205], null, null, { cast: false }));

  const arm = group('arm');
  root.add(arm);
  const link1 = group('link1');
  arm.add(link1);
  const k1 = new Kit();
  k1.add('white', tf(rbox(1.16, 0.06, 0.17, 0.03), [0.5, 0.81, 0]));
  k1.add('chrome', tf(cyl(0.09, 0.09, 0.066, 40), [0, 0.81, 0]));
  k1.add('aluDark', tf(cyl(0.075, 0.075, 0.07, 40), [1.0, 0.81, 0]));
  k1.add('graphite', tf(rbox(0.6, 0.008, 0.08, 0.004), [0.5, 0.842, 0]));
  link1.add(k1.build(M, { name: 'link1' }));
  const link2 = group('link2', [L1, 0, 0]);
  link1.add(link2);
  const k2 = new Kit();
  k2.add('white', tf(rbox(1.12, 0.05, 0.13, 0.025), [0.5, 0.87, 0]));
  k2.add('chrome', tf(cyl(0.07, 0.07, 0.054, 40), [0, 0.87, 0]));
  k2.add('chrome', tf(cyl(0.055, 0.055, 0.056, 32), [1.0, 0.87, 0]));
  link2.add(k2.build(M, { name: 'link2' }));
  const fork = group('fork', [L2, 0, 0]);
  link2.add(fork);
  const k3 = new Kit();
  k3.add('aluDark', tf(cyl(0.05, 0.05, 0.012, 32), [0, 0.9, 0]));
  k3.add('ceramic', tf(rbox(0.24, 0.012, 0.085, 0.006), [0.12, 0.911, 0]));
  k3.add('ceramic', tf(rbox(0.07, 0.012, 0.22, 0.006), [0.25, 0.911, 0]));
  for (const z of [-0.08, 0.08]) k3.add('ceramic', tf(rbox(0.33, 0.012, 0.045, 0.006), [0.42, 0.911, z]));
  k3.add('rubber', ...[-0.08, 0.08].map((z) => tf(cyl(0.008, 0.008, 0.004, 10), [0.5, 0.918, z])));
  fork.add(k3.build(M, { name: 'fork', castShadow: true }));
  const forkLed = ledMaterial(0x4d7bff, 0.8);
  fork.add(mesh(box(0.06, 0.004, 0.01), forkLed, [0.08, 0.918, 0], null, null, { cast: false }));

  const pose = { yaw: 270 * DEG, reach: RETRACT_R, lift: 0 };
  const anchor = new THREE.Vector3();
  function apply() {
    const d = clamp(pose.reach - FORK, 0.02, L1 + L2 - 1e-4);
    const a = Math.acos(d / (L1 + L2));
    link1.rotation.y = pose.yaw + a;
    link2.rotation.y = -2 * a;
    fork.rotation.y = a;
    arm.position.y = pose.lift;
  }
  apply();

  return {
    root,
    pose,
    setPose(yaw, reach, lift) {
      pose.yaw = yaw;
      pose.reach = reach;
      pose.lift = lift;
      apply();
    },
    /** World position of a wafer carried on the fork. */
    carryPoint(out = anchor) {
      root.updateMatrixWorld(true);
      out.set(FORK, 0, 0);
      fork.localToWorld(out);
      out.y = 0.921 + pose.lift;
      return out;
    },
    setBusy(on) {
      forkLed.emissiveIntensity = on ? 3 : 0.8;
      ring.emissiveIntensity = on ? 2.2 : 1.4;
    },
    hover: { id: 'robot', object: root },
  };
}

// ---------------------------------------------------------------- locks
/** World-aligned chamber with a slit door on the track side and one on the hub side. */
function buildChamber(M, { center, side, zh, en, code, hubDoorX }) {
  const root = group(`chamber-${code}`, [center.x, 0, center.z]);
  const k = new Kit();
  k.add('white', tf(rbox(0.8, 0.8, 0.8, 0.03), [0, 0.42, 0]));
  k.add('rubber', tf(rbox(0.78, 0.04, 0.78, 0.01), [0, 0.02, 0]));
  k.add('aluDark', tf(rbox(0.84, 0.04, 0.84, 0.012), [0, 0.84, 0]));
  for (const x of [-0.4, 0.4]) for (const z of [-0.4, 0.4]) k.add('aluDark', tf(box(0.04, 0.3, 0.04), [x, 1.0, z]));
  k.add('aluDark', tf(box(0.84, 0.03, 0.04), [0, 1.15, 0.4]), tf(box(0.84, 0.03, 0.04), [0, 1.15, -0.4]));
  k.add('aluDark', tf(box(0.04, 0.03, 0.84), [0.4, 1.15, 0]), tf(box(0.04, 0.03, 0.84), [-0.4, 1.15, 0]));
  // Internal stage.
  k.add('aluDark', tf(cyl(0.1, 0.1, 0.03, 32), [0, 0.875, 0]));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    k.add('ceramic', tf(cyl(0.005, 0.005, 0.03, 8), [Math.cos(a) * 0.06, 0.903, Math.sin(a) * 0.06]));
  }
  // Door frames (track side at x = side * 0.4, hub side at z = -0.4).
  k.add('graphite', tf(box(0.05, 0.2, 0.5), [side * 0.42, 0.95, 0]));
  k.add('graphite', tf(box(0.5, 0.2, 0.05), [hubDoorX, 0.95, -0.42]));
  // Vacuum gauge and valve block.
  k.add('steel', tf(cyl(0.035, 0.035, 0.16, 20), [-side * 0.25, 1.24, 0.25]));
  k.add('chrome', tf(cyl(0.05, 0.05, 0.02, 24), [-side * 0.25, 1.33, 0.25]));
  root.add(k.build(M, { name: 'chamber' }));

  // Glass on the faces without doors, plus the lid.
  const glassFaces = [
    tf(new THREE.PlaneGeometry(0.76, 0.27), [0, 1.0, 0.4]),
    tf(new THREE.PlaneGeometry(0.76, 0.27), [-side * 0.4, 1.0, 0], [0, Math.PI / 2, 0]),
    tf(new THREE.PlaneGeometry(0.76, 0.76), [0, 1.155, 0], [-Math.PI / 2, 0, 0]),
  ];
  const gk = new Kit().add('glass', glassFaces);
  root.add(gk.build(M, { name: 'chamber-glass', castShadow: false }));
  const trackDoor = mesh(rbox(0.03, 0.12, 0.42, 0.01), M.graphite, [side * 0.45, 0.95, 0]);
  const hubDoor = mesh(rbox(0.42, 0.12, 0.03, 0.01), M.graphite, [hubDoorX, 0.95, -0.45]);
  root.add(trackDoor, hubDoor);
  const plate = nameplate(zh, en, code);
  root.add(mesh(new THREE.PlaneGeometry(0.56, 0.158), plateMaterial(plate.tex, 0.35), [0, 0.62, 0.402], null, null, { cast: false }));
  const led = ledMaterial(0x34d17a, 0.6);
  root.add(mesh(box(0.6, 0.016, 0.01), led, [0, 0.79, 0.403], null, null, { cast: false }));
  const doors = { track: 0, hub: 0 };
  return {
    root,
    led,
    setDoors(track, hub) {
      doors.track = track;
      doors.hub = hub;
      trackDoor.position.y = 0.95 + track * 0.13;
      hubDoor.position.y = 0.95 + hub * 0.13;
    },
    doors,
  };
}

/** Air-track rail from a to b (world, y = rail top). */
function airTrack(M, kit, a, b, width = 0.36) {
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const len = Math.hypot(dx, dz);
  const yaw = Math.atan2(-dz, dx);
  const mid = [(a.x + b.x) / 2, 0, (a.z + b.z) / 2];
  kit.add('alu', tf(rbox(len, 0.04, width, 0.01), [mid[0], 0.88, mid[2]], [0, yaw, 0]));
  kit.add('grille', tf(box(Math.max(0.01, len - 0.06), 0.002, 0.22), [mid[0], 0.901, mid[2]], [0, yaw, 0]));
  // Side guides.
  for (const s of [-1, 1]) {
    const g = box(len, 0.024, 0.014);
    g.translate(0, 0, s * (width / 2 - 0.007));
    g.rotateY(yaw);
    g.translate(mid[0], 0.912, mid[2]);
    kit.add('steel', g);
  }
  // Legs every ~0.9 units.
  const n = Math.max(2, Math.round(len / 0.9) + 1);
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0.5 : 0.06 + (0.88 * i) / (n - 1);
    const x = a.x + dx * t;
    const z = a.z + dz * t;
    kit.add('aluDark', tf(box(0.05, 0.84, 0.05), [x, 0.43, z], [0, yaw, 0]));
    kit.add('graphite', tf(box(0.16, 0.02, 0.16), [x, 0.01, z], [0, yaw, 0]));
  }
  return { len, yaw, mid };
}

export function buildCell(M) {
  const root = group('cell');
  const robot = buildRobot(M);
  root.add(robot.root);
  root.add(blobShadow(M, 2.9, 2.9, [HUB.x, 0, HUB.z], 0.6));

  const lockCenter = ringPos(LOCK_THETA, RING_R);
  const outCenter = ringPos(OUT_THETA, RING_R);
  const lock = buildChamber(M, { center: lockCenter, side: -1, ...MACHINE_INFO.lock, hubDoorX: 0.18 });
  const unload = buildChamber(M, { center: outCenter, side: 1, ...MACHINE_INFO.unload, hubDoorX: -0.18 });
  root.add(lock.root, unload.root);
  root.add(blobShadow(M, 1.3, 1.3, [lockCenter.x, 0, lockCenter.z], 0.5));
  root.add(blobShadow(M, 1.3, 1.3, [outCenter.x, 0, outCenter.z], 0.5));

  const lockPort = ringPos(LOCK_THETA, PORT_R, WAFER_Y);
  const outPort = ringPos(OUT_THETA, PORT_R, WAFER_Y);
  const pedLock = buildPedestal(M);
  pedLock.root.position.set(lockPort.x, 0, lockPort.z);
  const pedOut = buildPedestal(M);
  pedOut.root.position.set(outPort.x, 0, outPort.z);
  root.add(pedLock.root, pedOut.root);

  // Air tracks.
  const kit = new Kit();
  const inStart = new THREE.Vector3(-1.83, 0, TRACK_Z);
  const inEnd = new THREE.Vector3(lockCenter.x - 0.42, 0, TRACK_Z);
  const outStart = new THREE.Vector3(outCenter.x + 0.42, 0, TRACK_Z);
  const outEnd = new THREE.Vector3(7.18, 0, TRACK_Z);
  airTrack(M, kit, inStart, inEnd);
  airTrack(M, kit, outStart, outEnd);
  // Short bridges from the hub-side doors to the pedestals.
  const bridge = (from, to) => {
    const dx = to.x - from.x;
    const dz = to.z - from.z;
    const len = Math.hypot(dx, dz);
    kit.add('aluDark', tf(rbox(len, 0.02, 0.2, 0.006), [(from.x + to.x) / 2, 0.892, (from.z + to.z) / 2], [0, Math.atan2(-dz, dx), 0]));
  };
  bridge(new THREE.Vector3(lockCenter.x + 0.18, 0, lockCenter.z - 0.44), new THREE.Vector3(lockPort.x - 0.06, 0, lockPort.z + 0.1));
  bridge(new THREE.Vector3(outCenter.x - 0.18, 0, outCenter.z - 0.44), new THREE.Vector3(outPort.x + 0.06, 0, outPort.z + 0.1));
  root.add(kit.build(M, { name: 'tracks' }));
  const trackLed = ledMaterial(0x4d7bff, 1.2);
  const ledGeo = [];
  for (const [a, b] of [[inStart, inEnd], [outStart, outEnd]]) {
    const len = b.x - a.x;
    ledGeo.push(tf(box(len, 0.008, 0.008), [(a.x + b.x) / 2, 0.858, TRACK_Z + 0.185]));
  }
  root.add(new Kit().add('led', ledGeo).build({ led: trackLed }, { name: 'track-led', castShadow: false }));
  root.add(blobShadow(M, inEnd.x - inStart.x + 0.4, 0.7, [(inStart.x + inEnd.x) / 2, 0, TRACK_Z], 0.4));
  root.add(blobShadow(M, outEnd.x - outStart.x + 0.4, 0.7, [(outStart.x + outEnd.x) / 2, 0, TRACK_Z], 0.4));

  // Hover proxies for the locks.
  const hidden = new THREE.MeshBasicMaterial({ visible: false });
  const proxy = (id, c) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.25, 0.9), hidden);
    m.position.set(c.x, 0.62, c.z);
    m.userData.hoverId = id;
    root.add(m);
    return { id, object: m };
  };

  return {
    root,
    robot,
    lock,
    unload,
    pedestals: { lock: pedLock, out: pedOut },
    points: {
      dispenser: new THREE.Vector3(-1.95, WAFER_Y, TRACK_Z),
      lockCenter: new THREE.Vector3(lockCenter.x, WAFER_Y, lockCenter.z),
      lockPort,
      outPort,
      outCenter: new THREE.Vector3(outCenter.x, WAFER_Y, outCenter.z),
      trackEnd: new THREE.Vector3(outEnd.x - 0.08, WAFER_Y, TRACK_Z),
    },
    trackLed,
    hover: [
      { id: 'robot', object: robot.root },
      proxy('lock', lockCenter),
      proxy('unload', outCenter),
    ],
    anchors: {
      robot: new THREE.Vector3(HUB.x, 1.4, HUB.z),
      lock: new THREE.Vector3(lockCenter.x, 1.45, lockCenter.z),
      unload: new THREE.Vector3(outCenter.x, 1.45, outCenter.z),
    },
  };
}
