import { envSchema } from './env-schema';

export const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}
