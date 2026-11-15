import * as THREE from 'three';
import { Kit, tf, rbox, box, cyl, mesh, group, canvasTexture, FONT_SANS, FONT_MONO, clamp, lerp, easeInOut } from './util.js';
import { ledMaterial, plateMaterial } from './materials.js';
import { nameplate } from './displays.js';
import { blobShadow } from './environment.js';
import { TRACK_Z } from './cell.js';
import { MACHINE_INFO } from '../../model/stations.js';

const plateOf = (id) => nameplate(MACHINE_INFO[id].zh, MACHINE_INFO[id].en, MACHINE_INFO[id].code);

/** Load port that receives finished wafers at the end of the outbound track. */
export const LOAD_PORT = new THREE.Vector3(7.45, 0, TRACK_Z);
export const PORT_TOP = 0.83;
export const FOUP_SLOTS = 13;

const FW = 0.4; // FOUP size along x (open side faces -X)
const FH = 0.36;
const FD = 0.4;
const SLOT_X = 0.02;
const SLOT_Y0 = 0.062;
const SLOT_DY = 0.02;
const NEST_X = [8.2, 8.75, 9.3];
const NEST_Z = [-0.1, 0.45, 1.0];
const TABLE_TOP = 0.55;
const RAIL_Y = 2.45;
const GRIP = FH + 0.046; // hook height above a gripped FOUP's base
const PARK_HOOK = 1.9;
const CARRY_BASE = 1.3;
const NESTS = 9;

export const nestIndex = (no) => (((no - 1) % NESTS) + NESTS) % NESTS;
const nestPos = (i, out = new THREE.Vector3()) => out.set(NEST_X[i % 3], TABLE_TOP, NEST_Z[Math.floor(i / 3)]);

const STATUS = {
  running: { zh: '进行中', en: 'RUN', color: '#3a6cff' },
  ok: { zh: '合格', en: 'PASS', color: '#1d9a52' },
  rework: { zh: '返工', en: 'REWORK', color: '#d63b3b' },
};

function drawLabel(g, w, h, f) {
  const info = f.info;
  const st = info ? STATUS[info.status] || STATUS.running : null;
  g.fillStyle = '#ece9df';
  g.fillRect(0, 0, w, h);
  g.fillStyle = st ? st.color : '#8a8f98';
  g.fillRect(0, 0, 16, h);
  g.textBaseline = 'middle';
  g.fillStyle = '#15171b';
  g.font = `700 46px ${FONT_SANS}`;
  g.textAlign = 'left';
  g.fillText(f.no ? `T${f.no}` : '— —', 30, h * 0.3);
  g.textAlign = 'right';
  g.font = `700 28px ${FONT_SANS}`;
  g.fillStyle = st ? st.color : '#6b7078';
  g.fillText(st ? `${st.zh} ${st.en}` : '空载 EMPTY', w - 14, h * 0.3);
  // Counts use the short English marking common on carrier labels; the localized
  // numbers are in the batch tooltip.
  g.textAlign = 'left';
  g.font = `600 19px ${FONT_MONO}`;
  g.fillStyle = '#3a3d44';
  const calls = info ? info.calls || 0 : 0;
  const files = info && info.files ? info.files.length : 0;
  g.fillText(`CALLS ${calls} · FILES ${files}`, 30, h * 0.64);
  // Barcode strip along the bottom edge.
  g.fillStyle = '#15171b';
  let x = 30;
  const seed = (f.no || 7) * 2654435761;
  for (let i = 0; x < w - 16; i++) {
    const bw = 1 + (((seed >>> (i % 24)) ^ i) & 3);
    if (i % 2 === 0) g.fillRect(x, h * 0.8, bw, h * 0.13);
    x += bw + 1;
  }
}

function foupTemplate(M) {
  const k = new Kit();
  const wallY = 0.03 + (FH - 0.03) / 2;
  const wallH = FH - 0.03;
  const fx = -FW / 2 + 0.008;
  // Base plate with kinematic coupling and front frame (open side −X).
  k.add('graphite', tf(rbox(FW, 0.03, FD, 0.008), [0, 0.015, 0]));
  k.add(
    'graphite',
    tf(box(0.016, 0.022, FD), [fx, FH - 0.011, 0]),
    tf(box(0.016, wallH, 0.02), [fx, wallY, FD / 2 - 0.01]),
    tf(box(0.016, wallH, 0.02), [fx, wallY, -FD / 2 + 0.01]),
  );
  // Robotic flange on top.
  k.add('graphite', tf(box(0.06, 0.026, 0.06), [0, FH + 0.013, 0]), tf(rbox(0.17, 0.02, 0.17, 0.006), [0, FH + 0.036, 0]));
  // Wafer slot ribs.
  for (let i = 0; i < FOUP_SLOTS; i++) {
    const y = SLOT_Y0 + i * SLOT_DY - 0.005;
    for (const s of [-1, 1]) k.add('plastic', tf(box(0.3, 0.004, 0.05), [SLOT_X, y, s * 0.165]));
  }
  const shell = new Kit().add(
    'smoke',
    tf(box(FW - 0.016, wallH, 0.01), [0.008, wallY, FD / 2 - 0.005]),
    tf(box(FW - 0.016, wallH, 0.01), [0.008, wallY, -FD / 2 + 0.005]),
    tf(box(0.01, wallH, FD - 0.02), [FW / 2 - 0.005, wallY, 0]),
    tf(box(FW - 0.016, 0.01, FD - 0.02), [0.008, FH - 0.005, 0]),
  );
  const g = new THREE.Group();
  g.add(k.build(M, { name: 'foup-frame' }));
  g.add(shell.build(M, { name: 'foup-shell', castShadow: false }));
  const door = new Kit()
    .add('white', tf(rbox(0.02, FH - 0.045, FD - 0.03, 0.006), [0, 0, 0]))
    .add('graphite', tf(cyl(0.016, 0.016, 0.006, 16), [-0.012, 0, 0.1], [0, 0, Math.PI / 2]), tf(cyl(0.016, 0.016, 0.006, 16), [-0.012, 0, -0.1], [0, 0, Math.PI / 2]))
    .build(M, { name: 'foup-door' });
  return { g, door, doorY: 0.03 + (FH - 0.045) / 2 + 0.006, doorX: -FW / 2 - 0.004 };
}

export function buildStocker(M, wafers) {
  const root = group('stocker');
  const hidden = new THREE.MeshBasicMaterial({ visible: false });
  const proxyGeo = new THREE.BoxGeometry(FW + 0.04, FH + 0.08, FD + 0.04);
  const labelGeo = new THREE.PlaneGeometry(0.28, 0.1225);
  const tpl = foupTemplate(M);

  // ── Load port ────────────────────────────────────────────────
  const port = group('load-port', [LOAD_PORT.x, 0, LOAD_PORT.z]);
  root.add(port);
  const pk = new Kit();
  pk.add('white', tf(rbox(0.56, PORT_TOP - 0.012, 0.62, 0.02), [0, (PORT_TOP - 0.012) / 2, 0]));
  pk.add('graphite', tf(rbox(0.44, 0.012, 0.44, 0.004), [0, PORT_TOP - 0.006, 0]), tf(box(0.58, 0.06, 0.64), [0, 0.03, 0]));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    pk.add('chrome', tf(cyl(0.008, 0.012, 0.012, 12), [Math.cos(a) * 0.13, PORT_TOP + 0.004, Math.sin(a) * 0.13]));
  }
  pk.add('aluDark', tf(box(0.04, 0.22, 0.04), [0.24, PORT_TOP + 0.11, 0.27]), tf(box(0.08, 0.03, 0.05), [0.21, PORT_TOP + 0.22, 0.27]));
  port.add(pk.build(M, { name: 'load-port-body' }));
  const portPlate = plateOf('loadport');
  port.add(mesh(new THREE.PlaneGeometry(0.44, 0.124), plateMaterial(portPlate.tex, 0.35), [0, 0.6, 0.311], null, null, { cast: false }));
  const portLeds = [0x2fd27a, 0xffb020, 0x4d7bff].map((c, i) => {
    const m = ledMaterial(c, 0.15);
    port.add(mesh(box(0.05, 0.016, 0.008), m, [-0.12 + i * 0.12, 0.46, 0.312], null, null, { cast: false }));
    return m;
  });
  port.add(blobShadow(M, 0.9, 0.95, [0, 0, 0], 0.5));
  const portProxy = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.3, 0.7), hidden);
  portProxy.position.set(0, 0.65, 0);
  port.add(portProxy);

  // ── Buffer table with 3×3 nests ─────────────────────────────
  const tk = new Kit();
  const tcx = (NEST_X[0] + NEST_X[2]) / 2;
  const tcz = (NEST_Z[0] + NEST_Z[2]) / 2;
  tk.add('graphite', tf(box(1.66, TABLE_TOP - 0.03, 1.66), [tcx, (TABLE_TOP - 0.03) / 2, tcz]));
  tk.add('white', tf(rbox(1.76, 0.03, 1.76, 0.01), [tcx, TABLE_TOP - 0.015, tcz]));
  tk.add('aluDark', tf(box(1.7, 0.05, 1.7), [tcx, 0.025, tcz]));
  const nestLeds = [];
  for (let i = 0; i < NESTS; i++) {
    const p = nestPos(i);
    tk.add('aluDark', tf(rbox(0.44, 0.008, 0.44, 0.003), [p.x, TABLE_TOP + 0.002, p.z]));
    for (let j = 0; j < 3; j++) {
      const a = (j / 3) * Math.PI * 2 + 0.5;
      tk.add('chrome', tf(cyl(0.007, 0.01, 0.01, 10), [p.x + Math.cos(a) * 0.12, TABLE_TOP + 0.008, p.z + Math.sin(a) * 0.12]));
    }
    const led = ledMaterial(0x2fd27a, 0);
    root.add(mesh(box(0.12, 0.006, 0.012), led, [p.x, TABLE_TOP + 0.004, p.z + 0.235], null, null, { cast: false }));
    nestLeds.push(led);
  }
  root.add(tk.build(M, { name: 'buffer-table' }));
  const tablePlate = plateOf('stocker');
  root.add(mesh(new THREE.PlaneGeometry(0.62, 0.175), plateMaterial(tablePlate.tex, 0.35), [tcx, TABLE_TOP * 0.55, tcz + 0.834], null, null, { cast: false }));
  root.add(blobShadow(M, 2.3, 2.3, [tcx, 0, tcz], 0.55));
  const tableProxy = new THREE.Mesh(new THREE.BoxGeometry(1.8, TABLE_TOP + 0.45, 1.8), hidden);
  tableProxy.position.set(tcx, (TABLE_TOP + 0.45) / 2, tcz);
  root.add(tableProxy);

  // ── Gantry crane ─────────────────────────────────────────────
  const gk = new Kit();
  const PX = [7.0, 10.0];
  const PZ = [-0.45, 1.95];
  for (const x of PX) {
    for (const z of PZ) {
      gk.add('white', tf(box(0.1, RAIL_Y + 0.05, 0.1), [x, (RAIL_Y + 0.05) / 2, z]));
      gk.add('graphite', tf(box(0.22, 0.03, 0.22), [x, 0.015, z]));
    }
    gk.add('aluDark', tf(box(0.09, 0.09, PZ[1] - PZ[0] + 0.1), [x, RAIL_Y, (PZ[0] + PZ[1]) / 2]));
  }
  for (const z of PZ) gk.add('steel', tf(box(PX[1] - PX[0] + 0.1, 0.09, 0.09), [(PX[0] + PX[1]) / 2, RAIL_Y, z]));
  root.add(gk.build(M, { name: 'gantry' }));
  const sign = plateOf('gantry');
  const signMesh = mesh(new THREE.PlaneGeometry(0.9, 0.253), plateMaterial(sign.tex, 0.35), [(PX[0] + PX[1]) / 2, RAIL_Y - 0.2, PZ[1] + 0.047], null, null, { cast: false });
  root.add(signMesh);
  root.add(
    new Kit()
      .add('steel', tf(box(0.02, 0.1, 0.02), [(PX[0] + PX[1]) / 2 - 0.35, RAIL_Y - 0.06, PZ[1] + 0.04]), tf(box(0.02, 0.1, 0.02), [(PX[0] + PX[1]) / 2 + 0.35, RAIL_Y - 0.06, PZ[1] + 0.04]))
      .build(M, { name: 'sign-hangers' }),
  );

  const bridge = group('bridge');
  root.add(bridge);
  bridge.add(
    new Kit()
      .add('blue', tf(box(0.14, 0.12, PZ[1] - PZ[0] + 0.12), [0, RAIL_Y + 0.105, (PZ[0] + PZ[1]) / 2]))
      .add('graphite', tf(box(0.26, 0.1, 0.13), [0, RAIL_Y + 0.07, PZ[0]]), tf(box(0.26, 0.1, 0.13), [0, RAIL_Y + 0.07, PZ[1]]))
      .build(M, { name: 'bridge-beam' }),
  );
  const trolley = group('trolley');
  bridge.add(trolley);
  trolley.add(
    new Kit()
      .add('graphite', tf(rbox(0.28, 0.13, 0.26, 0.02), [0, RAIL_Y - 0.035, 0]))
      .add('steel', tf(cyl(0.045, 0.045, 0.2, 20), [0, RAIL_Y - 0.035, 0], [0, 0, Math.PI / 2]))
      .build(M, { name: 'trolley-body' }),
  );
  const cableGeo = cyl(0.0035, 0.0035, 1, 6);
  const cables = [
    [-0.07, -0.07],
    [0.07, -0.07],
    [-0.07, 0.07],
    [0.07, 0.07],
  ].map(([x, z]) => {
    const c = mesh(cableGeo, M.steel, [x, 1, z], null, null, { cast: false });
    trolley.add(c);
    return c;
  });
  const gripper = group('gripper');
  trolley.add(gripper);
  gripper.add(new Kit().add('graphite', tf(rbox(0.24, 0.05, 0.24, 0.012), [0, 0.03, 0])).build(M, { name: 'gripper-body' }));
  const jaws = [-1, 1].map((s) => {
    const j = mesh(box(0.024, 0.06, 0.13), M.steel, [s * 0.115, -0.01, 0]);
    gripper.add(j);
    return j;
  });
  const gripLed = ledMaterial(0x4d7bff, 0.3);
  gripper.add(mesh(box(0.1, 0.008, 0.01), gripLed, [0, 0.03, 0.122], null, null, { cast: false }));

  const cr = { x: LOAD_PORT.x, z: LOAD_PORT.z, hook: PARK_HOOK, grip: 0, carry: null };
  const applyCrane = () => {
    bridge.position.x = cr.x;
    trolley.position.z = cr.z;
    gripper.position.y = cr.hook;
    const top = RAIL_Y - 0.1;
    const bottom = cr.hook + 0.055;
    const len = Math.max(0.01, top - bottom);
    for (const c of cables) {
      c.scale.y = len;
      c.position.y = bottom + len / 2;
    }
    const jx = lerp(0.115, 0.079, cr.grip);
    jaws[0].position.x = -jx;
    jaws[1].position.x = jx;
    if (cr.carry) cr.carry.g.position.set(cr.x, cr.hook - GRIP, cr.z);
  };

  // ── FOUPs ────────────────────────────────────────────────────
  const foups = new Set();
  const nests = new Array(NESTS).fill(null);
  let dock = null;

  function createFoup() {
    const g = tpl.g.clone();
    g.name = 'foup';
    const door = tpl.door.clone();
    g.add(door);
    const label = canvasTexture(256, 112, () => {});
    const labelMat = new THREE.MeshStandardMaterial({ map: label.tex, roughness: 0.55, metalness: 0, emissive: 0xffffff, emissiveMap: label.tex, emissiveIntensity: 0.18 });
    g.add(mesh(labelGeo, labelMat, [0.01, FH - 0.075, FD / 2 + 0.002], null, null, { cast: false }));
    const proxy = new THREE.Mesh(proxyGeo, hidden);
    proxy.position.set(0, FH / 2 + 0.02, 0);
    g.add(proxy);
    const f = { no: 0, info: null, g, door, label, labelMat, labelKey: '', proxy, slots: [], looks: [], count: 0, state: 'dock', doorOpen: 0, sp: 0 };
    refreshLabel(f);
    foups.add(f);
    root.add(g);
    return f;
  }
  function refreshLabel(f) {
    const key = `${f.no}|${f.info ? `${f.info.status}|${f.info.calls}|${(f.info.files || []).length}` : '-'}|${f.count}`;
    if (key === f.labelKey) return;
    f.labelKey = key;
    f.proxy.userData.hoverId = f.no ? `foup:${f.no}` : 'loadport';
    f.label.redraw((g, w, h) => drawLabel(g, w, h, f));
  }
  function addTo(f, look) {
    const k = f.count;
    f.count += 1;
    f.looks.push(look);
    if (k < FOUP_SLOTS) {
      const w = wafers.create(look);
      w.position.set(SLOT_X, SLOT_Y0 + k * SLOT_DY, 0);
      f.g.add(w);
      f.slots.push(w);
    }
    refreshLabel(f);
  }
  function removeFoup(f) {
    foups.delete(f);
    root.remove(f.g);
    f.label.tex.dispose();
    f.labelMat.dispose();
    for (let i = 0; i < NESTS; i++) if (nests[i] === f) nests[i] = null;
    if (dock === f) dock = null;
  }
  function applyDoor(f) {
    const p = f.doorOpen;
    const out = clamp(p / 0.25, 0, 1);
    const down = easeInOut(clamp((p - 0.25) / 0.75, 0, 1));
    f.door.position.set(tpl.doorX - 0.018 * out, tpl.doorY - 0.43 * down, 0);
  }
  function spawnDock(immediate = false) {
    const f = createFoup();
    f.g.position.set(LOAD_PORT.x, PORT_TOP, LOAD_PORT.z);
    f.state = immediate ? 'dock' : 'spawning';
    f.sp = immediate ? 1 : 0;
    f.doorOpen = immediate ? 1 : 0;
    applyDoor(f);
    dock = f;
    return f;
  }
  function placeOnNest(f, i) {
    const old = nests[i];
    if (old && old !== f) removeFoup(old);
    nests[i] = f;
    const p = nestPos(i);
    f.g.position.copy(p);
    f.state = 'nest';
    f.doorOpen = 0;
    applyDoor(f);
  }

  // ── Crane program (tweened steps) ────────────────────────────
  const shipQueue = [];
  let program = null;
  const act = (fn) => ({ setup: () => (fn(), { d: 0, fn: null }) });
  const moveTo = (x, z, v = 1.6) => ({
    setup() {
      const x0 = cr.x;
      const z0 = cr.z;
      const dist = Math.hypot(x - x0, z - z0);
      return { d: dist < 1e-3 ? 0 : Math.max(0.35, dist / v), fn: (e) => ((cr.x = lerp(x0, x, e)), (cr.z = lerp(z0, z, e))) };
    },
  });
  const hookTo = (y, d) => ({
    setup() {
      const y0 = cr.hook;
      return { d: Math.abs(y - y0) < 1e-3 ? 0 : d, fn: (e) => (cr.hook = lerp(y0, y, e)) };
    },
  });
  const gripTo = (v, d = 0.3) => ({
    setup() {
      const g0 = cr.grip;
      return { d, fn: (e) => (cr.grip = lerp(g0, v, e)) };
    },
  });
  const doorTo = (f, v, d = 0.55) => ({
    setup() {
      const d0 = f.doorOpen;
      return { d, fn: (e) => ((f.doorOpen = lerp(d0, v, e)), applyDoor(f)) };
    },
  });

  function shipProgram(f) {
    const i = nestIndex(f.no);
    const np = nestPos(i);
    return {
      i: 0,
      steps: [
        act(() => (f.state = 'closing')),
        doorTo(f, 0),
        moveTo(LOAD_PORT.x, LOAD_PORT.z),
        hookTo(PORT_TOP + GRIP, 0.6),
        gripTo(1),
        act(() => ((cr.carry = f), (f.state = 'carried'), (gripLed.emissiveIntensity = 2.2))),
        hookTo(CARRY_BASE + GRIP, 0.9),
        act(() => {
          if (dock === f) dock = null;
          spawnDock();
          const old = nests[i];
          if (old && old !== f) {
            old.state = 'sink';
            old.sp = 0;
            nests[i] = null;
          }
        }),
        moveTo(np.x, np.z),
        hookTo(TABLE_TOP + GRIP, 0.8),
        act(() => {
          cr.carry = null;
          gripLed.emissiveIntensity = 0.3;
          if (nests[i] && nests[i] !== f) removeFoup(nests[i]);
          placeOnNest(f, i);
        }),
        gripTo(0),
        hookTo(PARK_HOOK, 0.5),
        moveTo(LOAD_PORT.x, LOAD_PORT.z),
      ],
    };
  }

  const api = {
    root,
    hover: [
      { id: 'loadport', object: portProxy },
      { id: 'stocker', object: tableProxy },
    ],
    anchors: { loadPort: new THREE.Vector3(LOAD_PORT.x, 1.1, LOAD_PORT.z), stocker: new THREE.Vector3(tcx, 0.9, tcz) },
    speed: 1,
    /** Hover proxies of FOUPs that carry a turn. */
    hoverObjects(out = []) {
      for (const f of foups) if (f.no) out.push(f.proxy);
      return out;
    },
    dockReady: () => !!dock && dock.state === 'dock' && dock.doorOpen >= 1,
    dockTurn: () => (dock ? dock.no || null : null),
    dockCount: () => (dock ? dock.count : 0),
    bindDock(no, info) {
      if (!dock || dock.no) return false;
      dock.no = no;
      dock.info = info || null;
      refreshLabel(dock);
      return true;
    },
    /** World position of the dock FOUP's slot k. */
    slotPoint(k, out = new THREE.Vector3()) {
      const base = dock ? dock.g.position : new THREE.Vector3(LOAD_PORT.x, PORT_TOP, LOAD_PORT.z);
      return out.set(base.x + SLOT_X, base.y + SLOT_Y0 + Math.min(k, FOUP_SLOTS - 1) * SLOT_DY, base.z);
    },
    addWafer(look) {
      if (dock) addTo(dock, look);
    },
    /** Count a wafer into the FOUP of turn `no` wherever it is (late arrival). */
    addLate(no, look) {
      for (const f of foups) if (f.no === no && f.state !== 'sink') return addTo(f, look), true;
      return false;
    },
    updateInfo(no, info) {
      for (const f of foups) if (f.no === no) ((f.info = info), refreshLabel(f));
    },
    ship(no) {
      if (!dock || dock.no !== no || shipQueue.includes(dock) || (program && program.foup === dock)) return false;
      shipQueue.push(dock);
      return true;
    },
    shipped: (no) => {
      for (const f of foups) if (f.no === no) return f.state === 'carried' || f.state === 'nest' || f.state === 'sink' || shipQueue.includes(f) || (program && program.foup === f);
      return false;
    },
    /** First sync: put a finished turn's FOUP straight onto its nest. */
    placeNest(no, info, looks) {
      const f = createFoup();
      f.no = no;
      f.info = info;
      for (const l of looks) addTo(f, l);
      placeOnNest(f, nestIndex(no));
      refreshLabel(f);
    },
    /** First sync: docked FOUP (optionally bound to the running turn). */
    resetDock(no, info, looks) {
      if (dock) removeFoup(dock);
      const f = spawnDock(true);
      if (no) {
        f.no = no;
        f.info = info;
        for (const l of looks || []) addTo(f, l);
      }
      refreshLabel(f);
    },
    busy: () => !!program || shipQueue.length > 0,
    update(dt) {
      // Crane program.
      if (!program && shipQueue.length) {
        const f = shipQueue.shift();
        program = shipProgram(f);
        program.foup = f;
      }
      let budget = dt * api.speed;
      while (program && budget > 0) {
        const st = program.steps[program.i];
        if (!st) {
          program = null;
          break;
        }
        if (!st.run) {
          st.run = st.setup();
          st.t = 0;
        }
        if (!st.run.d) {
          if (st.run.fn) st.run.fn(1);
          program.i += 1;
          continue;
        }
        const take = Math.min(budget, st.run.d - st.t);
        st.t += take;
        budget -= take;
        if (st.run.fn) st.run.fn(easeInOut(clamp(st.t / st.run.d, 0, 1)));
        if (st.t >= st.run.d - 1e-6) program.i += 1;
      }
      applyCrane();
      // FOUP animations.
      for (const f of [...foups]) {
        if (f.state === 'spawning') {
          f.sp = Math.min(1, f.sp + dt / 0.8);
          f.g.position.y = PORT_TOP - (FH + 0.07) * (1 - easeInOut(f.sp));
          if (f.sp >= 1) f.state = 'dock';
        } else if (f.state === 'dock' && f.doorOpen < 1) {
          f.doorOpen = Math.min(1, f.doorOpen + dt / 0.6);
          applyDoor(f);
        } else if (f.state === 'sink') {
          f.sp = Math.min(1, f.sp + dt / 1.2);
          f.g.position.y = TABLE_TOP - (FH + 0.09) * easeInOut(f.sp);
          if (f.sp >= 1) removeFoup(f);
        }
      }
      for (let i = 0; i < NESTS; i++) nestLeds[i].emissiveIntensity = nests[i] ? 1.6 : 0;
      const busy = !!program;
      portLeds[0].emissiveIntensity = api.dockReady() ? 1.8 : 0.15;
      portLeds[1].emissiveIntensity = dock && dock.state === 'closing' ? 2.2 : 0.15;
      portLeds[2].emissiveIntensity = busy ? 1.8 : 0.15;
    },
    dispose() {
      for (const f of [...foups]) removeFoup(f);
      for (const o of [tpl.g, tpl.door]) o.traverse((m) => m.geometry && m.geometry.dispose());
      proxyGeo.dispose();
      labelGeo.dispose();
      hidden.dispose();
    },
  };
  applyCrane();
  return api;
}
