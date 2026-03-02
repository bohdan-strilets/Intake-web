import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export type RequestPasswordResetDto = {
  email: string;
};

export const requestPasswordResetApi = async (dto: RequestPasswordResetDto) => {
  return await post<{ message: string }, RequestPasswordResetDto>(
    API_ROUTES.auth.requestPasswordReset,
    dto,
  );
};
