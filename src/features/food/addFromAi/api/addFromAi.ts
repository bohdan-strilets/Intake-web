import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { AddFromAiPayload } from '../types';

export const addFromAi = async (dto: AddFromAiPayload) => {
  return await post<void, AddFromAiPayload>(API_ROUTES.food.addAI, dto);
};
