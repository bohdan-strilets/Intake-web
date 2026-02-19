import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const DailyFocusSection = () => {
  return (
    <Container>
      <Stack>
        <Spacer size="3xl" />

        <Title level={2} size="xl" align="center">
          Built for
          <br />
          every day.
        </Title>

        <Paragraph align="center" tone="muted">
          No dashboard overload. No complex charts. Just today's intake.
        </Paragraph>

        <Image
          src="/landing/stats-scr.webp"
          alt="Statistics view of daily intake"
        />

        <Spacer size="3xl" />
      </Stack>
    </Container>
  );
};
