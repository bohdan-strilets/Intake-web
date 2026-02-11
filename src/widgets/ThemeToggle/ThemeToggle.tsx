import { useCallback } from 'react';

import { useTheme } from '@shared/styles/model';
import { Icon } from '@shared/ui/controls/Icon';

import { root } from './ThemeToggle.css';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={root({})}
      onClick={toggleTheme}
    >
      <Icon name={isDark ? 'themeDark' : 'themeLight'} color="accentPrimary" />
    </button>
  );
};
