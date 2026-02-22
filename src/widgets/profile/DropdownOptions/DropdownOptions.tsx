import { useNavigate } from '@tanstack/react-router';

import { useTranslation } from '@shared/i18n';
import { ROUTES } from '@shared/routes';
import { Icon } from '@shared/ui/controls/Icon';
import { Dropdown } from '@shared/ui/overlay/Dropdown';

export const DropdownOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('profile');

  return (
    <Dropdown
      trigger={<Icon name="more" />}
      items={[
        {
          id: 'edit-profile',
          label: t('actions.editProfile'),
          icon: 'editUser',
          onSelect: () => navigate({ to: ROUTES.app.editProfile }),
        },
        {
          id: 'edit-email',
          label: t('actions.editEmail'),
          icon: 'email',
          onSelect: () => navigate({ to: ROUTES.app.editEmail }),
        },
        {
          id: 'edit-password',
          label: t('actions.editPassword'),
          icon: 'password',
          onSelect: () => navigate({ to: ROUTES.app.editPassword }),
        },
      ]}
    />
  );
};
