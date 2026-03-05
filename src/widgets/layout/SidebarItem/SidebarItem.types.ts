import type { LinkProps } from '@tanstack/react-router';

import type { IconName } from '@shared/ui/controls/Icon';

export type SidebarItemProps = {
  to: string;
  params?: LinkProps['params'];
  icon: IconName;
};
