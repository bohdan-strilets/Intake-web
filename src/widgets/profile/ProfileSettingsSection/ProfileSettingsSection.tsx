import { useTranslation, type Language } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { useResolvedTheme } from '@shared/styles/model';
import { Card } from '@shared/ui/layout/Card';

import { ProfileField } from '../ProfileField';
import { ProfileLanguageSheet } from '../ProfileLanguageSheet';
import { ProfileSectionTitle } from '../ProfileSectionTitle';
import { ProfileThemeSheet } from '../ProfileThemeSheet';

export const ProfileSettingsSection = () => {
  const { theme } = useResolvedTheme();
  const { open } = useModal();
  const { i18n } = useTranslation();

  const language = i18n.language as Language;

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleTheme = () => {
    open(<ProfileThemeSheet />);
  };

  const handleLanguage = () => {
    open(<ProfileLanguageSheet />);
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
