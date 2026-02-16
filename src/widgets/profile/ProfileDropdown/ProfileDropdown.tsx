import { useNavigate } from '@tanstack/react-router';

import { ROUTES } from '@shared/routes';
import { Icon } from '@shared/ui/controls/Icon';
import { Dropdown } from '@shared/ui/overlay/Dropdown';

export const ProfileDropdown = () => {
  const navigate = useNavigate();

  return (
    <Dropdown
      trigger={<Icon name="more" />}
      items={[
        {
          id: 'edit-profile',
          label: 'Edit profile',
          icon: 'editUser',
          onSelect: () => navigate({ to: ROUTES.app.editProfile }),
        },
        {
          id: 'edit-email',
          label: 'Edit email',
          icon: 'email',
          onSelect: () => navigate({ to: ROUTES.app.editEmail }),
        },
        {
          id: 'edit-password',
          label: 'Edit password',
          icon: 'password',
          onSelect: () => null,
        },
      ]}
    />
  );
};
