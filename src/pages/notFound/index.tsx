import { useNavigate } from '@tanstack/react-router';

import { DAY_ALIAS } from '@entities/day';

import { ROUTES } from '@shared/routes';
import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoToToday = () => {
    navigate({ to: ROUTES.app.day, params: { date: DAY_ALIAS.TODAY } });
  };

  return (
    <Card shadow="sm">
      <Stack>
        <Paragraph align="center" weight="bold" size="display">
          404
        </Paragraph>

        <Paragraph align="center" size="lg" tone="muted">
          Page not found
          <br />
          The page doesn’t exist.
        </Paragraph>
      </Stack>

      <Spacer size="3xl" />

      <Button
        iconLeft="chevronLeft"
        iconColor="accentOn"
        onClick={handleGoToToday}
      >
        Go to Today
      </Button>
    </Card>
  );
};
