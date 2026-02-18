import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorMessages } from '@shared/api/error';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useEditEmailMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const { mutateAsync, isPending } = useEditEmailMutation();
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(values);

      notify.success('Email updated successfully');
      navigate({ to: ROUTES.app.profile });
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: errorMessages.NETWORK_ERROR,
        });
        return;
      }

      switch (error.code) {
        case 'EMAIL_ALREADY_EXISTS':
          methods.setError('email', {
            message: errorMessages.EMAIL_ALREADY_EXISTS,
          });
          methods.setFocus('email');
          return;

        case 'UNAUTHORIZED':
          methods.setError('root', {
            message: errorMessages.UNAUTHORIZED,
          });
          return;

        case 'VALIDATION_ERROR':
          methods.setError('root', {
            message: errorMessages.VALIDATION_ERROR,
          });
          return;

        default:
          methods.setError('root', {
            message: errorMessages.SERVER_ERROR,
          });
      }
    }
  };

  return { onSubmit, isPending };
};
