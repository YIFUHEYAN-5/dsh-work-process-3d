/**
 * Live session data for the 3D view. Nothing here touches React or the DOM (apart from an
 * optional `window` lookup), so the tests run it directly.
 *
 * - estimateTokens(text): DeepSeek's published rule of thumb (one CJK character ≈ 0.6 token,
 *   one other character ≈ 0.3 token) for text that is still streaming and has no usage yet.
 * - createStreamMeter(): turns successive chat partials (the assistant message being streamed)
 *   into a phase and a tokens-per-second rate over a sliding window.
 * - withContext(view, pressure): the projection view with DSH's own context pressure, which
 *   also accounts for compaction.
 * - parseBalance(body) / fetchBalance(): the host balance route as fuel readout values.
 * - bootVersion(): the running DSH release, sent along with balance queries.
 */

/** Host route registered by src/host/balance.js (the tests check that both agree). */
export const BALANCE_ROUTE = '/api/dsh-work-process-3d/balance';
export const STREAM_WINDOW_MS = 2000;
const MIN_SPAN_MS = 500;

const isWide = (c) =>
  (c >= 0x2e80 && c <= 0x9fff) || (c >= 0xac00 && c <= 0xd7af) || (c >= 0xf900 && c <= 0xfaff) || (c >= 0xff00 && c <= 0xffef);

/** Rough token count of streamed text; whitespace is ignored because it mostly merges into tokens. */
export function estimateTokens(text) {
  if (typeof text !== 'string' || !text) return 0;
  let wide = 0;
  let other = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c <= 0x20) continue;
    if (c >= 0xd800 && c <= 0xdbff) {
      // Astral plane (CJK extensions, emoji): one wide character in two code units.
      wide++;
      i++;
    } else if (isWide(c)) wide++;
    else other++;
  }
  return wide * 0.6 + other * 0.3;
}

const blockText = (b) => (!b ? null : b.kind === 'tool-call' ? b.argsRaw : b.kind === 'text' || b.kind === 'reasoning' ? b.text : null);

/**
 * Feed it every chat partial ({ turn, step, blocks } or null) with the time it arrived;
 * `tick(now)` lets the rate fall while the stream stalls. Both return { phase, tps }, where
 * phase is 'reasoning' or 'generating' while text arrives and 'idle' otherwise (the session
 * model's own phase then applies).
 */
export function createStreamMeter({ windowMs = STREAM_WINDOW_MS } = {}) {
  let key = '';
  let seen = [];
  let start = 0;
  let phase = 'idle';
  const samples = [];
  let total = 0;

  function clear() {
    key = '';
    seen = [];
    start = 0;
    phase = 'idle';
    samples.length = 0;
    total = 0;
  }

  function rate(now) {
    while (samples.length && now - samples[0][0] > windowMs) total -= samples.shift()[1];
    if (!samples.length) {
      total = 0;
      return 0;
    }
    const span = Math.max(MIN_SPAN_MS, Math.min(windowMs, now - start));
    return (total * 1000) / span;
  }

  return {
    push(partial, now) {
      const blocks = partial && Array.isArray(partial.blocks) ? partial.blocks : null;
      if (!blocks) {
        clear();
        return { phase, tps: 0 };
      }
      const k = `${partial.turn}:${partial.step}`;
      if (k !== key) {
        clear();
        key = k;
      }
      let added = 0;
      for (let i = 0; i < blocks.length; i++) {
        const str = blockText(blocks[i]);
        if (typeof str !== 'string') continue;
        const from = seen[i] || 0;
        if (str.length > from) added += estimateTokens(str.slice(from));
        seen[i] = str.length;
      }
      if (added > 0) {
        if (!samples.length && !start) start = now;
        samples.push([now, added]);
        total += added;
      }
      const last = blocks.length ? blocks[blocks.length - 1] : null;
      phase = !last || blockText(last) == null ? 'idle' : last.kind === 'reasoning' ? 'reasoning' : 'generating';
      return { phase, tps: rate(now) };
    },
    tick(now) {
      return { phase, tps: key ? rate(now) : 0 };
    },
    reset: clear,
  };
}

const num = (v) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : null);

/** The projection view, with DSH's context pressure (which knows about compaction) when present. */
export function withContext(view, pressure) {
  if (!view) return null;
  if (!pressure || typeof pressure !== 'object') return view;
  const projected = num(pressure.projectedTokens);
  const tokens = projected != null ? projected : num(pressure.pressureTokens);
  const window = num(pressure.contextWindow);
  if (tokens == null && !window) return view;
  return {
    ...view,
    contextTokens: tokens != null ? tokens : view.contextTokens,
    contextWindow: window || view.contextWindow,
  };
}

const NO_BALANCE = { balance: null, currency: 'CNY', toppedUp: null, granted: null, source: null };
const STATUSES = new Set(['ready', 'failed', 'signed-out', 'unavailable']);

/** Reply of the host balance route → { status, balance, currency, toppedUp, granted, source }. */
export function parseBalance(body) {
  if (!body || body.ok !== true) return { status: 'failed', ...NO_BALANCE };
  const status = STATUSES.has(body.status) ? body.status : 'failed';
  const wallets = Array.isArray(body.wallets) ? body.wallets.filter((w) => w && typeof w.currency === 'string') : [];
  const wallet = wallets.find((w) => w.currency === 'CNY') || wallets[0];
  if (status !== 'ready' || !wallet || num(wallet.total) == null) {
    return { status: status === 'ready' ? 'unavailable' : status, ...NO_BALANCE };
  }
  return {
    status: 'ready',
    balance: wallet.total,
    currency: wallet.currency,
    toppedUp: num(wallet.toppedUp),
    granted: num(wallet.granted),
    source: body.source === 'account' || body.source === 'api-key' ? body.source : null,
  };
}

/** The DSH release the page was served by, or '' when the Host publishes none. */
export function bootVersion(win = typeof window !== 'undefined' ? window : undefined) {
  const boot = win && win.__DSH_BOOT__;
  const v = boot && boot.release && boot.release.version;
  return typeof v === 'string' ? v : '';
}

/** Ask the host for the balance. Resolves to parseBalance()'s shape; rejects only when aborted. */
export async function fetchBalance({ lang = 'en', version = bootVersion(), fetchImpl, signal } = {}) {
  const doFetch = fetchImpl || (typeof fetch === 'function' ? fetch : null);
  if (!doFetch) return { status: 'unavailable', ...NO_BALANCE };
  const body = {
    version,
    locale: lang === 'zh' ? 'zh-CN' : 'en-US',
    timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60,
  };
  let res;
  try {
    res = await doFetch(BALANCE_ROUTE, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'same-origin',
      signal,
    });
  } catch (err) {
    if (signal && signal.aborted) throw err;
    return { status: 'failed', ...NO_BALANCE };
  }
  // No route: the plugin's Host part is not running (older DSH, or not restarted yet).
  if (res.status === 404) return { status: 'unavailable', ...NO_BALANCE };
  let json = null;
  try {
    json = await res.json();
  } catch {
    json = null;
  }
  return parseBalance(json);
}
