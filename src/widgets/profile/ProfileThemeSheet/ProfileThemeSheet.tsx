import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { THEME } from '@shared/styles/enums';
import { useResolvedTheme } from '@shared/styles/model';
import type { Theme } from '@shared/styles/types';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SelectionItem } from '../SelectionItem';

export const ProfileThemeSheet = () => {
  const { theme, setTheme } = useResolvedTheme();
  const { close } = useModal();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleSelect = (value: Theme) => {
    setTheme(value);

    requestAnimationFrame(() => {
      close();
    });
  };

  return (
    <Stack gap="2xl">
      <Paragraph weight="medium">{tProfile('actions.chooseTheme')}</Paragraph>

      <Stack gap="xl">
        <SelectionItem
          iconName="themeSystem"
          label={tCommon(`themes.${THEME.SYSTEM}`)}
          selected={theme === THEME.SYSTEM}
          onClick={() => handleSelect(THEME.SYSTEM)}
        />

        <SelectionItem
          iconName="themeLight"
          label={tCommon(`themes.${THEME.LIGHT}`)}
          selected={theme === THEME.LIGHT}
          onClick={() => handleSelect(THEME.LIGHT)}
        />

        <SelectionItem
          iconName="themeDark"
          label={tCommon(`themes.${THEME.DARK}`)}
          selected={theme === THEME.DARK}
          onClick={() => handleSelect(THEME.DARK)}
        />
      </Stack>
    </Stack>
  );
};
