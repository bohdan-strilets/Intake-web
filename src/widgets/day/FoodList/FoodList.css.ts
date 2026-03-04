import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

const mobileBreakpoint = 'screen and (max-width: 640px)';

export const filterSortLayout = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  '@media': {
    [mobileBreakpoint]: {
      flexDirection: 'column',
    },
  },
});

export const filterBlock = style({
  '@media': {
    [mobileBreakpoint]: {
      width: '100%',
    },
  },
});

export const sortRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing.sm,
  minWidth: 0,
  flex: '1 1 0',
  maxWidth: '100%',
  '@media': {
    [mobileBreakpoint]: {
      width: '100%',
      flex: '0 0 auto',
    },
  },
});

export const sortSelectWrap = style({
  flex: '1 1 0',
  minWidth: 0,
});
