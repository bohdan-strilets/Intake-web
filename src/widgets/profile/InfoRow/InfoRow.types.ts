import type { ReactNode } from 'react';

import type { IconName } from '@shared/ui/controls/Icon';

export type InfoRowProps = {
  label?: string;
  value?: string | ReactNode;
  icon?: IconName;
  onClick?: () => void;
};
