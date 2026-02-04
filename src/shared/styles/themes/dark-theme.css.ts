import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';
import { darkColors, darkShadows, layout, radius, spacing, typography, zIndex } from '../tokens';

export const darkThemeClass = createTheme(vars, {
  colors: darkColors,
  shadows: darkShadows,
  spacing,
  radius,
  typography,
  layout,
  zIndex,
});
