import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';
import {
  darkColors,
  darkGradients,
  darkShadows,
  layout,
  radius,
  spacing,
  typography,
  zIndex,
} from '../tokens';

export const darkThemeClass = createTheme(vars, {
  colors: darkColors,
  gradients: darkGradients,
  shadows: darkShadows,
  spacing,
  radius,
  typography,
  layout,
  zIndex,
});
