import type { IconName } from '@shared/ui/controls/Icon';

export type DropdownItem = {
  id: string;
  label: string;
  icon?: IconName;
  danger?: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export type DropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
};
