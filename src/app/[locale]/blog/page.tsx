import React from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import { blogPosts } from '@/constants/blog'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryDeep: '#561244',
  primaryAlt: '#B73B7B',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
  heroGradient: 'linear-gradient(135deg, #570D3F 0%, #561244 50%, #B5377A 100%)',
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Blog' })
  const siteUrl = 'https://www.nexsetia.com'

  return {
    title: `${t('title')} | Nexsetia`,
    description: t('subtitle'),
    alternates: {
      canonical: `${siteUrl}/${locale}/blog`,
      languages: {
        fr: `${siteUrl}/fr/blog`,
        ar: `${siteUrl}/ar/blog`,
        en: `${siteUrl}/en/blog`,
        'x-default': `${siteUrl}/fr/blog`,
      },
    },
    openGraph: {
      title: `${t('title')} | Nexsetia`,
      description: t('subtitle'),
      url: `${siteUrl}/${locale}/blog`,
      type: 'website',
    },
  }
}

export default async function BlogIndexPage({ params }: PageProps) {
  const { locale } = await params
  const tBlog = await getTranslations({ locale, namespace: 'Blog' })
  const tGlobal = await getTranslations({ locale })
  const isRtl = locale === 'ar'

  return (
    <Box
      sx={{
        minHeight: '100vh',
        direction: isRtl ? 'rtl' : 'ltr',
        bgcolor: '#FDFAFC',
        pb: { xs: 8, sm: 12 },
        overflowX: 'hidden',
      }}
    >
      {/* ── 1. HERO SECTION ── */}
      <Box
        sx={{
          background: BRAND.heroGradient,
          color: '#FFFFFF',
          pt: { xs: 12, sm: 15, md: 18 },
          pb: { xs: 8, sm: 12, md: 16 },
          position: 'relative',
          clipPath: {
            xs: 'none',
            md: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, sm: 5, md: 6 },
            }}
          >
            {/* Texte gauche */}
            <Box
              sx={{
                flex: { md: '1 1 58%' },
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              <Typography
                sx={{
                  color: BRAND.primaryLight,
                  fontWeight: 800,
                  fontSize: { xs: 11, sm: 12 },
                  letterSpacing: { xs: 1, sm: 1.5 },
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                {tBlog('badge')}
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.8rem' },
                  fontWeight: 900,
                  lineHeight: { xs: 1.35, sm: 1.25, md: 1.2 },
                  color: '#FFFFFF',
                  mb: 2.5,
                  wordBreak: 'break-word',
                }}
              >
                {tBlog('title')}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: 1.75,
                  maxWidth: 620,
                }}
              >
                {tBlog('subtitle')}
              </Typography>
            </Box>

            {/* Illustration Mockup Laptop */}
            <Box
              sx={{
                flex: { md: '1 1 42%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: 340, sm: 420, md: 460 },
                  height: { xs: 200, sm: 250, md: 270 },
                  borderRadius: '12px 12px 0 0',
                  bgcolor: '#1E293B',
                  p: '10px 10px 0 10px',
                  boxShadow: `0 24px 50px ${BRAND.primaryDark}80`,
                  border: '2px solid rgba(255,255,255,0.15)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '112%',
                    height: 10,
                    bgcolor: '#94A3B8',
                    borderRadius: '0 0 8px 8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '6px 6px 0 0',
                    bgcolor: '#FFFFFF',
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                    alt={tBlog('title')}
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, 460px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. GRILLE D'ARTICLES ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 5, sm: 7, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {blogPosts.map((post) => {
            const postTitle = tGlobal(post.titleKey)
            const postExcerpt = post.sections?.[0]?.paragraphsKeys?.[0]
              ? tGlobal(post.sections[0].paragraphsKeys[0])
              : postTitle

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: 4,
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${BRAND.primarySoft}`,
                    boxShadow: '0 10px 30px rgba(181, 55, 122, 0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 18px 40px ${BRAND.primary}25`,
                      borderColor: BRAND.primaryLight,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component={RouterLink}
                    href={`/${locale}/blog/${post.slug}`}
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 210, sm: 230 },
                      display: 'block',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={post.heroImage}
                      alt={postTitle}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Contenu */}
                  <CardContent
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: isRtl ? 'right' : 'left',
                    }}
                  >
                    <Box>
                      <Typography
                        component={RouterLink}
                        href={`/${locale}/blog/${post.slug}`}
                        sx={{
                          fontSize: { xs: '1.05rem', sm: '1.15rem' },
                          fontWeight: 900,
                          lineHeight: 1.35,
                          color: BRAND.primaryDark,
                          textDecoration: 'none',
                          mb: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          '&:hover': {
                            color: BRAND.primary,
                          },
                        }}
                      >
                        {postTitle}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: BRAND.primary,
                          mb: 1,
                        }}
                      >
                        {tBlog('readingTime') || 'Reading Time'}: {post.readingTime}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          color: '#4B5563',
                          lineHeight: 1.65,
                          mb: 3,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {postExcerpt}
                      </Typography>
                    </Box>

                    {/* Actions bas de carte */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      flexWrap="wrap"
                      gap={1.5}
                      sx={{ pt: 2, borderTop: `1px solid ${BRAND.primarySoft}` }}
                    >
                      <Button
                        component={RouterLink}
                        href={`/${locale}/blog/${post.slug}`}
                        endIcon={
                          <ArrowForwardIcon
                            sx={{
                              fontSize: '16px !important',
                              transform: isRtl ? 'rotate(180deg)' : 'none',
                            }}
                          />
                        }
                        sx={{
                          backgroundColor: BRAND.primary,
                          color: '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          px: 2,
                          py: 0.8,
                          borderRadius: '2rem',
                          boxShadow: `0 4px 12px ${BRAND.primary}40`,
                          '&:hover': {
                            backgroundColor: BRAND.primaryAlt,
                            transform: 'translateY(-1px)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isRtl ? 'اقرأ المزيد' : 'En savoir plus'}
                      </Button>

                      <Stack direction="row" spacing={0.5}>
                        <IconButton
                          size="small"
                          aria-label="Share on Facebook"
                          sx={{
                            bgcolor: '#F3F4F6',
                            color: BRAND.primaryDark,
                            '&:hover': { bgcolor: BRAND.primarySoft, color: BRAND.primary },
                          }}
                        >
                          <FacebookIcon sx={{ fontSize: 16 }} />
                        </IconButton>

                        <IconButton
                          size="small"
                          aria-label="Share on LinkedIn"
                          sx={{
                            bgcolor: '#F3F4F6',
                            color: BRAND.primaryDark,
                            '&:hover': { bgcolor: BRAND.primarySoft, color: BRAND.primary },
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: 16 }} />
                        </IconButton>

                        <IconButton
                          size="small"
                          aria-label="Share"
                          sx={{
                            bgcolor: '#F3F4F6',
                            color: BRAND.primaryDark,
                            '&:hover': { bgcolor: BRAND.primarySoft, color: BRAND.primary },
                          }}
                        >
                          <ShareOutlinedIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Stack>
                    </Stack>
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