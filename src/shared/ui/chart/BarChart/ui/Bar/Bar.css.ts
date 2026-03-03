import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const wrapper = style({
  position: 'relative',
  zIndex: 2,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',

  height: '100%',
  cursor: 'pointer',
});

export const bar = recipe({
  base: {
    minWidth: 6,
    borderTopLeftRadius: vars.radius.sm,
    borderTopRightRadius: vars.radius.sm,
    transition: 'height 0.25s ease',
  },

  variants: {
    tone: {
      neutral: { backgroundColor: vars.colors.backgroundSurface },
      success: { backgroundColor: vars.colors.success },
      warning: { backgroundColor: vars.colors.warning },
      danger: { backgroundColor: vars.colors.danger },
    },

    opacity: {
      default: { opacity: 1 },
      faded: { opacity: 0.3 },
    },
  },

  defaultVariants: {
    tone: 'neutral',
  },
});
