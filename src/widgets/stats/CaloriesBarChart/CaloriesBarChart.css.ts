import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const legendRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const legendSwatch = recipe({
  base: {
    width: 24,
    height: 2,
  },
  variants: {
    variant: {
      goal: {
        backgroundColor: vars.colors.accentSoft,
        borderRadius: vars.radius.sm,
      },
      maintenance: {
        backgroundColor: vars.colors.warningSoft,
        borderRadius: vars.radius.sm,
      },
    },
  },
});
