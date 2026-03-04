import { motion } from 'framer-motion';

import { useTranslation } from '@shared/i18n';
import { listItem } from '@shared/motion';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';

import { FoodDropdown } from '../FoodDropdown';

import {
  caloriesEmphasis,
  card,
  content,
  dividerSoft,
  foodTitle,
  headerRow,
  iconContainer,
  macroPillCarbs,
  macroPillFat,
  macroPillProtein,
  macroPillsRow,
  secondRow,
  weightSecondary,
} from './FoodItem.css';
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
      <Card tone="primary" shadow="sm" gap="none" className={card}>
        <div className={content}>
          <div className={headerRow}>
            <Inline gap="sm" align="center" style={{ flex: 1, minWidth: 0 }}>
              <div className={iconContainer}>
                <Icon name={icon} color="accentPrimary" />
              </div>
              <span className={foodTitle}>
                {title.slice(0, 1).toUpperCase() + title.slice(1)}
              </span>
            </Inline>
            <FoodDropdown id={id} date={date} title={title} weight={weight} />
          </div>

          <div className={dividerSoft} role="presentation" />

          <div className={secondRow}>
            <span className={weightSecondary}>
              <AnimatedNumber value={weight} />
              {' '}
              {tCommon('units.gramsShort')}
            </span>
            <span className={caloriesEmphasis}>
              <AnimatedNumber value={calories} />
              {' '}
              {tCommon('units.cal')}
            </span>
          </div>

          <div className={macroPillsRow}>
            <span className={macroPillProtein}>
              {tCommon('macroNutrients.protein')}{' '}
              <AnimatedNumber value={protein} />
              {tCommon('units.gramsShort')}
            </span>
            <span className={macroPillFat}>
              {tCommon('macroNutrients.fat')}{' '}
              <AnimatedNumber value={fat} />
              {tCommon('units.gramsShort')}
            </span>
            <span className={macroPillCarbs}>
              {tCommon('macroNutrients.carbs')}{' '}
              <AnimatedNumber value={carbs} />
              {tCommon('units.gramsShort')}
            </span>
          </div>
        </div>
      </Card>
    </motion.li>
  );
};
