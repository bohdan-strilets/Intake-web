import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useRegisterMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegisterMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(values);
      navigate({ to: ROUTES.auth.login, search: { registered: '1' } });
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'EMAIL_ALREADY_EXISTS') {
        methods.setError('email', {
          message: errorMessages.EMAIL_ALREADY_EXISTS,
        });
        methods.setFocus('email');
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
