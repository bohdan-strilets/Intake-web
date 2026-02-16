import { PageHeader } from '@widgets/profile/PageHeader';
import { ProfileErrorState } from '@widgets/profile/ProfileErrorState';
import { ProfileFormSkeleton } from '@widgets/profile/ProfileFormSkeleton';

import { EditProfileForm, mapProfileToForm } from '@features/user/editProfile';
import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { Stack } from '@shared/ui/layout/Stack';

export const EditProfilePage = () => {
  const { data, isPending, isError, refetch } = useProfileDetailsQuery();

  if (isPending) return <ProfileFormSkeleton />;
  if (isError) return <ProfileErrorState refetch={refetch} />;

  const userProfile = data;

  return (
    <Stack gap="lg">
      <PageHeader title="Edit profile" />
      <EditProfileForm initialState={mapProfileToForm(userProfile)} />
    </Stack>
  );
};
