import { RegisterForm } from '@features/auth/register';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Stack } from '@shared/ui/layout/Stack';
import { Title } from '@shared/ui/typography/Title';

export const RegisterPage = () => {
  const { t } = useTranslation('auth');

  return (
    <Stack gap="xl">
      <Title level={1} size="lg">
        {t('titles.createAccount')}
      </Title>

      <RegisterForm />

      <TextLink to={ROUTES.auth.login}>
        {t('switch.haveAccount')} {t('actions.logIn')}
      </TextLink>
    </Stack>
  );
};
