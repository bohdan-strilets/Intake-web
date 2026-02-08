import axios from 'axios';

import { env } from '@shared/config/env';

import { setupInterceptors } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 10_000,
});

setupInterceptors(axiosInstance);
