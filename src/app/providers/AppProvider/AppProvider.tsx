import { ModalHost } from '@shared/ui/overlay/ModalHost';

import { AppBootstrap } from '../AppBootstrap';
import { I18nProvider } from '../I18nProvider';
import { QueryProvider } from '../QueryProvider';
import { AppRouterProvider } from '../RouterProvider';
import { ThemeProvider } from '../ThemeProvider';
import { ToastProvider } from '../ToastProvider';

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <QueryProvider>
          <AppBootstrap>
            <AppRouterProvider />
            <ToastProvider />
            <ModalHost />
          </AppBootstrap>
        </QueryProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};
