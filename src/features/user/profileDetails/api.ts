import type { UserEntity } from '@entities/user/types';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getProfileDetailsApi = async (): Promise<UserEntity> => {
  return get<UserEntity>(API_ROUTES.users.me);
};
