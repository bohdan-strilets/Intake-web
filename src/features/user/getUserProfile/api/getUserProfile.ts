import type { User } from '@entities/user/types';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getUserProfile = async () => {
  return await get<User>(API_ROUTES.users.me);
};
