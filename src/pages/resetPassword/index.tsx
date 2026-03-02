import { useEffect } from 'react';
import { useMatch, useNavigate } from '@tanstack/react-router';

import { resetPasswordRoute } from '@app/router/routes/auth';

import { ResetPasswordForm } from '@features/auth/resetPassword';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const ResetPasswordPage = () => {
  const { t } = useTranslation('auth');

  const navigate = useNavigate();
  const { search } = useMatch({ from: resetPasswordRoute.id });

  const token = typeof search.token === 'string' ? search.token : '';

  useEffect(() => {
    if (!token) {
      navigate({ to: ROUTES.auth.forgotPassword, replace: true });
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return (
    <Card gap="xl" shadow="sm">
      <Title level={1} size="lg">
        {t('titles.resetPassword')}
      </Title>

      <p>{t('passwordReset.resetDescription')}</p>

      <ResetPasswordForm token={token} />

      <TextLink to={ROUTES.auth.login}>{t('actions.back')} {t('titles.logIn')}</TextLink>
    </Card>
  );
};
