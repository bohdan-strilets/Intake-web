import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    appearance: 'none',
    border: 'none',
    background: 'transparent',

    font: 'inherit',
    color: 'inherit',
    textAlign: 'center',
    whiteSpace: 'nowrap',

    cursor: 'pointer',
    userSelect: 'none',

    borderRadius: vars.radius.md,

    transition: 'background-color 220ms ease, color 220ms ease',

    selectors: {
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.accentPrimary,
        color: vars.colors.textOnAccent,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.accentSoft,
            color: vars.colors.textPrimary,
          },
        },
      },

      secondary: {
        backgroundColor: vars.colors.backgroundSecondary,
        color: vars.colors.textPrimary,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.backgroundSurface,
          },
        },
      },

      ghost: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.colors.borderMuted}`,
        color: vars.colors.textPrimary,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.backgroundSecondary,
          },
        },
      },
    },

    size: {
      sm: {
        height: vars.layout.controlHeight.sm,
        paddingInline: vars.spacing.md,
        fontSize: vars.typography.fontSize.sm,
      },

      md: {
        height: vars.layout.controlHeight.md,
        paddingInline: vars.spacing['2xl'],
        fontSize: vars.typography.fontSize.md,
      },

      lg: {
        height: vars.layout.controlHeight.lg,
        paddingInline: vars.spacing['3xl'],
      },
    },

    fullWidth: {
      true: { width: '100%' },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
});
