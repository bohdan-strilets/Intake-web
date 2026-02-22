import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { Card } from '@shared/ui/layout/Card';

import { ProfileField } from '../ProfileField';
import { ProfileLanguageSheet } from '../ProfileLanguageSheet';
import { ProfileSectionTitle } from '../ProfileSectionTitle';
import { ProfileThemeSheet } from '../ProfileThemeSheet';

import type { ProfileSettingsSectionProps } from './ProfileSettingsSectionProps';

export const ProfileSettingsSection = ({
  settings,
}: ProfileSettingsSectionProps) => {
  const { theme, language } = settings;

  const { open } = useModal();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleTheme = () => {
    open(<ProfileThemeSheet theme={theme} />);
  };

  const handleLanguage = () => {
    open(<ProfileLanguageSheet language={language} />);
  };

  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title={tProfile('sections.settings')} />

      <ProfileField
        label={tProfile('fields.theme')}
        value={tCommon(`themes.${theme}`)}
        onClick={handleTheme}
      />

      <ProfileField
        label={tProfile('fields.language')}
        value={tCommon(`languages.${language}`)}
        onClick={handleLanguage}
      />
    </Card>
  );
};
