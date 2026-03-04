import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';


export const card = style({
  background: vars.colors.backgroundSurface,
  border: `1px solid ${vars.colors.borderMuted}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.md,
});

export const insightList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
});

export const divider = style({
  height: 1,
  backgroundColor: vars.colors.borderMuted,
  margin: `${vars.spacing.sm} 0`,
});

export const insightRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.sm,
  width: '100%',
  padding: vars.spacing.sm,
  borderRadius: vars.radius.md,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  font: 'inherit',
  color: 'inherit',
  transition: 'background-color 0.15s ease, opacity 0.15s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.backgroundSecondary,
    },
    '&:active': {
      opacity: 0.9,
    },
  },
});

export const insightRowSuccess = style({
  backgroundColor: vars.colors.successSoft,
  selectors: {
    '&:hover': {
      opacity: 0.92,
    },
    '&:active': {
      opacity: 0.9,
    },
  },
});

export const insightRowWarning = style({
  backgroundColor: vars.colors.warningSoft,
  selectors: {
    '&:hover': {
      opacity: 0.92,
    },
    '&:active': {
      opacity: 0.9,
    },
  },
});

export const iconWrap = style({
  flexShrink: 0,
  marginTop: 2,
});

export const content = style({
  flex: 1,
  minWidth: 0,
});

export const title = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textMuted,
  marginBottom: vars.spacing.xs,
});

export const line = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textPrimary,
  marginBottom: vars.spacing.xs,
});

export const deviation = style({
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
});

export const deviationSuccess = style({
  color: vars.colors.success,
});

export const deviationDanger = style({
  color: vars.colors.danger,
});

export const deviationWarning = style({
  color: vars.colors.warning,
});
