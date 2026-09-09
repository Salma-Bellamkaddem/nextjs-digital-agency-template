'use client'

import React from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

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
  accentGold: '#D4A574',
  heroGradient: 'linear-gradient(135deg, #570D3F 0%, #561244 45%, #B5377A 85%, #8A2A5E 100%)',
}

// ── Boutons de partage interactifs ──
function ShareButtons({ url, title }: { url: string; title: string }) {
  const handleFacebook = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const targetUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(targetUrl, '_blank', 'noopener,noreferrer,width=600,height=500')
  }

  const handleLinkedIn = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const targetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(targetUrl, '_blank', 'noopener,noreferrer,width=600,height=600')
  }

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // Annulation utilisateur ignorée
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Lien copié dans le presse-papier !')
    }
  }

  return (
    <Stack direction="row" spacing={0.5}>
      <IconButton
        size="small"
        aria-label="Share on Facebook"
        onClick={handleFacebook}
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
        onClick={handleLinkedIn}
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
        onClick={handleShare}
        sx={{
          bgcolor: '#F3F4F6',
          color: BRAND.primaryDark,
          '&:hover': { bgcolor: BRAND.primarySoft, color: BRAND.primary },
        }}
      >
        <ShareOutlinedIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Stack>
  )
}

export default function BlogIndexPage() {
  const locale = useLocale()
  const tBlog = useTranslations('Blog')
  const tGlobal = useTranslations()
  const isRtl = locale === 'ar'

  const badgeText = tBlog.has('badge') ? tBlog('badge') : 'Insights & Stratégie'
  const titleText = tBlog.has('title') ? tBlog('title') : 'Le Blog Nexsetia'
  const subtitleText = tBlog.has('subtitle')
    ? tBlog('subtitle')
    : 'Décryptages, méthodes et analyses digitales pour développer votre entreprise.'

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
          position: 'relative',
          background: BRAND.heroGradient,
          color: '#FFFFFF',
          pt: { xs: 13, sm: 16, md: 19 },
          pb: { xs: 10, sm: 13, md: 16 },
          overflow: 'hidden',
          clipPath: {
            xs: 'none',
            md: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)',
          },
        }}
      >
        {/* Texture grain premium */}
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

        {/* Halo doré accent premium */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: isRtl ? 'auto' : '35%',
            right: isRtl ? '35%' : 'auto',
            width: { xs: 260, md: 420 },
            height: { xs: 260, md: 420 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.accentGold}30 0%, transparent 70%)`,
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        {/* Halos d'ambiance existants */}
        <Box
          sx={{
            position: 'absolute',
            top: '-15%',
            left: isRtl ? 'auto' : '-5%',
            right: isRtl ? '-5%' : 'auto',
            width: { xs: 280, md: 480 },
            height: { xs: 280, md: 480 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.primary}55 0%, transparent 70%)`,
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            right: isRtl ? 'auto' : '10%',
            left: isRtl ? '10%' : 'auto',
            width: { xs: 240, md: 380 },
            height: { xs: 240, md: 380 },
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BRAND.primaryLight}25 0%, transparent 70%)`,
            filter: 'blur(70px)',
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
              gap: { xs: 4, sm: 5, md: 7 },
            }}
          >
            {/* Colonne gauche */}
            <Box
              sx={{
                flex: { md: '1 1 55%' },
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.65,
                  borderRadius: '2rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: BRAND.primaryLight,
                    boxShadow: `0 0 10px ${BRAND.primaryLight}`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                    color: BRAND.primaryLight,
                    fontWeight: 800,
                    fontSize: { xs: '0.72rem', sm: '0.78rem' },
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {badgeText}
                </Typography>
              </Box>
{/* Titre Principal H1 - Police Poppins comme dans HomeAbout */}
<Typography
  component="h1"
  sx={{
    fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
    fontSize: {
      xs: '2rem',       // Mobile
      sm: '2.6rem',     // Tablette
      md: '3.2rem',     // Desktop
      lg: '3.6rem',     // Grand écran
    },
    fontWeight: 800,
    lineHeight: {
      xs: 1.2,
      sm: 1.18,
      md: 1.15,
    },
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    mb: { xs: 2.5, md: 3 },
    wordBreak: 'break-word',
    textWrap: 'balance',
  }}
>
{titleText}
</Typography>
              {/* Titre H1 - Serif premium, plus d'impact */}
          

              {/* Sous-titre */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.12rem' },
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  maxWidth: 560,
                }}
              >
                {subtitleText}
              </Typography>
            </Box>

            {/* Colonne droite : Mockup */}
            <Box
              sx={{
                flex: { md: '1 1 45%' },
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
                  maxWidth: { xs: 350, sm: 440, md: 490 },
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  p: '10px',
                  boxShadow: `0 25px 60px -15px ${BRAND.primaryDark}`,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    px: 1.2,
                    pb: 1,
                  }}
                >
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)' }} />
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 210, sm: 260, md: 290 },
                    overflow: 'hidden',
                    borderRadius: 3,
                    bgcolor: '#0F172A',
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                    alt={titleText}
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 490px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. GRILLE D'ARTICLES ── */}
      <Container maxWidth="lg" sx={{ mt: { xs: 5, sm: 7, md: 8 }, px: { xs: 2.5, sm: 3 } }}>
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {blogPosts.map((post) => {
            const postTitle = tGlobal.has(post.titleKey) ? tGlobal(post.titleKey) : post.titleKey
            const readingTimeLabel = tBlog.has('readingTime') ? tBlog('readingTime') : (isRtl ? 'مدة القراءة' : 'Temps de lecture')

            let postExcerpt = postTitle
            if (post.sections?.[0]?.paragraphsKeys?.[0]) {
              const firstKey = post.sections[0].paragraphsKeys[0]
              if (tGlobal.has(firstKey)) {
                postExcerpt = tGlobal(firstKey).replace(/<[^>]*>/g, '')
              }
            }

            const targetHref = `/${locale}/blog/${post.slug}`
            const fullArticleUrl = `https://www.nexsetia.com/${locale}/blog/${post.slug}`

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
                  <Box
                    component={RouterLink}
                    href={targetHref}
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
                        href={targetHref}
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                          fontSize: { xs: '1.05rem', sm: '1.15rem' },
                          fontWeight: 800,
                          lineHeight: 1.35,
                          letterSpacing: '-0.02em',
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
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: BRAND.primary,
                          mb: 1,
                        }}
                      >
                        {readingTimeLabel}: {post.readingTime}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
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
                        href={targetHref}
                        endIcon={
                          <ArrowForwardIcon
                            sx={{
                              fontSize: '16px !important',
                              transform: isRtl ? 'rotate(180deg)' : 'none',
                            }}
                          />
                        }
                        sx={{
                          fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
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

                      <ShareButtons url={fullArticleUrl} title={postTitle} />
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