/**
 * Slightly increased typography scale for viewports >= 768px (tablet and up).
 * Applied via responsiveOverrides.css (pure CSS min-width media query).
 */
export const tabletTypography = {
  fontFamily: {
    base: 'Inter, sans-serif',
  },

  fontSize: {
    xs: '13px',
    sm: '15px',
    md: '17px',
    lg: '19px',
    xl: '23px',
    '2xl': '29px',
    '3xl': '38px',
    display: '66px',
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },

  lineHeight: {
    normal: '1.4',
    relaxed: '1.7',
    loose: '1.9',
  },
} as const;
