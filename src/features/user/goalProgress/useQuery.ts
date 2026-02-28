import { useQuery } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user';

import { getGoalProgressApi } from './api';

export const useGoalProgressQuery = () => {
  return useQuery({
    queryKey: userQueryKeys.goalProgress(),
    queryFn: () => getGoalProgressApi(),
  });
};
