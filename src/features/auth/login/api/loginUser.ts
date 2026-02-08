import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { LoginFormValues, LoginResponse } from '../types';

export const loginUser = async (userData: LoginFormValues) => {
  return await post<LoginResponse, LoginFormValues>(
    API_ROUTES.auth.login,
    userData,
  );
};
