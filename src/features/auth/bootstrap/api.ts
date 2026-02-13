import type { AuthResponse, RefreshToken } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export const getAuthUserApi = async (dto: RefreshToken) => {
  return await post<AuthResponse, RefreshToken>(API_ROUTES.auth.me, dto);
};
