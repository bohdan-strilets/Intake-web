import { useTranslation } from '@shared/i18n';
import { WEEK_DAY_KEYS } from '@shared/lib/date';
import { Grid } from '@shared/ui/layout/Grid';
import { Paragraph } from '@shared/ui/typography/Paragraph';

export const WeekDays = () => {
  const { t } = useTranslation('calendar');

  return (
    <Grid columns={7} gap="sm">
      {WEEK_DAY_KEYS.map((day) => (
        <Paragraph key={day} size="sm" align="center">
          {t(`days.${day}`)}
        </Paragraph>
      ))}
    </Grid>
  );
};
