import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { DAY_ALIAS } from '@entities/day';
import { authSelectors, tokenStorage } from '@entities/session';

import { ApiError, errorMessages } from '@shared/api/error';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useLoginMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const [canRestore, setCanRestore] = useState(false);

  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLoginMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      const data = await mutateAsync(values);

      authSelectors.setAccessToken(data.accessToken);
      tokenStorage.set(data.refreshToken);

      navigate({ to: ROUTES.app.day, params: { date: DAY_ALIAS.TODAY } });
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: errorMessages.NETWORK_ERROR,
        });
        return;
      }

      switch (error.code) {
        case 'INVALID_CREDENTIALS':
          setCanRestore(false);
          methods.setError('root', {
            message: errorMessages.INVALID_CREDENTIALS,
          });
          return;

        case 'ACCOUNT_DELETED':
          setCanRestore(true);
          methods.setError('root', {
            message: errorMessages.ACCOUNT_DELETED,
          });
          return;

        default:
          methods.setError('root', {
            message: errorMessages.SERVER_ERROR,
          });
      }
    }
  };

  return { onSubmit, isPending, canRestore };
};
