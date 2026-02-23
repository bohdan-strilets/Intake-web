import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'fixed',
  inset: 0,
  zIndex: vars.zIndex.overlay,

  display: 'flex',
  background: vars.colors.overlay,
});
