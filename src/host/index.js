// Host half of the plugin, bundled into dist/host.js (zod included) by scripts/build.mjs.
// It registers the session projection the 3D view reads, and the balance route for the fuel tank.
import { createProjection } from './projection.js';
import { BALANCE_PATH, createBalanceHandler } from './balance.js';

export const name = 'dsh-work-process-3d';
export const inject = ['sessionProjections'];

export async function apply(ctx) {
  let reported = 0;
  await ctx.sessionProjections.register(createProjection({
    onError(err, event) {
      // Report the first few failures only; the event is skipped either way.
      if (reported >= 5) return;
      reported += 1;
      console.warn(`[dsh-work-process-3d] skipped ${event && event.type}: ${(err && err.message) || err}`);
    },
  }));

  // The route needs only `connection`; the balance sources are looked up per request because
  // they are optional (an API-key-only setup has no signed-in account and the reverse).
  const optional = (key) => () => {
    try {
      return ctx.get(key) || null;
    } catch {
      return null;
    }
  };
  ctx.inject(['connection'], (sub) => {
    const connection = sub.get('connection');
    if (!connection || !connection.fetch || typeof connection.fetch.register !== 'function') return;
    const fetch = createBalanceHandler({
      account: optional('deepseekAccount'),
      settings: optional('settings'),
      credentials: optional('credentials'),
    });
    sub.effect(
      () => connection.fetch.register({ path: BALANCE_PATH, methods: ['POST'], requestBody: 'buffered', fetch }),
      'dsh-work-process-3d: balance route',
    );
  });
}
