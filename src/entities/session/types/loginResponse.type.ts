import type { UserEntity } from '@entities/user';

import type { AuthResponse } from './authResponse.type';

export type LoginResponse = {
  tokens: AuthResponse;
  user: UserEntity;
};
