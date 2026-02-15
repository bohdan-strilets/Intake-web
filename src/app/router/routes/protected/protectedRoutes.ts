import { createRoute } from '@tanstack/react-router';

import { protectedRoute } from '@app/router/core';

import { DashboardPage } from '@pages/dashboard';
import { DayPage } from '@pages/day';
import { EditProfilePage } from '@pages/editProfile';
import { ProfilePage } from '@pages/profile';
import { StatsPage } from '@pages/stats';

import { ROUTES } from '@shared/routes';

export const calendarRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: ROUTES.app.calendar,
  component: DashboardPage,
});

export const dayRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: ROUTES.app.day,
  component: DayPage,
});

export const statsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: ROUTES.app.stats,
  component: StatsPage,
});

export const profileRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: ROUTES.app.profile,
  component: ProfilePage,
});

export const editProfileRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: ROUTES.app.editProfile,
  component: EditProfilePage,
});
