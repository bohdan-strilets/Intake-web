import type { AxiosInstance } from 'axios';

import { authSelectors } from '@entities/session/model';

export const setupAuthInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use((config) => {
    const token = authSelectors.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};
