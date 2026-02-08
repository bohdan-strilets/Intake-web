import { WEEK_LABELS } from '@shared/lib/date';
import { Grid } from '@shared/ui/layout/Grid';
import { Paragraph } from '@shared/ui/typography/Paragraph';

export const CalendarWeekHeader = () => {
  return (
    <Grid columns={7} gap="sm">
      {WEEK_LABELS.map((label) => (
        <Paragraph key={label} size="sm" align="center">
          {label}
        </Paragraph>
      ))}
    </Grid>
  );
};
