import { useMutation } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day/config';

import { getMonthFromDate } from '@shared/lib/date';
import { queryClient } from '@shared/lib/reactQuery';

import { editFoodWeight } from '../api';
import type { EditWeightMutationParams } from '../types';

export const useEditWeightMutation = () =>
  useMutation({
    mutationFn: (params: EditWeightMutationParams) =>
      editFoodWeight({
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
