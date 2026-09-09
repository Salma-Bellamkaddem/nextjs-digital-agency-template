'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useTranslations } from 'next-intl'
import { useTheme, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { ICaseStudyDetail } from '@/constants/case-study-detail'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryPurple: '#9333EA',
  heroBg: 'linear-gradient(180deg, #10020E 0%, #1A0417 60%, #0C010B 100%)',
  btnGradient: 'linear-gradient(135deg, #B5377A 0%, #E11D48 100%)',
}

interface Props {
  study: ICaseStudyDetail
  locale: 'fr' | 'en' | 'ar'
}

export default function CaseStudyDetailView({ study, locale }: Props) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const isRtl = locale === 'ar'
  const t = useTranslations('CaseDetail')
  const tGlobal = useTranslations()

  return (
    <Box
      component="article"
      sx={{
        minHeight: '100vh',
        direction: isRtl ? 'rtl' : 'ltr',
        bgcolor: isDark ? '#0A0108' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#0F172A',
        pb: 12,
      }}
    >
      {/* ── 1. HERO SECTION NOIRE / VIOLETTE ── */}
      <Box
        sx={{
          background: BRAND.heroBg,
          color: '#FFFFFF',
          pt: { xs: 14, sm: 18, md: 22 },
          pb: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: '#FAC8EB',
              fontWeight: 800,
              fontSize: { xs: 11, sm: 12 },
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            {tGlobal(study.heroTagKey)}
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 900,
              mx: 'auto',
              mb: 2.5,
            }}
          >
            {tGlobal(study.heroTitleKey)}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: 720,
              mx: 'auto',
              lineHeight: 1.65,
              mb: 4,
            }}
          >
            {tGlobal(study.heroSubtitleKey)}
          </Typography>

          {/* Boutons CTA */}
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
            <Button
              component={RouterLink}
              href={`/${locale}#recrutement`}
              sx={{
                background: BRAND.btnGradient,
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.875rem',
                textTransform: 'none',
                px: 3.5,
                py: 1.2,
                borderRadius: '2rem',
                boxShadow: '0 8px 24px rgba(181, 55, 122, 0.4)',
              }}
            >
              {t('viewResults')}
            </Button>
            <Button
              component={RouterLink}
              href={`/${locale}#contact`}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'none',
                px: 3,
                py: 1.2,
                borderRadius: '2rem',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.18)' },
              }}
            >
              {t('freeConsultation')}
            </Button>
          </Stack>

          {/* 3 Métriques Majeures */}
          <Grid container spacing={2} sx={{ maxWidth: 850, mx: 'auto', mb: 6 }}>
            {study.heroMetrics.map((met, idx) => (
              <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2.2rem' }, fontWeight: 900, color: '#FFFFFF' }}>
                    {met.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', mt: 0.5 }}>
                    {tGlobal(met.labelKey)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── 2. SUMMARY (TL;DR) ── */}
      <Container maxWidth="md" sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography sx={{ color: BRAND.primaryPurple, fontWeight: 800, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', mb: 1 }}>
            {t('summaryBadge')}
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', sm: '2.2rem' }, fontWeight: 900, mb: 2 }}>
            {t('summaryTitle')}
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.75)' : '#4B5563' }}>
            {tGlobal(study.summaryTlDrKey)}
          </Typography>
        </Box>
      </Container>

      {/* ── 3. RENDU DES SECTIONS CONDITIONNELLES ── */}
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 8, md: 12 }}>
          {study.sections.map((section, sIdx) => {
            // ── CAS A : SECTION VIDÉO & TÉMOIGNAGE ──
            if (section.type === 'video' && section.videoUrl) {
              return (
                <Grid container spacing={4} alignItems="center" key={sIdx}>
                  {section.testimonial && (
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Card
                        sx={{
                          p: 3.5,
                          borderRadius: 4,
                          bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#F8FAFC',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                        }}
                      >
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                          <Avatar src={section.testimonial.avatar} sx={{ width: 54, height: 54 }} />
                          <Box>
                            <Typography sx={{ fontWeight: 800, fontSize: '1rem' }}>{section.testimonial.author}</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: BRAND.primary, fontWeight: 700 }}>
                              {tGlobal(section.testimonial.roleKey)}
                            </Typography>
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing={0.5} sx={{ mb: 2, color: '#F59E0B' }}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} sx={{ fontSize: 18 }} />
                          ))}
                        </Stack>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.65, color: isDark ? 'rgba(255,255,255,0.8)' : '#475569' }}>
                          &ldquo;{tGlobal(section.testimonial.quoteKey)}&rdquo;
                        </Typography>
                      </Card>
                    </Grid>
                  )}

                  <Grid size={{ xs: 12, md: section.testimonial ? 7 : 12 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 240, sm: 340, md: 400 },
                        borderRadius: 4,
                        overflow: 'hidden',
                        bgcolor: '#000000',
                      }}
                    >
                      <iframe
                        src={section.videoUrl}
                        title="Case Study Video"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                  </Grid>
                </Grid>
              )
            }

            // ── CAS B : 3 CARTES (Problèmes, Résultats, Services) ──
            if (section.type === 'three_cards' && section.cards) {
              return (
                <Box key={sIdx} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                  <Typography sx={{ color: BRAND.primaryPurple, fontWeight: 800, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', mb: 1, textAlign: 'center' }}>
                    {t('analysisBadge')}
                  </Typography>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', sm: '2.2rem' }, fontWeight: 900, mb: 5, textAlign: 'center' }}>
                    {tGlobal(section.titleKey)}
                  </Typography>

                  <Grid container spacing={3}>
                    {section.cards.map((col, cIdx) => (
                      <Grid size={{ xs: 12, md: 4 }} key={cIdx}>
                        <Card
                          sx={{
                            p: 3.5,
                            height: '100%',
                            borderRadius: 4,
                            bgcolor: isDark ? 'rgba(255, 255, 255, 0.025)' : '#F8FAFC',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#EDF2F7',
                          }}
                        >
                          <Typography sx={{ fontSize: '1.15rem', fontWeight: 900, mb: 2.5, color: BRAND.primary }}>
                            {tGlobal(col.titleKey)}
                          </Typography>
                          {col.itemsKeys.map((item, itIdx) => (
                            <Box key={itIdx} sx={{ mb: 2 }}>
                              <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', mb: 1, color: isDark ? '#FFFFFF' : '#1E293B' }}>
                                ▸ {tGlobal(item.headingKey)}
                              </Typography>
                              {item.bulletKeys.map((bKey, bIdx) => (
                                <Typography key={bIdx} sx={{ fontSize: '0.825rem', color: isDark ? 'rgba(255,255,255,0.65)' : '#64748B', lineHeight: 1.5, mb: 0.5, pl: isRtl ? 0 : 2, pr: isRtl ? 2 : 0 }}>
                                  • {tGlobal(bKey)}
                                </Typography>
                              ))}
                            </Box>
                          ))}
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )
            }

            // ── CAS C : TABLEAU DE RÉSULTATS PAR PÉRIODE ──
            if (section.type === 'table_results' && section.tableRows) {
              return (
                <Box key={sIdx} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                  {section.partBadge && (
                    <Typography sx={{ color: BRAND.primaryPurple, fontWeight: 800, fontSize: 11, letterSpacing: 1.5, mb: 1 }}>
                      {section.partBadge}
                    </Typography>
                  )}
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 900, mb: 1.5 }}>
                    {tGlobal(section.titleKey)}
                  </Typography>
                  {section.descriptionKey && (
                    <Typography sx={{ color: '#64748B', fontSize: '0.95rem', mb: 3 }}>
                      {tGlobal(section.descriptionKey)}
                    </Typography>
                  )}

                  <TableContainer
                    component={Paper}
                    sx={{
                      borderRadius: 3.5,
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0',
                      bgcolor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
                      boxShadow: 'none',
                    }}
                  >
                    <Table>
                      <TableHead sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 800, color: BRAND.primary }}>{t('tableHeaders.metric')}</TableCell>
                          <TableCell sx={{ fontWeight: 800, color: BRAND.primary }}>{t('tableHeaders.result')}</TableCell>
                          <TableCell sx={{ fontWeight: 800, color: BRAND.primary }}>{t('tableHeaders.period')}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {section.tableRows.map((row, rIdx) => (
                          <TableRow key={rIdx}>
                            <TableCell sx={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#0F172A' }}>
                              {tGlobal(row.metricKey)}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 900, color: BRAND.primary }}>{row.resultKey}</TableCell>
                            <TableCell sx={{ color: '#64748B', fontSize: '0.85rem' }}>{row.periodKey}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )
            }

            // ── CAS D : SPLIT SECTION (Texte + Image latérale) ──
            if (section.type === 'split') {
              const isLeft = section.imagePosition === 'left'

              return (
                <Grid
                  container
                  spacing={{ xs: 4, md: 6 }}
                  alignItems="center"
                  key={sIdx}
                  direction={{
                    xs: 'column',
                    md: isLeft ? isRtl ? 'row-reverse' : 'row' : isRtl ? 'row' : 'row-reverse',
                  }}
                >
                  {section.image && (
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: { xs: 260, sm: 340, md: 400 },
                          borderRadius: 4,
                          overflow: 'hidden',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0',
                        }}
                      >
                        <Image src={section.image} alt={tGlobal(section.titleKey)} fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: 'cover' }} />
                      </Box>
                    </Grid>
                  )}

                  <Grid size={{ xs: 12, md: section.image ? 6 : 12 }}>
                    <Stack spacing={2} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                      {section.partBadge && (
                        <Typography sx={{ color: BRAND.primaryPurple, fontWeight: 800, fontSize: 11, letterSpacing: 1.5 }}>
                          {section.partBadge}
                        </Typography>
                      )}

                      <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.2rem' }, fontWeight: 900, lineHeight: 1.25 }}>
                        {tGlobal(section.titleKey)}
                      </Typography>

                      {section.subtitleKey && (
                        <Typography sx={{ fontWeight: 800, color: BRAND.primary, fontSize: '0.95rem' }}>
                          {tGlobal(section.subtitleKey)}
                        </Typography>
                      )}

                      {section.descriptionKey && (
                        <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#475569', fontSize: '0.925rem', lineHeight: 1.7 }}>
                          {tGlobal(section.descriptionKey)}
                        </Typography>
                      )}

                      {section.bulletKeys && (
                        <Stack spacing={1.2} sx={{ pt: 1 }}>
                          {section.bulletKeys.map((bKey, bIdx) => (
                            <Stack key={bIdx} direction="row" spacing={1.2} alignItems="flex-start">
                              <CheckCircleIcon sx={{ color: BRAND.primaryPurple, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                              <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.9)' : '#1E293B' }}>
                                {tGlobal(bKey)}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              )
            }

            return null
          })}
        </Stack>

        {/* ── 4. FAQ SPÉCIFIQUE À L'ÉTUDE ── */}
        {study.faq && study.faq.length > 0 && (
          <Box sx={{ mt: { xs: 10, md: 16 }, maxWidth: 840, mx: 'auto' }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 900, mb: 4, textAlign: 'center' }}>
              {t('faqTitle')}
            </Typography>

            <Stack spacing={2}>
              {study.faq.map((fItem, fIdx) => (
                <Accordion
                  key={fIdx}
                  defaultExpanded={fIdx === 0}
                  sx={{
                    borderRadius: '12px !important',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0',
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#FFFFFF',
                    boxShadow: 'none',
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: BRAND.primary }} />}>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.95rem' }}>{tGlobal(fItem.questionKey)}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#64748B', lineHeight: 1.7, fontSize: '0.9rem' }}>
                      {tGlobal(fItem.answerKey)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Box>
        )}

        {/* ── 5. BANNIÈRE CTA BAS DE PAGE ── */}
        <Box
          sx={{
            mt: { xs: 10, md: 16 },
            p: { xs: 4, sm: 6 },
            borderRadius: 5,
            background: 'linear-gradient(135deg, #570D3F 0%, #10020E 100%)',
            color: '#FFFFFF',
            textAlign: 'center',
            border: '1px solid rgba(250, 200, 235, 0.15)',
          }}
        >
          <Typography sx={{ fontSize: { xs: '1.6rem', sm: '2.2rem' }, fontWeight: 900, mb: 1.5 }}>
            {t('cta.title')}
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', maxWidth: 640, mx: 'auto', mb: 3.5, lineHeight: 1.65 }}>
            {t('cta.subtitle')}
          </Typography>
          <Button
            component={RouterLink}
            href={`/${locale}#recrutement`}
            endIcon={<ArrowForwardIcon sx={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />}
            sx={{
              background: BRAND.btnGradient,
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.95rem',
              px: 4,
              py: 1.3,
              borderRadius: '2rem',
              boxShadow: '0 8px 24px rgba(181, 55, 122, 0.4)',
              '&:hover': { filter: 'brightness(1.1)' },
            }}
          >
            {t('cta.button')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}