import type { LinkProps } from '@tanstack/react-router';

import type { IconName } from '@shared/ui/controls/Icon';

export type BottomNavItemProps = {
  to: string;
  params?: LinkProps['params'];
  icon: IconName;
};
