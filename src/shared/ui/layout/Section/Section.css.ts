import { recipe } from '@vanilla-extract/recipes';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    minWidth: 0,
  },

  variants: {
    tone: {
      primary: { background: vars.colors.backgroundPrimary },
      secondary: { background: vars.colors.backgroundSecondary },
      surface: { background: vars.colors.backgroundSurface },
      gradient: {
        background: vars.gradients.surfaceSoft,
      },
      gradientSoft: {
        background: vars.gradients.accentSoft,
      },
    },

    padding: {
      none: { paddingTop: 0, paddingBottom: 0 },
      sm: {
        paddingTop: vars.spacing.xl,
        paddingBottom: vars.spacing.xl,
      },
      md: {
        paddingTop: vars.spacing['2xl'],
        paddingBottom: vars.spacing['2xl'],
      },
      lg: {
        paddingTop: vars.spacing['3xl'],
        paddingBottom: vars.spacing['3xl'],
      },
      xl: {
        paddingTop: vars.spacing['3xl'],
        paddingBottom: vars.spacing['3xl'],
        '@media': {
          [`screen and (min-width: ${breakpoints.md}px)`]: {
            paddingTop: '64px',
            paddingBottom: '64px',
          },
          [`screen and (min-width: ${breakpoints.lg}px)`]: {
            paddingTop: '80px',
            paddingBottom: '80px',
          },
        },
      },
    },
  },

  defaultVariants: {
    tone: 'surface',
    padding: 'md',
  },
});
