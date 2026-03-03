import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export const resendVerificationEmailApi = async () => {
  return await post<{ message: string }, Record<string, never>>(
    API_ROUTES.auth.resendVerificationEmail,
    {},
  );
};
