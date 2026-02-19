import { Logo } from '@shared/ui/brand/Logo';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';

import type { PublicShellProps } from './PublicShell.types';

export const PublicShell = ({ children }: PublicShellProps) => {
  return (
    <>
      <Stack as="header" align="center">
        <Spacer size="xl" />
        <Logo size="md" />
        <Spacer size="2xl" />
      </Stack>

      <main>{children}</main>
    </>
  );
};
