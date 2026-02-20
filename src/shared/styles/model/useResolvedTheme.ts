import { useCallback, useMemo } from 'react';

import { resolveTheme } from '@shared/styles/lib/resolveTheme';

import { useTheme } from './useTheme';

export const useResolvedTheme = () => {
  const { theme, setTheme } = useTheme();

  const resolved = useMemo(() => resolveTheme(theme), [theme]);

  const toggleLightDark = useCallback(() => {
    const next = resolved === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }, [resolved, setTheme]);

  return {
    theme,
    resolved,
    setTheme,
    toggleLightDark,
  };
};
