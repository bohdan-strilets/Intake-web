import { redirect } from '@tanstack/react-router';

import { DAY_ALIAS } from '@entities/day';
import { authSelectors } from '@entities/session';

import { ROUTES } from '@shared/routes';

export const requireGuest = () => {
  const isAuth = authSelectors.isAuthenticated();

  if (isAuth)
    throw redirect({ to: ROUTES.app.day, params: { date: DAY_ALIAS.TODAY } });
};
