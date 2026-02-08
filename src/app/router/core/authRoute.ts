import { createRoute } from '@tanstack/react-router';

import { requireGuest } from '../guards/requireGuest';
import { AuthLayout } from '../layouts/AuthLayout';

import { rootRoute } from './rootRoute';

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'auth',
  beforeLoad: requireGuest,
  component: AuthLayout,
});
