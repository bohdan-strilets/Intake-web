import App from '../../../App';
import { QueryProvider } from '../QueryProvider';
import { ThemeProvider } from '../ThemeProvider';

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ThemeProvider>
  );
};
