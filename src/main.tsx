import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProvider } from '@app/providers/AppProvider';
import { setSWRegistration } from '@shared/lib/push/swRegistration';
import { registerSW } from 'virtual:pwa-register';

import '@shared/styles/reset.css';
import '@shared/styles/globals.css';

registerSW({
  immediate: true,
  onNeedRefresh: () => {},
  onOfflineReady: () => {},
  onRegisteredSW(
    _swScriptUrl: string,
    registration: ServiceWorkerRegistration | undefined,
  ) {
    if (registration) setSWRegistration(registration);
  },
});

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
