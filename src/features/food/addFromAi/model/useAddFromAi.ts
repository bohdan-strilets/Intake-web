import { useMutation } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day/config';

import { getMonthFromDate } from '@shared/lib/date';
import { queryClient } from '@shared/lib/reactQuery';

import { addFromAi } from '../api';

export const useAddFromAiMutation = () =>
  useMutation({
    mutationFn: addFromAi,

    onSuccess: (_data, variables) => {
      const { date } = variables;

      queryClient.invalidateQueries({
        queryKey: dayQueryKeys.byDate(date),
      });

      queryClient.invalidateQueries({
        queryKey: dayQueryKeys.calendar(getMonthFromDate(date)),
      });
    },
  });
