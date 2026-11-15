// POST /api/dsh-work-process-3d/balance: the DeepSeek balance that fills the fuel tank.
// Two sources, tried in order:
//   1. the signed-in DeepSeek account (deepseekAccount.getBalance, needs the real DSH version
//      from the client because the Platform gates by client version);
//   2. the DeepSeek API key of the llm-deepseek provider (GET <baseURL>/user/balance).
// The answer carries amounts only; credentials never leave the host.
export const BALANCE_PATH = '/api/dsh-work-process-3d/balance';
export const BALANCE_TTL_MS = 15_000;
const MAX_BODY = 2048;
const API_TIMEOUT_MS = 10_000;
const DEFAULT_BASE_URL = 'https://api.deepseek.com';

const VERSION_RE = /^[0-9A-Za-z][0-9A-Za-z.+_-]{0,63}$/;
const LOCALE_RE = /^[A-Za-z]{2,8}(?:[_-][A-Za-z0-9]{1,8}){0,4}$/;

const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : null);

/** Validate the request body; version may be empty when the host publishes none. */
export function parseBalanceRequest(value) {
  const v = obj(value);
  if (!v) return null;
  const version = v.version === undefined || v.version === null ? '' : v.version;
  if (typeof version !== 'string' || (version && !VERSION_RE.test(version))) return null;
  if (typeof v.locale !== 'string' || !LOCALE_RE.test(v.locale)) return null;
  const tz = v.timezoneOffsetSeconds;
  if (!Number.isInteger(tz) || Math.abs(tz) > 18 * 3600) return null;
  return { version, locale: v.locale, timezoneOffsetSeconds: tz };
}

function amount(v) {
  const x = typeof v === 'string' ? Number(v) : v;
  return typeof x === 'number' && Number.isFinite(x) && x >= 0 ? x : null;
}

function wallet(map, currency) {
  let w = map.get(currency);
  if (!w) {
    w = { currency, total: 0, toppedUp: 0, granted: 0 };
    map.set(currency, w);
  }
  return w;
}

/** deepseekAccount.getBalance() result → { status, wallets }. */
export function fromAccount(result) {
  if (result == null) return { status: 'signed-out', wallets: [] };
  if (result.status !== 'ready') return { status: 'failed', wallets: [] };
  const map = new Map();
  for (const [list, field] of [[result.value, 'toppedUp'], [result.bonusWallets, 'granted']]) {
    if (!Array.isArray(list)) continue;
    for (const item of list) {
      const w = obj(item);
      const v = w && amount(w.balance);
      if (!w || typeof w.currency !== 'string' || !w.currency || v === null) continue;
      const out = wallet(map, w.currency.slice(0, 8));
      out[field] += v;
      out.total += v;
    }
  }
  return { status: 'ready', wallets: [...map.values()] };
}

/** DeepSeek API GET /user/balance body → { status, wallets }. */
export function fromUserBalance(body) {
  const b = obj(body);
  const infos = b && Array.isArray(b.balance_infos) ? b.balance_infos : null;
  if (!infos) return { status: 'failed', wallets: [] };
  const map = new Map();
  for (const item of infos) {
    const w = obj(item);
    if (!w || typeof w.currency !== 'string' || !w.currency) continue;
    const granted = amount(w.granted_balance);
    const toppedUp = amount(w.topped_up_balance);
    const total = amount(w.total_balance);
    if (granted === null && toppedUp === null && total === null) continue;
    const out = wallet(map, w.currency.slice(0, 8));
    out.granted += granted || 0;
    out.toppedUp += toppedUp || 0;
    out.total += granted !== null || toppedUp !== null ? (granted || 0) + (toppedUp || 0) : total;
  }
  return { status: 'ready', wallets: [...map.values()] };
}

/** The llm-deepseek API key settings ({ apiKeyEnv, baseURL }) from the settings service, if any. */
export function apiKeySettings(settings) {
  if (!settings || typeof settings.describe !== 'function') return null;
  let list;
  try {
    list = settings.describe();
  } catch {
    return null;
  }
  if (!Array.isArray(list)) return null;
  let fallback = null;
  for (const entry of list) {
    const e = obj(entry);
    const v = e && obj(e.value);
    if (!v || typeof v.apiKeyEnv !== 'string' || !v.apiKeyEnv) continue;
    if (e.ns === 'llm-deepseek' || e.ns === 'llm-deepseek-api-key') return v;
    fallback = fallback || v;
  }
  return fallback;
}

async function apiKeyBalance(deps) {
  const cfg = apiKeySettings(deps.settings());
  const credentials = deps.credentials();
  if (!cfg || !credentials || typeof credentials.resolve !== 'function') return null;
  let key = '';
  try {
    const r = await credentials.resolve(cfg.apiKeyEnv);
    key = r && typeof r.value === 'string' ? r.value : '';
  } catch {
    return null;
  }
  if (!key) return null;
  const base = typeof cfg.baseURL === 'string' && /^https?:\/\//i.test(cfg.baseURL) ? cfg.baseURL : DEFAULT_BASE_URL;
  try {
    const res = await deps.fetch(`${base.replace(/\/+$/, '')}/user/balance`, {
      headers: { accept: 'application/json', authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });
    if (!res.ok) return { status: 'failed', wallets: [] };
    return fromUserBalance(await res.json());
  } catch {
    return { status: 'failed', wallets: [] };
  }
}

async function accountBalance(deps, meta) {
  const account = deps.account();
  if (!account || typeof account.getBalance !== 'function' || !meta.version) return null;
  try {
    const view = typeof account.getState === 'function' ? account.getState() : null;
    if (view && view.status === 'signed-out') return null;
  } catch {
    // An unreadable state is not a reason to skip the query.
  }
  try {
    const r = fromAccount(await account.getBalance(meta));
    return r.status === 'signed-out' ? null : r;
  } catch {
    return { status: 'failed', wallets: [] };
  }
}

/**
 * Route handler. `deps` are getters so services that appear later are picked up:
 * { account(), settings(), credentials(), fetch }.
 */
export function createBalanceHandler(deps, { now = () => Date.now(), ttl = BALANCE_TTL_MS } = {}) {
  const d = {
    account: () => null,
    settings: () => null,
    credentials: () => null,
    fetch: (...args) => fetch(...args),
    ...deps,
  };
  let cache = null;
  let pending = null;
  const json = (body, status = 200) => Response.json(body, { status, headers: { 'cache-control': 'no-store' } });
  const fail = (status, code, message) => json({ ok: false, error: { code, message } }, status);

  async function query(meta) {
    const fromAcct = await accountBalance(d, meta);
    if (fromAcct && fromAcct.status === 'ready') return { ...fromAcct, source: 'account' };
    const fromKey = await apiKeyBalance(d);
    if (fromKey) return { ...fromKey, source: 'api-key' };
    if (fromAcct) return { ...fromAcct, source: 'account' };
    return { status: 'unavailable', wallets: [], source: null };
  }

  async function load(meta) {
    const key = `${meta.version}|${meta.locale}|${meta.timezoneOffsetSeconds}`;
    if (cache && cache.key === key && now() - cache.at < ttl) return cache.body;
    if (pending && pending.key === key) return pending.promise;
    const promise = query(meta).then((r) => {
      const body = { ok: true, ...r, at: now() };
      cache = { key, at: now(), body };
      return body;
    });
    pending = { key, promise };
    try {
      return await promise;
    } finally {
      if (pending && pending.promise === promise) pending = null;
    }
  }

  return async function handle(request) {
    if (request.method !== 'POST') return fail(405, 'method', 'POST only');
    let body;
    try {
      body = await request.text();
    } catch {
      return fail(400, 'bad-request', 'unreadable body');
    }
    if (body.length > MAX_BODY) return fail(413, 'too-large', 'body too large');
    let value;
    try {
      value = JSON.parse(body);
    } catch {
      return fail(400, 'bad-request', 'body is not JSON');
    }
    const meta = parseBalanceRequest(value);
    if (!meta) return fail(400, 'bad-request', 'expected { version, locale, timezoneOffsetSeconds }');
    try {
      return json(await load(meta));
    } catch {
      return fail(502, 'unavailable', 'balance query failed');
    }
  };
}
