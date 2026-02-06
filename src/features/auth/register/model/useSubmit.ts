import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { ROUTES } from '@shared/routes';

import type { RegisterFormValues } from '../types';

import { useRegisterMutation } from './useRegister';

export function useRegisterSubmit(methods: UseFormReturn<RegisterFormValues>) {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegisterMutation();

  const onSubmit = (values: RegisterFormValues) => {
    mutate(values, {
      onSuccess: () => {
        navigate({ to: ROUTES.auth.login, search: { registered: '1' } });
      },

      onError: (error) => {
        if (!(error instanceof ApiError)) return;

        if (error.code === 'EMAIL_ALREADY_EXISTS') {
          methods.setError('email', {
            type: 'manual',
            message: errorMessages.EMAIL_ALREADY_EXISTS,
          });

          methods.setFocus('email');
        }
      },
    });
  };

  return { onSubmit, isPending };
}
