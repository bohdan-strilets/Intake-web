import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { editWeightApi } from '../api';
import type { MutationParams } from '../types';

export const useEditWeightMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: MutationParams) =>
      editWeightApi({
        dayId: params.dayId,
        weight: params.weight,
      }),

    onSuccess: (_data, variables) => {
      const { date } = variables;

      queryClient.invalidateQueries({
        queryKey: dayQueryKeys.byDate(date),
      });
    },
  });
};
