import { useQuery } from '@tanstack/react-query';

import { statsQueryKeys } from '@entities/stats/config';

import { getStreakApi } from './getStreakApi';

export const useStreak = () => {
  return useQuery({
    queryKey: statsQueryKeys.streak,
    queryFn: getStreakApi,
  });
};
