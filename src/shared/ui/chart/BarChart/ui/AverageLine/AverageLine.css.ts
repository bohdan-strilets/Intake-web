import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const line = recipe({
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    opacity: 1,
    pointerEvents: 'none',
  },
  variants: {
    variant: {
      accentSoft: { backgroundColor: vars.colors.accentPrimary },
      warningSoft: { backgroundColor: vars.colors.warning },
    },
  },
  defaultVariants: {
    variant: 'accentSoft',
  },
});
