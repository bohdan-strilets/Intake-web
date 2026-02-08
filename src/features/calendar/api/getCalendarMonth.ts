import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

import type { CalendarDay, GetCalendarMonthParams } from '../types';

export const getCalendarMonth = async (userQuery: GetCalendarMonthParams) => {
  return await get<CalendarDay[], GetCalendarMonthParams>(
    API_ROUTES.days.list,
    userQuery,
  );
};
