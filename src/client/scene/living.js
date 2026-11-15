import * as THREE from 'three';
import { Kit, tf, rbox, box, cyl, sphere, lathe, pipeGeometry, canvasTexture, FONT_SANS, FONT_MONO, TAU } from './util.js';
import { ledMaterial, plateMaterial } from './materials.js';
import { glowMaterial } from './environment.js';
import { nameplate } from './displays.js';
import { ATRIUM } from './layout.js';
import { MACHINE_INFO } from '../../model/stations.js';

/*
 * Living quarters behind the media wall: a warm wooden deck between the back of the wall and
 * the glass, with a lounge under a slim pergola, a sleep pod, a kitchen corner with a rice
 * cooker, a desk with a holo screen and an aquarium. Nothing here is driven by the session;
 * it is a home for an operator character to come, which will use the named anchor points
 * (`mascot-anchor:*`) for sitting, sleeping, eating, working and looking out.
 *
 * Local frame: origin on the floor 17 m behind the atrium centre, axes as the world's, so −z
 * points at the glass (and the city) and +z at the back of the media wall. The deck spans
 * x −5…5, z −3.3…3.3, which keeps ≥ 0.75 m from the wall (r 12.95) and the glass (r 22).
 */

export const LIVING_ORIGIN = new THREE.Vector3(ATRIUM.cx, 0, ATRIUM.cz - 17);
const DECK = { x0: -5, x1: 5, z0: -3.3, z1: 3.3, h: 0.06 };
const TOP = DECK.h;

/** Anchor points for a character: where to stand or sit, which way to face (yaw 0 = +z). */
const ANCHORS = [
  { id: 'sofa', pose: 'sit', p: [-1.2, TOP + 0.44, 0.85], yaw: Math.PI },
  { id: 'bed', pose: 'sleep', p: [3.25, TOP + 0.52, 1.6], yaw: -Math.PI / 2 },
  { id: 'counter', pose: 'eat', p: [-3.75, TOP + 0.69, 1.92], yaw: 0 },
  { id: 'desk', pose: 'work', p: [3.4, TOP + 0.5, -1.45], yaw: Math.PI },
  { id: 'window', pose: 'stand', p: [0.2, TOP, -3.0], yaw: Math.PI },
  { id: 'aquarium', pose: 'stand', p: [-3.2, TOP, -1.4], yaw: Math.atan2(-0.8, -0.6) },
  { id: 'entry', pose: 'stand', p: [-5.0, 0, 3.6], yaw: Math.atan2(3.8, -2.7) },
];

function drawPlanks(g, w, h) {
  const rows = 8;
  const ph = h / rows;
  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let r = 0; r < rows; r++) {
    let x = -rnd() * w * 0.5;
    while (x < w) {
      const len = w * (0.35 + rnd() * 0.4);
      const tone = 0.9 + rnd() * 0.18;
      g.fillStyle = `rgb(${Math.round(196 * tone)}, ${Math.round(152 * tone)}, ${Math.round(110 * tone)})`;
      g.fillRect(x, r * ph, len, ph);
      // Grain.
      g.strokeStyle = 'rgba(90, 58, 30, 0.12)';
      g.lineWidth = 1;
      for (let k = 0; k < 5; k++) {
        const y = r * ph + ph * (0.15 + rnd() * 0.7);
        g.beginPath();
        g.moveTo(x, y);
        g.bezierCurveTo(x + len * 0.3, y + (rnd() - 0.5) * 4, x + len * 0.7, y + (rnd() - 0.5) * 4, x + len, y);
        g.stroke();
      }
      g.fillStyle = 'rgba(60, 38, 20, 0.45)';
      g.fillRect(x + len - 1, r * ph, 2, ph);
      x += len;
    }
    g.fillStyle = 'rgba(60, 38, 20, 0.5)';
    g.fillRect(0, r * ph, w, 2);
  }
}

function drawRug(g, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  g.fillStyle = '#26345a';
  g.fillRect(0, 0, w, h);
  const grad = g.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
  grad.addColorStop(0, '#34477a');
  grad.addColorStop(1, '#1d2846');
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(150, 215, 255, 0.55)';
  for (const [r, lw] of [[0.46, 6], [0.4, 2], [0.22, 3], [0.08, 2]]) {
    g.lineWidth = lw;
    g.beginPath();
    g.arc(cx, cy, w * r, 0, TAU);
    g.stroke();
  }
  // A ring of small dots, like a ripple.
  g.fillStyle = 'rgba(150, 215, 255, 0.4)';
  for (let k = 0; k < 48; k++) {
    const a = (k / 48) * TAU;
    g.beginPath();
    g.arc(cx + Math.cos(a) * w * 0.31, cy + Math.sin(a) * w * 0.31, 3, 0, TAU);
    g.fill();
  }
}

function drawHolo(g, w, h, clock) {
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(6, 18, 40, 0.78)';
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(70, 210, 255, 0.9)';
  g.lineWidth = 3;
  g.strokeRect(4, 4, w - 8, h - 8);
  g.fillStyle = '#7fe3ff';
  g.font = `700 26px ${FONT_SANS}`;
  g.textBaseline = 'top';
  g.fillText(`${MACHINE_INFO.living.code} · ${MACHINE_INFO.living.zh}`, 22, 18);
  g.fillStyle = 'rgba(200, 236, 255, 0.85)';
  g.font = `600 18px ${FONT_SANS}`;
  g.fillText('LIVING QUARTERS · STANDBY', 22, 54);
  g.fillStyle = '#e8f6ff';
  g.font = `700 92px ${FONT_MONO}`;
  g.fillText(clock, 22, 96);
  g.fillStyle = 'rgba(70, 210, 255, 0.35)';
  for (let k = 0; k < 18; k++) {
    const bh = 10 + ((k * 37) % 41);
    g.fillRect(w - 26 - k * 14, h - 22 - bh, 9, bh);
  }
}

function clockText(date) {
  const two = (n) => String(n).padStart(2, '0');
  return `${two(date.getHours())}:${two(date.getMinutes())}`;
}

/** An invisible box under its own group, measured by camspace.solidsFromScene. */
function solidBox(id, w, h, d, p, rotY = 0) {
  const g = new THREE.Group();
  g.name = `solid-${id}`;
  g.position.set(p[0], 0, p[2]);
  g.rotation.y = rotY;
  g.userData.solid = `living:${id}`;
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), HIDDEN);
  m.position.y = h / 2;
  g.add(m);
  return g;
}
const HIDDEN = new THREE.MeshBasicMaterial({ visible: false });

/**
 * buildLiving(M) → { root, anchors, hover, labelAnchor, update(dt, t), dispose() }
 * anchors: [{ id, pose, position (world), yaw }] for a future character.
 */
export function buildLiving(M) {
  const root = new THREE.Group();
  root.name = 'living';
  root.position.copy(LIVING_ORIGIN);

  const planks = canvasTexture(512, 512, drawPlanks, { repeat: [3, 2], anisotropy: 8 });
  const rugTex = canvasTexture(512, 512, drawRug, { anisotropy: 8 });
  const mats = {
    wood: new THREE.MeshStandardMaterial({ name: 'living-wood', color: 0xffffff, map: planks.tex, roughness: 0.52, metalness: 0 }),
    woodDark: new THREE.MeshStandardMaterial({ name: 'living-wood-dark', color: 0x6e4a2c, roughness: 0.55 }),
    fabric: new THREE.MeshStandardMaterial({ name: 'living-fabric', color: 0xe8e4dc, roughness: 0.92 }),
    fabricBlue: new THREE.MeshStandardMaterial({ name: 'living-fabric-blue', color: 0x4f6db8, roughness: 0.88 }),
    rug: new THREE.MeshStandardMaterial({ name: 'living-rug', map: rugTex.tex, roughness: 1 }),
    leaf: new THREE.MeshStandardMaterial({ name: 'living-leaf', color: 0x3f7f4f, roughness: 0.75 }),
    leaf2: new THREE.MeshStandardMaterial({ name: 'living-leaf-light', color: 0x67a865, roughness: 0.75 }),
    soil: new THREE.MeshStandardMaterial({ name: 'living-soil', color: 0x3a2a1e, roughness: 1 }),
    sand: new THREE.MeshStandardMaterial({ name: 'living-sand', color: 0xd9c9a3, roughness: 0.95 }),
    rice: new THREE.MeshStandardMaterial({ name: 'living-rice', color: 0xfbf8f0, roughness: 0.7 }),
    eye: new THREE.MeshStandardMaterial({ name: 'living-eye', color: 0x111317, roughness: 0.3 }),
    bookA: new THREE.MeshStandardMaterial({ name: 'living-book-a', color: 0x3d5aa8, roughness: 0.7 }),
    bookB: new THREE.MeshStandardMaterial({ name: 'living-book-b', color: 0xc8763a, roughness: 0.7 }),
    bookC: new THREE.MeshStandardMaterial({ name: 'living-book-c', color: 0xe9e2cf, roughness: 0.7 }),
    bookD: new THREE.MeshStandardMaterial({ name: 'living-book-d', color: 0x2f7a72, roughness: 0.7 }),
    warm: glowMaterial(0xffd6a0, 2.8),
    cyan: glowMaterial(0x46d2ff, 2.4),
    white: M.white,
    ceramic: M.ceramic,
    chrome: M.chrome,
    alu: M.alu,
    graphite: M.graphite,
    blue: M.blue,
    rubber: M.rubber,
  };
  const kit = new Kit();
  const add = (key, geo, p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) => kit.add(key, tf(geo, p, r, s));

  // ── Deck and rug ────────────────────────────────────────────
  const dw = DECK.x1 - DECK.x0;
  const dd = DECK.z1 - DECK.z0;
  add('wood', rbox(dw, DECK.h, dd, 0.02, 2), [0, DECK.h / 2, 0]);
  // A thin light line where the deck meets the stone floor.
  add('warm', box(dw - 0.1, 0.006, 0.012), [0, 0.004, DECK.z0 - 0.004]);
  add('warm', box(dw - 0.1, 0.006, 0.012), [0, 0.004, DECK.z1 + 0.004]);
  add('rug', new THREE.CircleGeometry(1.85, 64), [-1.2, TOP + 0.004, -0.35], [-Math.PI / 2, 0, 0]);

  // ── Lounge: sofa, coffee table, floor lamp, plush whale ────
  {
    const c = [-1.2, TOP, 0.9];
    const at = (x, y, z) => [c[0] + x, c[1] + y, c[2] + z];
    add('fabric', rbox(3.0, 0.28, 0.95, 0.08, 3), at(0, 0.22, 0));
    for (const x of [-1.0, 0, 1.0]) {
      add('fabric', rbox(0.97, 0.16, 0.8, 0.07, 3), at(x, 0.44, -0.06));
      add('fabric', rbox(0.97, 0.44, 0.2, 0.09, 3), at(x, 0.68, 0.36), [-0.14, 0, 0]);
    }
    for (const x of [-1.6, 1.6]) add('fabric', rbox(0.2, 0.5, 0.95, 0.08, 3), at(x, 0.33, 0));
    add('fabricBlue', rbox(0.5, 0.36, 0.14, 0.06, 3), at(-0.95, 0.66, 0.2), [-0.3, 0.25, 0]);
    add('fabricBlue', rbox(0.5, 0.36, 0.14, 0.06, 3), at(0.35, 0.66, 0.2), [-0.3, -0.2, 0]);
    for (const x of [-1.42, 1.42]) for (const z of [-0.38, 0.38]) add('chrome', cyl(0.025, 0.02, 0.08, 10), at(x, 0.04, z));
    add('warm', box(2.7, 0.004, 0.7), at(0, 0.002, 0));
    // Plush whale on the right seat.
    const w = at(0.92, 0.6, -0.05);
    add('blue', sphere(1, 20, 14), w, [0, 0.3, 0], [0.24, 0.17, 0.16]);
    add('white', sphere(1, 16, 10), [w[0] + 0.02, w[1] - 0.05, w[2] - 0.03], [0, 0.3, 0], [0.18, 0.1, 0.12]);
    add('blue', sphere(1, 12, 8), [w[0] - 0.26, w[1] + 0.07, w[2] - 0.1], [0, 0.3, 0.6], [0.08, 0.025, 0.12]);
    add('blue', sphere(1, 10, 8), [w[0] + 0.05, w[1] - 0.02, w[2] - 0.17], [0.5, 0, 0], [0.07, 0.02, 0.05]);
    add('eye', sphere(0.016, 10, 8), [w[0] + 0.16, w[1] + 0.03, w[2] - 0.12]);
    add('eye', sphere(0.016, 10, 8), [w[0] + 0.2, w[1] + 0.03, w[2] + 0.03]);
  }
  {
    // Round coffee table with a bowl of rice and a mug.
    const c = [-1.2, TOP, -0.7];
    add('white', cyl(0.52, 0.52, 0.035, 48), [c[0], c[1] + 0.4, c[2]]);
    add('chrome', cyl(0.05, 0.08, 0.36, 20), [c[0], c[1] + 0.2, c[2]]);
    add('chrome', cyl(0.28, 0.3, 0.025, 32), [c[0], c[1] + 0.012, c[2]]);
    const b = [c[0] + 0.16, c[1] + 0.418, c[2] + 0.08];
    add('white', lathe([[0, 0], [0.045, 0.002], [0.07, 0.02], [0.082, 0.05], [0.085, 0.056], [0.078, 0.056], [0.072, 0.03], [0.04, 0.012], [0, 0.012]], 28), b);
    add('rice', sphere(1, 20, 10), [b[0], b[1] + 0.05, b[2]], [0, 0, 0], [0.072, 0.028, 0.072]);
    add('woodDark', box(0.22, 0.008, 0.008), [b[0] + 0.02, b[1] + 0.08, b[2] - 0.02], [0, 0.3, 0.12]);
    add('woodDark', box(0.22, 0.008, 0.008), [b[0] + 0.02, b[1] + 0.08, b[2] + 0.01], [0, 0.2, 0.12]);
    add('blue', cyl(0.038, 0.034, 0.09, 20), [c[0] - 0.22, c[1] + 0.462, c[2] - 0.12]);
  }
  {
    // Arc floor lamp leaning over the sofa.
    const base = [-3.15, TOP, 1.45];
    add('chrome', cyl(0.2, 0.22, 0.04, 32), [base[0], base[1] + 0.02, base[2]]);
    kit.add('chrome', pipeGeometry([[base[0], base[1] + 0.04, base[2]], [base[0], base[1] + 1.95, base[2]], [-2.3, TOP + 2.3, 1.05], [-1.7, TOP + 2.05, 0.6]], 0.016, 0.35, 10));
    add('white', new THREE.SphereGeometry(0.24, 28, 12, 0, TAU, 0, Math.PI / 2), [-1.7, TOP + 1.86, 0.6]);
    add('warm', new THREE.CircleGeometry(0.21, 28), [-1.7, TOP + 1.862, 0.6], [Math.PI / 2, 0, 0]);
  }

  // ── Pergola over the lounge ────────────────────────────────
  {
    const x0 = -3.35;
    const x1 = 0.95;
    const z0 = -2.0;
    const z1 = 2.0;
    const H = 3.0;
    for (const x of [x0, x1]) for (const z of [z0, z1]) add('white', rbox(0.09, H, 0.09, 0.02), [x, TOP + H / 2, z]);
    for (const z of [z0, z1]) add('white', rbox(x1 - x0 + 0.09, 0.1, 0.1, 0.02), [(x0 + x1) / 2, TOP + H, z]);
    for (const x of [x0, x1]) add('white', rbox(0.1, 0.1, z1 - z0, 0.02), [x, TOP + H, 0]);
    for (let k = 1; k < 6; k++) {
      const x = x0 + ((x1 - x0) * k) / 6;
      add('alu', box(0.05, 0.06, z1 - z0 - 0.1), [x, TOP + H + 0.02, 0]);
    }
    for (const z of [z0 + 0.06, z1 - 0.06]) add('warm', box(x1 - x0 - 0.1, 0.012, 0.025), [(x0 + x1) / 2, TOP + H - 0.056, z]);
  }

  // ── Sleep pod ───────────────────────────────────────────────
  {
    const c = [3.35, TOP, 1.6];
    const at = (x, y, z) => [c[0] + x, c[1] + y, c[2] + z];
    add('white', rbox(2.3, 0.26, 1.4, 0.1, 3), at(0, 0.23, 0));
    add('warm', box(2.1, 0.004, 1.2), at(0, 0.002, 0));
    add('fabric', rbox(2.12, 0.17, 1.26, 0.07, 3), at(0, 0.44, 0));
    add('fabricBlue', rbox(1.3, 0.05, 1.28, 0.03, 2), at(0.36, 0.535, 0));
    add('fabric', rbox(0.44, 0.11, 0.82, 0.05, 3), at(-0.78, 0.58, 0));
    add('white', rbox(0.09, 0.56, 1.36, 0.03, 2), at(-1.13, 0.64, 0));
    // A shell arching over the head end, with a reading light along its crest.
    const shell = new THREE.CylinderGeometry(0.74, 0.74, 1.38, 40, 1, true, Math.PI / 2, Math.PI);
    add('ceramic', shell, at(-0.45, 0.36, 0), [Math.PI / 2, 0, 0]);
    add('warm', box(0.03, 0.012, 1.22), at(-0.45, 0.36 + 0.725, 0));
  }

  // ── Kitchen corner ──────────────────────────────────────────
  {
    const cz = 2.62;
    add('white', rbox(1.85, 0.86, 0.62, 0.03, 2), [-3.8, TOP + 0.45, cz]);
    add('graphite', box(1.8, 0.06, 0.56), [-3.8, TOP + 0.03, cz + 0.02]);
    add('wood', rbox(1.92, 0.045, 0.68, 0.015, 2), [-3.8, TOP + 0.905, cz]);
    add('ceramic', rbox(0.7, 1.95, 0.64, 0.04, 2), [-2.5, TOP + 0.975, cz]);
    add('chrome', box(0.02, 0.6, 0.03), [-2.2, TOP + 1.2, cz - 0.33]);
    add('wood', box(1.8, 0.04, 0.28), [-3.8, TOP + 1.72, cz + 0.17]);
    for (const [x, h, k] of [[-4.45, 0.18, 'white'], [-4.25, 0.14, 'ceramic'], [-4.07, 0.2, 'white']]) add(k, cyl(0.06, 0.06, h, 18), [x, TOP + 1.74 + h / 2, cz + 0.17]);
    add('soil', cyl(0.08, 0.06, 0.12, 16), [-3.2, TOP + 1.8, cz + 0.17]);
    add('leaf2', sphere(0.14, 12, 8), [-3.2, TOP + 1.95, cz + 0.17], [0, 0, 0], [1, 0.8, 1]);
    // The rice cooker, always keeping warm.
    const rc = [-4.0, TOP + 0.93, cz - 0.04];
    add('white', cyl(0.16, 0.15, 0.2, 36), [rc[0], rc[1] + 0.1, rc[2]]);
    add('graphite', lathe([[0.155, 0], [0.16, 0.02], [0.13, 0.06], [0.06, 0.08], [0, 0.082]], 36), [rc[0], rc[1] + 0.2, rc[2]]);
    add('chrome', cyl(0.012, 0.012, 0.02, 10), [rc[0] + 0.05, rc[1] + 0.29, rc[2]]);
    add('graphite', box(0.08, 0.03, 0.03), [rc[0], rc[1] + 0.29, rc[2] - 0.02]);
    for (const x of [-4.4, -3.75]) {
      add('fabricBlue', cyl(0.18, 0.18, 0.06, 28), [x, TOP + 0.66, 1.92]);
      add('chrome', cyl(0.025, 0.025, 0.6, 12), [x, TOP + 0.33, 1.92]);
      add('chrome', cyl(0.2, 0.22, 0.025, 28), [x, TOP + 0.012, 1.92]);
      add('chrome', new THREE.TorusGeometry(0.16, 0.012, 8, 28), [x, TOP + 0.25, 1.92], [Math.PI / 2, 0, 0]);
    }
  }
  const cookerLed = ledMaterial(0x46d2ff, 1.6);
  const led = new THREE.Mesh(box(0.035, 0.012, 0.006), cookerLed);
  led.position.set(-4.0, TOP + 1.07, 2.42);
  root.add(led);

  // ── Desk with a holo screen ────────────────────────────────
  {
    const c = [3.4, TOP, -2.05];
    add('white', rbox(1.6, 0.04, 0.72, 0.015, 2), [c[0], c[1] + 0.74, c[2]]);
    for (const x of [-0.76, 0.76]) add('white', rbox(0.04, 0.72, 0.64, 0.015, 2), [c[0] + x, c[1] + 0.36, c[2]]);
    add('cyan', box(1.5, 0.006, 0.012), [c[0], c[1] + 0.718, c[2] - 0.35]);
    add('graphite', rbox(0.48, 0.02, 0.16, 0.008, 2), [c[0] - 0.1, c[1] + 0.77, c[2] + 0.12]);
    add('chrome', cyl(0.012, 0.014, 0.3, 10), [c[0], c[1] + 0.91, c[2] - 0.22]);
    add('chrome', cyl(0.07, 0.08, 0.012, 20), [c[0], c[1] + 0.766, c[2] - 0.22]);
    // Chair.
    const ch = [c[0], c[1], c[2] + 0.62];
    add('fabricBlue', rbox(0.5, 0.08, 0.48, 0.04, 2), [ch[0], ch[1] + 0.48, ch[2]]);
    add('fabricBlue', rbox(0.5, 0.52, 0.07, 0.04, 2), [ch[0], ch[1] + 0.82, ch[2] + 0.24], [0.1, 0, 0]);
    add('chrome', cyl(0.025, 0.025, 0.4, 12), [ch[0], ch[1] + 0.24, ch[2]]);
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * TAU;
      add('graphite', box(0.32, 0.03, 0.04), [ch[0] + Math.cos(a) * 0.16, ch[1] + 0.04, ch[2] + Math.sin(a) * 0.16], [0, -a, 0]);
      add('rubber', sphere(0.025, 10, 8), [ch[0] + Math.cos(a) * 0.31, ch[1] + 0.025, ch[2] + Math.sin(a) * 0.31]);
    }
  }
  let clock = clockText(new Date());
  const holo = canvasTexture(512, 288, (g, w, h) => drawHolo(g, w, h, clock), { anisotropy: 8 });
  const holoMat = new THREE.MeshBasicMaterial({ name: 'living-holo', map: holo.tex, transparent: true, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });
  holoMat.color.setScalar(1.3);
  const holoMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.88, 0.495), holoMat);
  holoMesh.position.set(3.4, TOP + 1.3, -2.27);
  holoMesh.rotation.x = -0.08; // faces the chair (+z), tilted back a little
  holoMesh.renderOrder = 3;
  root.add(holoMesh);

  // ── Aquarium ────────────────────────────────────────────────
  const tank = new THREE.Vector3(-4.0, TOP, -2.05);
  add('white', cyl(0.5, 0.53, 0.36, 48), [tank.x, tank.y + 0.18, tank.z]);
  add('chrome', cyl(0.48, 0.48, 0.03, 48), [tank.x, tank.y + 0.375, tank.z]);
  add('sand', cyl(0.44, 0.44, 0.07, 40), [tank.x, tank.y + 0.425, tank.z]);
  add('chrome', cyl(0.48, 0.48, 0.03, 48), [tank.x, tank.y + 1.52, tank.z]);
  add('cyan', new THREE.TorusGeometry(0.47, 0.008, 6, 64), [tank.x, tank.y + 0.4, tank.z], [Math.PI / 2, 0, 0]);
  for (const [dx, dz, h, k] of [[0.18, 0.1, 0.42, 'leaf'], [-0.2, -0.12, 0.3, 'leaf2'], [0.05, -0.25, 0.36, 'leaf']]) {
    add(k, cyl(0.012, 0.03, h, 6), [tank.x + dx, tank.y + 0.46 + h / 2, tank.z + dz], [0.15, 0, 0.1]);
  }
  const water = new THREE.Mesh(
    cyl(0.445, 0.445, 1.05, 40),
    new THREE.MeshStandardMaterial({
      name: 'living-water', color: 0x6cc4ff, emissive: 0x1d6fd0, emissiveIntensity: 0.55,
      roughness: 0.1, metalness: 0, transparent: true, opacity: 0.32, depthWrite: false,
    }),
  );
  water.position.set(tank.x, tank.y + 0.97, tank.z);
  water.renderOrder = 1;
  root.add(water);
  const tankGlass = new THREE.Mesh(cyl(0.47, 0.47, 1.12, 48, true), M.glass);
  tankGlass.position.set(tank.x, tank.y + 0.96, tank.z);
  tankGlass.renderOrder = 2;
  root.add(tankGlass);
  // Fish swimming slow circles at different depths.
  const fishGeo = (() => {
    const body = tf(new THREE.SphereGeometry(1, 12, 8), [0, 0, 0], [0, 0, 0], [0.05, 0.026, 0.018]);
    const tail = tf(new THREE.ConeGeometry(0.022, 0.04, 6), [-0.062, 0, 0], [0, 0, Math.PI / 2], [1, 1, 0.35]);
    const g = new THREE.BufferGeometry();
    const parts = [body, tail].map((p) => p.toNonIndexed());
    const pos = [];
    const nor = [];
    for (const p of parts) {
      pos.push(...p.attributes.position.array);
      nor.push(...p.attributes.normal.array);
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    for (const p of parts) p.dispose();
    body.dispose();
    tail.dispose();
    return g;
  })();
  const FISH = [
    { r: 0.28, y: 0.75, s: 0.5, ph: 0, c: 0xff8a3d },
    { r: 0.2, y: 1.05, s: -0.65, ph: 1.4, c: 0xffffff },
    { r: 0.32, y: 1.25, s: 0.42, ph: 2.6, c: 0x4d8bff },
    { r: 0.16, y: 0.9, s: 0.8, ph: 3.9, c: 0xffc04d },
    { r: 0.25, y: 1.38, s: -0.48, ph: 5.1, c: 0xff6a6a },
    { r: 0.3, y: 0.62, s: -0.38, ph: 0.7, c: 0x9fe8ff },
  ];
  const fish = new THREE.InstancedMesh(fishGeo, new THREE.MeshStandardMaterial({ name: 'living-fish', roughness: 0.4, metalness: 0.1 }), FISH.length);
  fish.name = 'aquarium-fish';
  fish.frustumCulled = false;
  const fc = new THREE.Color();
  FISH.forEach((f, i) => fish.setColorAt(i, fc.setHex(f.c)));
  root.add(fish);
  const fm = new THREE.Matrix4();
  const fq = new THREE.Quaternion();
  const fp = new THREE.Vector3();
  const fs = new THREE.Vector3(1, 1, 1);
  const fe = new THREE.Euler();
  function placeFish(t) {
    FISH.forEach((f, i) => {
      const a = f.ph + t * f.s;
      fp.set(tank.x + Math.cos(a) * f.r, tank.y + f.y + Math.sin(t * 0.9 + f.ph) * 0.03, tank.z - Math.sin(a) * f.r);
      // Heading along the circle (counter-clockwise for positive speed).
      fe.set(0, a + (f.s > 0 ? Math.PI / 2 : -Math.PI / 2), Math.sin(t * 3 + i) * 0.08);
      fq.setFromEuler(fe);
      fm.compose(fp, fq, fs);
      fish.setMatrixAt(i, fm);
    });
    fish.instanceMatrix.needsUpdate = true;
  }
  placeFish(0);

  // ── Bookshelf against the back of the media wall ────────────
  {
    // An open frame: dark back panel, white boards, four bays on two shelves.
    const c = [0.6, TOP, 3.02];
    const W = 3.6;
    const D = 0.42;
    add('graphite', box(W, 0.9, 0.03), [c[0], c[1] + 0.45, c[2] + D / 2 - 0.015]);
    add('white', box(W, 0.04, D), [c[0], c[1] + 0.02, c[2]]);
    add('white', box(W - 0.04, 0.03, D - 0.02), [c[0], c[1] + 0.45, c[2]]);
    add('white', rbox(W + 0.02, 0.05, D + 0.02, 0.015, 2), [c[0], c[1] + 0.9, c[2]]);
    for (const x of [-W / 2 + 0.015, -0.9, 0, 0.9, W / 2 - 0.015]) add('white', box(0.03, 0.88, D), [c[0] + x, c[1] + 0.45, c[2]]);
    const books = ['bookA', 'bookB', 'bookC', 'bookD'];
    const bays = [-W / 2 + 0.03, -0.885, 0.015, 0.915];
    let n = 0;
    for (let shelf = 0; shelf < 2; shelf++) {
      bays.forEach((bx, k) => {
        if ((k + shelf) % 3 === 2) return;
        let x = c[0] + bx + 0.02;
        const count = 5 + ((k * 3 + shelf) % 5);
        for (let b = 0; b < count; b++) {
          const w = 0.04 + ((n * 7) % 5) * 0.008;
          const h = (shelf ? 0.3 : 0.32) - ((n * 11) % 4) * 0.025;
          add(books[n % 4], box(w, h, 0.24), [x + w / 2, c[1] + (shelf ? 0.465 : 0.04) + h / 2, c[2] + 0.02]);
          x += w + 0.004;
          n += 1;
        }
      });
    }
    // Photo frame and a small plant on top.
    add('graphite', rbox(0.34, 0.26, 0.03, 0.01, 2), [c[0] - 0.9, c[1] + 1.055, c[2] + 0.05]);
    add('cyan', box(0.3, 0.22, 0.002), [c[0] - 0.9, c[1] + 1.055, c[2] + 0.034]);
    add('white', cyl(0.09, 0.07, 0.14, 18), [c[0] + 1.1, c[1] + 0.97, c[2]]);
    add('leaf', sphere(0.15, 12, 8), [c[0] + 1.1, c[1] + 1.15, c[2]], [0, 0, 0], [1, 0.9, 1]);
  }

  // ── Potted plants ───────────────────────────────────────────
  for (const [x, z, s] of [[-4.55, 0.4, 1], [4.55, -0.35, 0.85], [1.55, 2.55, 0.7]]) {
    add('white', cyl(0.27 * s, 0.21 * s, 0.5 * s, 28), [x, TOP + 0.25 * s, z]);
    add('soil', cyl(0.25 * s, 0.25 * s, 0.02, 24), [x, TOP + 0.49 * s, z]);
    const leaves = [[0, 0.95, 0, 0.36], [0.16, 1.2, 0.08, 0.28], [-0.14, 1.28, -0.06, 0.3], [0.02, 1.5, 0.05, 0.24], [-0.04, 1.12, 0.18, 0.22]];
    leaves.forEach(([dx, y, dz, r], k) => add(k % 2 ? 'leaf2' : 'leaf', sphere(r * s, 12, 8), [x + dx * s, TOP + y * s, z + dz * s], [0, 0, 0], [1, 0.85, 1]));
    add('woodDark', cyl(0.02 * s, 0.03 * s, 0.6 * s, 6), [x, TOP + 0.75 * s, z]);
  }

  // ── Name totem at the entrance ──────────────────────────────
  const totemPos = [-5.35, 0, 3.4];
  const totemYaw = Math.atan2(-0.7, 0.7);
  add('white', rbox(0.5, 1.4, 0.12, 0.03, 2), [totemPos[0], 0.7, totemPos[2]], [0, totemYaw, 0]);
  add('cyan', box(0.012, 1.3, 0.13), [totemPos[0] + Math.cos(totemYaw) * 0.26, 0.7, totemPos[2] - Math.sin(totemYaw) * 0.26], [0, totemYaw, 0]);
  const info = MACHINE_INFO.living;
  const plate = nameplate(info.zh, info.en, info.code);
  const plateMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.13), plateMaterial(plate.tex, 0.2));
  plateMesh.position.set(totemPos[0] + Math.sin(totemYaw) * 0.062, 1.12, totemPos[2] + Math.cos(totemYaw) * 0.062);
  plateMesh.rotation.y = totemYaw;
  root.add(plateMesh);

  const built = kit.build(mats, { castShadow: false, receiveShadow: true, name: 'living' });
  root.add(built);

  // ── Camera solids, hover proxy, anchors ────────────────────
  root.add(
    solidBox('bed', 2.4, 1.15, 1.45, [3.35, 0, 1.6]),
    solidBox('kitchen', 2.6, 1.98, 0.72, [-3.45, 0, 2.62]),
    solidBox('aquarium', 1.08, 1.56, 1.08, [tank.x, 0, tank.z]),
    solidBox('bookshelf', 3.62, 0.95, 0.46, [0.6, 0, 3.02]),
    solidBox('desk', 1.62, 1.6, 0.8, [3.4, 0, -2.05]),
  );
  const proxy = new THREE.Mesh(new THREE.BoxGeometry(DECK.x1 - DECK.x0, 1.2, DECK.z1 - DECK.z0), HIDDEN);
  proxy.position.set(0, 0.6, 0);
  proxy.name = 'living-hover';
  root.add(proxy);

  const anchors = ANCHORS.map((a) => {
    const o = new THREE.Object3D();
    o.name = `mascot-anchor:${a.id}`;
    o.position.fromArray(a.p);
    o.rotation.y = a.yaw;
    o.userData = { mascotAnchor: a.id, pose: a.pose };
    root.add(o);
    return { id: a.id, pose: a.pose, position: new THREE.Vector3().fromArray(a.p).add(LIVING_ORIGIN), yaw: a.yaw };
  });

  let clockCheck = 0;
  return {
    root,
    anchors,
    hover: [{ id: 'living', object: proxy }],
    labelAnchor: new THREE.Vector3(0, 3.55, 0).add(LIVING_ORIGIN),
    update(dt, t) {
      placeFish(t);
      cookerLed.emissiveIntensity = 1.2 + 0.6 * (0.5 + 0.5 * Math.sin(t * 1.7));
      clockCheck -= dt;
      if (clockCheck <= 0) {
        clockCheck = 1;
        const next = clockText(new Date());
        if (next !== clock) {
          clock = next;
          holo.redraw();
        }
      }
    },
    dispose() {
      fishGeo.dispose();
      fish.dispose();
    },
  };
}
