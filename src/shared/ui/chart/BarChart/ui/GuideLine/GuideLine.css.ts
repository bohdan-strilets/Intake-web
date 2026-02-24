import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles/contract';

export const line = style({
  position: 'absolute',
  left: 0,
  right: 0,

  height: 1,

  backgroundImage: `repeating-linear-gradient(
	  to right,
	  ${vars.colors.borderStrong},
	  ${vars.colors.borderStrong} 4px,
	  transparent 4px,
	  transparent 8px
	)`,

  opacity: 0.75,
  pointerEvents: 'none',
});
