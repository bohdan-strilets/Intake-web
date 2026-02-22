import { useMatch, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

import { loginRoute } from '@app/router/routes/auth';

import { LoginForm } from '@features/auth/login';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const LoginPage = () => {
  const { t } = useTranslation('auth');

  const navigate = useNavigate();
  const { search } = useMatch({ from: loginRoute.id });

  const wasRegistered = search.registered === '1';

  useEffect(() => {
    if (!wasRegistered) return;

    navigate({ to: ROUTES.auth.login, search: {}, replace: true });
  }, [navigate, wasRegistered]);

  return (
    <Card gap="xl" shadow="sm">
      <Title level={1} size="lg">
        {t('titles.logIn')}
      </Title>

      <LoginForm />

      <TextLink to={ROUTES.auth.register}>
        {t('switch.noAccount')} {t('actions.createAccount')}
      </TextLink>
    </Card>
  );
};
