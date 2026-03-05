import { Outlet } from '@tanstack/react-router';

import { AuthShell } from '@app/layouts/AuthShell';

import { PageTransition } from '@shared/ui/motion/PageTransition';

export const AuthLayout = () => {
  return (
    <AuthShell>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AuthShell>
  );
};
