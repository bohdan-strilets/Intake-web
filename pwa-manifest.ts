// Shortcut URLs must match app router: see src/shared/routes/paths.ts (ROUTES.app)
export const pwaManifest = {
  name: 'Intake',
  short_name: 'Intake',
  description: 'Track food, not numbers',
  scope: '/',
  start_url: '/?source=pwa',
  display: 'standalone' as const,
  display_override: ['window-controls-overlay', 'standalone'],
  theme_color: '#EEF1F4',
  background_color: '#EEF1F4',
  orientation: 'portrait-primary' as const,
  icons: [
    {
      src: '/icon-192.png',
      sizes: '192x192',
      type: 'image/png' as const,
      purpose: 'any' as const,
    },
    {
      src: '/icon-512.png',
      sizes: '512x512',
      type: 'image/png' as const,
      purpose: 'any' as const,
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png' as const,
      purpose: 'any' as const,
    },
    // Maskable: use a separate 512×512 asset with ~80% safe area (padding); add to public/
    {
      src: '/icon-maskable-512.png',
      sizes: '512x512',
      type: 'image/png' as const,
      purpose: 'maskable' as const,
    },
  ],
  shortcuts: [
    {
      name: 'Calendar',
      short_name: 'Calendar',
      url: '/calendar',
      icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' as const }],
    },
    {
      name: 'Stats',
      short_name: 'Stats',
      url: '/stats',
      icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' as const }],
    },
  ],
};
