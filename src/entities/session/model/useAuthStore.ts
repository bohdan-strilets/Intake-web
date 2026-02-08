import { create } from 'zustand';

import type { AuthState } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,

  setAccessToken: (token) =>
    set({
      accessToken: token,
    }),

  clear: () =>
    set({
      accessToken: null,
    }),
}));
