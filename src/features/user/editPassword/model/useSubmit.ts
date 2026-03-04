import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { authSelectors, tokenStorage } from '@entities/session';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import { mapToEditPasswordDto } from '../mappers';
import type { FormValues } from '../types';

import { useEditPasswordMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const { mutateAsync, isPending } = useEditPasswordMutation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');
  const { t: tAuth } = useTranslation('auth');

  const onSubmit = async (values: FormValues) => {
    try {
      await mutateAsync(mapToEditPasswordDto(values));

      notify.success(tProfile('feedback.passwordChangedRelogin'));

      authSelectors.clear();
      tokenStorage.clear();
      queryClient.clear();

      navigate({ to: ROUTES.auth.login });
    } catch (error: unknown) {
      if (!(error instanceof ApiError)) {
        methods.setError('root', {
          message: tCommon(errorKeyMap.NETWORK_ERROR),
        });
        return;
      }

      switch (error.code) {
        case 'INVALID_CURRENT_PASSWORD':
          methods.setError('root', {
            message: tAuth(errorKeyMap.INVALID_CURRENT_PASSWORD),
          });
          methods.setFocus('currentPassword');
          return;

        case 'NEW_PASSWORD_MUST_BE_DIFFERENT':
          methods.setError('root', {
            message: tAuth(errorKeyMap.NEW_PASSWORD_MUST_BE_DIFFERENT),
          });
          methods.setFocus('newPassword');
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
