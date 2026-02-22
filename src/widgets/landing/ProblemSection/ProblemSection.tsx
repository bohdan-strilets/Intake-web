import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const ProblemSection = () => {
  const { t } = useTranslation('landing');

  return (
    <Surface tone="secondary">
      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            {t('problem.title.line1')}
            <br />
            {t('problem.title.line2')}
          </Title>

          <Stack gap="md">
            <Paragraph weight="bold" align="center">
              {t('problem.points.tooManyFields.title')}
            </Paragraph>
            <Paragraph align="center" tone="muted">
              {t('problem.points.tooManyFields.description')}
            </Paragraph>
          </Stack>

          <Stack gap="md">
            <Paragraph weight="bold" align="center">
              {t('problem.points.tooMuchCounting.title')}
            </Paragraph>
            <Paragraph align="center" tone="muted">
              {t('problem.points.tooMuchCounting.description')}
            </Paragraph>
          </Stack>

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </Surface>
  );
};
