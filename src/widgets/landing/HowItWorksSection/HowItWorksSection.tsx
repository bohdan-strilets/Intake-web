import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const HowItWorksSection = () => {
  return (
    <Container>
      <Stack gap="3xl">
        <Spacer size="3xl" />

        <Title level={2} size="xl" align="center">
          One field. One day.
          <br />
          One result.
        </Title>

        <Paragraph align="center" tone="muted">
          Just describe what you ate. AI does the rest.
        </Paragraph>

        <Card radius="lg" shadow="sm" tone="primary" border="muted">
          <Paragraph weight="bold" tone="muted" uppercase size="sm">
            You type
          </Paragraph>

          <Paragraph tone="muted">Chicken breast 200g and rice</Paragraph>
        </Card>

        <Inline justify="center">
          <Icon name="magic" color="accentPrimary" size="lg" />
        </Inline>

        <Card radius="lg" shadow="sm" tone="primary" border="muted">
          <Paragraph weight="bold" tone="muted" uppercase size="sm">
            System calculates
          </Paragraph>

          <Paragraph size="2xl" weight="bold">
            383 kcal
          </Paragraph>

          <Inline justify="between">
            <Stack>
              <Paragraph tone="muted">Protein</Paragraph>
              <Paragraph size="xl" weight="bold">
                36g
              </Paragraph>
            </Stack>
            <Stack>
              <Paragraph tone="muted">Fat</Paragraph>
              <Paragraph size="xl" weight="bold">
                5g
              </Paragraph>
            </Stack>
            <Stack>
              <Paragraph tone="muted">Carbs</Paragraph>
              <Paragraph size="xl" weight="bold">
                45g
              </Paragraph>
            </Stack>
          </Inline>
        </Card>

        <Spacer size="3xl" />
      </Stack>
    </Container>
  );
};
