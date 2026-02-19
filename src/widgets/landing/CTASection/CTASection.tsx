import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const CTASection = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => navigate({ to: ROUTES.auth.register });

  return (
    <Surface tone="accentSoft">
      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            Start tracking today.
          </Title>

          <Paragraph tone="muted" align="center">
            Create your account in less than a minute.
          </Paragraph>

          <Button size="lg" onClick={handleCreateAccount}>
            Create account
          </Button>

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </Surface>
  );
};
