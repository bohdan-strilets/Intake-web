import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const label = style({
  flex: 1,
  textAlign: 'center',

  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.textMuted,
  whiteSpace: 'nowrap',
});
