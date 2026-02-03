import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 0,
  },

  variants: {
    padding: {
      none: { padding: 0 },
      sm: { padding: vars.spacing.sm },
      md: { padding: vars.spacing.md },
      lg: { padding: vars.spacing.lg },
    },
  },

  defaultVariants: {
    padding: 'md',
  },
});
