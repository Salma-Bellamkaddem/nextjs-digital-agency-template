'use client'

import React, { FC } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const CARDS_CONFIG = [
  {
    key: 'target',
    icon: BusinessCenterOutlinedIcon,
  },
  {
    key: 'pain',
    icon: ReportProblemOutlinedIcon,
  },
  {
    key: 'value',
    icon: TrendingUpOutlinedIcon,
  },
]

export const HomeValueProposition: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const t = useTranslations('HeroContent')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const cardBg = isDark ? '#190616' : '#FFFFFF'
  const cardBorder = isDark ? alpha(BRAND.primaryLight, 0.15) : alpha(BRAND.primary, 0.12)
  const textDark = isDark ? '#FFFFFF' : BRAND.primaryDark
  const textMuted = isDark ? 'rgba(255, 255, 255, 0.65)' : '#4B5563'

  return (
    <Box
      component="section"
      id="home-value-proposition"
      sx={{
        py: { xs: 8, md: 11 },
        px: { xs: 2.5, md: 6, lg: 10 },
        bgcolor: isDark ? theme.palette.background.default : '#FDFAFC',
        direction: isRtl ? 'rtl' : 'ltr',
        position: 'relative',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        {/* ── En-tête Centré Standardisé ── */}
        <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 7 } }}>
          {/* Badge */}
          <Typography
            sx={{
              color: BRAND.primary,
              fontWeight: 800,
              letterSpacing: isRtl ? 1 : 2,
              fontSize: 13,
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            {t('badge')}
          </Typography>

          {/* Ligne 32x3 */}
          <Box
            sx={{
              width: 32,
              height: 3,
              borderRadius: 999,
              backgroundColor: BRAND.primary,
              mb: 3,
            }}
          />

          {/* Titre Principal H2 */}
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 24, sm: 32, md: 40 },
              fontWeight: 800,
              lineHeight: isRtl ? 1.4 : 1.25,
              color: textDark,
              mb: 2,
              maxWidth: 820,
            }}
          >
            {t('title')}{' '}
            <Box component="span" sx={{ color: BRAND.primary }}>
              {t('highlight')}
            </Box>
          </Typography>

          {/* Sous-titre */}
          <Typography
            sx={{
              color: textMuted,
              fontSize: { xs: 15, md: 17 },
              maxWidth: 720,
              lineHeight: isRtl ? 1.8 : 1.65,
            }}
          >
            {t('subtitle')}
          </Typography>
        </Stack>

        {/* ── Grille 3 Colonnes : Pour qui ? → Problèmes → Valeur ── */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} alignItems="stretch">
          {CARDS_CONFIG.map((card) => {
            const Icon = card.icon
            const isHighlight = card.key === 'value'

            return (
              <Grid size={{ xs: 12, md: 4 }} key={card.key}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 4,
                    p: { xs: 3, sm: 3.5 },
                    bgcolor: isHighlight
                      ? isDark
                        ? alpha(BRAND.primary, 0.12)
                        : '#FFF6FB'
                      : cardBg,
                    border: '1px solid',
                    borderColor: isHighlight ? BRAND.primary : cardBorder,
                    boxShadow: isDark
                      ? 'none'
                      : isHighlight
                      ? '0 12px 32px rgba(181, 55, 122, 0.12)'
                      : '0 4px 18px rgba(87, 13, 63, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: BRAND.primary,
                      boxShadow: isDark
                        ? '0 16px 36px rgba(0,0,0,0.5)'
                        : '0 16px 36px rgba(181, 55, 122, 0.16)',
                      '& .value-prop-icon': {
                        bgcolor: BRAND.primary,
                        color: '#FFFFFF',
                        transform: 'scale(1.06)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: isRtl ? 'right' : 'left' }}>
                    {/* Icône */}
                    <Box
                      className="value-prop-icon"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${BRAND.primaryLight}35`,
                        color: BRAND.primary,
                        mb: 2.5,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon sx={{ fontSize: 26 }} />
                    </Box>

                    {/* Tag de la colonne */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        px: 1.4,
                        py: 0.4,
                        borderRadius: '2rem',
                        bgcolor: isDark ? alpha(BRAND.primary, 0.2) : `${BRAND.primarySoft}70`,
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: BRAND.primary,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t(`cards.${card.key}.tag`)}
                      </Typography>
                    </Box>

                    {/* Titre */}
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.2rem', sm: '1.3rem' },
                        fontWeight: 800,
                        color: textDark,
                        lineHeight: 1.35,
                        mb: 1.5,
                      }}
                    >
                      {t(`cards.${card.key}.title`)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: '0.92rem',
                        color: textMuted,
                        lineHeight: 1.7,
                      }}
                    >
                      {t(`cards.${card.key}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeValueProposition