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
  padding: vars.spacing.md,
  paddingTop: `calc(${vars.spacing.md} + env(safe-area-inset-top, 0px))`,

  backgroundColor: vars.colors.accentSoft,
  color: vars.colors.accentPrimary,

  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
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
