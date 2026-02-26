import { Link, useMatchRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

import { Icon } from '@shared/ui/controls/Icon';

import { iconWrapper, indicator, navLink } from './BottomNavItem.css';
import type { BottomNavItemProps } from './BottomNavItem.types';

export const BottomNavItem = ({ to, params, icon }: BottomNavItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, params });

  return (
    <Link to={to} params={params} className={navLink}>
      {isActive && (
        <motion.div
          layoutId="bottom-nav-indicator"
          layout
          className={indicator}
          transition={{
            type: 'spring',
            stiffness: 480,
            damping: 32,
          }}
        />
      )}

      <div className={iconWrapper}>
        <Icon name={icon} color={isActive ? 'accentPrimary' : 'primary'} />
      </div>
    </Link>
  );
};
