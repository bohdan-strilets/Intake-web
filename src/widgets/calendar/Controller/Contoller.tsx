import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Inline } from '@shared/ui/layout/Inline';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ControllerProps } from './Contoller.types';

export const Controller = ({ label, onPrev, onNext }: ControllerProps) => {
  return (
    <Inline gap="md" align="center" justify="between">
      <Button onClick={onPrev} size="sm" variant="secondary">
        <Icon name="chevronLeft" />
      </Button>

      <Paragraph weight="bold" size="lg">
        {label}
      </Paragraph>

      <Button onClick={onNext} size="sm" variant="secondary">
        <Icon name="chevronRight" />
      </Button>
    </Inline>
  );
};
