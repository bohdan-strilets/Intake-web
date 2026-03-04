import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const grid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.spacing['2xl'],
    },
  },
});

export const card = style({
  padding: vars.spacing.xl,
  borderRadius: vars.radius.lg,
  background: vars.colors.backgroundSurface,
  border: `1px solid ${vars.colors.borderMuted}`,
  boxShadow: vars.shadows.sm,
});

export const cardIcon = style({
  width: 44,
  height: 44,
  borderRadius: vars.radius.md,
  background: vars.gradients.accentSoft,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vars.spacing.md,
});
