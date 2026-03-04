import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { fadeUpInView } from '../motion';

export const LandingSolution = () => {
  const { t } = useTranslation('landing');

  return (
    <Section tone="surface" padding="lg">
      <Container padding="md">
        <motion.div {...fadeUpInView}>
          <Stack gap="lg" align="center">
            <Title level={2} size="xl" align="center">
              {t('solution.title')}
            </Title>
            <Paragraph align="center" tone="muted" size="lg">
              {t('solution.description')}
            </Paragraph>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
};
