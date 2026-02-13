import { Title } from '@shared/ui/typography/Title';

import type { ProfileSectionTitleProps } from './ProfileSectionTitle.types';

export const ProfileSectionTitle = ({ title }: ProfileSectionTitleProps) => {
  return (
    <Title level={2} size="lg">
      {title}
    </Title>
  );
};
