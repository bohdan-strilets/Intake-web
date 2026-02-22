import type { IconName } from '@shared/ui/controls/Icon';

export type InfoRowProps = {
  label?: string;
  value?: string;
  icon?: IconName;
  onClick?: () => void;
};
