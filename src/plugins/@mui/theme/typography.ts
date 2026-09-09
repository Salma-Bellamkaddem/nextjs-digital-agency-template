import { TypographyVariantsOptions } from '@mui/material'

export const getFontFamily = (locale: string = 'fr') =>
  locale === 'ar'
    ? 'var(--font-arabic), "IBM Plex Sans Arabic", sans-serif'
    : 'var(--font-plus-jakarta-sans), "Poppins", sans-serif'

export const getTypography = (locale: string = 'fr'): TypographyVariantsOptions => {
  const isRtl = locale === 'ar'
  const currentFontFamily = getFontFamily(locale)

  return {
    fontFamily: currentFontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: 42,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.35 : 1.15,
      letterSpacing: isRtl ? 0 : '-0.025em',
    },
    h2: {
      fontWeight: 700,
      fontSize: 34,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.4 : 1.2,
      letterSpacing: isRtl ? 0 : '-0.02em',
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.45 : 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.5 : 1.35,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.6 : 1.4,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      fontFamily: currentFontFamily,
      lineHeight: isRtl ? 1.65 : 1.45,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: currentFontFamily,
      fontSize: isRtl ? '0.95rem' : '0.875rem',
      lineHeight: isRtl ? 1.85 : 1.6,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: currentFontFamily,
      fontSize: isRtl ? '0.925rem' : '0.875rem',
      lineHeight: isRtl ? 1.75 : 1.55,
      letterSpacing: 0,
    },
    subtitle1: {
      fontFamily: currentFontFamily,
      fontSize: isRtl ? '0.95rem' : '0.875rem',
      fontWeight: 400,
      lineHeight: isRtl ? 1.75 : 1.5,
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: currentFontFamily,
      fontSize: isRtl ? '0.88rem' : '0.82rem',
      fontWeight: 500,
      lineHeight: isRtl ? 1.7 : 1.5,
      letterSpacing: 0,
    },
    button: {
      fontFamily: currentFontFamily,
      fontWeight: 700,
      letterSpacing: 0,
    },
  }
}

export default getTypography