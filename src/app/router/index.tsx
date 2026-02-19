import { createRouter } from '@tanstack/react-router';

import { authRoute, protectedRoute, publicRoute, rootRoute } from './core';
import { loginRoute, registerRoute } from './routes/auth';
import {
  calendarRoute,
  dayRoute,
  editEmailRoute,
  editPasswordRoute,
  editProfileRoute,
  profileRoute,
  statsRoute,
} from './routes/protected';
import { homeRoute } from './routes/public';

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([homeRoute]),

  authRoute.addChildren([loginRoute, registerRoute]),

  protectedRoute.addChildren([
    calendarRoute,
    dayRoute,
    statsRoute,
    profileRoute,
    editProfileRoute,
    editEmailRoute,
    editPasswordRoute,
  ]),
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});
