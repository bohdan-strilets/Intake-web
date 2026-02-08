import type { AuthTokensResponse } from '@entities/session/types';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { LoginFormValues } from '../types';

export const loginUser = async (dto: LoginFormValues) => {
  return await post<AuthTokensResponse, LoginFormValues>(
    API_ROUTES.auth.login,
    dto,
  );
};
