import { API_ROUTES } from '@shared/api';
import { patch } from '@shared/api/http';

import type { EditWeightApiParams, EditWeightFormValues } from '../types';

export const editFoodWeight = async (params: EditWeightApiParams) => {
  return await patch<void, EditWeightFormValues>(
    API_ROUTES.food.editWeight(params.foodId),
    { weight: params.weight },
  );
};
