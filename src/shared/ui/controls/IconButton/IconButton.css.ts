import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

const iconPulseKeyframes = keyframes({
  '0%, 100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.15)' },
});

export const iconPulse = style({
  display: 'inline-flex',
  animation: `${iconPulseKeyframes} 1.2s ease-in-out infinite`,
});

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

    cursor: 'pointer',
    userSelect: 'none',

    borderRadius: vars.radius.md,

    transition:
      'background-color 280ms cubic-bezier(0.22, 1, 0.36, 1), color 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 200ms ease',

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
        background: vars.gradients.accentButton,
        color: vars.colors.textOnAccent,

        selectors: {
          '&:hover:not(:disabled)': {
            filter: 'brightness(0.96)',
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
      sm: {
        width: vars.layout.controlHeight.sm,
        height: vars.layout.controlHeight.sm,
        padding: vars.spacing.sm,
      },

      md: {
        width: vars.layout.controlHeight.md,
        height: vars.layout.controlHeight.md,
        padding: '10px',
      },

      lg: {
        width: vars.layout.controlHeight.lg,
        height: vars.layout.controlHeight.lg,
        padding: vars.spacing.md,
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
    size: 'lg',
  },
});
