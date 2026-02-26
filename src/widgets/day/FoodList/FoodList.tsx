import { AnimatePresence, motion } from 'framer-motion';

import { FoodItem } from '@widgets/day/FoodItem';

import { useTranslation } from '@shared/i18n';
import { fade } from '@shared/motion';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import type { FoodListProps } from './FoodList.types';

export const FoodList = ({ foods, date }: FoodListProps) => {
  const { t: tDay } = useTranslation('day');

  const isEmpty = foods?.length === 0;

  return (
    <Card gap="xs" shadow="sm">
      <Title level={2}>{tDay('entities.food')}</Title>

      <AnimatePresence mode="wait" initial={false}>
        {isEmpty ? (
          <motion.div
            key="empty"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Paragraph tone="muted" size="sm">
              {tDay('states.empty')}
            </Paragraph>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Stack as="ul" gap="sm" aria-live="polite">
              <AnimatePresence initial={false}>
                {foods.map((food) => (
                  <FoodItem key={food.id} {...food} date={date} />
                ))}
              </AnimatePresence>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
