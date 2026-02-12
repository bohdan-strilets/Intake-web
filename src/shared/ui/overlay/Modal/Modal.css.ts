import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const container = recipe({
  base: {
    background: vars.colors.backgroundSurface,
    boxShadow: vars.shadows.lg,
    overflow: 'auto',
    maxHeight: '90vh',
  },

  variants: {
    variant: {
      sheet: {
        alignSelf: 'flex-end',

        width: '100%',
        padding: vars.spacing.lg,
        paddingBottom: `calc(${vars.spacing.lg} + env(safe-area-inset-bottom))`,

        borderTopLeftRadius: vars.radius.lg,
        borderTopRightRadius: vars.radius.lg,
      },

      centered: {
        width: '100%',
        maxWidth: 480,
        padding: vars.spacing.xl,
        margin: 'auto',

        borderRadius: vars.radius.lg,
      },
    },
  },

  defaultVariants: {
    variant: 'sheet',
  },
});
