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
  const { t: tDay } = useTranslation('day');

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({
        weight: values.weight ?? null,
        date: options.date,
        dayId: options.dayId,
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
        case 'DAY_NOT_FOUND':
          methods.setError('root', {
            message: tDay(errorKeyMap.DAY_NOT_FOUND),
          });
          return;

        case 'VALIDATION_ERROR':
          methods.setError('root', {
            message: tCommon(errorKeyMap.VALIDATION_ERROR),
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
