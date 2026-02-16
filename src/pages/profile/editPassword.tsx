import { PageHeader } from '@widgets/profile/PageHeader';

import { EditPasswordForm } from '@features/user/eidtPassword';

import { Stack } from '@shared/ui/layout/Stack';

export const EditPasswordPage = () => {
  return (
    <Stack gap="lg">
      <PageHeader title="Edit password" />
      <EditPasswordForm />
    </Stack>
  );
};
