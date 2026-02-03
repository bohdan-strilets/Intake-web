import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';
import { layout, lightColors, lightShadows, radius, spacing, typography } from '../tokens';

export const lightThemeClass = createTheme(vars, {
  colors: lightColors,
  shadows: lightShadows,
  spacing,
  radius,
  typography,
  layout,
});
