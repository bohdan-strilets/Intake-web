import type { Theme } from './themeMode.type';

export type ThemeState = {
  theme: Theme;

  setTheme: (theme: Theme) => void;
};
