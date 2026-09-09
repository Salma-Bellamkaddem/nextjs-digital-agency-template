'use client'

import { FC, ReactNode, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { CssBaseline, ThemeProvider, createTheme as createMuiTheme } from '@mui/material'

import { useApp } from '@/hooks'
import { getTypography } from '../theme/typography'
import breakpoints from '../theme/breakpoints'
import paletteBase from '../theme/palette-base'
import paletteDark from '../theme/palette-dark'
import paletteLight from '../theme/palette-light'
import shadows from '../theme/shadows'

const MuiThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDark } = useApp()
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const theme = useMemo(() => {
    const palette = isDark
      ? { ...paletteBase, ...paletteDark }
      : { ...paletteBase, ...paletteLight }

    return createMuiTheme({
      direction: isRtl ? 'rtl' : 'ltr',
      palette,
      typography: getTypography(locale),
      breakpoints,
      shadows,
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              direction: isRtl ? 'rtl' : 'ltr',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              '& .MuiButton-startIcon': {
                marginInlineEnd: 8,
                marginInlineStart: -4,
              },
              '& .MuiButton-endIcon': {
                marginInlineStart: 8,
                marginInlineEnd: -4,
              },
            },
          },
        },
      },
    })
  }, [isDark, locale, isRtl])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider