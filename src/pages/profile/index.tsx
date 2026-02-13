import { useUserProfile } from '@features/user/getUserProfile/model';

import {
  activityLabelMap,
  goalLabelMap,
  sexLabelMap,
} from '@entities/user/mappers';

import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Dropdown } from '@shared/ui/overlay/Dropdown';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const ProfilePage = () => {
  const { data: userProfile, isPending, isError } = useUserProfile();

  if (isPending) return <Spinner />;

  if (isError) return <p>Error loading profile</p>;

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

      <Card shadow="md" tone="accentSoft">
        <Stack align="center" gap="lg">
          <Paragraph tone="muted" weight="medium">
            Recommended daily intake
          </Paragraph>

          <Stack gap="none" align="center">
            <Paragraph size="2xl" weight="bold" tone="accentPrimary">
              {userProfile.metabolism.recommendedCalories}
            </Paragraph>
            <Paragraph size="sm" tone="muted">
              kcal per day
            </Paragraph>
          </Stack>

          <Stack align="center">
            <Paragraph size="sm" tone="muted">
              {userProfile.goal === 'lose' && 'Includes calorie deficit'}
              {userProfile.goal === 'gain' && 'Includes calorie surplus'}
              {userProfile.goal === 'maintain' && 'Maintains current weight'}
            </Paragraph>
            <Paragraph size="xs" tone="muted">
              Based on your age, weight and activity level
            </Paragraph>
          </Stack>
        </Stack>
      </Card>

      <Card shadow="sm" gap="lg">
        <Title level={2} size="lg">
          Account
        </Title>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Name:</Paragraph>
          <Paragraph weight="medium">{userProfile.name}</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Email:</Paragraph>
          <Paragraph weight="medium">{userProfile.email}</Paragraph>
        </Inline>
      </Card>

      <Card shadow="sm" gap="lg">
        <Title level={2} size="lg">
          Body Parameters
        </Title>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Sex:</Paragraph>
          <Paragraph weight="medium">{sexLabelMap[userProfile.sex]}</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Age:</Paragraph>
          <Paragraph weight="medium">{userProfile.age}</Paragraph>
        </Inline>

        <Spacer size="lg" />

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Height:</Paragraph>
          <Paragraph weight="medium">{userProfile.height} cm</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Weight:</Paragraph>
          <Paragraph weight="medium">{userProfile.weight} kg</Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Target weight:</Paragraph>
          <Paragraph weight="medium">
            {userProfile.targetWeight != null
              ? `${userProfile.targetWeight} kg`
              : 'Not specified'}
          </Paragraph>
        </Inline>

        <Divider />

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Goal:</Paragraph>
          <Paragraph weight="medium">
            {goalLabelMap[userProfile.goal]}
          </Paragraph>
        </Inline>

        <Inline justify="between" gap="xs">
          <Paragraph tone="muted">Activity level:</Paragraph>
          <Paragraph weight="medium">
            {activityLabelMap[userProfile.activityLevel]}
          </Paragraph>
        </Inline>
      </Card>

      <Card>
        <Button variant="secondary" iconLeft="logout" iconSize="sm">
          Logout
        </Button>
        <Divider />
        <Button
          variant="danger"
          size="sm"
          iconLeft="trash"
          iconColor="danger"
          iconSize="sm"
        >
          Delete Profile
        </Button>
      </Card>
    </Stack>
  );
};
