import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const progressRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
});

export const dots = style({
  display: 'flex',
  gap: vars.spacing.sm,
  alignItems: 'center',
});

export const dot = style({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: vars.colors.borderMuted,
  transition: 'background-color 200ms ease',
});

export const dotActive = style({
  backgroundColor: vars.colors.accentPrimary,
});

export const dotCompleted = style({
  backgroundColor: vars.colors.accentSoft,
});

export const stepCounter = style({
  fontSize: vars.typography.fontSize.sm,
  color: vars.colors.textMuted,
});
