import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles/contract';

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

export const root = recipe({
  base: {
    display: 'inline-block',
    flexShrink: 0,

    borderRadius: '50%',
    border: `2px solid ${vars.colors.borderMuted}`,

    animation: `${spin} 0.8s linear infinite`,
  },

  variants: {
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

    color: {
      muted: { borderTopColor: vars.colors.textMuted },
      secondary: { borderTopColor: vars.colors.textSecondary },
      inverted: { borderTopColor: vars.colors.textInverted },
      primary: { borderTopColor: vars.colors.textPrimary },
      accent: { borderTopColor: vars.colors.accentPrimary },
      danger: { borderTopColor: vars.colors.danger },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'muted',
  },
});
