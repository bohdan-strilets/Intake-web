import { useQuery } from '@tanstack/react-query';

import { statsQueryKeys } from '@entities/stats';

import { getStatsApi } from './api';
import type { QueryParams } from './types';

export const useStatsQuery = (params: QueryParams) => {
  return useQuery({
    queryKey: statsQueryKeys.range(params.start, params.end),
    queryFn: () => getStatsApi(params),
  });
};
