import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: vars.colors.infoSoft,
    borderRadius: vars.radius.md,
    boxShadow: vars.shadows.sm,
  },

  variants: {
    size: {
      sm: {
        width: 42,
        height: 42,
      },
      md: {
        width: 58,
        height: 58,
      },
      lg: {
        width: 72,
        height: 72,
      },
    },

    background: {
      primary: { backgroundColor: vars.colors.textPrimary },
      secondary: { backgroundColor: vars.colors.textSecondary },
      inverted: { backgroundColor: vars.colors.textInverted },
      muted: { backgroundColor: vars.colors.textMuted },
      danger: { backgroundColor: vars.colors.danger },
      dangerSoft: { backgroundColor: vars.colors.dangerSoft },
      warning: { backgroundColor: vars.colors.warning },
      warningSoft: { backgroundColor: vars.colors.warningSoft },
      success: { backgroundColor: vars.colors.success },
      successSoft: { backgroundColor: vars.colors.successSoft },
      info: { backgroundColor: vars.colors.info },
      infoSoft: { backgroundColor: vars.colors.infoSoft },
      accentPrimary: { backgroundColor: vars.colors.accentPrimary },
      accentSoft: { backgroundColor: vars.colors.accentSoft },
      accentOn: { backgroundColor: vars.colors.textOnAccent },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
