import { API_ROUTES } from '@shared/api';
import { patch } from '@shared/api/http';

import type { ApiDto, ApiParams } from './types';

export const editFoodWeightApi = async (params: ApiParams) => {
  return await patch<void, ApiDto>(API_ROUTES.food.editWeight(params.foodId), {
    weight: params.weight,
  });
};
