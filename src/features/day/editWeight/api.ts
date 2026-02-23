import { API_ROUTES } from '@shared/api';
import { patch } from '@shared/api/http';

import type { ApiDto, ApiParams } from './types';

export const editWeightApi = async (params: ApiParams) => {
  const { dayId, weight } = params;
  const dto: ApiDto = { weight };

  return await patch<void, ApiDto>(API_ROUTES.days.editWeight(dayId), dto);
};
