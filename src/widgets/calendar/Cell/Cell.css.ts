import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    position: 'relative',
    overflow: 'hidden',

    width: '100%',
    height: 100,
    padding: 0,

    borderRadius: vars.radius.sm,
  },

  variants: {
    isToday: {
      true: {
        boxShadow: `inset 0 0 0 2px ${vars.colors.borderStrong}`,
      },
    },
  },
});

export const progressBar = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: vars.zIndex.cellProgressBar,

    width: 3,
    borderRadius: vars.radius.full,

    backgroundColor: vars.colors.successSoft,
    transition: 'height 200ms ease',
  },

  variants: {
    isOver: {
      true: {
        backgroundColor: vars.colors.warningSoft,
      },
    },
  },
});

export const content = style({
  position: 'relative',
  zIndex: vars.zIndex.cellContent,
  width: '100%',
});
