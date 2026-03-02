import { assignVars, globalStyle } from '@vanilla-extract/css';

import { breakpoints } from '@shared/styles/breakpoints';
import { vars } from '@shared/styles/contract';
import { tabletSpacing } from '@shared/styles/tokens/tabletSpacing.css';
import { tabletTypography } from '@shared/styles/tokens/tabletTypography.css';

/**
 * Mobile-first responsive overrides: at min-width 768px, spacing and typography
 * scale up via theme contract vars. Pure CSS — no runtime matchMedia.
 */
globalStyle('html', {
  '@media': {
    [`screen and (min-width: ${breakpoints.md}px)`]: {
      vars: {
        ...assignVars(vars.spacing, tabletSpacing),
        ...assignVars(vars.typography, tabletTypography),
      },
    },
  },
});
