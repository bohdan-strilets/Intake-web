import { useOnline } from '@shared/lib/online';

import { useTranslation } from '@shared/i18n';

import { root } from './OfflineBanner.css';

export function OfflineBanner() {
  const isOnline = useOnline();
  const { t } = useTranslation('common');

  if (isOnline) return null;

  return (
    <div className={root} role="status" aria-live="polite">
      {t('pwa.offline')}
    </div>
  );
}
