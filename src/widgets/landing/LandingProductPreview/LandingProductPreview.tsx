import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Section } from '@shared/ui/layout/Section';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import { fadeUpInView } from '../motion';

import {
  dayLabel,
  dayRow,
  dayValue,
  frame,
  frameContent,
  frameHeader,
  macroPill,
  macroRow,
  pillCarbs,
  pillFat,
  pillProtein,
} from './LandingProductPreview.css';

export const LandingProductPreview = () => {
  const { t } = useTranslation('landing');
  const { t: tCommon } = useTranslation('common');

  return (
    <Section tone="secondary" padding="lg">
      <Container padding="md">
        <motion.div {...fadeUpInView}>
          <Stack gap="2xl" align="center">
            <Title level={2} size="xl" align="center">
              {t('productPreview.title')}
            </Title>
            <Paragraph align="center" tone="muted" size="lg">
              {t('productPreview.description')}
            </Paragraph>
            <motion.div
              className={frame}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={frameHeader}>
                <Paragraph size="sm" weight="bold">
                  {t('productPreview.screenTitle')}
                </Paragraph>
              </div>
              <div className={frameContent}>
                <div className={dayRow}>
                  <span className={dayLabel}>
                    {tCommon('macroNutrients.calories')}
                  </span>
                  <span className={dayValue}>1,847 / 2,100</span>
                </div>
                <div className={dayRow}>
                  <span className={dayLabel}>
                    {tCommon('macroNutrients.protein')}
                  </span>
                  <span className={dayValue}>
                    92 {tCommon('units.gramsShort')}
                  </span>
                </div>
                <div className={dayRow}>
                  <span className={dayLabel}>
                    {tCommon('macroNutrients.fat')}
                  </span>
                  <span className={dayValue}>
                    64 {tCommon('units.gramsShort')}
                  </span>
                </div>
                <div className={dayRow}>
                  <span className={dayLabel}>
                    {tCommon('macroNutrients.carbs')}
                  </span>
                  <span className={dayValue}>
                    198 {tCommon('units.gramsShort')}
                  </span>
                </div>
                <div className={macroRow}>
                  <div className={`${macroPill} ${pillProtein}`}>P</div>
                  <div className={`${macroPill} ${pillFat}`}>F</div>
                  <div className={`${macroPill} ${pillCarbs}`}>C</div>
                </div>
              </div>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
};
