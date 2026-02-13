import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-150% 0' },
  '100%': { backgroundPosition: '150% 0' },
});

export const root = recipe({
  base: {
    background: `linear-gradient(
    90deg,
      ${vars.colors.backgroundSecondary} 30%,
      ${vars.colors.backgroundSurface} 50%,
      ${vars.colors.backgroundSecondary} 70%
  )`,

    backgroundSize: '300% 100%',
    animation: `${shimmer} 2.4s linear infinite`,
  },

  variants: {
    radius: {
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      full: { borderRadius: vars.radius.full },
    },
  },
});
