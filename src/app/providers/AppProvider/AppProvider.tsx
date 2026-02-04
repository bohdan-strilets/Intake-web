import { QueryProvider } from '../QueryProvider';
import { AppRouterProvider } from '../RouterProvider';
import { ThemeProvider } from '../ThemeProvider';

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AppRouterProvider />
      </QueryProvider>
    </ThemeProvider>
  );
};
