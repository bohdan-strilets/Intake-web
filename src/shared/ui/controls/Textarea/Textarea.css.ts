import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const textarea = recipe({
  base: {
    maxWidth: '100%',
    minWidth: 0,

    resize: 'none',
    appearance: 'none',

    border: `1px solid ${vars.colors.borderMuted}`,
    borderRadius: vars.radius.md,

    backgroundColor: vars.colors.backgroundSurface,
    color: vars.colors.textPrimary,

    font: 'inherit',
    lineHeight: vars.typography.lineHeight.relaxed,

    padding: vars.spacing.md,

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
        fontSize: vars.typography.fontSize.sm,
        minHeight: 64,
      },
      md: {
        fontSize: vars.typography.fontSize.md,
        minHeight: 96,
      },
      lg: {
        fontSize: vars.typography.fontSize.md,
        minHeight: 128,
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
