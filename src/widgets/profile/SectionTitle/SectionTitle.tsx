import { Title } from '@shared/ui/typography/Title';

import type { SectionTitleProps } from './SectionTitle.types';

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Title level={2} size="lg">
      {title}
    </Title>
  );
};
