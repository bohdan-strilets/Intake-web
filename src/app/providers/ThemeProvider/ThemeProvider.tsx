import { useEffect } from 'react';

import { resolveTheme } from '@shared/styles/lib/resolve-theme';
import { useTheme } from '@shared/styles/model';
import { darkThemeClass, lightThemeClass } from '@shared/styles/themes';

import type { ThemeProviderProps } from './ThemeProvider.types';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const resolved = resolveTheme(theme);

      root.classList.remove(lightThemeClass, darkThemeClass);
      root.classList.add(
        resolved === 'dark' ? darkThemeClass : lightThemeClass,
      );
    };

    applyTheme();

    if (theme === 'system') {
      media.addEventListener('change', applyTheme);
      return () => media.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  return <>{children}</>;
};
