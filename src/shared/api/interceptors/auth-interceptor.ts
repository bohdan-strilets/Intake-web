import type { AxiosInstance } from 'axios';

export function setupAuthInterceptor(api: AxiosInstance) {
  api.interceptors.request.use((config) => {
    // const token = get

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  });
}
