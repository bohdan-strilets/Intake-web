import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { useLogin } from '@entities/session/model';

import { ApiError, errorMessages } from '@shared/api/error';
import { ROUTES } from '@shared/routes';

import type { LoginFormValues, LoginResponse } from '../types';

import { useLoginMutation } from './useLogin';

export const useLoginSubmit = (methods: UseFormReturn<LoginFormValues>) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLoginMutation();
  const login = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    mutate(values, {
      onSuccess: (data: LoginResponse) => {
        login(data.accessToken);
        navigate({ to: ROUTES.app.today });
      },

      onError: (error) => {
        if (!(error instanceof ApiError)) return;

        if (error.code === 'INVALID_CREDENTIALS') {
          methods.setError('root', {
            message: errorMessages.INVALID_CREDENTIALS,
          });
        }
      },
    });
  };

  return { onSubmit, isPending };
};
