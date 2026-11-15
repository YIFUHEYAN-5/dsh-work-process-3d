import * as React from 'react';
import { NS, DICTS } from './locale.js';
import { ProcessView } from './view/ProcessView.jsx';

const VIEW_ID = 'work-process-3d';

/** Client half: registers the "3D process" conversation view. */
export default {
  name: 'dsh-work-process-3d',
  inject: ['slots', 'locale'],
  apply(ctx) {
    ctx.effect(() => ctx.locale.register(NS, DICTS), 'dsh-work-process-3d: dictionaries');
    const t = ctx.locale.bind(NS);
    ctx.slots.inject('conversation.view', () =>
      ctx.slots.register(
        {
          name: 'conversation.view',
          id: VIEW_ID,
          // Right after Trajectory (10), so the tab is not the first to move into the overflow menu.
          order: 15,
          locale: NS,
          label: () => t('tab.label'),
        },
        (props) => React.createElement(ProcessView, { ...props, ctx, tBound: t }),
      ),
    );
  },
};
