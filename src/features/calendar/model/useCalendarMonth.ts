import { useQuery } from '@tanstack/react-query';

import { getCalendarMonth } from '../api/getCalendarMonth';
import type { GetCalendarMonthParams } from '../types';

export const useCalendarMonth = (params: GetCalendarMonthParams) => {
  return useQuery({
    queryKey: ['calendar', params.month],
    queryFn: () => getCalendarMonth(params),
  });
};
