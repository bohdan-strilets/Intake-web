import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: vars.zIndex.cellProgressBar,

    width: 3,

    borderRadius: vars.radius.full,
    backgroundColor: vars.colors.successSoft,
  },

  variants: {
    isOver: {
      true: {
        backgroundColor: vars.colors.warningSoft,
      },
    },
  },
});
