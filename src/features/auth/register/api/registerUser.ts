import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { RegisterFormValues } from '../types';

export const registerUser = async (dto: RegisterFormValues) => {
  return await post<void, RegisterFormValues>(API_ROUTES.auth.register, dto);
};
