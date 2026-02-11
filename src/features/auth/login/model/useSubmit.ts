import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { authSelectors, tokenStorage } from '@entities/session/model';
import type { AuthTokensResponse } from '@entities/session/types';

import { ApiError, errorMessages } from '@shared/api/error';
import { formatDate } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';

import type { LoginFormValues } from '../types';

import { useLoginMutation } from './useLogin';

export const useLoginSubmit = (methods: UseFormReturn<LoginFormValues>) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (values: LoginFormValues) => {
    mutate(values, {
      onSuccess: (data: AuthTokensResponse) => {
        authSelectors.setAccessToken(data.accessToken);
        tokenStorage.set(data.refreshToken);
        navigate({
          to: ROUTES.app.day,
          params: { date: formatDate(new Date()) },
        });
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
