import { useDeleteFoodMutation } from '@features/food/deleteFood';
import { EditWeightForm } from '@features/food/editFoodWeight';

import { useTranslation } from '@shared/i18n';
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
  const { t: tCommon } = useTranslation('common');
  const { t: tDay } = useTranslation('day');

  const deleteFoodMutation = useDeleteFoodMutation();
  const { open } = useModal();
  const { openConfirm } = useConfirm();

  const handleDelete = () => {
    openConfirm({
      title: tDay('dialogs.deleteFood.title', { title }),
      description: tDay('dialogs.deleteFood.description'),
      confirmText: tCommon('actions.delete'),
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
                label: tCommon('actions.edit'),
                icon: 'edit',
                onSelect: handleEdit,
              },
              {
                id: 'delete',
                label: tCommon('actions.delete'),
                icon: 'trash',
                danger: true,
                onSelect: handleDelete,
              },
            ]}
          />
        </Inline>

        <Divider />

        <Inline justify="between">
          <Paragraph>
            {weight}
            {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph>
            {calories}
            {tCommon('units.cal')}
          </Paragraph>
        </Inline>

        <Inline justify="between">
          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.protein')} {protein}
            {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.fat')} {fat}
            {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            {tCommon('macroNutrients.carbs')} {carbs}
            {tCommon('units.gramsShort')}
          </Paragraph>
        </Inline>
      </Card>
    </li>
  );
};
