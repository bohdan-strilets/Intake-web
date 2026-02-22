import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { Card } from '@shared/ui/layout/Card';

import { InfoRow } from '../InfoRow';
import { LanguageSheet } from '../LanguageSheet';
import { SectionTitle } from '../SectionTitle';
import { ThemeSheet } from '../ThemeSheet';

import type { SettingsSectionProps } from './SettingsSection,types';

export const SettingsSection = ({ settings }: SettingsSectionProps) => {
  const { theme, language } = settings;

  const { open } = useModal();

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleTheme = () => {
    open(<ThemeSheet theme={theme} />);
  };

  const handleLanguage = () => {
    open(<LanguageSheet language={language} />);
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
    </Card>
  );
};
