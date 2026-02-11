import type { DayDetailsResponse } from '@entities/day/type';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getDayDetails = async (date: string) => {
  return await get<DayDetailsResponse>(API_ROUTES.days.byDate(date));
};
