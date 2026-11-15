// Looping demo driver: emits DSH-shaped session events and live stream samples so the
// factory runs without a real session (data source 演示, or no live projection available).
import { priceFor, isPeak, normalizeUsage, usageCost } from './pricing.js';

const lines = (n, tag) => Array.from({ length: n }, (_, i) => `${tag} ${i}`).join('\n');

// A made-up project ("weather-board", a small forecast dashboard) so nothing in the
// demo can be mistaken for the user's own files, commands or failures.
// Tools: [name, args, seconds, fail?, extra?]. extra.agent starts a subagent that reports back
// `after` seconds later (like DSH's settlement notice); extra.workflow runs a workflow whose
// agents are [label, phase, seconds, outcome?] and which ends when the tool call returns.
const SCRIPT = [
  {
    end: 'completed',
    steps: [
      { r: 520, o: 140, tools: [
        ['read', { file_path: 'weather-board/src/api/forecast.ts' }, 0.3],
        ['glob', { pattern: 'src/**/*.tsx' }, 0.4],
        ['grep', { pattern: 'fetchForecast', path: 'src' }, 0.5],
      ] },
      { r: 380, o: 620, tools: [
        ['edit', { file_path: 'src/api/forecast.ts', old_string: lines(3, 'a'), new_string: lines(9, 'a') }, 0.6],
        ['write', { file_path: 'src/components/HourlyChart.tsx', content: lines(132, 'x') }, 0.7],
      ] },
      { r: 160, o: 240, tools: [['bash', { command: 'npm run build' }, 3.0]] },
      { r: 120, o: 300, tools: [['bash', { command: 'npm test' }, 2.4]] },
      { r: 60, o: 420 },
    ],
  },
  {
    end: 'completed',
    steps: [
      { r: 300, o: 90, tools: [
        ['web_search', { queries: ['Open-Meteo hourly forecast parameters'] }, 2.2],
        ['web_fetch', { url: 'https://open-meteo.com/en/docs' }, 1.6],
      ] },
      { r: 260, o: 200, tools: [
        ['subagent', { description: 'Review chart accessibility' }, 0.6, false, { agent: { name: 'a11y-reviewer', label: 'Review chart accessibility', after: 16 } }],
        ['todo_write', { todos: [{ content: 'Add a units toggle' }] }, 0.3],
      ] },
      { r: 200, o: 160, tools: [
        ['edit', { file_path: 'src/styles/chart.css', old_string: lines(6, 'c'), new_string: lines(10, 'c') }, 0.5],
        ['edit', { file_path: 'src/components/HourlyChart.tsx', old_string: lines(4, 'v'), new_string: lines(12, 'v') }, 0.5],
      ] },
      { r: 100, o: 120, tools: [['bash', { command: 'npm run build' }, 2.6, true]] },
      { r: 420, o: 380, tools: [
        ['edit', { file_path: 'tsconfig.json', old_string: lines(2, 'b'), new_string: lines(5, 'b') }, 0.4],
        ['bash', { command: 'npm run build' }, 2.4],
      ] },
      { r: 80, o: 360, tools: [['present', { files: [{ path: 'docs/forecast-report.md' }] }, 0.5]] },
      { r: 40, o: 220 },
    ],
  },
  {
    end: 'interrupted',
    steps: [
      { r: 120, o: 80, tools: [['compress', { content: 'earlier steps …' }, 1.6]], compact: 0.42 },
      { r: 140, o: 120, tools: [
        ['workflow', { meta: { name: 'verify-forecast' } }, 11.0, false, { workflow: { name: 'verify-forecast', agents: [
          ['Check API error paths', 'Verify', 6.5],
          ['Check chart contrast', 'Verify', 8.0],
          ['Check unit conversions', 'Verify', 9.5, 'failed'],
          ['Summarize findings', 'Report', 10.6],
        ] } }],
        ['subagent', { description: 'Draft release notes' }, 0.6, false, { agent: { name: 'notes-writer', label: 'Draft release notes', after: 13 } }],
      ] },
      { r: 200, o: 140, tools: [
        ['mcp__tracker__create_issue', { title: 'Chart flickers on resize' }, 2.2],
        ['read', { file_path: 'src/components/HourlyChart.tsx' }, 0.5],
        ['mcp__docs__search', { query: 'ResizeObserver loop limit' }, 1.8],
      ] },
      { r: 160, o: 100, tools: [['ask_user_question', { questions: [{ question: 'Switch the default units to metric?' }] }, 4.5]] },
      { r: 90, o: 110, tools: [['bash', { command: 'npm run deploy' }, 1.2, true]] },
    ],
  },
];

const MODEL = { provider: 'deepseek', model: 'deepseek-flash', contextWindow: 1_000_000 };

/** Queue an item `delay` simulated seconds from now (kept sorted by due time). */
function later(g, delay, item) {
  const at = g.clock + Math.max(0, delay);
  let i = g.later.length;
  while (i > 0 && g.later[i - 1].at > at) i--;
  g.later.splice(i, 0, { at, item });
}

/** Wait `secs` simulated seconds, emitting queued items when they fall due. */
function* pause(g, secs) {
  let left = secs;
  for (;;) {
    while (g.later.length && g.later[0].at <= g.clock + 1e-9) yield g.later.shift().item;
    if (left <= 1e-9) return;
    const step = g.later.length ? Math.min(left, g.later[0].at - g.clock) : left;
    yield { wait: step };
    g.clock += step;
    left -= step;
  }
}

/** Background work a tool call starts: a subagent or a workflow run with its agents. */
function* startExtra(g, p) {
  const x = p.extra;
  if (!x) return;
  if (x.agent) {
    const childId = `demo-agent-${g.agents++}`;
    yield { event: 'subagent/catalog', data: { version: 3, childId, mode: 'one-shot', label: x.agent.label, name: x.agent.name } };
    const summary = `${x.agent.label}: done`;
    later(g, x.agent.after, {
      event: 'user/message',
      data: {
        role: 'user',
        content: [{ type: 'text', text: summary }],
        source: { kind: 'subagent-settled', form: 'notice', summary, stopReason: x.agent.stop || 'completed', senderSessionId: childId },
      },
    });
  }
  if (x.workflow) {
    const runId = `demo-run-${g.runs++}`;
    p.runId = runId;
    yield { event: 'tool-workflow/run-start', data: { runId, name: x.workflow.name } };
    x.workflow.agents.forEach(([label, phase, secs, outcome], seq) => {
      later(g, 0.3 * (seq + 1), { event: 'tool-workflow/agent-start', data: { runId, seq, label, phase, childId: `${runId}-agent-${seq}` } });
      later(g, secs, { event: 'tool-workflow/agent-end', data: { runId, seq, outcome: outcome || 'completed' } });
    });
  }
}

function* playTurn(turn, g) {
  const ti = g.turn++;
  yield { event: 'turn/start', data: { turn: ti } };
  yield { event: 'user/message', data: { turn: ti } };
  yield { event: 'request/header', data: { header: { config: { provider: MODEL.provider, model: MODEL.model, reasoningEffort: 'high' } }, reason: 'initial' } };
  yield { event: 'request/context', data: { ...MODEL } };
  let carry = 1600;
  for (let si = 0; si < turn.steps.length; si++) {
    const st = turn.steps[si];
    yield { event: 'step/start', data: { turn: ti, step: si } };
    // Stream: reasoning first, then visible output.
    for (const [phase, tokens, rate] of [['reasoning', st.r, 62], ['generating', st.o, 54]]) {
      if (!tokens) continue;
      const secs = Math.min(5, Math.max(0.6, tokens / rate));
      const ticks = Math.max(3, Math.round(secs / 0.12));
      for (let k = 0; k < ticks; k++) {
        const tps = rate * (0.82 + 0.36 * Math.abs(Math.sin(k * 1.7 + si)));
        g.streamed += tokens / ticks;
        yield { live: { phase, tps } };
        yield* pause(g, secs / ticks);
      }
    }
    const miss = carry + Math.round(300 + 400 * Math.abs(Math.sin(ti + si)));
    const usage = {
      inputTokens: miss,
      cacheReadTokens: g.ctx,
      cacheWriteTokens: 0,
      outputTokens: st.r + st.o,
      reasoningTokens: st.r,
    };
    g.ctx += miss + st.o;
    yield { live: { phase: 'idle', tps: 0 } };
    yield { event: 'assistant/message', data: { turn: ti, step: si, message: { role: 'assistant' }, usage }, usage };
    const tools = st.tools || [];
    carry = 0;
    if (tools.length) {
      yield { live: { phase: 'tool', tps: 0 } };
      const pending = tools.map(([name, args, secs, fail, extra]) => ({ id: `demo-${ti}-${si}-${g.call++}`, name, args, secs, fail, extra }));
      for (const p of pending) {
        yield { event: 'tool/call', data: { turn: ti, step: si, callId: p.id, name: p.name, arguments: p.args } };
        yield* startExtra(g, p);
        yield* pause(g, 0.08);
      }
      const order = pending.slice().sort((a, b) => a.secs - b.secs);
      let elapsed = 0.08 * pending.length;
      for (const p of order) {
        const w = Math.max(0, p.secs - elapsed);
        if (w > 0) yield* pause(g, w);
        elapsed = Math.max(elapsed, p.secs);
        carry += p.fail ? 260 : 900 + Math.round(2400 * Math.abs(Math.cos(g.call + si)));
        if (p.runId) yield { event: 'tool-workflow/run-end', data: { runId: p.runId, stopReason: 'completed' } };
        yield {
          event: 'tool/result',
          data: {
            turn: ti, step: si,
            message: { toolCallId: p.id, isError: Boolean(p.fail) },
            ...(p.fail ? { error: { name: 'ToolError', code: 'exit-1' } } : {}),
          },
        };
      }
      if (st.compact) g.ctx = Math.round(g.ctx * st.compact);
    }
    yield { event: 'step/end', data: { turn: ti, step: si } };
    yield* pause(g, 0.35);
  }
  yield { event: 'turn/end', data: { turn: ti, reason: { kind: turn.end } } };
  yield { live: { phase: 'idle', tps: 0 } };
}

function* scriptLoop(g) {
  for (;;) {
    for (const turn of SCRIPT) {
      yield* playTurn(turn, g);
      yield* pause(g, 2.8);
      if (g.ctx > 900_000) g.ctx = 420_000;
    }
  }
}

/**
 * createDemo({ onEvents(events), onLive(live), speed }) → { prefill(), start(), stop() }
 * prefill() synchronously returns the events of the first two turns, time-stamped in the past.
 */
export function createDemo({ onEvents, onLive, speed = 1 } = {}) {
  const g = { turn: 0, call: 0, ctx: 380_000, streamed: 0, balance: 52.8, seq: 0, clock: 0, later: [], agents: 0, runs: 0 };
  const price = priceFor(MODEL.provider, MODEL.model);
  const it = scriptLoop(g);
  let timer = null;
  let stopped = true;

  const stamp = (item, time) => {
    g.seq += 1;
    const u = item.usage && normalizeUsage(item.usage);
    if (u) g.balance = Math.max(0, g.balance - usageCost(u, price, isPeak(time)));
    return { type: item.event, seq: g.seq, time, data: item.data };
  };
  const liveOf = (l) => ({ ...l, balance: g.balance, currency: 'CNY', streamed: Math.round(g.streamed) });

  return {
    prefill(turns = 2) {
      const out = [];
      let time = Date.now() - 9 * 60_000;
      let seen = 0;
      while (seen < turns) {
        const { value } = it.next();
        if (value.wait) time += value.wait * 1000 * 3;
        else if (value.event) {
          out.push(stamp(value, time));
          if (value.event === 'turn/end') seen++;
        }
      }
      return out;
    },
    start() {
      if (!stopped) return;
      stopped = false;
      const pump = () => {
        timer = null;
        if (stopped) return;
        const batch = [];
        for (let guard = 0; guard < 200; guard++) {
          const { value } = it.next();
          if (value.wait) {
            if (batch.length) onEvents?.(batch);
            timer = setTimeout(pump, (value.wait * 1000) / speed);
            return;
          }
          if (value.event) batch.push(stamp(value, Date.now()));
          else if (value.live) onLive?.(liveOf(value.live));
        }
        if (batch.length) onEvents?.(batch);
        timer = setTimeout(pump, 50);
      };
      onLive?.(liveOf({ phase: 'idle', tps: 0 }));
      pump();
    },
    stop() {
      stopped = true;
      if (timer) clearTimeout(timer);
      timer = null;
    },
    get balance() {
      return g.balance;
    },
  };
}
