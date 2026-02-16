import { PageHeader } from '@widgets/profile/PageHeader';
import { ProfileAccountSection } from '@widgets/profile/ProfileAccountSection';
import { ProfileBodySection } from '@widgets/profile/ProfileBodySection';
import { ProfileDailyIntake } from '@widgets/profile/ProfileDailyIntake/ProfileDailyIntake';
import { ProfileDangerZone } from '@widgets/profile/ProfileDangerZone';
import { ProfileErrorState } from '@widgets/profile/ProfileErrorState';
import { ProfileSkeleton } from '@widgets/profile/ProfileSkeleton';

import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { Stack } from '@shared/ui/layout/Stack';

export const ProfilePage = () => {
  const { data, isPending, isError, refetch } = useProfileDetailsQuery();

  if (isPending) return <ProfileSkeleton />;
  if (isError) return <ProfileErrorState refetch={refetch} />;

  const userProfile = data;

  return (
    <Stack gap="lg">
      <PageHeader title="Profile" showDropdown />

      <ProfileDailyIntake
        recommendedCalories={userProfile.metabolism.recommendedCalories}
        goal={userProfile.goal}
      />

      <ProfileAccountSection
        name={userProfile.name}
        email={userProfile.email}
      />

      <ProfileBodySection
        sex={userProfile.sex}
        age={userProfile.age}
        height={userProfile.height}
        weight={userProfile.weight}
        targetWeight={userProfile.targetWeight}
        goal={userProfile.goal}
        activityLevel={userProfile.activityLevel}
      />

      <ProfileDangerZone />
    </Stack>
  );
};
