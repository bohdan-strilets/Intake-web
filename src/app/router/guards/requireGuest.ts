import { redirect } from '@tanstack/react-router';

import { authSelectors } from '@entities/session/model';

import { formatDate } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';

export const requireGuest = () => {
  const isAuth = authSelectors.isAuthenticated();

  if (isAuth)
    throw redirect({
      to: ROUTES.app.day,
      params: { date: formatDate(new Date()) },
    });
};
