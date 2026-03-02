import { style } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';

export const root = style({
  width: '100%',
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      maxWidth: '720px',
    },
    [`screen and (min-width: ${breakpoints.lg}px)`]: {
      maxWidth: '840px',
    },
    [`screen and (min-width: ${breakpoints.xl}px)`]: {
      maxWidth: '960px',
    },
  },
});
