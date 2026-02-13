import { useQuery } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { getMonthDetailsApi } from './api';
import type { QueryParams } from './types';

export const useMonthDetailsQuery = (params: QueryParams) => {
  return useQuery({
    queryKey: dayQueryKeys.calendar(params.month),
    queryFn: () => getMonthDetailsApi(params),
  });
};
