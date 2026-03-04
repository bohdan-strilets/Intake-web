import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { heroTransition } from '../motion';

import {
  content,
  gradientOrb,
  headline,
  mockup,
  mockupBar,
  mockupBody,
  mockupChip,
  mockupInput,
  root,
} from './LandingHero.css';

export const LandingHero = () => {
  const { t: tLanding } = useTranslation('landing');
  const { t: tAuth } = useTranslation('auth');
  const navigate = useNavigate();

  const handlePrimaryCta = () => navigate({ to: ROUTES.auth.register });
  const handleSecondaryCta = () => navigate({ to: ROUTES.auth.login });

  return (
    <Section tone="gradient" padding="xl" className={root}>
      <div className={gradientOrb} aria-hidden />
      <Container padding="md" className={content}>
        <Stack gap="xl" align="center">
          <Stack gap="md" align="center">
            <motion.div {...heroTransition(0)}>
              <Title level={1} size="2xl" align="center" className={headline}>
                {tLanding('hero.title.line1')}
                <br />
                {tLanding('hero.title.line2')}
              </Title>
            </motion.div>
            <motion.div {...heroTransition(0.08)}>
              <Paragraph align="center" size="lg" tone="muted">
                {tLanding('hero.subtitle')}
              </Paragraph>
            </motion.div>
          </Stack>

          <motion.div {...heroTransition(0.16)} style={{ width: '100%' }}>
            <Stack gap="md" align="center">
              <Button
                size="lg"
                iconRight="chevronRight"
                iconColor="accentOn"
                onClick={handlePrimaryCta}
                fullWidth
              >
                {tAuth('actions.createAccount')}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleSecondaryCta}
                fullWidth
              >
                {tAuth('actions.logIn')}
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            {...heroTransition(0.28)}
            style={{ width: '100%' }}
            className={mockup}
          >
            <div className={mockupBar}>
              <Paragraph size="xs" tone="muted">
                {tLanding('hero.mockupTitle')}
              </Paragraph>
            </div>
            <div className={mockupBody}>
              <input
                type="text"
                className={mockupInput}
                placeholder={tLanding('hero.mockupPlaceholder')}
                readOnly
                tabIndex={-1}
                aria-hidden
              />
              <span className={mockupChip}>{tLanding('hero.mockupChip')}</span>
            </div>
          </motion.div>
        </Stack>
      </Container>
    </Section>
  );
};
