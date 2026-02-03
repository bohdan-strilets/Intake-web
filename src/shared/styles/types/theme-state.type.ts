import type { Theme } from './theme.type';

export type ThemeState = {
  theme: Theme;

  setTheme: (theme: Theme) => void;
};
