import type { IconName } from '@shared/ui/controls/Icon';

export type SelectionItemProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  iconName?: IconName;
};
