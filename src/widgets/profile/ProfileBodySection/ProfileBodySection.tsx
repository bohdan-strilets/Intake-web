import { activityLabelMap, sexLabelMap, goalLabelMap } from '@entities/user';

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
  return (
    <Card shadow="sm" gap="lg">
      <ProfileSectionTitle title="Body Parameters" />

      <ProfileField label="Sex" value={sexLabelMap[sex]} />
      <ProfileField
        label="Date of Birth"
        value={formatDisplayDate(dateOfBirth, 'en-US', true)}
      />
      <ProfileField label="Age" value={age.toString()} />

      <Spacer size="lg" />

      <ProfileField label="Height" value={`${height} cm`} />
      <ProfileField label="Weight" value={`${weight} kg`} />
      <ProfileField
        label="Target weight"
        value={targetWeight != null ? `${targetWeight} kg` : 'Not specified'}
      />

      <Divider />

      <ProfileField label="Goal" value={goalLabelMap[goal]} />
      <ProfileField
        label="Activity level"
        value={activityLabelMap[activityLevel]}
      />
    </Card>
  );
};
