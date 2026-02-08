import { createRoute } from '@tanstack/react-router';

import { authRoute } from '@app/router/core';

import { LoginPage } from '@pages/login';
import { RegisterPage } from '@pages/register';

import { ROUTES } from '@shared/routes';

export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: ROUTES.auth.login,
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>) => ({
    registered: search.registered === '1' ? '1' : undefined,
  }),
});

export const registerRoute = createRoute({
  getParentRoute: () => authRoute,
  path: ROUTES.auth.register,
  component: RegisterPage,
});
