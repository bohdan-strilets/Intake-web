import { DAY_ALIAS } from '@entities/day';

import { ROUTES } from '@shared/routes';
import { Inline } from '@shared/ui/layout/Inline';

import { BottomNavItem } from '../BottomNavItem';

export const BottomNav = () => {
  return (
    <Inline as="nav" justify="between">
      <BottomNavItem to={ROUTES.app.calendar} icon="calendar" />
      <BottomNavItem
        to={ROUTES.app.day}
        params={{ date: DAY_ALIAS.TODAY }}
        icon="today"
      />
      <BottomNavItem to={ROUTES.app.stats} icon="stats" />
      <BottomNavItem to={ROUTES.app.profile} icon="profile" />
    </Inline>
  );
};
