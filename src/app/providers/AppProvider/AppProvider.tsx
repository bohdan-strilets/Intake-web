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
        </AppBootstrap>
      </QueryProvider>
      <ToastProvider />
    </ThemeProvider>
  );
};
