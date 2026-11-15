// Host session projection: DSH folds every session's event log through the shared reducer
// (src/model/reducer.js) and publishes toView(state) to the client, which reads it with
// props.useProjection('workProcess3d'). The schemas list every field: z.object drops keys it
// does not know, and the projection cache restores checkpoints through stateSchema.
import { z } from 'zod';
import { initialState, reduce } from '../model/reducer.js';
import { toView } from '../model/view.js';

export const PROJECTION_KEY = 'workProcess3d';
// Bump when a state field or the fold semantics change; stale checkpoints are then discarded.
export const STATE_VERSION = 1;

const n = z.number();
const str = z.string();

const totals = z.object({
  miss: n, hit: n, write: n, output: n, reasoning: n,
  requests: n, cost: n, costPeak: n, costOffPeak: n, savings: n, unpriced: n,
});
const sample = z.object({
  turn: n, step: n, no: n,
  miss: n, hit: n, write: n, output: n, reasoning: n,
  cost: n, peak: z.boolean(), savings: n, priced: z.boolean(),
});
const speed = z.object({ last: n, decodeTokens: n, decodeMs: n });
const tools = z.object({ calls: n, errors: n, running: n, byKind: z.record(str, n) });
const change = z.object({ path: str, added: n, removed: n });
const call = z.object({
  id: str, name: str, kind: str, label: str, turn: n,
  startedAt: n, endedAt: n, status: str, change: change.nullable(),
});
const turn = z.object({
  no: n, index: n, status: str, startedAt: n, endedAt: n,
  miss: n, hit: n, write: n, output: n, reasoning: n, cost: n,
  requests: n, calls: n, errors: n, files: z.array(change), fileCount: n, added: n, removed: n,
});
const agent = z.object({
  id: str, name: str, label: str, kind: str, mode: str, runId: str, seq: n, phase: str,
  status: str, startedAt: n, endedAt: n, turn: n,
});
const workflow = z.object({
  runId: str, name: str, status: str, startedAt: n, endedAt: n,
  agents: n, done: n, failed: n, phase: str,
});

const common = {
  provider: str,
  model: str,
  effort: str,
  contextWindow: n,
  contextTokens: n,
  totals,
  speed,
  tools,
  phase: str,
  turnCount: n,
  calls: z.array(call),
  turns: z.array(turn),
  agents: z.array(agent),
  workflows: z.array(workflow),
  firstAt: n,
  lastAt: n,
};

export const stateSchema = z.object({
  ...common,
  sample: sample.nullable(),
  files: z.object({ count: n, added: n, removed: n, paths: z.array(str) }),
});

export const viewSchema = z.object({
  ...common,
  files: z.object({ count: n, added: n, removed: n, recent: z.array(str) }),
});

/**
 * The projection definition for ctx.sessionProjections.register(). `onError` hears about an
 * event the reducer could not fold; the event is then skipped instead of breaking the unit.
 */
export function createProjection({ onError } = {}) {
  const views = new WeakMap();
  return {
    key: PROJECTION_KEY,
    stateVersion: STATE_VERSION,
    stateSchema,
    init: () => initialState(),
    apply(state, event) {
      try {
        return reduce(state, event);
      } catch (err) {
        if (onError) onError(err, event);
        return state;
      }
    },
    wire: {
      viewSchema,
      summary: false,
      // Same state, same view object: an unchanged view is not published again.
      view(state) {
        let v = views.get(state);
        if (!v) {
          v = toView(state);
          views.set(state, v);
        }
        return v;
      },
    },
  };
}
