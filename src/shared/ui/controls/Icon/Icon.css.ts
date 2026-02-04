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
        width: '16px',
        height: '16px',
      },
      md: {
        width: '20px',
        height: '20px',
      },
      lg: {
        width: '24px',
        height: '24px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
