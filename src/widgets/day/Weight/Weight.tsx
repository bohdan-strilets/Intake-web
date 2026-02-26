import { AnimatePresence, motion } from 'framer-motion';

import { EditWeightForm } from '@features/day/editWeight';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { collapse } from '@shared/motion';
import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { root } from './Weight.css';
import type { WeightProps } from './Weight.types';

export const Weight = ({ dayId, date, weight }: WeightProps) => {
  const { open } = useModal();

  const isWeightEmpty = weight == null;

  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  const handleEdit = () => {
    open(
      <EditWeightForm dayId={dayId} date={date} initialState={{ weight }} />,
    );
  };

  return (
    <Card shadow="sm">
      <AnimatePresence mode="wait">
        {isWeightEmpty ? (
          <motion.div
            key="empty"
            variants={collapse}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Stack gap="md">
              <Button variant="ghost" size="sm" onClick={handleEdit} fullWidth>
                {tDay('actions.addWeight')}
              </Button>

              <Paragraph tone="muted" size="xs" align="center">
                {tDay('summary.addWeightDescription')}
              </Paragraph>
            </Stack>
          </motion.div>
        ) : (
          <motion.div
            key="value"
            variants={collapse}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Inline justify="between">
              <Inline justify="between" className={root}>
                <Paragraph>{tDay('entities.weight')}:</Paragraph>
                <Paragraph weight="medium">
                  <AnimatedNumber value={weight} /> {tCommon('units.kilograms')}
                </Paragraph>
              </Inline>
              <Button variant="ghost" size="sm" onClick={handleEdit}>
                <Icon name="edit" size="sm" />
              </Button>
            </Inline>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
