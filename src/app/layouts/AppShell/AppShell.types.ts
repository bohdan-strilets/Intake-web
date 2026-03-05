import type { ReactNode } from 'react';

export type AppShellProps = {
  header?: ReactNode;
  navigation?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};
