import { useQuery } from '@tanstack/react-query';

import { getDayDetails } from '../api';

export const useDayDetails = (date: string) => {
  return useQuery({
    queryKey: ['day', date],
    queryFn: () => getDayDetails(date),
  });
};
