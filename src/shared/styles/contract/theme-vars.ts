import { createThemeContract } from '@vanilla-extract/css';

import { themeContract } from './theme-contract.css';

export const vars = createThemeContract(themeContract);
