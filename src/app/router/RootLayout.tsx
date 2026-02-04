import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { BottomNav } from '@widgets/BottomNav';

export const RootLayout = () => {
  return (
    <AppShell header={<div>Intake</div>} navigation={<BottomNav />}>
      <Outlet />
    </AppShell>
  );
};
