import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 0,
  },

  variants: {
    paddingInline: {
      none: { paddingInline: 0 },
      sm: { paddingInline: vars.spacing.sm },
      md: { paddingInline: vars.spacing.md },
      lg: { paddingInline: vars.spacing.lg },
    },
  },

  defaultVariants: {
    paddingInline: 'md',
  },
});
