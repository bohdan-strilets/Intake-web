import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { notify } from '@shared/lib/notify';
import { queryClient } from '@shared/lib/reactQuery';

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
        notify.success('Food added successfully!');

        queryClient.invalidateQueries({
          queryKey: ['day', date],
        });
      },

      onError: (error) => {
        if (!(error instanceof ApiError)) return;

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
