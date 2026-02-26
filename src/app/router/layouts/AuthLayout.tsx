import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

import { AuthHeader } from '@widgets/layout/AuthHeader';

import { PageTransition } from '@shared/ui/motion/PageTransition';

export const AuthLayout = () => {
  return (
    <AppShell header={<AuthHeader />} navigation={null}>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AppShell>
  );
};
