import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import type { UseFormReturn } from 'react-hook-form';

import { DAY_ALIAS } from '@entities/day';
import { authSelectors, tokenStorage } from '@entities/session';
import { userQueryKeys } from '@entities/user';

import { ApiError, errorKeyMap } from '@shared/api/error';
import { changeLanguage, useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { useResolvedTheme } from '@shared/styles/model';

import { mapToRegisterDto } from '../mappers';
import type { FormValues } from '../types';

import { useRegisterMutation } from './useMutation';

export const useSubmit = (methods: UseFormReturn<FormValues>) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setTheme } = useResolvedTheme();
  const { mutateAsync, isPending } = useRegisterMutation();

  const { t: tAuth } = useTranslation('auth');
  const { t: tCommon } = useTranslation('common');

  const onSubmit = async (values: FormValues) => {
    try {
      const dto = mapToRegisterDto(values);
      const data = await mutateAsync(dto);
      const { tokens, user } = data;

      authSelectors.setAccessToken(tokens.accessToken);
      tokenStorage.set(tokens.refreshToken);

      queryClient.setQueryData(userQueryKeys.profile(), user);

      if (user.settings?.language) {
        await changeLanguage(user.settings.language);
      }

      if (user.settings?.theme) {
        setTheme(user.settings.theme);
      }

      navigate({ to: ROUTES.app.day, params: { date: DAY_ALIAS.TODAY } });
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
