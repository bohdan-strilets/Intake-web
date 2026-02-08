import { createRoute } from '@tanstack/react-router';

import { PublicLayout } from '../layouts';

import { rootRoute } from './rootRoute';

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  component: PublicLayout,
});
