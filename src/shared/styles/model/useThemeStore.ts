import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@shared/config/storageKeys';

import { THEME } from '../enums';
import type { ThemeState } from '../types';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: THEME.SYSTEM,
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: STORAGE_KEYS.THEME,
      partialize: (state) =>
        state.theme === THEME.SYSTEM ? {} : { theme: state.theme },
    },
  ),
);
