import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { getMonthFromDate } from '@shared/lib/date';

import { editFoodWeightApi } from '../api';
import type { MutationParams } from '../types';

export const useEditWeightMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: MutationParams) =>
      editFoodWeightApi({
        foodId: params.foodId,
        weight: params.weight,
      }),

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
