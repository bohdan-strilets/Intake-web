import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {},

  variants: {
    color: {
      primary: { color: vars.colors.textPrimary },
      secondary: { color: vars.colors.textSecondary },
      inverted: { color: vars.colors.textInverted },
      muted: { color: vars.colors.textMuted },
      danger: { color: vars.colors.danger },
      dangerSoft: { color: vars.colors.dangerSoft },
      warning: { color: vars.colors.warning },
      warningSoft: { color: vars.colors.warningSoft },
      success: { color: vars.colors.success },
      successSoft: { color: vars.colors.successSoft },
      info: { color: vars.colors.info },
      infoSoft: { color: vars.colors.infoSoft },
      accentPrimary: { color: vars.colors.accentPrimary },
      accentSoft: { color: vars.colors.accentSoft },
    },

    size: {
      sm: {
        width: vars.layout.iconSize.sm,
        height: vars.layout.iconSize.sm,
      },
      md: {
        width: vars.layout.iconSize.md,
        height: vars.layout.iconSize.md,
      },
      lg: {
        width: vars.layout.iconSize.lg,
        height: vars.layout.iconSize.lg,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
