// Main engine: token turbine, gearbox, instrument console, stack light, steam relief and wafer feed.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, box, lathe, torus, boltRing, gearGeometry, pipeGeometry, tf, damp, clamp, TAU, DEG } from './util.js';
import { ledMaterial, screenMaterial, plateMaterial } from './materials.js';
import { gaugeFace, drumStrip, labelPlate, nameplate } from './displays.js';
import { blobShadow } from './environment.js';
import { MACHINE_INFO } from '../../model/stations.js';

export const ENGINE_POS = new THREE.Vector3(-4.0, 0, -0.7);
export const DISPENSER_POS = new THREE.Vector3(-2.08, 0, 1.54);
const AXIS_Y = 1.45;

/** Rounded plate with a rectangular window, extruded along +Z. */
function framePlate(w, h, hw, hh, depth, r = 0.02, cy = 0) {
  const s = new THREE.Shape();
  const rr = (shape, x, y, ww, hh2, rad) => {
    shape.moveTo(x + rad, y);
    shape.lineTo(x + ww - rad, y);
    shape.quadraticCurveTo(x + ww, y, x + ww, y + rad);
    shape.lineTo(x + ww, y + hh2 - rad);
    shape.quadraticCurveTo(x + ww, y + hh2, x + ww - rad, y + hh2);
    shape.lineTo(x + rad, y + hh2);
    shape.quadraticCurveTo(x, y + hh2, x, y + hh2 - rad);
    shape.lineTo(x, y + rad);
    shape.quadraticCurveTo(x, y, x + rad, y);
  };
  rr(s, -w / 2, -h / 2, w, h, r * 2);
  const hole = new THREE.Path();
  rr(hole, -hw / 2, cy - hh / 2, hw, hh, r);
  s.holes.push(hole);
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * 0.25, bevelSize: depth * 0.25, bevelSegments: 2, curveSegments: 6 });
}

function gauge(M, parent, { x, y, r, face }) {
  const k = new Kit();
  k.add('chrome', tf(torus(r + 0.01, r * 0.1, 12, 64), [x, y, 0.012]));
  k.add('darkSteel', tf(cyl(r + 0.012, r + 0.012, 0.02, 64), [x, y, -0.004], [Math.PI / 2, 0, 0]));
  parent.add(k.build(M, { name: 'gauge' }));
  const faceMat = new THREE.MeshStandardMaterial({ map: face.tex, emissive: 0xffffff, emissiveMap: face.tex, emissiveIntensity: 0.32, roughness: 0.5 });
  parent.add(mesh(new THREE.CircleGeometry(r, 64), faceMat, [x, y, 0.008], null, null, { cast: false }));
  const needle = group('needle', [x, y, 0.02]);
  const nk = new Kit();
  nk.add('orange', new THREE.BoxGeometry(r * 0.055, r * 0.82, 0.004).translate(0, r * 0.34, 0));
  nk.add('darkSteel', new THREE.BoxGeometry(r * 0.09, r * 0.2, 0.004).translate(0, -r * 0.1, 0));
  nk.add('chrome', cyl(r * 0.09, r * 0.09, 0.012, 24).rotateX(Math.PI / 2).translate(0, 0, 0.004));
  needle.add(nk.build(M, { name: 'needle', castShadow: false }));
  parent.add(needle);
  parent.add(mesh(new THREE.CircleGeometry(r, 48), M.glass, [x, y, 0.032], null, null, { cast: false, receive: false }));
  return needle;
}

export function buildEngine(M) {
  const root = group('engine');
  const eng = group('engine-body', [ENGINE_POS.x, 0, ENGINE_POS.z]);
  eng.userData.solid = 'engine'; // the camera keeps out (camspace.js)
  root.add(eng);
  root.add(blobShadow(M, 4.8, 2.7, [ENGINE_POS.x + 0.35, 0, ENGINE_POS.z], 0.62));

  // ---------------------------------------------------------- body
  const k = new Kit();
  k.add('graphite', tf(rbox(3.9, 0.36, 1.9, 0.05), [0.35, 0.24, 0]));
  k.add('aluDark', tf(rbox(3.94, 0.04, 1.94, 0.015), [0.35, 0.44, 0]));
  for (const x of [-1.45, 2.15]) for (const z of [-0.8, 0.8]) k.add('rubber', tf(cyl(0.08, 0.09, 0.06, 20), [x, 0.03, z]));
  for (const x of [-0.72, 0.62]) {
    k.add('graphite', tf(rbox(0.22, 0.56, 1.0, 0.03), [x, 0.72, 0]));
    k.add('steel', tf(rbox(0.26, 0.04, 1.04, 0.01), [x, 0.47, 0]));
    k.add('chrome', ...[-0.4, 0.4].map((z) => tf(cyl(0.02, 0.02, 0.03, 6), [x, 0.5, z])));
  }
  // Gearbox housing (open front, glass window).
  k.add('graphite', tf(rbox(0.78, 1.62, 0.06, 0.02), [1.8, 1.24, -0.48]));
  for (const x of [1.435, 2.165]) k.add('graphite', tf(rbox(0.07, 1.62, 0.82, 0.02), [x, 1.24, -0.1]));
  for (const y of [0.46, 2.02]) k.add('graphite', tf(rbox(0.78, 0.06, 0.82, 0.02), [1.8, y, -0.1]));
  k.add('aluDark', framePlate(0.78, 1.62, 0.62, 1.1, 0.03, 0.02, 0.12).translate(1.8, 1.24, 0.29));
  k.add('grille', tf(new THREE.PlaneGeometry(0.5, 0.18), [1.8, 0.6, 0.335]));
  k.add('chrome', tf(cyl(0.065, 0.065, 0.2, 24), [1.74, 1.5, 0.0], [Math.PI / 2, 0, 0]));
  k.add('chrome', tf(cyl(0.05, 0.05, 0.2, 24), [1.987, 1.148, 0.0], [Math.PI / 2, 0, 0]));
  // Relief valve on the rear casing.
  k.add('steel', tf(cyl(0.05, 0.065, 0.12, 20), [0.8, 2.12, 0]));
  for (let i = 0; i < 4; i++) k.add('chrome', tf(torus(0.034, 0.007, 8, 24), [0.8, 2.2 + i * 0.03, 0], [Math.PI / 2, 0, 0]));
  k.add('orange', tf(cyl(0.045, 0.045, 0.03, 20), [0.8, 2.32, 0]));
  // Stack light pole on the gearbox.
  k.add('alu', tf(cyl(0.022, 0.022, 0.3, 12), [2.0, 2.2, -0.36]));
  k.add('graphite', tf(cyl(0.05, 0.056, 0.03, 20), [2.0, 2.73, -0.36]));
  // Cables from the casing into the console.
  for (const x of [0.12, 0.28]) {
    k.add('rubber', pipeGeometry([[x, 0.95, 0.42], [x, 0.62, 0.86], [x, 0.62, 1.06]], 0.024, 0.18, 10));
  }
  eng.add(k.build(M, { name: 'engine-body' }));

  // ---------------------------------------------------------- turbine (vertical frame: y' = engine X)
  const turb = group('turbine', [0, AXIS_Y, 0], [0, 0, -Math.PI / 2]);
  eng.add(turb);
  const tk = new Kit();
  tk.add('alu', lathe([[0.5, -1.33], [0.6, -1.31], [0.655, -1.26], [0.668, -1.16], [0.64, -1.06], [0.61, -1.0]], 72));
  tk.add('aluDark', tf(cyl(0.6, 0.6, 0.56, 64), [0, -0.72, 0]));
  for (let i = 0; i < 9; i++) tk.add('alu', tf(cyl(0.665, 0.665, 0.022, 64), [0, -0.97 + i * 0.06, 0]));
  tk.add('steel', tf(cyl(0.69, 0.69, 0.05, 72), [0, -0.445, 0]));
  tk.add('steel', tf(cyl(0.69, 0.69, 0.05, 72), [0, 0.405, 0]));
  tk.add('chrome', boltRing(20, 0.66, -0.413, 0.016, 0.014));
  tk.add('chrome', boltRing(20, 0.66, 0.373, 0.016, 0.014, 0.157));
  tk.add('alu', tf(cyl(0.62, 0.62, 0.66, 64), [0, 0.76, 0]));
  tk.add('aluDark', lathe([[0.62, 1.09], [0.6, 1.14], [0.45, 1.19], [0.2, 1.215], [0.001, 1.22]], 64));
  tk.add('chrome', tf(cyl(0.06, 0.06, 0.26, 24), [0, 1.33, 0]));
  tk.add('grille', tf(cyl(0.6, 0.6, 0.012, 64), [0, -1.2, 0]));
  for (const r of [0.22, 0.37, 0.52]) tk.add('chrome', tf(torus(r, 0.009, 8, 64), [0, -1.205, 0], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 6; i++) tk.add('chrome', tf(new THREE.BoxGeometry(1.18, 0.012, 0.028), [0, -1.205, 0], [0, (i / 6) * Math.PI, 0]));
  turb.add(tk.build(M, { name: 'casing' }));

  const rotor = group('rotor');
  const rk = new Kit();
  rk.add('darkSteel', tf(cyl(0.24, 0.24, 0.8, 48), [0, -0.02, 0]));
  for (const [n, yc, pitch, len] of [[14, -0.2, 0.5, 0.3], [16, 0.17, -0.55, 0.28]]) {
    for (let i = 0; i < n; i++) {
      const g = rbox(0.32, len, 0.014, 0.004, 1);
      g.rotateX(pitch);
      g.translate(0.41, yc, 0);
      g.rotateY((i / n) * TAU);
      rk.add('chrome', g);
    }
  }
  rk.add('chrome', lathe([[0.001, -1.45], [0.06, -1.42], [0.13, -1.35], [0.18, -1.27], [0.2, -1.2]], 48));
  rotor.add(rk.build(M, { name: 'rotor' }));
  const coreMat = ledMaterial(0x4d7bff, 1);
  const ringGeo = [-0.33, -0.02, 0.29].map((y) => tf(cyl(0.247, 0.247, 0.026, 48, true), [0, y, 0]));
  const ringK = new Kit().add('core', ringGeo);
  rotor.add(ringK.build({ core: coreMat }, { name: 'core', castShadow: false }));
  turb.add(rotor);
  const windowGlass = mesh(cyl(0.632, 0.632, 0.81, 72, true), M.glass, [0, -0.02, 0], null, null, { cast: false, receive: false });
  turb.add(windowGlass);
  // No point light here: a dynamic light makes every lit pixel in the view pay for it.
  // The emissive core plus bloom carries the glow.

  const plate = nameplate(MACHINE_INFO.engine.zh, MACHINE_INFO.engine.en, MACHINE_INFO.engine.code);
  eng.add(mesh(new THREE.PlaneGeometry(0.5, 0.14), plateMaterial(plate.tex, 0.35), [0.76, AXIS_Y + 0.05, 0.628], null, null, { cast: false }));

  // ---------------------------------------------------------- gears
  const big = mesh(gearGeometry(24, 0.27, 0.31, 0.06, 0.06), M.brass, [1.74, 1.5, 0.08]);
  const small = mesh(gearGeometry(12, 0.125, 0.165, 0.06, 0.045), M.steel, [1.987, 1.148, 0.08]);
  const BIG0 = -7 * DEG;
  const SMALL0 = -4 * DEG;
  eng.add(big, small);
  eng.add(mesh(new THREE.PlaneGeometry(0.62, 1.1), M.glass, [1.8, 1.36, 0.3], null, null, { cast: false, receive: false }));

  // ---------------------------------------------------------- stack light
  const stackColors = [0xff3b30, 0xffa21f, 0x34d17a, 0x4d7bff];
  const stack = stackColors.map((c, i) => {
    const m = ledMaterial(c, 0.15);
    eng.add(mesh(cyl(0.055, 0.055, 0.085, 24), m, [2.0, 2.66 - i * 0.09, -0.36], null, null, { cast: false }));
    return m;
  });

  // ---------------------------------------------------------- console
  const con = group('console', [-0.35, 0, 1.22]);
  eng.add(con);
  const ck = new Kit();
  ck.add('graphite', tf(rbox(2.2, 0.82, 0.46, 0.03), [0, 0.41, 0]));
  ck.add('rubber', tf(rbox(2.16, 0.06, 0.4, 0.02), [0, 0.03, 0.01]));
  con.add(ck.build(M, { name: 'console' }));
  const conPlate = nameplate(MACHINE_INFO.console.zh, MACHINE_INFO.console.en, MACHINE_INFO.console.code);
  con.add(mesh(new THREE.PlaneGeometry(0.72, 0.2), plateMaterial(conPlate.tex, 0.35), [0, 0.6, 0.232], null, null, { cast: false }));

  const pan = group('panel', [0, 0.98, 0.02], [-0.62, 0, 0]);
  con.add(pan);
  const pk = new Kit();
  pk.add('aluDark', tf(rbox(2.24, 0.62, 0.06, 0.02), [0, 0, -0.03]));
  pk.add('graphite', framePlate(0.86, 0.56, 0.8, 0.5, 0.016, 0.012).translate(0.16, 0, 0));
  pan.add(pk.build(M, { name: 'panel' }));

  const ctxNeedle = gauge(M, pan, { x: -0.74, y: 0, r: 0.205, face: gaugeFace({ title: '上下文压力', sub: 'CONTEXT %', labels: ['0', '20', '40', '60', '80', '100'] }) });
  const tachNeedle = gauge(M, pan, { x: 0.86, y: 0.08, r: 0.13, face: gaugeFace({ title: '生成速率', sub: 'TOKEN / S', labels: ['0', '30', '60', '90', '120'], redFrom: 0.9 }) });

  // Odometer drums.
  const DR = 0.028;
  const DW = 0.04;
  const drumGeo = cyl(DR, DR, DW, 24).rotateZ(-Math.PI / 2);
  const stripA = drumStrip(DW, DR);
  const stripB = drumStrip(DW, DR, { inverted: true });
  const drumMat = (s) => new THREE.MeshStandardMaterial({ map: s.tex, emissive: 0xffffff, emissiveMap: s.tex, emissiveIntensity: 0.12, roughness: 0.45, metalness: 0.1 });
  const rowsY = [0.19, 0.095, 0, -0.095, -0.19];
  const drums = []; // { mesh, index, x, y, row, power }
  const instA = new THREE.InstancedMesh(drumGeo, drumMat(stripA), 36);
  const instB = new THREE.InstancedMesh(drumGeo, drumMat(stripB), 2);
  instA.castShadow = instB.castShadow = false;
  let na = 0;
  for (let row = 0; row < 4; row++) {
    for (let i = 0; i < 8; i++) drums.push({ inst: instA, index: na++, x: 0.16 + 0.163 - i * 0.044, y: rowsY[row], row, power: i });
  }
  for (let i = 0; i < 6; i++) {
    const dec = i < 2;
    drums.push({
      inst: dec ? instB : instA,
      index: dec ? i : na++,
      x: 0.16 + 0.163 - i * 0.044 - (dec ? 0 : 0.03),
      y: rowsY[4],
      row: 4,
      power: i,
    });
  }
  pan.add(instA, instB);
  pan.add(mesh(new THREE.CircleGeometry(0.006, 12), ledMaterial(0xf1efe8, 0.6), [0.16 + 0.163 - 2 * 0.044 + 0.022 - 0.015, rowsY[4] - 0.018, 0.04], null, null, { cast: false }));
  const rowLabels = [['未命中输入', 'INPUT · MISS'], ['缓存命中', 'CACHE HIT'], ['输出', 'OUTPUT'], ['推理', 'REASONING'], ['花费 ¥', 'COST · CNY']];
  rowLabels.forEach(([zh, en], row) => {
    const tex = labelPlate(zh, en, { w: 256, h: 80 }).tex;
    pan.add(mesh(new THREE.PlaneGeometry(0.2, 0.0625), plateMaterial(tex, 0.2), [0.16 - 0.29, rowsY[row], 0.012], null, null, { cast: false }));
  });
  pan.add(mesh(new THREE.PlaneGeometry(0.8, 0.5), M.glass, [0.16, 0, 0.064], null, null, { cast: false, receive: false }));

  // Phase lamps.
  // Same colours as the HUD phase dot; idle is neutral because green means "succeeded".
  const lampDefs = [['思考', 0x9b6bff], ['生成', 0x4d7bff], ['工具', 0xffa21f], ['空闲', 0xaab3c5]];
  const lamps = lampDefs.map(([label, color], i) => {
    const x = 0.66 + i * 0.13;
    const lk = new Kit().add('chrome', tf(cyl(0.032, 0.032, 0.014, 24), [x, -0.17, 0.007], [Math.PI / 2, 0, 0]));
    pan.add(lk.build(M, { name: 'lamp', castShadow: false }));
    const m = ledMaterial(color, 0.15);
    pan.add(mesh(new THREE.SphereGeometry(0.024, 20, 10, 0, TAU, 0, Math.PI / 2), m, [x, -0.17, 0.014], [Math.PI / 2, 0, 0], null, { cast: false }));
    const tex = labelPlate(label, '', { w: 128, h: 48 }).tex;
    pan.add(mesh(new THREE.PlaneGeometry(0.1, 0.0375), plateMaterial(tex, 0.2), [x, -0.235, 0.004], null, null, { cast: false }));
    return m;
  });

  // ---------------------------------------------------------- steam
  const steam = [];
  for (let i = 0; i < 24; i++) {
    const mat = new THREE.SpriteMaterial({ map: M.shadow.map, color: 0xdfe6f2, transparent: true, opacity: 0, depthWrite: false });
    const sp = new THREE.Sprite(mat);
    sp.visible = false;
    eng.add(sp);
    steam.push({ sp, mat, life: 0, vx: 0, vz: 0 });
  }
  let steamAcc = 0;

  // ---------------------------------------------------------- wafer dispenser
  const disp = group('dispenser', [DISPENSER_POS.x, 0, DISPENSER_POS.z]);
  disp.userData.solid = 'dispenser';
  root.add(disp);
  const dk = new Kit();
  dk.add('white', tf(rbox(0.5, 1.2, 0.56, 0.03), [0, 0.6, 0]));
  dk.add('plastic', tf(box(0.02, 0.05, 0.36), [0.252, 0.922, 0]));
  dk.add('aluDark', tf(rbox(0.54, 0.05, 0.6, 0.015), [0, 1.225, 0]));
  dk.add('grille', tf(new THREE.PlaneGeometry(0.3, 0.3), [0, 1.252, 0], [-Math.PI / 2, 0, 0]));
  disp.add(dk.build(M, { name: 'dispenser' }));
  const dispLabel = labelPlate(MACHINE_INFO.dispenser.zh, `${MACHINE_INFO.dispenser.en} · ${MACHINE_INFO.dispenser.code}`.toUpperCase(), { w: 256, h: 80 });
  disp.add(mesh(new THREE.PlaneGeometry(0.34, 0.106), plateMaterial(dispLabel.tex, 0.2), [0, 1.02, 0.281], null, null, { cast: false }));
  const dispLed = ledMaterial(0x4d7bff, 0.3);
  disp.add(mesh(new THREE.BoxGeometry(0.012, 0.012, 0.3), dispLed, [0.256, 0.97, 0], null, null, { cast: false }));
  root.add(blobShadow(M, 0.9, 0.9, [DISPENSER_POS.x, 0, DISPENSER_POS.z], 0.5));
  const conduit = new Kit().add('rubber', pipeGeometry([[-1.83, 1.0, -0.6], [-1.6, 1.0, -0.6], [-1.6, 0.3, 0.3], [-1.6, 0.3, 1.2], [-1.86, 0.5, 1.4]], 0.032, 0.2, 10));
  root.add(conduit.build(M, { name: 'conduit' }));

  // ---------------------------------------------------------- hover proxies
  const hidden = new THREE.MeshBasicMaterial({ visible: false });
  const proxy = (id, size, p, parent) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), hidden);
    m.position.set(p[0], p[1], p[2]);
    m.userData.hoverId = id;
    parent.add(m);
    return { id, object: m };
  };

  const st = { rotorSpeed: 0.4, rotorAngle: 0, ctx: 0, tach: 0, disp: [0, 0, 0, 0, 0], dispPulse: 0, err: 0 };
  const mtx = new THREE.Matrix4();
  const ang = new Float32Array(8);
  const coreColor = new THREE.Color();
  const COLORS = {
    reasoning: new THREE.Color(0x9b6bff),
    generating: new THREE.Color(0x3f7bff),
    tool: new THREE.Color(0xffa21f),
    idle: new THREE.Color(0x2b4fb8),
  };

  function setDrums(row, value, count) {
    let x = Math.max(0, value);
    for (let i = 0; i < count; i++) {
      const p = Math.pow(10, i);
      const digit = Math.floor(x / p) % 10;
      const lower = x % p;
      let frac = 0;
      if (i === 0) frac = x - Math.floor(x);
      else if (lower > p - 1) frac = lower - (p - 1);
      ang[i] = -((digit + frac + 0.5) / 10) * TAU;
    }
    for (const d of drums) {
      if (d.row !== row) continue;
      mtx.makeRotationX(ang[d.power]);
      mtx.setPosition(d.x, d.y, 0.03);
      d.inst.setMatrixAt(d.index, mtx);
    }
  }

  return {
    root,
    anchors: {
      engine: new THREE.Vector3(ENGINE_POS.x, 2.5, ENGINE_POS.z),
      console: new THREE.Vector3(ENGINE_POS.x - 0.35, 1.45, ENGINE_POS.z + 1.22),
      dispenser: new THREE.Vector3(DISPENSER_POS.x, 1.45, DISPENSER_POS.z),
    },
    hover: [
      proxy('engine', [3.2, 1.7, 1.5], [0.2, 1.45, 0], eng),
      proxy('console', [2.3, 1.35, 0.8], [-0.35, 0.68, 1.22], eng),
      proxy('dispenser', [0.6, 1.3, 0.62], [0, 0.65, 0], disp),
    ],
    pulseDispenser() {
      st.dispPulse = 1;
    },
    update(dt, t, s) {
      const phase = s.phase;
      const active = phase === 'generating' || phase === 'reasoning';
      const target = 0.35 + clamp(s.tps, 0, 140) * 0.16 + (phase === 'thinking' ? 0.8 : 0);
      st.rotorSpeed = damp(st.rotorSpeed, target, 1.4, dt);
      st.rotorAngle += st.rotorSpeed * dt;
      rotor.rotation.y = st.rotorAngle;
      big.rotation.z = BIG0 + st.rotorAngle * 0.45;
      small.rotation.z = SMALL0 - st.rotorAngle * 0.9;

      const c = COLORS[phase] || COLORS.idle;
      coreColor.copy(coreMat.emissive).lerp(c, 1 - Math.exp(-4 * dt));
      coreMat.emissive.copy(coreColor);
      const pulse = 0.85 + 0.15 * Math.sin(t * 9);
      const intensity = active ? (2.4 + clamp(s.tps, 0, 120) / 30) * pulse : phase === 'tool' ? 0.9 : phase === 'thinking' ? 1.3 : 0.45;
      coreMat.emissiveIntensity = damp(coreMat.emissiveIntensity, intensity, 5, dt);

      st.ctx = damp(st.ctx, clamp(s.ctx, 0, 1), 2.5, dt);
      const jitter = active ? Math.sin(t * 41) * 0.006 : 0;
      ctxNeedle.rotation.z = (135 - 270 * st.ctx) * DEG + jitter;
      st.tach = damp(st.tach, clamp(s.tps / 120, 0, 1), 3, dt);
      tachNeedle.rotation.z = (135 - 270 * st.tach) * DEG + jitter * 2;

      const targets = [s.counters.miss, s.counters.hit, s.counters.output, s.counters.reasoning, s.counters.cost * 100];
      for (let row = 0; row < 5; row++) {
        const tv = targets[row] || 0;
        let v = st.disp[row];
        if (tv < v || tv - v < 0.02) v = tv;
        else v = damp(v, tv, 3.2, dt);
        st.disp[row] = v;
        setDrums(row, v, row === 4 ? 6 : 8);
      }
      instA.instanceMatrix.needsUpdate = true;
      instB.instanceMatrix.needsUpdate = true;

      const lampOn = [phase === 'reasoning' || phase === 'thinking', phase === 'generating', phase === 'tool', phase === 'idle'];
      lamps.forEach((m, i) => {
        m.emissiveIntensity = damp(m.emissiveIntensity, lampOn[i] ? 3.2 : 0.12, 10, dt);
      });

      st.err = Math.max(0, st.err - dt * 0.5);
      if (s.errorPulse) st.err = 1;
      const blink = Math.sin(t * 12) > 0 ? 1 : 0.2;
      const stackOn = [st.err > 0 ? 3.5 * blink : 0.1, phase === 'tool' ? 3 : 0.1, active || phase === 'thinking' ? 3 : 0.6, phase === 'reasoning' ? 3 : 0.1];
      stack.forEach((m, i) => {
        m.emissiveIntensity = damp(m.emissiveIntensity, stackOn[i], 12, dt);
      });

      st.dispPulse = Math.max(0, st.dispPulse - dt * 2.5);
      dispLed.emissiveIntensity = 0.3 + st.dispPulse * 4;

      // Steam from the relief valve when the context runs hot.
      const hot = clamp((st.ctx - 0.78) / 0.22, 0, 1);
      steamAcc += dt * hot * 18;
      for (const p of steam) {
        if (p.life <= 0 && steamAcc >= 1) {
          steamAcc -= 1;
          p.life = 1;
          p.vx = (Math.random() - 0.5) * 0.15;
          p.vz = (Math.random() - 0.5) * 0.15;
          p.sp.position.set(0.8, 2.36, 0);
          p.sp.visible = true;
        }
        if (p.life > 0) {
          p.life -= dt / 1.7;
          const age = 1 - p.life;
          p.sp.position.x += p.vx * dt;
          p.sp.position.z += p.vz * dt;
          p.sp.position.y += dt * (0.55 - age * 0.25);
          p.sp.scale.setScalar(0.08 + age * 0.55);
          p.mat.opacity = Math.max(0, Math.sin(Math.PI * Math.min(1, age * 1.2)) * 0.32);
          if (p.life <= 0) p.sp.visible = false;
        }
      }
      if (steamAcc > 4) steamAcc = 4;
    },
  };
}
