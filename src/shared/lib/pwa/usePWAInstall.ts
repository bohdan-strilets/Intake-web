import { useCallback, useEffect, useState } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/** Standalone: either display-mode: standalone (Android) or navigator.standalone (iOS) */
function getIsStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

/** Launch from PWA (start_url with ?source=pwa) */
function getIsPwaLaunch(): boolean {
  const params = new URLSearchParams(window.location.search);
  return params.get('source') === 'pwa';
}

/** iOS: Safari does not fire beforeinstallprompt; user must use Share > Add to Home Screen */
function getIsIOS(): boolean {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

export function usePWAInstall(): {
  canInstall: boolean;
  isInstalled: boolean;
  isIOSInstallable: boolean;
  isPwaLaunch: boolean;
  install: () => Promise<void>;
} {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const isPwaLaunch = getIsPwaLaunch();

  useEffect(() => {
    setIsIOS(getIsIOS());
    const checkStandalone = () => setIsInstalled(getIsStandalone());
    checkStandalone();

    // Android/Chrome: do not preventDefault so the browser can show its install banner.
    // iOS Safari never fires this; install must be manual (Share > Add to Home Screen)
    const handleBeforeInstall = (e: Event) => {
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    mediaQuery.addEventListener('change', checkStandalone);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
      mediaQuery.removeEventListener('change', checkStandalone);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setDeferredPrompt(null);
  }, [deferredPrompt]);

  const canInstall = Boolean(deferredPrompt) && !isInstalled;
  const isIOSInstallable = isIOS && !isInstalled;

  return { canInstall, isInstalled, isIOSInstallable, isPwaLaunch, install };
}
