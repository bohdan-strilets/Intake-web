import type { AxiosInstance } from 'axios';

import { setupAuthInterceptor } from './authInterceptor';
import { setupErrorInterceptor } from './errorInterceptor';
import { setupRefreshInterceptor } from './refreshInterceptor';

export function setupInterceptors(api: AxiosInstance) {
  setupAuthInterceptor(api);
  setupRefreshInterceptor(api);
  setupErrorInterceptor(api);
}
