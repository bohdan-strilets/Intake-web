import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    borderRadius: vars.radius.lg,
    backgroundColor: vars.colors.accentSoft,
    color: vars.colors.textOnAccent,
    fontFamily: vars.typography.fontFamily.base,
    fontWeight: vars.typography.fontWeight.bold,
  },
  variants: {
    size: {
      sm: {
        width: 32,
        height: 32,
        fontSize: vars.typography.fontSize.sm,
      },
      md: {
        width: 48,
        height: 48,
        fontSize: vars.typography.fontSize.lg,
      },
      lg: {
        width: 56,
        height: 56,
        fontSize: vars.typography.fontSize.xl,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
