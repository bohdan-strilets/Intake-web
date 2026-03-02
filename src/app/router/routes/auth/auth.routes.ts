import { createRoute } from '@tanstack/react-router';

import { authRoute } from '@app/router/core';

import { ForgotPasswordPage } from '@pages/forgotPassword';
import { LoginPage } from '@pages/login';
import { RegisterPage } from '@pages/register';
import { ResetPasswordPage } from '@pages/resetPassword';
import { VerifyEmailPage } from '@pages/verifyEmail';

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

export const forgotPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: ROUTES.auth.forgotPassword,
  component: ForgotPasswordPage,
});

export const resetPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path: ROUTES.auth.resetPassword,
  component: ResetPasswordPage,
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : '',
  }),
});

export const verifyEmailRoute = createRoute({
  getParentRoute: () => authRoute,
  path: ROUTES.auth.verifyEmail,
  component: VerifyEmailPage,
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : '',
  }),
});
