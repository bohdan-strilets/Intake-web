import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import { DashboardPage } from '@pages/dashboard';
import { DayPage } from '@pages/day';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { RegisterPage } from '@pages/register';
import { StatsPage } from '@pages/stats';

import { ROUTES } from '@shared/routes';

import { RootLayout } from './RootLayout';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.auth.login,
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.auth.register,
  component: RegisterPage,
});

const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.app.calendar,
  component: DashboardPage,
});

const todayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.app.today,
  component: DayPage,
});

const dayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.app.day,
  component: DayPage,
});

const statsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.app.stats,
  component: StatsPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.app.profile,
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  calendarRoute,
  todayRoute,
  dayRoute,
  statsRoute,
  profileRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});
