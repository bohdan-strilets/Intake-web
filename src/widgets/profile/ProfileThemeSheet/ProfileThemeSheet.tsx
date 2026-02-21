import { useModal } from '@shared/lib/modal';
import { THEME } from '@shared/styles/enums';
import { themeLabelMap } from '@shared/styles/mappers';
import { useResolvedTheme } from '@shared/styles/model';
import type { Theme } from '@shared/styles/types';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SelectionItem } from '../SelectionItem';

export const ProfileThemeSheet = () => {
  const { theme, setTheme } = useResolvedTheme();
  const { close } = useModal();

  const handleSelect = (value: Theme) => {
    setTheme(value);

    requestAnimationFrame(() => {
      close();
    });
  };

  return (
    <Stack gap="2xl">
      <Paragraph weight="medium">Choose Theme</Paragraph>

      <Stack gap="xl">
        <SelectionItem
          iconName="themeSystem"
          label={themeLabelMap[THEME.SYSTEM]}
          selected={theme === THEME.SYSTEM}
          onClick={() => handleSelect(THEME.SYSTEM)}
        />

        <SelectionItem
          iconName="themeLight"
          label={themeLabelMap[THEME.LIGHT]}
          selected={theme === THEME.LIGHT}
          onClick={() => handleSelect(THEME.LIGHT)}
        />

        <SelectionItem
          iconName="themeDark"
          label={themeLabelMap[THEME.DARK]}
          selected={theme === THEME.DARK}
          onClick={() => handleSelect(THEME.DARK)}
        />
      </Stack>
    </Stack>
  );
};
