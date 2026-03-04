import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { useTranslation } from '@shared/i18n';

import { fadeUpInView } from '../motion';

export const LandingCTA = () => {
  const { t: tLanding } = useTranslation('landing');
  const { t: tAuth } = useTranslation('auth');
  const navigate = useNavigate();

  const handleCta = () => navigate({ to: ROUTES.auth.register });

  return (
    <Section tone="gradientSoft" padding="xl">
      <Container padding="md">
        <motion.div {...fadeUpInView}>
          <Stack gap="xl" align="center">
            <Title level={2} size="xl" align="center">
              {tLanding('cta.title')}
            </Title>
            <Paragraph align="center" tone="muted" size="lg">
              {tLanding('cta.description')}
            </Paragraph>
            <Button size="lg" onClick={handleCta} iconRight="chevronRight" iconColor="accentOn">
              {tAuth('actions.createAccount')}
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
};
