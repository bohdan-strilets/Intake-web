import type { DayDetailsQueryParams, DayDetailsResponse } from '@entities/day';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getDayDetailsApi = async (
  date: string,
  params?: DayDetailsQueryParams,
): Promise<DayDetailsResponse> => {
  return get<DayDetailsResponse, DayDetailsQueryParams | undefined>(
    API_ROUTES.days.byDate(date),
    params,
  );
};
