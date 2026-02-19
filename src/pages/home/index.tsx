import { CalendarSection } from '@widgets/landing/CalendarSection';
import { CTASection } from '@widgets/landing/CTASection';
import { DailyFocusSection } from '@widgets/landing/DailyFocusSection';
import { HeroSection } from '@widgets/landing/HeroSection';
import { HowItWorksSection } from '@widgets/landing/HowItWorksSection';
import { PhilosophySection } from '@widgets/landing/PhilosophySection';
import { ProblemSection } from '@widgets/landing/ProblemSection';

import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';

export const HomePage = () => {
  return (
    <Stack gap="3xl">
      <HeroSection />

      <ProblemSection />

      <HowItWorksSection />

      <CalendarSection />

      <DailyFocusSection />

      <PhilosophySection />

      <CTASection />

      <Spacer size="xl" />
    </Stack>
  );
};
