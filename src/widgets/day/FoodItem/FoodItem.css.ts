import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

/** Card: gradient background + press feedback */
export const card = style({
  backgroundImage: vars.gradients.surfaceSoft,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'local',
  transition: 'transform 120ms ease-out',
  selectors: {
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
});

/** Wrapper: vertical rhythm + side padding (smaller on mobile) */
export const content = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: vars.spacing.sm,
  paddingLeft: vars.spacing.sm,
  paddingRight: vars.spacing.sm,
  '@media': {
    [`screen and (max-width: ${breakpoints.md - 1}px)`]: {
      paddingLeft: vars.spacing.xs,
      paddingRight: vars.spacing.xs,
      rowGap: vars.spacing.xs,
    },
  },
});

/** Header row: [icon] title ... menu */
export const headerRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  minHeight: 0,
});

/** Icon container: soft accent, 10–12px radius (no heavy shadow) */
export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 36,
  height: 36,
  borderRadius: 10,
  background: vars.colors.accentSoft,
});

/** Food title: 15–16px, font-weight 500 */
export const foodTitle = style({
  fontSize: 15,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textPrimary,
  flex: 1,
  minWidth: 0,
});

/** Softer divider line (Apple-like subtle) */
export const dividerSoft = style({
  height: 1,
  width: '100%',
  flexShrink: 0,
  background: vars.colors.borderMuted,
});

/** Second row: weight (left), calories (right), more gap between them */
export const secondRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
});

/** Weight: secondary color, 14px */
export const weightSecondary = style({
  fontSize: 14,
  color: vars.colors.textSecondary,
  lineHeight: vars.typography.lineHeight.normal,
});

/** Calories: font-weight 500, 14px, slightly larger than macros */
export const caloriesEmphasis = style({
  fontSize: 14,
  fontWeight: vars.typography.fontWeight.medium,
  color: vars.colors.textPrimary,
  lineHeight: vars.typography.lineHeight.normal,
});

/** Third row: macro pills, space-between, extra top margin for air before macros */
export const macroPillsRow = style({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: vars.spacing.xs,
  marginTop: vars.spacing.xs,
});

/** Base pill: no padding, smaller radius, 12px, no background */
const macroPillBase = style({
  borderRadius: 6,
  fontSize: 12,
  lineHeight: vars.typography.lineHeight.normal,
  fontWeight: vars.typography.fontWeight.regular,
});

/** Pills with macro text colors (P / F / C) */
export const macroPillProtein = style([
  macroPillBase,
  style({ color: vars.colors.macroProtein }),
]);
export const macroPillFat = style([
  macroPillBase,
  style({ color: vars.colors.macroFat }),
]);
export const macroPillCarbs = style([
  macroPillBase,
  style({ color: vars.colors.macroCarbs }),
]);
