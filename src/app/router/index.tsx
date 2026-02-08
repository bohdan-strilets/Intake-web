import { createRouter } from '@tanstack/react-router';

import { authRoute, protectedRoute, publicRoute, rootRoute } from './core';
import { loginRoute, registerRoute } from './routes/auth';
import {
  calendarRoute,
  dayRoute,
  profileRoute,
  statsRoute,
  todayRoute,
} from './routes/protected';
import { homeRoute } from './routes/public';

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([homeRoute]),

  authRoute.addChildren([loginRoute, registerRoute]),

  protectedRoute.addChildren([
    calendarRoute,
    todayRoute,
    dayRoute,
    statsRoute,
    profileRoute,
  ]),
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});
