import { RegisterStepper } from '@features/auth/register';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const RegisterPage = () => {
  const { t } = useTranslation('auth');

  return (
    <Card gap="xl" shadow="sm">
      <Title level={1} size="lg">
        {t('titles.createAccount')}
      </Title>

      <RegisterStepper />

      <TextLink to={ROUTES.auth.login}>
        {t('switch.haveAccount')} {t('actions.logIn')}
      </TextLink>
    </Card>
  );
};
