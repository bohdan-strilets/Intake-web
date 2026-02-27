import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { useSound } from '@shared/lib/sound';

import type { FormValues } from '../types';

import { useAddFoodMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>, date: string) => {
  const { mutateAsync, isPending } = useAddFoodMutation();

  const { t: tCommon } = useTranslation('common');
  const { t: tFood } = useTranslation('food');

  const { playSounds } = useSound();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({ ...values, date });
      methods.reset();
      playSounds.success();
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: tCommon(errorKeyMap.NETWORK_ERROR),
        });
        return;
      }

      switch (error.code) {
        case 'AI_PARSE_FAILED':
          methods.setError('root', {
            message: tFood(errorKeyMap.AI_PARSE_FAILED),
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
