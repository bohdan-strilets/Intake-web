import { RequestPasswordResetForm } from '@features/auth/requestPasswordReset';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const ForgotPasswordPage = () => {
  const { t } = useTranslation('auth');

  return (
    <Card gap="xl" shadow="sm">
      <Title level={1} size="lg">
        {t('titles.forgotPassword')}
      </Title>

      <p>{t('passwordReset.requestDescription')}</p>

      <RequestPasswordResetForm />

      <TextLink to={ROUTES.auth.login}>
        {t('actions.back')} {t('titles.logIn')}
      </TextLink>
    </Card>
  );
};
