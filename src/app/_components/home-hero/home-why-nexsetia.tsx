'use client'

import React, { FC, useEffect, useState } from 'react'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

export const HomeWhyNexsetia: FC = () => {
  const theme = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? theme.palette.mode === 'dark' : false
  const t = useTranslations('WhyNexsetia')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const cardBg = isDark ? '#190616' : '#FFFFFF'
  const cardBorder = isDark ? alpha(BRAND.primaryLight, 0.15) : alpha(BRAND.primary, 0.12)
  const textDark = isDark ? '#FFFFFF' : '#570D3F'
  const textMuted = isDark ? 'rgba(255, 255, 255, 0.65)' : '#4B5563'

  // Configuration des 4 cartes autour du noyau central
  const pillars = [
    {
      step: '01',
      key: 'strategy',
      icon: ExploreOutlinedIcon,
      title: t('pillars.strategy.title'),
      punchline: t('pillars.strategy.punchline'),
      desc: t('pillars.strategy.desc'),
    },
    {
      step: '02',
      key: 'data',
      icon: InsightsOutlinedIcon,
      title: t('pillars.data.title'),
      punchline: t('pillars.data.punchline'),
      desc: t('pillars.data.desc'),
    },
    {
      step: '03',
      key: 'execution',
      icon: HubOutlinedIcon,
      title: t('pillars.execution.title'),
      punchline: t('pillars.execution.punchline'),
      desc: t('pillars.execution.desc'),
    },
    {
      step: '04',
      key: 'performance',
      icon: AutoGraphOutlinedIcon,
      title: t('pillars.performance.title'),
      punchline: t('pillars.performance.punchline'),
      desc: t('pillars.performance.desc'),
    },
  ]

  return (
    <Box
      component="section"
      id="why-nexsetia"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 6, lg: 10 },
        bgcolor: isDark ? theme.palette.background.default : '#FDFAFC',
        direction: isRtl ? 'rtl' : 'ltr',
        position: 'relative',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        {/* ── 1. En-tête Centré (Design System Nexsetia) ── */}
        <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
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

          {/* Ligne d'accent 32x3 */}
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

        {/* ── 2. Système Connecté 2x2 avec Hub Central ── */}
        <Box sx={{ position: 'relative', maxWidth: 1040, mx: 'auto' }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* LIGNE DU HAUT : 01 & 02 */}
            {pillars.slice(0, 2).map((pillar) => {
              const Icon = pillar.icon
              return (
                <Grid size={{ xs: 12, md: 6 }} key={pillar.key}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      p: { xs: 3, sm: 3.5 },
                      bgcolor: cardBg,
                      border: '1px solid',
                      borderColor: cardBorder,
                      boxShadow: isDark ? 'none' : '0 4px 18px rgba(87, 13, 63, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: BRAND.primary,
                        boxShadow: isDark
                          ? '0 16px 36px rgba(0,0,0,0.5)'
                          : '0 16px 36px rgba(181, 55, 122, 0.14)',
                      },
                    }}
                  >
                    {/* Numéro filigrane */}
                    <Typography
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: isRtl ? 'auto' : 16,
                        left: isRtl ? 16 : 'auto',
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1,
                        color: isDark ? 'rgba(255, 255, 255, 0.04)' : alpha(BRAND.primary, 0.08),
                        pointerEvents: 'none',
                      }}
                    >
                      {pillar.step}
                    </Typography>

                    <CardContent sx={{ p: 0, textAlign: isRtl ? 'right' : 'left' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${BRAND.primaryLight}30`,
                          color: BRAND.primary,
                          mb: 2.5,
                        }}
                      >
                        <Icon sx={{ fontSize: 26 }} />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: BRAND.primary,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          mb: 0.75,
                        }}
                      >
                        {pillar.title}
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontSize: { xs: '1.2rem', sm: '1.35rem' },
                          fontWeight: 800,
                          color: textDark,
                          lineHeight: 1.3,
                          mb: 1.5,
                        }}
                      >
                        {pillar.punchline}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: textMuted,
                          lineHeight: 1.65,
                        }}
                      >
                        {pillar.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}

            {/* BADGE CENTRAL : NEXSETIA × CONNECTED SYSTEM */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  py: 2,
                  px: 3,
                  mx: 'auto',
                  maxWidth: 420,
                  borderRadius: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  bgcolor: isDark ? 'rgba(255,255,255,0.04)' : `${BRAND.primarySoft}60`,
                  border: `1px solid ${alpha(BRAND.primary, 0.25)}`,
                  boxShadow: '0 4px 20px rgba(87, 13, 63, 0.08)',
                }}
              >
                <AllInclusiveIcon sx={{ color: BRAND.primary, fontSize: 22 }} />
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    color: textDark,
                    textTransform: 'uppercase',
                  }}
                >
                  {t('hub.brand')}
                </Typography>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    bgcolor: BRAND.primary,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    color: BRAND.primary,
                    textTransform: 'uppercase',
                  }}
                >
                  {t('hub.tagline')}
                </Typography>
              </Box>
            </Grid>

            {/* LIGNE DU BAS : 03 & 04 */}
            {pillars.slice(2, 4).map((pillar) => {
              const Icon = pillar.icon
              return (
                <Grid size={{ xs: 12, md: 6 }} key={pillar.key}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      p: { xs: 3, sm: 3.5 },
                      bgcolor: cardBg,
                      border: '1px solid',
                      borderColor: cardBorder,
                      boxShadow: isDark ? 'none' : '0 4px 18px rgba(87, 13, 63, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: BRAND.primary,
                        boxShadow: isDark
                          ? '0 16px 36px rgba(0,0,0,0.5)'
                          : '0 16px 36px rgba(181, 55, 122, 0.14)',
                      },
                    }}
                  >
                    {/* Numéro filigrane */}
                    <Typography
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: isRtl ? 'auto' : 16,
                        left: isRtl ? 16 : 'auto',
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1,
                        color: isDark ? 'rgba(255, 255, 255, 0.04)' : alpha(BRAND.primary, 0.08),
                        pointerEvents: 'none',
                      }}
                    >
                      {pillar.step}
                    </Typography>

                    <CardContent sx={{ p: 0, textAlign: isRtl ? 'right' : 'left' }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: `${BRAND.primaryLight}30`,
                          color: BRAND.primary,
                          mb: 2.5,
                        }}
                      >
                        <Icon sx={{ fontSize: 26 }} />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: BRAND.primary,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          mb: 0.75,
                        }}
                      >
                        {pillar.title}
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontSize: { xs: '1.2rem', sm: '1.35rem' },
                          fontWeight: 800,
                          color: textDark,
                          lineHeight: 1.3,
                          mb: 1.5,
                        }}
                      >
                        {pillar.punchline}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: textMuted,
                          lineHeight: 1.65,
                        }}
                      >
                        {pillar.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        {/* ── 3. Bouton vers la méthode [ Découvrir notre méthode → ] ── */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Button
            component={RouterLink}
            href={`/${locale}#method`}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  transform: isRtl ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}
              />
            }
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#FFFFFF',
              bgcolor: BRAND.primary,
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'none',
              px: 3.5,
              py: 1.2,
              borderRadius: '2rem',
              boxShadow: `0 8px 24px ${alpha(BRAND.primary, 0.35)}`,
              transition: 'all 0.25s ease',
              '&:hover': {
                bgcolor: BRAND.primaryDark,
                transform: 'translateY(-2px)',
                boxShadow: `0 12px 30px ${alpha(BRAND.primaryDark, 0.45)}`,
                '& .MuiButton-endIcon': {
                  transform: isRtl ? 'translateX(-4px) rotate(180deg)' : 'translateX(4px)',
                },
              },
            }}
          >
            {t('ctaButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeWhyNexsetia