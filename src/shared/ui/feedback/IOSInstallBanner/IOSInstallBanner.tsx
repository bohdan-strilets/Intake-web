import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import { usePWAInstall } from '@shared/lib/pwa';
import { useTranslation } from '@shared/i18n';
import { fadeTransition, fadeUp } from '@shared/motion';
import { Button } from '@shared/ui/controls/Button';

import { confirmButton, list, listItem, root, title } from './IOSInstallBanner.css';

const STORAGE_KEY = 'pwa-ios-install-dismissed';

const INSTALL_STEPS = [
  'pwa.installStep1',
  'pwa.installStep2',
  'pwa.installStep3',
] as const;

export function IOSInstallBanner() {
  const { isIOSInstallable } = usePWAInstall();
  const { t } = useTranslation('common');
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!isIOSInstallable) return;
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === 'true');
    } catch {
      setDismissed(false);
    }
  }, [isIOSInstallable]);

  const handleConfirm = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
    setDismissed(true);
  }, []);

  const isVisible = isIOSInstallable && !dismissed;

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          className={root}
          role="status"
          aria-live="polite"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={fadeTransition}
        >
          <h2 className={title}>{t('pwa.installBannerTitle')}</h2>
          <ol className={list}>
            {INSTALL_STEPS.map((key) => (
              <li key={key} className={listItem}>
                {t(key)}
              </li>
            ))}
          </ol>
          <Button
            variant="primary"
            size="sm"
            className={confirmButton}
            onClick={handleConfirm}
          >
            {t('pwa.confirmBanner')}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
