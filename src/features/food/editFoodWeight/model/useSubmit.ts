import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { useModal } from '@shared/lib/modal';

import type { FormValues, SubmitParams } from '../types';

import { useEditWeightMutation } from './useMutation';

export const useSubmit = (
  methods: UseFormReturn<FormValues>,
  options: SubmitParams,
) => {
  const { mutateAsync, isPending } = useEditWeightMutation();
  const { close } = useModal();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({
        weight: values.weight,
        foodId: options.foodId,
        date: options.date,
      });

      close();
    } catch (error) {
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
    }
  };

  return { onSubmit, isPending };
};
