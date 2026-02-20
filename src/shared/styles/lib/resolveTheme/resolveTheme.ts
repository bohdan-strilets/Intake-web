import { THEME } from '@shared/styles/enums';

import type { Theme, ThemeMode } from '../../types';

export const resolveTheme = (theme: Theme): ThemeMode => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (theme === THEME.DARK) return 'dark';
  if (theme === THEME.LIGHT) return 'light';

  return media.matches ? 'dark' : 'light';
};
