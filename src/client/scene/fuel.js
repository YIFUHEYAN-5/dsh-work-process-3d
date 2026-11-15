// Fuel tank (token balance) and the feed line into the engine.
import * as THREE from 'three';
import { Kit, mesh, group, cyl, rbox, lathe, torus, boltRing, pipeGeometry, tf, damp, canvasTexture, TAU, clamp } from './util.js';
import { ledMaterial, screenMaterial, plateMaterial } from './materials.js';
import { textScreen, scaleStrip } from './displays.js';
import { blobShadow } from './environment.js';

export const TANK_POS = new THREE.Vector3(-8.0, 0, -0.7);
const GLASS_Y0 = 0.41;
const GLASS_H = 1.9;
const LIQUID_H = 1.86;

function flowTexture() {
  return canvasTexture(64, 256, (g, w, h) => {
    g.fillStyle = '#071436';
    g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) {
      const grad = g.createLinearGradient(0, y, 0, y + 20);
      grad.addColorStop(0, 'rgba(120,170,255,0)');
      grad.addColorStop(0.5, 'rgba(160,200,255,1)');
      grad.addColorStop(1, 'rgba(120,170,255,0)');
      g.fillStyle = grad;
      g.fillRect(0, y, w, 20);
    }
  }, { repeat: [1, 2] });
}

export function buildFuel(M) {
  const root = group('fuel');
  const tank = group('tank', [TANK_POS.x, 0, TANK_POS.z]);
  root.add(tank);
  root.add(blobShadow(M, 2.6, 2.6, [TANK_POS.x, 0, TANK_POS.z], 0.6));

  const kit = new Kit();
  kit.add('graphite', tf(rbox(1.8, 0.28, 1.8, 0.05), [0, 0.2, 0]));
  for (const [x, z] of [[-0.75, -0.75], [0.75, -0.75], [-0.75, 0.75], [0.75, 0.75]]) {
    kit.add('rubber', tf(cyl(0.07, 0.08, 0.06, 20), [x, 0.03, z]));
  }
  for (const y of [0.375, 2.345]) {
    kit.add('steel', tf(cyl(0.83, 0.83, 0.07, 72), [0, y, 0]));
    kit.add('chrome', boltRing(18, 0.775, y + (y < 1 ? 0.04 : -0.04), 0.017, 0.016));
    kit.add('rubber', tf(cyl(0.712, 0.712, 0.03, 64), [0, y + (y < 1 ? 0.05 : -0.05), 0]));
  }
  kit.add('alu', lathe([[0.8, 2.38], [0.78, 2.45], [0.7, 2.53], [0.55, 2.6], [0.34, 2.65], [0.12, 2.67], [0.001, 2.672]], 72));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + 0.26;
    const x = Math.cos(a) * 0.79;
    const z = Math.sin(a) * 0.79;
    kit.add('chrome', tf(cyl(0.016, 0.016, 2.04, 12), [x, 1.36, z]));
    for (const y of [0.33, 2.4]) kit.add('steel', tf(cyl(0.03, 0.03, 0.03, 6), [x, y, z]));
  }
  // Top fittings: vent valve, level sensor, beacon base.
  kit.add('steel', tf(cyl(0.05, 0.06, 0.12, 20), [0.32, 2.66, 0.1]));
  kit.add('orange', tf(cyl(0.07, 0.07, 0.025, 20), [0.32, 2.735, 0.1]));
  kit.add('aluDark', tf(rbox(0.16, 0.12, 0.12, 0.02), [-0.3, 2.68, -0.12]));
  kit.add('chrome', tf(cyl(0.07, 0.08, 0.05, 24), [0, 2.695, 0]));
  // Outlet nozzle toward the engine.
  kit.add('steel', tf(cyl(0.055, 0.055, 0.24, 20), [0.93, 0.375, 0], [0, 0, Math.PI / 2]));
  kit.add('steel', tf(cyl(0.1, 0.1, 0.03, 24), [1.04, 0.375, 0], [0, 0, Math.PI / 2]));
  // Scale bracket.
  kit.add('aluDark', tf(rbox(0.12, 1.96, 0.03, 0.01), [0, 1.36, 0.875]));
  tank.add(kit.build(M, { name: 'tank' }));

  const glass = mesh(cyl(0.7, 0.7, GLASS_H, 72, true), M.glass, [0, GLASS_Y0 + GLASS_H / 2, 0], null, null, { cast: false, receive: false });
  tank.add(glass);

  const liquid = mesh(cyl(0.685, 0.685, 1, 72), M.fuel, [0, GLASS_Y0 + 0.5, 0], null, null, { cast: false });
  const surface = mesh(new THREE.CircleGeometry(0.684, 72), M.fuelTop, [0, 1, 0], [-Math.PI / 2, 0, 0], null, { cast: false });
  const meniscus = mesh(torus(0.678, 0.008, 8, 72), M.fuelTop, [0, 1, 0], [Math.PI / 2, 0, 0], null, { cast: false });
  tank.add(liquid, surface, meniscus);

  const BUBBLES = 46;
  const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), M.bubble, BUBBLES);
  bubbles.castShadow = false;
  const bub = Array.from({ length: BUBBLES }, (_, i) => ({
    r: Math.sqrt(Math.random()) * 0.6,
    a: Math.random() * TAU,
    y: Math.random(),
    s: 0.006 + Math.random() * 0.016,
    v: 0.5 + Math.random(),
    w: Math.random() * TAU + i,
  }));
  tank.add(bubbles);

  const scale = mesh(new THREE.PlaneGeometry(0.085, LIQUID_H), plateMaterial(scaleStrip().tex, 0.1), [0, GLASS_Y0 + 0.02 + LIQUID_H / 2, 0.892], null, null, { cast: false });
  const marker = mesh(new THREE.ConeGeometry(0.02, 0.05, 3), ledMaterial(0xff5a3c, 1.4), [0.06, 1, 0.9], [0, 0, Math.PI / 2], null, { cast: false });
  tank.add(scale, marker);

  const beaconMat = ledMaterial(0x3ddc84, 2.5);
  const beacon = mesh(new THREE.SphereGeometry(0.07, 24, 12, 0, TAU, 0, Math.PI / 2), beaconMat, [0, 2.72, 0], null, null, { cast: false });
  tank.add(beacon);

  // HMI pedestal with the balance readout.
  const hmi = group('fuel-hmi', [TANK_POS.x + 0.95, 0, TANK_POS.z + 1.3], [0, -0.35, 0]);
  const hk = new Kit();
  hk.add('graphite', tf(rbox(0.36, 0.04, 0.3, 0.015), [0, 0.02, 0]));
  hk.add('alu', tf(cyl(0.035, 0.035, 0.95, 16), [0, 0.5, 0]));
  hk.add('graphite', tf(rbox(0.74, 0.46, 0.07, 0.025), [0, 1.12, 0], [-0.28, 0, 0]));
  hmi.add(hk.build(M, { name: 'hmi' }));
  const lcd = textScreen(640, 384, { bg: '#04070c' });
  // Screen sits 3.8 cm along the tilted housing normal.
  const screen = mesh(new THREE.PlaneGeometry(0.66, 0.396), screenMaterial(lcd.tex, 1.1), [0, 1.12 + Math.sin(0.28) * 0.038, Math.cos(0.28) * 0.038], [-0.28, 0, 0], null, { cast: false });
  hmi.add(screen);
  root.add(hmi);
  root.add(blobShadow(M, 0.8, 0.8, [hmi.position.x, 0, hmi.position.z], 0.45));

  // Feed line: tank → valve → flow meter (riser) → over the top into the engine injector.
  const pk = new Kit();
  const P = (x, y) => new THREE.Vector3(x, y, TANK_POS.z);
  pk.add('steel', pipeGeometry([P(-6.92, 0.375), P(-6.05, 0.375), P(-6.05, 0.92)], 0.05, 0.16));
  pk.add('steel', pipeGeometry([P(-6.05, 1.38), P(-6.05, 2.3), P(-4.75, 2.3), P(-4.75, 2.1)], 0.05, 0.18));
  pk.add('steel', tf(cyl(0.1, 0.1, 0.025, 24), [-6.93, 0.375, TANK_POS.z], [0, 0, Math.PI / 2]));
  pk.add('chrome', ...[0, 1, 2, 3, 4, 5].map((i) => tf(cyl(0.012, 0.012, 0.09, 6), [-6.925, 0.375 + Math.cos(i) * 0.075, TANK_POS.z + Math.sin(i) * 0.075], [0, 0, Math.PI / 2])));
  // Valve.
  pk.add('blue', tf(cyl(0.085, 0.085, 0.18, 24), [-6.6, 0.375, TANK_POS.z], [0, 0, Math.PI / 2]));
  pk.add('chrome', tf(cyl(0.022, 0.022, 0.26, 12), [-6.6, 0.52, TANK_POS.z]));
  pk.add('steel', tf(cyl(0.045, 0.05, 0.1, 16), [-6.6, 0.47, TANK_POS.z]));
  pk.add('orange', tf(torus(0.11, 0.012, 8, 40), [-6.6, 0.64, TANK_POS.z], [Math.PI / 2, 0, 0]));
  for (let i = 0; i < 3; i++) {
    pk.add('orange', tf(new THREE.BoxGeometry(0.21, 0.014, 0.014), [-6.6, 0.64, TANK_POS.z], [0, (i / 3) * Math.PI, 0]));
  }
  // Flow meter end caps.
  for (const y of [0.945, 1.355]) pk.add('alu', tf(cyl(0.085, 0.085, 0.05, 32), [-6.05, y, TANK_POS.z]));
  pk.add('chrome', ...[0, 1, 2, 3].map((i) => tf(cyl(0.008, 0.008, 0.41, 6), [-6.05 + Math.cos(i * 1.5708 + 0.78) * 0.078, 1.15, TANK_POS.z + Math.sin(i * 1.5708 + 0.78) * 0.078])));
  // Supports and injector.
  for (const x of [-6.8, -6.25]) pk.add('graphite', tf(rbox(0.12, 0.33, 0.16, 0.015), [x, 0.165, TANK_POS.z]));
  pk.add('steel', tf(rbox(0.22, 0.09, 0.22, 0.02), [-4.75, 2.1, TANK_POS.z]));
  pk.add('chrome', boltRing(4, 0.12, 2.15, 0.012, 0.012, 0.78).map((g) => g.translate(-4.75, 0, TANK_POS.z)));
  root.add(pk.build(M, { name: 'feed' }));

  const meterGlass = mesh(cyl(0.07, 0.07, 0.36, 40, true), M.glass, [-6.05, 1.15, TANK_POS.z], null, null, { cast: false, receive: false });
  const flowTex = flowTexture().tex;
  const flowMat = new THREE.MeshStandardMaterial({ color: 0x050a18, emissive: 0xffffff, emissiveMap: flowTex, emissiveIntensity: 1.8, roughness: 0.3 });
  const flowCore = mesh(cyl(0.034, 0.034, 0.36, 24, true), flowMat, [-6.05, 1.15, TANK_POS.z], null, null, { cast: false });
  root.add(meterGlass, flowCore);

  let level = 0.5;
  let readoutKey = '';
  const tmp = new THREE.Object3D();

  return {
    root,
    anchors: { tank: new THREE.Vector3(TANK_POS.x, 2.9, TANK_POS.z), hmi: new THREE.Vector3(hmi.position.x, 1.5, hmi.position.z) },
    hover: [{ id: 'tank', object: glass }, { id: 'tank', object: screen }],
    setReadout(lines) {
      const key = JSON.stringify(lines);
      if (key === readoutKey) return;
      readoutKey = key;
      lcd.set(lines);
    },
    update(dt, t, s) {
      level = damp(level, clamp(s.level, 0.02, 1), 2.5, dt);
      const h = level * LIQUID_H;
      liquid.scale.y = h;
      liquid.position.y = GLASS_Y0 + 0.012 + h / 2;
      surface.position.y = meniscus.position.y = GLASS_Y0 + 0.012 + h + 0.001;
      marker.position.y = GLASS_Y0 + 0.02 + h;
      const flow = clamp(s.flow, 0, 1);
      for (let i = 0; i < BUBBLES; i++) {
        const b = bub[i];
        b.y += dt * (0.05 + flow * 0.32) * b.v / Math.max(0.25, h);
        if (b.y > 1) {
          b.y = 0;
          b.a = Math.random() * TAU;
          b.r = Math.sqrt(Math.random()) * 0.6;
        }
        const wob = Math.sin(t * 3 + b.w) * 0.01;
        tmp.position.set(Math.cos(b.a) * b.r + wob, GLASS_Y0 + 0.03 + b.y * Math.max(0, h - 0.04), Math.sin(b.a) * b.r);
        tmp.scale.setScalar(b.s * (0.3 + 0.7 * Math.min(1, (h - b.y * h) * 10 + 0.3)));
        tmp.updateMatrix();
        bubbles.setMatrixAt(i, tmp.matrix);
      }
      bubbles.instanceMatrix.needsUpdate = true;
      flowTex.offset.y -= dt * (0.15 + flow * 2.6);
      flowMat.emissiveIntensity = 0.5 + flow * 2.2;
      beaconMat.emissive.setHex(s.peak ? 0xffa53a : 0x3ddc84);
      beaconMat.emissiveIntensity = 1.6 + Math.sin(t * 2.2) * 0.6;
    },
  };
}
