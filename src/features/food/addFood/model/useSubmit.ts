import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';

import type { FormValues } from '../types';

import { useAddFoodMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>, date: string) => {
  const { mutateAsync, isPending } = useAddFoodMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync({
        ...values,
        date,
      });

      methods.reset();
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: errorMessages.NETWORK_ERROR,
        });
        return;
      }

      switch (error.code) {
        case 'AI_PARSE_FAILED':
          methods.setError('root', {
            message: errorMessages.AI_PARSE_FAILED,
          });
          return;

        case 'VALIDATION_ERROR':
          methods.setError('root', {
            message: errorMessages.VALIDATION_ERROR,
          });
          return;

        default:
          methods.setError('root', {
            message: errorMessages.SERVER_ERROR,
          });
      }
    }
  };

  return { onSubmit, isPending };
};
