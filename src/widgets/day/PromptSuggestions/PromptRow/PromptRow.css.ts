import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const promptText = style({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  minWidth: 0,
});

export const selectButton = style({
  all: 'unset',
  cursor: 'pointer',
  flex: 1,
  minWidth: 0,
  display: 'block',
});

export const starButton = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: vars.layout.controlHeight.sm,
  minHeight: vars.layout.controlHeight.sm,
  padding: 0,
});
