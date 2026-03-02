import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export type VerifyEmailDto = {
  token: string;
};

export const verifyEmailApi = async (dto: VerifyEmailDto) => {
  return await post<{ message: string }, VerifyEmailDto>(
    API_ROUTES.auth.verifyEmail,
    dto,
  );
};
