import { useTranslation } from '@shared/i18n';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Container } from '@shared/ui/layout/Container';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { Title } from '@shared/ui/typography/Title';

export const HowItWorksSection = () => {
  const { t: tLanding } = useTranslation('landing');
  const { t: tCommon } = useTranslation('common');

  return (
    <Container>
      <Stack gap="3xl">
        <Spacer size="3xl" />

        <Title level={2} size="xl" align="center">
          {tLanding('howItWorks.title.line1')}
          <br />
          {tLanding('howItWorks.title.line2')}
        </Title>

        <Paragraph align="center" tone="muted">
          {tLanding('howItWorks.subtitle')}
        </Paragraph>

        <Card radius="lg" shadow="sm" tone="primary" border="muted">
          <Paragraph weight="bold" tone="muted" uppercase size="sm">
            {tLanding('howItWorks.youType.label')}
          </Paragraph>

          <Paragraph tone="muted">
            {tLanding('howItWorks.youType.example')}
          </Paragraph>
        </Card>

        <Inline justify="center">
          <Icon name="magic" color="accentPrimary" size="lg" />
        </Inline>

        <Card radius="lg" shadow="sm" tone="primary" border="muted">
          <Paragraph weight="bold" tone="muted" uppercase size="sm">
            {tLanding('howItWorks.systemCalculates.label')}
          </Paragraph>

          <Paragraph size="2xl" weight="bold">
            {tLanding('howItWorks.systemCalculates.caloriesExample')}
          </Paragraph>

          <Inline justify="between">
            <Stack>
              <Paragraph tone="muted">
                {tCommon('macroNutrients.protein')}
              </Paragraph>
              <Paragraph size="xl" weight="bold">
                36{tCommon('units.gramsShort')}
              </Paragraph>
            </Stack>
            <Stack>
              <Paragraph tone="muted">
                {tCommon('macroNutrients.fat')}
              </Paragraph>
              <Paragraph size="xl" weight="bold">
                5{tCommon('units.gramsShort')}
              </Paragraph>
            </Stack>
            <Stack>
              <Paragraph tone="muted">
                {tCommon('macroNutrients.carbs')}
              </Paragraph>
              <Paragraph size="xl" weight="bold">
                45{tCommon('units.gramsShort')}
              </Paragraph>
            </Stack>
          </Inline>
        </Card>

        <Spacer size="3xl" />
      </Stack>
    </Container>
  );
};
