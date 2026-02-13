import { ProfileAccountSection } from '@widgets/profile/ProfileAccountSection';
import { ProfileBodySection } from '@widgets/profile/ProfileBodySection';
import { ProfileDailyIntake } from '@widgets/profile/ProfileDailyIntake/ProfileDailyIntake';
import { ProfileDangerZone } from '@widgets/profile/ProfileDangerZone';
import { ProfileHeader } from '@widgets/profile/ProfileHeader';

import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { Spinner } from '@shared/ui/feedback/Spinner';
import { Stack } from '@shared/ui/layout/Stack';

export const ProfilePage = () => {
  const { data: userProfile, isPending, isError } = useProfileDetailsQuery();

  if (isPending) return <Spinner />;

  if (isError) return <p>Error loading profile</p>;

  return (
    <Stack gap="lg">
      <ProfileHeader />

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
