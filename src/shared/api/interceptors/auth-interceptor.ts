import type { AxiosInstance } from 'axios';

import { tokenStorage } from '@shared/lib/token-storage';

export function setupAuthInterceptor(api: AxiosInstance) {
  api.interceptors.request.use((config) => {
    const token = tokenStorage.get();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
