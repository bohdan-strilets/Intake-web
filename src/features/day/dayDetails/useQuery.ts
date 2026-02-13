import { useQuery } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { getDayDetailsApi } from './api';

export const useDayDetailsQury = (date: string) => {
  return useQuery({
    queryKey: dayQueryKeys.byDate(date),
    queryFn: () => getDayDetailsApi(date),
  });
};
