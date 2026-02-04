import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '../config';
import type { ThemeState } from '../types';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: STORAGE_KEYS.THEME,
      partialize: (state) =>
        state.theme === 'system' ? {} : { theme: state.theme },
    },
  ),
);
