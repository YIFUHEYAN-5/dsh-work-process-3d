// Looping demo driver: emits DSH-shaped session events and live stream samples so the
// factory runs without a real session. Used by the M0 style prototype.
import { priceFor, isPeak, normalizeUsage, usageCost } from './pricing.js';

const lines = (n, tag) => Array.from({ length: n }, (_, i) => `${tag} ${i}`).join('\n');

// A made-up project ("weather-board", a small forecast dashboard) so nothing in the
// demo can be mistaken for the user's own files, commands or failures.
// [name, args, seconds, fail?]
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
        ['subagent', { description: 'Review chart accessibility' }, 6.0],
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
        yield { wait: secs / ticks };
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
      const pending = tools.map(([name, args, secs, fail]) => ({ id: `demo-${ti}-${si}-${g.call++}`, name, args, secs, fail }));
      for (const p of pending) {
        yield { event: 'tool/call', data: { turn: ti, step: si, callId: p.id, name: p.name, arguments: p.args } };
        yield { wait: 0.08 };
      }
      const order = pending.slice().sort((a, b) => a.secs - b.secs);
      let elapsed = 0.08 * pending.length;
      for (const p of order) {
        const w = Math.max(0, p.secs - elapsed);
        if (w > 0) yield { wait: w };
        elapsed = Math.max(elapsed, p.secs);
        carry += p.fail ? 260 : 900 + Math.round(2400 * Math.abs(Math.cos(g.call + si)));
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
    yield { wait: 0.35 };
  }
  yield { event: 'turn/end', data: { turn: ti, reason: { kind: turn.end } } };
  yield { live: { phase: 'idle', tps: 0 } };
}

function* scriptLoop(g) {
  for (;;) {
    for (const turn of SCRIPT) {
      yield* playTurn(turn, g);
      yield { wait: 2.8 };
      if (g.ctx > 900_000) g.ctx = 420_000;
    }
  }
}

/**
 * createDemo({ onEvents(events), onLive(live), speed }) → { prefill(), start(), stop() }
 * prefill() synchronously returns the events of the first two turns, time-stamped in the past.
 */
export function createDemo({ onEvents, onLive, speed = 1 } = {}) {
  const g = { turn: 0, call: 0, ctx: 380_000, streamed: 0, balance: 52.8, seq: 0 };
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
