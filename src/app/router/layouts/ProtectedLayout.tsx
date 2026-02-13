import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AppHeader } from '@widgets/layout/AppHeader';
import { BottomNav } from '@widgets/layout/BottomNav';

export const ProtectedLayout = () => {
  return (
    <AppShell header={<AppHeader />} navigation={<BottomNav />}>
      <Outlet />
    </AppShell>
  );
};
