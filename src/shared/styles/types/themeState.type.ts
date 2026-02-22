import type { Theme } from '@entities/user';

export type ThemeState = {
  theme: Theme;

  setTheme: (theme: Theme) => void;
};
