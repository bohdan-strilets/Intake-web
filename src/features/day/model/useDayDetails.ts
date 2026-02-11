import { useQuery } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day/config';

import { getDayDetails } from '../api';

export const useDayDetails = (date: string) => {
  return useQuery({
    queryKey: dayQueryKeys.byDate(date),
    queryFn: () => getDayDetails(date),
  });
};
