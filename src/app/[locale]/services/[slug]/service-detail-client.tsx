'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { alpha, useTheme } from '@mui/material/styles'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { services, IService } from '@/constants/service'
import ContactModal from '@/app/_components/ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

const SERVICE_IMAGES: Record<string, string> = {
  'etudes-marche': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'analyse-donnees': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'acquisition': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'social-media': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
  'branding': 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
  'dev': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'startups-mvp': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
  'ai-automation': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  'enterprise-apps': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
}

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const t = useTranslations('ServiceDetail')
  const tGlobal = useTranslations()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const [openContact, setOpenContact] = useState(false)
  const currentService = services.find((s) => s.slug === slug) as IService

  const title = tGlobal(currentService.titleKey)
  const description = tGlobal(currentService.longDescriptionKey || currentService.descriptionKey)
  const subServices = currentService.subServicesKeys.map((k) => tGlobal(k))
  const coverImage = SERVICE_IMAGES[currentService.slug] || SERVICE_IMAGES['acquisition']

  function setContactOpen(arg0: boolean): void {
    throw new Error('Function not implemented.')
  }

  return (
    <Box
      sx={{
        bgcolor: isDark ? '#0D020B' : '#FAF4F8',
        minHeight: '100vh',
        pt: { xs: 12, md: 15 },
        pb: 12,
        direction: isRtl ? 'rtl' : 'ltr',
        textAlign: isRtl ? 'right' : 'left',
      }}
    >
      <Container maxWidth="md">
        <Button
          component={RouterLink}
          href={`/${locale}#home-services`}
          startIcon={<ArrowBackIcon sx={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />}
          sx={{
            color: isDark ? '#FFFFFF' : '#1A1A2E',
            fontWeight: 700,
            mb: 3,
            textTransform: 'none',
            fontSize: '0.9rem',
            '&:hover': { color: BRAND.primary },
          }}
        >
          {t('back')}
        </Button>

        <Box
          sx={{
            backgroundColor: isDark ? '#190616' : '#FFFFFF',
            borderRadius: 5,
            overflow: 'hidden',
            boxShadow: isDark
              ? '0 16px 45px rgba(0,0,0,0.55)'
              : '0 16px 45px rgba(181,55,122,0.08)',
            border: '1px solid',
            borderColor: isDark ? alpha(BRAND.primary, 0.25) : alpha(BRAND.primary, 0.1),
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: { xs: 220, sm: 340, md: 380 } }}>
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 850px"
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to bottom, transparent 45%, ${
                  isDark ? '#190616' : '#FFFFFF'
                } 100%)`,
              }}
            />
          </Box>

          <Box sx={{ p: { xs: 3, sm: 4.5, md: 6 }, pt: 0 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 24, sm: 32, md: 38 },
                fontWeight: 900,
                lineHeight: isRtl ? 1.4 : 1.25,
                color: isDark ? '#FFFFFF' : '#1A1A2E',
                mb: 2.5,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: isRtl ? 1.85 : 1.7,
                color: isDark ? 'rgba(255,255,255,0.72)' : '#4B5563',
                mb: 4,
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                width: '100%',
                height: '1px',
                bgcolor: isDark ? alpha(BRAND.primaryLight, 0.12) : alpha(BRAND.primary, 0.08),
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 800,
                mb: 2.5,
                color: BRAND.primary,
              }}
            >
              {t('featuresTitle')}
            </Typography>

            <Stack spacing={1.6} sx={{ mb: 5 }}>
              {subServices.map((sub: string, idx: number) => (
                <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                  <CheckCircleIcon
                    sx={{
                      color: BRAND.primary,
                      fontSize: 20,
                      flexShrink: 0,
                      mt: '2px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: 14, md: 15.5 },
                      color: isDark ? 'rgba(255,255,255,0.85)' : '#374151',
                      lineHeight: 1.5,
                    }}
                  >
                    {sub}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: { xs: 'stretch', sm: 'center' }, mt: 4 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />}
                onClick={() => setOpenContact(true)}
                sx={{
                  background: `linear-gradient(135deg, ${BRAND.primary} 0%, #D84E97 100%)`,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  px: { xs: 3, sm: 5 },
                  py: 1.5,
                  borderRadius: '2rem',
                  textTransform: 'none',
                  fontSize: { xs: 14, md: 15 },
                  boxShadow: `0 8px 24px ${alpha(BRAND.primary, 0.4)}`,
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 28px ${alpha(BRAND.primary, 0.55)}`,
                    filter: 'brightness(1.05)',
                  },
                }}
              >
                {t('cta')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <ContactModal open={openContact} onClose={() => setContactOpen(false)} />
    </Box>
  )
}