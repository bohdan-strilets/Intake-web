import App from '../../../App';
import { ThemeProvider } from '../ThemeProvider';

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
