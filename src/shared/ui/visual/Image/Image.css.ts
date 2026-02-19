import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const wrapper = recipe({
  base: {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
  },

  variants: {
    radius: {
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      full: { borderRadius: vars.radius.full },
    },

    bordered: {
      true: {
        border: `1px solid ${vars.colors.borderMuted}`,
      },
    },

    shadow: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: vars.shadows.sm },
      md: { boxShadow: vars.shadows.md },
      lg: { boxShadow: vars.shadows.lg },
    },
  },

  defaultVariants: {
    radius: 'md',
    shadow: 'none',
    bordered: false,
  },
});

export const image = recipe({
  base: {
    display: 'block',
    width: '100%',
    height: '100%',
  },

  variants: {
    objectFit: {
      cover: { objectFit: 'cover' },
      contain: { objectFit: 'contain' },
    },
  },

  defaultVariants: {
    objectFit: 'cover',
  },
});
