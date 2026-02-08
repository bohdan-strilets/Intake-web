import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  textAlign: 'center',
  fontSize: vars.typography.fontSize.sm,

  backgroundColor: vars.colors.dangerSoft,
  color: vars.colors.danger,
  borderRadius: vars.radius.md,

  padding: vars.spacing.sm,
});
