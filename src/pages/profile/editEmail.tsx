import { Error } from '@widgets/profile/Error';
import { FormLoading } from '@widgets/profile/FormLoading';
import { Header } from '@widgets/profile/Header';

import { EditEmailForm } from '@features/user/editEmail';
import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { useTranslation } from '@shared/i18n';
import { Stack } from '@shared/ui/layout/Stack';

export const EditEmailPage = () => {
  const { data, isPending, isError, refetch } = useProfileDetailsQuery();
  const { t } = useTranslation('profile');

  if (isPending) return <FormLoading />;
  if (isError) return <Error refetch={refetch} />;

  const userProfile = data;

  return (
    <Stack gap="lg">
      <Header title={t('actions.editEmail')} />
      <EditEmailForm initialState={{ email: userProfile.email }} />
    </Stack>
  );
};
