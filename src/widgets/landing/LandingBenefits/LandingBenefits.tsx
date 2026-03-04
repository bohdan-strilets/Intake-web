import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { Icon } from '@shared/ui/controls/Icon';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { fadeUpInView, staggerContainer, staggerItem } from '../motion';

import { card, cardIcon, grid } from './LandingBenefits.css';

const BENEFITS = [
  { key: 'noManualLogging', icon: 'edit' as const },
  { key: 'aiParsing', icon: 'magic' as const },
  { key: 'dailyClarity', icon: 'calendar' as const },
  { key: 'minimalUi', icon: 'list' as const },
] as const;

export const LandingBenefits = () => {
  const { t } = useTranslation('landing');

  return (
    <Section tone="surface" padding="lg">
      <Container padding="md">
        <Stack gap="2xl" align="center">
          <motion.div {...fadeUpInView}>
            <Title level={2} size="xl" align="center">
              {t('benefits.title')}
            </Title>
            <Paragraph align="center" tone="muted" size="lg">
              {t('benefits.subtitle')}
            </Paragraph>
          </motion.div>
          <motion.div
            className={grid}
            variants={staggerContainer.variants}
            initial={staggerContainer.initial}
            whileInView={staggerContainer.whileInView}
            viewport={staggerContainer.viewport}
          >
            {BENEFITS.map(({ key, icon }) => (
              <motion.div
                key={key}
                className={card}
                variants={staggerItem.variants}
              >
                <div className={cardIcon}>
                  <Icon name={icon} color="accentPrimary" size="md" />
                </div>
                <Stack gap="xs">
                  <Paragraph weight="bold">
                    {t(`benefits.items.${key}.title`)}
                  </Paragraph>
                  <Paragraph tone="muted" size="sm">
                    {t(`benefits.items.${key}.description`)}
                  </Paragraph>
                </Stack>
              </motion.div>
            ))}
          </motion.div>
        </Stack>
      </Container>
    </Section>
  );
};
