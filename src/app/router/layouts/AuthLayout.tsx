import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AppHeader } from '@widgets/layout/AppHeader';

export const AuthLayout = () => {
  return (
    <AppShell header={<AppHeader />} navigation={null}>
      <Outlet />
    </AppShell>
  );
};
