import { useMutation } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day/config';

import { getMonthFromDate } from '@shared/lib/date';
import { queryClient } from '@shared/lib/reactQuery';

import { deleteFood } from '../api';
import type { DeleteFoodVariables } from '../types';

export const useDeleteFoodMutation = () =>
  useMutation({
    mutationFn: ({ foodId }: DeleteFoodVariables) => deleteFood(foodId),

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
