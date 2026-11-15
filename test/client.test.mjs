// Client-side live data helpers (src/client/live.js) and locale coverage of the HUD.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  BALANCE_ROUTE,
  STREAM_WINDOW_MS,
  estimateTokens,
  createStreamMeter,
  withContext,
  parseBalance,
  bootVersion,
  fetchBalance,
} from '../src/client/live.js';
import { BALANCE_PATH } from '../src/host/balance.js';
import { DICTS } from '../src/client/locale.js';
import { initialState } from '../src/model/reducer.js';
import { toView } from '../src/model/view.js';

const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) <= eps, `${a} ≈ ${b}`);

test('the client asks the route the host registers', () => {
  assert.equal(BALANCE_ROUTE, BALANCE_PATH);
});

test('streamed text is counted with DeepSeek’s rule of thumb', () => {
  near(estimateTokens('你好世界'), 2.4);
  near(estimateTokens('hello'), 1.5);
  near(estimateTokens('a b\n\tc'), 0.9, 1e-9);
  near(estimateTokens('写 code'), 0.6 + 4 * 0.3);
  near(estimateTokens('𠀀'), 0.6); // one astral CJK character in two code units
  assert.equal(estimateTokens(''), 0);
  assert.equal(estimateTokens(null), 0);
});

test('the stream meter turns chat partials into a phase and a rate', () => {
  const meter = createStreamMeter();
  const part = (blocks, step = 1) => ({ turn: 1, step, blocks });
  // Waiting for the first token: no override, the session model's phase applies.
  assert.deepEqual(meter.push(part([]), 0), { phase: 'idle', tps: 0 });
  let r = meter.push(part([{ kind: 'reasoning', text: 'abcdefghij' }]), 100);
  assert.equal(r.phase, 'reasoning');
  near(r.tps, 3 / 0.5); // 3 tokens over the 0.5 s minimum span
  r = meter.push(part([{ kind: 'reasoning', text: 'abcdefghijklmnopqrst' }]), 1100);
  near(r.tps, 6 / 1.0);
  // Text after the reasoning switches the phase; only the new characters count.
  r = meter.push(part([{ kind: 'reasoning', text: 'abcdefghijklmnopqrst' }, { kind: 'text', text: '你好' }]), 1600);
  assert.equal(r.phase, 'generating');
  near(r.tps, (6 + 1.2) / 1.5);
  // Tool-call arguments stream as generation too.
  r = meter.push(part([
    { kind: 'reasoning', text: 'abcdefghijklmnopqrst' },
    { kind: 'text', text: '你好' },
    { kind: 'tool-call', callId: 'c', name: 'write', argsRaw: '{"a":1}' },
  ]), 1700);
  assert.equal(r.phase, 'generating');
  near(r.tps, (6 + 1.2 + 2.1) / 1.6);
  // A stalled stream falls to zero once the window has passed.
  r = meter.tick(1700 + STREAM_WINDOW_MS + 1);
  assert.equal(r.tps, 0);
  // A new step starts a new count; the end of the message clears everything.
  r = meter.push(part([{ kind: 'text', text: 'abc' }], 2), 5000);
  near(r.tps, 0.9 / 0.5);
  assert.deepEqual(meter.push(null, 5100), { phase: 'idle', tps: 0 });
  assert.deepEqual(meter.tick(5200), { phase: 'idle', tps: 0 });
});

test('DSH context pressure overrides the projection numbers only when present', () => {
  const view = { ...toView(initialState()), contextTokens: 100, contextWindow: 1000 };
  assert.equal(withContext(view, undefined), view);
  assert.equal(withContext(view, {}), view);
  assert.equal(withContext(null, { pressureTokens: 5 }), null);
  let v = withContext(view, { pressureTokens: 300, contextWindow: 2000 });
  assert.equal(v.contextTokens, 300);
  assert.equal(v.contextWindow, 2000);
  assert.equal(view.contextTokens, 100, 'the view itself is not changed');
  // The projected value accounts for compaction and wins over the raw pressure.
  v = withContext(view, { pressureTokens: 300, projectedTokens: 120 });
  assert.equal(v.contextTokens, 120);
  assert.equal(v.contextWindow, 1000);
  v = withContext(view, { pressureTokens: Number.NaN, contextWindow: 0 });
  assert.equal(v, view);
});

test('balance replies become fuel readout values', () => {
  assert.deepEqual(parseBalance({ ok: true, status: 'ready', source: 'account', wallets: [{ currency: 'USD', total: 2, toppedUp: 2, granted: 0 }, { currency: 'CNY', total: 51.5, toppedUp: 50, granted: 1.5 }] }), {
    status: 'ready',
    balance: 51.5,
    currency: 'CNY',
    toppedUp: 50,
    granted: 1.5,
    source: 'account',
  });
  assert.equal(parseBalance({ ok: true, status: 'ready', wallets: [{ currency: 'USD', total: 3 }] }).currency, 'USD');
  assert.equal(parseBalance({ ok: true, status: 'ready', wallets: [] }).status, 'unavailable');
  assert.equal(parseBalance({ ok: true, status: 'signed-out', wallets: [] }).status, 'signed-out');
  assert.equal(parseBalance({ ok: true, status: 'weird' }).status, 'failed');
  assert.equal(parseBalance({ ok: false, error: { code: 'x' } }).status, 'failed');
  assert.equal(parseBalance(null).balance, null);
});

test('the boot version comes from the page the Host served', () => {
  assert.equal(bootVersion({ __DSH_BOOT__: { release: { version: '0.2.2-rc.3' } } }), '0.2.2-rc.3');
  assert.equal(bootVersion({ __DSH_BOOT__: {} }), '');
  assert.equal(bootVersion({}), '');
  assert.equal(bootVersion(undefined), '');
});

test('fetchBalance posts the client metadata and maps every outcome', async () => {
  const calls = [];
  const reply = (status, body) => async (url, init) => {
    calls.push({ url, init });
    return { status, json: async () => body };
  };
  let r = await fetchBalance({ lang: 'zh', version: '0.2.2', fetchImpl: reply(200, { ok: true, status: 'ready', wallets: [{ currency: 'CNY', total: 8.5 }] }) });
  assert.equal(r.balance, 8.5);
  assert.equal(calls[0].url, BALANCE_ROUTE);
  assert.equal(calls[0].init.method, 'POST');
  const body = JSON.parse(calls[0].init.body);
  assert.equal(body.version, '0.2.2');
  assert.equal(body.locale, 'zh-CN');
  assert.ok(Number.isInteger(body.timezoneOffsetSeconds));
  // 404: the route is missing because the plugin's Host part has not loaded yet (restart DSH).
  r = await fetchBalance({ version: '', fetchImpl: reply(404, null) });
  assert.equal(r.status, 'no-host');
  r = await fetchBalance({ version: '', fetchImpl: reply(502, { ok: false, error: { code: 'upstream', message: 'x' } }) });
  assert.equal(r.status, 'failed');
  r = await fetchBalance({ version: '', fetchImpl: async () => ({ status: 200, json: async () => { throw new SyntaxError('bad'); } }) });
  assert.equal(r.status, 'failed');
  r = await fetchBalance({ version: '', fetchImpl: async () => { throw new TypeError('network'); } });
  assert.equal(r.status, 'failed');
  const ac = new AbortController();
  ac.abort();
  await assert.rejects(fetchBalance({ version: '', signal: ac.signal, fetchImpl: async () => { throw new DOMException('aborted', 'AbortError'); } }));
});

test('every HUD text has a Chinese and an English string', () => {
  const src = readFileSync(fileURLToPath(new URL('../src/client/view/ProcessView.jsx', import.meta.url)), 'utf8');
  const keys = new Set();
  for (const m of src.matchAll(/\bt\(\s*'([a-zA-Z0-9_.]+)'/g)) keys.add(m[1]);
  for (const m of src.matchAll(/'(bal\.[a-zA-Z]+)'/g)) keys.add(m[1]);
  // t(cond ? 'a.b' : 'c.d')
  for (const m of src.matchAll(/\bt\(\s*[\w.!&|() ]+\?\s*'([\w.]+)'\s*:\s*'([\w.]+)'/g)) keys.add(m[1]).add(m[2]);
  keys.add('live.failed').add('live.unsupported');
  // Keys built at run time.
  for (const id of ['live', 'demo']) keys.add(`source.${id}`).add(`source.${id}Hint`);
  for (const p of ['idle', 'thinking', 'reasoning', 'generating', 'tool']) keys.add(`phase.${p}`);
  assert.ok(keys.size > 80, `found ${keys.size} keys`);
  for (const lang of ['zh', 'en']) {
    for (const key of keys) {
      // Prefixes that a later string completes (t('quality.' + q)) are not keys themselves.
      if (key.endsWith('.')) continue;
      assert.equal(typeof DICTS[lang][key], 'string', `${lang} has "${key}"`);
    }
  }
});
