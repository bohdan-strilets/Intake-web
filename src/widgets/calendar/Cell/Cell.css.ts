import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',

    width: '100%',
    minWidth: 0,
    height: 100,
    padding: 0,

    appearance: 'none',
    background: 'transparent',
    border: `1px solid ${vars.colors.borderMuted}`,
    borderRadius: vars.radius.sm,

    font: 'inherit',
    color: vars.colors.textPrimary,
    cursor: 'pointer',
    userSelect: 'none',

    transition:
      'background-color 250ms cubic-bezier(0.22, 1, 0.36, 1), color 250ms cubic-bezier(0.22, 1, 0.36, 1)',

    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.colors.backgroundSecondary,
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
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
  padding: vars.spacing.xs,
  boxSizing: 'border-box',
});
