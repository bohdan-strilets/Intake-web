import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { DAY_ALIAS } from '@entities/day';
import { authSelectors, tokenStorage } from '@entities/session';

import { ROUTES } from '@shared/routes';

import { restoreAccountApi } from './api';

export const useRestoreAccountMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: restoreAccountApi,

    onSuccess: (data) => {
      authSelectors.setAccessToken(data.accessToken);
      tokenStorage.set(data.refreshToken);

      navigate({ to: ROUTES.app.day, params: { date: DAY_ALIAS.TODAY } });
    },
  });
};
