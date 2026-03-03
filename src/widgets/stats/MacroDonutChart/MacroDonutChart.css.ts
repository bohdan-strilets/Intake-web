import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

/** Macros list — full width of card */
export const macrosList = style({
  width: '100%',
});

/** Wrapper to center donut */
export const chartWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

/** Macro name (small, muted) */
export const macroLabel = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textMuted,
});

/** Row: value left, target right — small font */
export const macroValuesRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.regular,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textPrimary,
});
/** Progress track under row (2px, full radius) */
export const progressTrack = style({
  height: 2,
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.borderMuted,
  overflow: 'hidden',
});

/** Progress fill — width set inline as % */
export const progressFill = style({
  height: '100%',
  borderRadius: vars.radius.full,
  transition: 'width 0.2s ease-out',
});
