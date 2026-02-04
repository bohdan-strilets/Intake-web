import { parsedEnv } from './env-validation';

export const env = {
  API_URL: parsedEnv.data?.VITE_API_URL,
} as const;
