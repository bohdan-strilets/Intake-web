import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export type ResetPasswordDto = {
  token: string;
  newPassword: string;
};

export const resetPasswordApi = async (dto: ResetPasswordDto) => {
  return await post<{ message: string }, ResetPasswordDto>(
    API_ROUTES.auth.resetPassword,
    dto,
  );
};
