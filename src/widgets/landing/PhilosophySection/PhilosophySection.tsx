import { useTranslation } from '@shared/i18n';
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
  const { t } = useTranslation('landing');

  return (
    <>
      <Surface tone="secondary">
        <Container>
          <Stack gap="3xl">
            <Spacer size="3xl" />

            <Title level={2} size="xl" align="center">
              {t('philosophy.intake.title.line1')}
              <br />
              {t('philosophy.intake.title.line2')}
            </Title>

            <Paragraph align="center" tone="muted">
              {t('philosophy.intake.description')}
            </Paragraph>

            <Image
              src="/landing/fruits.webp"
              alt={t('philosophy.intake.imageAlt')}
            />

            <Spacer size="3xl" />
          </Stack>
        </Container>
      </Surface>

      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            {t('philosophy.design.title')}
          </Title>

          <Stack gap="2xl">
            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">
                  {t('philosophy.design.points.minimalInterface.title')}
                </Paragraph>
                <Paragraph tone="muted">
                  {t('philosophy.design.points.minimalInterface.description')}
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">
                  {t('philosophy.design.points.noBloat.title')}
                </Paragraph>
                <Paragraph tone="muted">
                  {t('philosophy.design.points.noBloat.description')}
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">
                  {t('philosophy.design.points.dataByDay.title')}
                </Paragraph>
                <Paragraph tone="muted">
                  {t('philosophy.design.points.dataByDay.description')}
                </Paragraph>
              </Stack>
            </Inline>

            <Inline gap="lg">
              <Icon name="success" color="accentPrimary" />
              <Stack gap="xs">
                <Paragraph weight="bold">
                  {t('philosophy.design.points.clearFeedback.title')}
                </Paragraph>
                <Paragraph tone="muted">
                  {t('philosophy.design.points.clearFeedback.description')}
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
