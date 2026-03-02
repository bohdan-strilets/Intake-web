import { styleVariants } from '@vanilla-extract/css';

import { vars } from './contract';

export const cardGradients = styleVariants({
  dailyIntake: {
    backgroundImage: `linear-gradient(135deg, ${vars.colors.accentSoft}, ${vars.colors.backgroundPrimary})`,
  },
  calories: {
    backgroundImage: `linear-gradient(135deg, ${vars.colors.accentPrimary}, ${vars.colors.successSoft})`,
    color: vars.colors.textOnAccent,
  },
});
