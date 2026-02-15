import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authSelectors, tokenStorage } from '@entities/session';

import { formatDate } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';

import { restoreAccountApi } from './api';

export const useRestoreAccountMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: restoreAccountApi,

    onSuccess: (data) => {
      authSelectors.setAccessToken(data.accessToken);
      tokenStorage.set(data.refreshToken);

      const loginRouteParams = { date: formatDate(new Date()) };
      navigate({ to: ROUTES.app.day, params: loginRouteParams });
    },
  });
};
