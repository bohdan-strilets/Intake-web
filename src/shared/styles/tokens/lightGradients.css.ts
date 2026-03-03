import { lightColors } from './lightColors.css';

/**
 * М'які градієнти в стилі Apple HIG / iOS Settings.
 * Дуже низький контраст, плавний перехід, без яскравих переходів.
 */
export const lightGradients = {
  /** Header Day screen: surface → primary, легкий перехід вниз */
  header: `linear-gradient(180deg, ${lightColors.backgroundSurface} 0%, ${lightColors.backgroundPrimary} 100%)`,

  /** Великі секції: primary → surface, створює глибину без flat solid */
  surfaceSoft: `linear-gradient(180deg, ${lightColors.backgroundPrimary} 0%, ${lightColors.backgroundSurface} 100%)`,

  /** Daily summary card: м'який accent → primary */
  dailySummary: `linear-gradient(160deg, ${lightColors.accentSoft} 0%, ${lightColors.backgroundPrimary} 70%)`,

  /** Active tab / soft accent areas: дуже м'який accent */
  accentSoft: `linear-gradient(135deg, ${lightColors.accentSoft} 0%, ${lightColors.backgroundSurface} 100%)`,

  /** Primary (accent) button: легкий об'єм, не flat */
  accentButton: `linear-gradient(180deg, ${lightColors.accentPrimary} 0%, #2EB87A 100%)`,

  /** Stats / Calories card: accent-tinged, спокійний */
  statsCard: `linear-gradient(160deg, ${lightColors.accentSoft} 0%, ${lightColors.backgroundSurface} 100%)`,

  /** Empty state: нейтральний, secondary → surface */
  emptyState: `linear-gradient(180deg, ${lightColors.backgroundSecondary} 0%, ${lightColors.backgroundSurface} 100%)`,
} as const;
