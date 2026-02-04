import type { ReactNode } from 'react';

export type AppShellProps = {
  header?: ReactNode;
  navigation?: ReactNode;
  children: ReactNode;
};
