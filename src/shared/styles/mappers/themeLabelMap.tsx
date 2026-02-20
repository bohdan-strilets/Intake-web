import { THEME } from '../enums';
import type { Theme } from '../types';

export const themeLabelMap: Record<Theme, string> = {
  [THEME.LIGHT]: 'Light',
  [THEME.DARK]: 'Dark',
  [THEME.SYSTEM]: 'System',
};
