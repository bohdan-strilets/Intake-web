import { useModal } from '@shared/lib/modal';
import { THEME } from '@shared/styles/enums';
import { themeLabelMap } from '@shared/styles/mappers';
import { useResolvedTheme } from '@shared/styles/model';
import type { Theme } from '@shared/styles/types';
import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

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
        <button type="button" onClick={() => handleSelect(THEME.SYSTEM)}>
          <Inline align="center" justify="between">
            <Inline gap="lg" align="center">
              <Icon name={'themeSystem'} size="lg" />
              <Paragraph>{themeLabelMap[theme]}</Paragraph>
            </Inline>

            {theme === THEME.SYSTEM && (
              <Icon name="check" color="accentPrimary" />
            )}
          </Inline>
        </button>

        <button type="button" onClick={() => handleSelect(THEME.LIGHT)}>
          <Inline align="center" justify="between">
            <Inline gap="lg" align="center">
              <Icon name={'themeLight'} size="lg" />
              <Paragraph>{themeLabelMap[THEME.LIGHT]}</Paragraph>
            </Inline>

            {theme === THEME.LIGHT && (
              <Icon name="check" color="accentPrimary" />
            )}
          </Inline>
        </button>

        <button type="button" onClick={() => handleSelect(THEME.DARK)}>
          <Inline align="center" justify="between">
            <Inline gap="lg" align="center">
              <Icon name={'themeDark'} size="lg" />
              <Paragraph>{themeLabelMap[THEME.DARK]}</Paragraph>
            </Inline>

            {theme === THEME.DARK && (
              <Icon name="check" color="accentPrimary" />
            )}
          </Inline>
        </button>
      </Stack>
    </Stack>
  );
};
