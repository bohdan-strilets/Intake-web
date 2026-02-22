import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user';

import { updateSettingsApi } from './api';

export const useUpdateSettingsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSettingsApi,

    onSuccess: (updatedUser) => {
      queryClient.setQueryData(userQueryKeys.profile(), updatedUser);
    },
  });
};
