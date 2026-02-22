import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { ROUTES } from '@shared/routes';

import { mapToRegisterDto } from '../mappers';
import type { FormValues } from '../types';

import { useRegisterMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegisterMutation();

  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const onSubmit = async (values: FormValues) => {
    try {
      const dto = mapToRegisterDto(values);
      await mutateAsync(dto);

      notify.success(tAuth('feedback.accountCreated'));
      navigate({ to: ROUTES.auth.login, search: { registered: '1' } });
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
