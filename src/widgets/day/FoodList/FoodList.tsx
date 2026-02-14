import { FoodItem } from '@widgets/day/FoodItem';

import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

import type { FoodListProps } from './FoodList.types';

export const FoodList = ({ foods, date }: FoodListProps) => {
  const isEmpty = foods?.length === 0;

  return (
    <Card gap="xs" shadow="sm">
      <Title level={2}>Food</Title>

      {isEmpty ? (
        <Paragraph tone="muted" size="sm">
          No entries for this day.
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
