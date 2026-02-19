import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    margin: 0,
    padding: 0,

    fontFamily: vars.typography.fontFamily.base,
    fontWeight: vars.typography.fontWeight.bold,
    lineHeight: vars.typography.lineHeight.normal,

    color: vars.colors.textPrimary,
  },

  variants: {
    size: {
      xs: { fontSize: vars.typography.fontSize.sm },
      sm: { fontSize: vars.typography.fontSize.md },
      md: { fontSize: vars.typography.fontSize.lg },
      lg: { fontSize: vars.typography.fontSize.xl },
      xl: { fontSize: vars.typography.fontSize['2xl'] },
      '2xl': { fontSize: vars.typography.fontSize['3xl'] },
      '3xl': { fontSize: vars.typography.fontSize.display },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    tone: {
      default: { color: vars.colors.textPrimary },
      muted: { color: vars.colors.textSecondary },
      inverted: { color: vars.colors.textInverted },
    },
  },

  defaultVariants: {
    size: 'md',
    tone: 'default',
  },
});
