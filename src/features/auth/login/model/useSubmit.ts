import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { authSelectors, tokenStorage } from '@entities/session';

import { ApiError, errorMessages } from '@shared/api/error';
import { formatDate } from '@shared/lib/date';
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

      const loginRouteParams = { date: formatDate(new Date()) };
      navigate({ to: ROUTES.app.day, params: loginRouteParams });
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'INVALID_CREDENTIALS') {
        setCanRestore(false);

        methods.setError('root', {
          message: errorMessages.INVALID_CREDENTIALS,
        });
      }

      if (error.code === 'ACCOUNT_DELETED') {
        setCanRestore(true);

        methods.setError('root', {
          message: errorMessages.ACCOUNT_DELETED,
        });
      }
    }
  };

  return { onSubmit, isPending, canRestore };
};
