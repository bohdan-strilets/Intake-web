import { RegisterForm } from '@features/auth/register/ui';

import { ROUTES } from '@shared/routes';
import { TextLink } from '@shared/ui/controls/TextLink';
import { Stack } from '@shared/ui/layout/Stack';
import { Title } from '@shared/ui/typography/Title';

export const RegisterPage = () => {
  return (
    <Stack gap="xl">
      <Title level={1} size="lg">
        Register
      </Title>

      <RegisterForm />

      <TextLink to={ROUTES.auth.login}>Already have an account?</TextLink>
    </Stack>
  );
};
