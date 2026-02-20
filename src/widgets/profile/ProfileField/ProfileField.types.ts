import type { IconName } from '@shared/ui/controls/Icon';

export type ProfileFieldProps = {
  label?: string;
  value?: string;
  icon?: IconName;
  onClick?: () => void;
};
