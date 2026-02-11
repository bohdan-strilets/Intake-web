import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    margin: 0,
    padding: 0,

    fontFamily: vars.typography.fontFamily.base,
    color: vars.colors.textPrimary,
  },

  variants: {
    size: {
      sm: { fontSize: vars.typography.fontSize.sm },
      md: { fontSize: vars.typography.fontSize.md },
      lg: { fontSize: vars.typography.fontSize.lg },
    },

    weight: {
      regular: { fontWeight: vars.typography.fontWeight.regular },
      medium: { fontWeight: vars.typography.fontWeight.medium },
      bold: { fontWeight: vars.typography.fontWeight.bold },
    },

    lineHeight: {
      normal: { lineHeight: vars.typography.lineHeight.normal },
      loose: { lineHeight: vars.typography.lineHeight.loose },
      relaxed: { lineHeight: vars.typography.lineHeight.relaxed },
    },

    tone: {
      default: { color: vars.colors.textPrimary },
      secondary: { color: vars.colors.textSecondary },
      inverted: { color: vars.colors.textInverted },
      onAccent: { color: vars.colors.textOnAccent },
      muted: { color: vars.colors.textMuted },
      warning: { color: vars.colors.warning },
      danger: { color: vars.colors.danger },
      success: { color: vars.colors.success },
      info: { color: vars.colors.info },
      accentPrimary: { color: vars.colors.accentPrimary },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },

  defaultVariants: {
    size: 'md',
    tone: 'default',
    align: 'left',
    weight: 'regular',
    lineHeight: 'relaxed',
  },
});
