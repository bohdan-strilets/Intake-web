import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { listItem } from '@shared/motion';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { FoodDropdown } from '../FoodDropdown';

import type { FoodItemProps } from './FoodItem.types';

export const FoodItem = ({
  date,
  id,
  title,
  icon,
  weight,
  calories,
  protein,
  fat,
  carbs,
}: FoodItemProps) => {
  const { t: tCommon } = useTranslation('common');

  return (
    <motion.li
      variants={listItem}
      initial={false}
      animate="animate"
      exit="exit"
      layout="position"
    >
      <Card tone="primary" shadow="sm" gap="none">
        <Inline justify="between">
          <Inline gap="sm" align="center">
            <Card tone="accentSoft" shadow="sm">
              <Icon name={icon} color="accentPrimary" />
            </Card>
            <Paragraph weight="medium">{title}</Paragraph>
          </Inline>

          <FoodDropdown id={id} date={date} title={title} weight={weight} />
        </Inline>

        <Divider />

        <Inline justify="between">
          <Paragraph>
            <AnimatedNumber value={weight} />
            {tCommon('units.gramsShort')}
          </Paragraph>

          <Paragraph>
            <AnimatedNumber value={calories} />
            {tCommon('units.cal')}
          </Paragraph>
        </Inline>

        <Inline justify="between">
          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.protein')}{' '}
            <AnimatedNumber value={protein} />
            {tCommon('units.gramsShort')}
          </Paragraph>

          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.fat')} <AnimatedNumber value={fat} />
            {tCommon('units.gramsShort')}
          </Paragraph>

          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.carbs')} <AnimatedNumber value={carbs} />
            {tCommon('units.gramsShort')}
          </Paragraph>
        </Inline>
      </Card>
    </motion.li>
  );
};
