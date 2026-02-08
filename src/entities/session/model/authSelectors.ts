import { useAuthStore } from './useAuthStore';

export const authSelectors = {
  getAccessToken(): string | null {
    return useAuthStore.getState().accessToken;
  },

  isAuthenticated(): boolean {
    return Boolean(useAuthStore.getState().accessToken);
  },

  setAccessToken(token: string) {
    useAuthStore.getState().setAccessToken(token);
  },

  clear() {
    useAuthStore.getState().clear();
  },
};
