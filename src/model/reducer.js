// Pure reducer from DSH session events ({ type, seq, time, data }) to the factory state.
// The host session projection (src/host/projection.js) folds the real session log with it and
// the client demo driver feeds it a scripted session. reduce() never reads the clock and returns
// the same state object for every event it ignores or that changes nothing, so an unchanged
// projection is not published again. The state is plain JSON.
import { priceFor, isPeak, normalizeUsage, usageCost, cacheSavings } from './pricing.js';
import { stationKindOf, describeToolCall, estimateFileChange, parseArgs, PRODUCTIVE_KINDS } from './stations.js';

export const MAX_CALLS = 60;
export const MAX_TURNS = 40;
export const MAX_PATHS = 200;
export const MAX_TURN_FILES = 40;
export const MAX_AGENTS = 24;
export const MAX_WORKFLOWS = 8;

// A decode-rate sample needs a stream at least this long with at least this many output tokens.
const MIN_DECODE_MS = 250;
const MIN_DECODE_TOKENS = 16;
const MAX_RATE = 5000;

export function initialState() {
  return {
    provider: '',
    model: '',
    effort: '',
    contextWindow: 0,
    contextTokens: 0,
    totals: {
      miss: 0, hit: 0, write: 0, output: 0, reasoning: 0,
      requests: 0, cost: 0, costPeak: 0, costOffPeak: 0, savings: 0, unpriced: 0,
    },
    // The newest usage sample. A later sample for the same (turn, step) replaces it, as in
    // DSH's own token meter, unless an llm/retry-started event cleared it in between.
    sample: null,
    // Decode speed: tokens/s of the newest measured step, plus the running sums for an average.
    speed: { last: 0, decodeTokens: 0, decodeMs: 0 },
    tools: { calls: 0, errors: 0, running: 0, byKind: {} },
    files: { count: 0, added: 0, removed: 0, paths: [] },
    phase: 'idle',
    turnCount: 0,
    calls: [],
    turns: [],
    agents: [],
    workflows: [],
    firstAt: 0,
    lastAt: 0,
  };
}

// ── Small helpers ───────────────────────────────────────────────

const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const num = (v) => (isNum(v) && v > 0 ? v : 0);
const text = (v, max = 120) => (typeof v === 'string' ? v.slice(0, max) : '');
const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : null);

function timeOf(v) {
  if (isNum(v)) return v;
  if (typeof v === 'string') {
    const ms = Date.parse(v);
    if (Number.isFinite(ms)) return ms;
  }
  return NaN;
}

function eventTime(event, state) {
  const t = timeOf(event.time);
  return Number.isFinite(t) ? t : state.lastAt;
}

/** Record activity on a state copy. */
function stamp(s, time) {
  if (time > s.lastAt) s.lastAt = time;
  if (!s.firstAt && time) s.firstAt = time;
}

function replaceLast(list, fn) {
  if (!list.length) return list;
  const copy = list.slice();
  copy[copy.length - 1] = fn(copy[copy.length - 1]);
  return copy;
}

function replaceAt(list, i, value) {
  const copy = list.slice();
  copy[i] = value;
  return copy;
}

function capped(list, max) {
  return list.length > max ? list.slice(list.length - max) : list;
}

/** Append and cap, dropping the oldest finished entries before any running one. */
function cappedKeepRunning(list, item, max) {
  const next = [...list, item];
  while (next.length > max) {
    const i = next.findIndex((x) => x.status !== 'running');
    next.splice(i >= 0 ? i : 0, 1);
  }
  return next;
}

function newTurn(no, index, time) {
  return {
    no, index, status: 'running', startedAt: time, endedAt: 0,
    miss: 0, hit: 0, write: 0, output: 0, reasoning: 0, cost: 0,
    requests: 0, calls: 0, errors: 0, files: [], fileCount: 0, added: 0, removed: 0,
  };
}

const lastTurn = (s) => s.turns[s.turns.length - 1] || null;
const runningTurn = (s) => {
  const t = lastTurn(s);
  return t && t.status === 'running' ? t : null;
};

/** Close the running turn of the copy `s` and cancel the calls it left running. */
function endTurn(s, status, time) {
  const cur = runningTurn(s);
  if (!cur) return;
  s.turns = replaceLast(s.turns, (t) => ({ ...t, status, endedAt: time }));
  let cancelled = 0;
  if (s.calls.some((c) => c.status === 'running' && c.turn === cur.no)) {
    s.calls = s.calls.map((c) => {
      if (c.status !== 'running' || c.turn !== cur.no) return c;
      cancelled += 1;
      return { ...c, status: 'error', endedAt: time };
    });
  }
  if (cancelled) {
    s.tools = { ...s.tools, running: Math.max(0, s.tools.running - cancelled), errors: s.tools.errors + cancelled };
  }
}

/** Make sure the copy `s` has a running turn. */
function openTurn(s, time, index) {
  if (runningTurn(s)) return;
  const no = s.turnCount + 1;
  s.turnCount = no;
  s.turns = capped([...s.turns, newTurn(no, isNum(index) ? index : no, time)], MAX_TURNS);
}

function addTurnFile(turn, change) {
  const i = turn.files.findIndex((f) => f.path === change.path);
  const next = { ...turn, added: turn.added + change.added, removed: turn.removed + change.removed };
  if (i >= 0) {
    const f = turn.files[i];
    next.files = replaceAt(turn.files, i, { path: f.path, added: f.added + change.added, removed: f.removed + change.removed });
  } else {
    // Beyond the cap a path is counted but not listed (a re-edit then counts once more).
    next.fileCount = turn.fileCount + 1;
    if (turn.files.length < MAX_TURN_FILES) next.files = [...turn.files, { path: change.path, added: change.added, removed: change.removed }];
  }
  return next;
}

// ── Usage and stream timing ─────────────────────────────────────

function lastUsageChunk(stream) {
  if (!Array.isArray(stream)) return null;
  for (let i = stream.length - 1; i >= 0; i--) {
    const r = stream[i];
    if (r && r.type === 'chunk' && r.chunk && r.chunk.type === 'usage' && r.chunk.usage) return r.chunk.usage;
  }
  return null;
}

const TOKEN_CHUNKS = new Set(['text-delta', 'reasoning-delta', 'tool-call-delta']);

/**
 * First and last token time of a recorded assistant stream (DSH AssistantStreamRecord[]):
 * runs of text/reasoning/tool-call fragments carry time0 plus per-fragment gaps, raw chunks
 * carry their own time.
 */
export function streamTiming(stream) {
  if (!Array.isArray(stream)) return null;
  let first = Infinity;
  let last = -Infinity;
  const mark = (t) => {
    if (!isNum(t)) return;
    if (t < first) first = t;
    if (t > last) last = t;
  };
  for (const r of stream) {
    if (!r || typeof r !== 'object') continue;
    if (r.type === 'text-chunks' || r.type === 'reasoning-chunks' || r.type === 'tool-call-chunks') {
      const parts = Array.isArray(r.texts) ? r.texts : Array.isArray(r.args) ? r.args : [];
      const dt = Array.isArray(r.dt) ? r.dt : [];
      let t = r.time0;
      if (!isNum(t)) continue;
      if (r.type === 'tool-call-chunks' && r.name) mark(t);
      for (let i = 0; i < parts.length; i++) {
        if (i > 0) t += isNum(dt[i - 1]) ? dt[i - 1] : 0;
        if (typeof parts[i] === 'string' && parts[i].length) mark(t);
      }
    } else if (r.type === 'chunk' && r.chunk && TOKEN_CHUNKS.has(r.chunk.type)) {
      mark(r.time);
    }
  }
  return last > first ? { first, last } : null;
}

const NO_SAMPLE = { miss: 0, hit: 0, write: 0, output: 0, reasoning: 0, cost: 0, peak: false, savings: 0, priced: true };

function sameSample(a, b) {
  return a.miss === b.miss && a.hit === b.hit && a.write === b.write && a.output === b.output
    && a.reasoning === b.reasoning && a.cost === b.cost && a.peak === b.peak && a.priced === b.priced;
}

/**
 * Account one usage sample on the copy `s`. Returns false when the sample repeats the stored
 * one exactly (nothing to change).
 */
function applyUsage(s, u, d, time) {
  const src = obj(d.message) && obj(d.message.source);
  const provider = src && typeof src.provider === 'string' && src.provider ? src.provider : s.provider;
  const model = src && typeof src.model === 'string' && src.model ? src.model : s.model;
  const price = priceFor(provider, model);
  const peak = isPeak(time);
  const turnKey = isNum(d.turn) ? d.turn : -1;
  const stepKey = isNum(d.step) ? d.step : -1;
  const prev = s.sample && turnKey >= 0 && s.sample.turn === turnKey && s.sample.step === stepKey ? s.sample : null;
  const cur = runningTurn(s) || lastTurn(s);
  const sample = {
    turn: turnKey,
    step: stepKey,
    no: prev ? prev.no : cur ? cur.no : 0,
    miss: u.miss,
    hit: u.hit,
    write: u.write,
    output: u.output,
    reasoning: u.reasoning,
    cost: usageCost(u, price, peak),
    peak,
    savings: cacheSavings(u, price, peak),
    priced: !!price,
  };
  if (prev && sameSample(prev, sample)) return false;
  const old = prev || NO_SAMPLE;
  const fresh = prev ? 0 : 1;
  const t = s.totals;
  s.totals = {
    miss: t.miss - old.miss + sample.miss,
    hit: t.hit - old.hit + sample.hit,
    write: t.write - old.write + sample.write,
    output: t.output - old.output + sample.output,
    reasoning: t.reasoning - old.reasoning + sample.reasoning,
    requests: t.requests + fresh,
    cost: Math.max(0, t.cost - old.cost + sample.cost),
    costPeak: Math.max(0, t.costPeak - (old.peak ? old.cost : 0) + (peak ? sample.cost : 0)),
    costOffPeak: Math.max(0, t.costOffPeak - (old.peak ? 0 : old.cost) + (peak ? 0 : sample.cost)),
    savings: Math.max(0, t.savings - old.savings + sample.savings),
    unpriced: t.unpriced - (prev && !prev.priced ? 1 : 0) + (price ? 0 : 1),
  };
  s.sample = sample;
  s.contextTokens = u.miss + u.hit + u.write + u.output;
  if (sample.no) {
    s.turns = s.turns.map((tr) => (tr.no !== sample.no ? tr : {
      ...tr,
      miss: tr.miss - old.miss + sample.miss,
      hit: tr.hit - old.hit + sample.hit,
      write: tr.write - old.write + sample.write,
      output: tr.output - old.output + sample.output,
      reasoning: tr.reasoning - old.reasoning + sample.reasoning,
      cost: Math.max(0, tr.cost - old.cost + sample.cost),
      requests: tr.requests + fresh,
    }));
  }
  return true;
}

function applySpeed(s, u, stream) {
  if (u.output < MIN_DECODE_TOKENS) return;
  const timing = streamTiming(stream);
  if (!timing) return;
  const ms = timing.last - timing.first;
  if (ms < MIN_DECODE_MS) return;
  s.speed = {
    last: Math.min(MAX_RATE, u.output / (ms / 1000)),
    decodeTokens: s.speed.decodeTokens + u.output,
    decodeMs: s.speed.decodeMs + ms,
  };
}

// ── Subagents and workflows ─────────────────────────────────────

/** Agent status from a subagent stop reason or a workflow outcome. */
function finishedStatus(reason) {
  if (reason === undefined || reason === null || reason === 'completed') return 'done';
  if (reason === 'aborted' || reason === 'cancelled') return 'stopped';
  return 'error';
}

function newAgent(fields) {
  return {
    id: '', name: '', label: '', kind: 'subagent', mode: '', runId: '', seq: -1, phase: '',
    status: 'running', startedAt: 0, endedAt: 0, turn: 0,
    ...fields,
  };
}

function updateAgent(state, i, patch) {
  const a = state.agents[i];
  let changed = false;
  for (const k of Object.keys(patch)) if (a[k] !== patch[k]) changed = true;
  if (!changed) return state;
  return { ...state, agents: replaceAt(state.agents, i, { ...a, ...patch }) };
}

function addAgent(state, agent, time) {
  const s = { ...state };
  const cur = runningTurn(s) || lastTurn(s);
  s.agents = cappedKeepRunning(s.agents, newAgent({ turn: cur ? cur.no : 0, startedAt: time, ...agent }), MAX_AGENTS);
  stamp(s, time);
  return s;
}

function settleAgent(state, id, status, time) {
  const i = state.agents.findIndex((a) => a.id === id);
  if (i < 0 || state.agents[i].status !== 'running') return state;
  const s = updateAgent(state, i, { status, endedAt: time });
  if (s !== state) stamp(s, time);
  return s;
}

/**
 * send_message to a settled continuable child starts it again. The tool names agents by their
 * path from the root ("lead" > "reviewer/checker"), the catalog by the last segment.
 */
function reviveAgent(s, target, time) {
  if (typeof target !== 'string' || !target) return;
  const leaf = target.slice(target.lastIndexOf('/') + 1);
  const i = s.agents.findIndex((a) => a.kind === 'subagent' && a.status !== 'running'
    && ((a.name && (a.name === target || a.name === leaf)) || a.label === target));
  if (i < 0) return;
  s.agents = replaceAt(s.agents, i, { ...s.agents[i], status: 'running', endedAt: 0, startedAt: time });
}

function updateWorkflow(state, runId, fn) {
  const i = state.workflows.findIndex((w) => w.runId === runId);
  if (i < 0) return state;
  const w = state.workflows[i];
  const next = fn(w);
  return next === w ? state : { ...state, workflows: replaceAt(state.workflows, i, next) };
}

// ── Reducer ─────────────────────────────────────────────────────

const FAIL_KINDS = new Set(['aborted', 'blocked', 'error', 'max-tokens', 'interrupted']);

function withConfig(state, { provider, model, effort, contextWindow }) {
  const next = {};
  if (typeof provider === 'string' && provider && provider.slice(0, 80) !== state.provider) next.provider = provider.slice(0, 80);
  if (typeof model === 'string' && model && model.slice(0, 120) !== state.model) next.model = model.slice(0, 120);
  if (typeof effort === 'string' && effort.slice(0, 40) !== state.effort) next.effort = effort.slice(0, 40);
  if (isNum(contextWindow) && contextWindow > 0 && contextWindow !== state.contextWindow) next.contextWindow = contextWindow;
  return Object.keys(next).length ? { ...state, ...next } : state;
}

export function reduce(state, event) {
  if (!event || typeof event.type !== 'string') return state;
  const d = obj(event.data) || {};
  const time = eventTime(event, state);

  switch (event.type) {
    case 'request/header': {
      const c = obj(obj(d.header) && d.header.config);
      if (!c) return state;
      return withConfig(state, {
        provider: c.provider,
        model: c.model,
        effort: typeof c.reasoningEffort === 'string' ? c.reasoningEffort : '',
      });
    }
    case 'request/context':
      return withConfig(state, { provider: d.provider, model: d.model, contextWindow: d.contextWindow });

    case 'turn/start': {
      const s = { ...state };
      endTurn(s, 'ok', time);
      const no = s.turnCount + 1;
      s.turnCount = no;
      s.turns = capped([...s.turns, newTurn(no, isNum(d.turn) ? d.turn : no, time)], MAX_TURNS);
      s.phase = 'thinking';
      stamp(s, time);
      return s;
    }
    case 'step/start': {
      if (runningTurn(state) && state.phase === 'thinking') return state;
      const s = { ...state };
      openTurn(s, time, d.turn);
      s.phase = 'thinking';
      stamp(s, time);
      return s;
    }
    case 'llm/retry-started': {
      // The failed attempt was billed too: let the retry add its own sample.
      const sm = state.sample;
      if (sm && sm.turn === d.turn && sm.step === d.step) return { ...state, sample: null };
      return state;
    }
    case 'assistant/attempt':
    case 'assistant/message': {
      const message = event.type === 'assistant/message';
      const u = normalizeUsage((message && d.usage) || lastUsageChunk(d.stream));
      let s = state;
      if (message && (!runningTurn(state) || state.phase !== 'idle')) {
        s = { ...state };
        openTurn(s, time, d.turn);
        s.phase = 'idle';
      }
      if (u) {
        const draft = s === state ? { ...state } : s;
        if (applyUsage(draft, u, d, time)) {
          if (message) applySpeed(draft, u, d.stream);
          s = draft;
        }
      }
      if (s !== state) stamp(s, time);
      return s;
    }

    case 'tool/call': {
      const raw = d.callId ?? d.id;
      const id = (typeof raw === 'string' || isNum(raw) ? String(raw) : '').slice(0, 200)
        || `call-${isNum(event.seq) ? event.seq : state.tools.calls + 1}`;
      if (state.calls.some((c) => c.id === id)) return state;
      const s = { ...state };
      openTurn(s, time, d.turn);
      const name = text(d.name, 80) || 'tool';
      const kind = stationKindOf(name);
      const args = parseArgs(d.arguments);
      const est = PRODUCTIVE_KINDS.has(kind) ? estimateFileChange(name, args) : null;
      const change = est ? { path: text(est.path, 400), added: num(est.added), removed: num(est.removed) } : null;
      const call = {
        id,
        name,
        kind,
        label: describeToolCall(args),
        turn: lastTurn(s).no,
        startedAt: time,
        endedAt: 0,
        status: 'running',
        change: change && change.path ? change : null,
      };
      s.calls = cappedKeepRunning(s.calls, call, MAX_CALLS);
      s.tools = {
        ...s.tools,
        calls: s.tools.calls + 1,
        running: s.tools.running + 1,
        byKind: { ...s.tools.byKind, [kind]: (s.tools.byKind[kind] || 0) + 1 },
      };
      s.turns = replaceLast(s.turns, (tr) => ({ ...tr, calls: tr.calls + 1 }));
      s.phase = 'tool';
      if (name === 'send_message') reviveAgent(s, args.agent, time);
      stamp(s, time);
      return s;
    }
    case 'tool/result': {
      const msg = obj(d.message) || {};
      const id = String(msg.toolCallId ?? d.callId ?? '');
      const i = state.calls.findIndex((c) => c.id === id);
      if (i < 0 || state.calls[i].status !== 'running') return state;
      const s = { ...state };
      const failed = Boolean(d.error) || msg.isError === true;
      const call = { ...s.calls[i], status: failed ? 'error' : 'ok', endedAt: time };
      s.calls = replaceAt(s.calls, i, call);
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
      if (failed || change) {
        s.turns = s.turns.map((tr) => {
          if (tr.no !== call.turn) return tr;
          const next = failed ? { ...tr, errors: tr.errors + 1 } : tr;
          return change ? addTurnFile(next, change) : next;
        });
      }
      if (running === 0 && s.phase === 'tool') s.phase = 'thinking';
      stamp(s, time);
      return s;
    }
    case 'turn/end': {
      const kind = obj(d.reason) ? d.reason.kind : undefined;
      if (!runningTurn(state) && state.phase === 'idle') return state;
      const s = { ...state };
      endTurn(s, FAIL_KINDS.has(kind) ? 'rework' : 'ok', time);
      s.phase = 'idle';
      stamp(s, time);
      return s;
    }

    case 'subagent/catalog': {
      const id = text(d.childId, 200);
      if (!id) return state;
      const name = text(d.name, 80);
      const label = text(d.label, 80);
      const mode = text(d.mode, 20);
      const i = state.agents.findIndex((a) => a.id === id);
      if (i >= 0) {
        const a = state.agents[i];
        return updateAgent(state, i, { name: name || a.name, label: label || a.label, mode: mode || a.mode });
      }
      const created = timeOf(d.childCreatedAt);
      return addAgent(state, { id, name, label: label || name || 'subagent', mode, startedAt: Number.isFinite(created) ? created : time }, time);
    }
    case 'user/message': {
      // A finished subagent reports back with a settlement notice in the parent's log.
      const src = obj(d.source);
      if (!src || src.kind !== 'subagent-settled') return state;
      return settleAgent(state, text(src.senderSessionId, 200), finishedStatus(src.stopReason), time);
    }
    case 'tool-workflow/run-start': {
      const runId = text(d.runId, 120);
      if (!runId || state.workflows.some((w) => w.runId === runId)) return state;
      const s = { ...state };
      const wf = { runId, name: text(d.name, 80) || 'workflow', status: 'running', startedAt: time, endedAt: 0, agents: 0, done: 0, failed: 0, phase: '' };
      s.workflows = cappedKeepRunning(s.workflows, wf, MAX_WORKFLOWS);
      stamp(s, time);
      return s;
    }
    case 'tool-workflow/agent-start': {
      const runId = text(d.runId, 120);
      if (!runId) return state;
      const seq = isNum(d.seq) ? d.seq : -1;
      const id = text(d.childId, 200) || `${runId}#${seq}`;
      const label = text(d.label, 80) || 'agent';
      const phase = text(d.phase, 60);
      const i = state.agents.findIndex((a) => a.id === id);
      let s = i >= 0
        ? updateAgent(state, i, { kind: 'workflow', runId, seq, phase, label })
        : addAgent(state, { id, label, kind: 'workflow', runId, seq, phase }, time);
      if (i < 0) s = updateWorkflow(s, runId, (w) => ({ ...w, agents: w.agents + 1, phase: phase || w.phase }));
      else if (phase) s = updateWorkflow(s, runId, (w) => (w.phase === phase ? w : { ...w, phase }));
      return s;
    }
    case 'tool-workflow/agent-end': {
      const runId = text(d.runId, 120);
      const seq = isNum(d.seq) ? d.seq : -1;
      const i = state.agents.findIndex((a) => a.runId === runId && a.seq === seq);
      if (i < 0 || state.agents[i].status !== 'running') return state;
      const status = finishedStatus(d.outcome === 'failed' ? 'error' : d.outcome);
      let s = updateAgent(state, i, { status, endedAt: time });
      s = updateWorkflow(s, runId, (w) => ({ ...w, done: w.done + (status === 'done' ? 1 : 0), failed: w.failed + (status === 'error' ? 1 : 0) }));
      if (s !== state) stamp(s, time);
      return s;
    }
    case 'tool-workflow/run-end': {
      const runId = text(d.runId, 120);
      let s = updateWorkflow(state, runId, (w) => (w.status !== 'running' ? w : { ...w, status: finishedStatus(d.stopReason), endedAt: time }));
      if (s.agents.some((a) => a.runId === runId && a.status === 'running')) {
        if (s === state) s = { ...state };
        s.agents = s.agents.map((a) => (a.runId === runId && a.status === 'running' ? { ...a, status: 'stopped', endedAt: time } : a));
      }
      if (s !== state) stamp(s, time);
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
  const done = s.turns.filter((x) => x.status !== 'running');
  const finished = s.tools.calls - s.tools.running;
  return {
    prompt,
    tokens,
    hitRate: prompt > 0 ? t.hit / prompt : 0,
    contextRatio: s.contextWindow > 0 ? Math.min(1, s.contextTokens / s.contextWindow) : 0,
    // Only finished calls count; running calls are neither successes nor failures yet.
    toolSuccess: finished > 0 ? (finished - s.tools.errors) / finished : 1,
    linesPerKTokens: t.output > 0 ? (lines / t.output) * 1000 : 0,
    costPerFile: s.files.count > 0 ? t.cost / s.files.count : 0,
    passRate: done.length ? done.filter((x) => x.status === 'ok').length / done.length : 1,
    // Average decode rate over every measured step (tokens/s).
    decodeRate: s.speed && s.speed.decodeMs > 0 ? s.speed.decodeTokens / (s.speed.decodeMs / 1000) : 0,
  };
}
