// Ten tool stations on the ring around the transfer robot. Each one acts out what its DSH tools do.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, box, lathe, torus, tf, damp, clamp, smooth, TAU, DEG, canvasTexture, FONT_SANS, FONT_MONO, pipeGeometry } from './util.js';
import { ledMaterial, screenMaterial, plateMaterial, fakeGlass } from './materials.js';
import { nameplate, crtScreen, kanbanFace, gaugeFace, roundRect, fitText } from './displays.js';
import { blobShadow } from './environment.js';
import { RING_R, PORT_R, WAFER_Y, ringPos, yawFacingHub, buildPedestal } from './cell.js';
import { STATION_ORDER, STATION_INFO } from '../../model/stations.js';

export const stationTheta = (i) => (200 - i * 24.4) * DEG;
const PORT_Z = RING_R - PORT_R;
const DECK = 0.89;
const ACCENT = {
  archive: '#4d6bfe', engraver: '#ff7a1f', terminal: '#2fbf71', satellite: '#7c5cff', robot: '#4d6bfe',
  press: '#e5484d', kanban: '#2f9e6b', beacon: '#f5a524', labeler: '#d4a72c', generic: '#3fb8d9',
};

const glow = (color, opacity = 0.6) =>
  new THREE.MeshBasicMaterial({ color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });

/** Cylinder between two points. */
function rod(a, b, r, seg = 8) {
  const A = new THREE.Vector3(a[0], a[1], a[2]);
  const B = new THREE.Vector3(b[0], b[1], b[2]);
  const g = cyl(r, r, A.distanceTo(B), seg);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize()));
  g.translate((A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2);
  return g;
}

/** Floor-standing C-frame beside the port with an arm reaching over it. */
function sideFrame(k, top = 1.36) {
  k.add('aluDark', tf(box(0.06, top, 0.07), [0.4, top / 2, PORT_Z]));
  k.add('graphite', tf(box(0.16, 0.03, 0.16), [0.4, 0.015, PORT_Z]));
  k.add('aluDark', tf(box(0.48, 0.06, 0.08), [0.16, top, PORT_Z]));
  k.add('chrome', tf(box(0.4, 0.01, 0.01), [0.17, top - 0.035, PORT_Z + 0.03]));
}

function drawerTexture() {
  return canvasTexture(256, 168, (g, w, h) => {
    g.fillStyle = '#9aa1ab';
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.08)';
    for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
    g.fillStyle = '#e8e3d3';
    g.fillRect(w * 0.3, h * 0.18, w * 0.4, h * 0.26);
    g.strokeStyle = '#3b4048';
    g.lineWidth = 3;
    g.strokeRect(w * 0.3, h * 0.18, w * 0.4, h * 0.26);
    g.fillStyle = '#33373e';
    g.font = `700 22px ${FONT_MONO}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('A-•••', w / 2, h * 0.31);
    g.fillStyle = '#2b2f35';
    g.fillRect(w * 0.32, h * 0.62, w * 0.36, h * 0.12);
    g.fillStyle = '#c9ced6';
    g.fillRect(w * 0.32, h * 0.62, w * 0.36, h * 0.04);
  });
}

function keyboardTexture() {
  return canvasTexture(512, 160, (g, w, h) => {
    g.fillStyle = '#15171b';
    g.fillRect(0, 0, w, h);
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 14; c++) {
        const x = 10 + c * 35.5 + (r % 2) * 8;
        if (x > w - 40) continue;
        g.fillStyle = r === 3 && c > 3 && c < 10 ? '#2c3038' : '#2a2e35';
        g.fillRect(x, 10 + r * 37, 30, 30);
        g.fillStyle = 'rgba(255,255,255,0.12)';
        g.fillRect(x, 10 + r * 37, 30, 4);
      }
    }
  });
}

// ------------------------------------------------------------ per-kind machines
function buildArchive(M, g, k) {
  k.add('graphite', tf(rbox(0.88, 0.8, 0.42, 0.02), [0, DECK + 0.4, -0.33]));
  k.add('aluDark', tf(rbox(0.9, 0.03, 0.44, 0.01), [0, DECK + 0.815, -0.33]));
  const tex = drawerTexture().tex;
  const inst = new THREE.InstancedMesh(rbox(0.26, 0.17, 0.3, 0.008), new THREE.MeshStandardMaterial({ map: tex, metalness: 0.7, roughness: 0.38 }), 12);
  inst.castShadow = true;
  g.add(inst);
  const drawers = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) drawers.push({ x: (c - 1) * 0.28, y: DECK + 0.13 + r * 0.19, out: 0, until: 0 });
  // Scanner on a cantilever.
  k.add('aluDark', tf(box(0.06, 0.46, 0.06), [0, DECK + 0.23, 0.16]));
  k.add('aluDark', tf(box(0.07, 0.06, 0.88), [0, DECK + 0.46, 0.56]));
  const head = group('scan-head', [0, DECK + 0.4, PORT_Z]);
  g.add(head);
  head.add(new Kit().add('graphite', tf(rbox(0.38, 0.07, 0.09, 0.012), [0, -0.035, 0])).add('chrome', tf(box(0.06, 0.03, 0.05), [0, 0.02, 0])).build(M, { name: 'scan-head' }));
  const lens = ledMaterial(0x6f9bff, 0.6);
  head.add(mesh(box(0.34, 0.006, 0.012), lens, [0, -0.072, 0], null, null, { cast: false }));
  const fanH = DECK + 0.4 - 0.075 - (WAFER_Y + 0.004);
  const fanMat = glow(0x5d8bff, 0);
  const fan = mesh(new THREE.PlaneGeometry(0.34, fanH), fanMat, [0, -0.075 - fanH / 2, 0], null, null, { cast: false, receive: false });
  head.add(fan);
  const lineMat = glow(0x9fc0ff, 0);
  const line = mesh(box(0.3, 0.001, 0.008), lineMat, [0, WAFER_Y + 0.006 - (DECK + 0.4), 0], null, null, { cast: false, receive: false });
  head.add(line);
  const m = new THREE.Matrix4();
  let next = 0;
  return {
    update(dt, t, s) {
      const w = s.work;
      head.position.z = PORT_Z + Math.sin(t * 2.6) * 0.17 * w;
      fanMat.opacity = 0.16 * w;
      lineMat.opacity = 0.9 * w;
      lens.emissiveIntensity = 0.6 + 3 * w;
      if (s.working && t > next) {
        next = t + 0.25 + Math.random() * 0.3;
        const d = drawers[Math.floor(Math.random() * drawers.length)];
        d.until = t + 0.5 + Math.random() * 0.5;
      }
      for (let i = 0; i < drawers.length; i++) {
        const d = drawers[i];
        d.out = damp(d.out, t < d.until ? 0.16 : 0, 9, dt);
        m.makeTranslation(d.x, d.y, -0.12 - 0.15 + 0.015 + d.out);
        inst.setMatrixAt(i, m);
      }
      inst.instanceMatrix.needsUpdate = true;
    },
  };
}

function buildEngraver(M, g, k, fx) {
  k.add('graphite', tf(rbox(0.8, 0.34, 0.44, 0.02), [0, DECK + 0.17, -0.32]));
  for (let i = 0; i < 9; i++) k.add('alu', tf(box(0.012, 0.1, 0.38), [-0.32 + i * 0.08, DECK + 0.39, -0.32]));
  k.add('rubber', pipeGeometry([[0.3, DECK + 0.2, -0.09], [0.3, DECK + 0.32, 0.12], [0.37, 1.5, PORT_Z - 0.08]], 0.018, 0.12, 8));
  for (const x of [-0.37, 0.37]) {
    k.add('aluDark', tf(box(0.07, 1.44, 0.09), [x, 0.72, PORT_Z]));
    k.add('graphite', tf(box(0.16, 0.03, 0.18), [x, 0.015, PORT_Z]));
  }
  k.add('aluDark', tf(box(0.84, 0.09, 0.11), [0, 1.44, PORT_Z]));
  k.add('chrome', tf(box(0.76, 0.016, 0.016), [0, 1.44, PORT_Z + 0.062]));
  k.add('hazard', tf(box(0.84, 0.02, 0.112), [0, 1.494, PORT_Z]));
  // Laser-safety glass: clear while idle, it glows amber while the beam is on.
  const shield = fakeGlass({ color: 0xdfe6f0, opacity: 0.1, fresnel: 0.45, side: THREE.DoubleSide, emissive: 0xff7a1f, emissiveIntensity: 0.06 });
  for (const x of [-0.335, 0.335]) g.add(mesh(new THREE.PlaneGeometry(0.5, 0.42), shield, [x, 1.17, PORT_Z], [0, Math.PI / 2, 0], null, { cast: false, receive: false }));
  const head = group('laser-head', [0, 1.44, PORT_Z]);
  g.add(head);
  const hk = new Kit();
  hk.add('chrome', tf(rbox(0.13, 0.13, 0.03, 0.008), [0, 0, 0.075]));
  hk.add('graphite', tf(rbox(0.1, 0.17, 0.1, 0.01), [0, -0.12, 0]));
  hk.add('steel', tf(cyl(0.026, 0.02, 0.07, 20), [0, -0.24, 0]));
  hk.add('orange', tf(box(0.1, 0.012, 0.102), [0, -0.06, 0]));
  head.add(hk.build(M, { name: 'laser-head' }));
  const tip = 1.44 - 0.275;
  const beamLen = tip - (WAFER_Y + 0.004);
  const beamMat = glow(0xb8a6ff, 0);
  const beam = mesh(cyl(0.0035, 0.0035, beamLen, 8, true), beamMat, [0, -0.275 - beamLen / 2, 0], null, null, { cast: false, receive: false });
  head.add(beam);
  const spot = new THREE.Sprite(new THREE.SpriteMaterial({ map: M.shadow.map, color: 0xffd2a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  spot.scale.setScalar(0.08);
  spot.position.set(0, WAFER_Y + 0.008 - 1.44, 0);
  head.add(spot);
  const world = new THREE.Vector3();
  let acc = 0;
  return {
    update(dt, t, s) {
      const w = s.work;
      head.position.x = Math.sin(t * 5.3) * 0.1 * w;
      head.position.z = PORT_Z + Math.sin(t * 3.1 + 1) * 0.06 * w;
      const on = s.working && s.wafer ? 1 : 0;
      beamMat.opacity = damp(beamMat.opacity, on * (0.75 + 0.25 * Math.sin(t * 60)), 20, dt);
      spot.material.opacity = beamMat.opacity;
      shield.emissiveIntensity = 0.06 + beamMat.opacity * 0.5;
      if (on) {
        acc += dt * 40;
        spot.getWorldPosition(world);
        while (acc > 1) {
          acc -= 1;
          fx.sparks(world, 1);
        }
      }
    },
  };
}

function buildTerminal(M, g, k) {
  // Slim console display on a titanium stand (it used to be a beige CRT box).
  k.add('graphite', tf(rbox(0.24, 0.012, 0.16, 0.006), [-0.12, DECK + 0.006, -0.36]));
  k.add('graphite', tf(box(0.05, 0.16, 0.03), [-0.12, DECK + 0.09, -0.38]));
  k.add('white', tf(rbox(0.56, 0.36, 0.034, 0.012), [-0.12, DECK + 0.33, -0.36]));
  k.add('visor', tf(box(0.52, 0.32, 0.006), [-0.12, DECK + 0.33, -0.3405]));
  const crt = crtScreen();
  g.add(mesh(new THREE.PlaneGeometry(0.48, 0.29), screenMaterial(crt.tex, 1.5), [-0.12, DECK + 0.33, -0.337], null, null, { cast: false }));
  k.add('plastic', tf(rbox(0.46, 0.03, 0.16, 0.008), [-0.1, DECK + 0.015, 0.1]));
  g.add(mesh(new THREE.PlaneGeometry(0.44, 0.14), plateMaterial(keyboardTexture().tex, 0.1), [-0.1, DECK + 0.031, 0.1], [-Math.PI / 2, 0, 0], null, { cast: false }));
  sideFrame(k);
  k.add('steel', tf(cyl(0.04, 0.04, 0.14, 20), [0, 1.26, PORT_Z]));
  const probe = group('probe', [0, 1.1, PORT_Z]);
  g.add(probe);
  probe.add(new Kit()
    .add('chrome', tf(cyl(0.015, 0.015, 0.3, 12), [0, 0.15, 0]))
    .add('graphite', tf(cyl(0.13, 0.13, 0.018, 48), [0, 0.009, 0]))
    .add('gold', tf(cyl(0.06, 0.06, 0.004, 32), [0, -0.002, 0]))
    .build(M, { name: 'probe' }));
  const ring = ledMaterial(0x3dff8f, 0.2);
  probe.add(mesh(torus(0.11, 0.004, 6, 48), ring, [0, -0.002, 0], [Math.PI / 2, 0, 0], null, { cast: false }));
  let blinkT = 0;
  return {
    onStart(call) {
      crt.push(call.label || call.name);
    },
    onEnd(call, ok) {
      crt.line(ok ? '  OK  done' : '  ERR failed');
    },
    update(dt, t, s) {
      probe.position.y = damp(probe.position.y, s.working && s.wafer ? WAFER_Y + 0.016 : 1.1, 6, dt);
      ring.emissiveIntensity = s.work * (1.5 + Math.sin(t * 14) * 1.2) + 0.2;
      blinkT += dt;
      if (blinkT > 0.5) {
        blinkT = 0;
        crt.blink(Math.floor(t * 2) % 2 === 0);
      }
    },
  };
}

function buildSatellite(M, g, k) {
  k.add('graphite', tf(cyl(0.13, 0.15, 0.08, 40), [0, DECK + 0.04, -0.3]));
  const pan = group('pan', [0, DECK + 0.08, -0.3]);
  g.add(pan);
  const pk = new Kit();
  pk.add('white', tf(cyl(0.05, 0.06, 0.3, 24), [0, 0.15, 0]));
  pk.add('aluDark', tf(box(0.26, 0.04, 0.08), [0, 0.3, 0]));
  for (const x of [-0.12, 0.12]) pk.add('aluDark', tf(box(0.03, 0.14, 0.07), [x, 0.36, 0]));
  pan.add(pk.build(M, { name: 'pan' }));
  const tilt = group('tilt', [0, 0.4, 0], [-0.62, 0, 0]);
  pan.add(tilt);
  const dishMat = M.white.clone();
  dishMat.side = THREE.DoubleSide;
  const pts = [];
  for (let i = 0; i <= 12; i++) {
    const r = 0.03 + (0.42 - 0.03) * (i / 12);
    pts.push([r, (r * r) / 1.2]);
  }
  const tk = new Kit();
  tk.add('dish', lathe(pts, 64));
  tk.add('chrome', tf(torus(0.42, 0.008, 8, 72), [0, 0.147, 0], [Math.PI / 2, 0, 0]));
  tk.add('aluDark', tf(cyl(0.07, 0.09, 0.06, 24), [0, -0.01, 0]));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + Math.PI / 6;
    tk.add('aluDark', rod([Math.cos(a) * 0.4, 0.135, Math.sin(a) * 0.4], [0, 0.3, 0], 0.006));
  }
  tk.add('graphite', tf(new THREE.ConeGeometry(0.035, 0.07, 18), [0, 0.32, 0], [Math.PI, 0, 0]));
  tk.add('white', tf(cyl(0.03, 0.03, 0.05, 18), [0, 0.37, 0]));
  const dishG = group('dish', [0, 0.07, 0]);
  tilt.add(dishG);
  tilt.add(new Kit().add('aluDark', tf(cyl(0.05, 0.05, 0.08, 20), [0, 0.03, 0]), tf(cyl(0.02, 0.02, 0.28, 12), [0, 0, 0], [0, 0, Math.PI / 2])).build(M, { name: 'tilt-axle' }));
  dishG.add(tk.build({ ...M, dish: dishMat }, { name: 'dish' }));
  const feed = ledMaterial(0xa58cff, 0.3);
  dishG.add(mesh(sphere8(0.012), feed, [0, 0.4, 0], null, null, { cast: false }));
  const rings = Array.from({ length: 3 }, (_, i) => {
    const mat = glow(0x9a86ff, 0);
    const r = mesh(torus(0.05, 0.004, 6, 40), mat, [0, 0.42, 0], [Math.PI / 2, 0, 0], null, { cast: false, receive: false });
    dishG.add(r);
    return { r, mat, age: i / 3 };
  });
  sideFrame(k);
  k.add('graphite', tf(rbox(0.12, 0.08, 0.12, 0.012), [0, 1.29, PORT_Z]));
  k.add('white', tf(cyl(0.004, 0.004, 0.18, 6), [0.03, 1.42, PORT_Z]));
  const tipLed = ledMaterial(0xa58cff, 0.2);
  g.add(mesh(sphere8(0.012), tipLed, [0.03, 1.515, PORT_Z], null, null, { cast: false }));
  let az = 0;
  let azTarget = 0;
  let nextAim = 0;
  return {
    update(dt, t, s) {
      if (s.working && t > nextAim) {
        nextAim = t + 1.2 + Math.random() * 1.5;
        azTarget = (Math.random() - 0.5) * 1.6;
      }
      if (!s.working) azTarget = 0;
      az = damp(az, azTarget, 1.6, dt);
      pan.rotation.y = az;
      tilt.rotation.x = -0.62 + Math.sin(t * 0.7) * 0.05 * s.work;
      feed.emissiveIntensity = 0.3 + s.work * 3;
      tipLed.emissiveIntensity = s.work * (Math.sin(t * 10) > 0 ? 4 : 0.4) + 0.2;
      for (const ring of rings) {
        ring.age += dt * 0.8;
        if (ring.age > 1) ring.age -= 1;
        const a = ring.age;
        ring.r.position.y = 0.42 + a * 0.9;
        ring.r.scale.setScalar(1 + a * 6);
        ring.mat.opacity = s.work * (1 - a) * 0.8;
      }
    },
  };
}

const sphere8 = (r) => new THREE.SphereGeometry(r, 16, 10);

function buildCobot(M, g, k) {
  k.add('graphite', tf(rbox(0.5, 0.32, 0.34, 0.02), [0.18, DECK + 0.16, -0.36]));
  k.add('aluDark', tf(rbox(0.12, 0.18, 0.03, 0.01), [-0.27, DECK + 0.2, -0.36]));
  const ctrl = ledMaterial(0x4d7bff, 0.5);
  g.add(mesh(box(0.3, 0.02, 0.005), ctrl, [0.18, DECK + 0.25, -0.188], null, null, { cast: false }));
  const BASE = [-0.05, DECK, 0.12];
  const LA = 0.38;
  const LB = 0.36;
  const TOOL = 0.1;
  k.add('graphite', tf(cyl(0.09, 0.095, 0.04, 32), [BASE[0], DECK + 0.02, BASE[2]]));
  const j0 = group('j0', [BASE[0], DECK + 0.04, BASE[2]]);
  g.add(j0);
  j0.add(new Kit().add('white', tf(cyl(0.07, 0.075, 0.13, 32), [0, 0.065, 0])).add('graphite', tf(cyl(0.062, 0.062, 0.16, 32), [0, 0.16, 0], [0, 0, Math.PI / 2])).build(M, { name: 'j0' }));
  const j1 = group('j1', [0, 0.16, 0]);
  j0.add(j1);
  j1.add(new Kit()
    .add('white', tf(rbox(0.095, LA, 0.095, 0.04), [0, LA / 2, 0]))
    .add('graphite', tf(cyl(0.055, 0.055, 0.14, 28), [0, LA, 0], [0, 0, Math.PI / 2]))
    .build(M, { name: 'link-a' }));
  const j2 = group('j2', [0, LA, 0]);
  j1.add(j2);
  j2.add(new Kit()
    .add('white', tf(rbox(0.078, LB, 0.078, 0.035), [0, LB / 2, 0]))
    .add('graphite', tf(cyl(0.045, 0.045, 0.11, 24), [0, LB, 0], [0, 0, Math.PI / 2]))
    .build(M, { name: 'link-b' }));
  const j3 = group('j3', [0, LB, 0]);
  j2.add(j3);
  j3.add(new Kit()
    .add('graphite', tf(cyl(0.035, 0.035, 0.05, 24), [0, 0.025, 0]))
    .add('chrome', tf(cyl(0.03, 0.03, 0.012, 24), [0, 0.056, 0]))
    .add('aluDark', tf(box(0.012, 0.045, 0.03), [-0.02, 0.08, 0]), tf(box(0.012, 0.045, 0.03), [0.02, 0.08, 0]))
    .build(M, { name: 'tool' }));
  const ledRing = ledMaterial(0x4d7bff, 0.6);
  j3.add(mesh(torus(0.036, 0.005, 6, 32), ledRing, [0, 0.046, 0], [Math.PI / 2, 0, 0], null, { cast: false }));
  const pivotY = DECK + 0.04 + 0.16;
  const target = new THREE.Vector3(0, pivotY + 0.25, 0.25);
  const goal = new THREE.Vector3();
  function solve(px, py, pz) {
    const dx = px - BASE[0];
    const dz = pz - BASE[2];
    j0.rotation.y = Math.atan2(dx, dz);
    const hz = Math.hypot(dx, dz);
    const wy = py + TOOL - pivotY;
    const D = clamp(Math.hypot(hz, wy), 0.05, LA + LB - 1e-3);
    const beta = Math.atan2(hz, wy);
    const c2 = clamp((D * D - LA * LA - LB * LB) / (2 * LA * LB), -1, 1);
    const a2 = Math.acos(c2);
    const a1 = beta - Math.atan2(LB * Math.sin(a2), LA + LB * Math.cos(a2));
    j1.rotation.x = a1;
    j2.rotation.x = a2;
    j3.rotation.x = Math.PI - a1 - a2;
  }
  solve(target.x, target.y, target.z);
  return {
    update(dt, t, s) {
      if (s.working && s.wafer) {
        goal.set(0.08 * Math.cos(t * 1.7), WAFER_Y + 0.03 + 0.06 * Math.max(0, Math.sin(t * 3.4)), PORT_Z - 0.04 + 0.07 * Math.sin(t * 2.3));
      } else if (s.working) {
        goal.set(0.05 * Math.sin(t * 1.3), pivotY + 0.12, PORT_Z - 0.3);
      } else {
        goal.set(-0.05 + 0.04 * Math.sin(t * 0.6), pivotY + 0.22, 0.32);
      }
      target.x = damp(target.x, goal.x, 4, dt);
      target.y = damp(target.y, goal.y, 4, dt);
      target.z = damp(target.z, goal.z, 4, dt);
      solve(target.x, target.y, target.z);
      ledRing.emissiveIntensity = 0.6 + s.work * 2.6;
      ctrl.emissiveIntensity = 0.5 + s.work * (1 + Math.sin(t * 8));
    },
  };
}

function pressCurve(p) {
  if (p < 0.22) return smooth(p / 0.22);
  if (p < 0.42) return 1;
  return 1 - smooth((p - 0.42) / 0.58);
}

function buildPress(M, g, k) {
  k.add('graphite', tf(rbox(0.6, 0.28, 0.3, 0.02), [0.14, DECK + 0.14, -0.38]));
  k.add('white', tf(cyl(0.08, 0.08, 0.3, 28), [0.14, DECK + 0.36, -0.38], [0, 0, Math.PI / 2]));
  k.add('steel', tf(cyl(0.06, 0.06, 0.24, 24), [-0.3, DECK + 0.12, -0.4]));
  k.add('blue', tf(rbox(0.3, 0.86, 0.26, 0.03), [0, DECK + 0.43, 0.02]));
  k.add('blue', tf(rbox(0.32, 0.2, 0.92, 0.03), [0, 1.66, 0.48]));
  k.add('hazard', tf(box(0.322, 0.04, 0.01), [0, 1.6, 0.942]));
  k.add('steel', tf(cyl(0.085, 0.085, 0.22, 32), [0, 1.45, PORT_Z]));
  k.add('chrome', tf(torus(0.086, 0.008, 8, 32), [0, 1.34, PORT_Z], [Math.PI / 2, 0, 0]));
  k.add('rubber', pipeGeometry([[0.06, 1.5, PORT_Z - 0.06], [0.2, 1.5, PORT_Z - 0.3], [0.2, 1.2, 0.2], [0.2, DECK + 0.3, -0.2]], 0.016, 0.1, 8));
  k.add('rubber', pipeGeometry([[-0.06, 1.42, PORT_Z - 0.06], [-0.2, 1.42, PORT_Z - 0.3], [-0.2, 1.1, 0.2], [-0.2, DECK + 0.28, -0.22]], 0.016, 0.1, 8));
  const ram = group('ram', [0, 1.12, PORT_Z]);
  g.add(ram);
  ram.add(new Kit()
    .add('chrome', tf(cyl(0.035, 0.035, 0.42, 20), [0, 0.21, 0]))
    .add('steel', tf(rbox(0.32, 0.05, 0.32, 0.012), [0, 0, 0]))
    .add('darkSteel', tf(cyl(0.12, 0.12, 0.012, 40), [0, -0.031, 0]))
    .add('chrome', ...[-0.12, 0.12].map((x) => tf(cyl(0.012, 0.012, 0.5, 12), [x, 0.25, 0])))
    .build(M, { name: 'ram' }));
  const face = gaugeFace({ title: '压力', sub: 'BAR', labels: ['0', '50', '100', '150', '200'], redFrom: 0.85 });
  g.add(mesh(new THREE.CircleGeometry(0.07, 40), new THREE.MeshStandardMaterial({ map: face.tex, emissive: 0xffffff, emissiveMap: face.tex, emissiveIntensity: 0.3 }), [0, 1.45, 0.152], null, null, { cast: false }));
  const needle = mesh(box(0.006, 0.055, 0.003).translate(0, 0.024, 0), M.orange, [0, 1.45, 0.156], null, null, { cast: false });
  g.add(needle);
  g.add(mesh(torus(0.072, 0.006, 8, 40), M.chrome, [0, 1.45, 0.153], null, null, { cast: false }));
  let p = 0;
  let pv = 0;
  return {
    update(dt, t, s) {
      if (s.working && s.wafer) p = (p + dt / 1.3) % 1;
      else p = p > 0 && p < 0.999 ? Math.min(0.999, p + dt / 1.3) : 0;
      const c = s.working && s.wafer ? pressCurve(p) : p > 0 ? pressCurve(p) : 0;
      ram.position.y = 1.12 - 0.155 * c;
      pv = damp(pv, 0.1 + 0.75 * c, 6, dt);
      needle.rotation.z = (135 - 270 * pv) * DEG;
    },
  };
}

function buildKanban(M, g, k) {
  for (const x of [-0.42, 0.42]) k.add('aluDark', tf(box(0.035, 0.66, 0.035), [x, DECK + 0.33, -0.33]));
  k.add('alu', tf(rbox(0.86, 0.66, 0.03, 0.012), [0, 1.5, -0.33]));
  k.add('alu', tf(box(0.6, 0.03, 0.06), [0, 1.16, -0.3]));
  k.add('blue', tf(cyl(0.008, 0.008, 0.12, 10), [-0.1, 1.185, -0.29], [0, 0, Math.PI / 2]));
  k.add('orange', tf(cyl(0.008, 0.008, 0.12, 10), [0.1, 1.185, -0.29], [0, 0, Math.PI / 2]));
  const face = kanbanFace();
  g.add(mesh(new THREE.PlaneGeometry(0.8, 0.6), new THREE.MeshStandardMaterial({ map: face.tex, roughness: 0.35, metalness: 0 }), [0, 1.5, -0.313], null, null, { cast: false }));
  const colors = [0xf5d76e, 0x8fb2ff, 0xf7a8b8, 0x9fe0b5, 0xf5d76e, 0xc9b6ff, 0x8fb2ff];
  const cardGeo = rbox(0.11, 0.075, 0.008, 0.004);
  const cards = colors.map((c) => {
    const m = mesh(cardGeo, new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }), [0, 1.5, -0.306], null, null, { cast: false });
    g.add(m);
    return m;
  });
  const cols = [[0, 1, 2], [3], [4, 5, 6]];
  const slot = (col, row) => [(col - 1) * 0.267, 1.656 - row * 0.09];
  const place = (snap) => {
    cols.forEach((list, ci) => list.forEach((id, ri) => {
      const [x, y] = slot(ci, ri);
      const c = cards[id];
      c.userData.tx = x;
      c.userData.ty = y;
      if (snap) c.position.set(x, y, -0.306);
    }));
  };
  place(true);
  const move = (from, to) => {
    if (!cols[from].length) return;
    cols[to].push(cols[from].shift());
  };
  return {
    onStart() {
      if (!cols[0].length) move(2, 0);
      move(0, 1);
      place();
    },
    onEnd() {
      move(1, 2);
      while (cols[2].length > 4) move(2, 0);
      place();
    },
    update(dt) {
      for (const c of cards) {
        c.position.x = damp(c.position.x, c.userData.tx, 7, dt);
        c.position.y = damp(c.position.y, c.userData.ty, 7, dt);
        c.position.z = -0.306 + Math.min(0.03, Math.abs(c.position.x - c.userData.tx) * 0.3);
      }
    },
  };
}

function buildBeacon(M, g, k) {
  const X = 0.3;
  const Z = -0.35;
  k.add('graphite', tf(cyl(0.07, 0.08, 0.04, 28), [X, DECK + 0.02, Z]));
  k.add('alu', tf(cyl(0.028, 0.028, 1.0, 16), [X, DECK + 0.5, Z]));
  k.add('graphite', tf(cyl(0.09, 0.1, 0.06, 32), [X, DECK + 1.03, Z]));
  // Clear glass dome; the amber comes from the lamp inside while the agent waits for an answer.
  const domeMat = fakeGlass({ color: 0xffe7c4, opacity: 0.14, fresnel: 0.5, emissive: 0xff9a2e, emissiveIntensity: 0.1 });
  g.add(mesh(cyl(0.08, 0.08, 0.13, 32, true), domeMat, [X, DECK + 1.125, Z], null, null, { cast: false }));
  g.add(mesh(new THREE.SphereGeometry(0.08, 32, 12, 0, TAU, 0, Math.PI / 2), domeMat, [X, DECK + 1.19, Z], null, null, { cast: false }));
  const spin = group('spin', [X, DECK + 1.12, Z]);
  g.add(spin);
  spin.add(mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.1, 24, 1, true, 0, Math.PI), M.chrome, [0, 0, 0], null, null, { cast: false }));
  const bulb = ledMaterial(0xffb02e, 0.2);
  g.add(mesh(sphere8(0.022), bulb, [X, DECK + 1.12, Z], null, null, { cast: false }));
  const beamMat = glow(0xffa53a, 0);
  const cone = new THREE.ConeGeometry(0.3, 1.1, 24, 1, true);
  cone.translate(0, -0.55, 0);
  cone.rotateX(-Math.PI / 2);
  spin.add(mesh(cone, beamMat, [0, 0, 0], [0, 0, 0], null, { cast: false, receive: false }));
  // Call box on the deck front.
  k.add('callbox', tf(rbox(0.36, 0.28, 0.12, 0.02), [-0.2, DECK + 0.14, 0.04]));
  k.add('orange', tf(box(0.3, 0.008, 0.004), [-0.2, DECK + 0.255, 0.101]));
  k.add('grille', tf(new THREE.PlaneGeometry(0.12, 0.12), [-0.28, DECK + 0.15, 0.101]));
  k.add('steel', tf(cyl(0.045, 0.045, 0.02, 28), [-0.1, DECK + 0.15, 0.11], [Math.PI / 2, 0, 0]));
  const button = ledMaterial(0x34d17a, 0.3);
  g.add(mesh(new THREE.SphereGeometry(0.038, 24, 10, 0, TAU, 0, Math.PI / 2), button, [-0.1, DECK + 0.15, 0.12], [Math.PI / 2, 0, 0], null, { cast: false }));
  k.extra = { callbox: M.white };
  return {
    update(dt, t, s) {
      const w = s.work;
      spin.rotation.y += dt * (0.4 + 7 * w);
      const flash = 0.6 + 0.4 * Math.sin(t * 9);
      bulb.emissiveIntensity = 0.2 + w * 6 * flash;
      domeMat.emissiveIntensity = 0.1 + w * 1.8 * flash;
      beamMat.opacity = w * 0.16;
      button.emissiveIntensity = 0.3 + w * 3 * (Math.sin(t * 5) > 0 ? 1 : 0.2);
    },
  };
}

function buildLabeler(M, g, k) {
  k.add('aluDark', tf(rbox(0.72, 0.62, 0.04, 0.012), [0, DECK + 0.31, -0.4]));
  k.add('graphite', tf(rbox(0.72, 0.06, 0.3, 0.012), [0, DECK + 0.03, -0.3]));
  const unwind = group('unwind', [-0.16, DECK + 0.4, -0.31], [Math.PI / 2, 0, 0]);
  const rewind = group('rewind', [0.2, DECK + 0.18, -0.31], [Math.PI / 2, 0, 0]);
  g.add(unwind, rewind);
  const rollTex = canvasTexture(256, 32, (c, w, h) => {
    c.fillStyle = '#f3efe4';
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#d9b14a';
    for (let x = 0; x < w; x += 32) c.fillRect(x + 4, 4, 24, h - 8);
  }, { repeat: [3, 1] }).tex;
  const rollMat = new THREE.MeshStandardMaterial({ map: rollTex, roughness: 0.7 });
  unwind.add(new Kit().add('roll', cyl(0.15, 0.15, 0.1, 48)).add('gold', cyl(0.05, 0.05, 0.11, 24)).add('chrome', cyl(0.018, 0.018, 0.16, 12)).build({ ...M, roll: rollMat }, { name: 'unwind' }));
  rewind.add(new Kit().add('ceramic', cyl(0.075, 0.075, 0.1, 40)).add('gold', cyl(0.035, 0.035, 0.11, 20)).add('chrome', cyl(0.015, 0.015, 0.16, 12)).build(M, { name: 'rewind' }));
  for (const [x, y] of [[0.02, DECK + 0.52], [0.05, DECK + 0.3], [0.28, DECK + 0.42]]) k.add('chrome', tf(cyl(0.016, 0.016, 0.12, 14), [x, y, -0.31], [Math.PI / 2, 0, 0]));
  sideFrame(k);
  k.add('steel', tf(cyl(0.042, 0.042, 0.18, 22), [0, 1.24, PORT_Z]));
  k.add('chrome', tf(torus(0.043, 0.006, 6, 24), [0, 1.16, PORT_Z], [Math.PI / 2, 0, 0]));
  const tamp = group('tamp', [0, 1.08, PORT_Z]);
  g.add(tamp);
  tamp.add(new Kit()
    .add('chrome', tf(cyl(0.016, 0.016, 0.3, 12), [0, 0.15, 0]))
    .add('graphite', tf(rbox(0.16, 0.025, 0.12, 0.006), [0, 0, 0]))
    .add('gold', tf(box(0.12, 0.003, 0.08), [0, -0.014, 0]))
    .build(M, { name: 'tamp' }));
  let p = 0;
  return {
    update(dt, t, s) {
      const active = s.working && s.wafer;
      if (active || p > 0) p = (p + dt / 1.1) % 1;
      if (!active && p > 0.97) p = 0;
      const c = p ? pressCurve(p) : 0;
      tamp.position.y = 1.08 - (1.08 - (WAFER_Y + 0.03)) * c;
      unwind.rotation.y -= dt * s.work * 1.4;
      rewind.rotation.y -= dt * s.work * 2.8;
    },
  };
}

function buildGeneric(M, g, k) {
  k.add('graphite', tf(rbox(0.62, 0.86, 0.44, 0.02), [0, DECK + 0.43, -0.32]));
  for (const x of [-0.3, 0.3]) k.add('chrome', tf(box(0.016, 0.84, 0.01), [x, DECK + 0.43, -0.096]));
  const units = 8;
  for (let i = 0; i < units; i++) k.add('darkSteel', tf(rbox(0.56, 0.085, 0.02, 0.006), [0, DECK + 0.07 + i * 0.1, -0.095]));
  k.add('grille', tf(new THREE.PlaneGeometry(0.36, 0.5), [0.311, DECK + 0.45, -0.32], [0, Math.PI / 2, 0]));
  const per = 6;
  const inst = new THREE.InstancedMesh(box(0.014, 0.01, 0.004), new THREE.MeshBasicMaterial({ color: 0xffffff }), units * per);
  const m = new THREE.Matrix4();
  const base = [];
  const palette = [new THREE.Color(0x34d17a), new THREE.Color(0x34d17a), new THREE.Color(0x4d7bff), new THREE.Color(0xffa21f)];
  for (let i = 0; i < units; i++) {
    for (let j = 0; j < per; j++) {
      m.makeTranslation(0.12 + j * 0.026, DECK + 0.07 + i * 0.1, -0.083);
      inst.setMatrixAt(i * per + j, m);
      const c = palette[(i * 7 + j * 3) % palette.length].clone();
      base.push(c);
      inst.setColorAt(i * per + j, c);
    }
  }
  g.add(inst);
  const col = new THREE.Color();
  let acc = 0;
  return {
    update(dt, t, s) {
      acc += dt;
      if (acc < 0.08) return;
      acc = 0;
      for (let i = 0; i < base.length; i++) {
        const on = s.working ? Math.random() > 0.45 : (i + Math.floor(t * 0.7)) % 9 === 0;
        col.copy(base[i]).multiplyScalar(on ? 3.2 : 0.25);
        inst.setColorAt(i, col);
      }
      inst.instanceColor.needsUpdate = true;
    },
  };
}

const BUILDERS = {
  archive: buildArchive,
  engraver: buildEngraver,
  terminal: buildTerminal,
  satellite: buildSatellite,
  robot: buildCobot,
  press: buildPress,
  kanban: buildKanban,
  beacon: buildBeacon,
  labeler: buildLabeler,
  generic: buildGeneric,
};

// ------------------------------------------------------------ atrium palette
/**
 * The modules were first drawn in a workshop palette: orange shields, a blue press, hazard
 * stripes and rubber hoses. In the white atrium they use the hall's language instead: pearl
 * ceramic shells, titanium trim and thin lines of the station's accent light. Builders get
 * this remapped library in place of M, so their material keys need no edits.
 */
function stationPalette(M, kind) {
  const accent = ledMaterial(ACCENT[kind], 1.1);
  return {
    ...M,
    blue: M.white,
    ceramic: M.white,
    orange: accent,
    hazard: accent,
    rubber: M.graphite,
    darkSteel: M.graphite,
    aluDark: M.graphite,
    steel: M.graphite,
    plastic: M.graphite,
    visor: M.plastic,
    seam: ledMaterial(ACCENT[kind], 1.8),
  };
}

// ------------------------------------------------------------ holographic readout
const HOLO_PX = [384, 144];
const HOLO_W = 0.66;
const HOLO_H = (HOLO_W * HOLO_PX[1]) / HOLO_PX[0];
/** Centre height of the readouts: clear of the tallest module (the beacon dome, ≈2.16 m). */
export const HOLO_Y = 2.3;
const HISTORY_MAX = 8;
const HOLO_STATUS = {
  idle: ['待机', 'IDLE', '#7fe0a8'],
  working: ['运行', 'RUN', '#8fb4ff'],
  error: ['故障', 'FAULT', '#ff8a80'],
};
const HISTORY_COLOR = { ok: '#34d17a', error: '#ff5a4f', running: '#6f9bff' };

/** Dark glass panel in the RB-1 holo style: code, name, status, current call, recent outcomes. */
function drawHolo(g, w, h, info, accent, d) {
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(5, 12, 24, 0.84)';
  roundRect(g, 3, 3, w - 6, h - 6, 16);
  g.fill();
  g.lineWidth = 2;
  g.strokeStyle = accent;
  g.globalAlpha = 0.75;
  g.stroke();
  g.globalAlpha = 1;
  g.fillStyle = accent;
  roundRect(g, 16, 22, 5, h - 44, 2.5);
  g.fill();
  g.textBaseline = 'middle';
  const [zh, en, color] = HOLO_STATUS[d.status] || HOLO_STATUS.idle;
  g.font = `700 19px ${FONT_MONO}`;
  const chip = `${zh} ${en}`;
  const cw = g.measureText(chip).width + 22;
  const cx = w - 18 - cw;
  g.fillStyle = color;
  g.globalAlpha = 0.16;
  roundRect(g, cx, 19, cw, 30, 15);
  g.fill();
  g.globalAlpha = 1;
  g.fillText(chip, cx + 11, 35);
  g.fillStyle = accent;
  g.font = `700 25px ${FONT_MONO}`;
  g.fillText(info.code, 32, 35);
  const nameX = 32 + g.measureText(info.code).width + 12;
  g.fillStyle = '#eef3fd';
  fitText(g, info.zh, cx - nameX - 10, 25, 600, FONT_SANS);
  g.fillText(info.zh, nameX, 35);
  const label = d.label || info.en;
  g.fillStyle = d.label ? '#cfe0ff' : '#7f8fae';
  fitText(g, label, w - 52, 27, d.label ? 600 : 500, FONT_SANS);
  g.fillText(label, 32, 76);
  for (let i = 0; i < HISTORY_MAX; i++) {
    const s = i < d.history.length ? d.history[i] : null;
    g.fillStyle = s ? HISTORY_COLOR[s] || '#8a94a8' : 'rgba(150, 170, 210, 0.18)';
    roundRect(g, 32 + i * 24, 106, 18, 14, 3);
    g.fill();
  }
  g.fillStyle = '#9fb0cf';
  g.font = `600 19px ${FONT_MONO}`;
  g.textAlign = 'right';
  g.fillText(`CALLS ${d.count}`, w - 20, 113);
  g.textAlign = 'left';
}

// ------------------------------------------------------------ common station frame
function buildStation(M, kind, index, fx) {
  const info = STATION_INFO[kind];
  const accent = ACCENT[kind];
  const theta = stationTheta(index);
  const pos = ringPos(theta, RING_R);
  const root = group(`station-${kind}`, [pos.x, 0, pos.z], [0, yawFacingHub(theta), 0]);
  root.userData.solid = `station:${kind}`; // the camera keeps out (camspace.js)
  const P = stationPalette(M, kind);
  const k = new Kit();
  // Pearl cabinet floating on a recessed titanium plinth; a lit seam runs round the foot.
  k.add('graphite', tf(rbox(0.9, 0.07, 0.7, 0.02), [0, 0.035, -0.15]));
  k.add('white', tf(rbox(1.0, 0.8, 0.8, 0.05), [0, 0.47, -0.15]));
  k.add('graphite', tf(rbox(1.03, 0.026, 0.83, 0.012), [0, 0.877, -0.15]));
  for (const [sx, sz, x, z] of [[0.86, 0.006, 0, 0.2], [0.86, 0.006, 0, -0.5], [0.006, 0.66, 0.45, -0.15], [0.006, 0.66, -0.45, -0.15]]) {
    k.add('seam', tf(box(sx, 0.012, sz), [x, 0.05, z]));
  }
  // Dark glass visor across the front carries the nameplate and the status lamp.
  k.add('visor', tf(rbox(0.9, 0.21, 0.014, 0.006), [0, 0.62, 0.252]));
  const machine = BUILDERS[kind](P, root, k, fx);
  root.add(k.build({ ...P, ...(k.extra || {}) }, { name: `station-${kind}` }));

  const plate = nameplate(info.zh, info.en, info.code, accent);
  root.add(mesh(new THREE.PlaneGeometry(0.46, 0.13), plateMaterial(plate.tex, 0.35), [-0.19, 0.62, 0.2605], null, null, { cast: false }));
  const lamp = ledMaterial(0x7fe0a8, 0.6);
  root.add(mesh(box(0.2, 0.03, 0.006), lamp, [0.29, 0.62, 0.2605], null, null, { cast: false }));
  const strip = ledMaterial(0x4d7bff, 0.4);
  root.add(mesh(box(0.92, 0.012, 0.008), strip, [0, 0.83, 0.254], null, null, { cast: false }));
  const holoTex = canvasTexture(HOLO_PX[0], HOLO_PX[1], null);
  const holoMat = new THREE.MeshBasicMaterial({
    map: holoTex.tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, color: new THREE.Color().setScalar(1.2),
  });
  const holo = mesh(new THREE.PlaneGeometry(HOLO_W, HOLO_H), holoMat, [0, HOLO_Y, -0.1], null, null, { cast: false, receive: false });
  holo.name = `holo-${kind}`;
  holo.renderOrder = 3;
  holo.userData.noSolid = true; // see-through: the camera may pass (camspace.js)
  root.add(holo);
  const ped = buildPedestal(P);
  ped.root.position.set(0, 0, PORT_Z);
  root.add(ped.root);
  root.add(blobShadow(M, 1.25, 1.0, [0, 0, -0.12], 0.55));

  const hidden = new THREE.MeshBasicMaterial({ visible: false });
  const proxy = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.0, 1.5), hidden);
  proxy.position.set(0, 1.0, 0.1);
  root.add(proxy);

  const st = { work: 0, flash: 0, flashOk: true, label: '', status: 'idle', count: 0, history: [], sig: '' };
  const color = new THREE.Color();
  const BLUE = new THREE.Color(0x4d7bff);
  const GREEN = new THREE.Color(0x34d17a);
  const RED = new THREE.Color(0xff3b30);
  const smokeAt = ringPos(theta, PORT_R + 0.05, WAFER_Y + 0.08);
  const rippleAt = ringPos(theta, RING_R, 0);
  const rippleColor = parseInt(accent.slice(1), 16);

  /** Repaints the holo only when something it shows has changed. */
  function drawReadout() {
    const sig = `${st.status}|${st.label}|${st.count}|${st.history.join(',')}`;
    if (sig === st.sig) return;
    st.sig = sig;
    holoTex.redraw((g, w, h) => drawHolo(g, w, h, info, accent, st));
  }
  drawReadout();

  return {
    kind,
    index,
    theta,
    root,
    accent,
    holo,
    port: ringPos(theta, PORT_R, WAFER_Y),
    anchor: ringPos(theta, RING_R + 0.1, HOLO_Y + 0.42),
    hover: [{ id: `station:${kind}`, object: proxy }],
    setLabel(text) {
      st.label = text || '';
      drawReadout();
    },
    /** Total calls for this station and the outcomes of the latest few (oldest first). */
    setStats(count, history) {
      st.count = count;
      st.history = history;
      drawReadout();
    },
    /** Turns the readout toward the viewer. */
    face(camera) {
      holo.lookAt(camera.position);
    },
    status: () => st.status,
    /** What the holo shows (tests and tooltips). */
    readout: () => ({ status: st.status, label: st.label, count: st.count, history: st.history.slice() }),
    onStart(call) {
      st.label = call.label || call.name;
      machine.onStart?.(call);
      drawReadout();
    },
    onEnd(call, ok) {
      st.flash = ok ? 0.9 : 2.2;
      st.flashOk = ok;
      if (!ok) fx.puff(smokeAt, 10);
      // A ring of the station's light spreads over the floor (red when the call failed).
      fx.ripple?.(rippleAt, ok ? rippleColor : 0xff5a4f, { from: 0.55, to: 1.45, gain: ok ? 0.9 : 1.2 });
      machine.onEnd?.(call, ok);
    },
    update(dt, t, s) {
      st.work = damp(st.work, s.working ? 1 : 0, 3, dt);
      st.flash = Math.max(0, st.flash - dt);
      const err = st.flash > 0 && !st.flashOk;
      st.status = s.working ? 'working' : err ? 'error' : 'idle';
      drawReadout();
      machine.update(dt, t, { working: s.working, wafer: s.wafer, work: st.work });
      let intensity;
      if (st.flash > 0) {
        color.copy(st.flashOk ? GREEN : RED);
        intensity = 3.2 * (st.flashOk ? Math.min(1, st.flash * 2) : Math.sin(t * 14) > 0 ? 1 : 0.25);
      } else {
        color.copy(BLUE);
        intensity = 0.25 + st.work * (2.2 + Math.sin(t * 6) * 0.6);
      }
      ped.led.emissive.copy(color);
      ped.led.emissiveIntensity = intensity;
      strip.emissive.copy(color);
      strip.emissiveIntensity = 0.25 + intensity * 0.6;
      lamp.emissive.copy(err ? RED : s.working ? BLUE : GREEN);
      lamp.emissiveIntensity = err ? (Math.sin(t * 12) > 0 ? 3.5 : 0.3) : s.working ? 1.2 + st.work * 2.2 : 0.7;
    },
  };
}

export function buildStations(M, fx) {
  const root = group('stations');
  const list = STATION_ORDER.map((kind, i) => buildStation(M, kind, i, fx));
  for (const s of list) root.add(s.root);
  const byKind = Object.fromEntries(list.map((s) => [s.kind, s]));
  const recent = {};
  return {
    root,
    list,
    byKind,
    /** Feeds the holo readouts from the session state (null clears them). */
    setStats(state) {
      for (const key in recent) recent[key].length = 0;
      if (state) for (const c of state.calls) (recent[c.kind] || (recent[c.kind] = [])).push(c.status);
      for (const s of list) {
        const h = recent[s.kind] || [];
        s.setStats(state ? state.tools.byKind[s.kind] || 0 : 0, h.slice(-HISTORY_MAX));
      }
    },
    face(camera) {
      for (const s of list) s.face(camera);
    },
  };
}
