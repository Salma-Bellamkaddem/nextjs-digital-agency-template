'use client'

import React, { useMemo, useState } from 'react'
import RouterLink from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BoltIcon from '@mui/icons-material/Bolt'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

import { IServiceDetailConfig } from '@/constants/service'
import { blogPosts } from '@/constants/blog'
import ContactModal from '@/app/_components/ContactModal'

const BRAND = {
  // Teintes primaires
  primary: '#B5377A',
  primaryAlt: '#B73B7B',
  
  // Teintes sombres
  deepDark: '#570D3F',
  deepMid: '#561244',
  deepBurgundy: '#590842',
  
  // Teintes claires & pastels
  light: '#FAC8EB',
  soft: '#FEDDF6',
  pastelRose: '#F8CEEC',
  pastelSoft: '#FAD6EF',

  // Gradients officiels Nexsetia
  heroBg: 'linear-gradient(180deg, #570D3F 0%, #561244 50%, #2A0420 100%)',
  btnGradient: 'linear-gradient(135deg, #B5377A 0%, #570D3F 100%)',
  contactCardBg: 'linear-gradient(135deg, #570D3F 0%, #B5377A 100%)',
}

interface ServiceDetailClientViewProps {
  service: IServiceDetailConfig
  locale: 'fr' | 'en' | 'ar'
}

export default function ServiceDetailClientView({ service, locale }: ServiceDetailClientViewProps) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const isRtl = locale === 'ar'
  const t = useTranslations('ServicesDetail.common')
  const tGlobal = useTranslations()

  const [contactOpen, setContactOpen] = useState(false)

  const relatedBlogs = useMemo(() => {
    const matched = blogPosts.filter((post) =>
      post.tagsKeys.some((k) => k.toLowerCase().includes(service.blogCategoryTag.toLowerCase()))
    )
    return matched.length > 0 ? matched.slice(0, 3) : blogPosts.slice(0, 3)
  }, [service.blogCategoryTag])

  return (
    <Box
      component="article"
      sx={{
        minHeight: '100vh',
        direction: isRtl ? 'rtl' : 'ltr',
        bgcolor: isDark ? '#1F0317' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#0F172A',
        pb: 12,
      }}
    >
      {/* ── 1. HERO IMMERSIF AVEC LES COULEURS DE LA CHARTE ── */}
      <Box
        sx={{
          background: BRAND.heroBg,
          color: '#FFFFFF',
          pt: { xs: 14, sm: 18, md: 22 },
          pb: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: isRtl ? 'auto' : '-5%',
            left: isRtl ? '-5%' : 'auto',
            width: { xs: 260, md: 450 },
            height: { xs: 260, md: 450 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.light}25 0%, transparent 70%)`,
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center">
            {/* Colonne Gauche */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack spacing={3} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.6,
                    borderRadius: '2rem',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    border: `1px solid ${BRAND.soft}40`,
                    width: 'fit-content',
                  }}
                >
                  <BoltIcon sx={{ fontSize: 16, color: BRAND.light }} />
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: BRAND.light,
                      textTransform: 'uppercase',
                      letterSpacing: 1.2,
                    }}
                  >
                    {tGlobal.has(service.heroTagKey) ? tGlobal(service.heroTagKey) : service.heroTagKey}
                  </Typography>
                </Box>

                <Typography
                  component="h1"
                  sx={{
                    fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: '2.2rem', sm: '3rem', md: '3.6rem' },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {tGlobal.has(service.heroTitleKey) ? tGlobal(service.heroTitleKey) : service.heroTitleKey}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.7,
                  }}
                >
                  {tGlobal.has(service.heroSubtitleKey) ? tGlobal(service.heroSubtitleKey) : service.heroSubtitleKey}
                </Typography>

                {/* Mots-clés SEO */}
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 1 }}>
                  {service.seoKeywords.map((kw, kwIdx) => (
                    <Chip
                      key={kwIdx}
                      label={`# ${kw}`}
                      size="small"
                      sx={{
                        bgcolor: `${BRAND.light}18`,
                        color: BRAND.light,
                        fontWeight: 700,
                        fontSize: 11,
                        border: `1px solid ${BRAND.light}35`,
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                  <Button
                    onClick={() => setContactOpen(true)}
                    sx={{
                      background: BRAND.btnGradient,
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      px: 4,
                      py: 1.4,
                      borderRadius: '2rem',
                      boxShadow: `0 8px 24px ${BRAND.primary}45`,
                      border: `1px solid ${BRAND.primaryAlt}`,
                      '&:hover': {
                        filter: 'brightness(1.15)',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {t.has('getStarted') ? t('getStarted') : 'Démarrer mon projet'}
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            {/* Colonne Droite : Live Dashboard */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 5,
                  bgcolor: 'rgba(42, 4, 32, 0.85)',
                  border: `1px solid ${BRAND.light}30`,
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                  <Typography sx={{ fontSize: 11, fontWeight: 800, color: BRAND.light, letterSpacing: 1 }}>
                    {t.has('livePerformance') ? t('livePerformance') : 'PERFORMANCE LIVE'}
                  </Typography>
                  <Chip
                    size="small"
                    label={t.has('activeCampaign') ? t('activeCampaign') : 'Campagne Active'}
                    sx={{
                      bgcolor: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      fontWeight: 800,
                      fontSize: 10,
                    }}
                  />
                </Stack>

                <Typography sx={{ fontSize: { xs: '2.4rem', sm: '3rem' }, fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
                  {service.heroStats.impressions}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', mb: 3 }}>
                  {t.has('impressions') ? t('impressions') : 'Impressions'}
                </Typography>

                <Box sx={{ height: 90, width: '100%', mb: 3, display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                  {[35, 55, 40, 70, 60, 95, 85, 100].map((h, i) => (
                    <Box
                      key={i}
                      sx={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: '4px 4px 0 0',
                        background:
                          i === 7
                            ? `linear-gradient(to top, ${BRAND.primary}, ${BRAND.light})`
                            : `${BRAND.primary}45`,
                      }}
                    />
                  ))}
                </Box>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 4 }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF' }}>{service.heroStats.clicks}</Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)' }}>{t.has('clicks') ? t('clicks') : 'Visiteurs'}</Typography>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF' }}>{service.heroStats.cpc}</Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)' }}>{t.has('avgCpc') ? t('avgCpc') : 'CPC Moyen'}</Typography>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 900, color: '#10B981' }}>{service.heroStats.growth}</Typography>
                    <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)' }}>{t.has('growth') ? t('growth') : 'Croissance'}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── 2. SECTION EXPLICATION DÉTAILLÉE (Problème / Solution) ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3.5,
                borderRadius: 4,
                bgcolor: isDark ? 'rgba(239, 68, 68, 0.08)' : '#FEF2F2',
                border: '1px solid',
                borderColor: isDark ? 'rgba(239, 68, 68, 0.25)' : '#FECACA',
                height: '100%',
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                <WarningAmberIcon sx={{ color: '#EF4444' }} />
                <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', color: '#991B1B' }}>
                  {tGlobal.has(service.overview.problemTitleKey) ? tGlobal(service.overview.problemTitleKey) : 'Le Problème'}
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#FCA5A5' : '#7F1D1D', lineHeight: 1.7 }}>
                {tGlobal.has(service.overview.problemDescKey) ? tGlobal(service.overview.problemDescKey) : ''}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3.5,
                borderRadius: 4,
                bgcolor: isDark ? `${BRAND.deepDark}20` : '#FDF2F9',
                border: '1px solid',
                borderColor: isDark ? `${BRAND.primary}40` : BRAND.soft,
                height: '100%',
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                <CheckCircleIcon sx={{ color: BRAND.primary }} />
                <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', color: BRAND.deepDark }}>
                  {tGlobal.has(service.overview.solutionTitleKey) ? tGlobal(service.overview.solutionTitleKey) : 'La Solution'}
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: '0.9rem', color: isDark ? BRAND.light : BRAND.deepBurgundy, lineHeight: 1.7 }}>
                {tGlobal.has(service.overview.solutionDescKey) ? tGlobal(service.overview.solutionDescKey) : ''}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── 3. PROCESSUS EN 4 ÉTAPES ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: isRtl ? 'right' : 'left', mb: 5 }}>
          <Typography
            sx={{
              color: BRAND.primary,
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            MÉTHODOLOGIE
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: '1.6rem', sm: '2.2rem' },
              fontWeight: 900,
              color: isDark ? '#FFFFFF' : BRAND.deepDark,
            }}
          >
            {t.has('processTitle') ? t('processTitle') : "Notre processus d'exécution étape par étape"}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {service.processSteps.map((step, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  bgcolor: isDark ? `${BRAND.deepDark}20` : '#FDF8FB',
                  border: '1px solid',
                  borderColor: isDark ? `${BRAND.deepMid}40` : BRAND.soft,
                  height: '100%',
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 900, color: BRAND.primary, mb: 1 }}>
                  {step.stepNumber}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    mb: 1,
                    color: isDark ? '#FFFFFF' : BRAND.deepDark,
                  }}
                >
                  {tGlobal.has(step.titleKey) ? tGlobal(step.titleKey) : step.titleKey}
                </Typography>
                <Typography sx={{ fontSize: '0.825rem', color: isDark ? '#A0AEC0' : '#4B5563', lineHeight: 1.6 }}>
                  {tGlobal.has(step.descKey) ? tGlobal(step.descKey) : step.descKey}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── 4. CHANNELS & SOLUTIONS ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 14 } }}>
        <Box sx={{ textAlign: isRtl ? 'right' : 'left', mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              color: BRAND.primary,
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            {t.has('primaryChannels') ? t('primaryChannels') : "PÔLES D'ACTIVATION"}
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: '1.85rem', sm: '2.6rem' },
              fontWeight: 900,
              color: isDark ? '#FFFFFF' : BRAND.deepDark,
              mb: 1.5,
            }}
          >
            {t.has('channelsTitle') ? t('channelsTitle') : "Nos leviers de performance & d'exécution"}
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: isDark ? '#A0AEC0' : '#64748B', maxWidth: 640 }}>
            {t.has('channelsSubtitle') ? t('channelsSubtitle') : ''}
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {service.mainChannels.map((channel, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  bgcolor: isDark ? `${BRAND.deepDark}20` : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? `${BRAND.deepMid}40` : BRAND.soft,
                  boxShadow: `0 10px 30px ${BRAND.primary}10`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: isDark ? '#FFFFFF' : BRAND.deepDark,
                      mb: 1.5,
                    }}
                  >
                    {tGlobal.has(channel.titleKey) ? tGlobal(channel.titleKey) : channel.titleKey}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: isDark ? '#A0AEC0' : '#4B5563', lineHeight: 1.65, mb: 3 }}>
                    {tGlobal.has(channel.descKey) ? tGlobal(channel.descKey) : channel.descKey}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                    {channel.tags.map((tag, tIdx) => (
                      <Chip
                        key={tIdx}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          bgcolor: isDark ? `${BRAND.light}15` : `${BRAND.soft}40`,
                          color: isDark ? BRAND.light : BRAND.deepDark,
                          border: `1px solid ${BRAND.soft}`,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Button
                  onClick={() => setContactOpen(true)}
                  sx={{
                    alignSelf: 'flex-start',
                    background: BRAND.btnGradient,
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    borderRadius: '2rem',
                    boxShadow: `0 4px 14px ${BRAND.primary}40`,
                    '&:hover': {
                      filter: 'brightness(1.15)',
                    },
                  }}
                >
                  {tGlobal.has(channel.ctaKey) ? tGlobal(channel.ctaKey) : 'Explorer la solution →'}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.5}>
          {service.subChannels.map((sub, sIdx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={sIdx}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3.5,
                  bgcolor: isDark ? `${BRAND.deepDark}15` : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? `${BRAND.deepMid}30` : BRAND.soft,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '1.05rem', fontWeight: 900, color: isDark ? '#FFFFFF' : BRAND.deepDark, mb: 1 }}>
                    {tGlobal.has(sub.titleKey) ? tGlobal(sub.titleKey) : sub.titleKey}
                  </Typography>
                  <Typography sx={{ fontSize: '0.825rem', color: isDark ? '#A0AEC0' : '#4B5563', lineHeight: 1.6, mb: 2 }}>
                    {tGlobal.has(sub.descKey) ? tGlobal(sub.descKey) : sub.descKey}
                  </Typography>
                </Box>

                <Typography
                  component="button"
                  onClick={() => setContactOpen(true)}
                  sx={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    cursor: 'pointer',
                    textAlign: isRtl ? 'right' : 'left',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: BRAND.primary,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {tGlobal.has(sub.ctaKey) ? tGlobal(sub.ctaKey) : 'Demander un devis →'}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── 5. SECTION FAQ SPÉCIFIQUE (Rich Snippets SEO) ── */}
      {service.faq && service.faq.length > 0 && (
        <Container maxWidth="md" sx={{ mt: { xs: 10, md: 16 } }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              sx={{
                color: BRAND.primary,
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              FAQ
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: '1.75rem', sm: '2.4rem' },
                fontWeight: 900,
                color: isDark ? '#FFFFFF' : BRAND.deepDark,
              }}
            >
              {t.has('faqTitle') ? t('faqTitle') : 'Questions fréquentes sur ce service'}
            </Typography>
          </Box>

          <Stack spacing={2}>
            {service.faq.slice(0, 5).map((item, fIdx) => (
              <Accordion
                key={fIdx}
                defaultExpanded={fIdx === 0}
                sx={{
                  borderRadius: '16px !important',
                  border: '1px solid',
                  borderColor: isDark ? `${BRAND.deepMid}40` : BRAND.soft,
                  bgcolor: isDark ? `${BRAND.deepDark}25` : '#FFFFFF',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: BRAND.primary }} />}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      color: isDark ? '#FFFFFF' : BRAND.deepDark,
                    }}
                  >
                    {tGlobal.has(item.questionKey) ? tGlobal(item.questionKey) : item.questionKey}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      color: isDark ? 'rgba(255, 255, 255, 0.75)' : '#4B5563',
                      lineHeight: 1.7,
                      fontSize: '0.9rem',
                    }}
                  >
                    {tGlobal.has(item.answerKey) ? tGlobal(item.answerKey) : item.answerKey}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      )}

      {/* ── 6. GET IN TOUCH / BLOG ASSOCIÉ ── */}
  {/* ── 6. GET IN TOUCH / BLOG ASSOCIÉ ── */}
  <Box sx={{ mt: { xs: 10, md: 16 }, py: { xs: 8, md: 10 }, bgcolor: '#1C0215', color: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, lg: 6 }}>
            {/* Carte Contact Flash */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: 5,
                  background: BRAND.contactCardBg,
                  border: `1px solid ${BRAND.primaryAlt}`,
                  boxShadow: `0 20px 50px rgba(87, 13, 63, 0.6)`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <Box>
                  <Chip
                    label={t('getInTouchBadge')}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      color: BRAND.light,
                      border: `1px solid ${BRAND.light}40`,
                      fontWeight: 800,
                      mb: 2,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
                      fontSize: { xs: '1.8rem', sm: '2.2rem' },
                      fontWeight: 900,
                      mb: 1.5,
                      lineHeight: 1.2,
                    }}
                  >
                    {t('readyToScale')}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', mb: 3 }}>
                    {t('contactSubtitle')}
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: BRAND.light }} />
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, direction: 'ltr' }}>
                      +212 6 55 76 00 65
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <EmailOutlinedIcon sx={{ fontSize: 20, color: BRAND.light }} />
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      nexsetia@gmail.com
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* Articles de Blog Filtrés par Tag */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 900 }}>
                  {t('relatedArticles')}
                </Typography>
                <Button
                  component={RouterLink}
                  href={`/${locale}/blog`}
                  sx={{ color: BRAND.light, fontWeight: 700, textTransform: 'none' }}
                >
                  {t('allArticles')}
                </Button>
              </Stack>

              <Grid container spacing={2.5}>
                {relatedBlogs.map((blog) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
                    <Card
                      component={RouterLink}
                      href={`/${locale}/blog/${blog.slug}`}
                      sx={{
                        borderRadius: 3.5,
                        textDecoration: 'none',
                        overflow: 'hidden',
                        bgcolor: 'rgba(255, 255, 255, 0.04)',
                        border: `1px solid ${BRAND.soft}25`,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: BRAND.primary,
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', width: '100%', height: 130 }}>
                        <Image
                          src={blog.heroImage}
                          alt={tGlobal.has(blog.titleKey) ? tGlobal(blog.titleKey) : blog.titleKey}
                          fill
                          sizes="(max-width: 600px) 100vw, 300px"
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                      <Box sx={{ p: 2, textAlign: isRtl ? 'right' : 'left' }}>
                        <Typography
                          sx={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: '#FFFFFF',
                            lineHeight: 1.35,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {tGlobal.has(blog.titleKey) ? tGlobal(blog.titleKey) : blog.titleKey}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── MODAL FORMULAIRE DE CONTACT ── */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}