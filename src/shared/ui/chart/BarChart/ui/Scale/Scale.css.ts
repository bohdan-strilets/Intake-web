import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const scaleValue = style({
  position: 'absolute',
  right: 0,
  transform: 'translateY(50%)',

  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.textMuted,
});
