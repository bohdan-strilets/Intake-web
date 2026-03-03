import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userQueryKeys } from '@entities/user';

import { updateRemindersApi } from './api';
import type { UpdateRemindersDto } from './types';

export const useUpdateRemindersMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateRemindersDto) => updateRemindersApi(dto),
    onSuccess: (data) => {
      queryClient.setQueryData(userQueryKeys.profile(), data);
    },
  });
};
