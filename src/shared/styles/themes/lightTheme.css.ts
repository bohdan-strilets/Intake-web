import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';
import {
  layout,
  lightColors,
  lightGradients,
  lightShadows,
  radius,
  spacing,
  typography,
  zIndex,
} from '../tokens';

export const lightThemeClass = createTheme(vars, {
  colors: lightColors,
  gradients: lightGradients,
  shadows: lightShadows,
  spacing,
  radius,
  typography,
  layout,
  zIndex,
});
