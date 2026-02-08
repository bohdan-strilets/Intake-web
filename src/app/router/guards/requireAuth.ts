import { redirect } from '@tanstack/react-router';

import { useAuthStore } from '@entities/session/model';

import { ROUTES } from '@shared/routes';

export const requireAuth = () => {
  const { isAuthenticated } = useAuthStore.getState();

  if (!isAuthenticated) throw redirect({ to: ROUTES.auth.login });
};
