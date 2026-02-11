import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const track = style({
  height: 8,
  width: '100%',
  backgroundColor: vars.colors.backgroundSecondary,
  borderRadius: vars.radius.full,
  overflow: 'hidden',
});

export const bar = recipe({
  base: {
    height: '100%',
    borderRadius: vars.radius.full,
    transition: 'width 0.2s ease',
  },

  variants: {
    tone: {
      normal: {
        backgroundColor: vars.colors.accentPrimary,
      },
      over: {
        backgroundColor: vars.colors.warning,
      },
      success: {
        backgroundColor: vars.colors.success,
      },
    },
  },

  defaultVariants: {
    tone: 'normal',
  },
});
