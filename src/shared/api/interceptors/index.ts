import type { AxiosInstance } from 'axios';

import { setupAuthInterceptor } from './auth-interceptor';
import { setupErrorInterceptor } from './error-interceptor';

export function setupInterceptors(api: AxiosInstance) {
  setupAuthInterceptor(api);
  setupErrorInterceptor(api);
}
