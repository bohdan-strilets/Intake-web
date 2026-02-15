import type { AuthResponse } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { ApiDto } from '../login/types';

export const restoreAccountApi = async (dto: ApiDto) => {
  return await post<AuthResponse, ApiDto>(API_ROUTES.auth.restore, dto);
};
