import { PageHeader } from '@widgets/profile/PageHeader';
import { ProfileErrorState } from '@widgets/profile/ProfileErrorState';
import { ProfileFormSkeleton } from '@widgets/profile/ProfileFormSkeleton';

import { EditEmailForm } from '@features/user/editEmail';
import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { useTranslation } from '@shared/i18n';
import { Stack } from '@shared/ui/layout/Stack';

export const EditEmailPage = () => {
  const { data, isPending, isError, refetch } = useProfileDetailsQuery();
  const { t } = useTranslation('profile');

  if (isPending) return <ProfileFormSkeleton />;
  if (isError) return <ProfileErrorState refetch={refetch} />;

  const userProfile = data;

  return (
    <Stack gap="lg">
      <PageHeader title={t('actions.editEmail')} />
      <EditEmailForm initialState={{ email: userProfile.email }} />
    </Stack>
  );
};
