import { useQuery } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user';

import { getProfileDetailsApi } from './api';

export const useProfileDetailsQuery = () => {
  return useQuery({
    queryKey: userQueryKeys.profile(),
    queryFn: () => getProfileDetailsApi(),
  });
};
