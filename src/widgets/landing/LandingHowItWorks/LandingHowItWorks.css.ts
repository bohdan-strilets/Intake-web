import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const step = style({
  flex: 1,
  minWidth: 0,
  textAlign: 'center',
});

export const stepNumber = style({
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: vars.gradients.accentSoft,
  color: vars.colors.textPrimary,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: vars.typography.fontWeight.bold,
  fontSize: vars.typography.fontSize.md,
  marginBottom: vars.spacing.md,
});

export const stepsRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2xl'],
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: vars.spacing.xl,
    },
  },
});
