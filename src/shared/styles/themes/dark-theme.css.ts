import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';
import { darkColors, darkShadows, radius, spacing, typography } from '../tokens';

export const darkThemeClass = createTheme(vars, {
  colors: darkColors,
  shadows: darkShadows,
  spacing,
  radius,
  typography,
});
