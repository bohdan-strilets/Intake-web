import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  paddingTop: vars.spacing.xl,
  paddingBottom: vars.spacing.xl,
  borderTop: `1px solid ${vars.colors.borderMuted}`,
});

export const links = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.lg,
  justifyContent: 'center',
  marginTop: vars.spacing.md,
});
