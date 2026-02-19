import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Container } from '@shared/ui/layout/Container';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => navigate({ to: ROUTES.auth.register });
  const handleLogin = () => navigate({ to: ROUTES.auth.login });

  return (
    <Container>
      <Stack gap="3xl">
        <Stack gap="sm">
          <Title level={1} size="2xl" align="center">
            Track food.
            <br />
            Not numbers.
          </Title>
          <Paragraph align="center" size="lg" weight="medium">
            Describe your meal. Intake does the math.
          </Paragraph>
        </Stack>

        <Paragraph align="center" tone="muted">
          Describe what you ate in your own words. Intake understands and
          calculates everything automatically.
        </Paragraph>

        <Image src="/landing/today-scr.webp" alt="Daily food tracking screen" />

        <Stack gap="md">
          <Button
            size="lg"
            iconRight="chevronRight"
            iconColor="accentOn"
            onClick={handleCreateAccount}
          >
            Create account
          </Button>
          <Button size="lg" variant="secondary" onClick={handleLogin}>
            Log in
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
