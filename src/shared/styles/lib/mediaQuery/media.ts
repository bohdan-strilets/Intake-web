import { breakpoints } from '@shared/styles/tokens';
import type { Breakpoint } from '@shared/styles/types';

export const media = {
  min: (bp: Breakpoint) => `screen and (min-width: ${breakpoints[bp]}px)`,

  max: (bp: Breakpoint) => `screen and (max-width: ${breakpoints[bp] - 1}px)`,

  between: (bpMin: Breakpoint, bpMax: Breakpoint) =>
    `screen and (min-width: ${breakpoints[bpMin]}px) and (max-width: ${breakpoints[bpMax] - 1}px)`,
};
