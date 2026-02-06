import { RegisterForm } from '@features/auth/register/ui';

import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Card } from '@shared/ui/layout/Card';
import { Title } from '@shared/ui/typography/Title';

export const RegisterPage = () => {
  return (
    <Card gap="xl">
      <Title level={1} size="lg">
        Register
      </Title>

      <RegisterForm />

      <TextLink to={ROUTES.auth.login}>Already have an account?</TextLink>
    </Card>
  );
};
