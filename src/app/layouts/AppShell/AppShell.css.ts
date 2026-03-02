import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  justifyContent: 'center',

  minHeight: '100dvh',
  background: vars.colors.backgroundSecondary,
});

export const inner = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  minHeight: '100dvh',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',

  background: vars.colors.backgroundPrimary,
});

export const headerSection = style({
  flexShrink: 0,
  zIndex: vars.zIndex.header,
});

export const content = style({
  flex: 1,
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',

  padding: vars.spacing.md,
});

export const navigationSection = style({
  position: 'sticky',
  bottom: 0,
  flexShrink: 0,
  zIndex: vars.zIndex.navigation,

  background: vars.colors.backgroundSurface,
  borderTop: `1px solid ${vars.colors.borderMuted}`,
  boxShadow: vars.shadows.md,
});
