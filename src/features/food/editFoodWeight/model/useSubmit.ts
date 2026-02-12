import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { useModal } from '@shared/lib/modal';

import type { EditWeightFormValues } from '../types';

import { useEditWeightMutation } from './useEditWeight';

export const useEditWeightSubmit = (
  methods: UseFormReturn<EditWeightFormValues>,
  meta: { foodId: string; date: string },
) => {
  const { mutate, isPending } = useEditWeightMutation();
  const { close } = useModal();

  const onSubmit = (data: EditWeightFormValues) => {
    mutate(
      {
        weight: data.weight,
        foodId: meta.foodId,
        date: meta.date,
      },
      {
        onSuccess: () => {
          close();
        },

        onError: (error) => {
          if (!(error instanceof ApiError)) return;

          if (error.code === 'FOOD_BAD_REQUEST') {
            methods.setError('weight', {
              message: errorMessages.FOOD_BAD_REQUEST,
            });
            methods.setFocus('weight');
            return;
          }

          if (error.code === 'FOOD_NOT_FOUND') {
            methods.setError('root', {
              message: errorMessages.FOOD_NOT_FOUND,
            });
          }
        },
      },
    );
  };

  return { onSubmit, isPending };
};
