import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 'auto',
    zIndex: vars.zIndex.cellProgressBar,

    width: 3,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: vars.radius.full,
    borderBottomRightRadius: vars.radius.full,

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
