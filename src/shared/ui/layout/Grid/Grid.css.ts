import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'grid',
    minWidth: 0,
  },

  variants: {
    columns: {
      1: { gridTemplateColumns: 'repeat(1, 1fr)' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' },
      3: { gridTemplateColumns: 'repeat(3, 1fr)' },
      4: { gridTemplateColumns: 'repeat(4, 1fr)' },
      5: { gridTemplateColumns: 'repeat(5, 1fr)' },
      6: { gridTemplateColumns: 'repeat(6, 1fr)' },
      7: { gridTemplateColumns: 'repeat(7, 1fr)' },
    },

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
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      stretch: { alignItems: 'stretch' },
    },
  },

  defaultVariants: {
    columns: 2,
    gap: 'md',
    align: 'stretch',
  },
});
