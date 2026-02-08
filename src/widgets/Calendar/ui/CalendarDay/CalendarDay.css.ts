import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    width: '100%',
    padding: 0,

    boxShadow: vars.shadows.sm,
  },

  variants: {
    isToday: {
      true: {
        backgroundColor: vars.colors.accentSoft,
      },
    },
  },
});
