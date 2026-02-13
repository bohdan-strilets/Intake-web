import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { getMonthFromDate } from '@shared/lib/date';

import { addFoodApi } from '../api';

export const useAddFoodMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFoodApi,

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
};
