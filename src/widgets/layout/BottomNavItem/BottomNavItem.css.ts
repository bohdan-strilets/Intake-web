import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const navLink = recipe({
  base: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    textDecoration: 'none',

    width: '100%',
    height: '62px',
    minHeight: '56px',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: vars.colors.accentSoft,
        boxShadow: vars.shadows.sm,
      },
    },
  },
});
