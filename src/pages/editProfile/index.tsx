import { ProfileHeader } from '@widgets/profile/ProfileHeader';
import { ProfileSkeleton } from '@widgets/profile/ProfileSkeleton';

import { EditProfileForm, mapProfileToForm } from '@features/user/editProfile';
import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { ErrorState } from '@shared/ui/feedback/ErrorState';
import { Stack } from '@shared/ui/layout/Stack';

export const EditProfilePage = () => {
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
      <ProfileHeader title="Edit profile" />

      <EditProfileForm initialState={mapProfileToForm(userProfile)} />
    </Stack>
  );
};
