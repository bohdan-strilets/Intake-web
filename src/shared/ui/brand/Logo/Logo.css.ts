import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'block',
    userSelect: 'none',
  },

  variants: {
    size: {
      sm: {
        width: 32,
        height: 32,
      },
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 64,
        height: 64,
      },
      xl: {
        width: 96,
        height: 96,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
});
