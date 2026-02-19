import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'relative',
});

export const trigger = recipe({
  base: {
    width: '100%',
    minWidth: 0,

    appearance: 'none',
    border: `1px solid ${vars.colors.borderMuted}`,
    borderRadius: vars.radius.md,

    backgroundColor: vars.colors.backgroundSurface,
    color: vars.colors.textPrimary,

    font: 'inherit',
    textAlign: 'left',

    paddingInline: vars.spacing.md,

    selectors: {
      '&::placeholder': {
        color: vars.colors.textMuted,
      },

      '&:focus': {
        outline: 'none',
        borderColor: vars.colors.accentPrimary,
      },

      '&:disabled': {
        opacity: 0.6,
        backgroundColor: vars.colors.backgroundSecondary,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      sm: {
        height: vars.layout.controlHeight.sm,
        fontSize: vars.typography.fontSize.sm,
      },
      md: {
        height: vars.layout.controlHeight.md,
        fontSize: vars.typography.fontSize.md,
      },
      lg: {
        height: vars.layout.controlHeight.lg,
        fontSize: vars.typography.fontSize.md,
      },
    },

    error: {
      true: {
        borderColor: vars.colors.danger,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    error: false,
  },
});

export const picker = style({
  position: 'absolute',
  top: `calc(100% + ${vars.spacing.sm})`,
  zIndex: vars.zIndex.dropdown,

  width: '100%',
});

export const select = style({
  width: '100%',
});

export const cellBtn = recipe({
  base: {
    padding: 0,
  },

  variants: {
    selected: {
      true: {
        backgroundColor: vars.colors.accentSoft,
      },
    },
  },
});
