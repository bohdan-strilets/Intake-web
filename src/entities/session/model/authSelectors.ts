import { useAuthStore } from './useAuthStore';

export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);

export const useAccessToken = () => useAuthStore((state) => state.accessToken);

export const useLogin = () => useAuthStore((state) => state.login);

export const useLogout = () => useAuthStore((state) => state.logout);
