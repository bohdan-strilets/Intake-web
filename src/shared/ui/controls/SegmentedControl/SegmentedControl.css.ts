import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  padding: vars.spacing.xs,

  backgroundColor: vars.colors.backgroundSecondary,
  borderRadius: vars.radius.md,
});

export const segment = recipe({
  base: {
    flex: 1,

    background: 'transparent',
    borderRadius: vars.radius.md,

    padding: `${vars.spacing.sm} 0`,

    cursor: 'pointer',
    transition: 'background-color 150ms ease',
  },

  variants: {
    active: {
      true: {
        backgroundImage: vars.gradients.surfaceSoft,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        fontWeight: vars.typography.fontWeight.medium,
      },
    },
  },
});
