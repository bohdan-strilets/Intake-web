import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dayQueryKeys } from '@entities/day';

import { errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { getMonthFromDate } from '@shared/lib/date';
import { notify } from '@shared/lib/notify';

import { deleteFoodApi } from './api';
import type { MutationParams } from './types';

export const useDeleteFoodMutation = () => {
  const queryClient = useQueryClient();
  const { t: tCommon } = useTranslation('common');

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

    onError: () => {
      notify.error(tCommon(errorKeyMap.SERVER_ERROR));
    },
  });
};
