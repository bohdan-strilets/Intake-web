import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const CalendarSection = () => {
  return (
    <Surface tone="secondary">
      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            Your history.
            <br />
            At a glance.
          </Title>

          <Paragraph align="center" tone="muted">
            See your daily intake on a simple calendar view. Review any past day
            instantly.
          </Paragraph>

          <Image
            src="/landing/calendar-scr.webp"
            alt="Calendar view of daily intake"
          />

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </Surface>
  );
};
