import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { getMonthFromDate } from '@shared/lib/date';

import { deleteFoodApi } from './api';
import type { MutationParams } from './types';

export const useDeleteFoodMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ foodId }: MutationParams) => deleteFoodApi(foodId),

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
