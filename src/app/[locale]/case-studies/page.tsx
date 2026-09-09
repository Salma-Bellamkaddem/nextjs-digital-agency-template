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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { allCaseStudies } from '@/constants/case-studies'
import { blogPosts } from '@/constants/blog'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  titleGradient: 'linear-gradient(135deg, #9333EA 0%, #B5377A 50%, #EC4899 100%)',
  btnGradient: 'linear-gradient(135deg, #B5377A 0%, #E11D48 100%)',
}

const CaseStudiesListPage: FC = () => {
  const theme = useTheme()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const t = useTranslations('CaseStudies')
  const tGlobal = useTranslations()

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const isDark = mounted ? theme.palette.mode === 'dark' : false
  const latestBlogs = blogPosts.slice(0, 3)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        direction: isRtl ? 'rtl' : 'ltr',
        bgcolor: isDark ? '#0A0108' : '#FFFFFF',
        pt: { xs: 14, sm: 18, md: 22 },
        pb: 12,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* ── EN-TÊTE ── */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              background: BRAND.titleGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2.5,
            }}
          >
            {t('pageTitle')}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
              color: isDark ? 'rgba(255, 255, 255, 0.75)' : '#64748B',
              lineHeight: 1.7,
              maxWidth: 720,
              mx: 'auto',
            }}
          >
            {t('pageSubtitle')}
          </Typography>
        </Box>

        {/* ── BARRE RESSOURCES ── */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: 4,
            bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F8FAFC',
            border: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
            mb: { xs: 8, md: 12 },
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 2.5 }}>
              <Typography sx={{ fontWeight: 800, fontSize: '0.95rem', color: isDark ? '#FFFFFF' : '#0F172A', textAlign: isRtl ? 'right' : 'left' }}>
                {t('relatedResources')}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 9.5 }}>
              <Grid container spacing={1.5}>
                {['res1', 'res2', 'res3', 'res4'].map((resKey, idx) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                    <Box
                      component={RouterLink}
                      href={`/${locale}/services/marketing-digital`}
                      sx={{
                        display: 'block',
                        p: 1.8,
                        borderRadius: 3,
                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#E2E8F0',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: BRAND.primary,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 14px rgba(181, 55, 122, 0.1)',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, color: BRAND.primary, letterSpacing: 0.8, textTransform: 'uppercase', mb: 0.5 }}>
                        {t(`resources.${resKey}.tag`)}
                      </Typography>
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.9)' : '#1E293B', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {t(`resources.${resKey}.title`)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* ── TOUTES LES ÉTUDES DE CAS ── */}
        <Stack spacing={{ xs: 8, md: 12 }}>
          {allCaseStudies.map((caseItem, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <Grid
                  container
                  spacing={{ xs: 4, md: 6, lg: 8 }}
                  alignItems="center"
                  direction={{
                    xs: 'column',
                    md: isLeft
                      ? isRtl ? 'row-reverse' : 'row'
                      : isRtl ? 'row' : 'row-reverse',
                  }}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 260, sm: 380, md: 440 },
                        borderRadius: 6,
                        overflow: 'hidden',
                        boxShadow: isDark ? '0 20px 50px rgba(0,0,0,0.6)' : '0 16px 40px rgba(181, 55, 122, 0.08)',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0,0,0,0.04)',
                      }}
                    >
                      <Image
                        src={caseItem.image}
                        alt={tGlobal(caseItem.titleKey)}
                        fill
                        sizes="(max-width: 900px) 100vw, 600px"
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={2.5} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                      <Typography
                        component="h2"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' },
                          fontWeight: 900,
                          color: isDark ? '#FFFFFF' : '#0F172A',
                          lineHeight: 1.2,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {tGlobal(caseItem.titleKey)}
                      </Typography>

                      <Typography sx={{ fontSize: { xs: '0.925rem', sm: '1rem' }, color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#475569', lineHeight: 1.65 }}>
                        {tGlobal(caseItem.descriptionKey)}
                      </Typography>

                      {/* Checklist à puces violettes */}
                      <Stack spacing={1.5} sx={{ py: 1 }}>
                        {caseItem.bulletKeys.map((bKey, bIdx) => (
                          <Stack key={bIdx} direction="row" spacing={1.5} alignItems="flex-start">
                            <CheckCircleIcon sx={{ color: '#9333EA', fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.925rem', fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.9)' : '#1E293B', lineHeight: 1.5 }}>
                              {tGlobal(bKey)}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Box sx={{ pt: 1 }}>
                        <Button
                          component={RouterLink}
                          href={`/${locale}#recrutement`}
                          sx={{
                            background: BRAND.btnGradient,
                            color: '#FFFFFF',
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            textTransform: 'none',
                            px: 3.5,
                            py: 1.3,
                            borderRadius: 2.5,
                            boxShadow: '0 8px 20px rgba(181, 55, 122, 0.35)',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 12px 28px rgba(181, 55, 122, 0.5)',
                            },
                          }}
                        >
                          {t('readFull')}
                        </Button>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </motion.div>
            )
          })}
        </Stack>

        {/* ── ARTICLES DU BLOG EN BAS DE PAGE ── */}
        <Box
          sx={{
            mt: { xs: 12, sm: 16, md: 20 },
            pt: { xs: 8, md: 10 },
            borderTop: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0,0,0,0.08)',
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: { xs: 4, md: 6 }, textAlign: isRtl ? 'right' : 'left' }}
          >
            <Typography component="h2" sx={{ fontSize: { xs: '1.6rem', sm: '2.2rem' }, fontWeight: 900, color: isDark ? '#FFFFFF' : '#0F172A' }}>
              {t('latestBlogTitle')}
            </Typography>

            <Button
              component={RouterLink}
              href={`/${locale}/blog`}
              endIcon={<ArrowForwardIcon sx={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />}
              sx={{ color: BRAND.primary, fontWeight: 800, fontSize: '0.95rem', textTransform: 'none', '&:hover': { bgcolor: 'transparent', color: BRAND.primaryDark } }}
            >
              {t('viewAllBlog')}
            </Button>
          </Stack>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {latestBlogs.map((blog) => {
              const blogTitle = tGlobal.has(blog.titleKey) ? tGlobal(blog.titleKey) : blog.titleKey

              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
                  <Card
                    component={RouterLink}
                    href={`/${locale}/blog/${blog.slug}`}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      borderRadius: 4,
                      textDecoration: 'none',
                      bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(181, 55, 122, 0.12)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': { transform: 'translateY(-6px)', borderColor: BRAND.primary },
                    }}
                  >
                    <Box sx={{ position: 'relative', width: '100%', height: 210 }}>
                      <Image src={blog.heroImage} alt={blogTitle} fill sizes="(max-width: 600px) 100vw, 400px" style={{ objectFit: 'cover' }} />
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1, textAlign: isRtl ? 'right' : 'left' }}>
                      <Typography sx={{ fontSize: 11, fontWeight: 800, color: BRAND.primary, textTransform: 'uppercase', mb: 1 }}>
                        {blog.readingTime}
                      </Typography>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.4, color: isDark ? '#FFFFFF' : '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {blogTitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CaseStudiesListPage