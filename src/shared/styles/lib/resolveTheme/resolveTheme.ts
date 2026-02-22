import { THEME, type Theme } from '@entities/user';

import type { ThemeMode } from '../../types';

export const resolveTheme = (theme: Theme): ThemeMode => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (theme === THEME.Dark) return 'dark';
  if (theme === THEME.Light) return 'light';

  return media.matches ? 'dark' : 'light';
};
