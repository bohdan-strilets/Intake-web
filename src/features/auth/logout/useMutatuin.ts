import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { authSelectors, tokenStorage } from '@entities/session';

import { ROUTES } from '@shared/routes';

import { logoutApi } from './api';

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const refreshToken = tokenStorage.get();

      if (!refreshToken) return;

      await logoutApi({ refreshToken }).catch(() => {});
    },

    onSettled: () => {
      queryClient.clear();
      authSelectors.clear();
      tokenStorage.clear();

      navigate({ to: ROUTES.auth.login });
    },
  });
};
