import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';

import type { FormValues, SubmitParams } from '../types';

import { useEditWeightMutation } from './useMutation';

export const useSubmit = (
  methods: UseFormReturn<FormValues>,
  options: SubmitParams,
) => {
  const { mutateAsync, isPending } = useEditWeightMutation();
  const { close } = useModal();

  const { t: tCommon } = useTranslation('common');
  const { t: tFood } = useTranslation('food');

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({
        weight: values.weight,
        foodId: options.foodId,
        date: options.date,
      });

      close();
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: tCommon(errorKeyMap.NETWORK_ERROR),
        });
        return;
      }

      switch (error.code) {
        case 'FOOD_BAD_REQUEST':
          methods.setError('weight', {
            message: tFood(errorKeyMap.FOOD_BAD_REQUEST),
          });
          methods.setFocus('weight');
          return;

        case 'FOOD_NOT_FOUND':
          methods.setError('root', {
            message: tFood(errorKeyMap.FOOD_NOT_FOUND),
          });
          return;

        default:
          methods.setError('root', {
            message: tCommon(errorKeyMap.SERVER_ERROR),
          });
      }
    }
  };

  return { onSubmit, isPending };
};
