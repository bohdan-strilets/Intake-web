import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
});

export const input = style({
  width: '100%',
  height: 4,

  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',

  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.backgroundSecondary,

  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&[aria-invalid="true"]': {
      boxShadow: `0 0 0 1px ${vars.colors.danger}`,
    },
  },
});
