import type { TokenResponse } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { ApiDto } from '../login/types';

export const restoreAccountApi = async (dto: ApiDto) => {
  return await post<TokenResponse, ApiDto>(API_ROUTES.auth.restore, dto);
};
