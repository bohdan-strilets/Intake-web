import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { authSelectors, tokenStorage } from '@entities/session';

import { ApiError, errorMessages } from '@shared/api/error';
import { formatDate } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useLoginMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLoginMutation();

  const onSubmit = async (values: FormValues) => {
    try {
      const data = await mutateAsync(values);

      authSelectors.setAccessToken(data.accessToken);
      tokenStorage.set(data.refreshToken);

      navigate({
        to: ROUTES.app.day,
        params: { date: formatDate(new Date()) },
      });
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'INVALID_CREDENTIALS') {
        methods.setError('root', {
          message: errorMessages.INVALID_CREDENTIALS,
        });
      }
    }
  };

  return { onSubmit, isPending };
};
