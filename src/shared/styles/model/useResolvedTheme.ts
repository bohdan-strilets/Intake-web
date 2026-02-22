import { useCallback, useMemo } from 'react';

import { THEME } from '@entities/user';

import { resolveTheme } from '@shared/styles/lib/resolveTheme';

import { useTheme } from './useTheme';

export const useResolvedTheme = () => {
  const { theme, setTheme } = useTheme();

  const resolved = useMemo(() => resolveTheme(theme), [theme]);

  const toggleLightDark = useCallback(() => {
    const next = resolved === THEME.Dark ? THEME.Light : THEME.Dark;
    setTheme(next);
  }, [resolved, setTheme]);

  return {
    theme,
    resolved,
    setTheme,
    toggleLightDark,
  };
};
