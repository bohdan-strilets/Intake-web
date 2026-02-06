import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  fontSize: vars.typography.fontSize.md,
  fontWeight: vars.typography.fontWeight.medium,
  textDecoration: 'none',

  color: vars.colors.accentPrimary,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },

    '&:active': {
      opacity: 0.8,
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
});
