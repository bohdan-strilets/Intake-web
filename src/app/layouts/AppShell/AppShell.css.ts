import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';
import { media } from '@shared/styles/lib/mediaQuery';

export const root = style({
  display: 'flex',
  justifyContent: 'center',

  minHeight: '100dvh',
  background: vars.colors.backgroundSecondary,
});

export const container = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  width: '480px',
  minHeight: '100dvh',
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',

  background: vars.colors.backgroundPrimary,

  '@media': {
    [media.min('tablet')]: { width: '960px' },
    [media.min('laptop')]: { width: '1180px' },
    [media.min('desktop')]: { width: '1640px' },
  },
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
  zIndex: vars.zIndex.navigation,

  flexShrink: 0,

  background: vars.colors.backgroundPrimary,
  borderTop: `1px solid ${vars.colors.borderMuted}`,
});
