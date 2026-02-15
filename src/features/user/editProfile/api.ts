import type { UserEntity } from '@entities/user';

import { API_ROUTES } from '@shared/api';
import { patch } from '@shared/api/http';

import type { ApiDto } from './types';

export const editProfileApi = async (dto: ApiDto) => {
  return await patch<UserEntity, ApiDto>(API_ROUTES.users.profile, dto);
};
