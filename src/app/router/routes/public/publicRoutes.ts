import { createRoute } from '@tanstack/react-router';

import { publicRoute } from '@app/router/core';

import { HomePage } from '@pages/home';

import { ROUTES } from '@shared/routes';

export const homeRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: ROUTES.public.home,
  component: HomePage,
});
