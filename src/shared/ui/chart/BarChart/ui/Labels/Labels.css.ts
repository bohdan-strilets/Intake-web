import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const label = style({
  position: 'absolute',
  transform: 'translateX(-50%)',

  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.textMuted,
  whiteSpace: 'nowrap',
});
