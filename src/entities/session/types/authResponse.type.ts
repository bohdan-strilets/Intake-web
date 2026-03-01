import type { UserEntity } from '@entities/user';

import type { TokenResponse } from './tokenResponse.type';

export type AuthResponse = {
  tokens: TokenResponse;
  user: UserEntity;
};
