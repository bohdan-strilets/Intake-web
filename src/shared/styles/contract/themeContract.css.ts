export const themeContract = {
  colors: {
    backgroundPrimary: null,
    backgroundSurface: null,
    backgroundSecondary: null,
    backgroundInverted: null,

    textPrimary: null,
    textSecondary: null,
    textMuted: null,
    textInverted: null,
    textOnAccent: null,

    borderStrong: null,
    borderMuted: null,

    accentPrimary: null,
    accentSoft: null,

    danger: null,
    dangerSoft: null,
    warning: null,
    warningSoft: null,
    success: null,
    successSoft: null,
    info: null,
    infoSoft: null,

    overlay: null,
  },

  typography: {
    fontFamily: {
      base: null,
    },

    fontSize: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      display: null,
    },

    fontWeight: {
      regular: null,
      medium: null,
      bold: null,
    },

    lineHeight: {
      normal: null,
      relaxed: null,
      loose: null,
    },
  },

  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },

  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
  },

  shadows: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },

  layout: {
    controlHeight: {
      sm: null,
      md: null,
      lg: null,
    },
  },
  zIndex: {
    base: null,

    cellProgressBar: null,
    cellContent: null,

    header: null,
    navigation: null,

    modal: null,
    overlay: null,

    tooltip: null,
    dropdown: null,
  },
} as const;
