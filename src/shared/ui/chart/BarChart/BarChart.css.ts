import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const wrapper = style({
  display: 'flex',
  gap: vars.spacing.sm,
  alignItems: 'stretch',
});

export const root = style({
  flex: 1,
});

export const chart = style({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-end',

  gap: vars.spacing.xs,
  padding: vars.spacing.sm,

  backgroundColor: vars.colors.backgroundSecondary,
  borderRadius: vars.radius.md,
});

export const labelsWrapper = style({
  position: 'relative',
  marginTop: vars.spacing.xs,
  height: 20,
});

export const scaleWrapper = style({
  position: 'relative',
  width: 38,
});
