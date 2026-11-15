import test from 'node:test';
import assert from 'node:assert/strict';
import { isPeak, priceFor, usageCost, normalizeUsage } from '../src/model/pricing.js';
import { stationKindOf, describeToolCall, estimateFileChange, MACHINE_INFO, STATION_INFO } from '../src/model/stations.js';
import { formatPct } from '../src/client/format.js';
import { initialState, reduce, reduceAll, metrics } from '../src/model/reducer.js';
import { createDemo } from '../src/model/demo.js';

test('peak hours follow Beijing weekday 9-12 and 14-18', () => {
  // 2026-11-16 is a Monday.
  assert.equal(isPeak(Date.parse('2026-11-16T09:30:00+08:00')), true);
  assert.equal(isPeak(Date.parse('2026-11-16T12:30:00+08:00')), false);
  assert.equal(isPeak(Date.parse('2026-11-16T17:59:00+08:00')), true);
  assert.equal(isPeak(Date.parse('2026-11-16T18:00:00+08:00')), false);
  assert.equal(isPeak(Date.parse('2026-11-15T10:00:00+08:00')), false); // Sunday
});

test('pricing picks the model row and halves off-peak', () => {
  const flash = priceFor('deepseek', 'deepseek-flash');
  assert.equal(flash.id, 'deepseek-flash');
  assert.equal(priceFor('deepseek', 'deepseek-v4-pro').id, 'deepseek-v4-pro');
  assert.equal(priceFor('openai', 'gpt-5'), null);
  const u = normalizeUsage({ inputTokens: 1e6, cacheReadTokens: 1e6, outputTokens: 1e6 });
  assert.equal(usageCost(u, flash, true), 2 + 0.04 + 8);
  assert.equal(usageCost(u, flash, false), 1 + 0.02 + 4);
});

test('tools map to stations', () => {
  assert.equal(stationKindOf('read'), 'archive');
  assert.equal(stationKindOf('edit'), 'engraver');
  assert.equal(stationKindOf('pwsh'), 'terminal');
  assert.equal(stationKindOf('mcp__web-search-safe__web_search'), 'satellite');
  assert.equal(stationKindOf('subagent_fork'), 'robot');
  assert.equal(stationKindOf('compress'), 'press');
  assert.equal(stationKindOf('team_task_update'), 'kanban');
  assert.equal(stationKindOf('ask_user_question'), 'beacon');
  assert.equal(stationKindOf('present'), 'labeler');
  assert.equal(stationKindOf('plugin_manager'), 'generic');
  assert.equal(describeToolCall('read', { file_path: 'D:\\a\\b\\c.js' }), 'c.js');
  assert.equal(describeToolCall('pwsh', '{"command":"\\n pnpm test\\nmore"}'), 'pnpm test');
  assert.equal(describeToolCall('web_fetch', { url: 'https://threejs.org/docs/' }), 'threejs.org');
  assert.deepEqual(estimateFileChange('edit', { file_path: 'a.js', old_string: 'x\ny\nz', new_string: 'x\nY\nQ\nz' }), { path: 'a.js', added: 2, removed: 1 });
  assert.deepEqual(estimateFileChange('write', { file_path: 'b.md', content: '1\n2\n3' }), { path: 'b.md', added: 3, removed: 0 });
});

test('reducer tracks usage, calls, files and turn outcome', () => {
  const ev = (type, data, time = Date.parse('2026-11-16T10:00:00+08:00')) => ({ type, time, data });
  let s = reduceAll(initialState(), [
    ev('request/context', { provider: 'deepseek', model: 'deepseek-flash', contextWindow: 1000 }),
    ev('turn/start', { turn: 0 }),
    ev('assistant/message', { turn: 0, usage: { inputTokens: 100, cacheReadTokens: 300, outputTokens: 50, reasoningTokens: 20 } }),
    ev('tool/call', { turn: 0, callId: 'c1', name: 'edit', arguments: { file_path: 'x.js', old_string: 'a', new_string: 'a\nb' } }),
    ev('tool/call', { turn: 0, callId: 'c2', name: 'pwsh', arguments: { command: 'ls' } }),
  ]);
  assert.equal(s.tools.running, 2);
  assert.equal(s.phase, 'tool');
  s = reduce(s, ev('tool/result', { message: { toolCallId: 'c1' } }));
  s = reduce(s, ev('tool/result', { message: { toolCallId: 'c2', isError: true } }));
  assert.equal(s.tools.running, 0);
  assert.equal(s.tools.errors, 1);
  assert.equal(s.files.count, 1);
  assert.equal(s.files.added, 1);
  assert.equal(s.contextTokens, 450);
  s = reduce(s, ev('turn/end', { turn: 0, reason: { kind: 'error' } }));
  assert.equal(s.turns[0].status, 'rework');
  assert.equal(s.turns[0].files.length, 1);
  const m = metrics(s);
  assert.equal(m.contextRatio, 0.45);
  assert.ok(s.totals.cost > 0);
});

test('demo prefill produces two finished turns', () => {
  const demo = createDemo();
  const events = demo.prefill(2);
  const s = reduceAll(initialState(), events);
  assert.equal(s.turns.length, 2);
  assert.ok(s.turns.every((t) => t.status !== 'running'));
  assert.ok(s.tools.calls >= 10);
  assert.ok(s.totals.cost > 0);
  assert.ok(demo.balance < 52.8);
});

test('demo data is fictional', () => {
  const text = JSON.stringify(createDemo().prefill(3));
  for (const leak of ['dsh-work-process-3d', 'D:\\\\', 'plugin_manager', 'restart_harness', 'cordis']) {
    assert.ok(!text.includes(leak), `demo mentions ${leak}`);
  }
});

test('tool success rate ignores running calls', () => {
  const ev = (type, data) => ({ type, time: Date.parse('2026-11-16T10:00:00+08:00'), data });
  const s = reduceAll(initialState(), [
    ev('turn/start', { turn: 0 }),
    ev('tool/call', { turn: 0, callId: 'a', name: 'read', arguments: { file_path: 'a.txt' } }),
    ev('tool/call', { turn: 0, callId: 'b', name: 'read', arguments: { file_path: 'b.txt' } }),
    ev('tool/result', { message: { toolCallId: 'a' } }),
  ]);
  assert.equal(metrics(s).toolSuccess, 1);
});

test('percentages never round up to 100% or down to 0%', () => {
  assert.equal(formatPct(1), '100%');
  assert.equal(formatPct(0.996), '99.6%');
  assert.equal(formatPct(0.42), '42%');
  assert.equal(formatPct(0.001), '<1%');
  assert.equal(formatPct(0), '0%');
});

test('every machine and station has a name and a code', () => {
  for (const info of [...Object.values(MACHINE_INFO), ...Object.values(STATION_INFO)]) {
    assert.ok(info.zh && info.en && /^[A-Z]+-\d+$/.test(info.code), JSON.stringify(info));
  }
  const codes = [...Object.values(MACHINE_INFO), ...Object.values(STATION_INFO)].map((x) => x.code);
  assert.equal(new Set(codes).size, codes.length, 'codes are unique');
});
