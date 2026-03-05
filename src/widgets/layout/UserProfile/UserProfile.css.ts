import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  minWidth: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
});

export const name = style({
  display: 'none',
  fontFamily: vars.typography.fontFamily.base,
  fontSize: vars.typography.fontSize.md,
  fontWeight: vars.typography.fontWeight.medium,
  lineHeight: vars.typography.lineHeight.normal,
  color: vars.colors.textPrimary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      display: 'block',
    },
  },
});
