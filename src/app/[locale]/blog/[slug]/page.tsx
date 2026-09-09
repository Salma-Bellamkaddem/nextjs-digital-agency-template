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
  accentGold: '#D4A574',
  heroGradient: 'linear-gradient(135deg, #570D3F 0%, #561244 45%, #B5377A 85%, #8A2A5E 100%)',
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

  // 1. Détection de la clé de base de l'article (ex: "Blog.posts.baselineBuzz")
  const basePostKey = post.titleKey ? post.titleKey.replace(/\.title$/, '') : ''

  // 2. Récupération prioritaire de metaTitle
  const metaTitleKey = `${basePostKey}.metaTitle`
  const metaTitle = t.has(metaTitleKey)
    ? t(metaTitleKey)
    : t.has(post.titleKey)
    ? `${t(post.titleKey)} | Nexsetia`
    : 'Article Blog | Nexsetia'

  // 3. Récupération prioritaire de metaDescription
  const metaDescKey = `${basePostKey}.metaDescription`
  let metaDescription = ''

  if (t.has(metaDescKey)) {
    metaDescription = t(metaDescKey)
  } else if (post.sections?.[0]?.paragraphsKeys?.[0]) {
    const firstPKey = post.sections[0].paragraphsKeys[0]
    if (t.has(firstPKey)) {
      metaDescription = t(firstPKey).replace(/<[^>]*>/g, '').slice(0, 160)
    }
  }

  // 4. URL absolue et sécurisée pour le scraper de WhatsApp
  const rawImageUrl = post.heroImage.startsWith('http')
    ? post.heroImage
    : `${siteUrl}${post.heroImage}`
  
  const imageUrl = rawImageUrl.replace(/\.webp$/i, '.jpeg')

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        fr: `${siteUrl}/fr/blog/${slug}`,
        ar: `${siteUrl}/ar/blog/${slug}`,
        en: `${siteUrl}/en/blog/${slug}`,
        'x-default': `${siteUrl}/fr/blog/${slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Nexsetia',
      locale: locale === 'ar' ? 'ar_AR' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: ArticleProps) {
  const { locale, slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const t = await getTranslations({ locale })
  const isRtl = locale === 'ar'
  const siteUrl = 'https://www.nexsetia.com'
  const pageUrl = `${siteUrl}/${locale}/blog/${slug}`
  const postTitle = t.has(post.titleKey) ? t(post.titleKey) : post.titleKey

  // Description propre pour le JSON-LD
  let postExcerpt = postTitle
  if (post.sections?.[0]?.paragraphsKeys?.[0]) {
    const firstPKey = post.sections[0].paragraphsKeys[0]
    if (t.has(firstPKey)) {
      postExcerpt = t(firstPKey).replace(/<[^>]*>/g, '').slice(0, 160)
    }
  }

  // Schema 1: BlogPosting (Indexation article, auteur, date, image)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    headline: postTitle,
    description: postExcerpt,
    image: post.heroImage.startsWith('http')
      ? post.heroImage
      : `${siteUrl}${post.heroImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: locale,
    author: {
      '@type': 'Organization',
      name: 'Nexsetia',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexsetia',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/apple-touch-icon.png`,
      },
    },
  }

  // Schema 2: FAQPage (Pour faire apparaître l'accordéon dans les résultats Google)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: t.has(item.questionKey) ? t(item.questionKey) : item.questionKey,
            acceptedAnswer: {
              '@type': 'Answer',
              text: t.has(item.answerKey) ? t(item.answerKey) : item.answerKey,
            },
          })),
        }
      : null

  const renderFormattedParagraph = (textKey: string) => {
    if (!t.has(textKey)) return textKey

    return t.rich(textKey, {
      strongText: (chunks) => (
        <Box component="strong" sx={{ fontWeight: 800, color: BRAND.primaryDark }}>
          {chunks}
        </Box>
      ),
      adsLink: (chunks) => (
        <RouterLink
          href={`/${locale}/services/marketing-digital`}
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
          href={`/${locale}/services/marketing-digital`}
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
          href={`/${locale}/services/developpement-web-mobile`}
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
    <>
      {/* ── BALISES STRUCTUREES JSON-LD (SEO GOOGLE) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
        {/* ── 1. HERO SECTION PREMIUM AVEC IMAGE ── */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            background: BRAND.heroGradient,
            color: '#FFFFFF',
            pt: { xs: 11, sm: 14, md: 17 },
            pb: { xs: 7, sm: 9, md: 11 },
            px: { xs: 2.5, sm: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.35,
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '-15%',
              right: isRtl ? 'auto' : '-8%',
              left: isRtl ? '-8%' : 'auto',
              width: { xs: 260, md: 460 },
              height: { xs: 260, md: 460 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${BRAND.accentGold}35 0%, transparent 70%)`,
              filter: 'blur(90px)',
              pointerEvents: 'none',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: '-20%',
              left: isRtl ? 'auto' : '5%',
              right: isRtl ? '5%' : 'auto',
              width: { xs: 220, md: 380 },
              height: { xs: 220, md: 380 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${BRAND.primaryLight}20 0%, transparent 70%)`,
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 4, sm: 5, md: 6 },
              }}
            >
              <Box
                sx={{
                  flex: { md: '1 1 60%' },
                  width: '100%',
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  sx={{
                    mb: { xs: 2, sm: 2.5 },
                    justifyContent: isRtl ? 'flex-end' : 'flex-start',
                  }}
                >
                  {post.tagsKeys.map((tagKey, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 1.4,
                        py: 0.4,
                        borderRadius: '6px',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                          fontSize: { xs: '0.68rem', sm: '0.75rem' },
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: BRAND.primaryLight,
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.has(tagKey) ? t(tagKey) : tagKey}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Typography
                  component="h1"
                  sx={{
                    fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
                    fontSize: {
                      xs: '2rem',
                      sm: '2.6rem',
                      md: '3.2rem',
                      lg: '3.6rem',
                    },
                    fontWeight: 800,
                    lineHeight: { xs: 1.2, sm: 1.18, md: 1.15 },
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    mb: { xs: 2.5, md: 3 },
                    wordBreak: 'break-word',
                    textWrap: 'balance',
                  }}
                >
                  {postTitle}
                </Typography>

                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  flexWrap="wrap"
                  sx={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                    justifyContent: isRtl ? 'flex-end' : 'flex-start',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <CalendarMonthOutlinedIcon sx={{ fontSize: 17, color: BRAND.primaryLight }} />
                    <Typography sx={{ fontSize: 'inherit', fontWeight: 500, color: 'inherit' }}>
                      {t.has('Blog.publishedOn') ? t('Blog.publishedOn') : isRtl ? 'نُشر في' : 'Publié le'}{' '}
                      {post.publishedAt}
                    </Typography>
                  </Stack>

                  <Typography sx={{ opacity: 0.4, fontSize: '0.75rem' }}>•</Typography>

                  <Stack direction="row" spacing={0.8} alignItems="center">
                    <AccessTimeOutlinedIcon sx={{ fontSize: 17, color: BRAND.primaryLight }} />
                    <Typography sx={{ fontSize: 'inherit', fontWeight: 600, color: '#FFFFFF' }}>
                      {t.has('Blog.readingTime')
                        ? t('Blog.readingTime')
                        : isRtl
                        ? 'مدة القراءة'
                        : 'Temps de lecture'}
                      : {post.readingTime}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  flex: { md: '1 1 40%' },
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: { xs: 340, sm: 400, md: 440 },
                    height: { xs: 240, sm: 300, md: 360 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: `0 24px 50px -10px rgba(0, 0, 0, 0.45)`,
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <Image
                    src={post.heroImage}
                    alt={postTitle}
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 440px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── 2. CORPS DE LA CHRONIQUE / ARTICLE ── */}
        <Container
          maxWidth="md"
          sx={{
            mt: { xs: 4, sm: 6 },
            px: { xs: 2.5, sm: 4, md: 6 },
          }}
        >
          {post.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: { xs: 3, sm: 4 }, textAlign: isRtl ? 'right' : 'left' }}>
              {section.paragraphsKeys.map((pKey, pIdx) => (
                <Typography
                  key={pIdx}
                  sx={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    fontSize: { xs: '1.025rem', sm: '1.1rem', md: '1.125rem' },
                    lineHeight: { xs: 1.8, sm: 1.85, md: 1.9 },
                    color: '#2D3748',
                    mb: { xs: 2.5, sm: 3 },
                    wordBreak: 'break-word',
                    '& strong': {
                      color: BRAND.primaryDark,
                      fontWeight: 800,
                    },
                  }}
                >
                  {renderFormattedParagraph(pKey)}
                </Typography>
              ))}

              {section.image && (
                <Box
                  sx={{
                    my: { xs: 3.5, sm: 4.5 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: { xs: '320px', sm: '380px', md: '440px' },
                      height: { xs: '380px', sm: '460px', md: '500px' },
                      overflow: 'hidden',
                      borderRadius: 3,
                    }}
                  >
                    <Image
                      src={section.image.src}
                      alt={t.has(section.image.altKey) ? t(section.image.altKey) : 'Visuel'}
                      fill
                      sizes="(max-width: 600px) 320px, 440px"
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  {section.image.captionKey && (
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                        fontSize: { xs: 12, sm: 13 },
                        color: '#718096',
                        mt: 1.5,
                        textAlign: 'center',
                        maxWidth: '460px',
                        fontStyle: 'italic',
                      }}
                    >
                      {t.has(section.image.captionKey) ? t(section.image.captionKey) : section.image.captionKey}
                    </Typography>
                  )}
                </Box>
              )}

              {section.showMidArticleCta && (
                <Box
                  sx={{
                    my: { xs: 4, sm: 5, md: 6 },
                    p: { xs: 3, sm: 4 },
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primaryDeep} 100%)`,
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 3,
                  }}
                >
                  <Box sx={{ width: '100%', flex: 1, textAlign: isRtl ? 'right' : 'left' }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        fontWeight: 800,
                        mb: 1,
                        color: BRAND.primaryLight,
                      }}
                    >
                      {t.has('Blog.midCta.title')
                        ? t('Blog.midCta.title')
                        : "Besoin d'un accompagnement digital ?"}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {t.has('Blog.midCta.description')
                        ? t('Blog.midCta.description')
                        : 'Propulsez votre acquisition et optimisez vos campagnes avec nos experts.'}
                    </Typography>
                    <Button
                      component={RouterLink}
                      href={`/${locale}#home-services`}
                      sx={{
                        width: { xs: '100%', sm: 'auto' },
                        backgroundColor: BRAND.primary,
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: 13,
                        textTransform: 'none',
                        px: 3.5,
                        py: 1.1,
                        borderRadius: '2rem',
                        '&:hover': {
                          backgroundColor: BRAND.primaryAlt,
                        },
                      }}
                    >
                      {t.has('Blog.midCta.button') ? t('Blog.midCta.button') : 'Découvrir nos solutions'}
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: `${BRAND.primaryLight}15`,
                      flexShrink: 0,
                    }}
                  >
                    <CampaignOutlinedIcon sx={{ fontSize: 52, color: BRAND.primaryLight }} />
                  </Box>
                </Box>
              )}
            </Box>
          ))}

          {/* ── 3. FAQ ÉPURÉE AVEC ACCORDÉON ── */}
          {post.faq && post.faq.length > 0 && (
            <Box sx={{ mt: { xs: 5, sm: 7 }, pt: 4, borderTop: `1px solid ${BRAND.primarySoft}` }}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                  fontSize: { xs: '1.35rem', sm: '1.6rem' },
                  fontWeight: 900,
                  color: BRAND.primaryDark,
                  mb: 3,
                  textAlign: isRtl ? 'right' : 'left',
                }}
              >
                {t.has('Blog.faqTitle')
                  ? t('Blog.faqTitle')
                  : isRtl
                  ? 'الأسئلة الشائعة'
                  : 'Questions fréquentes'}
              </Typography>

              <Stack spacing={1.5}>
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
                      expandIcon={<ExpandMoreIcon sx={{ color: BRAND.primary }} />}
                      sx={{
                        px: { xs: 2, sm: 2.5 },
                        backgroundColor: `${BRAND.primarySoft}25`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                          fontWeight: 800,
                          fontSize: { xs: '0.9rem', sm: '0.98rem' },
                          color: BRAND.primaryDark,
                          textAlign: isRtl ? 'right' : 'left',
                        }}
                      >
                        {t.has(item.questionKey) ? t(item.questionKey) : item.questionKey}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: { xs: 2, sm: 2.5 }, py: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                          fontSize: { xs: '0.88rem', sm: '0.94rem' },
                          color: '#4B5563',
                          lineHeight: 1.75,
                          textAlign: isRtl ? 'right' : 'left',
                        }}
                      >
                        {t.has(item.answerKey) ? t(item.answerKey) : item.answerKey}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}