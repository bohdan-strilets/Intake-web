import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { THEME, type Theme } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { useResolvedTheme } from '@shared/styles/model';
import { Icon } from '@shared/ui/controls/Icon';

import { root } from './ThemeToggle.css';

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
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={root}
      onClick={() => handleThemeChange(isDark ? THEME.Light : THEME.Dark)}
    >
      <Icon name={isDark ? 'themeDark' : 'themeLight'} color="accentPrimary" />
    </button>
  );
};
