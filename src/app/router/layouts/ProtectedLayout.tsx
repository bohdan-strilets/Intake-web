import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AppHeader } from '@widgets/AppHeader';
import { BottomNav } from '@widgets/BottomNav';

export const ProtectedLayout = () => {
  return (
    <AppShell header={<AppHeader />} navigation={<BottomNav />}>
      <Outlet />
    </AppShell>
  );
};
