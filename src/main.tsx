import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppShell } from '@app/layouts/AppShell';
import { AppProvider } from '@app/providers/AppProvider';

import '@shared/styles/globals.css';

const root = document.getElementById('root') as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <AppShell header={<div>HEADER COMPONENT</div>} navigation={<div>NAVIGATION COMPONENT</div>}>
      <AppProvider />
    </AppShell>
  </StrictMode>,
);
