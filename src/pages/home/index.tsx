import { LandingBenefits } from '@widgets/landing/LandingBenefits';
import { LandingCTA } from '@widgets/landing/LandingCTA';
import { LandingFooter } from '@widgets/landing/LandingFooter';
import { LandingHero } from '@widgets/landing/LandingHero';
import { LandingHowItWorks } from '@widgets/landing/LandingHowItWorks';
import { LandingProblem } from '@widgets/landing/LandingProblem';
import { LandingProductPreview } from '@widgets/landing/LandingProductPreview';
import { LandingSolution } from '@widgets/landing/LandingSolution';

import { Stack } from '@shared/ui/layout/Stack';

export const HomePage = () => {
  return (
    <Stack gap="none">
      <LandingHero />
      <LandingProblem />
      <LandingSolution />
      <LandingHowItWorks />
      <LandingProductPreview />
      <LandingBenefits />
      <LandingCTA />
      <LandingFooter />
    </Stack>
  );
};
