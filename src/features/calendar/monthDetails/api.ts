import type { CalendarCell } from '@entities/day';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

import type { QueryParams } from './types';

export const getMonthDetailsApi = async (
  query: QueryParams,
): Promise<CalendarCell[]> => {
  return get<CalendarCell[], QueryParams>(API_ROUTES.days.list, query);
};
