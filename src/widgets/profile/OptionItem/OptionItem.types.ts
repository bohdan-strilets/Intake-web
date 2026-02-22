import type { IconName } from '@shared/ui/controls/Icon';

export type OptionItemProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  iconName?: IconName;
  disabled?: boolean;
  loading?: boolean;
};
