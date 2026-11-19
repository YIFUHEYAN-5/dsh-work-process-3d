// Main engine: token turbine, gearbox, instrument console, stack light, steam relief and wafer feed.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, box, lathe, torus, boltRing, gearGeometry, pipeGeometry, tf, damp, clamp, TAU, DEG, canvasTexture, FONT_SANS, FONT_MONO } from './util.js';
import { ledMaterial, screenMaterial, plateMaterial } from './materials.js';
import { labelPlate, nameplate, roundRect, fitText } from './displays.js';
import { blobShadow } from './environment.js';
import { MACHINE_INFO } from '../../model/stations.js';

export const ENGINE_POS = new THREE.Vector3(-4.0, 0, -0.7);
export const DISPENSER_POS = new THREE.Vector3(-2.08, 0, 1.54);
const AXIS_Y = 1.45;

// ------------------------------------------------------------ console display
export const CONSOLE_PX = [1152, 320];
// Same colours as the HUD phase dot; idle is neutral because green means "succeeded".
const PHASE_CHIPS = [
  ['思考', '#9b6bff', (p) => p === 'reasoning' || p === 'thinking'],
  ['生成', '#4d7bff', (p) => p === 'generating'],
  ['工具', '#ffa21f', (p) => p === 'tool'],
  ['空闲', '#aab3c5', (p) => !p || p === 'idle'],
];
const fmtInt = (v) => Math.floor(Math.max(0, v)).toLocaleString('en-US');
const fmtCost = (v) => (v >= 100 ? v.toFixed(2) : v.toFixed(4));

/** 270° dial: value 0..1 as a lit arc, the big reading in the middle. */
function dial(g, cx, cy, r, value, color, big, zh, en) {
  const a0 = 0.75 * Math.PI;
  const a1 = 2.25 * Math.PI;
  g.lineCap = 'round';
  g.lineWidth = 14;
  g.strokeStyle = 'rgba(120, 150, 210, 0.16)';
  g.beginPath();
  g.arc(cx, cy, r, a0, a1);
  g.stroke();
  g.lineWidth = 2;
  g.strokeStyle = 'rgba(160, 185, 235, 0.35)';
  g.beginPath();
  for (let i = 0; i <= 10; i++) {
    const a = a0 + ((a1 - a0) * i) / 10;
    const r1 = r + (i % 5 === 0 ? 25 : 20);
    g.moveTo(cx + Math.cos(a) * (r + 14), cy + Math.sin(a) * (r + 14));
    g.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
  }
  g.stroke();
  if (value > 0.002) {
    g.lineWidth = 14;
    g.strokeStyle = color;
    g.shadowColor = color;
    g.shadowBlur = 16;
    g.beginPath();
    g.arc(cx, cy, r, a0, a0 + (a1 - a0) * Math.min(1, value));
    g.stroke();
    g.shadowBlur = 0;
  }
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = '#eef3ff';
  g.font = `700 52px ${FONT_MONO}`;
  g.fillText(big, cx, cy - 6);
  g.fillStyle = '#9fb0cf';
  g.font = `600 20px ${FONT_SANS}`;
  g.fillText(zh, cx, cy + 42);
  g.fillStyle = '#62739a';
  g.font = `600 14px ${FONT_MONO}`;
  g.fillText(en, cx, cy + 66);
  g.textAlign = 'left';
}

/** The console's digital instrument panel. d: { ctx, tach, tps, miss, hit, output, reasoning, cost, phase, err }. */
function drawConsole(g, w, h, d) {
  g.fillStyle = '#040a14';
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(90, 140, 255, 0.07)';
  g.lineWidth = 1;
  g.beginPath();
  for (let x = 16; x < w; x += 32) {
    g.moveTo(x + 0.5, 0);
    g.lineTo(x + 0.5, h);
  }
  for (let y = 16; y < h; y += 32) {
    g.moveTo(0, y + 0.5);
    g.lineTo(w, y + 0.5);
  }
  g.stroke();
  const ctxColor = d.ctx > 0.85 ? '#ff5a4f' : d.ctx > 0.6 ? '#ffb340' : '#5b8cff';
  dial(g, 172, 166, 116, d.ctx, ctxColor, `${Math.round(d.ctx * 100)}%`, '上下文压力', 'CONTEXT');
  dial(g, w - 172, 166, 116, d.tach, '#7fa8ff', `${Math.round(d.tps)}`, '生成速率', 'TOKEN / S');
  const x0 = 342;
  const x1 = w - 342;
  const rows = [
    ['未命中输入', 'MISS', fmtInt(d.miss)],
    ['缓存命中', 'HIT', fmtInt(d.hit)],
    ['输出', 'OUTPUT', fmtInt(d.output)],
    ['推理', 'REASON', fmtInt(d.reasoning)],
    ['花费', 'CNY', `¥ ${fmtCost(d.cost)}`],
  ];
  g.textBaseline = 'middle';
  rows.forEach(([zh, en, v], i) => {
    const y = 34 + i * 44;
    if (i) {
      g.fillStyle = 'rgba(120, 150, 210, 0.12)';
      g.fillRect(x0, y - 22, x1 - x0, 1);
    }
    g.textAlign = 'left';
    g.fillStyle = '#a9b8d6';
    g.font = `600 21px ${FONT_SANS}`;
    g.fillText(zh, x0, y);
    const zw = g.measureText(zh).width;
    g.fillStyle = '#5f7095';
    g.font = `600 13px ${FONT_MONO}`;
    g.fillText(en, x0 + zw + 8, y + 2);
    g.textAlign = 'right';
    g.fillStyle = i === 4 ? '#ffd38a' : '#eaf1ff';
    fitText(g, v, 250, 30, 700, FONT_MONO);
    g.fillText(v, x1, y);
  });
  const cw = 104;
  const gap = 12;
  let cx = (w - (cw * 4 + gap * 3)) / 2;
  g.textAlign = 'center';
  for (const [zh, color, on] of PHASE_CHIPS) {
    const lit = on(d.phase);
    roundRect(g, cx, 258, cw, 40, 20);
    if (lit) {
      g.globalAlpha = 0.9;
      g.fillStyle = color;
      g.fill();
    } else {
      g.globalAlpha = 0.3;
      g.lineWidth = 2;
      g.strokeStyle = color;
      g.stroke();
    }
    g.globalAlpha = 1;
    g.fillStyle = lit ? '#081020' : '#8090b0';
    g.font = `700 19px ${FONT_SANS}`;
    g.fillText(zh, cx + cw / 2, 278);
    cx += cw + gap;
  }
  g.textAlign = 'left';
  if (d.err > 0) {
    // A failed tool call flashes the panel frame red (fades over two seconds).
    g.lineWidth = 5;
    g.strokeStyle = `rgba(255, 90, 79, ${(0.25 + 0.6 * d.err).toFixed(3)})`;
    roundRect(g, 4, 4, w - 8, h - 8, 14);
    g.stroke();
  }
}

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

/**
 * Atrium palette for the engine: the workshop aluminium, steel, brass and rubber of the first
 * drawing become pearl ceramic housings, titanium trim and chrome gears behind glass.
 */
function enginePalette(M) {
  return {
    ...M,
    alu: M.white,
    aluDark: M.graphite,
    steel: M.graphite,
    darkSteel: M.graphite,
    rubber: M.graphite,
    plastic: M.graphite,
    brass: M.chrome,
    orange: ledMaterial(0x9b6bff, 1.4),
  };
}

export function buildEngine(M0) {
  const M = enginePalette(M0);
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
  k.add('white', tf(rbox(0.78, 1.62, 0.06, 0.02), [1.8, 1.24, -0.48]));
  for (const x of [1.435, 2.165]) k.add('white', tf(rbox(0.07, 1.62, 0.82, 0.02), [x, 1.24, -0.1]));
  for (const y of [0.46, 2.02]) k.add('white', tf(rbox(0.78, 0.06, 0.82, 0.02), [1.8, y, -0.1]));
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

  // ---------------------------------------------------------- gearbox internals
  // Two meshed gears on a cut-away glass window, with the shafts they ride on, machined hubs and
  // spokes. The first drawing had bare gear outlines floating in the window; rims and bearings
  // make it read as a real reduction gearbox instead of a drawn symbol.
  const big = mesh(gearGeometry(24, 0.29, 0.33, 0.075, 0.075), M.brass, [1.74, 1.5, -0.02]);
  const small = mesh(gearGeometry(12, 0.145, 0.185, 0.075, 0.06), M.steel, [1.987, 1.148, -0.02]);
  const BIG0 = -7 * DEG;
  const SMALL0 = -4 * DEG;
  const gearKit = new Kit();
  gearKit.add('aluDark', tf(cyl(0.2, 0.2, 0.1, 40), [1.74, 1.5, -0.03], [Math.PI / 2, 0, 0]));
  gearKit.add('aluDark', tf(cyl(0.1, 0.1, 0.1, 32), [1.987, 1.148, -0.03], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU;
    gearKit.add('chrome', tf(box(0.19, 0.03, 0.035), [1.74 + Math.cos(a) * 0.12, 1.5 + Math.sin(a) * 0.12, -0.06], [0, 0, a]));
  }
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU;
    gearKit.add('chrome', tf(box(0.11, 0.025, 0.03), [1.987 + Math.cos(a) * 0.06, 1.148 + Math.sin(a) * 0.06, -0.06], [0, 0, a]));
  }
  gearKit.add('chrome', tf(cyl(0.028, 0.028, 0.34, 20), [1.86, 1.33, -0.16], [Math.PI / 2, 0, 0]));
  gearKit.add('chrome', tf(cyl(0.022, 0.022, 0.2, 16), [1.74, 0.98, -0.16], [Math.PI / 2, 0, 0]));
  gearKit.add('aluDark', tf(box(0.06, 0.44, 0.05), [1.462, 1.5, -0.2]));
  gearKit.add('aluDark', tf(box(0.04, 0.3, 0.05), [2.16, 1.148, -0.2]));
  gearKit.add('steel', tf(box(0.6, 0.018, 0.035), [1.8, 0.72, -0.05]));
  eng.add(gearKit.build(M, { name: 'gearbox-internals' }));
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
  ck.add('white', tf(rbox(2.2, 0.82, 0.46, 0.04), [0, 0.41, 0]));
  ck.add('rubber', tf(rbox(2.16, 0.06, 0.4, 0.02), [0, 0.03, 0.01]));
  con.add(ck.build(M, { name: 'console' }));
  const conPlate = nameplate(MACHINE_INFO.console.zh, MACHINE_INFO.console.en, MACHINE_INFO.console.code);
  con.add(mesh(new THREE.PlaneGeometry(0.72, 0.2), plateMaterial(conPlate.tex, 0.35), [0, 0.6, 0.232], null, null, { cast: false }));

  // Instrument panel: one digital display (context and rate dials, token and cost counters,
  // phase chips) in place of the analog gauges and odometer drums of the first drawing.
  const pan = group('panel', [0, 0.98, 0.02], [-0.62, 0, 0]);
  con.add(pan);
  const pk = new Kit();
  pk.add('aluDark', tf(rbox(2.24, 0.62, 0.06, 0.02), [0, 0, -0.03]));
  pan.add(pk.build(M, { name: 'panel' }));
  const display = canvasTexture(CONSOLE_PX[0], CONSOLE_PX[1], null);
  pan.add(mesh(new THREE.PlaneGeometry(2.16, 0.6), screenMaterial(display.tex, 1.15), [0, 0, 0.002], null, null, { cast: false }));
  pan.add(mesh(new THREE.PlaneGeometry(2.18, 0.61), M.glass, [0, 0, 0.012], null, null, { cast: false, receive: false }));
  const readout = {
    sig: '',
    at: -Infinity,
    data: { ctx: 0, tach: 0, tps: 0, miss: 0, hit: 0, output: 0, reasoning: 0, cost: 0, phase: 'idle', err: 0 },
  };
  display.redraw((g, w, h) => drawConsole(g, w, h, readout.data));

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
  const coreColor = new THREE.Color();
  const COLORS = {
    // Thinking (waiting for the first token) shares the console's violet chip with reasoning.
    thinking: new THREE.Color(0x7d63ff),
    reasoning: new THREE.Color(0x9b6bff),
    generating: new THREE.Color(0x3f7bff),
    tool: new THREE.Color(0xffa21f),
    idle: new THREE.Color(0x2b4fb8),
  };

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
      st.tach = damp(st.tach, clamp(s.tps / 120, 0, 1), 3, dt);
      // Counters roll up toward new totals (and jump down at once on a reset).
      const targets = [s.counters.miss, s.counters.hit, s.counters.output, s.counters.reasoning, s.counters.cost];
      for (let row = 0; row < 5; row++) {
        const tv = targets[row] || 0;
        let v = st.disp[row];
        if (tv < v || tv - v < (row === 4 ? 1e-5 : 0.5)) v = tv;
        else v = damp(v, tv, 3.2, dt);
        st.disp[row] = v;
      }

      st.err = Math.max(0, st.err - dt * 0.5);
      if (s.errorPulse) st.err = 1;

      // Repaint the display when a shown value changes, at most ~7 times a second.
      const D = readout.data;
      D.ctx = st.ctx;
      D.tach = st.tach;
      D.tps = s.tps;
      [D.miss, D.hit, D.output, D.reasoning, D.cost] = st.disp;
      D.phase = phase;
      D.err = st.err;
      const sig = `${Math.round(st.ctx * 400)}|${Math.round(st.tach * 240)}|${Math.round(s.tps)}|${st.disp.slice(0, 4).map(Math.floor).join(',')}|${st.disp[4].toFixed(4)}|${phase}|${Math.ceil(st.err * 4)}`;
      if (sig !== readout.sig && t - readout.at >= 0.15) {
        readout.sig = sig;
        readout.at = t;
        display.redraw((g, w, h) => drawConsole(g, w, h, D));
      }
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
