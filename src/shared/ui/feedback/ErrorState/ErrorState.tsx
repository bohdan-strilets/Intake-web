import { Button } from '@shared/ui/controls/Button';
import { IconBadge } from '@shared/ui/controls/IconBadge';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Paragraph } from '@shared/ui/typography/Paragraph';

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
        <IconBadge
          name="warning"
          color="warning"
          background="warningSoft"
          size="md"
        />
      </Inline>

      <Spacer size="lg" />

      <Paragraph weight="bold" align="center" size="lg">
        {title}
      </Paragraph>

      {description && (
        <Paragraph size="sm" align="center">
          {description}
        </Paragraph>
      )}

      {actionLabel && onAction && (
        <>
          <Spacer size="lg" />

          <Button variant="secondary" size="sm" onClick={onAction} fullWidth>
            {actionLabel}
          </Button>
        </>
      )}
    </Card>
  );
};
