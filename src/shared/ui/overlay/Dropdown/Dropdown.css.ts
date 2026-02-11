import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const container = style({
  position: 'relative',
  display: 'inline-block',
});

export const triggerButton = style({
  padding: vars.spacing.xs,
  borderRadius: vars.radius.sm,
});

export const menu = recipe({
  base: {
    position: 'absolute',
    top: '100%',
    zIndex: vars.zIndex.dropdown,

    marginTop: vars.spacing.sm,
    minWidth: 180,

    background: vars.colors.backgroundSurface,
    borderRadius: vars.radius.md,
    boxShadow: vars.shadows.md,
    border: `1px solid ${vars.colors.borderMuted}`,

    overflow: 'hidden',
  },

  variants: {
    align: {
      left: { left: 0 },
      right: { right: 0 },
    },
  },
});

export const itemButton = recipe({
  base: {
    width: '100%',
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,

    background: 'transparent',
    border: 'none',

    textAlign: 'left',
    fontSize: vars.typography.fontSize.sm,

    cursor: 'pointer',
    transition: 'background 0.2s ease',

    selectors: {
      '&:hover:not(:disabled)': {
        background: vars.colors.backgroundSecondary,
      },
    },
  },

  variants: {
    danger: {
      true: {
        color: vars.colors.danger,
      },
      false: {
        color: vars.colors.textPrimary,
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },

    active: {
      true: {
        background: vars.colors.backgroundSecondary,
      },
    },
  },
});
