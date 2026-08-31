'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

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
  const t = useTranslations('HomeBlog')
  const tGlobal = useTranslations()
  const locale = useLocale()
  const isRtl = locale === 'ar'

  // Afficher les 3 derniers articles
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <Box
      component="section"
      id="home-blog"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
    >
      <Container maxWidth="lg">
        {/* ── En-tête de section ── */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: { xs: 5, md: 7 }, textAlign: isRtl ? 'right' : 'left' }}
        >
          <Box sx={{ maxWidth: 600 }}>
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
              {t('badge')}
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, sm: 34, md: 40 },
                fontWeight: 900,
                color: BRAND.primaryDark,
                lineHeight: isRtl ? 1.35 : 1.2,
              }}
            >
              {t('title')}
            </Typography>
          </Box>

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
              color: BRAND.primary,
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'none',
              px: 0,
              '&:hover': {
                bgcolor: 'transparent',
                color: BRAND.primaryDark,
                '& .MuiButton-endIcon': {
                  transform: isRtl ? 'translateX(-4px) rotate(180deg)' : 'translateX(4px)',
                },
              },
            }}
          >
            {t('viewAll')}
          </Button>
        </Stack>

        {/* ── Grille des articles résumés ── */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {latestPosts.map((post) => {
            const title = tGlobal(post.titleKey)
            const excerpt = post.sections?.[0]?.paragraphsKeys?.[0]
              ? tGlobal(post.sections[0].paragraphsKeys[0])
              : title
            const tag = post.tagsKeys?.[0] ? tGlobal(post.tagsKeys[0]) : ''

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <Card
                  component={RouterLink}
                  href={`/${locale}/blog/${post.slug}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    borderRadius: 3.5,
                    textDecoration: 'none',
                    bgcolor: '#FDFAFC',
                    border: '1px solid',
                    borderColor: 'rgba(181, 55, 122, 0.12)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: BRAND.primaryLight,
                      boxShadow: '0 16px 36px rgba(181, 55, 122, 0.12)',
                      '& .blog-card-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .blog-card-title': {
                        color: BRAND.primary,
                      },
                    },
                  }}
                >
                  {/* Miniature Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 200,
                      overflow: 'hidden',
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

                  {/* Contenu textuel */}
                  <CardContent
                    sx={{
                      p: 3,
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
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontWeight: 800,
                            color: BRAND.primary,
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                          }}
                        >
                          {tag}
                        </Typography>

                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: '#6B7280' }}>
                          <AccessTimeIcon sx={{ fontSize: 13 }} />
                          <Typography sx={{ fontSize: 11.5, fontWeight: 500 }}>
                            {post.readingTime}
                          </Typography>
                        </Stack>
                      </Stack>

                      {/* Titre */}
                      <Typography
                        className="blog-card-title"
                        sx={{
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          lineHeight: isRtl ? 1.45 : 1.35,
                          color: BRAND.primaryDark,
                          mb: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {title}
                      </Typography>

                      {/* Résumé court */}
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          color: '#4B5563',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {excerpt}
                      </Typography>
                    </Box>

                    {/* Lien "Lire l'article" */}
                    <Box
                      sx={{
                        pt: 2.5,
                        mt: 2,
                        borderTop: '1px solid rgba(181, 55, 122, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: BRAND.primary,
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                      }}
                    >
                      {t('readArticle')}
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
      </Container>
    </Box>
  )
}

export default HomeBlogSection