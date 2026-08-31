import React from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

import { blogPosts } from '@/constants/blog'
import { routing } from '@/i18n/routing'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryDeep: '#561244',
  primaryAlt: '#B73B7B',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
  heroGradient: 'linear-gradient(135deg, #570D3F 0%, #561244 50%, #B5377A 100%)',
}

interface ArticleProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    for (const post of blogPosts) {
      paramsList.push({ locale, slug: post.slug })
    }
  }
  return paramsList
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const t = await getTranslations({ locale })
  const siteUrl = 'https://www.nexsetia.com'
  const title = t(post.titleKey)

  return {
    title: `${title} | Nexsetia Blog`,
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        fr: `${siteUrl}/fr/blog/${slug}`,
        ar: `${siteUrl}/ar/blog/${slug}`,
        en: `${siteUrl}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      url: `${siteUrl}/${locale}/blog/${slug}`,
      type: 'article',
      images: [{ url: post.heroImage, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: ArticleProps) {
  const { locale, slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const t = await getTranslations({ locale })
  const isRtl = locale === 'ar'

  const renderFormattedParagraph = (textKey: string) => {
    return t.rich(textKey, {
      strongText: (chunks) => (
        <Box component="strong" sx={{ fontWeight: 800, color: BRAND.primaryDark }}>
          {chunks}
        </Box>
      ),
      adsLink: (chunks) => (
        <RouterLink
          href={`/${locale}/services/acquisition`}
          style={{
            color: BRAND.primary,
            fontWeight: 700,
            textDecoration: 'underline',
            textDecorationColor: BRAND.primaryLight,
            wordBreak: 'break-word',
          }}
        >
          {chunks}
        </RouterLink>
      ),
      seoLink: (chunks) => (
        <RouterLink
          href={`/${locale}/services/acquisition`}
          style={{
            color: BRAND.primary,
            fontWeight: 700,
            textDecoration: 'underline',
            textDecorationColor: BRAND.primaryLight,
            wordBreak: 'break-word',
          }}
        >
          {chunks}
        </RouterLink>
      ),
      customLink: (chunks) => (
        <RouterLink
          href={`/${locale}/services/dev`}
          style={{
            color: BRAND.primary,
            fontWeight: 700,
            textDecoration: 'underline',
            textDecorationColor: BRAND.primaryLight,
            wordBreak: 'break-word',
          }}
        >
          {chunks}
        </RouterLink>
      ),
    })
  }

  return (
    <Box
      component="article"
      sx={{
        minHeight: '100vh',
        direction: isRtl ? 'rtl' : 'ltr',
        pb: { xs: 8, sm: 10, md: 12 },
        bgcolor: '#FDFAFC',
        overflowX: 'hidden',
      }}
    >
      {/* ── 1. HERO SECTION RESPONSIVE ── */}
      <Box
        sx={{
          background: BRAND.heroGradient,
          color: '#FFFFFF',
          pt: { xs: 10, sm: 13, md: 16 },
          pb: { xs: 6, sm: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 0 },
          position: 'relative',
          clipPath: { md: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)', xs: 'none' },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 3.5, sm: 4, md: 6 },
            }}
          >
            {/* Colonne gauche : Tags + Titre + Dates */}
            <Box
              sx={{
                width: '100%',
                flex: { md: '1 1 58%' },
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              {/* Tags */}
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={{ xs: 0.8, sm: 1 }}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  justifyContent: { xs: 'flex-start', md: isRtl ? 'flex-end' : 'flex-start' },
                }}
              >
                {post.tagsKeys.map((tagKey, idx) => (
                  <Typography
                    key={idx}
                    component="span"
                    sx={{
                      fontSize: { xs: 10, sm: 11 },
                      fontWeight: 800,
                      letterSpacing: { xs: 0.4, sm: 0.8 },
                      color: BRAND.primaryLight,
                      textTransform: 'uppercase',
                      lineHeight: 1.4,
                    }}
                  >
                    {t(tagKey)}
                    {idx < post.tagsKeys.length - 1 ? ',' : ''}
                  </Typography>
                ))}
              </Stack>

              {/* Titre Principal H1 */}
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.45rem', sm: '1.9rem', md: '2.4rem', lg: '2.65rem' },
                  fontWeight: 900,
                  lineHeight: { xs: 1.35, sm: 1.3, md: 1.25 },
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  color: '#FFFFFF',
                  wordBreak: 'break-word',
                }}
              >
                {t(post.titleKey)}
              </Typography>

              {/* Métadonnées : Date et temps de lecture */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2 }}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: 12, sm: 13.5 },
                  justifyContent: isRtl ? 'flex-start' : 'flex-start',
                }}
              >
                <Stack direction="row" spacing={0.75} alignItems="center">
                  <CalendarMonthOutlinedIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: BRAND.primaryLight }} />
                  <Typography sx={{ fontSize: 'inherit' }}>
                    {t('Blog.publishedOn')} {post.publishedAt}
                  </Typography>
                </Stack>

                <Box sx={{ display: { xs: 'none', sm: 'block' }, opacity: 0.6 }}>•</Box>

                <Stack direction="row" spacing={0.75} alignItems="center">
                  <AccessTimeOutlinedIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: BRAND.primaryLight }} />
                  <Typography sx={{ fontSize: 'inherit', fontWeight: 600 }}>
                    {t('Blog.readingTime')}: {post.readingTime}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Colonne droite : Image Hero Responsive */}
            <Box
              sx={{
                width: '100%',
                flex: { md: '1 1 38%' },
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: '100%', sm: 500, md: 440 },
                  height: { xs: 200, sm: 280, md: 320 },
                  borderRadius: { xs: 3, sm: 4 },
                  overflow: 'hidden',
                  boxShadow: `0 16px 36px ${BRAND.primaryDark}80`,
                  border: `2px solid ${BRAND.primaryLight}33`,
                }}
              >
                <Image
                  src={post.heroImage}
                  alt={t(post.titleKey)}
                  fill
                  priority
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 80vw, 440px"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. CORPS DE L'ARTICLE (Conteneur central optimisé lecture) ── */}
      <Container
        maxWidth="md"
        sx={{
          mt: { xs: 3.5, sm: 5, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {post.sections.map((section, idx) => (
          <Box key={idx} sx={{ mb: { xs: 3.5, sm: 4.5, md: 5 }, textAlign: isRtl ? 'right' : 'left' }}>
            {/* Titre H2 de Section */}
            {section.headingKey && (
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.7rem' },
                  fontWeight: 900,
                  color: BRAND.primaryDark,
                  lineHeight: isRtl ? 1.4 : 1.3,
                  mt: { xs: 3.5, sm: 4.5, md: 5 },
                  mb: { xs: 1.5, sm: 2, md: 2.5 },
                  wordBreak: 'break-word',
                }}
              >
                {t(section.headingKey)}
              </Typography>
            )}

            {/* Paragraphes de contenu */}
            {section.paragraphsKeys.map((pKey, pIdx) => (
              <Typography
                key={pIdx}
                sx={{
                  fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.05rem' },
                  lineHeight: { xs: 1.75, sm: 1.8, md: 1.85 },
                  color: '#374151',
                  mb: { xs: 1.75, sm: 2, md: 2.5 },
                  wordBreak: 'break-word',
                }}
              >
                {renderFormattedParagraph(pKey)}
              </Typography>
            ))}

            {/* Encadré d'exemple / Note pratique */}
            {section.exampleKey && (
              <Typography
                sx={{
                  fontSize: { xs: '0.875rem', sm: '0.9375rem' },
                  fontStyle: 'italic',
                  color: BRAND.primaryDark,
                  lineHeight: 1.75,
                  my: { xs: 2, sm: 2.5 },
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 2,
                  bgcolor: `${BRAND.primarySoft}40`,
                  borderInlineStart: `3px solid ${BRAND.primary}`,
                  wordBreak: 'break-word',
                }}
              >
                {t(section.exampleKey)}
              </Typography>
            )}

            {/* Image/Schéma dans l'article */}
            {section.image && (
              <Box sx={{ my: { xs: 2.5, sm: 3.5, md: 4 }, textAlign: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 200, sm: 300, md: 380 },
                    borderRadius: { xs: 2, sm: 3 },
                    overflow: 'hidden',
                    border: `1px solid ${BRAND.primaryLight}`,
                    backgroundColor: '#FFFFFF',
                    mb: 1.25,
                    boxShadow: `0 8px 24px ${BRAND.primary}12`,
                  }}
                >
                  <Image
                    src={section.image.src}
                    alt={t(section.image.altKey)}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 90vw, 750px"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                {section.image.captionKey && (
                  <Typography
                    sx={{
                      fontSize: { xs: 11.5, sm: 12.5 },
                      fontWeight: 700,
                      color: BRAND.primaryDark,
                      px: 1,
                    }}
                  >
                    {t(section.image.captionKey)}
                  </Typography>
                )}
              </Box>
            )}

            {/* Bannière CTA d'acquisition intermédiaire */}
            {section.showMidArticleCta && (
              <Box
                sx={{
                  my: { xs: 4, sm: 5, md: 6 },
                  p: { xs: 2.5, sm: 3.5, md: 4.5 },
                  borderRadius: { xs: 3, sm: 4 },
                  background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primaryDeep} 100%)`,
                  color: '#FFFFFF',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: { xs: 2.5, sm: 3 },
                  boxShadow: `0 12px 28px ${BRAND.primaryDark}40`,
                  border: `1px solid ${BRAND.primaryLight}25`,
                }}
              >
                <Box sx={{ width: '100%', flex: 1, textAlign: isRtl ? 'right' : 'left' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.35rem' },
                      fontWeight: 800,
                      lineHeight: 1.35,
                      mb: { xs: 1, sm: 1.25 },
                      color: BRAND.primaryLight,
                      wordBreak: 'break-word',
                    }}
                  >
                    {t('Blog.midCta.title')}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                      color: 'rgba(255,255,255,0.88)',
                      lineHeight: 1.6,
                      mb: { xs: 2, sm: 2.5 },
                    }}
                  >
                    {t('Blog.midCta.description')}
                  </Typography>
                  <Button
                    component={RouterLink}
                    href={`/${locale}#home-services`}
                    fullWidth={false}
                    sx={{
                      width: { xs: '100%', sm: 'auto' },
                      backgroundColor: BRAND.primary,
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: { xs: 13, sm: 14 },
                      textTransform: 'none',
                      px: { xs: 3, sm: 3.5 },
                      py: { xs: 1.1, sm: 1.2 },
                      borderRadius: '2rem',
                      boxShadow: `0 4px 14px ${BRAND.primary}66`,
                      '&:hover': {
                        backgroundColor: BRAND.primaryAlt,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {t('Blog.midCta.button')}
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2.5,
                    borderRadius: '50%',
                    backgroundColor: `${BRAND.primaryLight}15`,
                    flexShrink: 0,
                  }}
                >
                  <CampaignOutlinedIcon sx={{ fontSize: 60, color: BRAND.primaryLight }} />
                </Box>
              </Box>
            )}
          </Box>
        ))}

        {/* ── 3. FOIRE AUX QUESTIONS (FAQ) ── */}
        <Box sx={{ mt: { xs: 5, sm: 6, md: 8 }, pt: { xs: 3, sm: 4 }, borderTop: `2px solid ${BRAND.primarySoft}` }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.85rem' },
              fontWeight: 900,
              color: BRAND.primaryDark,
              mb: { xs: 2.5, sm: 3.5, md: 4 },
              textAlign: isRtl ? 'right' : 'left',
            }}
          >
            {t('Blog.faqTitle')}
          </Typography>

          <Stack spacing={{ xs: 1.5, sm: 2 }}>
            {post.faq.map((item, fIdx) => (
              <Accordion
                key={fIdx}
                defaultExpanded={fIdx === 0}
                sx={{
                  borderRadius: '10px !important',
                  border: `1px solid ${BRAND.primarySoft}`,
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: BRAND.primary, fontSize: { xs: 20, sm: 24 } }} />}
                  sx={{
                    px: { xs: 2, sm: 2.5, md: 3 },
                    py: { xs: 0.5, sm: 0.8 },
                    backgroundColor: `${BRAND.primarySoft}33`,
                    '& .MuiAccordionSummary-content': { my: 1 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1.02rem' },
                      color: BRAND.primaryDark,
                      textAlign: isRtl ? 'right' : 'left',
                      pr: isRtl ? 0 : 1,
                      pl: isRtl ? 1 : 0,
                    }}
                  >
                    {t(item.questionKey)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2, sm: 2.5, md: 3 }, py: { xs: 1.75, sm: 2, md: 2.5 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.92rem', md: '0.95rem' },
                      color: '#4B5563',
                      lineHeight: { xs: 1.7, sm: 1.8 },
                      textAlign: isRtl ? 'right' : 'left',
                    }}
                  >
                    {t(item.answerKey)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}