import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const ProblemSection = () => {
  return (
    <Surface tone="secondary">
      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            Food tracking
            <br />
            is broken
          </Title>

          <Stack gap="md">
            <Paragraph weight="bold" align="center">
              Too many fields
            </Paragraph>
            <Paragraph align="center" tone="muted">
              Search databases, select portions, adjust serving sizes
            </Paragraph>
          </Stack>

          <Stack gap="md">
            <Paragraph weight="bold" align="center">
              Too much counting
            </Paragraph>
            <Paragraph align="center" tone="muted">
              Manual math, endless tracking, constant calculations
            </Paragraph>
          </Stack>

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </Surface>
  );
};
