import { ROUTES } from '@shared/routes';
import { Inline } from '@shared/ui/layout/Inline';

import { root } from './BottomNav.css';
import { BottomNavItem } from './ui/BottomNavItem';

export const BottomNav = () => {
  return (
    <Inline as="nav" justify="between" className={root}>
      <BottomNavItem
        to={ROUTES.app.calendar}
        label="Calendar"
        icon="calendar"
      />
      <BottomNavItem to={ROUTES.app.today} label="Today" icon="today" />
      <BottomNavItem to={ROUTES.app.stats} label="Stats" icon="stats" />
      <BottomNavItem to={ROUTES.app.profile} label="Profile" icon="profile" />
    </Inline>
  );
};
