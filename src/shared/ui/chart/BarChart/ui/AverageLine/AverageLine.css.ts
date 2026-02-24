import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const line = style({
  position: 'absolute',
  left: 0,
  right: 0,

  height: 1,

  backgroundColor: vars.colors.danger,
  opacity: 0.5,

  pointerEvents: 'none',
});
