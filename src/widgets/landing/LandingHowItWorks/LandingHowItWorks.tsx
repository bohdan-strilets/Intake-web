import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { fadeUpInView, staggerContainer, staggerItem } from '../motion';

import { step, stepNumber, stepsRow } from './LandingHowItWorks.css';

const STEPS = [
  { key: 'describe', number: 1 },
  { key: 'analyze', number: 2 },
  { key: 'see', number: 3 },
] as const;

export const LandingHowItWorks = () => {
  const { t } = useTranslation('landing');

  return (
    <Section tone="primary" padding="lg">
      <Container padding="md">
        <Stack gap="2xl" align="center">
          <motion.div {...fadeUpInView}>
            <Title level={2} size="xl" align="center">
              {t('howItWorks.title')}
            </Title>
            <Paragraph align="center" tone="muted" size="lg">
              {t('howItWorks.subtitle')}
            </Paragraph>
          </motion.div>
          <motion.div
            className={stepsRow}
            variants={staggerContainer.variants}
            initial={staggerContainer.initial}
            whileInView={staggerContainer.whileInView}
            viewport={staggerContainer.viewport}
          >
            {STEPS.map(({ key, number }) => (
              <motion.div
                key={key}
                className={step}
                variants={staggerItem.variants}
              >
                <div className={stepNumber}>{number}</div>
                <Paragraph weight="bold">
                  {t(`howItWorks.steps.${key}.title`)}
                </Paragraph>
                <Paragraph tone="muted" size="sm">
                  {t(`howItWorks.steps.${key}.description`)}
                </Paragraph>
              </motion.div>
            ))}
          </motion.div>
        </Stack>
      </Container>
    </Section>
  );
};
