import { globalStyle, style } from '@vanilla-extract/css';

/** Wraps the input when suffix is used so the input takes remaining space */
export const inputWrap = style({
  display: 'flex',
  flex: 1,
  minWidth: 0,
});

globalStyle(`${inputWrap} > *`, {
  flex: 1,
  minWidth: 0,
});
