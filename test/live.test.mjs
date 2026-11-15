// Real-session data path: the reducer over DSH-shaped event logs, the host projection and its
// schemas, the balance route and the host entry.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  initialState, reduce, reduceAll, metrics, streamTiming,
  MAX_CALLS, MAX_TURN_FILES, MAX_AGENTS,
} from '../src/model/reducer.js';
import { priceFor, usageCost, normalizeUsage } from '../src/model/pricing.js';
import { toView, VIEW_CALLS, VIEW_TURNS, VIEW_TURN_FILES } from '../src/model/view.js';
import { createProjection, stateSchema, viewSchema, PROJECTION_KEY } from '../src/host/projection.js';
import {
  createBalanceHandler, parseBalanceRequest, fromAccount, fromUserBalance, BALANCE_PATH,
} from '../src/host/balance.js';
import * as host from '../src/host/index.js';
import { createDemo } from '../src/model/demo.js';

// Sunday 2026-11-15 20:00 Beijing: off-peak.
const T0 = Date.UTC(2026, 10, 15, 12, 0, 0);

function log() {
  let seq = 0;
  return (type, ms, data) => ({ type, seq: ++seq, time: T0 + ms, data });
}

/** A recorded assistant stream: reasoning then text runs, then the raw usage and finish chunks. */
function stream(t0, ms, usage) {
  const step = ms / 6;
  return [
    { type: 'reasoning-chunks', time0: t0, index: 0, dt: [step, step], texts: ['Let', ' me', ' look'] },
    { type: 'text-chunks', time0: t0 + 3 * step, index: 1, dt: [step, step, step], texts: ['Done', '.', ' The', ' end'] },
    { type: 'chunk', time: t0 + ms + 5, chunk: { type: 'usage', usage } },
    { type: 'chunk', time: t0 + ms + 6, chunk: { type: 'finish', reason: 'stop' } },
  ];
}

const SOURCE = { kind: 'model', provider: 'deepseek', model: 'deepseek-v4-pro' };
const assistant = (turn, step) => ({ turn, step, message: { role: 'assistant', content: [], source: SOURCE } });

function realSession() {
  const e = log();
  const u0 = { inputTokens: 1000, outputTokens: 10 };
  const u1 = { inputTokens: 1200, outputTokens: 64, cacheReadTokens: 8000, cacheWriteTokens: 0, reasoningTokens: 20 };
  const u2 = { inputTokens: 300, outputTokens: 40, cacheReadTokens: 9200 };
  const events = [
    e('request/header', 0, { header: { config: { provider: 'deepseek', model: 'deepseek-v4-pro', reasoningEffort: 'high' } }, reason: 'initial' }),
    e('request/context', 1, { provider: 'deepseek', model: 'deepseek-v4-pro', contextWindow: 1_000_000 }),
    e('user/message', 2, { role: 'user', content: [{ type: 'text', text: 'hi' }], source: { kind: 'user' } }),
    e('turn/start', 3, { turn: 0 }),
    e('step/start', 4, { turn: 0, step: 0 }),
    // A failed attempt is billed, then the retry adds its own sample.
    e('assistant/attempt', 600, { turn: 0, step: 0, stream: stream(T0 + 100, 400, u0) }),
    e('llm/retry-started', 610, { turn: 0, step: 0 }),
    e('assistant/message', 2400, { ...assistant(0, 0), stream: stream(T0 + 1300, 1200, u1) }),
    e('tool/call', 2410, { turn: 0, step: 0, callId: 'c1', name: 'write', arguments: JSON.stringify({ file_path: 'src/a.js', content: 'a\nb\nc' }) }),
    e('tool/call', 2420, { turn: 0, step: 0, callId: 'c2', name: 'pwsh', arguments: JSON.stringify({ command: 'pnpm test', description: 'Run tests' }) }),
    e('tool/result', 2600, { turn: 0, step: 0, message: { role: 'tool', toolCallId: 'c1', content: 'ok' } }),
    e('tool/result', 3900, { turn: 0, step: 0, message: { role: 'tool', toolCallId: 'c2', content: 'failed', isError: true }, error: { name: 'ToolError', code: 'exit' } }),
    e('step/end', 3910, { turn: 0, step: 0 }),
    e('step/start', 3920, { turn: 0, step: 1 }),
    e('assistant/message', 5000, { ...assistant(0, 1), stream: stream(T0 + 4300, 600, u2), usage: u2 }),
    e('step/end', 5010, { turn: 0, step: 1 }),
    e('turn/end', 5020, { turn: 0, reason: { kind: 'completed' } }),
  ];
  return { events, usages: [u0, u1, u2] };
}

const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) <= eps * Math.max(1, Math.abs(b)), `${a} ≈ ${b}`);

test('a real session log folds into tokens, cost, speed, tools and files', () => {
  const { events, usages } = realSession();
  const s = reduceAll(initialState(), events);
  assert.equal(s.provider, 'deepseek');
  assert.equal(s.model, 'deepseek-v4-pro');
  assert.equal(s.effort, 'high');
  assert.equal(s.contextWindow, 1_000_000);

  // Usage from the stream's usage chunk and from data.usage; the attempt stays billed.
  assert.equal(s.totals.requests, 3);
  assert.equal(s.totals.miss, 2500);
  assert.equal(s.totals.hit, 17200);
  assert.equal(s.totals.output, 114);
  assert.equal(s.totals.reasoning, 20);
  const price = priceFor('deepseek', 'deepseek-v4-pro');
  near(s.totals.cost, usages.reduce((a, u) => a + usageCost(normalizeUsage(u), price, false), 0));
  near(s.totals.costOffPeak, s.totals.cost);
  assert.equal(s.totals.costPeak, 0);
  assert.equal(s.totals.unpriced, 0);
  assert.ok(s.totals.savings > 0);
  assert.equal(s.contextTokens, 300 + 9200 + 40);

  // Decode speed: first to last token of each committed stream.
  assert.equal(s.speed.decodeTokens, 104);
  assert.equal(s.speed.decodeMs, 1800);
  near(s.speed.last, 40 / 0.6);
  near(metrics(s).decodeRate, 104 / 1.8);

  assert.deepEqual(s.tools, { calls: 2, errors: 1, running: 0, byKind: { engraver: 1, terminal: 1 } });
  assert.deepEqual(s.files, { count: 1, added: 3, removed: 0, paths: ['src/a.js'] });
  assert.equal(s.turnCount, 1);
  assert.equal(s.phase, 'idle');
  const t = s.turns[0];
  assert.equal(t.status, 'ok');
  assert.equal(t.requests, 3);
  assert.equal(t.calls, 2);
  assert.equal(t.errors, 1);
  assert.equal(t.fileCount, 1);
  assert.deepEqual(t.files, [{ path: 'src/a.js', added: 3, removed: 0 }]);
  assert.deepEqual(s.calls.map((c) => [c.id, c.kind, c.status, c.label]), [
    ['c1', 'engraver', 'ok', 'a.js'],
    ['c2', 'terminal', 'error', 'pnpm test'],
  ]);
  assert.equal(s.firstAt, T0 + 3);
  assert.equal(s.lastAt, T0 + 5020);
  assert.deepEqual(JSON.parse(JSON.stringify(s)), s, 'plain JSON');
});

test('ignored and repeated events return the same state object', () => {
  const { events } = realSession();
  const s = reduceAll(initialState(), events);
  const e = log();
  for (const ev of [
    e('step/end', 9000, { turn: 0, step: 1 }),
    e('user/message', 9001, { role: 'user', content: [], source: { kind: 'user' } }),
    e('developer/message', 9002, {}),
    e('request/header', 9003, { header: { config: { provider: 'deepseek', model: 'deepseek-v4-pro', reasoningEffort: 'high' } }, reason: 'change' }),
    e('request/context', 9004, { provider: 'deepseek', model: 'deepseek-v4-pro', contextWindow: 1_000_000 }),
    e('tool/result', 9005, { message: { toolCallId: 'nope' } }),
    e('turn/end', 9006, { turn: 0, reason: { kind: 'completed' } }),
    e('something/new', 9007, { x: 1 }),
    null,
  ]) {
    assert.equal(reduce(s, ev), s, ev ? ev.type : String(ev));
  }
  // The same (turn, step) usage sample again changes nothing.
  const again = { type: 'assistant/message', seq: 99, time: T0 + 9100, data: { ...assistant(0, 1), usage: { inputTokens: 300, outputTokens: 40, cacheReadTokens: 9200 } } };
  const busy = reduce(s, { type: 'step/start', time: T0 + 9050, data: { turn: 1, step: 0 } });
  const once = reduce(busy, { ...again, data: { ...again.data, turn: 1, step: 0 } });
  assert.equal(reduce(once, { ...again, data: { ...again.data, turn: 1, step: 0 } }), once);
  // A changed sample for the same step replaces the old one instead of adding to it.
  const bigger = reduce(once, { ...again, data: { ...again.data, turn: 1, step: 0, usage: { inputTokens: 310, outputTokens: 50, cacheReadTokens: 9200 } } });
  assert.equal(bigger.totals.requests, once.totals.requests);
  assert.equal(bigger.totals.miss, once.totals.miss + 10);
  assert.equal(bigger.totals.output, once.totals.output + 10);
  // A missing clock never makes the reducer read Date.now().
  const timeless = reduce(s, { type: 'turn/start', data: { turn: 1 } });
  assert.equal(timeless.turns.at(-1).startedAt, s.lastAt);
});

test('stream timing reads chunk runs and raw token chunks', () => {
  assert.deepEqual(streamTiming(stream(1000, 600, {})), { first: 1000, last: 1600 });
  assert.deepEqual(streamTiming([
    { type: 'tool-call-chunks', time0: 50, index: 0, dt: [10], id: 'x', name: 'read', args: ['{"a"', ':1}'] },
    { type: 'chunk', time: 200, chunk: { type: 'text-delta', text: 'hi' } },
    { type: 'chunk', time: 900, chunk: { type: 'usage', usage: {} } },
  ]), { first: 50, last: 200 });
  assert.equal(streamTiming([]), null);
  assert.equal(streamTiming(undefined), null);
});

test('an aborted turn is stamped rework and cancels its running calls', () => {
  const e = log();
  const s = reduceAll(initialState(), [
    e('turn/start', 0, { turn: 0 }),
    e('tool/call', 10, { turn: 0, step: 0, callId: 'a', name: 'read', arguments: '{"file_path":"x.md"}' }),
    e('tool/call', 20, { turn: 0, step: 0, callId: 'b', name: 'grep', arguments: '{"pattern":"y"}' }),
    e('tool/result', 30, { message: { toolCallId: 'a' } }),
    e('turn/end', 40, { turn: 0, reason: { kind: 'interrupted' } }),
  ]);
  assert.equal(s.turns[0].status, 'rework');
  assert.equal(s.tools.running, 0);
  assert.equal(s.tools.errors, 1);
  assert.equal(s.calls[1].status, 'error');
  assert.equal(s.phase, 'idle');
});

test('subagents follow the catalog, settlement notices and send_message', () => {
  const e = log();
  let s = reduceAll(initialState(), [
    e('turn/start', 0, { turn: 0 }),
    e('tool/call', 10, { turn: 0, step: 0, callId: 's1', name: 'subagent', arguments: JSON.stringify({ name: 'researcher', description: 'Research', prompt: 'p' }) }),
    e('subagent/catalog', 11, { version: 3, childId: 'child-1', childCreatedAt: T0 + 11, mode: 'continuable', label: 'Research', name: 'researcher' }),
    e('tool/result', 12, { message: { toolCallId: 's1', content: 'researcher' } }),
    e('subagent/catalog', 13, { version: 3, childId: 'child-2', childCreatedAt: new Date(T0 + 13).toISOString(), mode: 'one-shot', label: 'Review', name: 'reviewer' }),
  ]);
  assert.deepEqual(s.agents.map((a) => [a.id, a.name, a.kind, a.mode, a.status, a.turn]), [
    ['child-1', 'researcher', 'subagent', 'continuable', 'running', 1],
    ['child-2', 'reviewer', 'subagent', 'one-shot', 'running', 1],
  ]);
  assert.equal(s.agents[1].startedAt, T0 + 13);
  s = reduceAll(s, [
    e('user/message', 500, { role: 'user', content: [], source: { kind: 'subagent-settled', form: 'notice', summary: 'ok', stopReason: 'completed', senderSessionId: 'child-1' } }),
    e('user/message', 510, { role: 'user', content: [], source: { kind: 'subagent-settled', form: 'notice', summary: 'x', stopReason: 'error', senderSessionId: 'child-2' } }),
  ]);
  assert.deepEqual(s.agents.map((a) => a.status), ['done', 'error']);
  assert.equal(s.agents[0].endedAt, T0 + 500);
  // Repeating a catalog entry changes nothing.
  assert.equal(reduce(s, e('subagent/catalog', 600, { version: 3, childId: 'child-1', mode: 'continuable', label: 'Research', name: 'researcher' })), s);
  s = reduce(s, e('tool/call', 700, { turn: 0, step: 1, callId: 'm1', name: 'send_message', arguments: JSON.stringify({ agent: 'lead/researcher', message: 'more' }) }));
  assert.equal(s.agents[0].status, 'running');
  s = reduce(s, e('user/message', 900, { role: 'user', content: [], source: { kind: 'subagent-settled', form: 'notice', summary: '', stopReason: 'aborted', senderSessionId: 'child-1' } }));
  assert.equal(s.agents[0].status, 'stopped');
});

test('workflow runs count their agents and outcomes', () => {
  const e = log();
  let s = reduceAll(initialState(), [
    e('turn/start', 0, { turn: 0 }),
    e('tool-workflow/run-start', 10, { runId: 'r1', name: 'audit' }),
    e('tool-workflow/agent-start', 20, { runId: 'r1', seq: 0, label: 'scan a', phase: 'Scan', childId: 'w-1' }),
    e('tool-workflow/agent-start', 21, { runId: 'r1', seq: 1, label: 'scan b', phase: 'Scan', childId: 'w-2' }),
    e('tool-workflow/agent-start', 22, { runId: 'r1', seq: 2, label: 'verify', phase: 'Verify', childId: 'w-3' }),
    e('tool-workflow/agent-end', 30, { runId: 'r1', seq: 0, outcome: 'completed' }),
    e('tool-workflow/agent-end', 31, { runId: 'r1', seq: 1, outcome: 'failed' }),
  ]);
  assert.deepEqual(s.workflows.map((w) => [w.runId, w.name, w.status, w.agents, w.done, w.failed, w.phase]), [
    ['r1', 'audit', 'running', 3, 1, 1, 'Verify'],
  ]);
  s = reduce(s, e('tool-workflow/run-end', 40, { runId: 'r1', stopReason: 'cancelled' }));
  assert.equal(s.workflows[0].status, 'stopped');
  assert.deepEqual(s.agents.map((a) => [a.kind, a.runId, a.seq, a.status]), [
    ['workflow', 'r1', 0, 'done'],
    ['workflow', 'r1', 1, 'error'],
    ['workflow', 'r1', 2, 'stopped'],
  ]);
  assert.equal(reduce(s, e('tool-workflow/run-end', 50, { runId: 'r1', stopReason: 'completed' })), s);
});

test('lists stay bounded and keep running entries', () => {
  const e = log();
  const events = [e('turn/start', 0, { turn: 0 })];
  events.push(e('tool/call', 1, { turn: 0, step: 0, callId: 'keep', name: 'pwsh', arguments: '{"command":"long job"}' }));
  for (let i = 0; i < MAX_CALLS + 10; i++) {
    events.push(e('tool/call', 10 + i * 2, { turn: 0, step: 0, callId: `w${i}`, name: 'write', arguments: JSON.stringify({ file_path: `f${i}.txt`, content: 'x' }) }));
    events.push(e('tool/result', 11 + i * 2, { message: { toolCallId: `w${i}` } }));
  }
  for (let i = 0; i < MAX_AGENTS + 4; i++) {
    events.push(e('subagent/catalog', 500 + i, { version: 3, childId: `k${i}`, mode: 'one-shot', label: `L${i}` }));
  }
  const s = reduceAll(initialState(), events);
  assert.equal(s.calls.length, MAX_CALLS);
  assert.equal(s.calls[0].id, 'keep');
  assert.equal(s.tools.calls, MAX_CALLS + 11);
  assert.equal(s.files.count, MAX_CALLS + 10);
  const t = s.turns[0];
  assert.equal(t.files.length, MAX_TURN_FILES);
  assert.equal(t.fileCount, MAX_CALLS + 10);
  assert.equal(s.agents.length, MAX_AGENTS);

  const v = toView(s);
  assert.equal(v.calls.length, VIEW_CALLS);
  assert.equal(v.calls[0].id, 'keep', 'a running call stays in the view');
  assert.equal(v.calls.at(-1).id, s.calls.at(-1).id);
  assert.equal(v.turns[0].files.length, VIEW_TURN_FILES);
  assert.equal(v.turns[0].fileCount, MAX_CALLS + 10);
  assert.ok(v.files.recent.length <= 8);
  assert.equal(v.sample, undefined);
});

function demoState(turns = 3) {
  return reduceAll(initialState(), createDemo().prefill(turns));
}

test('the projection schemas keep every field of state and view', () => {
  const { events } = realSession();
  const many = log();
  const longRun = [many('turn/start', 0, { turn: 0 })];
  for (let i = 0; i < 30; i++) {
    longRun.push(many('turn/end', i * 10 + 1, { turn: i, reason: { kind: i % 3 ? 'completed' : 'error' } }));
    longRun.push(many('turn/start', i * 10 + 2, { turn: i + 1 }));
  }
  const states = [initialState(), reduceAll(initialState(), events), demoState(), reduceAll(initialState(), longRun)];
  for (const s of states) {
    assert.deepEqual(stateSchema.parse(s), s);
    const v = toView(s);
    assert.deepEqual(viewSchema.parse(v), v);
    assert.ok(v.turns.length <= VIEW_TURNS);
  }
});

test('the projection definition folds events and memoizes the view', () => {
  const errors = [];
  const p = createProjection({ onError: (err, event) => errors.push([err.message, event.type]) });
  assert.equal(p.key, PROJECTION_KEY);
  assert.equal(p.key, 'workProcess3d');
  assert.ok(Number.isInteger(p.stateVersion) && p.stateVersion > 0);
  assert.deepEqual(p.init({ id: 's' }, 0), initialState());
  let s = p.init({ id: 's' }, 0);
  for (const ev of realSession().events) s = p.apply(s, ev);
  assert.deepEqual(s, reduceAll(initialState(), realSession().events));
  const v = p.wire.view(s);
  assert.equal(p.wire.view(s), v, 'same state, same view');
  assert.notEqual(p.wire.view(initialState()), v);
  assert.equal(p.wire.summary, false);
  assert.equal(p.wire.viewSchema, viewSchema);
  const bad = { type: 'tool/call', seq: 1, time: T0, get data() { throw new Error('boom'); } };
  assert.equal(p.apply(s, bad), s);
  assert.deepEqual(errors, [['boom', 'tool/call']]);
});

// ── Balance route ───────────────────────────────────────────────

const META = { version: '0.2.2-rc.3', locale: 'zh-CN', timezoneOffsetSeconds: 28800 };
const post = (body) => new Request(`http://127.0.0.1${BALANCE_PATH}`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: typeof body === 'string' ? body : JSON.stringify(body),
});

function fakeAccount(result, state = 'credential-stored') {
  const calls = [];
  return {
    calls,
    getState: () => ({ status: state }),
    getBalance: async (meta) => {
      calls.push(meta);
      return typeof result === 'function' ? result() : result;
    },
  };
}

function fakeKey(body, { ok = true, key = 'sk-test-secret' } = {}) {
  const requests = [];
  return {
    requests,
    settings: () => ({ describe: () => [{ ns: 'llm-deepseek', value: { apiKeyEnv: 'DEEPSEEK_API_KEY', baseURL: 'https://api.example.test/' } }] }),
    credentials: () => ({ resolve: async (ref) => (ref === 'DEEPSEEK_API_KEY' ? { value: key } : null) }),
    fetch: async (url, init) => {
      requests.push({ url, auth: init.headers.authorization });
      return new Response(JSON.stringify(body), { status: ok ? 200 : 401, headers: { 'content-type': 'application/json' } });
    },
  };
}

const READY = {
  status: 'ready',
  value: [{ currency: 'CNY', balance: '41.50' }],
  bonusWallets: [{ currency: 'CNY', balance: '10' }, { currency: 'USD', balance: '1.25' }],
};

test('balance requests are validated', () => {
  assert.deepEqual(parseBalanceRequest(META), META);
  assert.deepEqual(parseBalanceRequest({ ...META, version: '' }), { ...META, version: '' });
  assert.deepEqual(parseBalanceRequest({ locale: 'en', timezoneOffsetSeconds: 0 }), { version: '', locale: 'en', timezoneOffsetSeconds: 0 });
  for (const bad of [null, [], 'x', { ...META, version: 'a b' }, { ...META, version: 1 }, { ...META, locale: '' },
    { ...META, locale: 'zh-CN; drop' }, { ...META, timezoneOffsetSeconds: 1.5 }, { ...META, timezoneOffsetSeconds: 99999 }]) {
    assert.equal(parseBalanceRequest(bad), null, JSON.stringify(bad));
  }
  assert.deepEqual(fromAccount(READY).wallets, [
    { currency: 'CNY', total: 51.5, toppedUp: 41.5, granted: 10 },
    { currency: 'USD', total: 1.25, toppedUp: 0, granted: 1.25 },
  ]);
  assert.deepEqual(fromAccount(null), { status: 'signed-out', wallets: [] });
  assert.deepEqual(fromAccount({ status: 'failed' }), { status: 'failed', wallets: [] });
  assert.deepEqual(fromUserBalance({ is_available: true, balance_infos: [{ currency: 'CNY', total_balance: '12.00', granted_balance: '2.00', topped_up_balance: '10.00' }] }).wallets, [
    { currency: 'CNY', total: 12, toppedUp: 10, granted: 2 },
  ]);
  assert.equal(fromUserBalance({}).status, 'failed');
});

test('the balance route answers from the signed-in account and caches it', async () => {
  let clock = 1000;
  const account = fakeAccount(READY);
  const handle = createBalanceHandler({ account: () => account }, { now: () => clock });
  const [a, b] = await Promise.all([handle(post(META)), handle(post(META))]);
  assert.equal(a.status, 200);
  assert.equal(a.headers.get('cache-control'), 'no-store');
  const body = await a.json();
  assert.equal(body.ok, true);
  assert.equal(body.status, 'ready');
  assert.equal(body.source, 'account');
  assert.equal(body.wallets[0].total, 51.5);
  assert.deepEqual(await b.json(), body);
  assert.equal(account.calls.length, 1, 'concurrent requests share one query');
  assert.deepEqual(account.calls[0], META);
  clock += 5000;
  await handle(post(META));
  assert.equal(account.calls.length, 1, 'cached');
  clock += 20_000;
  await handle(post(META));
  assert.equal(account.calls.length, 2, 'expired');
});

test('the balance route falls back to the API key without leaking it', async () => {
  const key = fakeKey({ is_available: true, balance_infos: [{ currency: 'CNY', total_balance: '8.50', granted_balance: '0.50', topped_up_balance: '8.00' }] });
  const signedOut = fakeAccount(null, 'signed-out');
  const handle = createBalanceHandler({ account: () => signedOut, settings: key.settings, credentials: key.credentials, fetch: key.fetch });
  const res = await handle(post(META));
  const text = await res.text();
  assert.ok(!text.includes('sk-test-secret'));
  const body = JSON.parse(text);
  assert.equal(body.source, 'api-key');
  assert.equal(body.wallets[0].total, 8.5);
  assert.equal(signedOut.calls.length, 0, 'a signed-out account is not queried');
  assert.equal(key.requests[0].url, 'https://api.example.test/user/balance');
  assert.equal(key.requests[0].auth, 'Bearer sk-test-secret');

  // Without a DSH version the account is skipped too.
  const account = fakeAccount(READY);
  const noVersion = createBalanceHandler({ account: () => account, settings: key.settings, credentials: key.credentials, fetch: key.fetch });
  const nv = await (await noVersion(post({ ...META, version: '' }))).json();
  assert.equal(nv.source, 'api-key');
  assert.equal(account.calls.length, 0);

  // A failed account query still reports failure when no key exists.
  const failing = createBalanceHandler({ account: () => fakeAccount({ status: 'failed' }) });
  assert.deepEqual(await (await failing(post(META))).json().then((x) => [x.status, x.source]), ['failed', 'account']);
  const nothing = createBalanceHandler({});
  assert.deepEqual(await (await nothing(post(META))).json().then((x) => [x.ok, x.status, x.wallets]), [true, 'unavailable', []]);
  const throwing = createBalanceHandler({ account: () => fakeAccount(() => { throw new Error('net'); }) });
  assert.equal((await (await throwing(post(META))).json()).status, 'failed');
});

test('the balance route rejects bad requests', async () => {
  const handle = createBalanceHandler({});
  const status = async (req) => {
    const res = await handle(req);
    const body = await res.json();
    assert.equal(body.ok, false);
    assert.equal(typeof body.error.code, 'string');
    return res.status;
  };
  assert.equal(await status(new Request(`http://127.0.0.1${BALANCE_PATH}`)), 405);
  assert.equal(await status(post('not json')), 400);
  assert.equal(await status(post({ version: 'x' })), 400);
  assert.equal(await status(post({ ...META, pad: 'x'.repeat(4000) })), 413);
});

test('the host registers the projection and the balance route', async () => {
  assert.equal(host.name, 'dsh-work-process-3d');
  assert.deepEqual(host.inject, ['sessionProjections']);
  const registered = [];
  const routes = [];
  const effects = [];
  const services = { connection: { fetch: { register: (route) => { routes.push(route); return async () => {}; } } } };
  const ctx = {
    sessionProjections: { register: async (def) => { registered.push(def); return { dispose() {} }; } },
    get: (k) => services[k],
    inject(keys, cb) {
      assert.deepEqual(keys, ['connection']);
      cb({ get: (k) => services[k], effect: (fn, label) => { effects.push(label); fn(); } });
    },
  };
  await host.apply(ctx);
  assert.equal(registered.length, 1);
  assert.equal(registered[0].key, 'workProcess3d');
  assert.equal(routes.length, 1);
  assert.equal(routes[0].path, BALANCE_PATH);
  assert.deepEqual(routes[0].methods, ['POST']);
  assert.equal(routes[0].requestBody, 'buffered');
  assert.equal(effects.length, 1);
  const res = await routes[0].fetch(post(META));
  assert.equal((await res.json()).status, 'unavailable');

  const entry = await import('../index.js');
  assert.deepEqual(Object.keys(entry).sort(), ['apply', 'inject', 'name']);
});
