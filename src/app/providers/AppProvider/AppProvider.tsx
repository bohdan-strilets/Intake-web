import { useInitSound } from '@shared/lib/sound';
import { OfflineBanner } from '@shared/ui/feedback/OfflineBanner';
import { ModalHost } from '@shared/ui/overlay/ModalHost';

import { AppBootstrap } from '../AppBootstrap';
import { I18nProvider } from '../I18nProvider';
import { MotionProvider } from '../MotionProvider';
import { PWAProvider } from '../PWAProvider';
import { QueryProvider } from '../QueryProvider';
import { AppRouterProvider } from '../RouterProvider';
import { ThemeProvider } from '../ThemeProvider';
import { ToastProvider } from '../ToastProvider';

export const AppProvider = () => {
  useInitSound();

  return (
    <ThemeProvider>
      <MotionProvider>
        <I18nProvider>
          <QueryProvider>
            <PWAProvider>
              <OfflineBanner />
              <AppBootstrap>
                <AppRouterProvider />
                <ToastProvider />
                <ModalHost />
              </AppBootstrap>
            </PWAProvider>
          </QueryProvider>
        </I18nProvider>
      </MotionProvider>
    </ThemeProvider>
  );
};
