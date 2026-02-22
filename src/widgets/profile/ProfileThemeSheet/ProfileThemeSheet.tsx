import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { THEME, type Theme } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { notify } from '@shared/lib/notify';
import { useResolvedTheme } from '@shared/styles/model';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SelectionItem } from '../SelectionItem';

import type { ProfileThemeSheetProps } from './ProfileThemeSheetProps';

export const ProfileThemeSheet = ({ theme }: ProfileThemeSheetProps) => {
  const { close } = useModal();
  const { setTheme } = useResolvedTheme();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const { mutateAsync: updateSettings, isPending } =
    useUpdateSettingsMutation();

  const handleSelect = async (value: Theme) => {
    if (value === theme || isPending) return;

    const previousTheme = theme;

    try {
      setTheme(value);
      await updateSettings({ theme: value });
      close();
    } catch {
      setTheme(previousTheme);
      notify.error(tCommon('errors.generic'));
    }
  };

  return (
    <Stack gap="2xl">
      <Paragraph weight="medium">{tProfile('actions.chooseTheme')}</Paragraph>

      <Stack gap="xl">
        <SelectionItem
          iconName="themeSystem"
          label={tCommon(`themes.${THEME.System}`)}
          selected={theme === THEME.System}
          onClick={() => handleSelect(THEME.System)}
          loading={isPending}
        />

        <SelectionItem
          iconName="themeLight"
          label={tCommon(`themes.${THEME.Light}`)}
          selected={theme === THEME.Light}
          onClick={() => handleSelect(THEME.Light)}
          loading={isPending}
        />

        <SelectionItem
          iconName="themeDark"
          label={tCommon(`themes.${THEME.Dark}`)}
          selected={theme === THEME.Dark}
          onClick={() => handleSelect(THEME.Dark)}
          loading={isPending}
        />
      </Stack>
    </Stack>
  );
};
