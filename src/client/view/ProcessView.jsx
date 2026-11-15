import * as React from 'react';
import { createFactoryScene, QUALITY_TIERS, FPS_CAPS, CAMERA_MODES } from '../scene/renderer.js';
import { LOOK_IDS, DEFAULT_LOOK, BRIGHTNESS } from '../scene/looks.js';
import { createDemo } from '../../model/demo.js';
import { initialState, reduceAll, metrics } from '../../model/reducer.js';
import { STATION_INFO, STATION_ORDER, MACHINE_INFO, basename } from '../../model/stations.js';
import { priceFor, isPeak, affordableTokens } from '../../model/pricing.js';
import { formatTokens, formatMoney, formatPct, formatDuration, fill } from '../format.js';
import { CSS } from './styles.js';

const { useEffect, useRef, useState, useReducer, useCallback } = React;

// M0: the built-in demo session drives the view, and the view says so on screen.
const DEMO = true;
// Holds only a tier the user picked; when absent the GPU-based default applies.
const QUALITY_KEY = 'dwp3d.quality';
const HINT_KEY = 'dwp3d.hint';
const LOOK_HINT_KEY = 'dwp3d.hint.look';
const VIEWS = ['overview', 'fuel', 'engine', 'stations', 'products', 'balcony'];
const LEGEND = ['raw', 'normal', 'gold', 'bad'];
const PHASE_COLOR = { idle: '#8a93a6', thinking: '#a487ff', reasoning: '#a487ff', generating: '#6f8cff', tool: '#ffb347' };
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
    ...STATION_ORDER.map((k) => ({ id: `station:${k}`, text: nameOf(STATION_INFO[k], lang), sub: STATION_INFO[k].code })),
    machine('loadport'),
    machine('stocker'),
  ];
}

const batchStatus = (turn) => (turn.status === 'running' ? 'running' : turn.status === 'ok' ? 'ok' : 'rework');

function batchRows(t, turn) {
  const rows = [[t('status.' + batchStatus(turn)), t('hover.batchBody', { calls: turn.calls, errors: turn.errors, files: turn.files.length })]];
  for (const f of turn.files.slice(0, 6)) rows.push([basename(f.path), `+${f.added} −${f.removed}`]);
  if (turn.files.length > 6) rows.push(['…', `+${turn.files.length - 6}`]);
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
      const rows = [[DEMO ? t('m.balanceDemo') : t('m.balance'), d.balance == null ? t('m.balanceNone') : formatMoney(d.balance, d.currency)]];
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
      return machine(id);
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
  return null;
}

function Tooltip({ hover, data, rootRef }) {
  const tip = tipFor(hover.id, data);
  if (!tip) return null;
  const root = rootRef.current;
  const W = root ? root.clientWidth : 0;
  const H = root ? root.clientHeight : 0;
  const flipX = hover.x > W - 320;
  const flipY = hover.y > H - 220;
  const style = {
    left: flipX ? hover.x - 14 : hover.x + 16,
    top: flipY ? hover.y - 12 : hover.y + 18,
    transform: `translate(${flipX ? '-100%' : '0'}, ${flipY ? '-100%' : '0'})`,
  };
  return (
    <div className="dwp3d-panel dwp3d-tip" style={style} role="tooltip">
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

function Card({ card }) {
  const title = card.title || `${card.k} · ${card.v}${card.s ? ` · ${card.s}` : ''}`;
  return (
    <div className="dwp3d-panel dwp3d-card" title={title}>
      <div className="k">{card.k}</div>
      <div className="v">{card.v}</div>
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
              <span className="st" style={{ color: st.color }} aria-hidden="true">{st.icon}</span>
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

const canFullscreen = () =>
  typeof document !== 'undefined' && document.fullscreenEnabled !== false
  && typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype.requestFullscreen === 'function';

/**
 * The "3D process" conversation view: a WebGL factory scene plus a glass HUD.
 * M0 drives it with the built-in demo session.
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
  const liveRef = useRef({ phase: 'idle', tps: 0, balance: null, currency: 'CNY' });
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
  const [fullscreen, setFullscreen] = useState(false);
  const [hover, setHover] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [renderWarn, setRenderWarn] = useState(null);
  const [toast, setToast] = useState(null);

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

  // Scene and demo driver lifecycle; Retry remounts by bumping mountKey.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    let scene = null;
    let demo = null;
    let cancelled = false;
    let raf2 = 0;
    setLoading(true);
    setError(null);
    setRenderWarn(null);
    setHover(null);
    setCamMode('orbit');

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
          demo: DEMO,
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
            if (on && dirtyRef.current) {
              dirtyRef.current = false;
              render();
            }
          },
          onReady: () => setLoading(false),
          onMode: (m) => {
            setCamMode(m);
            if (m === 'look') setFollow(false);
          },
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

      demo = createDemo({
        onEvents: (events) => {
          modelRef.current = reduceAll(modelRef.current, events);
          scene.setState(modelRef.current);
          schedule();
        },
        onLive: (live) => {
          liveRef.current = { ...liveRef.current, ...live };
          scene.setLive(live);
          schedule();
        },
      });
      modelRef.current = reduceAll(initialState(), demo.prefill(2));
      liveRef.current = { phase: 'idle', tps: 0, balance: demo.balance, currency: 'CNY' };
      scene.setState(modelRef.current);
      scene.setLive(liveRef.current);
      demo.start();
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
      if (demo) demo.stop();
      if (scene) scene.dispose();
      sceneRef.current = null;
      clearTimeout(pendingRef.current);
      pendingRef.current = 0;
    };
  }, [mountKey, applyQuality, schedule, showToast]);

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

  const focusStage = () => {
    try {
      if (stageRef.current) stageRef.current.focus({ preventScroll: true });
    } catch {
      /* focus is best effort */
    }
  };
  const goView = (v) => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.setCameraPreset(v);
    setView(v);
    setFollow(false);
    // Roaming presets (the balcony) walk with the keyboard right away.
    if (scene.getMode() === 'look') focusStage();
  };
  const toggleFollow = () => {
    const next = !follow;
    setFollow(next);
    if (sceneRef.current) sceneRef.current.setFollow(next);
  };
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
  const phase = live.phase && live.phase !== 'idle' ? live.phase : s.phase;
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
      k: DEMO ? t('m.balanceDemo') : t('m.balance'),
      v: balance == null ? t('m.balanceNone') : formatMoney(balance, currency),
      s: affordable ? t('m.balanceSub', { tokens: formatTokens(affordable) }) : '',
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
  const tipData = { t, s, live, lang, price, peak, m, phase, balance, currency };
  const failed = !!error && error.kind === 'webgl';
  const hud = !loading && !failed;
  const autoLabel = manual ? t('quality.autoPlain') : t('quality.autoOpt', { q: t('quality.' + quality) });

  return (
    <div ref={rootRef} className={`dwp3d-root${failed ? ' fail' : ''}`}>
      <style>{CSS}</style>
      {/* Focusable so the roaming camera can take WASD / arrow keys while the scene is focused. */}
      <div ref={stageRef} className="dwp3d-stage" tabIndex={0} role="application" aria-label={t('stage.label')} />
      {/* Clicking anywhere outside the display popover closes it. */}
      {displayOpen ? <div className="dwp3d-backdrop" onPointerDown={() => setDisplayOpen(false)} /> : null}

      {hud ? (
        <div className="dwp3d-top">
          <div className="dwp3d-panel dwp3d-title">
            <div className="dwp3d-title-row">
              <h2>{t('title')}</h2>
              {DEMO ? <span className="dwp3d-chip demo">{t('badge.demo')}</span> : null}
              {s.model ? <span className="dwp3d-chip">{`${s.model}${s.effort ? ` · ${s.effort}` : ''}`}</span> : null}
              <span className="dwp3d-chip">
                <i className="dwp3d-dot" style={{ color: PHASE_COLOR[phase] || PHASE_COLOR.idle }} aria-hidden="true" />
                {`${t('phase.' + phase)}${tpsText}`}
              </span>
            </div>
            {DEMO ? <p className="dwp3d-note">{t('badge.demoHint')}</p> : null}
            {renderWarn ? <p className="dwp3d-note dwp3d-warn" role="alert">{t('error.shader', { msg: renderWarn })}</p> : null}
          </div>
          <div className="dwp3d-right">
          <div className="dwp3d-panel dwp3d-tools">
            <div className="dwp3d-seg" role="group" aria-label={t('ctl.views')}>
              {VIEWS.map((v) => {
                const on = !follow && view === v;
                return (
                  <button key={v} type="button" className={`dwp3d-btn${on ? ' on' : ''}`} aria-pressed={on} onClick={() => goView(v)}>
                    {t('view.' + v)}
                  </button>
                );
              })}
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
              <button type="button" className={`dwp3d-btn${labelsOn ? ' on' : ''}`} title={t('ctl.labelsHint')} aria-pressed={labelsOn} onClick={() => setLabelsOn((v) => !v)}>
                {t('ctl.labels')}
              </button>
              <button type="button" className={`dwp3d-btn${panelsOn ? ' on' : ''}`} title={t('ctl.panelsHint')} aria-pressed={panelsOn} onClick={() => setPanelsOn((v) => !v)}>
                {t('ctl.panels')}
              </button>
              <button
                type="button"
                className={`dwp3d-btn${displayOpen ? ' on' : ''}`}
                title={t('ctl.displayHint')}
                aria-expanded={displayOpen}
                aria-haspopup="dialog"
                onClick={() => setDisplayOpen((v) => !v)}
              >
                {t('ctl.display')}
              </button>
              {canFullscreen() ? (
                <button type="button" className="dwp3d-btn" aria-pressed={fullscreen} onClick={toggleFullscreen}>
                  {fullscreen ? t('ctl.exitFullscreen') : t('ctl.fullscreen')}
                </button>
              ) : null}
            </div>
          </div>
          {displayOpen ? (
            <div className="dwp3d-panel dwp3d-pop" role="dialog" aria-label={t('ctl.display')}>
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
            </div>
          ) : null}
          {perfOn ? <PerfPanel t={t} perf={perf} /> : null}
          </div>
        </div>
      ) : null}

      <div className="dwp3d-toast-wrap" role="status" aria-live="polite">
        {toast ? <div className="dwp3d-panel dwp3d-toast">{toast}</div> : null}
      </div>

      {hud && panelsOn ? (
        <div className="dwp3d-bottom">
          <div className="dwp3d-mid">
            <Ticker t={t} calls={recent} />
            <Legend
              t={t}
              hintOn={camMode === 'look' ? lookHintOn : hintOn}
              hintKey={camMode === 'look' ? 'hint.look' : 'hint.controls'}
              onDismiss={dismissHint}
            />
          </div>
          <div className="dwp3d-cards">
            {cards.map((c) => (
              <Card key={c.id} card={c} />
            ))}
          </div>
        </div>
      ) : null}

      {hud && hover ? <Tooltip hover={hover} data={tipData} rootRef={rootRef} /> : null}

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

      {error && error.kind === 'lost' ? (
        <div className="dwp3d-center dim" role="alert">
          <div className="dwp3d-panel dwp3d-msg">{t('error.lost')}</div>
        </div>
      ) : null}
    </div>
  );
}
