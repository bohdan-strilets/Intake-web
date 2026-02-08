import type { UserResponse } from '@entities/user/types';

export type LoginResponse = UserResponse & {
  accessToken: string;
  refreshToken: string;
};
