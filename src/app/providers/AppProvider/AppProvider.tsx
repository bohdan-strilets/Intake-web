import { ModalHost } from '@shared/ui/overlay/ModalHost';

import { AppBootstrap } from '../AppBootstrap';
import { QueryProvider } from '../QueryProvider';
import { AppRouterProvider } from '../RouterProvider';
import { ThemeProvider } from '../ThemeProvider';
import { ToastProvider } from '../ToastProvider';

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AppBootstrap>
          <AppRouterProvider />
          <ToastProvider />
          <ModalHost />
        </AppBootstrap>
      </QueryProvider>
    </ThemeProvider>
  );
};
