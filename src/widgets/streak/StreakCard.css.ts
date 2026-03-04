import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const card = style({
  width: '100%',
  background: vars.colors.backgroundSurface,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.md,
});

export const header = style({
  marginBottom: vars.spacing.md,
});

export const title = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textPrimary,
});

export const description = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: vars.colors.textPrimary,
  marginBottom: vars.spacing.md,
});

export const progressBlock = style({
  width: '100%',
});

export const weekGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
  gap: vars.spacing.xs,
});

export const weekdayLabel = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textMuted,
  textAlign: 'center',
});

export const flameWrap = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
