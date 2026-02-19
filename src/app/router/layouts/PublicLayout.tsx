import { Outlet } from '@tanstack/react-router';

import { PublicShell } from '@app/layouts/PublicShell';

export const PublicLayout = () => {
  return (
    <PublicShell>
      <Outlet />
    </PublicShell>
  );
};
