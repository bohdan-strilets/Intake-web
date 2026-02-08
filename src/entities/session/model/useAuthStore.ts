import { create } from 'zustand';

import { tokenStorage } from '@shared/lib/tokenStorage';

import type { AuthState } from '../types';

export const useAuthStore = create<AuthState>((set) => {
  const token = tokenStorage.get();

  return {
    accessToken: token,
    isAuthenticated: !!token,

    login: (token) => {
      tokenStorage.set(token);
      set({
        accessToken: token,
        isAuthenticated: true,
      });
    },

    logout: () => {
      tokenStorage.clear();
      set({
        accessToken: null,
        isAuthenticated: false,
      });
    },
  };
});
