import { darkColors } from './darkColors.css';

/**
 * М'які градієнти для dark theme.
 * Той самий принцип: низький контраст, плавні переходи.
 */
export const darkGradients = {
  header: `linear-gradient(180deg, ${darkColors.backgroundSurface} 0%, ${darkColors.backgroundPrimary} 100%)`,

  surfaceSoft: `linear-gradient(180deg, ${darkColors.backgroundPrimary} 0%, ${darkColors.backgroundSurface} 100%)`,

  dailySummary: `linear-gradient(160deg, ${darkColors.accentSoft} 0%, ${darkColors.backgroundPrimary} 70%)`,

  accentSoft: `linear-gradient(135deg, ${darkColors.accentSoft} 0%, ${darkColors.backgroundSurface} 100%)`,

  accentButton: `linear-gradient(180deg, ${darkColors.accentPrimary} 0%, #3AB88A 100%)`,

  statsCard: `linear-gradient(160deg, ${darkColors.accentSoft} 0%, ${darkColors.backgroundSurface} 100%)`,

  emptyState: `linear-gradient(180deg, ${darkColors.backgroundSecondary} 0%, ${darkColors.backgroundSurface} 100%)`,
} as const;
