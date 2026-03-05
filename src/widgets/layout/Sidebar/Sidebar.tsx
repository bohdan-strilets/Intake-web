import { DAY_ALIAS } from '@entities/day';

import { ROUTES } from '@shared/routes';
import { Logo } from '@shared/ui/brand/Logo';
import { UserProfile } from '@widgets/layout/UserProfile';
import { ThemeToggle } from '@widgets/theme/ThemeToggle';

import { SidebarItem } from '../SidebarItem';

import { bottomSection, logoSection, navSection, root } from './Sidebar.css';

export const Sidebar = () => {
  return (
    <nav className={root}>
      <div className={logoSection}>
        <Logo size="md" />
      </div>

      <div className={navSection}>
        <SidebarItem to={ROUTES.app.calendar} icon="calendar" />
        <SidebarItem
          to={ROUTES.app.day}
          params={{ date: DAY_ALIAS.TODAY }}
          icon="today"
        />
        <SidebarItem to={ROUTES.app.stats} icon="stats" />
        <SidebarItem to={ROUTES.app.profile} icon="profile" />
      </div>

      <div className={bottomSection}>
        <ThemeToggle />
        <UserProfile showName={false} />
      </div>
    </nav>
  );
};
