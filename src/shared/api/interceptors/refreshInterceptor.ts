import type { AxiosInstance } from 'axios';

import { refreshAccessToken } from '@features/auth/refresh';

import { authSelectors, tokenStorage } from '@entities/session';

export const setupRefreshInterceptor = (api: AxiosInstance) => {
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status !== 401 || originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch {
        authSelectors.clear();
        tokenStorage.clear();

        return Promise.reject(error);
      }
    },
  );
};
