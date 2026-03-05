import { Link, useMatchRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import { Icon } from '@shared/ui/controls/Icon';

import { iconWrapper, indicator, navLink } from './SidebarItem.css';
import type { SidebarItemProps } from './SidebarItem.types';

export const SidebarItem = ({ to, params, icon }: SidebarItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, params });

  return (
    <Link to={to} params={params} className={navLink}>
      {isActive && (
        <motion.div
          layoutId="sidebar-nav-indicator"
          layout
          className={indicator}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 36,
          }}
        />
      )}

      <div className={iconWrapper}>
        <Icon name={icon} color={isActive ? 'accentPrimary' : 'primary'} />
      </div>
    </Link>
  );
};
