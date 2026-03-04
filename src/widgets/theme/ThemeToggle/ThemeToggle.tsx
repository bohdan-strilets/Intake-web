import { AnimatePresence, motion } from 'framer-motion';

import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { THEME, type Theme } from '@entities/user';

import { motionDurations, motionEase } from '@shared/motion';
import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { useResolvedTheme } from '@shared/styles/model';
import { Icon } from '@shared/ui/controls/Icon';

import { root } from './ThemeToggle.css';

const iconTransition = {
  duration: motionDurations.fast,
  ease: motionEase.smooth,
};

export const ThemeToggle = () => {
  const { resolved, setTheme } = useResolvedTheme();
  const isDark = resolved === THEME.Dark;

  const { t: tCommon } = useTranslation('common');

  const { mutateAsync: updateSettings, isPending } =
    useUpdateSettingsMutation();

  const handleThemeChange = async (value: Theme) => {
    if (value === resolved || isPending) return;
    const previousTheme = resolved;

    try {
      setTheme(value);
      await updateSettings({ theme: value });
    } catch {
      setTheme(previousTheme);
      notify.error(tCommon('errors.generic'));
    }
  };

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={root}
      onClick={() => handleThemeChange(isDark ? THEME.Light : THEME.Dark)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: 'tween',
        duration: motionDurations.fast,
        ease: motionEase.smooth,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
          transition={iconTransition}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name={isDark ? 'themeDark' : 'themeLight'} color="accentPrimary" />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};
