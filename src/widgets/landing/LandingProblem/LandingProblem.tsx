import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { fadeUpInView } from '../motion';

export const LandingProblem = () => {
  const { t } = useTranslation('landing');

  return (
    <Section tone="secondary" padding="lg">
      <Container padding="md">
        <motion.div {...fadeUpInView}>
          <Stack gap="2xl" align="center">
            <Title level={2} size="xl" align="center">
            {t('problem.title.line1')}
            <br />
            {t('problem.title.line2')}
          </Title>
          <Paragraph align="center" tone="muted" size="lg">
            {t('problem.description')}
          </Paragraph>
          <Stack gap="xl" align="stretch" style={{ width: '100%', maxWidth: 360 }}>
            <Stack gap="xs">
              <Paragraph weight="bold">
                {t('problem.points.tooManyFields.title')}
              </Paragraph>
              <Paragraph tone="muted" size="sm">
                {t('problem.points.tooManyFields.description')}
              </Paragraph>
            </Stack>
            <Stack gap="xs">
              <Paragraph weight="bold">
                {t('problem.points.tooMuchCounting.title')}
              </Paragraph>
              <Paragraph tone="muted" size="sm">
                {t('problem.points.tooMuchCounting.description')}
              </Paragraph>
            </Stack>
          </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
};
