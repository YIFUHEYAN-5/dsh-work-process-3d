/** Small formatting helpers shared by the HUD and the 3D readouts. */

export function formatTokens(n) {
  const v = Math.max(0, Number(n) || 0);
  if (v >= 1e9) return `${(v / 1e9).toFixed(v >= 1e10 ? 0 : 1)}B`;
  if (v >= 1e6) return `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1)}M`;
  if (v >= 1e3) return `${(v / 1e3).toFixed(v >= 1e4 ? 0 : 1)}K`;
  return String(Math.round(v));
}

export function formatMoney(v, currency = 'CNY') {
  const sym = currency === 'USD' ? '$' : '¥';
  const n = Number(v) || 0;
  const digits = Math.abs(n) >= 100 ? 1 : Math.abs(n) >= 1 ? 2 : Math.abs(n) >= 0.01 ? 3 : 4;
  return `${sym}${n.toFixed(digits)}`;
}

/** Percent with no misleading rounding: 0.996 → "99.6%" (not "100%"), 0.004 → "<1%". */
export function formatPct(r) {
  const v = Math.max(0, Number(r) || 0);
  const p = Math.round(v * 100);
  if (p >= 100 && v < 1) return `${(Math.floor(v * 1000) / 10).toFixed(1)}%`;
  if (p <= 0 && v > 0) return '<1%';
  return `${p}%`;
}

export function formatDuration(ms) {
  const s = Math.max(0, Math.round((Number(ms) || 0) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ${String(s % 60).padStart(2, '0')}s`;
  return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`;
}

/** Replace `{name}` placeholders in a translated string. */
export function fill(template, params = {}) {
  return String(template).replace(/\{(\w+)\}/g, (m, k) => (k in params ? String(params[k]) : m));
}
