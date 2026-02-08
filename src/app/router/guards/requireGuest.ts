import { redirect } from '@tanstack/react-router';

import { useAuthStore } from '@entities/session/model';

import { ROUTES } from '@shared/routes';

export const requireGuest = () => {
  const { isAuthenticated } = useAuthStore.getState();

  if (isAuthenticated) throw redirect({ to: ROUTES.app.today });
};
