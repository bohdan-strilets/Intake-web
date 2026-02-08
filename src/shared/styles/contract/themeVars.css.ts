import { createThemeContract } from '@vanilla-extract/css';

import { themeContract } from './themeContract.css';

export const vars = createThemeContract(themeContract);
