import { PageHeader } from '@widgets/profile/PageHeader';

import { EditPasswordForm } from '@features/user/eidtPassword';

import { useTranslation } from '@shared/i18n';
import { Stack } from '@shared/ui/layout/Stack';

export const EditPasswordPage = () => {
  const { t } = useTranslation('profile');

  return (
    <Stack gap="lg">
      <PageHeader title={t('actions.editPassword')} />
      <EditPasswordForm />
    </Stack>
  );
};
