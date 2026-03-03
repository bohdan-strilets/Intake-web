import { Button } from '@shared/ui/controls/Button';
import { IconBadge } from '@shared/ui/controls/IconBadge';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { EmailNotVerifiedStateProps } from './EmailNotVerifiedState.types';

export const EmailNotVerifiedState = ({
  title,
  description,
  resendLabel,
  onResend,
  isResendPending = false,
  tryAgainLabel,
  onTryAgain,
}: EmailNotVerifiedStateProps) => {
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

      <Spacer size="lg" />

      <Stack gap="xs">
        <Button
          variant="primary"
          size="sm"
          onClick={onResend}
          loading={isResendPending}
          disabled={isResendPending}
          fullWidth
        >
          {resendLabel}
        </Button>
        {tryAgainLabel && onTryAgain && (
          <Button variant="secondary" size="sm" onClick={onTryAgain} fullWidth>
            {tryAgainLabel}
          </Button>
        )}
      </Stack>
    </Card>
  );
};
