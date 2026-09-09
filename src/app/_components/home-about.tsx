'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import { useTranslations, useLocale } from 'next-intl'

import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

interface FeatureData {
  id: number
  title: string
  description: string
  icon: ReactNode
}

const paragraphIcon = (icon: ReactNode) => (
  <Box
    sx={{
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `${BRAND.primaryLight}40`,
      color: BRAND.primary,
    }}
  >
    {icon}
  </Box>
)

const FeatureItem = ({
  item,
  isLast,
}: {
  item: FeatureData
  isLast: boolean
}) => (
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        pr: { md: isLast ? 0 : 3 },
        borderRight: {
          xs: 'none',
          md: isLast
            ? 'none'
            : `1px solid ${BRAND.primarySoft}`,
        },
        height: '100%',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 52,
          height: 52,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${BRAND.primaryLight}40`,
          color: BRAND.primary,
        }}
      >
        {item.icon}
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 14, md: 15 },
            mb: 0.5,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 12.5, md: 13.5 },
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  </Grid>
)

const HomeAbout = () => {
  const { palette } = useTheme()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const t = useTranslations('HomePage.About')

  const features: FeatureData[] = [
    {
      id: 1,
      title: t('features.strategy.title'),
      description: t('features.strategy.description'),
      icon: <TrackChangesIcon sx={{ fontSize: 26 }} />,
    },
    {
      id: 2,
      title: t('features.creativity.title'),
      description: t('features.creativity.description'),
      icon: <DesignServicesIcon sx={{ fontSize: 26 }} />,
    },
    {
      id: 3,
      title: t('features.results.title'),
      description: t('features.results.description'),
      icon: <TrendingUpIcon sx={{ fontSize: 26 }} />,
    },
    {
      id: 4,
      title: t('features.support.title'),
      description: t('features.support.description'),
      icon: <GroupIcon sx={{ fontSize: 26 }} />,
    },
  ]

  return (
    <Box
      id="home-about"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 6, lg: 10 },
        backgroundColor: palette.mode === 'dark' ? palette.background.default : '#FDFAFC',
        overflow: 'hidden',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
        >
          {/* ================================================= */}
          {/* COLONNE TEXTE */}
          {/* ================================================= */}

          <Grid size={{ xs: 12, md: 6 }}>
            {/* ── En-tête au style de HomeFaq ── */}
            <Stack
              alignItems={{ xs: 'center', md: isRtl ? 'flex-end' : 'flex-start' }}
              textAlign={{ xs: 'center', md: isRtl ? 'right' : 'left' }}
              sx={{ mb: 3 }}
            >
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
                {t('sectionTitle')}
              </Typography>

              {/* Ligne pleine 32x3 */}
              <Box
                sx={{
                  width: 32,
                  height: 3,
                  borderRadius: 999,
                  backgroundColor: BRAND.primary,
                  mb: 2.5,
                }}
              />

              {/* Titre Principal H2 */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 26, sm: 32, md: 42 },
                  fontWeight: 800,
                  lineHeight: isRtl ? 1.4 : 1.2,
                  color: palette.text.primary,
                  mb: 1,
                }}
              >
                {t('heading')}
              </Typography>
            </Stack>

            {/* ================================================= */}
            {/* PARAGRAPHE 1 */}
            {/* ================================================= */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                mb: 2.5,
              }}
            >
              {paragraphIcon(
                <RocketLaunchIcon sx={{ fontSize: 22 }} />
              )}

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.8,
                }}
              >
                {t.rich('paragraph1', {
                  brand: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: BRAND.primary,
                      }}
                    >
                      {chunks}
                    </Box>
                  ),
                })}
              </Typography>
            </Box>

            {/* ================================================= */}
            {/* PARAGRAPHE 2 */}
            {/* ================================================= */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                mb: 2.5,
              }}
            >
              {paragraphIcon(
                <GroupIcon sx={{ fontSize: 22 }} />
              )}

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.8,
                }}
              >
                {t.rich('paragraph2', {
                  highlight: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),
                })}
              </Typography>
            </Box>

            {/* ================================================= */}
            {/* PARAGRAPHE 3 */}
            {/* ================================================= */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                mb: 2.5,
              }}
            >
              {paragraphIcon(
                <TrackChangesIcon sx={{ fontSize: 22 }} />
              )}

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.8,
                }}
              >
                {t.rich('paragraph3', {
                  highlight1: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight2: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight3: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight4: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight5: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight6: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),
                })}
              </Typography>
            </Box>

            {/* ================================================= */}
            {/* PARAGRAPHE 4 */}
            {/* ================================================= */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                mb: 0,
              }}
            >
              {paragraphIcon(
                <TrendingUpIcon sx={{ fontSize: 22 }} />
              )}

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 14, md: 16 },
                  lineHeight: 1.8,
                }}
              >
                {t.rich('paragraph4', {
                  highlight1: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight2: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight3: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),

                  highlight4: (chunks) => (
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {chunks}
                    </Box>
                  ),
                })}
              </Typography>
            </Box>
          </Grid>

          {/* ================================================= */}
          {/* IMAGES DESKTOP */}
          {/* ================================================= */}

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: 560,
              }}
            >
              {/* BLOB */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -60,
                  right: isRtl ? 'auto' : -60,
                  left: isRtl ? -60 : 'auto',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              >
                <svg
                  width="560"
                  height="560"
                  viewBox="0 0 1358 1089"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="figure_moving"
                      x1="0%"
                      x2="86.603%"
                      y1="50%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : BRAND.primarySoft
                        }
                        stopOpacity="1"
                      />

                      <stop
                        offset="99%"
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : BRAND.primaryLight
                        }
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M1357.57 464.94C1357.57 605.537 1180.32 1063.16 848.987 1088.34C505.565 1088.34 591.877 719.737 426.004 719.737C311.195 719.737 0 831.507 0 525.037C0 218.566 368.288 0.336304 674.758 0.336304C981.229 0.336304 1357.57 158.47 1357.57 464.94Z"
                    fill="url(#figure_moving)"
                  />
                </svg>
              </Box>

              {/* IMAGE 1 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: isRtl ? 'auto' : 0,
                  left: isRtl ? 0 : 'auto',
                  width: 420,
                  height: 340,
                  borderRadius: 4,
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow:
                    palette.mode === 'dark'
                      ? 'none'
                      : '0 20px 40px rgba(0,0,0,0.15)',
                  border: palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <Image
                  src="/images/about-1.webp"
                  width={840}
                  height={680}
                  quality={100}
                  alt={t('imageAlt.team')}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* IMAGE 2 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 250,
                  left: isRtl ? 'auto' : -20,
                  right: isRtl ? -20 : 'auto',
                  width: 300,
                  height: 300,
                  borderRadius: 4,
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow:
                    palette.mode === 'dark'
                      ? 'none'
                      : '0 20px 40px rgba(0,0,0,0.15)',
                  border: palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <Image
                  src="/images/about-2.webp"
                  width={600}
                  height={600}
                  quality={100}
                  alt={t('imageAlt.project')}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* BADGE N */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 220,
                  left: isRtl ? 'auto' : -20,
                  right: isRtl ? -20 : 'auto',
                  zIndex: 4,
                  width: 64,
                  height: 64,
                  borderRadius: 2.5,
                  backgroundColor: BRAND.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 24px rgba(181,55,122,0.35)',
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 24,
                  }}
                >
                  N
                </Typography>
              </Box>

              {/* QUOTE */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  right: isRtl ? 'auto' : 0,
                  left: isRtl ? 0 : 'auto',
                  zIndex: 4,
                  width: 250,
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'background.paper',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                  border: palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'flex-start',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    color: BRAND.primary,
                    fontSize: 28,
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: 1.5,
                  }}
                >
                  {t.rich('quote', {
                    highlight: (chunks) => (
                      <Box
                        component="span"
                        sx={{
                          color: BRAND.primary,
                        }}
                      >
                        {chunks}
                      </Box>
                    ),
                  })}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ================================================= */}
          {/* IMAGES MOBILE */}
          {/* ================================================= */}

          <Grid
            size={{ xs: 12 }}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              gap: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/about-1.webp"
                width={350}
                height={350}
                quality={100}
                alt={t('imageAlt.team')}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/about-2.webp"
                width={330}
                height={330}
                quality={100}
                alt={t('imageAlt.project')}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
            boxShadow: palette.mode === 'dark' ? 'none' : '0 4px 18px rgba(87,13,63,0.06)',
            border: palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(181,55,122,0.1)',
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 2 }}
          >
            {features.map((item, index) => (
              <FeatureItem
                key={item.id}
                item={item}
                isLast={
                  index === features.length - 1
                }
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeAbout