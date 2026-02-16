import type { UserEntity } from '@entities/user';

import { API_ROUTES } from '@shared/api';
import { put } from '@shared/api/http';

import type { ApiDto } from './types';

export const editEmailApi = async (dto: ApiDto) => {
  return await put<UserEntity, ApiDto>(API_ROUTES.users.email, dto);
};
