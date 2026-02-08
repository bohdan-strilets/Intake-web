import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../core';
import { requireAuth } from '../guards';
import { ProtectedLayout } from '../layouts';

export const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'app',
  beforeLoad: requireAuth,
  component: ProtectedLayout,
});
