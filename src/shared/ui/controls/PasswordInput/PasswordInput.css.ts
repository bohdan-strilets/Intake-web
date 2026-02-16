import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  width: '100%',
});

export const toggleButton = style({
  position: 'absolute',
  right: 12,
  top: '50%',
  transform: 'translateY(-50%)',

  background: 'none',
  border: 'none',
  cursor: 'pointer',
});
