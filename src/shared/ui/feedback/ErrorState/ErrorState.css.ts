import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: vars.colors.warningSoft,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadows.sm,

  width: 58,
  height: 58,
});
