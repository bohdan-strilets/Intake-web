import type { AuthTokensResponse, RefreshToken } from '@entities/session/types';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export const getMe = async (dto: RefreshToken) => {
  return await post<AuthTokensResponse, RefreshToken>(API_ROUTES.auth.me, dto);
};
