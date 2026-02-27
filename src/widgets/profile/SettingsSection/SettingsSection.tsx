import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { useSound } from '@shared/lib/sound';
import { Switch } from '@shared/ui/controls/Switch';
import { Card } from '@shared/ui/layout/Card';

import { InfoRow } from '../InfoRow';
import { LanguageSheet } from '../LanguageSheet';
import { SectionTitle } from '../SectionTitle';
import { ThemeSheet } from '../ThemeSheet';

import type { SettingsSectionProps } from './SettingsSection,types';

export const SettingsSection = ({ settings }: SettingsSectionProps) => {
  const { theme, language, sound } = settings;

  const { open } = useModal();
  const { setEnabled } = useSound();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleTheme = () => {
    open(<ThemeSheet theme={theme} />);
  };

  const handleLanguage = () => {
    open(<LanguageSheet language={language} />);
  };

  const { mutateAsync: updateSettings, isPending } =
    useUpdateSettingsMutation();

  const handleSounds = async (enabled: boolean) => {
    setEnabled(enabled);
    await updateSettings({ sound: enabled });
  };

  return (
    <Card shadow="sm" gap="lg">
      <SectionTitle title={tProfile('sections.settings')} />

      <InfoRow
        label={tProfile('fields.theme')}
        value={tCommon(`themes.${theme}`)}
        onClick={handleTheme}
      />

      <InfoRow
        label={tProfile('fields.language')}
        value={tCommon(`languages.${language}`)}
        onClick={handleLanguage}
      />

      <InfoRow
        label={tProfile('fields.sounds')}
        value={
          <Switch
            checked={sound}
            onCheckedChange={handleSounds}
            disabled={isPending}
          />
        }
      />
    </Card>
  );
};
