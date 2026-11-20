import * as THREE from 'three';
import { canvasTexture, FONT_SANS, FONT_MONO, arcBand, clamp } from './util.js';
import { ATRIUM, MEDIA, mediaScreens } from './layout.js';
import { NO_REFLECT_LAYER } from './reflection.js';
import { formatTokens, formatMoney, formatPct } from '../format.js';
import { metrics } from '../../model/reducer.js';
import { priceFor } from '../../model/pricing.js';
import { STATION_INFO, PRODUCTIVE_KINDS } from '../../model/stations.js';

/*
 * Three large status screens hung in front of the server wall:
 *   flow  – live token rate (last 60 s) and token totals
 *   main  – title, model, phase, turn, tool calls, products, recent calls
 *   cost  – spend over time, peak/off-peak split, context fill, cache savings
 * Each is a canvas texture redrawn at most twice a second, and only when its content changed.
 * Text is bilingual like the machine nameplates, so the scene does not depend on the UI locale.
 */

const COL = {
  cyan: '#5ad1ff',
  blue: '#6f8cff',
  violet: '#a487ff',
  amber: '#ffb347',
  green: '#34d17a',
  red: '#ff5d5d',
  gold: '#e8c47c',
  text: '#e8f0ff',
  muted: '#8193b8',
  dim: '#4f5e80',
};

const PHASE = {
  idle: { zh: '空闲', en: 'IDLE', color: '#8a93a6' },
  thinking: { zh: '思考', en: 'THINKING', color: COL.violet },
  reasoning: { zh: '推理', en: 'REASONING', color: COL.violet },
  generating: { zh: '生成', en: 'GENERATING', color: COL.cyan },
  tool: { zh: '工具', en: 'TOOL CALL', color: COL.amber },
};

// Curved panels on the media wall (layout.js); canvas sizes keep each panel's aspect ratio.
export const SCREENS = mediaScreens();

const TPS_SAMPLES = 120; // 60 s at 2 Hz
const COST_SAMPLES = 90; // 3 min at one sample per 2 s
const TPS_STEPS = [20, 50, 100, 150, 200, 300, 500, 1000, 2000];
const COST_STEPS = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000];

const niceCeil = (v, steps) => steps.find((s) => v <= s) || steps[steps.length - 1];

// ── Drawing helpers ─────────────────────────────────────────────

function base(g, w, h) {
  const bg = g.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#081530');
  bg.addColorStop(1, '#030815');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(90,150,255,0.07)';
  g.lineWidth = 1;
  g.beginPath();
  for (let x = 32; x < w; x += 32) {
    g.moveTo(x + 0.5, 0);
    g.lineTo(x + 0.5, h);
  }
  for (let y = 32; y < h; y += 32) {
    g.moveTo(0, y + 0.5);
    g.lineTo(w, y + 0.5);
  }
  g.stroke();
}

function chrome(g, w, h, accent) {
  // Scanlines and a soft vignette give the panels a projected, holographic look.
  g.fillStyle = 'rgba(0,0,0,0.16)';
  for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 1);
  const v = g.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.35, w / 2, h / 2, Math.max(w, h) * 0.72);
  v.addColorStop(0, 'rgba(0,0,0,0)');
  v.addColorStop(1, 'rgba(0,0,0,0.38)');
  g.fillStyle = v;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = accent;
  g.lineWidth = 4;
  const L = 36;
  const m = 10;
  g.beginPath();
  g.moveTo(m, m + L);
  g.lineTo(m, m);
  g.lineTo(m + L, m);
  g.moveTo(w - m - L, m);
  g.lineTo(w - m, m);
  g.lineTo(w - m, m + L);
  g.moveTo(w - m, h - m - L);
  g.lineTo(w - m, h - m);
  g.lineTo(w - m - L, h - m);
  g.moveTo(m + L, h - m);
  g.lineTo(m, h - m);
  g.lineTo(m, h - m - L);
  g.stroke();
}

function header(g, w, zh, en, accent, right, rightColor) {
  g.fillStyle = 'rgba(77,107,254,0.10)';
  g.fillRect(0, 0, w, 72);
  const lg = g.createLinearGradient(0, 0, w, 0);
  lg.addColorStop(0, accent);
  lg.addColorStop(1, 'rgba(90,209,255,0)');
  g.fillStyle = lg;
  g.fillRect(0, 70, w, 3);
  g.textBaseline = 'middle';
  g.textAlign = 'left';
  g.font = `700 34px ${FONT_SANS}`;
  g.fillStyle = COL.text;
  g.fillText(zh, 36, 37);
  const zw = g.measureText(zh).width;
  g.font = `600 20px ${FONT_MONO}`;
  g.fillStyle = COL.muted;
  g.fillText(en, 36 + zw + 18, 39);
  if (right) {
    g.textAlign = 'right';
    g.font = `700 22px ${FONT_MONO}`;
    g.fillStyle = rightColor || COL.muted;
    g.fillText(right, w - 36, 39);
  }
}

function label(g, x, y, zh, en, align = 'left') {
  g.textBaseline = 'alphabetic';
  g.textAlign = align;
  g.font = `600 22px ${FONT_SANS}`;
  g.fillStyle = COL.muted;
  const text = `${zh}  `;
  g.fillText(text, x, y);
  const tw = g.measureText(text).width;
  g.font = `600 16px ${FONT_MONO}`;
  g.fillStyle = COL.dim;
  if (align === 'left') g.fillText(en, x + tw, y);
}

function bigValue(g, x, y, text, color, size = 96, unit = '', unitColor = COL.muted) {
  g.textBaseline = 'alphabetic';
  g.textAlign = 'left';
  g.font = `700 ${size}px ${FONT_MONO}`;
  g.fillStyle = color;
  g.shadowColor = color;
  g.shadowBlur = 18;
  g.fillText(text, x, y);
  g.shadowBlur = 0;
  if (unit) {
    const tw = g.measureText(text).width;
    g.font = `600 ${Math.round(size * 0.3)}px ${FONT_MONO}`;
    g.fillStyle = unitColor;
    g.fillText(unit, x + tw + 12, y);
  }
}

function chart(g, x, y, w, h, values, { color, fill, max, fmt, grid = 4 }) {
  const n = values.length;
  g.save();
  g.strokeStyle = 'rgba(120,160,255,0.13)';
  g.lineWidth = 1;
  g.beginPath();
  for (let i = 0; i <= grid; i++) {
    const yy = Math.round(y + (h * i) / grid) + 0.5;
    g.moveTo(x, yy);
    g.lineTo(x + w, yy);
  }
  g.stroke();
  g.font = `600 17px ${FONT_MONO}`;
  g.fillStyle = COL.dim;
  g.textAlign = 'right';
  g.textBaseline = 'middle';
  for (let i = 0; i <= grid; i++) g.fillText(fmt(max * (1 - i / grid)), x - 12, y + (h * i) / grid);
  const px = (i) => x + (w * i) / Math.max(1, n - 1);
  const py = (v) => y + h - h * clamp(v / max, 0, 1);
  g.beginPath();
  g.moveTo(px(0), y + h);
  for (let i = 0; i < n; i++) g.lineTo(px(i), py(values[i]));
  g.lineTo(px(n - 1), y + h);
  g.closePath();
  const fg = g.createLinearGradient(0, y, 0, y + h);
  fg.addColorStop(0, fill);
  fg.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = fg;
  g.fill();
  g.beginPath();
  for (let i = 0; i < n; i++) {
    if (i) g.lineTo(px(i), py(values[i]));
    else g.moveTo(px(i), py(values[i]));
  }
  g.strokeStyle = color;
  g.lineWidth = 3;
  g.shadowColor = color;
  g.shadowBlur = 12;
  g.stroke();
  g.restore();
}

function statBox(g, x, y, w, h, zh, en, value, sub, color) {
  g.fillStyle = 'rgba(40,70,140,0.18)';
  g.fillRect(x, y, w, h);
  g.fillStyle = color;
  g.fillRect(x, y, 4, h);
  label(g, x + 20, y + 34, zh, en);
  g.textAlign = 'left';
  g.textBaseline = 'alphabetic';
  g.font = `700 44px ${FONT_MONO}`;
  g.fillStyle = COL.text;
  g.fillText(value, x + 20, y + 86);
  if (sub) {
    g.font = `600 18px ${FONT_MONO}`;
    g.fillStyle = COL.muted;
    g.fillText(sub, x + 20, y + h - 14);
  }
}

// ── Screen contents ─────────────────────────────────────────────

function drawFlow(g, w, h, d) {
  base(g, w, h);
  const ph = PHASE[d.phase] || PHASE.idle;
  header(g, w, '令牌流量', 'TOKEN FLOW', COL.cyan, `● ${ph.zh} ${ph.en}`, ph.color);
  label(g, 36, 122, '实时速率', 'LIVE RATE');
  bigValue(g, 36, 236, d.tps >= 0.5 ? d.tps.toFixed(d.tps < 10 ? 1 : 0) : '0', COL.cyan, 104, 'tok/s');
  label(g, 36, 300, '本会话峰值', 'PEAK');
  g.font = `700 30px ${FONT_MONO}`;
  g.fillStyle = COL.text;
  g.textAlign = 'left';
  g.fillText(`${Math.round(d.peakTps)} tok/s`, 36, 340);
  const max = niceCeil(Math.max(20, ...d.tpsHist) * 1.15, TPS_STEPS);
  chart(g, 470, 104, w - 470 - 40, 236, d.tpsHist, {
    color: COL.cyan, fill: 'rgba(90,209,255,0.32)', max, fmt: (v) => String(Math.round(v)),
  });
  g.font = `600 17px ${FONT_MONO}`;
  g.fillStyle = COL.dim;
  g.textAlign = 'right';
  g.textBaseline = 'alphabetic';
  g.fillText('近 60 秒 · LAST 60 s', w - 40, 96);
  const bw = (w - 72 - 3 * 16) / 4;
  const by = 372;
  const bh = 128;
  const T = d.totals;
  statBox(g, 36, by, bw, bh, '输入', 'INPUT', formatTokens(T.miss + T.write), '未命中缓存 · MISS', COL.blue);
  statBox(g, 36 + (bw + 16), by, bw, bh, '缓存命中', 'CACHE HIT', formatTokens(T.hit), `命中率 ${formatPct(d.hitRate)}`, COL.green);
  statBox(g, 36 + (bw + 16) * 2, by, bw, bh, '输出', 'OUTPUT', formatTokens(T.output), `请求 ${T.requests}`, COL.cyan);
  statBox(g, 36 + (bw + 16) * 3, by, bw, bh, '推理', 'REASONING', formatTokens(T.reasoning), '思考链 · THINKING', COL.violet);
  chrome(g, w, h, COL.cyan);
}

function kpi(g, x, y, zh, en, value, sub, color) {
  label(g, x, y, zh, en);
  g.textAlign = 'left';
  g.textBaseline = 'alphabetic';
  g.font = `700 64px ${FONT_MONO}`;
  g.fillStyle = color;
  g.shadowColor = color;
  g.shadowBlur = 14;
  g.fillText(value, x, y + 76);
  g.shadowBlur = 0;
  if (sub) {
    g.font = `600 20px ${FONT_MONO}`;
    g.fillStyle = COL.muted;
    g.fillText(sub, x, y + 112);
  }
}

function drawMain(g, w, h, d) {
  base(g, w, h);
  g.fillStyle = 'rgba(77,107,254,0.12)';
  g.fillRect(0, 0, w, 92);
  const lg = g.createLinearGradient(0, 0, w, 0);
  lg.addColorStop(0, 'rgba(90,209,255,0)');
  lg.addColorStop(0.5, COL.cyan);
  lg.addColorStop(1, 'rgba(90,209,255,0)');
  g.fillStyle = lg;
  g.fillRect(0, 90, w, 3);
  g.textBaseline = 'middle';
  g.textAlign = 'left';
  g.font = `700 46px ${FONT_SANS}`;
  g.fillStyle = COL.text;
  g.shadowColor = COL.cyan;
  g.shadowBlur = 16;
  g.fillText('DSH 工作进程', 40, 47);
  g.shadowBlur = 0;
  const tw = g.measureText('DSH 工作进程').width;
  g.font = `600 22px ${FONT_MONO}`;
  g.fillStyle = COL.muted;
  g.fillText('WORK PROCESS · LIVE 3D', 40 + tw + 22, 50);
  if (d.demo) {
    const text = '演示数据 · DEMO DATA';
    g.font = `700 22px ${FONT_SANS}`;
    const bw = g.measureText(text).width + 36;
    const bx = 40 + tw + 22 + g.measureText('WORK PROCESS · LIVE 3D').width + 60;
    g.fillStyle = 'rgba(255,179,71,0.16)';
    g.fillRect(bx, 28, bw, 40);
    g.strokeStyle = COL.amber;
    g.lineWidth = 2;
    g.strokeRect(bx + 1, 29, bw - 2, 38);
    g.fillStyle = COL.amber;
    g.fillText(text, bx + 18, 49);
  }
  if (d.model) {
    g.textAlign = 'right';
    g.font = `700 24px ${FONT_MONO}`;
    g.fillStyle = COL.blue;
    g.fillText(`${d.model}${d.effort ? ` · ${d.effort}` : ''}`, w - 40, 50);
  }

  const ph = PHASE[d.phase] || PHASE.idle;
  const cw = (w - 80) / 5;
  const ky = 148;
  kpi(g, 40, ky, '阶段', 'PHASE', ph.zh, ph.en, ph.color);
  kpi(g, 40 + cw, ky, '轮次', 'TURN', d.turn ? `T${d.turn}` : '—', `合格 ${d.ok} · 返工 ${d.rework}`, COL.text);
  kpi(g, 40 + cw * 2, ky, '工具调用', 'TOOL CALLS', String(d.calls), `成功率 ${formatPct(d.toolSuccess)}`, COL.cyan);
  kpi(g, 40 + cw * 3, ky, '产出文件', 'FILES', String(d.files), `+${d.added} / −${d.removed}`, COL.gold);
  kpi(g, 40 + cw * 4, ky, '模型请求', 'REQUESTS', String(d.requests), `运行中 ${d.running}`, COL.blue);

  // Recent tool calls as a strip of blocks, newest on the right.
  const sy = 330;
  label(g, 40, sy, '最近工具调用', 'RECENT TOOL CALLS');
  const n = 24;
  const gap = 8;
  const bw = (w - 80 - gap * (n - 1)) / n;
  const bh = 116;
  const by = sy + 22;
  const list = d.recent.slice(-n);
  const offset = n - list.length;
  for (let i = 0; i < n; i++) {
    const x = 40 + i * (bw + gap);
    const c = list[i - offset];
    if (!c) {
      g.strokeStyle = 'rgba(120,160,255,0.16)';
      g.lineWidth = 2;
      g.strokeRect(x + 1, by + 1, bw - 2, bh - 2);
      continue;
    }
    const color = c.status === 'running' ? COL.cyan : c.status === 'error' ? COL.red : PRODUCTIVE_KINDS.has(c.kind) ? COL.gold : COL.blue;
    const grad = g.createLinearGradient(0, by, 0, by + bh);
    grad.addColorStop(0, color);
    grad.addColorStop(1, 'rgba(10,20,40,0.6)');
    g.globalAlpha = c.status === 'running' ? 0.95 : 0.55;
    g.fillStyle = grad;
    g.fillRect(x, by, bw, bh);
    g.globalAlpha = 1;
    g.fillStyle = color;
    g.fillRect(x, by + bh - 6, bw, 6);
    const info = STATION_INFO[c.kind] || STATION_INFO.generic;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = `700 22px ${FONT_MONO}`;
    g.fillStyle = '#ffffff';
    g.fillText(info.code.replace('ST-', ''), x + bw / 2, by + bh / 2 - 6);
  }
  const last = list[list.length - 1];
  if (last) {
    const info = STATION_INFO[last.kind] || STATION_INFO.generic;
    const status = last.status === 'running' ? '加工中 RUN' : last.status === 'error' ? '故障 FAULT' : '完成 DONE';
    g.textAlign = 'left';
    g.textBaseline = 'alphabetic';
    g.font = `600 24px ${FONT_SANS}`;
    g.fillStyle = COL.text;
    const lab = String(last.label || last.name || '').slice(0, 60);
    g.fillText(`${info.code} ${info.zh} · ${lab}`, 40, by + bh + 52);
    g.textAlign = 'right';
    g.font = `700 22px ${FONT_MONO}`;
    g.fillStyle = last.status === 'running' ? COL.cyan : last.status === 'error' ? COL.red : COL.green;
    g.fillText(status, w - 40, by + bh + 52);
  }
  chrome(g, w, h, COL.cyan);
}

function drawCost(g, w, h, d) {
  base(g, w, h);
  header(g, w, '成本与上下文', 'COST & CONTEXT', COL.gold, d.peak ? '高峰 · 全价 PEAK' : '低谷 · 半价 OFF-PEAK', d.peak ? COL.amber : COL.green);
  label(g, 36, 122, '累计花费', 'TOTAL COST');
  bigValue(g, 36, 226, d.priced ? formatMoney(d.cost) : '—', COL.gold, 90);
  g.font = `600 22px ${FONT_MONO}`;
  g.fillStyle = COL.muted;
  g.textAlign = 'left';
  g.fillText(`高峰 ${formatMoney(d.costPeak)} · 低谷 ${formatMoney(d.costOff)}`, 36, 274);
  g.fillText(`请求 ${d.requests} 次`, 36, 310);
  const max = niceCeil(Math.max(0.01, ...d.costHist) * 1.15, COST_STEPS);
  chart(g, 480, 104, w - 480 - 40, 200, d.costHist, {
    color: COL.gold, fill: 'rgba(232,196,124,0.30)', max, fmt: (v) => formatMoney(v),
  });
  g.font = `600 17px ${FONT_MONO}`;
  g.fillStyle = COL.dim;
  g.textAlign = 'right';
  g.fillText('近 3 分钟 · LAST 3 min', w - 40, 96);

  // Context window fill.
  const cy = 372;
  label(g, 36, cy, '上下文', 'CONTEXT');
  g.textAlign = 'right';
  g.font = `700 24px ${FONT_MONO}`;
  g.fillStyle = COL.text;
  g.fillText(d.window ? `${formatTokens(d.ctx)} / ${formatTokens(d.window)} · ${formatPct(d.ratio)}` : '—', w - 36, cy);
  const bx = 36;
  const bw = w - 72;
  const by = cy + 16;
  g.fillStyle = 'rgba(40,70,140,0.28)';
  g.fillRect(bx, by, bw, 26);
  const ctxColor = d.ratio >= 0.8 ? COL.red : d.ratio >= 0.6 ? COL.amber : COL.blue;
  g.fillStyle = ctxColor;
  g.shadowColor = ctxColor;
  g.shadowBlur = 14;
  g.fillRect(bx, by, bw * clamp(d.ratio, 0, 1), 26);
  g.shadowBlur = 0;
  g.fillStyle = 'rgba(255,255,255,0.35)';
  for (const r of [0.6, 0.8]) g.fillRect(bx + bw * r, by - 6, 2, 38);

  const sy = 476;
  label(g, 36, sy, '缓存节省', 'CACHE SAVED');
  g.textAlign = 'left';
  g.font = `700 30px ${FONT_MONO}`;
  g.fillStyle = COL.green;
  g.fillText(d.priced ? formatMoney(d.savings) : '—', 330, sy + 2);
  label(g, w / 2 + 60, sy, '缓存命中率', 'HIT RATE');
  g.textAlign = 'right';
  g.font = `700 30px ${FONT_MONO}`;
  g.fillStyle = COL.text;
  g.fillText(formatPct(d.hitRate), w - 36, sy + 2);
  chrome(g, w, h, COL.gold);
}

const DRAW = { flow: drawFlow, main: drawMain, cost: drawCost };

// ── Scene objects ───────────────────────────────────────────────

/**
 * buildScreens(M, { demo }) → { root, update(dt, t, info), hover, setDetail(id, scale), setDemo(on), reset() }.
 * info: { state, live, tps, peak }.
 */
export function buildScreens(M, { demo: demoInit = false } = {}) {
  let demo = !!demoInit;
  const root = new THREE.Group();
  root.name = 'screens';
  const screens = [];
  const bezelMat = new THREE.MeshStandardMaterial({ color: 0x1a2030, metalness: 0.7, roughness: 0.3, name: 'screen-bezel' });
  const R = MEDIA.screenR;
  for (const def of SCREENS) {
    const [cw, ch] = def.px;
    const tex = canvasTexture(cw, ch, (g, w, h) => base(g, w, h), { anisotropy: 8 });
    const mat = new THREE.MeshBasicMaterial({ map: tex.tex, name: `screen-${def.id}`, toneMapped: false });
    // Slightly above 1: bright, but only the brightest strokes come near the bloom threshold.
    mat.color.setScalar(1.25);
    const panel = new THREE.Mesh(arcBand(ATRIUM.cx, ATRIUM.cz, R, def.a0, def.a1, def.y0, def.y1, 48, true), mat);
    panel.name = `screen-${def.id}`;
    panel.userData.screenId = def.id;
    root.add(panel);
    const m = 0.05 / R;
    const bezel = new THREE.Mesh(arcBand(ATRIUM.cx, ATRIUM.cz, R + 0.015, def.a0 - m, def.a1 + m, def.y0 - 0.05, def.y1 + 0.05, 48, true), bezelMat);
    bezel.name = `screen-bezel-${def.id}`;
    bezel.layers.set(NO_REFLECT_LAYER);
    root.add(bezel);
    // Clickable for the close-up view; the hover bracket would float in front of the curve.
    panel.userData.noHighlight = true;
    screens.push({ def, tex, sig: '', draw: DRAW[def.id], panel, scale: 1 });
  }
  let lastData = null;
  const paint = (S, d) => S.tex.redraw((g) => {
    if (S.scale !== 1) g.scale(S.scale, S.scale);
    S.draw(g, S.def.px[0], S.def.px[1], d);
  });

  // History buffers for the charts.
  const tpsHist = new Array(TPS_SAMPLES).fill(0);
  const costHist = new Array(COST_SAMPLES).fill(0);
  let tpsClock = 0;
  let costClock = 0;
  let redrawClock = 0;
  let peakTps = 0;
  let tpsActive = 0;
  let seeded = false;

  function data(info) {
    const s = info.state;
    const live = info.live || {};
    const phase = info.phase || (live.phase && live.phase !== 'idle' ? live.phase : s ? s.phase : 'idle');
    const T = s ? s.totals : { miss: 0, hit: 0, write: 0, output: 0, reasoning: 0, requests: 0, cost: 0, costPeak: 0, costOffPeak: 0, savings: 0 };
    const m = s ? metrics(s) : { hitRate: 0, toolSuccess: 1, contextRatio: 0 };
    const turns = s ? s.turns : [];
    return {
      demo,
      phase,
      tps: info.tps || 0,
      peakTps,
      tpsHist,
      costHist,
      totals: T,
      hitRate: m.hitRate,
      toolSuccess: m.toolSuccess,
      model: s ? s.model : '',
      effort: s ? s.effort : '',
      turn: s ? s.turnCount : 0,
      ok: turns.filter((x) => x.status === 'ok').length,
      rework: turns.filter((x) => x.status === 'rework').length,
      calls: s ? s.tools.calls : 0,
      running: s ? s.tools.running : 0,
      files: s ? s.files.count : 0,
      added: s ? s.files.added : 0,
      removed: s ? s.files.removed : 0,
      requests: T.requests,
      recent: s ? s.calls : [],
      peak: !!info.peak,
      // Spend is only known for priced models; other providers show a dash.
      priced: !s || !s.model || !!priceFor(s.provider, s.model),
      cost: T.cost,
      costPeak: T.costPeak,
      costOff: T.costOffPeak,
      savings: T.savings,
      ctx: s ? s.contextTokens : 0,
      window: s ? s.contextWindow : 0,
      ratio: m.contextRatio || 0,
    };
  }

  function signature(id, d) {
    if (id === 'flow') {
      const T = d.totals;
      // While the chart holds non-zero samples it scrolls, so every sample is a change.
      return `${d.phase}|${Math.round(d.tps * 2)}|${T.miss + T.write}|${T.hit}|${T.output}|${T.reasoning}|${T.requests}|${tpsActive > 0 ? tpsClock : 'flat'}|${Math.round(d.peakTps)}`;
    }
    if (id === 'main') {
      const last = d.recent[d.recent.length - 1];
      return `${d.demo}|${d.model}|${d.effort}|${d.phase}|${d.turn}|${d.ok}|${d.rework}|${d.calls}|${d.running}|${d.files}|${d.added}|${d.removed}|${d.requests}|${d.recent.length}|${last ? `${last.id}:${last.status}` : ''}|${Math.round(d.toolSuccess * 1000)}`;
    }
    return `${d.cost.toFixed(5)}|${d.costPeak.toFixed(5)}|${d.savings.toFixed(5)}|${d.ctx}|${d.window}|${d.peak}|${d.requests}|${costHist[COST_SAMPLES - 1].toFixed(5)}|${Math.round(d.hitRate * 1000)}`;
  }

  return {
    root,
    update(dt, t, info) {
      tpsClock += dt;
      costClock += dt;
      redrawClock += dt;
      const tps = info.tps || 0;
      peakTps = Math.max(peakTps, tps);
      if (tpsClock >= 0.5) {
        tpsClock = 0;
        tpsHist.shift();
        tpsHist.push(tps);
        tpsActive = tps > 0.5 ? TPS_SAMPLES : Math.max(0, tpsActive - 1);
      }
      const cost = info.state ? info.state.totals.cost : 0;
      if (!seeded && info.state) {
        // Start the spend chart flat at the current total instead of climbing from zero.
        costHist.fill(cost);
        seeded = true;
      }
      if (costClock >= 2) {
        costClock = 0;
        costHist.shift();
        costHist.push(cost);
      }
      if (redrawClock < 0.5) return;
      redrawClock = 0;
      const d = data(info);
      lastData = d;
      for (const S of screens) {
        const sig = signature(S.def.id, d);
        if (sig === S.sig) continue;
        S.sig = sig;
        paint(S, d);
      }
    },
    /** Click targets for the close-up view: [{ id: 'screen:<id>', object }]. */
    hover: screens.map((S) => ({ id: `screen:${S.def.id}`, object: S.panel })),
    /**
     * Draw one screen at `scale`× resolution (for the close-up); every other screen goes back
     * to 1×. The canvas is replaced and repainted right away so the screen never blanks.
     */
    setDetail(id, scale = 2) {
      for (const S of screens) {
        const want = S.def.id === id ? scale : 1;
        if (want === S.scale) continue;
        const [cw, ch] = S.def.px;
        const old = S.tex;
        S.scale = want;
        S.tex = canvasTexture(cw * want, ch * want, (g) => {
          g.scale(want, want);
          base(g, cw, ch);
        }, { anisotropy: 8 });
        S.panel.material.map = S.tex.tex;
        S.sig = '';
        if (lastData) {
          S.sig = signature(S.def.id, lastData);
          paint(S, lastData);
        }
        old.tex.dispose();
      }
    },
    /** Show or drop the demo badge. */
    setDemo(on) {
      demo = !!on;
      for (const S of screens) S.sig = '';
    },
    /** Clears the chart history (a new session was loaded). */
    reset() {
      tpsHist.fill(0);
      costHist.fill(0);
      peakTps = 0;
      tpsActive = 0;
      seeded = false;
      for (const S of screens) S.sig = '';
    },
  };
}
