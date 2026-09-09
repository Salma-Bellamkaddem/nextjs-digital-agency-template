'use client'

import React, { FC, useEffect, useState } from 'react'
import RouterLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme, alpha } from '@mui/material/styles'
import { motion, AnimatePresence } from 'framer-motion'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import DevicesIcon from '@mui/icons-material/Devices'

import { services } from '@/constants/service'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const HomeServices: FC = () => {
  const theme = useTheme()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const t = useTranslations('Services')
  const tGlobal = useTranslations()

  const [mounted, setMounted] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? theme.palette.mode === 'dark' : false
  const cardBg = isDark ? '#190616' : '#FFFFFF'
  const cardBorder = isDark ? alpha(BRAND.primaryLight, 0.15) : alpha(BRAND.primary, 0.12)
  const textDark = isDark ? '#FFFFFF' : '#570D3F'
  const textMuted = isDark ? 'rgba(255,255,255,0.65)' : '#4B5563'

  return (
    <Box
      component="section"
      id="home-services"
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
        <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
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
            {t.has('badge') ? t('badge') : 'NOS SOLUTIONS'}
          </Typography>

          <Box
            sx={{
              width: 32,
              height: 3,
              borderRadius: 999,
              backgroundColor: BRAND.primary,
              mb: 3,
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 26, sm: 32, md: 42 },
              fontWeight: 800,
              lineHeight: isRtl ? 1.4 : 1.2,
              color: textDark,
              mb: 2,
              maxWidth: 900,
            }}
          >
            {t.has('title') ? t('title') : ''}{' '}
            <Box component="span" sx={{ color: BRAND.primary }}>
              {isRtl ? 'المصممة لنمو أعمالك' : 'sur-mesure'}
            </Box>
          </Typography>

          <Typography
            sx={{
              color: textMuted,
              fontSize: { xs: 15, md: 17 },
              maxWidth: 680,
              lineHeight: isRtl ? 1.8 : 1.6,
            }}
          >
            {t.has('subtitle') ? t('subtitle') : ''}
          </Typography>
        </Stack>

        <Box
          sx={{
            p: 2,
            mb: { xs: 5, md: 7 },
            borderRadius: '2rem',
            bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark ? 'none' : '0 4px 18px rgba(87,13,63,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: '0.85rem', color: BRAND.primary }}>
            {t.has('intentBadge') ? t('intentBadge') : ''}
          </Typography>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
            <Button
              component={RouterLink}
              href={`/${locale}/services/acquisition-digitale`}
              startIcon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : `${BRAND.primarySoft}50`,
                color: textDark,
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'none',
                px: 2,
                py: 0.6,
                borderRadius: '1.5rem',
                border: `1px solid ${alpha(BRAND.primary, 0.15)}`,
                transition: 'all 0.2s ease',
                '&:hover': { bgcolor: BRAND.primary, color: '#FFFFFF' },
              }}
            >
              {t.has('intents.acquire') ? t('intents.acquire') : ''}
            </Button>

            <Button
              component={RouterLink}
              href={`/${locale}/services/branding`}
              startIcon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : `${BRAND.primarySoft}50`,
                color: textDark,
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'none',
                px: 2,
                py: 0.6,
                borderRadius: '1.5rem',
                border: `1px solid ${alpha(BRAND.primary, 0.15)}`,
                transition: 'all 0.2s ease',
                '&:hover': { bgcolor: BRAND.primary, color: '#FFFFFF' },
              }}
            >
              {t.has('intents.brand') ? t('intents.brand') : ''}
            </Button>

            <Button
              component={RouterLink}
              href={`/${locale}/services/web-mobile`}
              startIcon={<DevicesIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : `${BRAND.primarySoft}50`,
                color: textDark,
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'none',
                px: 2,
                py: 0.6,
                borderRadius: '1.5rem',
                border: `1px solid ${alpha(BRAND.primary, 0.15)}`,
                transition: 'all 0.2s ease',
                '&:hover': { bgcolor: BRAND.primary, color: '#FFFFFF' },
              }}
            >
              {t.has('intents.digitalize') ? t('intents.digitalize') : ''}
            </Button>
          </Stack>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => {
            const isHovered = hoveredId === service.id

            const keywordsText =
              service.keywordsKey && tGlobal.has(service.keywordsKey)
                ? tGlobal(service.keywordsKey)
                : ''

            const titleText =
              service.titleKey && tGlobal.has(service.titleKey)
                ? tGlobal(service.titleKey)
                : ''

            const descText =
              service.descriptionKey && tGlobal.has(service.descriptionKey)
                ? tGlobal(service.descriptionKey)
                : ''

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                <Box
                  component={RouterLink}
                  href={`/${locale}/services/${service.slug}`}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    height: '100%',
                  }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3, sm: 3.5 },
                        height: '100%',
                        borderRadius: 4,
                        bgcolor: isHovered
                          ? isDark
                            ? alpha(BRAND.primary, 0.15)
                            : '#FFF7FB'
                          : cardBg,
                        border: '1px solid',
                        borderColor: isHovered ? BRAND.primary : cardBorder,
                        boxShadow: isHovered
                          ? isDark
                            ? '0 16px 36px rgba(0,0,0,0.5)'
                            : '0 16px 36px rgba(181, 55, 122, 0.14)'
                          : isDark
                          ? 'none'
                          : '0 4px 18px rgba(87,13,63,0.05)',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: isRtl ? 'right' : 'left',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{ mb: 2 }}
                        >
                          <Typography
                            sx={{
                              fontSize: '1.25rem',
                              fontWeight: 900,
                              color: isHovered
                                ? BRAND.primary
                                : isDark
                                ? alpha(BRAND.primaryLight, 0.4)
                                : alpha(BRAND.primaryDark, 0.3),
                              transition: 'color 0.25s ease',
                            }}
                          >
                            {service.number}
                          </Typography>

                          {keywordsText && (
                            <Box
                              sx={{
                                px: 1.2,
                                py: 0.3,
                                borderRadius: '2rem',
                                bgcolor: `${BRAND.primaryLight}30`,
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  color: BRAND.primary,
                                  letterSpacing: 0.5,
                                  textTransform: 'uppercase',
                                }}
                              >
                                {keywordsText}
                              </Typography>
                            </Box>
                          )}
                        </Stack>

                        <Typography
                          component="h3"
                          sx={{
                            fontSize: { xs: '1.15rem', sm: '1.25rem' },
                            fontWeight: 800,
                            color: textDark,
                            lineHeight: 1.3,
                            mb: 1.5,
                          }}
                        >
                          {titleText}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '0.875rem',
                            color: textMuted,
                            lineHeight: 1.6,
                            mb: 2.5,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {descText}
                        </Typography>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <Stack spacing={0.8} sx={{ mb: 2, pt: 1.5, borderTop: `1px dashed ${alpha(BRAND.primary, 0.2)}` }}>
                                {service.subServicesKeys.slice(0, 3).map((subKey, subIdx) => {
                                  const subText = tGlobal.has(subKey) ? tGlobal(subKey) : ''
                                  if (!subText) return null

                                  return (
                                    <Stack key={subIdx} direction="row" spacing={1} alignItems="center">
                                      <CheckCircleIcon sx={{ fontSize: 14, color: BRAND.primary, flexShrink: 0 }} />
                                      <Typography
                                        sx={{
                                          fontSize: '0.78rem',
                                          fontWeight: 600,
                                          color: textDark,
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                        }}
                                      >
                                        {subText}
                                      </Typography>
                                    </Stack>
                                  )
                                })}
                              </Stack>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>

                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          pt: 2,
                          borderTop: isHovered ? `1px solid ${alpha(BRAND.primary, 0.15)}` : 'none',
                          color: BRAND.primary,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                        }}
                      >
                        <span>{t.has('explore') ? t('explore') : 'Découvrir'}</span>
                        <motion.div
                          animate={{ x: isHovered ? (isRtl ? -6 : 6) : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowForwardIcon
                            sx={{
                              fontSize: 16,
                              transform: isRtl ? 'rotate(180deg)' : 'none',
                            }}
                          />
                        </motion.div>
                      </Stack>
                    </Box>
                  </motion.div>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeServices