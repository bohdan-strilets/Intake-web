import { useEffect } from 'react';

import { resolveTheme } from '@shared/styles/lib/resolveTheme';
import { useTheme } from '@shared/styles/model';
import { darkThemeClass, lightThemeClass } from '@shared/styles/themes';

import type { ThemeProviderProps } from './ThemeProvider.types';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.add('no-theme-transition');

    const id = requestAnimationFrame(() => {
      root.classList.remove('no-theme-transition');
    });

    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const resolved = resolveTheme(theme);

      root.classList.toggle(darkThemeClass, resolved === 'dark');
      root.classList.toggle(lightThemeClass, resolved === 'light');
    };

    applyTheme();

    if (theme === 'system') {
      media.addEventListener('change', applyTheme);
      return () => media.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  return <>{children}</>;
};
