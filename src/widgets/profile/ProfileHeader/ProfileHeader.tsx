import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Title } from '@shared/ui/typography/Title';

import { ProfileDropdown } from '../ProfileDropdown';

import type { ProfileHeaderProps } from './ProfileHeader.types';

export const ProfileHeader = ({
  title,
  showDropdown = false,
}: ProfileHeaderProps) => {
  return (
    <Card shadow="sm">
      <Inline justify="between">
        <Title level={1} size="xl">
          {title}
        </Title>

        {showDropdown && <ProfileDropdown />}
      </Inline>
    </Card>
  );
};
