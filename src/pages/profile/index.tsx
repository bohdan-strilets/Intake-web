import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Dropdown } from '@shared/ui/overlay/Dropdown';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const ProfilePage = () => {
  return (
    <Stack gap="lg">
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

      <Card shadow="sm" gap="lg">
        <Title level={2} size="lg">
          Account
        </Title>

        <Divider />

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Name:</Paragraph>
          <Paragraph weight="bold">Bohdan</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Email:</Paragraph>
          <Paragraph weight="bold">bohdan@example.com</Paragraph>
        </Inline>
      </Card>

      <Card shadow="sm" gap="lg">
        <Title level={2} size="lg">
          Body Parameters
        </Title>

        <Divider />

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Sex:</Paragraph>
          <Paragraph weight="bold">Male</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Age:</Paragraph>
          <Paragraph weight="bold">30</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Height:</Paragraph>
          <Paragraph weight="bold">180 cm</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Weight:</Paragraph>
          <Paragraph weight="bold">75 kg</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Target weight:</Paragraph>
          <Paragraph weight="bold">70 kg</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Goal:</Paragraph>
          <Paragraph weight="bold">Lose weight</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Goal delta:</Paragraph>
          <Paragraph weight="bold">800 kcal</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Activity level:</Paragraph>
          <Paragraph weight="bold">Light</Paragraph>
        </Inline>
      </Card>

      <Card shadow="sm" tone="accentSoft">
        <Title level={2} size="lg">
          Calculated Metrics
        </Title>

        <Divider />

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Daily metabolism:</Paragraph>
          <Paragraph weight="bold">2430 kcal</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Recommended intake:</Paragraph>
          <Paragraph weight="bold">1760 kcal</Paragraph>
        </Inline>

        <Paragraph size="sm" tone="muted">
          Calculated from your body parameters
        </Paragraph>
      </Card>

      <Card>
        <Button variant="secondary">Logout</Button>
        <Divider />
        <Button variant="danger">Delete Profile</Button>
      </Card>
    </Stack>
  );
};
