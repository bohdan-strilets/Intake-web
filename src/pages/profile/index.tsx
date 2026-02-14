import { ProfileAccountSection } from '@widgets/profile/ProfileAccountSection';
import { ProfileBodySection } from '@widgets/profile/ProfileBodySection';
import { ProfileDailyIntake } from '@widgets/profile/ProfileDailyIntake/ProfileDailyIntake';
import { ProfileDangerZone } from '@widgets/profile/ProfileDangerZone';
import { ProfileHeader } from '@widgets/profile/ProfileHeader';
import { ProfileSkeleton } from '@widgets/profile/ProfileSkeleton';

import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { ErrorState } from '@shared/ui/feedback/ErrorState';
import { Stack } from '@shared/ui/layout/Stack';

export const ProfilePage = () => {
  const {
    data: userProfile,
    isPending,
    isError,
    refetch,
  } = useProfileDetailsQuery();

  if (isPending) return <ProfileSkeleton />;

  if (isError) {
    return (
      <ErrorState
        title="Failed to load profile"
        description="Please check your connection and try again."
        actionLabel="Try again"
        onAction={refetch}
      />
    );
  }

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
