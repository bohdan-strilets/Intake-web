import type { UserResponse } from '@entities/user/types';

import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { RegisterFormValues } from './types';

export const registerUser = async (userData: RegisterFormValues) => {
  return await post<UserResponse, RegisterFormValues>(
    API_ROUTES.auth.register,
    userData,
  );
};
