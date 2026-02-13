import type { DayDetailsResponse } from '@entities/day';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getDayDetailsApi = async (
  date: string,
): Promise<DayDetailsResponse> => {
  return get<DayDetailsResponse>(API_ROUTES.days.byDate(date));
};
