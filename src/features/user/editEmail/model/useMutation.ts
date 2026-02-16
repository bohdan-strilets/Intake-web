import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user';

import { editEmailApi } from '../api';

export const useEditEmailMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editEmailApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.profile(),
      });
    },
  });
};
