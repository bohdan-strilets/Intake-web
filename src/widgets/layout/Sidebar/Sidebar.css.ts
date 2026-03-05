import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  flexDirection: 'column',

  width: '72px',
  minHeight: '100%',

  paddingTop: vars.spacing.md,
  paddingBottom: vars.spacing.md,

  background: vars.colors.backgroundSurface,
  borderRight: `1px solid ${vars.colors.borderMuted}`,
});

export const logoSection = style({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '50px',
});

export const navSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  minHeight: 0,
});

export const bottomSection = style({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.xl,
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.borderMuted}`,
});
