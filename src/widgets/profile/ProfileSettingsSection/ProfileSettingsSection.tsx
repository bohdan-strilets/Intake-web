import { useModal } from '@shared/lib/modal';
import { themeLabelMap } from '@shared/styles/mappers';
import { useResolvedTheme } from '@shared/styles/model';
import { Card } from '@shared/ui/layout/Card';

import { ProfileField } from '../ProfileField';
import { ProfileSectionTitle } from '../ProfileSectionTitle';
import { ProfileThemeSheet } from '../ProfileThemeSheet';

export const ProfileSettingsSection = () => {
  const { theme } = useResolvedTheme();
  const { open } = useModal();

  const handleTheme = () => {
    open(<ProfileThemeSheet />);
  };

  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title="Settings" />

      <ProfileField
        label="Theme"
        value={themeLabelMap[theme]}
        onClick={handleTheme}
      />
    </Card>
  );
};
