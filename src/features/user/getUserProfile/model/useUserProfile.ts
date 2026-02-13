import { useQuery } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user/config';

import { getUserProfile } from '../api';

export const useUserProfile = () => {
  return useQuery({
    queryKey: userQueryKeys.profile(),
    queryFn: () => getUserProfile(),
  });
};
