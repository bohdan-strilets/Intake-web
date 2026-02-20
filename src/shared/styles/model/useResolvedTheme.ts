import { useCallback, useMemo } from 'react';

import { resolveTheme } from '@shared/styles/lib/resolveTheme';

import { THEME } from '../enums';

import { useTheme } from './useTheme';

export const useResolvedTheme = () => {
  const { theme, setTheme } = useTheme();

  const resolved = useMemo(() => resolveTheme(theme), [theme]);

  const toggleLightDark = useCallback(() => {
    const next = resolved === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(next);
  }, [resolved, setTheme]);

  return {
    theme,
    resolved,
    setTheme,
    toggleLightDark,
  };
};
