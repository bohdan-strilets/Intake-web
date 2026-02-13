import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Dropdown } from '@shared/ui/overlay/Dropdown';
import { Title } from '@shared/ui/typography/Title';

export const ProfileHeader = () => {
  return (
    <Card shadow="sm">
      <Inline justify="between">
        <Title level={1} size="xl">
          Profile
        </Title>

        <Dropdown
          trigger={<Icon name="more" />}
          items={[
            {
              id: 'edit-profile',
              label: 'Edit profile',
              icon: 'editUser',
              onSelect: () => null,
            },
            {
              id: 'edit-email',
              label: 'Edit email',
              icon: 'email',
              onSelect: () => null,
            },
            {
              id: 'edit-password',
              label: 'Edit password',
              icon: 'password',
              onSelect: () => null,
            },
          ]}
        />
      </Inline>
    </Card>
  );
};
