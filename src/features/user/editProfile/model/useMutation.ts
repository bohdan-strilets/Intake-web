import { useMutation, useQueryClient } from '@tanstack/react-query';

import { statsQueryKeys } from '@entities/stats';
import { userQueryKeys } from '@entities/user';

import { editProfileApi } from '../api';

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfileApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.profile(),
      });

      queryClient.invalidateQueries({
        queryKey: statsQueryKeys.all,
      });
    },
  });
};
