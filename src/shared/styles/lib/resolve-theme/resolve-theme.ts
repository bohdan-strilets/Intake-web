import type { Theme, ThemeMode } from '../../types';

export const resolveTheme = (theme: Theme): ThemeMode => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (theme === 'dark') return 'dark';
  if (theme === 'light') return 'light';

  return media.matches ? 'dark' : 'light';
};
