import { useResolvedTheme } from '@shared/styles/model';
import { Icon } from '@shared/ui/controls/Icon';

import { root } from './ThemeToggle.css';

export const ThemeToggle = () => {
  const { resolved, toggleLightDark } = useResolvedTheme();
  const isDark = resolved === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={root}
      onClick={toggleLightDark}
    >
      <Icon name={isDark ? 'themeDark' : 'themeLight'} color="accentPrimary" />
    </button>
  );
};
