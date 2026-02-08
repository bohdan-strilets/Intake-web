import type { AxiosInstance } from 'axios';

import { setupAuthInterceptor } from './authInterceptor';
import { setupErrorInterceptor } from './errorInterceptor';

export function setupInterceptors(api: AxiosInstance) {
  setupAuthInterceptor(api);
  setupErrorInterceptor(api);
}
