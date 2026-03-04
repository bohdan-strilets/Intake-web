import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const frame = style({
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadows.xl,
  overflow: 'hidden',
  border: `1px solid ${vars.colors.borderMuted}`,
  background: vars.colors.backgroundSurface,
  width: '100%',
  maxWidth: 480,
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      maxWidth: 560,
    },
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      maxWidth: 640,
    },
  },
});

export const frameHeader = style({
  padding: vars.spacing.md,
  background: vars.colors.backgroundPrimary,
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const frameContent = style({
  padding: vars.spacing.lg,
  minHeight: 280,
});

export const dayRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.spacing.sm} 0`,
  borderBottom: `1px solid ${vars.colors.borderMuted}`,
  fontSize: vars.typography.fontSize.sm,
});

export const dayLabel = style({
  color: vars.colors.textMuted,
});

export const dayValue = style({
  fontWeight: vars.typography.fontWeight.bold,
  color: vars.colors.textPrimary,
});

export const macroRow = style({
  display: 'flex',
  gap: vars.spacing.md,
  marginTop: vars.spacing.lg,
});

export const macroPill = style({
  flex: 1,
  padding: vars.spacing.sm,
  borderRadius: vars.radius.md,
  textAlign: 'center',
  fontSize: vars.typography.fontSize.xs,
});

export const pillProtein = style({
  background: vars.colors.macroProteinSoft,
  color: vars.colors.textPrimary,
});

export const pillFat = style({
  background: vars.colors.macroFatSoft,
  color: vars.colors.textPrimary,
});

export const pillCarbs = style({
  background: vars.colors.macroCarbsSoft,
  color: vars.colors.textPrimary,
});
