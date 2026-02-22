import type { LoginResponse } from '@entities/session';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { ApiDto } from './types';

export const loginUserApi = async (dto: ApiDto) => {
  return await post<LoginResponse, ApiDto>(API_ROUTES.auth.login, dto);
};
