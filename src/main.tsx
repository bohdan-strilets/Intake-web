import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

import { AppProvider } from '@app/providers/AppProvider';
import { setSWRegistration } from '@shared/lib/push/swRegistration';

import '@shared/styles/reset.css';
import '@shared/styles/globals.css';

registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    if (registration) setSWRegistration(registration);
  },
});

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
