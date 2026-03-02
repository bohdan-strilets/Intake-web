export const pwaManifest = {
  name: 'Intake',
  short_name: 'Intake',
  description: 'Track food, not numbers',
  display: 'standalone' as const,
  start_url: '/',
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
      src: '/icon-512.png',
      sizes: '512x512',
      type: 'image/png' as const,
      purpose: 'maskable' as const,
    },
  ],
};
