// Pure reducer from DSH session events ({ type, seq, time, data }) to the factory state.
// Shared by the client demo driver and (later) the host session projection.
import { priceFor, isPeak, normalizeUsage, usageCost, cacheSavings } from './pricing.js';
import { stationKindOf, describeToolCall, estimateFileChange, PRODUCTIVE_KINDS } from './stations.js';

export const MAX_CALLS = 60;
export const MAX_TURNS = 40;
export const MAX_PATHS = 200;

export function initialState() {
  return {
    v: 0,
    provider: '',
    model: '',
    effort: '',
    contextWindow: 0,
    contextTokens: 0,
    totals: {
      miss: 0, hit: 0, write: 0, output: 0, reasoning: 0,
      requests: 0, cost: 0, costPeak: 0, costOffPeak: 0, savings: 0,
    },
    tools: { calls: 0, errors: 0, running: 0, byKind: {} },
    files: { count: 0, added: 0, removed: 0, paths: [] },
    phase: 'idle',
    turnCount: 0,
    calls: [],
    turns: [],
    firstAt: 0,
    lastAt: 0,
  };
}

function eventTime(event) {
  const t = event && event.time;
  if (typeof t === 'number' && Number.isFinite(t)) return t;
  if (typeof t === 'string') {
    const ms = Date.parse(t);
    if (Number.isFinite(ms)) return ms;
  }
  return Date.now();
}

function replaceLast(list, fn) {
  if (!list.length) return list;
  const copy = list.slice();
  copy[copy.length - 1] = fn(copy[copy.length - 1]);
  return copy;
}

function capped(list, max) {
  return list.length > max ? list.slice(list.length - max) : list;
}

function newTurn(no, index, time) {
  return {
    no, index, status: 'running', startedAt: time, endedAt: 0,
    miss: 0, hit: 0, write: 0, output: 0, reasoning: 0, cost: 0,
    requests: 0, calls: 0, errors: 0, files: [], added: 0, removed: 0,
  };
}

function ensureTurn(state, time, index) {
  const last = state.turns[state.turns.length - 1];
  if (last && last.status === 'running') return state;
  const no = state.turnCount + 1;
  return {
    ...state,
    turnCount: no,
    turns: capped([...state.turns, newTurn(no, index ?? no, time)], MAX_TURNS),
  };
}

function addFile(files, change) {
  const i = files.findIndex((f) => f.path === change.path);
  if (i < 0) return [...files, { path: change.path, added: change.added, removed: change.removed }];
  const copy = files.slice();
  copy[i] = { ...copy[i], added: copy[i].added + change.added, removed: copy[i].removed + change.removed };
  return copy;
}

const FAIL_KINDS = new Set(['aborted', 'blocked', 'error', 'max-tokens', 'interrupted']);

export function reduce(state, event) {
  if (!event || typeof event.type !== 'string') return state;
  const d = event.data && typeof event.data === 'object' ? event.data : {};
  const time = eventTime(event);
  let s = { ...state, v: state.v + 1, lastAt: time, firstAt: state.firstAt || time };

  switch (event.type) {
    case 'request/header': {
      const c = (d.header && d.header.config) || {};
      if (typeof c.model === 'string') s.model = c.model;
      if (typeof c.provider === 'string') s.provider = c.provider;
      if (typeof c.reasoningEffort === 'string') s.effort = c.reasoningEffort;
      return s;
    }
    case 'request/context': {
      if (typeof d.model === 'string') s.model = d.model;
      if (typeof d.provider === 'string') s.provider = d.provider;
      if (typeof d.contextWindow === 'number' && d.contextWindow > 0) s.contextWindow = d.contextWindow;
      return s;
    }
    case 'turn/start': {
      const last = s.turns[s.turns.length - 1];
      if (last && last.status === 'running') {
        s.turns = replaceLast(s.turns, (t) => ({ ...t, status: 'ok', endedAt: time }));
      }
      const no = s.turnCount + 1;
      s.turnCount = no;
      s.turns = capped([...s.turns, newTurn(no, typeof d.turn === 'number' ? d.turn : no, time)], MAX_TURNS);
      s.phase = 'thinking';
      return s;
    }
    case 'step/start':
      s = ensureTurn(s, time, d.turn);
      s.phase = 'thinking';
      return s;
    case 'assistant/message': {
      s = ensureTurn(s, time, d.turn);
      const u = normalizeUsage(d.usage);
      s.phase = 'idle';
      if (!u) return s;
      const price = priceFor(s.provider, s.model);
      const peak = isPeak(time);
      const cost = usageCost(u, price, peak);
      const t = s.totals;
      s.totals = {
        miss: t.miss + u.miss,
        hit: t.hit + u.hit,
        write: t.write + u.write,
        output: t.output + u.output,
        reasoning: t.reasoning + u.reasoning,
        requests: t.requests + 1,
        cost: t.cost + cost,
        costPeak: t.costPeak + (peak ? cost : 0),
        costOffPeak: t.costOffPeak + (peak ? 0 : cost),
        savings: t.savings + cacheSavings(u, price, peak),
      };
      s.contextTokens = u.miss + u.hit + u.write + u.output;
      s.turns = replaceLast(s.turns, (tr) => ({
        ...tr,
        miss: tr.miss + u.miss,
        hit: tr.hit + u.hit,
        write: tr.write + u.write,
        output: tr.output + u.output,
        reasoning: tr.reasoning + u.reasoning,
        cost: tr.cost + cost,
        requests: tr.requests + 1,
      }));
      return s;
    }
    case 'tool/call': {
      s = ensureTurn(s, time, d.turn);
      const id = String(d.callId ?? d.id ?? `call-${s.v}`);
      if (s.calls.some((c) => c.id === id)) return s;
      const name = String(d.name || 'tool');
      const kind = stationKindOf(name);
      const change = PRODUCTIVE_KINDS.has(kind) ? estimateFileChange(name, d.arguments) : null;
      const call = {
        id, name, kind,
        label: describeToolCall(name, d.arguments),
        turn: s.turns[s.turns.length - 1].no,
        startedAt: time,
        endedAt: 0,
        status: 'running',
        change,
      };
      s.calls = capped([...s.calls, call], MAX_CALLS);
      s.tools = {
        ...s.tools,
        calls: s.tools.calls + 1,
        running: s.tools.running + 1,
        byKind: { ...s.tools.byKind, [kind]: (s.tools.byKind[kind] || 0) + 1 },
      };
      s.turns = replaceLast(s.turns, (tr) => ({ ...tr, calls: tr.calls + 1 }));
      s.phase = 'tool';
      return s;
    }
    case 'tool/result': {
      const msg = d.message && typeof d.message === 'object' ? d.message : {};
      const id = String(msg.toolCallId ?? d.callId ?? '');
      const i = s.calls.findIndex((c) => c.id === id);
      if (i < 0 || s.calls[i].status !== 'running') return s;
      const failed = Boolean(d.error) || msg.isError === true;
      const call = { ...s.calls[i], status: failed ? 'error' : 'ok', endedAt: time };
      s.calls = s.calls.slice();
      s.calls[i] = call;
      const running = Math.max(0, s.tools.running - 1);
      s.tools = { ...s.tools, running, errors: s.tools.errors + (failed ? 1 : 0) };
      const change = !failed && call.change;
      if (change) {
        const known = s.files.paths.includes(change.path);
        s.files = {
          count: s.files.count + (known ? 0 : 1),
          added: s.files.added + change.added,
          removed: s.files.removed + change.removed,
          paths: known ? s.files.paths : capped([...s.files.paths, change.path], MAX_PATHS),
        };
      }
      s.turns = s.turns.map((tr) => {
        if (tr.no !== call.turn) return tr;
        const next = { ...tr, errors: tr.errors + (failed ? 1 : 0) };
        if (change) {
          next.files = addFile(tr.files, change);
          next.added = tr.added + change.added;
          next.removed = tr.removed + change.removed;
        }
        return next;
      });
      if (running === 0) s.phase = 'thinking';
      return s;
    }
    case 'turn/end': {
      const kind = d.reason && typeof d.reason === 'object' ? d.reason.kind : undefined;
      const status = FAIL_KINDS.has(kind) ? 'rework' : 'ok';
      const last = s.turns[s.turns.length - 1];
      if (last && last.status === 'running') {
        s.turns = replaceLast(s.turns, (tr) => ({ ...tr, status, endedAt: time }));
        if (s.calls.some((c) => c.status === 'running' && c.turn === last.no)) {
          let cancelled = 0;
          s.calls = s.calls.map((c) => {
            if (c.status !== 'running' || c.turn !== last.no) return c;
            cancelled++;
            return { ...c, status: 'error', endedAt: time };
          });
          s.tools = {
            ...s.tools,
            running: Math.max(0, s.tools.running - cancelled),
            errors: s.tools.errors + cancelled,
          };
        }
      }
      s.phase = 'idle';
      return s;
    }
    default:
      return state;
  }
}

export function reduceAll(state, events) {
  let s = state;
  for (const e of events) s = reduce(s, e);
  return s;
}

/** Derived metrics for the HUD and report. */
export function metrics(s) {
  const t = s.totals;
  const prompt = t.miss + t.hit + t.write;
  const lines = s.files.added + s.files.removed;
  const tokens = prompt + t.output;
  return {
    prompt,
    tokens,
    hitRate: prompt > 0 ? t.hit / prompt : 0,
    contextRatio: s.contextWindow > 0 ? Math.min(1, s.contextTokens / s.contextWindow) : 0,
    // Only finished calls count; running calls are neither successes nor failures yet.
    toolSuccess: s.tools.calls - s.tools.running > 0 ? (s.tools.calls - s.tools.running - s.tools.errors) / (s.tools.calls - s.tools.running) : 1,
    linesPerKTokens: t.output > 0 ? (lines / t.output) * 1000 : 0,
    costPerFile: s.files.count > 0 ? t.cost / s.files.count : 0,
    passRate: (() => {
      const done = s.turns.filter((x) => x.status !== 'running');
      return done.length ? done.filter((x) => x.status === 'ok').length / done.length : 1;
    })(),
  };
}
