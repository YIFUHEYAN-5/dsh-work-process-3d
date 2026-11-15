// The slimmer copy of the factory state that the host publishes to the client.
// Same field names as the reducer state (the scene and HUD read either), shorter lists.
export const VIEW_CALLS = 40;
export const VIEW_TURNS = 16;
export const VIEW_TURN_FILES = 12;
export const VIEW_RECENT_PATHS = 8;

/**
 * The newest `max` entries, but a running entry older than those stays (in order) in place of
 * the oldest finished one: the scene keeps animating a call until it ends.
 */
export function tailKeepRunning(list, max) {
  if (list.length <= max) return list;
  const cut = list.length - max;
  const head = list.slice(0, cut).filter((x) => x.status === 'running');
  if (!head.length) return list.slice(cut);
  let drop = head.length;
  const kept = [];
  for (const x of list.slice(cut)) {
    if (drop > 0 && x.status !== 'running') {
      drop -= 1;
      continue;
    }
    kept.push(x);
  }
  return [...head, ...kept].slice(-max);
}

export function toView(s) {
  return {
    provider: s.provider,
    model: s.model,
    effort: s.effort,
    contextWindow: s.contextWindow,
    contextTokens: s.contextTokens,
    totals: s.totals,
    speed: s.speed,
    tools: s.tools,
    files: { count: s.files.count, added: s.files.added, removed: s.files.removed, recent: s.files.paths.slice(-VIEW_RECENT_PATHS) },
    phase: s.phase,
    turnCount: s.turnCount,
    calls: tailKeepRunning(s.calls, VIEW_CALLS),
    turns: (s.turns.length > VIEW_TURNS ? s.turns.slice(-VIEW_TURNS) : s.turns)
      .map((t) => (t.files.length > VIEW_TURN_FILES ? { ...t, files: t.files.slice(-VIEW_TURN_FILES) } : t)),
    agents: s.agents,
    workflows: s.workflows,
    firstAt: s.firstAt,
    lastAt: s.lastAt,
  };
}
