import * as React from 'react';
import { createFactoryScene, QUALITY_TIERS, FPS_CAPS, CAMERA_MODES } from '../scene/renderer.js';
import { LOOK_IDS, DEFAULT_LOOK, BRIGHTNESS } from '../scene/looks.js';
import { createDemo } from '../../model/demo.js';
import { initialState, reduceAll, metrics } from '../../model/reducer.js';
import { STATION_INFO, STATION_ORDER, MACHINE_INFO, basename } from '../../model/stations.js';
import { priceFor, isPeak, affordableTokens } from '../../model/pricing.js';
import { formatTokens, formatMoney, formatPct, formatDuration, fill } from '../format.js';
import { createStreamMeter, withContext, fetchBalance } from '../live.js';
import { acquireMusic, releaseMusic, DEFAULT_VOLUME } from '../music.js';
import { CSS } from './styles.js';

const { useEffect, useLayoutEffect, useRef, useState, useReducer, useCallback } = React;

// Projection published by this plugin's Host part (src/host/projection.js).
const PROJECTION_KEY = 'workProcess3d';
// 'live' (the session's own data, the default) or 'demo' (the built-in fictional session).
const SOURCE_KEY = 'dwp3d.source';
// Live data that has not arrived after this long gets an explanation and a way to the demo.
const LIVE_WAIT_MS = 5000;
const BALANCE_REFRESH_MS = 120_000;
const BALANCE_AFTER_TURN_MS = 4000;
const STREAM_TICK_MS = 250;
const LOST_WAIT_MS = 5000;
// Holds only a tier the user picked; when absent the GPU-based default applies.
const QUALITY_KEY = 'dwp3d.quality';
const HINT_KEY = 'dwp3d.hint';
const LOOK_HINT_KEY = 'dwp3d.hint.look';
const VIEWS = ['overview', 'fuel', 'engine', 'stations', 'dock', 'products', 'living', 'balcony', 'pool'];
const LEGEND = ['raw', 'normal', 'gold', 'bad'];
const PHASE_COLOR = { idle: '#8a93a6', thinking: '#a487ff', reasoning: '#a487ff', generating: '#6f8cff', tool: '#ffb347' };
// Accent per HUD card; the same hues as the machines they describe (fuel cyan, engine violet…).
const CARD_ACCENT = {
  balance: '#4fd6ff',
  context: '#5b8cff',
  input: '#8fa3c8',
  output: '#9b6bff',
  cost: '#ffc65c',
  tools: '#ffa21f',
  products: '#e9c77f',
  efficiency: '#34d17a',
};
const CALL_STATUS = {
  running: { icon: '●', color: '#6f8cff' },
  ok: { icon: '✓', color: '#34d17a' },
  error: { icon: '✕', color: '#ff5d5d' },
};
const RENDER_THROTTLE_MS = 200;
// The renderer first lowers its internal resolution; the tier drops only when frames stay
// slow at the lowest resolution for this many consecutive seconds.
const SLOW_SECONDS = 4;
const SETTLE_SECONDS = 3;
const FPS_KEY = 'dwp3d.fps';
const PERF_KEY = 'dwp3d.perf';
const LOOK_KEY = 'dwp3d.look';
const BRIGHT_KEY = 'dwp3d.brightness';
// Background music: on unless the user turned it off (then 'off' is stored), and its volume.
const MUSIC_KEY = 'dwp3d.music';
const MUSIC_VOL_KEY = 'dwp3d.musicVolume';
const MUSIC_TICK_MS = 1000;

function readStored(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    if (value == null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable; the choice still applies to this view.
  }
}

function storedQuality() {
  const q = readStored(QUALITY_KEY);
  return QUALITY_TIERS.includes(q) ? q : null;
}

/** Stored frame-rate cap: 'auto' when nothing valid is stored. */
function storedFps() {
  const raw = readStored(FPS_KEY);
  const v = raw == null ? 'auto' : Number(raw);
  return FPS_CAPS.includes(v) ? v : 'auto';
}

// Unique ids for label/control pairs; the fallback covers hosts on React 17.
function useUid() {
  return typeof React.useId === 'function' ? React.useId() : 'dwp3d';
}

function storedLook() {
  const v = readStored(LOOK_KEY);
  return LOOK_IDS.includes(v) ? v : DEFAULT_LOOK;
}

function storedBrightness() {
  const v = Number(readStored(BRIGHT_KEY));
  return Number.isFinite(v) && v >= BRIGHTNESS.min && v <= BRIGHTNESS.max ? v : BRIGHTNESS.initial;
}

function storedSource() {
  return readStored(SOURCE_KEY) === 'demo' ? 'demo' : 'live';
}

function storedMusicOn() {
  return readStored(MUSIC_KEY) !== 'off';
}

function storedMusicVolume() {
  const raw = readStored(MUSIC_VOL_KEY);
  const v = raw == null ? NaN : Number(raw);
  return Number.isFinite(v) && v >= 0 && v <= 1 ? v : DEFAULT_VOLUME;
}

/*
 * Live data probes. Each one calls a single DSH slot hook and hands the value to the view; they
 * render nothing. Separate components keep every hook call unconditional, and the boundary
 * turns a hook that throws (an older or newer DSH) into "no live data" instead of a broken view.
 */
class ProbeBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(err) {
    if (this.props.onError) this.props.onError(err);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function ProjectionProbe({ use, name, onValue }) {
  const value = use(name);
  useEffect(() => onValue(value), [value, onValue]);
  return null;
}

// Running and blank flags as one primitive, so the hook re-renders only when either changes.
const sessionFlags = (s) => (s ? `${s.running ? 1 : 0}${s.blank ? 1 : 0}` : '');

function SessionProbe({ use, onValue }) {
  const flags = use(sessionFlags);
  useEffect(() => onValue(flags), [flags, onValue]);
  return null;
}

// The assistant message being streamed in the chat (null between messages).
const chatPartial = (s) => (s && s.legacy ? s.legacy.partial || null : null);

function StreamProbe({ use, onValue }) {
  const partial = use(chatPartial);
  useEffect(() => onValue(partial), [partial, onValue]);
  return null;
}

function fpsLabel(t, v) {
  if (v === 'auto') return t('fps.auto');
  if (v === 0) return t('fps.unlimited');
  return t('fps.n', { n: v });
}

/** Renderer statistics, shown on request; values arrive once per second. */
function PerfPanel({ t, perf }) {
  if (!perf) {
    return (
      <div className="dwp3d-panel dwp3d-perf" role="status">
        <span className="dwp3d-muted">{t('perf.waiting')}</span>
      </div>
    );
  }
  const ms = (v) => (typeof v === 'number' && v > 0 ? `${v.toFixed(1)} ms` : '—');
  const rows = [
    [t('perf.fps'), `${perf.fps.toFixed(0)} / ${perf.target ? perf.target.toFixed(0) : '∞'}`],
    [t('perf.cpu'), ms(perf.cpuMs)],
    [t('perf.gpu'), perf.gpuTimer ? ms(perf.gpuMs) : t('perf.gpuNone')],
    [t('perf.calls'), String(perf.calls)],
    [t('perf.tris'), formatTokens(perf.triangles)],
    [t('perf.res'), `${perf.width}×${perf.height} · ${Math.round(perf.scale * 100)}%`],
  ];
  return (
    <div className="dwp3d-panel dwp3d-perf" aria-label={t('perf.title')}>
      {rows.map(([k, v]) => (
        <div key={k} className="dwp3d-perf-row">
          <span>{k}</span>
          <b>{v}</b>
        </div>
      ))}
    </div>
  );
}

/** Which camera preset frames a clicked object. */
function presetFor(id) {
  if (!id) return null;
  if (id === 'tank') return 'fuel';
  if (id === 'engine' || id === 'console' || id === 'dispenser') return 'engine';
  if (id === 'robot' || id === 'lock' || id === 'unload' || id.startsWith('station:')) return 'stations';
  if (id === 'living') return 'living';
  if (id === 'dock') return 'dock';
  if (id === 'pool') return 'pool';
  return 'products';
}

function langOf(ctx) {
  try {
    const l = ctx && ctx.locale && ctx.locale.getLocale();
    const active = (l && (l.active || l.locale)) || '';
    return String(active).toLowerCase().startsWith('zh') ? 'zh' : 'en';
  } catch {
    return 'en';
  }
}

/** Re-render when the Client locale changes; returns a revision counter. */
function useLocaleRevision(ctx) {
  const [rev, bump] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const locale = ctx && ctx.locale;
    if (!locale || typeof locale.subscribe !== 'function') return undefined;
    const off = locale.subscribe(() => bump());
    return () => {
      if (typeof off === 'function') off();
      else if (off && typeof off.dispose === 'function') off.dispose();
    };
  }, [ctx]);
  return rev;
}

const nameOf = (info, lang) => (info && (info[lang] || info.en)) || '';
const titleOf = (info, lang) => `${nameOf(info, lang)} · ${info.code}`;

/** Floating labels: the same names and codes as the 3D nameplates. */
function labelSpec(lang) {
  const machine = (id) => ({ id, text: nameOf(MACHINE_INFO[id], lang), sub: MACHINE_INFO[id].code });
  return [
    machine('tank'),
    machine('engine'),
    machine('robot'),
    machine('dock'),
    ...STATION_ORDER.map((k) => ({ id: `station:${k}`, text: nameOf(STATION_INFO[k], lang), sub: STATION_INFO[k].code })),
    machine('loadport'),
    machine('stocker'),
    machine('living'),
    machine('pool'),
  ];
}

const batchStatus = (turn) => (turn.status === 'running' ? 'running' : turn.status === 'ok' ? 'ok' : 'rework');

const BALANCE_STATUS_KEYS = {
  loading: 'bal.loading',
  'signed-out': 'bal.signedOut',
  'no-host': 'bal.noHost',
  failed: 'bal.failed',
  unavailable: 'bal.unavailable',
};
// What the user can do about a missing balance (card title and tank tooltip).
const BALANCE_HELP_KEYS = {
  'signed-out': 'bal.signedOutHelp',
  'no-host': 'bal.noHostHelp',
  failed: 'bal.failedHelp',
  unavailable: 'bal.unavailableHelp',
};
const nowMs = () => (typeof performance !== 'undefined' && typeof performance.now === 'function' ? performance.now() : Date.now());

/** The balance as money, or why there is none. */
function balanceText(t, balance, currency, status) {
  if (balance != null) return formatMoney(balance, currency);
  return t(BALANCE_STATUS_KEYS[status] || 'bal.unavailable');
}

/** Next step for a missing live balance, or '' when there is a balance or nothing to do. */
function balanceHelp(t, balance, status, demo) {
  if (demo || balance != null) return '';
  const key = BALANCE_HELP_KEYS[status];
  return key ? t(key) : '';
}

function batchRows(t, turn) {
  // The live view lists at most a few paths per turn; fileCount stays exact.
  const files = typeof turn.fileCount === 'number' ? turn.fileCount : turn.files.length;
  const rows = [[t('status.' + batchStatus(turn)), t('hover.batchBody', { calls: turn.calls, errors: turn.errors, files })]];
  for (const f of turn.files.slice(0, 6)) rows.push([basename(f.path), `+${f.added} −${f.removed}`]);
  if (files > 6) rows.push(['…', `+${files - 6}`]);
  const time = (turn.endedAt || Date.now()) - turn.startedAt;
  rows.push(['', t('hover.batchCost', { cost: formatMoney(turn.cost), time: formatDuration(time) })]);
  return rows;
}

/** Tooltip content for a hovered scene object: { title, body, rows: [[key, value]] }. */
function tipFor(id, d) {
  const { t, s, live, lang, price, peak, m } = d;
  const machine = (key, rows = []) => ({ title: titleOf(MACHINE_INFO[key], lang), body: t('desc.' + key), rows });
  const perM = (v) => t('unit.perM', { price: formatMoney(v) });
  switch (id) {
    case 'tank': {
      const rows = [[d.demo ? t('m.balanceDemo') : t('m.balance'), balanceText(t, d.balance, d.currency, live.balanceStatus)]];
      if (!d.demo && d.balance != null && live.toppedUp != null) {
        rows.push([t('m.toppedUp'), formatMoney(live.toppedUp, d.currency)]);
        rows.push([t('m.granted'), formatMoney(live.granted || 0, d.currency)]);
      }
      if (!d.demo && d.balance != null && live.balanceSource === 'api-key') rows.push(['', t('m.balanceViaKey')]);
      const help = balanceHelp(t, d.balance, live.balanceStatus, d.demo);
      if (help) rows.push(['', help]);
      if (price) {
        rows.push([t('price.peak'), `${perM(price.miss[1])} · ${perM(price.output[1])}`]);
        rows.push([t('price.off'), `${perM(price.miss[0])} · ${perM(price.output[0])}`]);
      }
      rows.push(['', t(peak ? 'm.peakNow' : 'm.offNow')]);
      return machine('tank', rows);
    }
    case 'engine':
      return machine('engine', [
        [t('hover.model'), s.model ? `${s.model}${s.effort ? ` · ${s.effort}` : ''}` : '—'],
        [t('phase.' + d.phase), live.tps > 0.5 ? t('unit.tps', { n: Math.round(live.tps) }) : '—'],
      ]);
    case 'console': {
      const rows = [
        [t('row.context'), `${formatPct(m.contextRatio)} · ${formatTokens(s.contextTokens)} / ${formatTokens(s.contextWindow)}`],
        [t('row.miss'), formatTokens(s.totals.miss)],
      ];
      if (s.totals.write > 0) rows.push([t('row.write'), formatTokens(s.totals.write)]);
      rows.push(
        [t('row.hit'), formatTokens(s.totals.hit)],
        [t('row.output'), formatTokens(s.totals.output)],
        [t('row.reasoning'), formatTokens(s.totals.reasoning)],
        [t('row.cost'), formatMoney(s.totals.cost)],
      );
      return machine('console', rows);
    }
    case 'dispenser':
    case 'robot':
    case 'lock':
    case 'unload':
    case 'living':
    case 'pool':
      return machine(id);
    case 'dock': {
      const agents = s.agents || [];
      if (!agents.length) return machine('dock', [['', t('dock.none')]]);
      const count = (status) => agents.filter((a) => a.status === status).length;
      const running = agents.filter((a) => a.status === 'running');
      const rows = [
        [t('dock.running'), String(running.length)],
        [t('dock.done'), String(count('done'))],
      ];
      if (count('error')) rows.push([t('dock.failed'), String(count('error'))]);
      if (count('stopped')) rows.push([t('dock.stopped'), String(count('stopped'))]);
      if (d.dock && d.dock.overflow) rows.push([t('dock.queued'), String(d.dock.overflow)]);
      const flows = s.workflows || [];
      const wf = flows.filter((w) => w.status === 'running').pop() || flows[flows.length - 1];
      if (wf) rows.push([t('dock.workflow'), `${wf.name || '—'}${wf.phase ? ` · ${wf.phase}` : ''} · ${wf.done + wf.failed}/${wf.agents}`]);
      for (const a of running.slice(-3)) rows.push(['', a.label || a.name || a.id]);
      return machine('dock', rows);
    }
    case 'stocker': {
      const done = s.turns.filter((x) => x.status !== 'running');
      const ok = done.filter((x) => x.status === 'ok').length;
      return machine('stocker', [[t('status.ok'), `${ok}/${done.length}`]]);
    }
    case 'loadport': {
      const turn = s.turns[s.turns.length - 1];
      if (!turn || turn.status !== 'running') return machine('loadport');
      return {
        title: `${titleOf(MACHINE_INFO.loadport, lang)} · ${t('hover.batch', { no: turn.no })}`,
        body: t('desc.loadport'),
        rows: batchRows(t, turn),
      };
    }
    default:
      break;
  }
  if (id.startsWith('screen:')) {
    const key = id.slice(7);
    const desc = { flow: 'screen.descFlow', main: 'screen.descMain', cost: 'screen.descCost' }[key];
    if (!desc) return null;
    return { title: t('screen.' + key), body: t(desc), rows: [['', t('screen.click')]] };
  }
  if (id.startsWith('station:')) {
    const kind = id.slice(8);
    const info = STATION_INFO[kind];
    if (!info) return null;
    const calls = s.calls.filter((c) => c.kind === kind);
    const current = calls.filter((c) => c.status === 'running').pop();
    const last = calls[calls.length - 1];
    const rows = [];
    if (current) rows.push([t('hover.working'), current.label || current.name]);
    else if (last) rows.push([t('hover.lastCall'), last.label || last.name]);
    rows.push([t('hover.calls'), String((s.tools.byKind && s.tools.byKind[kind]) || 0)]);
    const errors = calls.filter((c) => c.status === 'error').length;
    if (errors) rows.push([t('status.error'), String(errors)]);
    return { title: titleOf(info, lang), body: t('st.' + kind), rows };
  }
  if (id.startsWith('foup:')) {
    const no = Number(id.slice(5));
    const turn = s.turns.find((x) => x.no === no);
    return { title: t('hover.batch', { no }), body: '', rows: turn ? batchRows(t, turn) : [] };
  }
  if (id.startsWith('card:')) {
    const card = (d.cards || []).find((c) => c.id === id.slice(5));
    if (!card) return null;
    return { title: card.k, body: card.title || [card.v, card.s].filter(Boolean).join(' · '), rows: [] };
  }
  return null;
}

const TIP_MARGIN = 8;

/** Tooltip beside the pointer (or a focused card), measured and kept inside the view. */
function Tooltip({ hover, data, rootRef }) {
  const tip = tipFor(hover.id, data);
  const ref = useRef(null);
  const [pos, setPos] = useState(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const root = rootRef.current;
    if (!el || !root) return;
    const W = root.clientWidth;
    const H = root.clientHeight;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    let x = hover.x + 16;
    if (x + w > W - TIP_MARGIN) x = hover.x - 14 - w;
    let y = hover.y + 18;
    if (y + h > H - TIP_MARGIN) y = hover.y - 12 - h;
    x = Math.round(Math.max(TIP_MARGIN, Math.min(x, W - TIP_MARGIN - w)));
    y = Math.round(Math.max(TIP_MARGIN, Math.min(y, H - TIP_MARGIN - h)));
    setPos((p) => (p && p.x === x && p.y === y ? p : { x, y }));
  });
  if (!tip) return null;
  // The first layout pass measures the panel unseen; the effect then places it.
  const style = pos ? { left: pos.x, top: pos.y } : { left: 0, top: 0, visibility: 'hidden' };
  return (
    <div ref={ref} className="dwp3d-panel dwp3d-tip" style={style} role="tooltip">
      <h4>{tip.title}</h4>
      {tip.body ? <p>{tip.body}</p> : null}
      {tip.rows.length ? (
        <div style={{ marginTop: 6 }}>
          {tip.rows.map(([k, v], i) => (
            <div className="row" key={i}>
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const cardText = (card) => card.title || `${card.k} · ${card.v}${card.s ? ` · ${card.s}` : ''}`;

const focusVisible = (el) => {
  try {
    return el.matches(':focus-visible');
  } catch {
    return true;
  }
};

/**
 * One metric card. Mouse users read the explanation from the title; keyboard and touch users
 * focus the card (Tab or tap) to get the same text as a tooltip via onTip(id, element).
 */
function Card({ card, uid, onTip }) {
  const title = cardText(card);
  // The value glows briefly in the card's accent when it changes (not on first show).
  const prev = useRef(card.v);
  const [bump, setBump] = useState(0);
  const touchRef = useRef(false);
  useEffect(() => {
    if (prev.current === card.v) return;
    prev.current = card.v;
    setBump((n) => n + 1);
  }, [card.v]);
  const accent = CARD_ACCENT[card.id];
  const descId = `${uid}-card-${card.id}`;
  return (
    <div
      className="dwp3d-panel dwp3d-card"
      title={title}
      style={accent ? { '--dwp3d-c': accent } : undefined}
      tabIndex={0}
      aria-describedby={descId}
      onPointerDown={(e) => {
        touchRef.current = e.pointerType !== 'mouse';
      }}
      onFocus={(e) => {
        if (touchRef.current || focusVisible(e.currentTarget)) onTip(card.id, e.currentTarget);
      }}
      onBlur={() => onTip(null)}
    >
      <span id={descId} className="dwp3d-sr">{title}</span>
      <div className="k">{card.k}</div>
      <div className="v" key={bump} data-bump={bump ? '' : undefined}>
        {card.v}
      </div>
      {card.s ? <div className="s">{card.s}</div> : null}
      {card.bar != null ? (
        <div className="dwp3d-bar">
          <i style={{ width: `${Math.round(Math.min(1, Math.max(0, card.bar)) * 100)}%`, background: card.barColor }} />
        </div>
      ) : null}
    </div>
  );
}

function Ticker({ t, calls }) {
  return (
    <div className="dwp3d-panel dwp3d-ticker">
      <h3>{t('ticker.title')}</h3>
      {calls.length ? (
        calls.map((c) => {
          const status = CALL_STATUS[c.status] ? c.status : 'running';
          const st = CALL_STATUS[status];
          const info = STATION_INFO[c.kind] || STATION_INFO.generic;
          const text = c.label ? `${c.name} · ${c.label}` : c.name;
          return (
            <div className="dwp3d-tick" key={c.id} title={`${info.code} · ${text}`}>
              <span className={status === 'running' ? 'st run' : 'st'} style={{ color: st.color }} aria-hidden="true">
                {st.icon}
              </span>
              <span className="dwp3d-sr">{t('call.' + status)}</span>
              <code>{info.code}</code>
              <span className="l">{text}</span>
            </div>
          );
        })
      ) : (
        <div className="dwp3d-tick dwp3d-muted">{t('ticker.empty')}</div>
      )}
    </div>
  );
}

function Legend({ t, hintOn, hintKey, onDismiss }) {
  return (
    <div className="dwp3d-panel dwp3d-legend">
      <div className="dwp3d-legend-row">
        <span className="dwp3d-legend-k">{t('legend.title')}</span>
        {LEGEND.map((k) => (
          <span className="dwp3d-legend-item" key={k}>
            <i className={`dwp3d-sw ${k}`} aria-hidden="true" />
            {t('legend.' + k)}
          </span>
        ))}
      </div>
      {hintOn ? (
        <div className="dwp3d-hint">
          <span>{t(hintKey)}</span>
          <button type="button" className="dwp3d-x" aria-label={t('hint.dismiss')} title={t('hint.dismiss')} onClick={onDismiss}>
            ×
          </button>
        </div>
      ) : null}
    </div>
  );
}

/** Navigation bar of the media-wall close-up: previous / name i/n / next / back. */
function ScreenBar({ t, id, ids, onStep, onBack }) {
  const i = Math.max(0, ids.indexOf(id));
  const many = ids.length > 1;
  return (
    <div className="dwp3d-screenbar-wrap">
      <div className="dwp3d-panel dwp3d-screenbar" role="toolbar" aria-label={t('screen.bar')}>
        <button type="button" className="dwp3d-btn" disabled={!many} title={t('screen.prev')} aria-label={t('screen.prev')} onClick={() => onStep(-1)}>
          ◀
        </button>
        <div className="dwp3d-screenbar-name" aria-live="polite">
          <b>{t('screen.' + id)}</b>
          <span>{t('screen.count', { i: i + 1, n: ids.length })}</span>
        </div>
        <button type="button" className="dwp3d-btn" disabled={!many} title={t('screen.next')} aria-label={t('screen.next')} onClick={() => onStep(1)}>
          ▶
        </button>
        <span className="sep" aria-hidden="true" />
        <button type="button" className="dwp3d-btn" onClick={onBack}>
          {t('screen.back')}
        </button>
      </div>
      <p className="dwp3d-screenbar-hint">{t('screen.hint')}</p>
    </div>
  );
}

const canFullscreen = () =>
  typeof document !== 'undefined' && document.fullscreenEnabled !== false
  && typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype.requestFullscreen === 'function';

/**
 * The "3D process" conversation view: a WebGL factory scene plus a glass HUD.
 * It shows the session's live data from this plugin's Host projection, or the built-in demo
 * session (fictional data, marked as such) when chosen or when live data cannot work.
 */
export function ProcessView(props) {
  const { ctx } = props;
  const localeRev = useLocaleRevision(ctx);
  const lang = langOf(ctx);
  const tRaw = props.tBound || props.t;
  const t = useCallback((key, params) => {
    const text = typeof tRaw === 'function' ? tRaw(key) : key;
    const str = typeof text === 'string' && text ? text : key;
    return params ? fill(str, params) : str;
  }, [tRaw]);
  const tRef = useRef(t);
  tRef.current = t;
  const langRef = useRef(lang);
  langRef.current = lang;

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(initialState());
  const liveRef = useRef({ phase: 'idle', tps: 0, balance: null, currency: 'CNY', balanceStatus: 'loading' });
  const pendingRef = useRef(0);
  const dirtyRef = useRef(false);
  const activeRef = useRef(true);
  const toastTimer = useRef(0);
  const perfRef = useRef({ settle: SETTLE_SECONDS, low: 0 });

  const [, render] = useReducer((x) => x + 1, 0);
  const [mountKey, setMountKey] = useState(0);
  const [manual, setManual] = useState(() => storedQuality() != null);
  const manualRef = useRef(manual);
  const [quality, setQuality] = useState(() => storedQuality() || 'medium');
  const qualityRef = useRef(quality);
  const [fpsCap, setFpsCap] = useState(storedFps);
  const fpsRef = useRef(fpsCap);
  const [perfOn, setPerfOn] = useState(() => readStored(PERF_KEY) === 'on');
  const perfOnRef = useRef(perfOn);
  perfOnRef.current = perfOn;
  const [perf, setPerf] = useState(null);
  const [look, setLook] = useState(storedLook);
  const lookRef = useRef(look);
  const [brightness, setBrightness] = useState(storedBrightness);
  const brightRef = useRef(brightness);
  const [displayOpen, setDisplayOpen] = useState(false);
  const uid = useUid();
  const [view, setView] = useState('overview');
  const [follow, setFollow] = useState(false);
  const [labelsOn, setLabelsOn] = useState(true);
  const labelsOnRef = useRef(labelsOn);
  labelsOnRef.current = labelsOn;
  const [panelsOn, setPanelsOn] = useState(true);
  const [hintOn, setHintOn] = useState(() => readStored(HINT_KEY) !== 'off');
  const [lookHintOn, setLookHintOn] = useState(() => readStored(LOOK_HINT_KEY) !== 'off');
  const [camMode, setCamMode] = useState('orbit');
  const [screenId, setScreenId] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [renderWarn, setRenderWarn] = useState(null);
  const [toast, setToast] = useState(null);
  const [cardTip, setCardTip] = useState(null);
  const [lostLong, setLostLong] = useState(false);
  const displayBtnRef = useRef(null);
  const popRef = useRef(null);
  const [musicOn, setMusicOn] = useState(storedMusicOn);
  const [musicVol, setMusicVol] = useState(storedMusicVolume);
  const [musicState, setMusicState] = useState('off');
  const musicRef = useRef(null);

  // Background music: one engine per page; this view holds it while mounted and reports when
  // it is visible (through the scene's onActive).
  useEffect(() => {
    const music = acquireMusic();
    musicRef.current = music;
    setMusicState(music.state());
    const off = music.subscribe(setMusicState);
    return () => {
      off();
      musicRef.current = null;
      releaseMusic(music, uid);
    };
  }, [uid]);
  useEffect(() => {
    if (musicRef.current) musicRef.current.setVolume(musicVol);
  }, [musicVol]);
  useEffect(() => {
    if (musicRef.current) musicRef.current.setMood(look);
  }, [look]);
  useEffect(() => {
    if (musicRef.current) musicRef.current.setEnabled(musicOn);
  }, [musicOn]);

  // Data source. Live data comes from this plugin's Host projection; a DSH without the
  // projection hook (or one whose hook fails) can only show the demo.
  const useProjectionHook = typeof props.useProjection === 'function' ? props.useProjection : null;
  const useSessionHook = typeof props.useSession === 'function' ? props.useSession : null;
  const useChatHook = typeof props.useChat === 'function' ? props.useChat : null;
  const [source, setSource] = useState(storedSource);
  const [probeFailed, setProbeFailed] = useState(false);
  const liveCapable = !!useProjectionHook && !probeFailed;
  const demoOn = source === 'demo' || !liveCapable;
  const demoOnRef = useRef(demoOn);
  demoOnRef.current = demoOn;
  const sessionKey = props.sessionId || '';
  const [sceneGen, setSceneGen] = useState(0);
  const [liveSeen, setLiveSeen] = useState(false);
  const [liveWaited, setLiveWaited] = useState(false);
  const viewRef = useRef(undefined);
  const pressureRef = useRef(undefined);
  const lastTurnRef = useRef('');
  const meterRef = useRef(null);
  if (!meterRef.current) meterRef.current = createStreamMeter();
  const balanceRef = useRef({ status: 'loading', balance: null, currency: 'CNY', toppedUp: null, granted: null, source: null });
  const balanceTimer = useRef(0);
  const balanceAbort = useRef(null);

  // HUD numbers refresh at most every 200 ms, and not at all while the scene is paused.
  const schedule = useCallback(() => {
    if (pendingRef.current) return;
    pendingRef.current = setTimeout(() => {
      pendingRef.current = 0;
      if (activeRef.current) render();
      else dirtyRef.current = true;
    }, RENDER_THROTTLE_MS);
  }, []);

  const showToast = useCallback((text) => {
    setToast(text);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const applyQuality = useCallback((q) => {
    if (!QUALITY_TIERS.includes(q)) return;
    qualityRef.current = q;
    setQuality(q);
    perfRef.current = { settle: SETTLE_SECONDS, low: 0 };
    if (sceneRef.current) sceneRef.current.setQuality(q);
  }, []);

  // ---- live data -------------------------------------------------------------------------
  const sessionRef = useRef({ running: undefined, blank: false });

  /** Show the newest projection view (with DSH's context pressure) in the scene and HUD. */
  const pushLiveState = useCallback(() => {
    if (demoOnRef.current) return;
    modelRef.current = withContext(viewRef.current, pressureRef.current) || initialState();
    if (sceneRef.current) sceneRef.current.setState(modelRef.current);
    schedule();
  }, [schedule]);

  const applyBalance = useCallback((b) => {
    balanceRef.current = b;
    if (demoOnRef.current) return;
    Object.assign(liveRef.current, {
      balance: b.balance,
      currency: b.currency,
      balanceStatus: b.status,
      toppedUp: b.toppedUp,
      granted: b.granted,
      balanceSource: b.source,
    });
    if (sceneRef.current) sceneRef.current.setLive({ balance: b.balance, currency: b.currency, balanceStatus: b.status });
    schedule();
  }, [schedule]);

  const loadBalance = useCallback(() => {
    if (demoOnRef.current) return;
    if (balanceAbort.current) balanceAbort.current.abort();
    const ac = typeof AbortController === 'function' ? new AbortController() : null;
    balanceAbort.current = ac;
    fetchBalance({ lang: langRef.current, signal: ac ? ac.signal : undefined }).then((b) => {
      if (ac && ac.signal.aborted) return;
      balanceAbort.current = null;
      // A failed refresh keeps the last known balance; signing out clears it.
      if (b.status !== 'ready' && b.status !== 'signed-out' && balanceRef.current.balance != null) return;
      applyBalance(b);
    }, () => {});
  }, [applyBalance]);

  const queueBalance = useCallback((ms) => {
    clearTimeout(balanceTimer.current);
    balanceTimer.current = setTimeout(loadBalance, ms);
  }, [loadBalance]);

  const onView = useCallback((value) => {
    viewRef.current = value;
    if (value) setLiveSeen(true);
    pushLiveState();
    // The balance changes once a turn's requests are billed; ask again shortly after it ends.
    const turns = value && Array.isArray(value.turns) ? value.turns : [];
    const last = turns.length ? turns[turns.length - 1] : null;
    const key = last ? `${last.no}:${last.status}` : '';
    if (lastTurnRef.current && key !== lastTurnRef.current && last && last.status !== 'running') {
      queueBalance(BALANCE_AFTER_TURN_MS);
      if (musicRef.current) musicRef.current.cue('turn');
    }
    lastTurnRef.current = key;
  }, [pushLiveState, queueBalance]);

  const onPressure = useCallback((value) => {
    pressureRef.current = value;
    pushLiveState();
  }, [pushLiveState]);

  const onSessionFlags = useCallback((flags) => {
    const running = flags ? flags[0] === '1' : undefined;
    sessionRef.current = { running, blank: flags ? flags[1] === '1' : false };
    if (demoOnRef.current) return;
    liveRef.current.running = running;
    if (sceneRef.current) sceneRef.current.setLive({ running });
    schedule();
  }, [schedule]);

  const applyStream = useCallback((r) => {
    if (demoOnRef.current) return;
    const live = liveRef.current;
    if (live.phase === r.phase && Math.abs((live.tps || 0) - r.tps) < 0.05) return;
    live.phase = r.phase;
    live.tps = r.tps;
    if (sceneRef.current) sceneRef.current.setLive({ phase: r.phase, tps: r.tps });
    schedule();
  }, [schedule]);

  const onPartial = useCallback((partial) => {
    applyStream(meterRef.current.push(partial, nowMs()));
  }, [applyStream]);

  const onProbeError = useCallback((err) => {
    setProbeFailed(true);
    if (typeof console !== 'undefined') console.warn('[dsh-work-process-3d] live data unavailable:', err);
  }, []);

  // Only the 显示 → 数据 switch is remembered; "show the demo for now" lasts for this view.
  const chooseSource = useCallback((next, remember = true) => {
    if (next !== 'live' && next !== 'demo') return;
    setSource(next);
    if (remember) writeStored(SOURCE_KEY, next === 'demo' ? 'demo' : null);
  }, []);

  // Scene lifecycle; Retry remounts by bumping mountKey. The data feed below fills it.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    let scene = null;
    let cancelled = false;
    let raf2 = 0;
    setLoading(true);
    setError(null);
    setRenderWarn(null);
    setHover(null);
    setCamMode('orbit');
    setScreenId(null);

    const onPerf = (stats) => {
      setError((e) => (e && e.kind === 'lost' ? null : e));
      if (perfOnRef.current) setPerf(stats);
      const p = perfRef.current;
      if (p.settle > 0) {
        p.settle -= 1;
        return;
      }
      if (manualRef.current) return;
      const atFloor = stats && stats.scale <= stats.minScale + 1e-3;
      p.low = stats && stats.slow && atFloor ? p.low + 1 : 0;
      if (p.low < SLOW_SECONDS) return;
      p.low = 0;
      const i = QUALITY_TIERS.indexOf(qualityRef.current);
      if (i <= 0) return;
      const next = QUALITY_TIERS[i - 1];
      // Automatic changes are not stored, so the next visit starts from the GPU default again.
      applyQuality(next);
      showToast(tRef.current('quality.downgraded', { q: tRef.current(`quality.${next}`) }));
    };

    const start = () => {
      try {
        scene = createFactoryScene(stage, {
          quality: manualRef.current ? qualityRef.current : 'auto',
          fps: fpsRef.current,
          look: lookRef.current,
          brightness: brightRef.current,
          demo: demoOnRef.current,
          onHover: setHover,
          onSelect: (id) => {
            const preset = presetFor(id);
            if (!preset || !scene) return;
            scene.setCameraPreset(preset);
            setView(preset);
            setFollow(false);
          },
          onPerf,
          onError: (kind, detail) => {
            if (kind === 'shader') {
              setRenderWarn((w) => w || String(detail || ''));
              return;
            }
            if (kind !== 'context-lost') return;
            setHover(null);
            setError({ kind: 'lost' });
          },
          onActive: (on) => {
            activeRef.current = on;
            if (musicRef.current) musicRef.current.setActive(on, uid);
            if (on && dirtyRef.current) {
              dirtyRef.current = false;
              render();
            }
          },
          onReady: () => setLoading(false),
          onMode: (m) => {
            setCamMode(m);
            if (m === 'look' || m === 'screen') setFollow(false);
          },
          onScreen: (id) => {
            setScreenId(id);
            if (id) setHover(null);
          },
          // Dragging, zooming or walking leaves the preset, so no view button stays pressed.
          onUserCamera: () => setView(null),
        });
      } catch (err) {
        while (stage.firstChild) stage.removeChild(stage.firstChild);
        setLoading(false);
        setError({ kind: 'webgl', msg: String((err && err.message) || err) });
        return;
      }
      sceneRef.current = scene;
      qualityRef.current = scene.getQuality();
      setQuality(qualityRef.current);
      perfRef.current = { settle: SETTLE_SECONDS, low: 0 };
      scene.setLabels(labelSpec(langRef.current));
      scene.setLabelsVisible(labelsOnRef.current);
      scene.setPerfDetail(perfOnRef.current);
      // The data feed effect starts once it sees the new scene.
      setSceneGen((g) => g + 1);
      render();
    };

    // Wait two frames so the loading panel paints before the synchronous scene build.
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (!cancelled) start();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      if (scene) scene.dispose();
      sceneRef.current = null;
      // A disposed scene reports nothing more; its successor reports again once it runs.
      if (musicRef.current) musicRef.current.setActive(false, uid);
      clearTimeout(pendingRef.current);
      pendingRef.current = 0;
    };
  }, [mountKey, applyQuality, schedule, showToast]);

  // Data feed: the demo session, or this session's live projection. Starts over when the scene
  // is rebuilt, the source changes or the view shows another session.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;
    scene.resetState();
    scene.setDemo(demoOn);
    meterRef.current.reset();
    if (demoOn) {
      // A Retry disposes the scene before this effect sees its successor.
      const current = () => sceneRef.current === scene;
      const demo = createDemo({
        onEvents: (events) => {
          if (!current()) return;
          modelRef.current = reduceAll(modelRef.current, events);
          scene.setState(modelRef.current);
          schedule();
          if (musicRef.current && events.some((e) => e && e.type === 'turn/end')) musicRef.current.cue('turn');
        },
        onLive: (live) => {
          if (!current()) return;
          Object.assign(liveRef.current, live);
          scene.setLive(live);
          schedule();
        },
      });
      modelRef.current = reduceAll(initialState(), demo.prefill(2));
      liveRef.current = { phase: 'idle', tps: 0, balance: demo.balance, currency: 'CNY', balanceStatus: 'ready', running: undefined };
      scene.setState(modelRef.current);
      scene.setLive(liveRef.current);
      demo.start();
      render();
      return () => demo.stop();
    }
    const b = balanceRef.current;
    liveRef.current = {
      phase: 'idle',
      tps: 0,
      balance: b.balance,
      currency: b.currency,
      balanceStatus: b.status,
      toppedUp: b.toppedUp,
      granted: b.granted,
      balanceSource: b.source,
      running: sessionRef.current.running,
    };
    scene.setLive(liveRef.current);
    lastTurnRef.current = '';
    pushLiveState();
    render();
    return undefined;
  }, [sceneGen, demoOn, sessionKey, schedule, pushLiveState]);

  // Live balance: at once, every two minutes while the view is visible, and after each turn.
  useEffect(() => {
    if (demoOn) return undefined;
    loadBalance();
    const id = setInterval(() => {
      const hidden = typeof document !== 'undefined' && document.visibilityState === 'hidden';
      if (activeRef.current && !hidden) loadBalance();
    }, BALANCE_REFRESH_MS);
    return () => {
      clearInterval(id);
      clearTimeout(balanceTimer.current);
      if (balanceAbort.current) balanceAbort.current.abort();
      balanceAbort.current = null;
    };
  }, [demoOn, loadBalance]);

  // While text streams, the rate falls when chunks stop arriving.
  useEffect(() => {
    if (demoOn) return undefined;
    const id = setInterval(() => applyStream(meterRef.current.tick(nowMs())), STREAM_TICK_MS);
    return () => clearInterval(id);
  }, [demoOn, applyStream]);

  // The music plays more glass notes while the session works.
  useEffect(() => {
    if (musicState !== 'playing') return undefined;
    const id = setInterval(() => {
      const scene = sceneRef.current;
      if (scene && musicRef.current) musicRef.current.setActivity(scene.activity());
    }, MUSIC_TICK_MS);
    return () => clearInterval(id);
  }, [musicState]);

  // Live data that does not arrive gets an explanation after a while.
  useEffect(() => {
    setLiveWaited(false);
    if (demoOn || liveSeen) return undefined;
    const id = setTimeout(() => setLiveWaited(true), LIVE_WAIT_MS);
    return () => clearTimeout(id);
  }, [demoOn, liveSeen]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  // Floating labels follow the locale.
  useEffect(() => {
    if (sceneRef.current) sceneRef.current.setLabels(labelSpec(lang));
  }, [lang, localeRev]);

  useEffect(() => {
    if (sceneRef.current) sceneRef.current.setLabelsVisible(labelsOn);
  }, [labelsOn]);

  useEffect(() => {
    const onChange = () => setFullscreen(!!rootRef.current && document.fullscreenElement === rootRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // 显示 moves the focus into its first control, so Tab walks through the popover next.
  useEffect(() => {
    if (!displayOpen || !popRef.current) return;
    const first = popRef.current.querySelector('button:not([disabled]), input:not([disabled]), select:not([disabled])');
    try {
      if (first) first.focus({ preventScroll: true });
    } catch {
      /* focus is best effort */
    }
  }, [displayOpen]);

  // A lost GPU context that does not come back gets a reload button after a few seconds.
  const lostNow = !!error && error.kind === 'lost';
  useEffect(() => {
    setLostLong(false);
    if (!lostNow) return undefined;
    const id = setTimeout(() => setLostLong(true), LOST_WAIT_MS);
    return () => clearTimeout(id);
  }, [lostNow]);

  const focusStage = () => {
    try {
      if (stageRef.current) stageRef.current.focus({ preventScroll: true });
    } catch {
      /* focus is best effort */
    }
  };
  // Toolbar clicks take the focus; in Roam and the close-up the keys belong to the stage.
  const keepKeys = () => {
    const scene = sceneRef.current;
    const mode = scene ? scene.getMode() : camMode;
    if (mode === 'look' || mode === 'screen') focusStage();
  };
  const goView = (v) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const before = scene.getMode();
    scene.setCameraPreset(v);
    setView(v);
    setFollow(false);
    // A preset that changes the camera mode (the balcony roams) says so.
    const after = scene.getMode();
    if (after !== before && (after === 'look' || after === 'orbit')) showToast(t(after === 'look' ? 'mode.toLook' : 'mode.toOrbit'));
    // Roaming presets (the balcony) walk with the keyboard right away.
    if (after === 'look') focusStage();
  };
  // Narrow tabs pick the view from a list instead of a row of buttons.
  const onViewSelect = (value) => {
    if (value === 'screens') toggleScreens();
    else if (VIEWS.includes(value)) goView(value);
  };
  // 大屏 toggles the media-wall close-up; ← / → in it need the stage focus.
  const toggleScreens = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (scene.getScreen()) {
      scene.exitScreen();
      return;
    }
    if (scene.focusScreen('main')) {
      setFollow(false);
      focusStage();
    }
  };
  const stepScreen = (dir) => {
    if (sceneRef.current) sceneRef.current.stepScreen(dir);
    focusStage(); // ← / → keep working after a click on ◀ / ▶
  };
  const exitScreen = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.exitScreen();
    keepKeys();
  };
  const toggleFollow = () => {
    const scene = sceneRef.current;
    const next = !follow;
    // setFollow may leave the close-up or Roam first (which reports follow off); read it back.
    if (scene) scene.setFollow(next);
    setFollow(scene && typeof scene.getFollow === 'function' ? scene.getFollow() : next);
  };
  const toggleLabels = () => {
    setLabelsOn((v) => !v);
    keepKeys();
  };
  const togglePanels = () => {
    setPanelsOn((v) => !v);
    keepKeys();
  };
  const closeDisplay = (refocus) => {
    setDisplayOpen(false);
    if (!refocus || !displayBtnRef.current) return;
    try {
      displayBtnRef.current.focus({ preventScroll: true });
    } catch {
      /* focus is best effort */
    }
  };
  // Browsers start audio only after a gesture, so any press inside the view unlocks the music.
  const unlockMusic = () => {
    if (musicRef.current) musicRef.current.unlock();
  };
  // `force` true/false picks that state; without it the button flips. A click on a pulsing
  // button means "start the music", not "turn the switch off", so waiting counts as off.
  const toggleMusic = (force) => {
    const music = musicRef.current;
    const waiting = !!music && music.state() === 'locked';
    const next = force === true || (force !== false && (waiting || !musicOn));
    setMusicOn(next);
    writeStored(MUSIC_KEY, next ? null : 'off');
    // Start inside the click itself: some browsers allow audio only during the gesture.
    if (music) {
      music.unlock();
      music.setEnabled(next);
    }
  };
  const onMusicVolume = (value) => {
    const v = Math.min(1, Math.max(0, Number(value)));
    if (!Number.isFinite(v)) return;
    setMusicVol(v);
    writeStored(MUSIC_VOL_KEY, Math.abs(v - DEFAULT_VOLUME) < 1e-3 ? null : String(v));
  };
  // Esc closes 显示 first, then leaves the screen close-up; every other key passes through.
  const onRootKeyDown = (e) => {
    if (e.key !== 'Escape' || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    if (displayOpen) {
      e.preventDefault();
      e.stopPropagation();
      closeDisplay(true);
      return;
    }
    if (screenId && sceneRef.current) {
      e.preventDefault();
      e.stopPropagation();
      exitScreen();
    }
  };
  const onCardTip = useCallback((id, el) => {
    const root = rootRef.current;
    if (!id || !el || !root) {
      setCardTip(null);
      return;
    }
    const r = el.getBoundingClientRect();
    const R = root.getBoundingClientRect();
    setCardTip({ id, x: r.left - R.left + r.width / 2, y: r.top - R.top });
  }, []);
  const toggleFullscreen = () => {
    const el = rootRef.current;
    if (!el) return;
    const fail = () => showToast(tRef.current('error.fullscreen'));
    try {
      const p = document.fullscreenElement ? document.exitFullscreen() : el.requestFullscreen();
      if (p && typeof p.catch === 'function') p.catch(fail);
    } catch {
      fail();
    }
  };
  const onQuality = (value) => {
    if (value === 'auto') {
      writeStored(QUALITY_KEY, null);
      manualRef.current = false;
      setManual(false);
      if (sceneRef.current) applyQuality(sceneRef.current.autoQuality());
      return;
    }
    if (!QUALITY_TIERS.includes(value)) return;
    writeStored(QUALITY_KEY, value);
    manualRef.current = true;
    setManual(true);
    applyQuality(value);
  };
  const onFps = (value) => {
    const v = value === 'auto' ? 'auto' : Number(value);
    if (!FPS_CAPS.includes(v)) return;
    fpsRef.current = v;
    setFpsCap(v);
    writeStored(FPS_KEY, v === 'auto' ? null : String(v));
    perfRef.current = { settle: SETTLE_SECONDS, low: 0 };
    if (sceneRef.current) sceneRef.current.setFrameCap(v);
  };
  const togglePerf = () => {
    const next = !perfOn;
    setPerfOn(next);
    writeStored(PERF_KEY, next ? 'on' : null);
    if (!next) setPerf(null);
    if (sceneRef.current) sceneRef.current.setPerfDetail(next);
  };
  const onLook = (id) => {
    if (!LOOK_IDS.includes(id)) return;
    lookRef.current = id;
    setLook(id);
    writeStored(LOOK_KEY, id === DEFAULT_LOOK ? null : id);
    if (sceneRef.current) sceneRef.current.setLook(id);
  };
  const onBrightness = (value) => {
    const v = Math.min(BRIGHTNESS.max, Math.max(BRIGHTNESS.min, Number(value) || BRIGHTNESS.initial));
    brightRef.current = v;
    setBrightness(v);
    writeStored(BRIGHT_KEY, Math.abs(v - BRIGHTNESS.initial) < 1e-3 ? null : String(v));
    if (sceneRef.current) sceneRef.current.setBrightness(v);
  };
  const dismissHint = () => {
    if (camMode === 'look') {
      writeStored(LOOK_HINT_KEY, 'off');
      setLookHintOn(false);
    } else {
      writeStored(HINT_KEY, 'off');
      setHintOn(false);
    }
  };
  // 显示 → 操作提示 brings dismissed hints back (or hides both).
  const hintsShown = camMode === 'look' ? lookHintOn : hintOn;
  const toggleHints = () => {
    const next = !hintsShown;
    writeStored(HINT_KEY, next ? null : 'off');
    writeStored(LOOK_HINT_KEY, next ? null : 'off');
    setHintOn(next);
    setLookHintOn(next);
  };
  const chooseMode = (m) => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.setMode(m);
    setCamMode(scene.getMode());
    if (m === 'look') {
      setFollow(false);
      // Walking keys go to the stage, so move the focus there right away.
      focusStage();
    }
  };
  const retry = () => setMountKey((k) => k + 1);

  // ── Derived HUD data ──────────────────────────────────────────
  const s = modelRef.current;
  const live = liveRef.current;
  const m = metrics(s);
  const price = priceFor(s.provider, s.model);
  const peak = isPeak(Date.now());
  // Same rule as the scene: the live stream wins, a stopped session is idle.
  const phase = live.phase && live.phase !== 'idle' ? live.phase : live.running === false ? 'idle' : s.phase;
  const balance = typeof live.balance === 'number' ? live.balance : null;
  const currency = live.currency || 'CNY';
  const affordable = balance != null && price && currency !== 'USD' ? affordableTokens(balance, price, peak) : 0;
  const doneTurns = s.turns.filter((x) => x.status !== 'running');
  const okTurns = doneTurns.filter((x) => x.status === 'ok').length;
  const ctxColor = m.contextRatio >= 0.8 ? '#ff5d5d' : m.contextRatio >= 0.6 ? '#ffb347' : '#4d6bfe';
  const tpsText = live.tps > 0.5 && (phase === 'generating' || phase === 'reasoning') ? ` · ${t('unit.tps', { n: Math.round(live.tps) })}` : '';
  const uncached = s.totals.miss + s.totals.write;
  const files = s.files;

  const cards = [
    {
      id: 'balance',
      k: demoOn ? t('m.balanceDemo') : t('m.balance'),
      v: balanceText(t, balance, currency, live.balanceStatus),
      s: affordable ? t('m.balanceSub', { tokens: formatTokens(affordable) }) : '',
      title: !demoOn && balance != null && live.toppedUp != null
        ? t('m.balanceTitle', { topped: formatMoney(live.toppedUp, currency), granted: formatMoney(live.granted || 0, currency) })
        : balanceHelp(t, balance, live.balanceStatus, demoOn) || undefined,
    },
    {
      id: 'context',
      k: t('m.context'),
      v: formatPct(m.contextRatio),
      s: `${formatTokens(s.contextTokens)} / ${formatTokens(s.contextWindow)}`,
      bar: m.contextRatio,
      barColor: ctxColor,
      title: t('m.contextTitle', { pct: formatPct(m.contextRatio), used: formatTokens(s.contextTokens), window: formatTokens(s.contextWindow) }),
    },
    {
      id: 'input',
      k: t('m.input'),
      v: formatTokens(m.prompt),
      s: t('m.inputSub', { rate: formatPct(m.hitRate), miss: formatTokens(uncached) }),
      title: t('m.inputTitle', {
        total: formatTokens(m.prompt),
        hit: formatTokens(s.totals.hit),
        rate: formatPct(m.hitRate),
        miss: formatTokens(uncached),
        write: s.totals.write > 0 ? t('m.writeNote', { n: formatTokens(s.totals.write) }) : '',
        saved: formatMoney(s.totals.savings),
      }),
    },
    { id: 'output', k: t('m.output'), v: formatTokens(s.totals.output), s: t('m.outputSub', { n: formatTokens(s.totals.reasoning) }) },
    {
      id: 'cost',
      k: t('m.cost'),
      v: formatMoney(s.totals.cost),
      s: t('m.costSub', { peak: formatMoney(s.totals.costPeak), off: formatMoney(s.totals.costOffPeak) }),
      title: t('m.costTitle', {
        cost: formatMoney(s.totals.cost),
        requests: s.totals.requests,
        peak: formatMoney(s.totals.costPeak),
        off: formatMoney(s.totals.costOffPeak),
        saved: formatMoney(s.totals.savings),
      }),
    },
    {
      id: 'tools',
      k: t('m.tools'),
      v: String(s.tools.calls),
      s: t('m.toolsSub', { n: s.tools.errors, rate: formatPct(m.toolSuccess) }),
      title: t('m.toolsTitle', { calls: s.tools.calls, running: s.tools.running, n: s.tools.errors }),
    },
    {
      id: 'products',
      k: t('m.products'),
      v: `${files.count} ${t('m.filesUnit')}`,
      s: t('m.productsSub', { a: files.added, r: files.removed, ok: okTurns, done: doneTurns.length }),
      title: t('m.productsTitle', { n: files.count, a: files.added, r: files.removed, ok: okTurns, done: doneTurns.length }),
    },
    {
      id: 'efficiency',
      k: t('m.efficiency'),
      v: `${m.linesPerKTokens.toFixed(1)} ${t('m.linesUnit')}`,
      s: t('m.efficiencySub', { cpf: formatMoney(m.costPerFile) }),
      title: t('m.efficiencyHint'),
    },
  ];
  const recent = s.calls.slice(-5).reverse();
  const dockInfo = hover && hover.id === 'dock' && sceneRef.current ? sceneRef.current.dockInfo() : null;
  const tipData = { t, s, live, lang, price, peak, m, phase, balance, currency, demo: demoOn, dock: dockInfo, cards };
  // Live status line under the title.
  const liveMissing = !demoOn && !liveSeen && liveWaited;
  const liveIdle = !demoOn && liveSeen && s.turnCount === 0 && !s.calls.length;
  const failed = !!error && error.kind === 'webgl';
  const hud = !loading && !failed;
  const screenIds = screenId && sceneRef.current ? sceneRef.current.screens() : [];
  const autoLabel = manual ? t('quality.autoPlain') : t('quality.autoOpt', { q: t('quality.' + quality) });
  const musicSupported = musicState !== 'unsupported';
  // On, but the browser still waits for a click in the page before it plays sound.
  const musicWaiting = musicOn && musicState === 'locked';
  const musicTitle = !musicSupported
    ? t('music.unsupported')
    : musicWaiting
      ? t('music.locked')
      : t(musicOn ? 'music.onHint' : 'music.offHint');
  const musicNote = !musicSupported ? t('music.unsupported') : musicWaiting ? t('music.locked') : null;

  return (
    <div
      ref={rootRef}
      className={`dwp3d-root${failed ? ' fail' : ''}`}
      onKeyDown={onRootKeyDown}
      onKeyDownCapture={unlockMusic}
      onPointerDownCapture={unlockMusic}
      onPointerUpCapture={unlockMusic}
    >
      <style>{CSS}</style>
      {!demoOn ? (
        <React.Fragment>
          <ProbeBoundary onError={onProbeError}>
            <ProjectionProbe use={useProjectionHook} name={PROJECTION_KEY} onValue={onView} />
          </ProbeBoundary>
          <ProbeBoundary>
            <ProjectionProbe use={useProjectionHook} name="contextPressure" onValue={onPressure} />
          </ProbeBoundary>
          {useSessionHook ? (
            <ProbeBoundary>
              <SessionProbe use={useSessionHook} onValue={onSessionFlags} />
            </ProbeBoundary>
          ) : null}
          {useChatHook ? (
            <ProbeBoundary>
              <StreamProbe use={useChatHook} onValue={onPartial} />
            </ProbeBoundary>
          ) : null}
        </React.Fragment>
      ) : null}
      {/* Focusable so the roaming camera can take WASD / arrow keys while the scene is focused. */}
      <div ref={stageRef} className="dwp3d-stage" tabIndex={0} role="application" aria-label={t('stage.label')} />
      {/* Clicking anywhere outside the display popover closes it. */}
      {displayOpen ? <div className="dwp3d-backdrop" onPointerDown={() => closeDisplay(false)} /> : null}

      {hud ? (
        <div className="dwp3d-top">
          <div className="dwp3d-panel dwp3d-title">
            <div className="dwp3d-title-row">
              <h2>{t('title')}</h2>
              {demoOn
                ? <span className="dwp3d-chip demo" title={t('badge.demoHint')}>{t('badge.demo')}</span>
                : <span className="dwp3d-chip live" title={t('badge.liveHint')}>{t('badge.live')}</span>}
              {s.model ? <span className="dwp3d-chip">{`${s.model}${s.effort ? ` · ${s.effort}` : ''}`}</span> : null}
              <span className="dwp3d-chip">
                <i className="dwp3d-dot" style={{ color: PHASE_COLOR[phase] || PHASE_COLOR.idle }} aria-hidden="true" />
                {`${t('phase.' + phase)}${tpsText}`}
              </span>
            </div>
            {demoOn ? (
              <p className="dwp3d-note">
                {t(liveCapable ? 'badge.demoHint' : probeFailed ? 'live.failed' : 'live.unsupported')}
                {liveCapable ? (
                  <React.Fragment>
                    {' '}
                    <button type="button" className="dwp3d-link" onClick={() => chooseSource('live')}>{t('live.backToLive')}</button>
                  </React.Fragment>
                ) : null}
              </p>
            ) : null}
            {liveMissing ? (
              <p className="dwp3d-note dwp3d-warn" role="status">
                {t('live.missing')}{' '}
                <button type="button" className="dwp3d-link" onClick={() => chooseSource('demo', false)}>{t('live.showDemo')}</button>
              </p>
            ) : null}
            {liveIdle ? <p className="dwp3d-note">{t('live.idle')}</p> : null}
            {renderWarn ? <p className="dwp3d-note dwp3d-warn" role="alert">{t('error.shader', { msg: renderWarn })}</p> : null}
          </div>
          <div className="dwp3d-right">
          <div className="dwp3d-panel dwp3d-tools">
            {/* Narrow tabs: one list instead of the row of view buttons (CSS picks one). */}
            <select
              className="dwp3d-select dwp3d-viewsel"
              aria-label={t('ctl.views')}
              value={screenId ? 'screens' : !follow && view ? view : ''}
              onChange={(e) => onViewSelect(e.target.value)}
            >
              <option value="" disabled>{t('ctl.viewPick')}</option>
              {VIEWS.map((v) => (
                <option key={v} value={v}>{t('view.' + v)}</option>
              ))}
              <option value="screens">{t('view.screens')}</option>
            </select>
            <div className="dwp3d-seg dwp3d-views" role="group" aria-label={t('ctl.views')}>
              {VIEWS.map((v) => {
                const on = !follow && !screenId && view === v;
                return (
                  <button
                    key={v}
                    type="button"
                    className={`dwp3d-btn${on ? ' on' : ''}`}
                    aria-pressed={on}
                    title={v === 'balcony' ? t('view.balconyHint') : undefined}
                    onClick={() => goView(v)}
                  >
                    {t('view.' + v)}
                  </button>
                );
              })}
              <button
                type="button"
                className={`dwp3d-btn${screenId ? ' on' : ''}`}
                title={t('view.screensHint')}
                aria-pressed={!!screenId}
                onClick={toggleScreens}
              >
                {t('view.screens')}
              </button>
            </div>
            <div className="dwp3d-seg" role="group" aria-label={t('ctl.mode')}>
              {CAMERA_MODES.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`dwp3d-btn${camMode === m ? ' on' : ''}`}
                  title={t(`mode.${m}Hint`)}
                  aria-pressed={camMode === m}
                  onClick={() => chooseMode(m)}
                >
                  {t('mode.' + m)}
                </button>
              ))}
            </div>
            <div className="dwp3d-group" role="group" aria-label={t('ctl.layers')}>
              <button type="button" className={`dwp3d-btn${follow ? ' on' : ''}`} title={t('ctl.followHint')} aria-pressed={follow} onClick={toggleFollow}>
                {t('ctl.follow')}
              </button>
              <button type="button" className={`dwp3d-btn${labelsOn ? ' on' : ''}`} title={t('ctl.labelsHint')} aria-pressed={labelsOn} onClick={toggleLabels}>
                {t('ctl.labels')}
              </button>
              <button type="button" className={`dwp3d-btn${panelsOn ? ' on' : ''}`} title={t('ctl.panelsHint')} aria-pressed={panelsOn} onClick={togglePanels}>
                {t('ctl.panels')}
              </button>
              <button
                type="button"
                className={`dwp3d-btn${musicOn && musicSupported ? ' on' : ''}${musicWaiting ? ' wait' : ''}`}
                title={musicTitle}
                aria-pressed={musicOn && musicSupported}
                aria-disabled={!musicSupported}
                aria-describedby={musicNote ? `${uid}-music-note` : undefined}
                onClick={() => {
                  if (musicSupported) toggleMusic();
                }}
              >
                {t('music.button')}
              </button>
              <button
                ref={displayBtnRef}
                type="button"
                className={`dwp3d-btn${displayOpen ? ' on' : ''}`}
                title={t('ctl.displayHint')}
                aria-expanded={displayOpen}
                aria-haspopup="dialog"
                onClick={() => (displayOpen ? closeDisplay(false) : setDisplayOpen(true))}
              >
                {t('ctl.display')}
              </button>
              {canFullscreen() ? (
                // The label says what a click does, so no pressed state on top of it.
                <button type="button" className="dwp3d-btn" onClick={toggleFullscreen}>
                  {fullscreen ? t('ctl.exitFullscreen') : t('ctl.fullscreen')}
                </button>
              ) : null}
              {musicNote ? (
                <p id={`${uid}-music-note`} className="dwp3d-music-note" role="status">
                  {musicNote}
                </p>
              ) : null}
            </div>
          </div>
          {displayOpen ? (
            <div ref={popRef} className="dwp3d-panel dwp3d-pop" role="dialog" aria-label={t('ctl.display')}>
              <div className="dwp3d-pop-row">
                <span className="dwp3d-pop-k">{t('source.label')}</span>
                <div className="dwp3d-seg" role="group" aria-label={t('source.label')}>
                  {['live', 'demo'].map((id) => {
                    const on = id === 'demo' ? demoOn : !demoOn;
                    const disabled = id === 'live' && !liveCapable;
                    return (
                      <button
                        key={id}
                        type="button"
                        className={`dwp3d-btn${on ? ' on' : ''}`}
                        aria-pressed={on}
                        disabled={disabled}
                        title={disabled ? t(probeFailed ? 'live.failed' : 'live.unsupported') : t('source.' + id + 'Hint')}
                        onClick={() => chooseSource(id)}
                      >
                        {t('source.' + id)}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="dwp3d-pop-row">
                <span className="dwp3d-pop-k">{t('look.label')}</span>
                <div className="dwp3d-seg" role="group" aria-label={t('look.label')}>
                  {LOOK_IDS.map((id) => (
                    <button key={id} type="button" className={`dwp3d-btn${look === id ? ' on' : ''}`} aria-pressed={look === id} onClick={() => onLook(id)}>
                      {t('look.' + id)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="dwp3d-pop-row">
                <label className="dwp3d-pop-k" htmlFor={`${uid}-brightness`}>{t('ctl.brightness')}</label>
                <input
                  id={`${uid}-brightness`}
                  className="dwp3d-range"
                  type="range"
                  min={BRIGHTNESS.min}
                  max={BRIGHTNESS.max}
                  step={BRIGHTNESS.step}
                  value={brightness}
                  aria-valuetext={`${Math.round(brightness * 100)}%`}
                  onChange={(e) => onBrightness(e.target.value)}
                />
                <b className="dwp3d-pop-v">{`${Math.round(brightness * 100)}%`}</b>
                <button
                  type="button"
                  className="dwp3d-x"
                  title={t('ctl.brightnessReset')}
                  aria-label={t('ctl.brightnessReset')}
                  disabled={Math.abs(brightness - BRIGHTNESS.initial) < 1e-3}
                  onClick={() => onBrightness(BRIGHTNESS.initial)}
                >
                  ↺
                </button>
              </div>
              <div className="dwp3d-pop-row">
                <span className="dwp3d-pop-k">{t('music.label')}</span>
                <div className="dwp3d-seg" role="group" aria-label={t('music.label')}>
                  {[true, false].map((on) => (
                    <button
                      key={on ? 'on' : 'off'}
                      type="button"
                      className={`dwp3d-btn${musicOn === on ? ' on' : ''}`}
                      aria-pressed={musicOn === on}
                      disabled={!musicSupported}
                      onClick={() => toggleMusic(on)}
                    >
                      {t(on ? 'music.on' : 'music.off')}
                    </button>
                  ))}
                </div>
              </div>
              <div className="dwp3d-pop-row">
                <label className="dwp3d-pop-k" htmlFor={`${uid}-volume`}>{t('music.volume')}</label>
                <input
                  id={`${uid}-volume`}
                  className="dwp3d-range"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={musicVol}
                  disabled={!musicSupported}
                  aria-valuetext={`${Math.round(musicVol * 100)}%`}
                  onChange={(e) => onMusicVolume(e.target.value)}
                />
                <b className="dwp3d-pop-v">{`${Math.round(musicVol * 100)}%`}</b>
              </div>
              <div className="dwp3d-pop-row">
                <label className="dwp3d-pop-k" htmlFor={`${uid}-quality`}>{t('ctl.quality')}</label>
                <select id={`${uid}-quality`} className="dwp3d-select" value={manual ? quality : 'auto'} onChange={(e) => onQuality(e.target.value)}>
                  <option value="auto">{autoLabel}</option>
                  {QUALITY_TIERS.map((q) => (
                    <option key={q} value={q}>{t('quality.' + q)}</option>
                  ))}
                </select>
              </div>
              <div className="dwp3d-pop-row">
                <label className="dwp3d-pop-k" htmlFor={`${uid}-fps`} title={t('ctl.fpsHint')}>{t('ctl.fps')}</label>
                <select id={`${uid}-fps`} className="dwp3d-select" value={String(fpsCap)} title={t('ctl.fpsHint')} onChange={(e) => onFps(e.target.value)}>
                  {FPS_CAPS.map((v) => (
                    <option key={String(v)} value={String(v)}>{fpsLabel(t, v)}</option>
                  ))}
                </select>
              </div>
              <label className="dwp3d-pop-row dwp3d-check" title={t('ctl.perfHint')}>
                <input type="checkbox" checked={perfOn} onChange={togglePerf} />
                <span>{t('ctl.perfShow')}</span>
              </label>
              <label className="dwp3d-pop-row dwp3d-check" title={t('ctl.hintsHint')}>
                <input type="checkbox" checked={hintsShown} onChange={toggleHints} />
                <span>{t('ctl.hints')}</span>
              </label>
            </div>
          ) : null}
          {perfOn ? <PerfPanel t={t} perf={perf} /> : null}
          </div>
        </div>
      ) : null}

      <div className="dwp3d-toast-wrap" role="status" aria-live="polite">
        {toast ? <div className="dwp3d-panel dwp3d-toast">{toast}</div> : null}
      </div>

      {hud && screenId ? <ScreenBar t={t} id={screenId} ids={screenIds} onStep={stepScreen} onBack={exitScreen} /> : null}

      {hud && panelsOn && !screenId ? (
        <div className="dwp3d-bottom">
          <div className="dwp3d-strip">
            <Ticker t={t} calls={recent} />
            <div className="dwp3d-cards">
              {cards.map((c) => (
                <Card key={c.id} card={c} uid={uid} onTip={onCardTip} />
              ))}
            </div>
            <Legend
              t={t}
              hintOn={camMode === 'look' ? lookHintOn : hintOn}
              hintKey={camMode === 'look' ? 'hint.look' : 'hint.controls'}
              onDismiss={dismissHint}
            />
          </div>
        </div>
      ) : null}

      {hud && hover && !screenId ? <Tooltip hover={hover} data={tipData} rootRef={rootRef} /> : null}
      {hud && cardTip && !hover && panelsOn && !screenId ? (
        <Tooltip hover={{ id: `card:${cardTip.id}`, x: cardTip.x, y: cardTip.y }} data={tipData} rootRef={rootRef} />
      ) : null}

      {loading && !error ? (
        <div className="dwp3d-center">
          <div className="dwp3d-panel dwp3d-loading" role="status">
            <span className="dwp3d-spin" aria-hidden="true" />
            {t('loading')}
          </div>
        </div>
      ) : null}

      {failed ? (
        <div className="dwp3d-center">
          <div className="dwp3d-fail" role="alert">
            <h3>{t('error.webglTitle')}</h3>
            <p>{t('error.webgl', { msg: error.msg })}</p>
            <button type="button" onClick={retry}>
              {t('error.retry')}
            </button>
          </div>
        </div>
      ) : null}

      {lostNow ? (
        <div className="dwp3d-center dim" role="alert">
          <div className="dwp3d-panel dwp3d-msg">
            <p>{t('error.lost')}</p>
            {lostLong ? (
              <button type="button" className="dwp3d-btn on" onClick={retry}>
                {t('error.reload')}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
