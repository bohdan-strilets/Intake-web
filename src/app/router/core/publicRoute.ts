import { createRoute } from '@tanstack/react-router';

import { requireGuest } from '../guards/requireGuest';
import { PublicLayout } from '../layouts';

import { rootRoute } from './rootRoute';

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  beforeLoad: requireGuest,
  component: PublicLayout,
});
