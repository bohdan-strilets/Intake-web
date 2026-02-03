import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    width: '100%',
    height: 1,
    backgroundColor: vars.colors.borderMuted,
    flexShrink: 0,
  },

  variants: {
    spacing: {
      none: { marginBlock: 0 },
      sm: { marginBlock: vars.spacing.sm },
      md: { marginBlock: vars.spacing.md },
      lg: { marginBlock: vars.spacing.lg },
    },
  },

  defaultVariants: {
    spacing: 'md',
  },
});
