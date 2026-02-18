import { useMatch, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

import { loginRoute } from '@app/router/routes/auth';

import { LoginForm } from '@features/auth/login';

import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { search } = useMatch({ from: loginRoute.id });

  const wasRegistered = search.registered === '1';

  useEffect(() => {
    if (!wasRegistered) return;

    // notify.success('Account created. Please log in.');

    navigate({ to: ROUTES.auth.login, search: {}, replace: true });
  }, [navigate, wasRegistered]);

  return (
    <Card gap="xl" shadow="sm">
      <Title level={1} size="lg">
        Login
      </Title>

      <LoginForm />

      <TextLink to={ROUTES.auth.register}>
        Don't have an account? Register
      </TextLink>
    </Card>
  );
};
