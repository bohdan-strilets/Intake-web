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
        width: '14px',
        height: '14px',
      },

      md: {
        width: '18px',
        height: '18px',
      },

      lg: {
        width: '22px',
        height: '22px',
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
