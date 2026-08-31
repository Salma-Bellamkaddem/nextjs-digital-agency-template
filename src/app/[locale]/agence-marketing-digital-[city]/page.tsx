import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import RouterLink from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import LanguageIcon from '@mui/icons-material/Language'

import { TARGET_CITIES } from '@/constants/locations'
import { services } from '@/constants/service'
import { routing } from '@/i18n/routing'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryDeep: '#561244',
  primaryLight: '#FAC8EB',
  heroGradient: 'linear-gradient(135deg, #570D3F 0%, #561244 50%, #B5377A 100%)',
}

interface LocationProps {
  params: Promise<{
    locale: string
    city: string
  }>
}

// Extraction du slug propre (ex: "agence-marketing-digital-casablanca" -> "casablanca")
function parseCitySlug(rawParam: string) {
  const prefix = 'agence-marketing-digital-'
  if (rawParam.startsWith(prefix)) {
    return rawParam.replace(prefix, '')
  }
  return rawParam
}

export async function generateStaticParams() {
  const paramsList: { locale: string; city: string }[] = []

  for (const locale of routing.locales) {
    for (const city of TARGET_CITIES) {
      paramsList.push({
        locale,
        city: `agence-marketing-digital-${city.slug}`,
      })
    }
  }

  return paramsList
}

export async function generateMetadata({ params }: LocationProps): Promise<Metadata> {
  const { locale, city: rawCity } = await params
  const citySlug = parseCitySlug(rawCity)
  const cityData = TARGET_CITIES.find((c) => c.slug === citySlug)

  if (!cityData) return {}

  const t = await getTranslations({ locale })
  const siteUrl = 'https://www.nexsetia.com'
  const currentPath = `/${locale}/agence-marketing-digital-${citySlug}`

  return {
    title: t(cityData.metaTitleKey),
    description: t(cityData.metaDescKey),
    alternates: {
      canonical: `${siteUrl}${currentPath}`,
      languages: {
        fr: `${siteUrl}/fr/agence-marketing-digital-${citySlug}`,
        ar: `${siteUrl}/ar/agence-marketing-digital-${citySlug}`,
        en: `${siteUrl}/en/agence-marketing-digital-${citySlug}`,
        'x-default': `${siteUrl}/fr/agence-marketing-digital-${citySlug}`,
      },
    },
    openGraph: {
      title: t(cityData.metaTitleKey),
      description: t(cityData.metaDescKey),
      url: `${siteUrl}${currentPath}`,
      type: 'website',
    },
  }
}

export default async function LocationCityPage({ params }: LocationProps) {
  const { locale, city: rawCity } = await params
  const citySlug = parseCitySlug(rawCity)
  const cityData = TARGET_CITIES.find((c) => c.slug === citySlug)

  // Si l'URL ne correspond à aucune de vos villes configurées -> 404 propre
  if (!cityData) {
    notFound()
  }

  const t = await getTranslations({ locale })
  const isRtl = locale === 'ar'
  const cityName = t(cityData.nameKey)

  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Nexsetia - Agence Marketing Digital & Web (${cityName})`,
    image: 'https://www.nexsetia.com/logo.webp',
    '@id': `https://www.nexsetia.com/#service-area-${citySlug}`,
    url: `https://www.nexsetia.com/${locale}/agence-marketing-digital-${citySlug}`,
    areaServed: [
      { '@type': 'City', name: cityName },
      { '@type': 'Country', name: 'Morocco' },
    ],
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: t(cityData.regionKey),
    },
  }

  const priorityServicesData = services.filter((s) =>
    cityData.priorityServices.includes(s.slug)
  )

  return (
    <Box sx={{ minHeight: '100vh', direction: isRtl ? 'rtl' : 'ltr', pb: 12, bgcolor: '#FDFAFC' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          background: BRAND.heroGradient,
          color: '#FFFFFF',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          clipPath: { md: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)', xs: 'none' },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ maxWidth: 820, textAlign: isRtl ? 'right' : 'left' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: '2rem',
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                width: 'fit-content',
              }}
            >
              <LanguageIcon sx={{ fontSize: 16, color: BRAND.primaryLight }} />
              <Typography
                sx={{
                  color: BRAND.primaryLight,
                  fontWeight: 800,
                  fontSize: 12,
                  textTransform: 'uppercase',
                }}
              >
                {t('Locations.badge')}
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 28, sm: 38, md: 46 },
                fontWeight: 900,
                lineHeight: isRtl ? 1.35 : 1.2,
              }}
            >
              {t(cityData.heroTaglineKey)}
            </Typography>

            <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
              {t(cityData.contextTextKey)}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
            >
              <Button
                component={RouterLink}
                href={`/${locale}#recrutement`}
                sx={{
                  backgroundColor: BRAND.primary,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: 14,
                  textTransform: 'none',
                  px: 4,
                  py: 1.4,
                  borderRadius: '2rem',
                  boxShadow: `0 8px 24px ${BRAND.primaryDark}66`,
                  '&:hover': { backgroundColor: BRAND.primaryDeep },
                }}
              >
                {t('Locations.ctaText')} {cityName}
              </Button>

              <Button
                component={RouterLink}
                href={`/${locale}#home-services`}
                sx={{
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'none',
                  px: 3.5,
                  py: 1.4,
                  borderRadius: '2rem',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {t('Locations.deliveryMode')}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Services Clés */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 } }}>
        <Box sx={{ mb: 6, textAlign: isRtl ? 'right' : 'left' }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 22, sm: 30 },
              fontWeight: 800,
              color: BRAND.primaryDark,
              mb: 1.5,
            }}
          >
            {t('Locations.servicesTitle')} {cityName}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {priorityServicesData.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
              <Card
                component={RouterLink}
                href={`/${locale}/services/${service.slug}`}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 3,
                  textDecoration: 'none',
                  border: `1px solid ${BRAND.primaryLight}55`,
                  boxShadow: '0 8px 24px rgba(181, 55, 122, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  textAlign: isRtl ? 'right' : 'left',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: BRAND.primary,
                    boxShadow: '0 14px 30px rgba(181, 55, 122, 0.18)',
                  },
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 17, fontWeight: 800, color: BRAND.primaryDark, mb: 1 }}>
                    {t(service.titleKey)}
                  </Typography>
                  <Typography sx={{ fontSize: 13.5, color: '#4B5563', lineHeight: 1.6 }}>
                    {t(service.descriptionKey)}
                  </Typography>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 700, color: BRAND.primary }}>
                    {t(service.ctaLabelKey)} →
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}