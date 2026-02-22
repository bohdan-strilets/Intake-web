import { FoodItem } from '@widgets/day/FoodItem';

import { useTranslation } from '@shared/i18n';
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

      {isEmpty ? (
        <Paragraph tone="muted" size="sm">
          {tDay('states.empty')}
        </Paragraph>
      ) : (
        <Stack as="ul" gap="sm" aria-live="polite">
          {foods.map((food) => (
            <FoodItem key={food.id} {...food} date={date} />
          ))}
        </Stack>
      )}
    </Card>
  );
};
