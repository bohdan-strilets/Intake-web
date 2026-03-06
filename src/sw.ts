/// <reference lib="webworker" />

import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare const self: ServiceWorkerGlobalScope & typeof globalThis;

// Precache app assets (injected by vite-plugin-pwa)
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// SPA fallback
registerRoute(
  new NavigationRoute(createHandlerBoundToURL('/index.html')),
);

self.skipWaiting();
clientsClaim();

// Push notifications (food reminders)
self.addEventListener('push', (event) => {
  if (!self.Notification || self.Notification.permission !== 'granted') return;

  const payload = event.data?.json() as { title?: string; body?: string } | undefined;
  if (!payload) return;

  event.waitUntil(
    self.registration.showNotification(payload.title ?? 'Intake', {
      body: payload.body,
      icon: '/icon-192.png',
      tag: 'food-reminder',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(self.clients.openWindow('/'));
});
