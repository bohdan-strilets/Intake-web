import { useDeleteFoodMutation } from '@features/food/deleteFood';
import { EditWeightForm } from '@features/food/editFoodWeight';

import { useTranslation } from '@shared/i18n';
import { useConfirm } from '@shared/lib/confirm';
import { useModal } from '@shared/lib/modal';
import { Icon } from '@shared/ui/controls/Icon';
import { Dropdown, type DropdownItem } from '@shared/ui/overlay/Dropdown';

import type { FoodDropdownProps } from './FoodDropdown.types';

export const FoodDropdown = ({
  id,
  date,
  title,
  weight,
}: FoodDropdownProps) => {
  const { t: tCommon } = useTranslation('common');
  const { t: tDay } = useTranslation('day');

  const { mutateAsync: deleteFoodMutation } = useDeleteFoodMutation();
  const { open } = useModal();
  const { openConfirm } = useConfirm();

  const handleDelete = () => {
    openConfirm({
      title: tDay('dialogs.deleteFood.title', { title }),
      description: tDay('dialogs.deleteFood.description'),
      confirmText: tCommon('actions.delete'),
      confirmVariant: 'danger',
      onConfirm: async () => await deleteFoodMutation({ foodId: id, date }),
    });
  };

  const handleEdit = () => {
    open(<EditWeightForm foodId={id} date={date} initialState={{ weight }} />);
  };

  const options: DropdownItem[] = [
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
  ];

  return <Dropdown trigger={<Icon name="more" />} items={options} />;
};
