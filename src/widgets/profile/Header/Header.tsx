import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Title } from '@shared/ui/typography/Title';

import { DropdownOptions } from '../DropdownOptions';

import type { HeaderProps } from './Header.types';

export const Header = ({ title, showDropdown = false }: HeaderProps) => {
  return (
    <Card shadow="sm">
      <Inline justify="between">
        <Title level={1} size="xl">
          {title}
        </Title>

        {showDropdown && <DropdownOptions />}
      </Inline>
    </Card>
  );
};
