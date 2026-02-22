import { activityLabelMap } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { formatDisplayDate } from '@shared/lib/date';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Spacer } from '@shared/ui/layout/Spacer';

import { InfoRow } from '../InfoRow';
import { SectionTitle } from '../SectionTitle';

import type { BodySectionProps } from './BodySection.types';

export const BodySection = ({
  sex,
  age,
  dateOfBirth,
  height,
  weight,
  targetWeight,
  goal,
  activityLevel,
}: BodySectionProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  return (
    <Card shadow="sm" gap="lg">
      <SectionTitle title={tProfile('sections.body')} />

      <InfoRow label={tUser('fields.sex')} value={tUser(`sex.${sex}`)} />
      <InfoRow
        label={tUser('fields.dateOfBirth')}
        value={formatDisplayDate(dateOfBirth, true)}
      />
      <InfoRow label={tUser('fields.age')} value={age.toString()} />

      <Spacer size="lg" />

      <InfoRow label={tUser('fields.height')} value={`${height} cm`} />
      <InfoRow label={tUser('fields.weight')} value={`${weight} kg`} />
      <InfoRow
        label={tUser('fields.targetWeight')}
        value={
          targetWeight != null
            ? `${targetWeight} kg`
            : tCommon('states.notSpecified')
        }
      />

      <Divider />

      <InfoRow label={tUser('fields.goal')} value={tUser(`goals.${goal}`)} />
      <InfoRow
        label={tUser('fields.activityLevel')}
        value={tUser(`activityLevels.${activityLabelMap(activityLevel)}`)}
      />
    </Card>
  );
};
