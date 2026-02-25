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
});

export const chart = style({
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',

  height: '100%',
  gap: vars.spacing.xs,

  paddingTop: vars.spacing.sm,
  paddingLeft: vars.spacing.sm,
  paddingRight: vars.spacing.sm,
  paddingBottom: 0,

  backgroundColor: vars.colors.backgroundSecondary,
  borderRadius: vars.radius.md,
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
});
