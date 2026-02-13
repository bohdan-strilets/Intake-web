import { formatDate } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { Inline } from '@shared/ui/layout/Inline';

import { BottomNavItem } from '../BottomNavItem';

import { root } from './BottomNav.css';

export const BottomNav = () => {
  return (
    <Inline as="nav" justify="between" className={root}>
      <BottomNavItem
        to={ROUTES.app.calendar}
        label="Calendar"
        icon="calendar"
      />
      <BottomNavItem
        to={ROUTES.app.day}
        params={{ date: formatDate(new Date()) }}
        label="Today"
        icon="today"
      />
      <BottomNavItem to={ROUTES.app.stats} label="Stats" icon="stats" />
      <BottomNavItem to={ROUTES.app.profile} label="Profile" icon="profile" />
    </Inline>
  );
};
