import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    flexShrink: 0,
  },

  variants: {
    direction: {
      vertical: {
        width: '100%',
      },
      horizontal: {
        height: '100%',
      },
    },

    size: {
      xs: { flexBasis: vars.spacing.xs },
      sm: { flexBasis: vars.spacing.sm },
      md: { flexBasis: vars.spacing.md },
      lg: { flexBasis: vars.spacing.lg },
      xl: { flexBasis: vars.spacing.xl },
      '2xl': { flexBasis: vars.spacing['2xl'] },
      '3xl': { flexBasis: vars.spacing['3xl'] },
    },
  },

  defaultVariants: {
    direction: 'vertical',
    size: 'md',
  },
});
