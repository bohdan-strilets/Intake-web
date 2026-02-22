import { activityLabelMap } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { formatDisplayDate } from '@shared/lib/date';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Spacer } from '@shared/ui/layout/Spacer';

import { ProfileField } from '../ProfileField';
import { ProfileSectionTitle } from '../ProfileSectionTitle';

import type { ProfileBodySectionProps } from './ProfileBodySection.types';

export const ProfileBodySection = ({
  sex,
  age,
  dateOfBirth,
  height,
  weight,
  targetWeight,
  goal,
  activityLevel,
}: ProfileBodySectionProps) => {
  const { t: tUser } = useTranslation('user');
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title={tProfile('sections.body')} />

      <ProfileField label={tUser('fields.sex')} value={tUser(`sex.${sex}`)} />
      <ProfileField
        label={tUser('fields.dateOfBirth')}
        value={formatDisplayDate(dateOfBirth, 'en-US', true)}
      />
      <ProfileField label={tUser('fields.age')} value={age.toString()} />

      <Spacer size="lg" />

      <ProfileField label={tUser('fields.height')} value={`${height} cm`} />
      <ProfileField label={tUser('fields.weight')} value={`${weight} kg`} />
      <ProfileField
        label={tUser('fields.targetWeight')}
        value={
          targetWeight != null
            ? `${targetWeight} kg`
            : tCommon('states.notSpecified')
        }
      />

      <Divider />

      <ProfileField
        label={tUser('fields.goal')}
        value={tUser(`goals.${goal}`)}
      />
      <ProfileField
        label={tUser('fields.activityLevel')}
        value={tUser(`activityLevels.${activityLabelMap(activityLevel)}`)}
      />
    </Card>
  );
};
