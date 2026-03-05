import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AppHeader } from '@widgets/layout/AppHeader';
import { BottomNav } from '@widgets/layout/BottomNav';
import { Sidebar } from '@widgets/layout/Sidebar';

import { PageTransition } from '@shared/ui/motion/PageTransition';

export const ProtectedLayout = () => {
  return (
    <AppShell
      header={<AppHeader />}
      navigation={<BottomNav />}
      sidebar={<Sidebar />}
    >
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AppShell>
  );
};
