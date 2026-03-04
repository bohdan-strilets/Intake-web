import { Header } from '@widgets/profile/Header';

import { EditPasswordForm } from '@features/user/editPassword';

import { useTranslation } from '@shared/i18n';
import { Stack } from '@shared/ui/layout/Stack';

export const EditPasswordPage = () => {
  const { t } = useTranslation('profile');

  return (
    <Stack gap="lg">
      <Header title={t('actions.editPassword')} />
      <EditPasswordForm />
    </Stack>
  );
};
