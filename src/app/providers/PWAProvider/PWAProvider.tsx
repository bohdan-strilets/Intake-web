import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { toast } from 'sonner';

import { useTranslation } from '@shared/i18n';

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation('common');

  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      if (registration) {
        setInterval(
          () => registration.update(),
          60 * 60 * 1000,
        );
      }
    },
  });

  useEffect(() => {
    if (!needRefresh) return;

    const reload = () => {
      updateServiceWorker(true);
    };

    toast(t('pwa.newVersion'), {
      action: {
        label: t('pwa.reload'),
        onClick: reload,
      },
      duration: Number.POSITIVE_INFINITY,
    });

    return () => {
      toast.dismiss();
    };
  }, [needRefresh, t, updateServiceWorker]);

  return <>{children}</>;
}
