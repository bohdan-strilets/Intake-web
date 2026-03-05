# PWA icons & assets

## Icons

- **icon-192.png**, **icon-512.png** — general purpose (any).
- **apple-touch-icon.png** — 180×180, used by iOS Home Screen.
- **icon-maskable-512.png** — 512×512, **maskable** only. Must have safe padding so the visible area is ~80% (content centered); do not reuse the same file as icon-512.png. Generate e.g. with [Maskable.app](https://maskable.app/) or similar. Until this file exists, Android may use a cropped version of the regular icon.

Ensure all listed icon files exist in `public/` for correct PWA behaviour on Android and iOS.

## iOS splash screens (apple-touch-startup-image)

Optional. If present, iOS shows these at PWA launch instead of a blank or stretched screen. Add PNGs to `public/` with **exact** dimensions (physical pixels):

| File | Device (logical) | Use case |
|------|-------------------|----------|
| splash-750x1334.png | 375×667 @2x | iPhone 6/7/8, SE |
| splash-1125x2436.png | 375×812 @3x | iPhone X/XS, 11 Pro, 12/13 mini |
| splash-1170x2532.png | 390×844 @3x | iPhone 12/13/14, 14 Plus |
| splash-1284x2778.png | 428×926 @3x | iPhone 12/13/14 Pro Max |
| splash-1536x2048.png | 768×1024 @2x | iPad portrait |

Design: use app background (e.g. light `#EEF1F4` / dark `#0F1012`) and optional logo centered. You can generate all sizes with [Progressier](https://progressier.com/pwa-icons-and-ios-splash-screen-generator) or similar. If a file is missing, Safari falls back to a solid or scaled image.
