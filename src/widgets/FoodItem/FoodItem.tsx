import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { FoodItemProps } from './FoodItem.types';

export const FoodItem = ({
  title,
  icon,
  weight,
  calories,
  protein,
  fat,
  carbs,
}: FoodItemProps) => {
  return (
    <li>
      <Card tone="primary" shadow="sm" gap="none">
        <Inline gap="sm">
          <Card tone="accentSoft">
            <Icon name={icon} color="accentPrimary" />
          </Card>
          <Paragraph weight="medium">{title}</Paragraph>
        </Inline>

        <Divider />

        <Inline justify="between">
          <Paragraph>{weight}g</Paragraph>
          <Paragraph>{calories}cal</Paragraph>
        </Inline>

        <Inline justify="between">
          <Paragraph size="sm" tone="muted">
            Protein {protein}g
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            Fat {fat}g
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            Carbs {carbs}g
          </Paragraph>
        </Inline>
      </Card>
    </li>
  );
};
