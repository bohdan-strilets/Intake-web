import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

const SCALE_WIDTH = 44;

export const wrapper = style({
  display: 'flex',
  gap: vars.spacing.sm,
});

export const chartArea = style({
  flex: 1,
});

export const chartContainer = style({
  position: 'relative',
  display: 'flex',
  overflow: 'visible',
});

export const chart = style({
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flex: 1,
  height: '100%',

  paddingTop: vars.spacing.sm,
  paddingLeft: vars.spacing.sm,
  paddingRight: vars.spacing.sm,
  paddingBottom: 0,

  borderRadius: vars.radius.md,
});

export const chartBg = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  background: `linear-gradient(180deg, ${vars.colors.backgroundSecondary} 0%, ${vars.colors.backgroundSurface} 100%)`,
  borderRadius: 'inherit',
});

export const chartContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
  gap: vars.spacing.xs,
  height: '100%',
});

export const labelsWrapper = style({
  display: 'flex',
  gap: vars.spacing.xs,

  paddingLeft: vars.spacing.sm,
  paddingRight: `calc(${vars.spacing.sm} + ${SCALE_WIDTH}px)`,
});

export const scaleWrapper = style({
  position: 'relative',
  width: SCALE_WIDTH,
  height: '100%',
  overflow: 'visible',
});

export const tooltip = style({
  position: 'fixed',
  zIndex: vars.zIndex.tooltip,
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.textPrimary,
  backgroundColor: vars.colors.backgroundSurface,
  border: `1px solid ${vars.colors.borderMuted}`,
  borderRadius: vars.radius.sm,
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  transform: 'translate(-50%, -100%)',
  marginBottom: 4,
});
