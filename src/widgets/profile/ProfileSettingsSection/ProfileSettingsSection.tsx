import { useTranslation, type Language } from '@shared/i18n';
import { languageLabelMap } from '@shared/i18n/mappers';
import { useModal } from '@shared/lib/modal';
import { themeLabelMap } from '@shared/styles/mappers';
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

  const handleTheme = () => {
    open(<ProfileThemeSheet />);
  };

  const handleLanguage = () => {
    open(<ProfileLanguageSheet />);
  };

  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title="Settings" />

      <ProfileField
        label="Theme"
        value={themeLabelMap[theme]}
        onClick={handleTheme}
      />

      <ProfileField
        label="Language"
        value={languageLabelMap[language]}
        onClick={handleLanguage}
      />
    </Card>
  );
};
