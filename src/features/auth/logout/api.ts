import type { RefreshToken } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

export const logoutApi = async (dto: RefreshToken) => {
  return await post<void, RefreshToken>(API_ROUTES.auth.logout, dto);
};
