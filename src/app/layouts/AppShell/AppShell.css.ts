import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const root = style({
  display: 'flex',
  justifyContent: 'center',

  minHeight: '100dvh',
  background: vars.colors.backgroundSecondary,
});

export const shellLayout = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  minHeight: '100dvh',

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      flexDirection: 'row',
    },
  },
});

export const sidebarSection = style({
  display: 'none',

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      display: 'flex',
      flexShrink: 0,
      alignSelf: 'stretch',
    },
  },
});

export const mainColumn = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
});

export const inner = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  flex: 1,
  minHeight: 0,
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',

  background: vars.colors.backgroundPrimary,

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      paddingBottom: vars.spacing.md,
    },
  },
});

export const headerSection = style({
  flexShrink: 0,
  zIndex: vars.zIndex.header,

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
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

  paddingBottom: 'env(safe-area-inset-bottom)',

  background: vars.colors.backgroundSurface,
  borderTop: `1px solid ${vars.colors.borderMuted}`,
  boxShadow: vars.shadows.md,

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
});
