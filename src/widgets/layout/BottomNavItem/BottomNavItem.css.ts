import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const navLink = style({
  position: 'relative',

  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: '56px',
});

export const indicator = style({
  position: 'absolute',
  inset: 0,
  zIndex: vars.zIndex.base,

  borderRadius: vars.radius.sm,
  background: vars.colors.accentSoft,
});

export const iconWrapper = style({
  position: 'relative',
});
