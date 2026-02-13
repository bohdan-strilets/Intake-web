import { Card } from '@shared/ui/layout/Card';

import { ProfileField } from '../ProfileField';
import { ProfileSectionTitle } from '../ProfileSectionTitle';

import type { ProfileAccountSectionProps } from './ProfileAccountSection.types';

export const ProfileAccountSection = ({
  name,
  email,
}: ProfileAccountSectionProps) => {
  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title="Account" />

      <ProfileField label="Name" value={name} />
      <ProfileField label="Email" value={email} />
    </Card>
  );
};
