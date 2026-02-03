import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Card } from '@shared/ui/layout/Card';
import { Container } from '@shared/ui/layout/Container';
import { Divider } from '@shared/ui/layout/Divider';
import { Grid } from '@shared/ui/layout/Grid';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { TextLabel } from '@shared/ui/typography/TextLabel';
import { Title } from '@shared/ui/typography/Title';

const App = () => {
  return (
    <Container>
      <Stack gap="lg">
        <Card tone="surface">
          <Title level={1} size="lg">
            Title
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo ducimus esse
            distinctio impedit necessitatibus error. Dolor, harum est. Iure quasi fugiat magnam
            natus culpa, obcaecati dignissimos facilis quibusdam numquam.
          </Paragraph>
        </Card>

        <Card tone="secondary">
          <Title level={2} size="md">
            Title
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo ducimus esse
            distinctio impedit necessitatibus error. Dolor, harum est. Iure quasi fugiat magnam
            natus culpa, obcaecati dignissimos facilis quibusdam numquam.
          </Paragraph>
        </Card>

        <Card tone="accentSoft">
          <Inline justify="between">
            <Paragraph>First</Paragraph>
            <Paragraph>Second</Paragraph>
            <Paragraph>Third</Paragraph>
          </Inline>
        </Card>

        <Card>
          <Grid columns={5} gap="md">
            <Paragraph align="center">1</Paragraph>
            <Paragraph align="center">2</Paragraph>
            <Paragraph align="center">3</Paragraph>
            <Paragraph align="center">4</Paragraph>
            <Paragraph align="center">5</Paragraph>
            <Paragraph align="center">6</Paragraph>
            <Paragraph align="center">7</Paragraph>
            <Paragraph align="center">8</Paragraph>
            <Paragraph align="center">9</Paragraph>
            <Paragraph align="center">0</Paragraph>
          </Grid>

          <Divider />

          <Grid columns={5} gap="md">
            <Paragraph align="center">1</Paragraph>
            <Paragraph align="center">2</Paragraph>
            <Paragraph align="center">3</Paragraph>
            <Paragraph align="center">4</Paragraph>
            <Paragraph align="center">5</Paragraph>
            <Paragraph align="center">6</Paragraph>
            <Paragraph align="center">7</Paragraph>
            <Paragraph align="center">8</Paragraph>
            <Paragraph align="center">9</Paragraph>
            <Paragraph align="center">0</Paragraph>
          </Grid>
        </Card>

        <Stack gap="xl">
          <Stack gap="sm">
            <TextLabel required>First name</TextLabel>
            <TextInput />
          </Stack>
          <Stack gap="sm">
            <TextLabel required>Last name</TextLabel>
            <TextInput />
          </Stack>
        </Stack>

        <Button loading>Submit</Button>
      </Stack>
    </Container>
  );
};

export default App;
