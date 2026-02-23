import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  width: '100%',
  paddingInline: vars.spacing.md,
});
