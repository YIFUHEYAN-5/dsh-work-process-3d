// Wafer-handling cell: central transfer robot, load/unload locks, port pedestals and air tracks.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, box, lathe, torus, tf, clamp, pipeGeometry, canvasTexture, FONT_SANS, FONT_MONO, DEG, TAU } from './util.js';
import { ledMaterial, plateMaterial, fakeGlass } from './materials.js';
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
// Heights of the robot parts. The arm group moves by pose.lift (−0.006 … +0.132 while stacking),
// so the lowest arm part (link 1, 0.58 + lift) always clears the static drum top.
export const ROBOT = {
  deckY: 0.43, // titanium deck on top of the ceramic plinth
  drumTop: 0.565, // static drum the lift column rises from
  link1: { y: 0.58, h: 0.14, r1: 0.16, r2: 0.135, bevel: 0.022 },
  link2: { y: 0.735, h: 0.12, r1: 0.125, r2: 0.11, bevel: 0.018 },
  forkY: 0.905, // carbon fork plate 0.905–0.917, just under a wafer resting at 0.919
};

/** Status shown on the strips and the holo panel. */
const ROBOT_STATUS = {
  idle: { zh: '待机', en: 'IDLE', color: 0x46d2ff, css: '#46d2ff' },
  home: { zh: '归位', en: 'HOMING', color: 0x3f7bff, css: '#86a8ff' },
  deliver: { zh: '上料', en: 'LOAD', color: 0x3f7bff, css: '#86a8ff' },
  collect: { zh: '下料', en: 'UNLOAD', color: 0x3f7bff, css: '#86a8ff' },
};
const CARRY = {
  raw: { zh: '待加工', en: 'RAW', css: '#c9d3e0' },
  normal: { zh: '已加工', en: 'DONE', css: '#8fb8ff' },
  gold: { zh: '产出文件', en: 'FILE', css: '#ffc56a', color: 0xffc56a },
  bad: { zh: '失败', en: 'FAILED', css: '#ff6b6b', color: 0xff4d4d },
};

/** Tangent geometry of the hull of two circles: r1 at x = 0, r2 at x = len. */
function hullTangent(len, r1, r2) {
  const phi = Math.asin((r1 - r2) / len);
  return { phi, t1: [r1 * Math.sin(phi), r1 * Math.cos(phi)], t2: [len + r2 * Math.sin(phi), r2 * Math.cos(phi)] };
}

/**
 * Link body: the hull of a circle of radius r1 at x = 0 and r2 at x = len, extruded upward from
 * y0 by h with rounded (bevelled) edges. The side walls end up exactly on the r1/r2 hull.
 */
function linkGeometry(len, r1, r2, y0, h, bevel) {
  const a = r1 - bevel;
  const b = r2 - bevel;
  const { phi, t1 } = hullTangent(len, a, b);
  const top = Math.PI / 2 - phi;
  const shape = new THREE.Shape();
  shape.moveTo(t1[0], t1[1]);
  shape.absarc(len, 0, b, top, -top, true); // far end, through +x
  shape.absarc(0, 0, a, -top, top, true); // near end, through −x
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: h - 2 * bevel,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 28,
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, y0 + bevel, 0);
  return geo;
}

/** A thin box lying against one side wall of a link hull of length len, centred at x = xc, height yc. */
function sideBox(w, h, d, xc, yc, link, len, side, out) {
  const { t1, t2 } = hullTangent(len, link.r1, link.r2);
  const slope = (t2[1] - t1[1]) / (t2[0] - t1[0]);
  const half = t1[1] + (xc - t1[0]) * slope;
  return tf(box(w, h, d), [xc, yc, side * (half + out)], [0, -Math.atan(side * slope), 0]);
}

/** Carbon-fibre Y fork, flat in the fork group's x–z plane; the wafer centre sits at x = FORK. */
function forkGeometry() {
  const s = new THREE.Shape();
  const nw = 0.04; // neck half width
  s.moveTo(0, -nw);
  s.lineTo(0.16, -nw);
  s.quadraticCurveTo(0.21, -nw, 0.235, -0.098);
  s.lineTo(0.525, -0.098);
  s.absarc(0.525, -0.075, 0.023, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(0.3, -0.052);
  s.quadraticCurveTo(0.255, -0.05, 0.25, 0);
  s.quadraticCurveTo(0.255, 0.05, 0.3, 0.052);
  s.lineTo(0.525, 0.052);
  s.absarc(0.525, 0.075, 0.023, -Math.PI / 2, Math.PI / 2, false);
  s.lineTo(0.235, 0.098);
  s.quadraticCurveTo(0.21, nw, 0.16, nw);
  s.lineTo(0, nw);
  s.absarc(0, 0, nw, Math.PI / 2, (3 * Math.PI) / 2, false);
  const geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.008,
    bevelEnabled: true,
    bevelThickness: 0.002,
    bevelSize: 0.0015,
    bevelSegments: 1,
    curveSegments: 12,
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, ROBOT.forkY + 0.002, 0);
  return geo;
}

function carbonMaterial() {
  const t = canvasTexture(128, 128, (g, w) => {
    const n = 16;
    const c = w / n;
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const on = (i + j) % 4 < 2;
        g.fillStyle = on ? '#2a2f38' : '#13161b';
        g.fillRect(i * c, j * c, c, c);
        g.fillStyle = on ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.025)';
        g.fillRect(i * c, j * c, c, c * 0.4);
      }
    }
  }, { anisotropy: 8, repeat: [14, 14] });
  return new THREE.MeshStandardMaterial({ map: t.tex, roughness: 0.3, metalness: 0.35, name: 'robot-carbon' });
}

/** Toothed belt seen through the smoked-glass window on top of a link; scrolls with the joint. */
function drawBelt(g, w, h) {
  const bg = g.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#05090f');
  bg.addColorStop(0.5, '#0c1422');
  bg.addColorStop(1, '#05090f');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#1c2533';
  g.fillRect(0, h * 0.3, w, h * 0.4);
  g.fillStyle = '#3c495b';
  for (let x = 0; x < w; x += 16) {
    g.fillRect(x, h * 0.24, 8, h * 0.08);
    g.fillRect(x + 8, h * 0.68, 8, h * 0.08);
  }
  g.fillStyle = 'rgba(160, 200, 255, 0.35)';
  for (let x = 4; x < w; x += 64) g.fillRect(x, h * 0.47, 22, h * 0.06);
  // Light guides along the window edges (constant along x, so scrolling leaves them in place).
  g.fillStyle = 'rgba(70, 210, 255, 0.9)';
  g.fillRect(0, 1, w, 2);
  g.fillRect(0, h - 3, w, 2);
}

/** Encoder ring behind the plinth window: fine ticks, index marks and a lit track. */
function drawEncoder(g, w, h) {
  g.fillStyle = '#03060c';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 180; i++) {
    const major = i % 5 === 0;
    const th = major ? h * 0.6 : h * 0.32;
    g.fillStyle = major ? '#46d2ff' : '#1f5a7a';
    g.fillRect((i / 180) * w, (h - th) / 2, major ? 2.2 : 1.4, th);
  }
  g.fillStyle = '#ffffff';
  for (let i = 0; i < 4; i++) g.fillRect((i / 4) * w + 3, h * 0.12, 10, h * 0.1);
  g.fillStyle = 'rgba(77, 123, 255, 0.6)';
  g.fillRect(0, h * 0.84, w, h * 0.05);
  g.fillRect(0, h * 0.1, w, h * 0.03);
}

function roundRectPath(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

/** Floating status panel: current action, route and the wafer on the fork. */
function drawRobotHolo(g, w, h, { st, carry, from, to }) {
  g.clearRect(0, 0, w, h);
  roundRectPath(g, 3, 3, w - 6, h - 6, 16);
  g.fillStyle = 'rgba(5, 12, 24, 0.84)';
  g.fill();
  g.lineWidth = 2.5;
  g.strokeStyle = 'rgba(70, 210, 255, 0.75)';
  g.stroke();
  g.textBaseline = 'alphabetic';
  g.textAlign = 'left';
  g.font = `600 22px ${FONT_SANS}`;
  g.fillStyle = '#86a7c9';
  g.fillText(`${MACHINE_INFO.robot.code} · ${MACHINE_INFO.robot.zh}`, 22, 38);
  g.textAlign = 'right';
  g.font = `600 19px ${FONT_MONO}`;
  g.fillText('CENTRAL ROBOT', w - 22, 38);
  g.textAlign = 'left';
  g.font = `700 50px ${FONT_SANS}`;
  g.fillStyle = st.css;
  g.fillText(st.zh, 22, 102);
  const aw = g.measureText(st.zh).width;
  g.font = `600 21px ${FONT_MONO}`;
  g.fillStyle = '#9fb7d3';
  g.fillText(st.en, 34 + aw, 100);
  g.textAlign = 'right';
  g.font = `600 32px ${FONT_MONO}`;
  g.fillStyle = '#e8f0ff';
  g.fillText(from && to ? `${from} → ${to}` : to ? `→ ${to}` : '—', w - 22, 102);
  g.textAlign = 'left';
  g.fillStyle = carry ? carry.css : '#5d7391';
  g.beginPath();
  g.arc(31, 141, 7, 0, TAU);
  g.fill();
  g.font = `600 23px ${FONT_SANS}`;
  g.fillText(carry ? `载片 · ${carry.zh}  ${carry.en}` : '空载 · EMPTY', 47, 149);
}

function buildRobot(M) {
  const root = group('robot', [HUB.x, 0, HUB.z]);
  const cyan = ledMaterial(0x46d2ff, 2.2); // static accent rings at the joints
  const strip = ledMaterial(0x46d2ff, 1.8); // status strips along both links
  const ring = ledMaterial(0x4d7bff, 1.4); // status ring around the deck
  const mats = { ...M, carbon: carbonMaterial(), led: cyan };

  // ── Plinth: white ceramic drum with a smoked-glass window over a lit encoder ring.
  const k = new Kit();
  k.add('white', lathe([
    [0.001, 0.03], [1.185, 0.03], [1.2, 0.05], [1.2, 0.155], [1.16, 0.17], [1.16, 0.3],
    [1.2, 0.315], [1.2, 0.385], [1.18, 0.4], [0.001, 0.4],
  ], 112));
  k.add('rubber', tf(cyl(1.13, 1.13, 0.03, 96), [0, 0.015, 0])); // shadow gap: the plinth floats
  k.add('graphite', tf(cyl(1.15, 1.15, ROBOT.deckY - 0.4, 112), [0, (0.4 + ROBOT.deckY) / 2, 0]));
  k.add('plastic', tf(cyl(0.62, 0.62, 0.006, 72), [0, ROBOT.deckY + 0.003, 0]));
  k.add('chrome', tf(torus(0.62, 0.005, 8, 112), [0, ROBOT.deckY + 0.003, 0], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU + 0.13;
    k.add('chrome', tf(cyl(0.016, 0.016, 0.006, 10), [Math.cos(a) * 0.92, ROBOT.deckY + 0.003, Math.sin(a) * 0.92]));
  }
  const drumH = ROBOT.drumTop - ROBOT.deckY;
  k.add('white', tf(cyl(0.34, 0.37, drumH, 72), [0, ROBOT.deckY + drumH / 2, 0]));
  k.add('chrome', tf(torus(0.342, 0.006, 8, 72), [0, ROBOT.drumTop, 0], [Math.PI / 2, 0, 0]));
  // Stand of the holo panel.
  k.add('chrome', pipeGeometry([[0, 0.4, 1.17], [0, 0.47, 1.27], [0, 0.522, 1.352]], 0.008, 0.04, 8));
  root.add(k.build(M, { name: 'robot-base' }));
  const glow = new Kit();
  glow.add('led', tf(torus(1.135, 0.005, 6, 160), [0, 0.012, 0], [Math.PI / 2, 0, 0]));
  glow.add('led', tf(cyl(0.358, 0.358, 0.012, 72, true), [0, 0.5, 0]));
  root.add(glow.build({ led: cyan }, { name: 'robot-glow', castShadow: false }));
  root.add(mesh(torus(1.165, 0.0065, 8, 160), ring, [0, 0.402, 0], [Math.PI / 2, 0, 0], null, { cast: false }));

  const enc = canvasTexture(1024, 48, drawEncoder, { anisotropy: 8 });
  const encMat = new THREE.MeshBasicMaterial({ map: enc.tex, name: 'robot-encoder' });
  encMat.color.setScalar(2.0);
  const encoder = mesh(cyl(1.168, 1.168, 0.12, 128, true), encMat, [0, 0.235, 0], null, null, { cast: false, receive: false });
  const smoke = fakeGlass({ color: 0x0b1626, opacity: 0.4, fresnel: 0.55 });
  const windowGlass = mesh(cyl(1.195, 1.195, 0.14, 128, true), smoke, [0, 0.235, 0], null, null, { cast: false, receive: false });
  windowGlass.renderOrder = 2;
  root.add(encoder, windowGlass);

  const holo = canvasTexture(512, 176, null, { anisotropy: 8 });
  const holoMat = new THREE.MeshBasicMaterial({
    map: holo.tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, name: 'robot-holo',
  });
  holoMat.color.setScalar(1.25);
  const holoPanel = mesh(new THREE.PlaneGeometry(0.56, 0.1925), holoMat, [0, 0.62, 1.34], [-0.3, 0, 0], null, { cast: false, receive: false });
  holoPanel.renderOrder = 3;
  root.add(holoPanel);

  // ── Arm. The column rises out of the drum when the arm lifts.
  const arm = group('arm');
  root.add(arm);
  arm.add(new Kit().add('steel', tf(cyl(0.2, 0.2, 0.19, 56), [0, 0.495, 0])).build(M, { name: 'robot-column' }));

  const beltCanvas = canvasTexture(512, 64, drawBelt, { anisotropy: 8, repeat: [1, 1] });
  const beltMaterial = (tex) => new THREE.MeshStandardMaterial({
    map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.55,
    roughness: 0.08, metalness: 0, name: 'robot-belt',
  });
  const belt1 = beltCanvas.tex;
  const belt2 = beltCanvas.tex.clone();

  /** Ceramic link with silver caps, a belt window on top and status strips on both sides. */
  function buildLink(name, spec, len, extra) {
    const g = group(name);
    const top = spec.y + spec.h;
    const kk = new Kit();
    kk.add('white', linkGeometry(len, spec.r1, spec.r2, spec.y, spec.h, spec.bevel));
    kk.add('chrome', tf(rbox(0.66, 0.004, spec.r2 * 0.95, 0.002), [0.5, top + 0.0015, 0]));
    for (const s of [-1, 1]) kk.add('graphite', sideBox(0.66, 0.026, 0.004, len / 2, spec.y + spec.h / 2, spec, len, s, 0.0005));
    extra(kk, top);
    g.add(kk.build(mats, { name }));
    const win = new THREE.PlaneGeometry(0.62, spec.r2 * 0.95 - 0.022);
    win.rotateX(-Math.PI / 2);
    g.add(mesh(win, beltMaterial(spec === ROBOT.link1 ? belt1 : belt2), [0.5, top + 0.004, 0], null, null, { cast: false }));
    const strips = new Kit();
    for (const s of [-1, 1]) strips.add('led', sideBox(0.6, 0.009, 0.005, len / 2, spec.y + spec.h / 2, spec, len, s, 0.0022));
    g.add(strips.build({ led: strip }, { name: `${name}-strips`, castShadow: false }));
    return g;
  }

  const L1S = ROBOT.link1;
  const link1 = buildLink('link1', L1S, L1, (kk, top) => {
    kk.add('alu', tf(cyl(0.118, 0.124, 0.012, 56), [0, top + 0.006, 0])); // shoulder cap
    kk.add('chrome', tf(cyl(0.034, 0.034, 0.008, 24), [0, top + 0.016, 0]));
    kk.add('alu', tf(cyl(0.1, 0.104, 0.012, 56), [L1, top + 0.006, 0])); // elbow bearing
    kk.add('graphite', tf(cyl(0.11, 0.11, 0.01, 48), [L1, L1S.y - 0.005, 0])); // elbow underside
    kk.add('led', tf(torus(0.127, 0.0045, 6, 72), [0, top + 0.003, 0], [Math.PI / 2, 0, 0]));
    kk.add('led', tf(torus(0.107, 0.004, 6, 64), [L1, top + 0.003, 0], [Math.PI / 2, 0, 0]));
  });
  arm.add(link1);

  const L2S = ROBOT.link2;
  const link2 = buildLink('link2', L2S, L2, (kk, top) => {
    kk.add('alu', tf(cyl(0.086, 0.09, 0.01, 48), [0, top + 0.005, 0])); // elbow cap
    kk.add('chrome', tf(cyl(0.028, 0.028, 0.007, 20), [0, top + 0.0135, 0]));
    kk.add('white', tf(cyl(0.07, 0.078, ROBOT.forkY - 0.01 - top, 48), [L2, (top + ROBOT.forkY - 0.01) / 2, 0])); // wrist riser
    kk.add('led', tf(torus(0.093, 0.0035, 6, 56), [0, top + 0.003, 0], [Math.PI / 2, 0, 0]));
    kk.add('led', tf(torus(0.079, 0.0035, 6, 56), [L2, top + 0.012, 0], [Math.PI / 2, 0, 0]));
  });
  link2.position.x = L1;
  link1.add(link2);

  const fork = group('fork', [L2, 0, 0]);
  link2.add(fork);
  const k3 = new Kit();
  k3.add('alu', tf(cyl(0.064, 0.064, 0.01, 48), [0, ROBOT.forkY - 0.005, 0]));
  k3.add('carbon', forkGeometry());
  k3.add('graphite', tf(rbox(0.06, 0.016, 0.07, 0.005), [0.07, ROBOT.forkY + 0.02, 0])); // edge sensor
  for (const x of [0.31, 0.5]) {
    for (const z of [-0.075, 0.075]) k3.add('rubber', tf(cyl(0.011, 0.011, 0.002, 14), [x, ROBOT.forkY + 0.013, z])); // vacuum pads
  }
  fork.add(k3.build(mats, { name: 'fork', castShadow: true }));
  const forkLed = ledMaterial(0x46d2ff, 0.8);
  fork.add(mesh(box(0.004, 0.006, 0.044), forkLed, [0.1015, ROBOT.forkY + 0.02, 0], null, null, { cast: false }));

  const pose = { yaw: 270 * DEG, reach: RETRACT_R, lift: 0 };
  const anchor = new THREE.Vector3();
  function apply() {
    const d = clamp(pose.reach - FORK, 0.02, L1 + L2 - 1e-4);
    const a = Math.acos(d / (L1 + L2));
    link1.rotation.y = pose.yaw + a;
    link2.rotation.y = -2 * a;
    fork.rotation.y = a;
    arm.position.y = pose.lift;
    // Encoder follows the shoulder; the belts move with their joints (pulley ≈ 5 / 4 cm).
    encoder.rotation.y = link1.rotation.y;
    belt1.offset.x = -2 * a * 0.08;
    belt2.offset.x = a * 0.065;
  }
  apply();

  let statusKey = '';
  function setStatus(action = 'idle', from = null, to = null, look = null) {
    const key = `${action}|${from}|${to}|${look}`;
    if (key === statusKey) return;
    statusKey = key;
    const st = ROBOT_STATUS[action] || ROBOT_STATUS.idle;
    const carry = look ? CARRY[look] || CARRY.normal : null;
    const color = carry && carry.color ? carry.color : st.color;
    strip.color.setHex(color).multiplyScalar(0.25);
    strip.emissive.setHex(color);
    holo.redraw((g, w, h) => drawRobotHolo(g, w, h, { st, carry, from, to }));
  }
  setStatus();

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
      ring.emissiveIntensity = on ? 2.4 : 1.4;
      strip.emissiveIntensity = on ? 2.6 : 1.8;
    },
    /** action: 'idle' | 'home' | 'deliver' | 'collect'; from/to: station codes; look: wafer on the fork. */
    setStatus,
    /** Parts of the arm, for tests. */
    parts: { arm, link1, link2, fork },
    hover: { id: 'robot', object: root },
  };
}

// ---------------------------------------------------------------- locks
/** World-aligned chamber with a slit door on the track side and one on the hub side. */
function buildChamber(M, { center, side, zh, en, code, hubDoorX }) {
  const root = group(`chamber-${code}`, [center.x, 0, center.z]);
  root.userData.solid = `chamber:${code}`; // the camera keeps out (camspace.js)
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
function airTrack(kit, a, b, width = 0.36) {
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
  airTrack(kit, inStart, inEnd);
  airTrack(kit, outStart, outEnd);
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
