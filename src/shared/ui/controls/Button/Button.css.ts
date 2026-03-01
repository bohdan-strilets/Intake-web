import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    appearance: 'none',
    background: 'transparent',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',

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
        color: vars.colors.textPrimary,
        borderColor: vars.colors.borderMuted,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.backgroundSecondary,
          },
        },
      },

      ghostMuted: {
        backgroundColor: 'transparent',
        color: vars.colors.textMuted,
        borderColor: 'transparent',

        selectors: {
          '&:hover:not(:disabled)': {
            color: vars.colors.textSecondary,
          },
        },
      },

      danger: {
        backgroundColor: vars.colors.dangerSoft,
        color: vars.colors.danger,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.danger,
            color: vars.colors.textPrimary,
          },
        },
      },

      success: {
        backgroundColor: vars.colors.successSoft,
        color: vars.colors.success,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.success,
            color: vars.colors.textPrimary,
          },
        },
      },

      info: {
        backgroundColor: vars.colors.infoSoft,
        color: vars.colors.info,

        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.info,
            color: vars.colors.textPrimary,
          },
        },
      },
    },

    size: {
      xs: {
        height: 'auto',
        minHeight: vars.layout.controlHeight.sm,
        paddingInline: vars.spacing.sm,
        paddingBlock: vars.spacing.xs,
        fontSize: vars.typography.fontSize.xs,
      },

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
