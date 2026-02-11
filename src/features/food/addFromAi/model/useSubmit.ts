import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';

import type { AddFromAiFormValues } from '../types';

import { useAddFromAiMutation } from './useAddFromAI';

export const useAddFromAiSubmit = (
  methods: UseFormReturn<AddFromAiFormValues>,
  date: string,
) => {
  const { mutate, isPending } = useAddFromAiMutation();

  const onSubmit = (values: AddFromAiFormValues) => {
    const payload = { ...values, date };
    mutate(payload, {
      onSuccess: () => {
        methods.reset();
      },

      onError: (error) => {
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
      },
    });
  };

  return { onSubmit, isPending };
};
