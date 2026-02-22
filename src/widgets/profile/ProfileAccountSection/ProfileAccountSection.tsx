import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';

import { ProfileField } from '../ProfileField';
import { ProfileSectionTitle } from '../ProfileSectionTitle';

import type { ProfileAccountSectionProps } from './ProfileAccountSection.types';

export const ProfileAccountSection = ({
  name,
  email,
}: ProfileAccountSectionProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');

  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title={tProfile('sections.account')} />

      <ProfileField label={tUser('fields.name')} value={name} />
      <ProfileField label={tUser('fields.email')} value={email} />
    </Card>
  );
};
