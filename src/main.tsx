import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProvider } from '@app/providers/AppProvider';

import '@shared/styles/reset.css';
import '@shared/styles/globals.css';

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
