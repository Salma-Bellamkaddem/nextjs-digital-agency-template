'use client'

import React, { FC, useState } from 'react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  useTheme,
  Grid,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import Logo from '@/assets/logo.webp'
import ContactModal from '@/app/_components/ContactModal'
import { companyMenus } from '@/constants/menus'
import { services } from '@/constants/service'
import { TARGET_CITIES } from '@/constants/locations'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/nexsetia/?viewAsMember=true',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 8.9a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.52c0-2.42-1.29-3.55-3.02-3.55-1.39 0-2.01.77-2.36 1.3v-1.1h-2.66c.04.75 0 8.24 0 8.24h2.66v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.44-1.03 1.02 0 1.43.78 1.43 1.92v4.39h2.66z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/nexsetia.agency/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@nexsetia',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.16v13.44a2.6 2.6 0 1 1-1.83-2.48V9.9a5.76 5.76 0 1 0 4.99 5.71c0-.03 0-.06 0-.09V9.4a7.9 7.9 0 0 0 4.4 1.34V7.58a4.85 4.85 0 0 1-3-1.76z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/people/Nexsetia/61590831196216/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path d="M12 2C6.49 2 2 6.49 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.51-4.49-10-10-10z" />
      </svg>
    ),
  },
]

const Footer: FC = () => {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navigation')
  const tGlobal = useTranslations()
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const [contactOpen, setContactOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  const displayedServices = services.slice(0, 6)

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: isDark ? '#11030D' : '#3D072B',
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 5 },
        overflow: 'hidden',
        textAlign: isRtl ? 'right' : 'left',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          {/* Colonne 1 : Marque & Présentation */}
          <Grid item xs={12} md={4.5}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                flexDirection: 'row',
                direction: 'ltr',
                gap: 1.5,
                mb: 2,
              }}
            >
              <Box sx={{ position: 'relative', width: 32, height: 32, flexShrink: 0 }}>
                <Image
                  src={Logo}
                  alt="Nexsetia"
                  fill
                  sizes="32px"
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                }}
              >
                NEXSE<Box component="span" sx={{ color: BRAND.primary }}>TIA</Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 20, md: 24 },
                lineHeight: isRtl ? 1.4 : 1.25,
                mb: 1.5,
                color: BRAND.primaryLight,
              }}
            >
              {t('tagline.line1')} <br /> {t('tagline.line2')}
            </Typography>

            <Typography
              sx={{
                fontSize: 13.5,
                lineHeight: isRtl ? 1.85 : 1.6,
                color: 'rgba(255, 255, 255, 0.72)',
                mb: 3,
                maxWidth: 380,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {t('description')}
            </Typography>

            <Box>
              <Button
                onClick={() => setContactOpen(true)}
                sx={{
                  px: 3,
                  py: 1.1,
                  borderRadius: '2rem',
                  fontSize: 13.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  color: '#FFFFFF',
                  background: `linear-gradient(135deg, ${BRAND.primary} 0%, #D84E97 100%)`,
                  boxShadow: `0 4px 16px ${alpha(BRAND.primary, 0.4)}`,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${alpha(BRAND.primary, 0.6)}`,
                    filter: 'brightness(1.05)',
                  },
                }}
              >
                {t('cta')}
              </Button>
            </Box>
          </Grid>

          {/* Colonne 2 : Services */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: BRAND.primaryLight,
                mb: 2,
              }}
            >
              {t('columns.services')}
            </Typography>

            <Stack spacing={1.2}>
              {displayedServices.map((item) => {
                const serviceTitle = item.titleKey
                  ? tGlobal(item.titleKey)
                  : (item as any).title || ''

                return (
                  <RouterLink
                    key={item.slug}
                    href={`/${locale}/services/${item.slug}`}
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.72)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'block',
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        '&:hover': {
                          color: BRAND.primaryLight,
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {serviceTitle}
                    </Box>
                  </RouterLink>
                )
              })}
            </Stack>
          </Grid>

          {/* Colonne 3 : Navigation Société */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: BRAND.primaryLight,
                mb: 2,
              }}
            >
              {t('columns.company')}
            </Typography>

            <Stack spacing={1.2}>
              {companyMenus.map((item, idx) => (
                <RouterLink
                  key={idx}
                  href={`/${locale}${item.path.replace(/^\/(fr|ar|en)/, '')}`}
                  style={{
                    fontSize: '13.5px',
                    color: 'rgba(255, 255, 255, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'block',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      '&:hover': {
                        color: BRAND.primaryLight,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {tNav(item.labelKey.replace('Navigation.', ''))}
                  </Box>
                </RouterLink>
              ))}
            </Stack>
          </Grid>

          {/* Colonne 4 : Contact Info */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: BRAND.primaryLight,
                mb: 2,
              }}
            >
              {t('columns.contact')}
            </Typography>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailOutlinedIcon sx={{ fontSize: 18, color: BRAND.primaryLight, flexShrink: 0 }} />
                <Box
                  component="a"
                  href="mailto:nexsetia@gmail.com"
                  sx={{
                    fontSize: 13.5,
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    direction: 'ltr',
                    '&:hover': { color: BRAND.primaryLight },
                  }}
                >
                  nexsetia@gmail.com
                </Box>
              </Stack>

              <Stack direction="row" spacing={1.2} alignItems="center">
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: BRAND.primaryLight, flexShrink: 0 }} />
                <Box
                  component="a"
                  href="tel:+212600000000"
                  sx={{
                    fontSize: 13.5,
                    color: 'rgba(255, 255, 255, 0.75)',
                    textDecoration: 'none',
                    direction: 'ltr',
                    '&:hover': { color: BRAND.primaryLight },
                  }}
                >
                  +212 6 00 00 00 00
                </Box>
              </Stack>

              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 19, color: BRAND.primaryLight, mt: 0.2, flexShrink: 0 }}
                />
                <Box>
                  <Typography sx={{ fontSize: 13.5, color: 'rgba(255, 255, 255, 0.75)' }}>
                    {t('contact.location')}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.5)' }}>
                    {t('contact.subLocation')}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* ── Liens SEO Locaux (Casablanca, Rabat, Marrakech) ── */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          sx={{
            mt: 4,
            pt: 2.5,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            justifyContent: isRtl ? 'flex-start' : 'flex-start',
          }}
        >
          {TARGET_CITIES.map((city) => (
            <RouterLink
              key={city.slug}
              href={`/${locale}/agence-marketing-digital-${city.slug}`}
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
              }}
            >
              <Box
                component="span"
                sx={{
                  transition: 'color 0.2s ease',
                  '&:hover': { color: BRAND.primaryLight, textDecoration: 'underline' },
                }}
              >
                Nexsetia {tGlobal(city.nameKey)}
              </Box>
            </RouterLink>
          ))}
        </Stack>

        {/* Ligne de séparation */}
        <Box
          sx={{
            height: 1,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            my: { xs: 4, md: 5 },
          }}
        />

        {/* Bas de page : Copyright, Mentions & Réseaux Sociaux */}
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            alignItems="center"
          >
            <Typography sx={{ fontSize: 12.5, color: 'rgba(255, 255, 255, 0.5)' }}>
              © {currentYear} Nexsetia. {t('rights')}
            </Typography>

            <Box
              component="a"
              href={`/${locale}/mentions-legales`}
              sx={{
                fontSize: 12.5,
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                '&:hover': { color: BRAND.primaryLight },
              }}
            >
              {t('legal.mentions')}
            </Box>

            <Box
              component="a"
              href={`/${locale}/politique-de-confidentialite`}
              sx={{
                fontSize: 12.5,
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                '&:hover': { color: BRAND.primaryLight },
              }}
            >
              {t('legal.privacy')}
            </Box>
          </Stack>

          {/* Réseaux Sociaux */}
          <Stack direction="row" spacing={1}>
            {SOCIAL_LINKS.map((item) => (
              <Box
                key={item.name}
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: BRAND.primaryDark,
                  backgroundColor: '#FFFFFF',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: BRAND.primary,
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.icon}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

export default Footer