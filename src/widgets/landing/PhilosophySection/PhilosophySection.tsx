import { Icon } from '@shared/ui/controls/Icon';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const PhilosophySection = () => {
  return (
    <>
      <Surface tone="secondary">
        <Container>
          <Stack gap="3xl">
            <Spacer size="3xl" />

            <Title level={2} size="xl" align="center">
              See your
              <br />
              real intake.
            </Title>

            <Paragraph align="center" tone="muted">
              Weekly and monthly averages. Compare to your goal. Simple macro
              breakdown.
            </Paragraph>

            <Image src="/landing/fruits.webp" alt="Fruits and vegetables" />

            <Spacer size="3xl" />
          </Stack>
        </Container>
      </Surface>

      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            Calm by design.
          </Title>

          <Stack gap="2xl">
            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">Minimal interface</Paragraph>
                <Paragraph tone="muted">
                  Only what you need to track your day
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">No feature bloat</Paragraph>
                <Paragraph tone="muted">
                  No gamification, no social features, no distractions
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">Data by day</Paragraph>
                <Paragraph tone="muted">
                  Everything organized by calendar date
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">Clear feedback</Paragraph>
                <Paragraph tone="muted">
                  Simple comparison to your personal goal
                </Paragraph>
              </Stack>
            </Inline>
          </Stack>

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </>
  );
};
