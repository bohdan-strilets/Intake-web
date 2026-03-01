import type { RefreshToken, TokenResponse } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export const refreshUserApi = async (dto: RefreshToken) => {
  return await post<TokenResponse, RefreshToken>(API_ROUTES.auth.refresh, dto);
};
