import * as THREE from 'three';
import { createMaterials } from './materials.js';
import { buildStage } from './environment.js';
import { createReflection } from './reflection.js';
import { BRIGHTNESS, DEFAULT_LOOK, lookOf } from './looks.js';
import { buildFuel, TANK_POS } from './fuel.js';
import { buildEngine } from './engine.js';
import { buildCell } from './cell.js';
import { buildStations } from './stations.js';
import { buildStocker } from './stocker.js';
import { createEffects } from './effects.js';
import { createWaferKit } from './wafer.js';
import { createDirector } from './director.js';
import { buildScreens } from './screens.js';
import { buildChannels } from './channels.js';
import { disposeTree, damp, clamp } from './util.js';
import { priceFor, isPeak, affordableTokens } from '../../model/pricing.js';
import { formatTokens } from '../format.js';

/** Camera presets: position and orbit target. */
export const CAMERA_PRESETS = {
  overview: { pos: [0.6, 7.0, 16.2], target: [0.6, 2.0, -1.5] },
  fuel: { pos: [-5.6, 2.7, 4.4], target: [-7.6, 1.4, -0.4] },
  engine: { pos: [-1.8, 2.9, 4.8], target: [-3.9, 1.2, -0.5] },
  stations: { pos: [2.6, 6.2, 6.6], target: [2.6, 0.9, -1.2] },
  products: { pos: [6.1, 2.9, 5.6], target: [8.3, 1.1, 0.4] },
  // Standing at the balcony rail, looking out over the city toward the setting sun.
  balcony: { pos: [0.5, 1.7, 23.4], target: [-7.0, -0.4, 41.8], mode: 'look' },
};

/** Planar floor reflections: only on the two top tiers (one extra low-resolution scene pass). */
const REFLECTION = {
  low: null,
  medium: null,
  high: { scale: 0.4, strength: 0.5, blur: 1.0 },
  ultra: { scale: 0.55, strength: 0.55, blur: 0.8 },
};

const NICE = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];

/**
 * Build the complete factory scene for one quality tier. The returned object is driven by
 * `setState` (reduced session model) and `setLive` (stream ticks); `setLook` switches between
 * the dusk and day looks, `setBrightness` scales exposure.
 */
export function buildWorld(renderer, quality, { environment = true, demo = false, look = DEFAULT_LOOK, brightness = BRIGHTNESS.initial } = {}) {
  const scene = new THREE.Scene();
  // The sky dome draws the background; no fog (the city outside applies its own haze).
  scene.background = null;
  let lookDef = lookOf(look);
  let bright = clamp(brightness, BRIGHTNESS.min, BRIGHTNESS.max);
  const gl = environment ? renderer : null;
  const reflCfg = gl ? REFLECTION[quality] : null;
  const reflection = reflCfg ? createReflection(gl, reflCfg) : null;

  const { M, tex } = createMaterials(quality);
  const stage = buildStage(M, tex, quality, {
    renderer: gl,
    look: lookDef,
    reflection,
    beamTarget: new THREE.Vector3(TANK_POS.x, 3.0, TANK_POS.z),
  });
  function applyEnvironment() {
    scene.environment = stage.envTexture;
    scene.environmentIntensity = lookDef.envIntensity;
  }
  applyEnvironment();

  const fx = createEffects(tex);
  const fuel = buildFuel(M);
  const engine = buildEngine(M);
  const cell = buildCell(M);
  const stations = buildStations(M, fx);
  const wafers = createWaferKit(M);
  const stocker = buildStocker(M, wafers);
  const screens = buildScreens(M, null, { demo });
  const channels = buildChannels();
  const dynamic = new THREE.Group();
  dynamic.name = 'wafers';
  scene.add(stage.root, channels.root, screens.root, fuel.root, engine.root, cell.root, stations.root, stocker.root, fx.root, dynamic);
  const director = createDirector({ cell, stations, stocker, engine, wafers, root: dynamic });

  const staticHover = [];
  for (const h of [...fuel.hover, ...engine.hover, ...cell.hover, ...stations.list.flatMap((s) => s.hover), ...stocker.hover]) {
    h.object.userData.hoverId = h.id;
    staticHover.push(h.object);
  }

  const labelAnchors = [
    { id: 'tank', anchor: fuel.anchors.tank },
    { id: 'engine', anchor: engine.anchors.engine },
    { id: 'robot', anchor: cell.anchors.robot.clone().setY(1.75) },
    ...stations.list.map((s) => ({ id: `station:${s.kind}`, anchor: s.anchor })),
    { id: 'loadport', anchor: stocker.anchors.loadPort.clone().setY(1.55) },
    { id: 'stocker', anchor: stocker.anchors.stocker.clone().setY(1.25) },
  ];

  const live = { phase: 'idle', tps: 0, balance: null, currency: 'CNY' };
  const screenInfo = { state: null, live, tps: 0, peak: false };
  const stageInfo = { activity: 0, tps: 0, model: '', phase: 'idle' };
  let state = null;
  let errors = 0;
  let errorPulse = false;
  let maxBalance = 0;
  let tps = 0;
  let activity = 0;
  let readoutT = 1;
  let peak = isPeak(Date.now());

  function readout() {
    peak = isPeak(Date.now());
    const price = state ? priceFor(state.provider, state.model) : null;
    const bal = typeof live.balance === 'number' ? live.balance : null;
    const sym = live.currency === 'USD' ? '$' : '¥';
    const lines = [demo
      ? { text: '燃料 · 示例余额   DEMO', size: 30, color: '#ffc65c', weight: 700, gap: 50 }
      : { text: '燃料 · 账户余额   FUEL', size: 30, color: '#7f9cff', weight: 700, gap: 50 }];
    if (bal == null) {
      lines.push({ text: '— —', size: 88, color: '#8c97ad', weight: 700, mono: true, gap: 108 });
      lines.push({ text: '余额不可用 · balance unavailable', size: 28, color: '#8c97ad', gap: 56 });
    } else {
      lines.push({ text: `${sym} ${bal.toFixed(2)}`, size: 92, color: '#e9f0ff', weight: 700, mono: true, gap: 108 });
      const tok = live.currency === 'USD' ? 0 : affordableTokens(bal, price, peak);
      lines.push({ text: price && tok ? `≈ ${formatTokens(tok)} tokens · ${price.id}` : '当前模型未计价 · unpriced', size: 30, color: '#9fb2d8', gap: 56 });
    }
    lines.push({ text: peak ? '高峰 · 全价   PEAK' : '低谷 · 半价   OFF-PEAK', size: 34, color: peak ? '#ffb020' : '#34d17a', weight: 700, gap: 72 });
    fuel.setReadout(lines);
  }

  function fuelLevel() {
    const bal = typeof live.balance === 'number' ? live.balance : null;
    if (bal == null) return 0.5;
    maxBalance = Math.max(maxBalance, bal);
    const scale = NICE.find((v) => v >= maxBalance * 1.25) || maxBalance * 1.25;
    return clamp(bal / scale, 0, 1);
  }

  /** Floor light channels follow what moves: fuel flow, wafers, active stations, the robot. */
  function updateChannels(dt, flow, phase) {
    const act = director.activity();
    channels.set('fuel', 0.1 + 0.9 * flow, 0.7 + tps / 28);
    channels.set('feed', act.inbound > 0 ? 1 : 0.1 + 0.55 * flow, 1.5);
    channels.set('lock', act.inbound > 0 ? 0.9 : 0.08, -1.4);
    for (const S of stations.list) channels.set(`spoke:${S.index}`, S.active ? 1 : 0.06, 1.2);
    channels.set('unload', act.outbound > 0 ? 0.9 : 0.08, 1.4);
    channels.set('out', act.outbound > 0 || act.stocker ? 0.9 : 0.08, 1.4);
    channels.set('ring', act.robot ? 0.75 : phase !== 'idle' ? 0.4 : 0.22, 0.8);
    channels.update(dt);
  }

  /** Token consumption intensity (0..1) that drives the city traffic and the compute beam. */
  function activityTarget(phase) {
    if (phase === 'reasoning' || phase === 'generating' || phase === 'thinking') return 0.35 + 0.65 * clamp(tps / 70, 0, 1);
    if (phase === 'tool') return 0.2;
    return 0;
  }

  return {
    scene,
    key: stage.key,
    presets: CAMERA_PRESETS,
    labelAnchors,
    /** Post-processing settings of the current look and brightness (read by the renderer). */
    get post() {
      return { ...lookDef.post, exposure: lookDef.exposure * bright };
    },
    getLook: () => lookDef.id,
    /** Switch look; returns true when it changed (the caller re-bakes shadows and re-applies post). */
    setLook(id) {
      const next = lookOf(id);
      if (next === lookDef) return false;
      lookDef = next;
      stage.setLook(lookDef);
      applyEnvironment();
      return true;
    },
    getBrightness: () => bright,
    setBrightness(v) {
      bright = clamp(Number(v) || BRIGHTNESS.initial, BRIGHTNESS.min, BRIGHTNESS.max);
    },
    setState(next) {
      if (!next) return;
      if (state && next.tools.errors > errors) errorPulse = true;
      errors = next.tools.errors;
      state = next;
      director.sync(next);
      readoutT = Math.max(readoutT, 0.45);
    },
    setLive(next) {
      if (!next) return;
      Object.assign(live, next);
    },
    /** True while something animates that deserves the higher frame rate. */
    busy() {
      return director.busy() || (live.phase && live.phase !== 'idle') || tps > 1;
    },
    update(dt, t) {
      tps = damp(tps, live.tps || 0, 6, dt);
      readoutT += dt;
      if (readoutT >= 0.5) {
        readoutT = 0;
        readout();
      }
      const totals = state ? state.totals : { miss: 0, hit: 0, output: 0, reasoning: 0, cost: 0 };
      const phase = live.phase && live.phase !== 'idle' ? live.phase : state ? state.phase : 'idle';
      const flow = tps > 0.5 ? clamp(0.2 + tps / 90, 0, 1) : 0;
      activity = damp(activity, activityTarget(phase), 1.6, dt);
      stageInfo.activity = activity;
      stageInfo.tps = tps;
      stageInfo.model = state ? state.model : '';
      stageInfo.phase = phase;
      stage.update(dt, t, stageInfo);
      fuel.update(dt, t, { level: fuelLevel(), flow, peak });
      engine.update(dt, t, {
        phase,
        tps,
        ctx: state && state.contextWindow > 0 ? state.contextTokens / state.contextWindow : 0,
        counters: { miss: totals.miss, hit: totals.hit, output: totals.output, reasoning: totals.reasoning, cost: totals.cost },
        errorPulse,
      });
      errorPulse = false;
      director.update(dt, t);
      fx.update(dt);
      updateChannels(dt, flow, phase);
      screenInfo.state = state;
      screenInfo.tps = tps;
      screenInfo.peak = peak;
      screens.update(dt, t, screenInfo);
    },
    /** Extra passes that must run right before the main render (floor reflection). */
    prerender(camera) {
      if (reflection) reflection.update(scene, camera);
    },
    hoverTargets() {
      return stocker.hoverObjects(staticHover.slice());
    },
    focus: (out) => director.focus(out),
    stats: () => director.stats(),
    dispose() {
      director.dispose();
      stocker.dispose();
      stage.dispose();
      disposeTree(scene);
      wafers.dispose();
      if (reflection) reflection.dispose();
      for (const m of Object.values(M)) if (m && m.dispose) m.dispose();
      for (const x of Object.values(tex)) if (x && x.dispose) x.dispose();
    },
  };
}
