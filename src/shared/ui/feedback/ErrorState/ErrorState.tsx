import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { iconWrapper } from './ErrorState.css';
import type { ErrorStateProps } from './ErrorState.types';

export const ErrorState = ({
  title,
  description,
  actionLabel,
  onAction,
}: ErrorStateProps) => {
  return (
    <Card shadow="sm">
      <Inline justify="center">
        <div className={iconWrapper}>
          <Icon name="warning" color="warning" size="lg" />
        </div>
      </Inline>

      <Spacer size="lg" />

      <Paragraph weight="bold" align="center">
        {title}
      </Paragraph>

      {description && (
        <Paragraph size="sm" align="center">
          {description}
        </Paragraph>
      )}

      <Spacer size="lg" />

      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction} fullWidth>
          {actionLabel}
        </Button>
      )}
    </Card>
  );
};
