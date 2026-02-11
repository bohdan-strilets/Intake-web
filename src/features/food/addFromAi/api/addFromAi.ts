import { API_ROUTES } from '@shared/api';
import { post } from '@shared/api/http';

import type { AddFromAiFormValues } from '../types';

export const addFromAi = async (dto: AddFromAiFormValues) => {
  return await post<void, AddFromAiFormValues>(API_ROUTES.food.addAI, dto);
};
