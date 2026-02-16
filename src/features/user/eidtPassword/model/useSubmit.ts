import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { authSelectors, tokenStorage } from '@entities/session';

import { ApiError, errorMessages } from '@shared/api/error';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useEditPasswordMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const { mutateAsync, isPending } = useEditPasswordMutation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(values);

      notify.success('Password changed. Please log in again');

      authSelectors.clear();
      tokenStorage.clear();
      queryClient.clear();

      navigate({ to: ROUTES.auth.login });
    } catch (error) {
      if (!(error instanceof ApiError)) return;

      if (error.code === 'INVALID_CURRENT_PASSWORD') {
        methods.setError('root', {
          message: errorMessages.INVALID_CURRENT_PASSWORD,
        });
        methods.setFocus('currentPassword');
        return;
      }

      if (error.code === 'NEW_PASSWORD_MUST_BE_DIFFERENT') {
        methods.setError('root', {
          message: errorMessages.NEW_PASSWORD_MUST_BE_DIFFERENT,
        });
        methods.setFocus('newPassword');
        return;
      }
    }
  };

  return { onSubmit, isPending };
};
