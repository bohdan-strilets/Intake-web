import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Surface } from '@shared/ui/layout/Surface';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const CalendarSection = () => {
  const { t } = useTranslation('landing');

  return (
    <Surface tone="secondary">
      <Container>
        <Stack gap="3xl">
          <Spacer size="3xl" />

          <Title level={2} size="xl" align="center">
            {t('calendar.title.line1')}
            <br />
            {t('calendar.title.line2')}
          </Title>

          <Paragraph align="center" tone="muted">
            {t('calendar.description')}
          </Paragraph>

          <Image
            src="/landing/calendar-scr.webp"
            alt={t('calendar.imageAlt')}
          />

          <Spacer size="3xl" />
        </Stack>
      </Container>
    </Surface>
  );
};
