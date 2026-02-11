import { FoodItem } from '@widgets/FoodItem';

import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Title } from '@shared/ui/typography/Title';

import type { FoodListProps } from './FoodList.types';

export const FoodList = ({ foods }: FoodListProps) => {
  return (
    <Card gap="xs">
      <Title level={2}>Food list:</Title>
      <Stack as="ul" gap="sm">
        {foods.map((food) => {
          return <FoodItem key={food.id} {...food} />;
        })}
      </Stack>
    </Card>
  );
};
