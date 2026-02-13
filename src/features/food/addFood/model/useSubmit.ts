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
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'AI_PARSE_FAILED') {
        methods.setError('root', {
          message: errorMessages.AI_PARSE_FAILED,
        });
        return;
      }

      if (error.code === 'VALIDATION_ERROR') {
        methods.setError('root', {
          message: errorMessages.VALIDATION_ERROR,
        });
      }
    }
  };

  return { onSubmit, isPending };
};
