import { useDeleteFoodMutation } from '@features/food/deleteFood/model';
import { EditWeightForm } from '@features/food/editFoodWeight/ui';

import { useConfirm } from '@shared/lib/confirm';
import { useModal } from '@shared/lib/modal';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Dropdown } from '@shared/ui/overlay/Dropdown';
import { Paragraph } from '@shared/ui/typography/Paragraph';

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
  const deleteFoodMutation = useDeleteFoodMutation();
  const { open } = useModal();
  const { openConfirm } = useConfirm();

  const handleDelete = () => {
    openConfirm({
      title: `Delete ${title}?`,
      description: 'This action cannot be undone.',
      confirmText: 'Delete',
      confirmVariant: 'danger',
      onConfirm: async () => {
        await deleteFoodMutation.mutateAsync({ foodId: id, date });
      },
    });
  };

  const handleEdit = () => {
    open(<EditWeightForm foodId={id} date={date} initialState={{ weight }} />);
  };

  return (
    <li>
      <Card tone="primary" shadow="sm" gap="none">
        <Inline justify="between">
          <Inline gap="sm" align="center">
            <Card tone="accentSoft" shadow="sm">
              <Icon name={icon} color="accentPrimary" />
            </Card>
            <Paragraph weight="medium">{title}</Paragraph>
          </Inline>

          <Dropdown
            trigger={<Icon name="more" />}
            items={[
              {
                id: 'edit',
                label: 'Edit',
                icon: 'edit',
                onSelect: handleEdit,
              },
              {
                id: 'delete',
                label: 'Delete',
                icon: 'trash',
                danger: true,
                onSelect: handleDelete,
              },
            ]}
          />
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
