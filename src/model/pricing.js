// DeepSeek official price table, CNY per 1M tokens, as [off-peak, peak].
// Source: https://api-docs.deepseek.com/zh-cn/quick_start/pricing
export const PRICE_TABLE = {
  'deepseek-flash': { id: 'deepseek-flash', hit: [0.02, 0.04], miss: [1, 2], output: [4, 8] },
  'deepseek-v4-pro': { id: 'deepseek-v4-pro', hit: [0.15, 0.3], miss: [4.5, 9], output: [13.5, 27] },
};

/** Resolve the price row for a provider/model pair, or null when the call is not billed by DeepSeek. */
export function priceFor(provider, model) {
  const prov = String(provider || '').toLowerCase();
  const id = String(model || '').toLowerCase();
  if (prov && !prov.includes('deepseek')) return null;
  if (!id) return prov ? PRICE_TABLE['deepseek-flash'] : null;
  if (id.includes('pro')) return PRICE_TABLE['deepseek-v4-pro'];
  if (id.includes('flash') || id.includes('chat') || id.includes('reasoner') || id.includes('deepseek')) {
    return PRICE_TABLE['deepseek-flash'];
  }
  return null;
}

/**
 * Peak hours are Beijing time Monday–Friday 09:00–12:00 and 14:00–18:00
 * (UTC 01:00–04:00 and 06:00–10:00 on the same weekday). Statutory holidays are not modelled.
 */
export function isPeak(ms) {
  const d = new Date(ms);
  const day = d.getUTCDay();
  if (day === 0 || day === 6) return false;
  const h = d.getUTCHours();
  return (h >= 1 && h < 4) || (h >= 6 && h < 10);
}

function n(v) {
  return typeof v === 'number' && Number.isFinite(v) && v > 0 ? v : 0;
}

/** Normalise a DSH TokenUsage: inputTokens is the uncached (cache-miss) part of the prompt. */
export function normalizeUsage(usage) {
  if (!usage || typeof usage !== 'object') return null;
  const u = {
    miss: n(usage.inputTokens),
    hit: n(usage.cacheReadTokens),
    write: n(usage.cacheWriteTokens),
    output: n(usage.outputTokens),
    reasoning: n(usage.reasoningTokens),
  };
  if (u.miss + u.hit + u.write + u.output === 0) return null;
  return u;
}

/** Cost in CNY of one normalised usage record. */
export function usageCost(u, price, peak) {
  if (!price || !u) return 0;
  const k = peak ? 1 : 0;
  return ((u.miss + u.write) * price.miss[k] + u.hit * price.hit[k] + u.output * price.output[k]) / 1e6;
}

/** CNY saved by cache hits compared with paying the cache-miss price. */
export function cacheSavings(u, price, peak) {
  if (!price || !u) return 0;
  const k = peak ? 1 : 0;
  return (u.hit * (price.miss[k] - price.hit[k])) / 1e6;
}

/** Tokens a balance buys at the blended price of the current model (rough, for the fuel gauge). */
export function affordableTokens(balance, price, peak) {
  if (!price || !(balance > 0)) return 0;
  const k = peak ? 1 : 0;
  // Typical agent traffic: ~80% cache hits, 15% misses, 5% output.
  const blended = 0.8 * price.hit[k] + 0.15 * price.miss[k] + 0.05 * price.output[k];
  return Math.floor((balance / blended) * 1e6);
}
