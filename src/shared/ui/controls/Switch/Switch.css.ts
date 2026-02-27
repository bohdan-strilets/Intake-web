import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    position: 'relative',

    display: 'inline-flex',
    alignItems: 'center',

    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

export const input = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

export const track = recipe({
  base: {
    position: 'relative',

    width: 44,
    height: 22,

    borderRadius: vars.radius.full,
    transition: 'all 0.2s ease',

    background: vars.colors.backgroundSecondary,
    border: `1px solid ${vars.colors.borderMuted}`,
  },

  variants: {
    checked: {
      true: {
        background: vars.colors.accentPrimary,
        borderColor: vars.colors.accentPrimary,
      },
    },
    invalid: {
      true: {
        borderColor: vars.colors.danger,
      },
    },
  },
});

export const thumb = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    left: 2,
    transform: 'translateY(-50%)',

    width: 18,
    height: 18,

    borderRadius: vars.radius.full,
    background: vars.colors.backgroundSurface,
    boxShadow: vars.shadows.sm,

    transition: 'transform 0.2s ease',
  },

  variants: {
    checked: {
      true: {
        transform: 'translateX(20px) translateY(-50%)',
      },
    },
  },
});
