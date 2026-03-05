import fs from 'node:fs';
import path from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { pwaManifest } from './pwa-manifest';

const WB_DISABLE_LOGS_LINE = 'self.__WB_DISABLE_DEV_LOGS = true;\n';

function patchServiceWorkerDisableLogs(filePath: string): void {
  try {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.startsWith(WB_DISABLE_LOGS_LINE.trim()) || content.includes('__WB_DISABLE_DEV_LOGS')) return;
    fs.writeFileSync(filePath, WB_DISABLE_LOGS_LINE + content, 'utf-8');
  } catch {
    // ignore
  }
}

function createPWAWorkboxDisableLogsPlugin(): import('vite').Plugin {
  return {
    name: 'pwa-workbox-disable-logs',
    configureServer(server) {
      const root = server.config.root;
      const devDistSw = path.resolve(root, 'dev-dist', 'sw.js');
      patchServiceWorkerDisableLogs(devDistSw);
      const watchDir = path.resolve(root, 'dev-dist');
      const tryWatch = () => {
        if (fs.existsSync(watchDir)) {
          try {
            fs.watch(watchDir, (_, filename) => {
              if (filename === 'sw.js') setTimeout(() => patchServiceWorkerDisableLogs(devDistSw), 50);
            });
          } catch {
            // ignore
          }
          return true;
        }
        return false;
      };
      if (!tryWatch()) {
        const interval = setInterval(() => {
          if (tryWatch()) clearInterval(interval);
        }, 500);
        setTimeout(() => clearInterval(interval), 15000);
      }
    },
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      const swPath = path.join(outDir, 'sw.js');
      patchServiceWorkerDisableLogs(swPath);
    },
  };
}

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
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
          /** Avoid "One of the glob patterns doesn't match any files" in dev (dev-dist has no app assets). */
          suppressWarnings: true,
        },
        includeAssets: [
          'favicon-16.png',
          'favicon-32.png',
          'apple-touch-icon.png',
          'icon-192.png',
          'icon-512.png',
          'icon-maskable-512.png',
        ],
        manifest: pwaManifest as import('vite-plugin-pwa').ManifestOptions,
        workbox: {
          disableDevLogs: true,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
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
                  pathname === '/food/add/from-ai' ||
                  pathname.startsWith('/food/')
                );
              },
              handler: 'NetworkOnly',
            },
            {
              urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 32,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: /\.(?:js|css|woff2?)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'static-assets',
                expiration: {
                  maxEntries: 128,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      }),
      createPWAWorkboxDisableLogsPlugin(),
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
