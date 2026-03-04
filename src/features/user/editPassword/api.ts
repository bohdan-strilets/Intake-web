import { API_ROUTES } from '@shared/api';
import { put } from '@shared/api/http';

import type { ApiDto } from './types';

export const editPasswordApi = async (dto: ApiDto) => {
  return await put<void, ApiDto>(API_ROUTES.users.password, dto);
};
