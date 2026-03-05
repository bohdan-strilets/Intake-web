import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';

export const navLink = style({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '48px',
  padding: `0 ${vars.spacing.md}`,

  '@media': {
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      height: '64px',
    },
  },
});

export const indicator = style({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: '4px',
  zIndex: vars.zIndex.base,

  borderTopRightRadius: vars.radius.sm,
  borderBottomRightRadius: vars.radius.sm,
  backgroundImage: vars.gradients.accentSoft,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
});

export const iconWrapper = style({
  position: 'relative',
});
