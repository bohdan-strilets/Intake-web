import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  backgroundColor: vars.colors.backgroundSecondary,
});

export const icon = style({
  width: '122px',
  height: '122px',
  marginBlock: '116px',
});
