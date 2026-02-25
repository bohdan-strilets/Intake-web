import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AuthHeader } from '@widgets/layout/AuthHeader';

export const AuthLayout = () => {
  return (
    <AppShell header={<AuthHeader />} navigation={null}>
      <Outlet />
    </AppShell>
  );
};
