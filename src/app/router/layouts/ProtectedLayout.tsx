import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AppHeader } from '@widgets/layout/AppHeader';
import { BottomNav } from '@widgets/layout/BottomNav';

import { PageTransition } from '@shared/ui/motion/PageTransition';

export const ProtectedLayout = () => {
  return (
    <AppShell header={<AppHeader />} navigation={<BottomNav />}>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AppShell>
  );
};
