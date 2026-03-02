import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: vars.zIndex.header,

  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  margin: vars.spacing.md,
  marginTop: `calc(${vars.spacing.md} + env(safe-area-inset-top, 0px))`,
  padding: vars.spacing.lg,

  backgroundColor: vars.colors.accentSoft,
  color: vars.colors.accentPrimary,

  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  borderRadius: vars.radius.lg,
});

export const title = style({
  margin: 0,
  fontSize: vars.typography.fontSize.md,
  fontWeight: vars.typography.fontWeight.bold,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  paddingLeft: vars.spacing.sm,
  listStyle: 'decimal',
});

export const listItem = style({
  paddingLeft: vars.spacing.xs,
});

export const confirmButton = style({
  alignSelf: 'flex-end',
});
