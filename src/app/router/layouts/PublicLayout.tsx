import { Outlet } from '@tanstack/react-router';

import { PublicShell } from '@app/layouts/PublicShell';

import { PageTransition } from '@shared/ui/motion/PageTransition';

export const PublicLayout = () => {
  return (
    <PublicShell>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </PublicShell>
  );
};
