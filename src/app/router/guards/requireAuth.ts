import { redirect } from '@tanstack/react-router';

import { authSelectors } from '@entities/session/model';

import { ROUTES } from '@shared/routes';

export const requireAuth = () => {
  const isAuth = authSelectors.isAuthenticated();

  if (!isAuth) throw redirect({ to: ROUTES.auth.login });
};
