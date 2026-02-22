import { useNavigate } from '@tanstack/react-router';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Container } from '@shared/ui/layout/Container';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const HeroSection = () => {
  const { t: tLanding } = useTranslation('landing');
  const { t: tAuth } = useTranslation('auth');

  const navigate = useNavigate();

  const handleCreateAccount = () => navigate({ to: ROUTES.auth.register });
  const handleLogin = () => navigate({ to: ROUTES.auth.login });

  return (
    <Container>
      <Stack gap="3xl">
        <Stack gap="sm">
          <Title level={1} size="2xl" align="center">
            {tLanding('hero.title.line1')}
            <br />
            {tLanding('hero.title.line2')}
          </Title>
          <Paragraph align="center" size="lg" weight="medium">
            {tLanding('hero.subtitle')}
          </Paragraph>
        </Stack>

        <Paragraph align="center" tone="muted">
          {tLanding('hero.description')}
        </Paragraph>

        <Image src="/landing/today-scr.webp" alt={tLanding('hero.imageAlt')} />

        <Stack gap="md">
          <Button
            size="lg"
            iconRight="chevronRight"
            iconColor="accentOn"
            onClick={handleCreateAccount}
          >
            {tAuth('actions.createAccount')}
          </Button>
          <Button size="lg" variant="secondary" onClick={handleLogin}>
            {tAuth('actions.logIn')}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
