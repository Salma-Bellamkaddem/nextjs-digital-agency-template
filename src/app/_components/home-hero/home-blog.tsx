'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import { blogPosts } from '@/constants/blog'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const HomeBlogSection: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const tGlobal = useTranslations()
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const badgeText = tGlobal.has('HomeBlog.badge')
    ? tGlobal('HomeBlog.badge')
    : isRtl
    ? 'المقالات والأفكار'
    : 'BLOG & ACTUALITÉS'

  const viewAllText = tGlobal.has('HomeBlog.viewAll')
    ? tGlobal('HomeBlog.viewAll')
    : isRtl
    ? 'عرض كل المقالات'
    : 'Voir tous les articles'

  const readArticleText = tGlobal.has('HomeBlog.readArticle')
    ? tGlobal('HomeBlog.readArticle')
    : isRtl
    ? 'اقرأ المقال'
    : "Lire l'article"

  const latestPosts = blogPosts.slice(0, 3)

  return (
    <Box
      component="section"
      id="home-blog"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 6, lg: 10 },
        backgroundColor: isDark ? theme.palette.background.default : '#FDFAFC',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        {/* ── En-tête (Exactement la même structure et les mêmes styles que HomeFaq) ── */}
        <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
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
            {badgeText}
          </Typography>

          {/* Ligne d'accent */}
          <Box
            sx={{
              width: 32,
              height: 3,
              borderRadius: 999,
              backgroundColor: BRAND.primary,
              mb: 3,
            }}
          />

          {/* Titre Principal H2 */}
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 26, sm: 32, md: 42 },
              fontWeight: 800,
              lineHeight: isRtl ? 1.4 : 1.2,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            {isRtl ? 'آخر مقالاتنا و' : 'Conseils d’experts &'}{' '}
            <Box component="span" sx={{ color: BRAND.primary }}>
              {isRtl ? 'توجيهاتنا الرقمية' : 'décryptages digitaux'}
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: 15, md: 17 },
              maxWidth: 580,
              lineHeight: isRtl ? 1.8 : 1.6,
            }}
          >
            {isRtl
              ? 'استكشف أحدث الاتجاهات والاستراتيجيات الرقمية لتسريع نمو علامتك التجارية.'
              : 'Explorez nos méthodes concrètes, retours d’expérience et analyses pour faire grandir votre marque.'}
          </Typography>
        </Stack>

        {/* ── Grille des articles ── */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {latestPosts.map((post) => {
            const title = tGlobal.has(post.titleKey) ? tGlobal(post.titleKey) : post.titleKey
            const tag = post.tagsKeys?.[0]
              ? tGlobal.has(post.tagsKeys[0])
                ? tGlobal(post.tagsKeys[0])
                : post.tagsKeys[0]
              : ''

            let excerpt = title
            if (post.sections?.[0]?.paragraphsKeys?.[0]) {
              const firstPKey = post.sections[0].paragraphsKeys[0]
              if (tGlobal.has(firstPKey)) {
                excerpt = tGlobal(firstPKey).replace(/<[^>]*>/g, '')
              }
            }

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <Card
                  component={RouterLink}
                  href={`/${locale}/blog/${post.slug}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    overflow: 'hidden',
                    textDecoration: 'none',
                    backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                    boxShadow: isDark ? 'none' : '0 4px 18px rgba(87,13,63,0.06)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(181,55,122,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isDark
                        ? '0 12px 30px rgba(0,0,0,0.45)'
                        : '0 12px 30px rgba(181,55,122,0.14)',
                      borderColor: BRAND.primary,
                      '& .blog-card-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .blog-card-title': {
                        color: BRAND.primary,
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 210,
                      overflow: 'hidden',
                      backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : `${BRAND.primaryLight}30`,
                    }}
                  >
                    <Image
                      src={post.heroImage}
                      alt={title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
                      className="blog-card-image"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
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
                      {/* Tag & Temps de lecture */}
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ mb: 1.5 }}
                      >
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 1.4,
                            py: 0.3,
                            borderRadius: '2rem',
                            backgroundColor: `${BRAND.primaryLight}35`,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: BRAND.primary,
                              letterSpacing: 0.5,
                              textTransform: 'uppercase',
                            }}
                          >
                            {tag}
                          </Typography>
                        </Box>

                        <Stack
                          direction="row"
                          spacing={0.6}
                          alignItems="center"
                          sx={{ color: theme.palette.text.secondary }}
                        >
                          <AccessTimeIcon sx={{ fontSize: 14, color: BRAND.primary }} />
                          <Typography sx={{ fontSize: 11.5, fontWeight: 600 }}>
                            {post.readingTime}
                          </Typography>
                        </Stack>
                      </Stack>

                      {/* Titre */}
                      <Typography
                        className="blog-card-title"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: 16.5, sm: 18 },
                          color: theme.palette.text.primary,
                          lineHeight: 1.35,
                          mb: 1.25,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {title}
                      </Typography>

                      {/* Extrait */}
                      <Typography
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: 13.5,
                          lineHeight: isRtl ? 1.75 : 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {excerpt}
                      </Typography>
                    </Box>

                    {/* Footer / Bouton d'action */}
                    <Box
                      sx={{
                        pt: 2,
                        mt: 2.5,
                        borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(181,55,122,0.08)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: 13,
                        fontWeight: 700,
                        color: BRAND.primary,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <span>{readArticleText}</span>
                      <ArrowForwardIcon
                        sx={{
                          fontSize: 14,
                          transform: isRtl ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* ── Bouton "Voir tous les articles" centré ── */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
          <Button
            component={RouterLink}
            href={`/${locale}/blog`}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  transform: isRtl ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}
              />
            }
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: BRAND.primary,
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'none',
              px: 3,
              py: 1.1,
              borderRadius: 3,
              backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#fff',
              boxShadow: isDark ? 'none' : '0 4px 14px rgba(87,13,63,0.08)',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(181,55,122,0.15)',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: BRAND.primary,
                color: '#FFFFFF',
                borderColor: BRAND.primary,
                transform: 'translateY(-2px)',
                '& .MuiButton-endIcon': {
                  transform: isRtl ? 'translateX(-4px) rotate(180deg)' : 'translateX(4px)',
                },
              },
            }}
          >
            {viewAllText}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeBlogSection