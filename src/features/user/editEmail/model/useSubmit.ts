import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import type { FormValues } from '../types';

import { useEditEmailMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const { mutateAsync, isPending } = useEditEmailMutation();
  const navigate = useNavigate();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');
  const { t: tAuth } = useTranslation('auth');

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(values);

      notify.success(tProfile('feedback.emailUpdated'));
      navigate({ to: ROUTES.app.profile });
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: tCommon(errorKeyMap.NETWORK_ERROR),
        });
        return;
      }

      switch (error.code) {
        case 'EMAIL_ALREADY_EXISTS':
          methods.setError('email', {
            message: tAuth(errorKeyMap.EMAIL_ALREADY_EXISTS),
          });
          methods.setFocus('email');
          return;

        case 'UNAUTHORIZED':
          methods.setError('root', {
            message: tAuth(errorKeyMap.UNAUTHORIZED),
          });
          return;

        case 'VALIDATION_ERROR':
          methods.setError('root', {
            message: tCommon(errorKeyMap.VALIDATION_ERROR),
          });
          return;

        default:
          methods.setError('root', {
            message: tCommon(errorKeyMap.SERVER_ERROR),
          });
      }
    }
  };

  return { onSubmit, isPending };
};
