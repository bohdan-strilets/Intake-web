import { Link, useMatchRoute } from '@tanstack/react-router';

import { Icon } from '@shared/ui/controls/Icon';

import { navLink } from './BottomNavItem.css';
import type { BottomNavItemProps } from './BottomNavItem.types';

export const BottomNavItem = ({ to, params, icon }: BottomNavItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, params });

  return (
    <Link to={to} params={params} className={navLink({ isActive })}>
      <Icon name={icon} color={isActive ? 'accentPrimary' : 'primary'} />
    </Link>
  );
};
