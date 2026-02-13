import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { ApiDto } from './types';

export const addFoodApi = async (dto: ApiDto) => {
  return await post<void, ApiDto>(API_ROUTES.food.addAI, dto);
};
