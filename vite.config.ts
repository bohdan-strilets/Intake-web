import path from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { pwaManifest } from './pwa-manifest';

function createApiReadUrlPattern(apiOrigin: string) {
  const origin = JSON.stringify(apiOrigin);
  return new Function(
    '{ request }',
    `if (request.method !== 'GET') return false;
var url = new URL(request.url);
if (url.origin !== ${origin}) return false;
return (url.pathname === '/days' || url.pathname.startsWith('/day-details/') || url.pathname === '/stats');`,
  ) as (ctx: { request: Request }) => boolean;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  let apiOrigin = '';
  try {
    if (env.VITE_API_URL) apiOrigin = new URL(env.VITE_API_URL).origin;
  } catch {
    // ignore
  }

  return {
    plugins: [
      react(),
      vanillaExtractPlugin(),
      VitePWA({
        registerType: 'prompt',
        includeAssets: [
          'favicon-16.png',
          'favicon-32.png',
          'apple-touch-icon.png',
          'icon-192.png',
          'icon-512.png',
        ],
        manifest: pwaManifest,
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [/^\/api\//],
          runtimeCaching: [
            {
              urlPattern: createApiReadUrlPattern(apiOrigin),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-read-cache',
                networkTimeoutSeconds: 10,
                expiration: { maxEntries: 64, maxAgeSeconds: 21600 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: ({ request }) => {
                if (request.method !== 'POST') return false;
                const pathname = new URL(request.url).pathname;
                return (
                  pathname === '/food/add/from-ai' || pathname.startsWith('/food/')
                );
              },
              handler: 'NetworkOnly',
            },
            {
              urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: /\.(?:js|css|woff2?)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'static-assets',
                expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@widgets': path.resolve(__dirname, 'src/widgets'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@entities': path.resolve(__dirname, 'src/entities'),
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },
  };
});
