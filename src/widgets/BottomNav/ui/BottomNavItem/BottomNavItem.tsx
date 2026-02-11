import { Link, useMatchRoute } from '@tanstack/react-router';

import { Icon } from '@shared/ui/controls/Icon';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { navLink } from './BottomNavItem.css';
import type { BottomNavItemProps } from './BottomNavItem.types';

export const BottomNavItem = ({
  to,
  params,
  label,
  icon,
}: BottomNavItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = !!matchRoute({ to, params });

  return (
    <Link to={to} params={params} className={navLink}>
      <Stack align="center" gap="sm">
        <Icon icon={icon} color={isActive ? 'accentPrimary' : 'primary'} />
        <Paragraph size="sm" tone={isActive ? 'accentPrimary' : 'default'}>
          {label}
        </Paragraph>
      </Stack>
    </Link>
  );
};
