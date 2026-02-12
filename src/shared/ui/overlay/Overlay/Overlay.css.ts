import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,

  display: 'flex',
  background: vars.colors.overlay,
});
