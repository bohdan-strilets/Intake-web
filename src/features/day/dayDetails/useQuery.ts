import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { dayQueryKeys, type DayDetailsQueryParams } from '@entities/day';

import { getDayDetailsApi } from './api';

export const useDayDetailsQury = (date: string, params?: DayDetailsQueryParams) => {
  return useQuery({
    queryKey: dayQueryKeys.byDate(date, params),
    queryFn: () => getDayDetailsApi(date, params),
    placeholderData: keepPreviousData,
  });
};
