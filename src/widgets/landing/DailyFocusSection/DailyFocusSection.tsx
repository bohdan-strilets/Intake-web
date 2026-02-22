import { useTranslation } from '@shared/i18n';
import { Container } from '@shared/ui/layout/Container';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';
import { Image } from '@shared/ui/visual/Image';

export const DailyFocusSection = () => {
  const { t } = useTranslation('landing');

  return (
    <Container>
      <Stack>
        <Spacer size="3xl" />

        <Title level={2} size="xl" align="center">
          {t('dailyFocus.title.line1')}
          <br />
          {t('dailyFocus.title.line2')}
        </Title>

        <Paragraph align="center" tone="muted">
          {t('dailyFocus.description')}
        </Paragraph>

        <Image src="/landing/stats-scr.webp" alt={t('dailyFocus.imageAlt')} />

        <Spacer size="3xl" />
      </Stack>
    </Container>
  );
};
