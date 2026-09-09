'use client'

import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined'

import { allCaseStudies, ICaseMetric } from '@/constants/case-studies'

const BRAND = {
  primaryPurple: '#9333EA',
  primaryLightPurple: '#F3E8FF',
  bgCardLight: '#F8FAFC',
}

const renderMetricIcon = (type: ICaseMetric['iconType']) => {
  const iconSx = { fontSize: 16, color: BRAND.primaryPurple }
  switch (type) {
    case 'price':
      return <AttachMoneyOutlinedIcon sx={iconSx} />
    case 'click':
      return <TouchAppOutlinedIcon sx={iconSx} />
    case 'user':
      return <PersonOutlineOutlinedIcon sx={iconSx} />
    case 'percent':
      return <PercentOutlinedIcon sx={iconSx} />
    case 'trend':
    default:
      return <TrendingUpOutlinedIcon sx={iconSx} />
  }
}

const HomeCaseStudies: FC = () => {
  const theme = useTheme()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const t = useTranslations('CaseStudies')
  const tGlobal = useTranslations()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? theme.palette.mode === 'dark' : false
  // Affiche uniquement les 3 premières études sur la Home
  const homeStudies = allCaseStudies.slice(0, 3)

  return (
    <Box
      component="section"
      id="home-case-studies"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: isDark ? '#0A0108' : '#FFFFFF',
        direction: isRtl ? 'rtl' : 'ltr',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* ── 1. En-tête de section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: isRtl ? 'right' : 'left' }}>
            <Typography
              sx={{
                color: BRAND.primaryPurple,
                fontWeight: 800,
                fontSize: { xs: 12, sm: 13 },
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              {t('badge')}
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                fontWeight: 900,
                color: isDark ? '#FFFFFF' : '#0F172A',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              {t('title')}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748B',
                maxWidth: 620,
                lineHeight: 1.6,
              }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {/* ── 2. Cartes animées des études de cas ── */}
        <Stack spacing={{ xs: 4, sm: 5, md: 6 }}>
          {homeStudies.map((item, index) => {
            const isImageLeft = item.imagePosition === 'left'

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    borderRadius: { xs: 4, sm: 5 },
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.025)' : BRAND.bgCardLight,
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#EDF2F7',
                    overflow: 'hidden',
                    p: { xs: 2.5, sm: 3.5, md: 4 },
                  }}
                >
                  <Grid
                    container
                    spacing={{ xs: 3, md: 4, lg: 5 }}
                    alignItems="center"
                    direction={{
                      xs: 'column',
                      md: isImageLeft
                        ? isRtl ? 'row-reverse' : 'row'
                        : isRtl ? 'row' : 'row-reverse',
                    }}
                  >
                    {/* Colonne Image + Badge Flottant */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: { xs: 240, sm: 320, md: 360 },
                          borderRadius: 3.5,
                          overflow: 'hidden',
                          bgcolor: '#E2E8F0',
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={tGlobal(item.titleKey)}
                          fill
                          sizes="(max-width: 900px) 100vw, 550px"
                          style={{ objectFit: 'cover' }}
                        />

                        {/* Badge Flottant Blanc */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: isRtl ? 'auto' : 16,
                            right: isRtl ? 16 : 'auto',
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: 2.5,
                            px: 2,
                            py: 1.2,
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                            textAlign: isRtl ? 'right' : 'left',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: '1.25rem', sm: '1.45rem' },
                              fontWeight: 900,
                              lineHeight: 1,
                              color: '#0F172A',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {item.badgeValue}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 10,
                              fontWeight: 800,
                              color: BRAND.primaryPurple,
                              textTransform: 'uppercase',
                              letterSpacing: 0.8,
                              mt: 0.3,
                            }}
                          >
                            {tGlobal(item.badgeLabelKey)}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Colonne Contenu Textuel + 3 Métriques */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack spacing={2.5} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                        {/* Titre */}
                        <Typography
                          component="h3"
                          sx={{
                            fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.85rem' },
                            fontWeight: 900,
                            color: isDark ? '#FFFFFF' : '#0F172A',
                            lineHeight: 1.25,
                          }}
                        >
                          {tGlobal(item.titleKey)}
                        </Typography>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
                            color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748B',
                            lineHeight: 1.65,
                          }}
                        >
                          {tGlobal(item.descriptionKey)}
                        </Typography>

                        {/* 3 Cartes de Métriques */}
                        <Grid container spacing={1.5} sx={{ pt: 1 }}>
                          {item.metrics.map((metric, mIdx) => (
                            <Grid size={{ xs: 12, sm: 4 }} key={mIdx}>
                              <Box
                                sx={{
                                  p: 1.8,
                                  borderRadius: 3,
                                  bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FFFFFF',
                                  border: '1px solid',
                                  borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,0.04)',
                                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  height: '100%',
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 1.5,
                                    bgcolor: isDark ? 'rgba(147, 51, 234, 0.15)' : BRAND.primaryLightPurple,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 1.5,
                                  }}
                                >
                                  {renderMetricIcon(metric.iconType)}
                                </Box>

                                <Typography
                                  sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.15rem' },
                                    fontWeight: 900,
                                    color: isDark ? '#FFFFFF' : '#0F172A',
                                    lineHeight: 1.1,
                                    mb: 0.5,
                                  }}
                                >
                                  {metric.value}
                                </Typography>

                                <Typography
                                  sx={{
                                    fontSize: '0.725rem',
                                    color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B',
                                    lineHeight: 1.35,
                                  }}
                                >
                                  {tGlobal(metric.labelKey)}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>

                        {/* Lien vers la page de détails */}
                        <Box sx={{ pt: 1 }}>
                          <Typography
                            component={RouterLink}
                            href={`/${locale}/case-studies/${item.slug}`}
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.75,
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              color: BRAND.primaryPurple,
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                textDecoration: 'underline',
                                transform: isRtl ? 'translateX(-4px)' : 'translateX(4px)',
                              },
                            }}
                          >
                            <span>{t('readFull')}</span>
                            <OpenInNewIcon sx={{ fontSize: 15 }} />
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            )
          })}
        </Stack>

        {/* ── 3. Bouton Voir Plus ── */}
        <Box sx={{ mt: { xs: 6, md: 8 }, display: 'flex', justifyContent: 'center' }}>
          <Button
            component={RouterLink}
            href={`/${locale}/case-studies`}
            endIcon={<OpenInNewIcon sx={{ fontSize: '16px !important' }} />}
            sx={{
              border: `1.5px solid ${BRAND.primaryPurple}`,
              color: isDark ? '#FFFFFF' : BRAND.primaryPurple,
              bgcolor: 'transparent',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'none',
              px: 3.5,
              py: 1.2,
              borderRadius: '2rem',
              transition: 'all 0.25s ease',
              '&:hover': {
                bgcolor: BRAND.primaryPurple,
                color: '#FFFFFF',
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 20px rgba(147, 51, 234, 0.25)`,
              },
            }}
          >
            {t('seeMore')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeCaseStudies