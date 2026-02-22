import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';

import { InfoRow } from '../InfoRow';
import { SectionTitle } from '../SectionTitle';

import type { AccountSectionProps } from './AccountSection.types';

export const AccountSection = ({ name, email }: AccountSectionProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');

  return (
    <Card shadow="sm" gap="lg">
      <SectionTitle title={tProfile('sections.account')} />

      <InfoRow label={tUser('fields.name')} value={name} />
      <InfoRow label={tUser('fields.email')} value={email} />
    </Card>
  );
};
