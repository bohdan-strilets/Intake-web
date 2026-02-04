import { Outlet } from '@tanstack/react-router';

import { AppShell } from '@app/layouts/AppShell';

export const RootLayout = () => {
  return (
    <AppShell
      header={<div>Main Header</div>}
      navigation={<div>Main Navigation</div>}
    >
      <Outlet />
    </AppShell>
  );
};
