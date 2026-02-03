import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },

  variants: {
    gap: {
      none: { gap: 0 },
      xs: { gap: vars.spacing.xs },
      sm: { gap: vars.spacing.sm },
      md: { gap: vars.spacing.md },
      lg: { gap: vars.spacing.lg },
      xl: { gap: vars.spacing.xl },
      '2xl': { gap: vars.spacing['2xl'] },
      '3xl': { gap: vars.spacing['3xl'] },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
  },

  defaultVariants: {
    gap: 'none',
    align: 'stretch',
    justify: 'start',
  },
});
