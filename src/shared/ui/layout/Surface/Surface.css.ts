import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

export const root = recipe({
  base: {
    minWidth: 0,
  },

  variants: {
    tone: {
      surface: { background: vars.colors.backgroundSurface },
      primary: { background: vars.colors.backgroundPrimary },
      secondary: { background: vars.colors.backgroundSecondary },
      inverted: { background: vars.colors.backgroundInverted },
      accentPrimary: { background: vars.colors.accentPrimary },
      accentSoft: { background: vars.colors.accentSoft },
    },

    radius: {
      none: { borderRadius: 0 },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
    },

    shadow: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: vars.shadows.sm },
      md: { boxShadow: vars.shadows.md },
      lg: { boxShadow: vars.shadows.lg },
      xl: { boxShadow: vars.shadows.xl },
    },

    border: {
      none: { border: 'none' },
      strong: { border: `1px solid ${vars.colors.borderStrong}` },
      muted: { border: `1px solid ${vars.colors.borderMuted}` },
    },
  },

  defaultVariants: {
    tone: 'surface',
    radius: 'md',
    shadow: 'none',
    border: 'none',
  },
});
