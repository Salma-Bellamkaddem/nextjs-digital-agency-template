'use client'

import React, { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-scroll'

import HomeHeroDecoration from './home-hero-decoration'

import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import Logo from '@/assets/logo.webp'

const ContactModal = dynamic(() => import('../ContactModal'), {
  ssr: false,
})

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const BulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.79.79 1.23 1.42 1.41 2.5" />
  </svg>
)

const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 3v18h18" />
    <path d="M18.4 8.6 12 15l-3-3-4 4" />
  </svg>
)

const ArrowRightIcon = ({ isRtl, ...props }: React.SVGProps<SVGSVGElement> & { isRtl?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const HomeHeroContent = () => {
  const t = useTranslations('Home.hero')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)
  const [openContact, setOpenContact] = useState(false)

  const SERVICES_TEXTS = [
    t('services.digitalMarketing'),
    t('services.uiuxDesign'),
    t('services.webMobileDevelopment'),
    t('services.dataAnalytics'),
    t('services.ecommerce'),
  ]

  const FEATURES = [
    {
      icon: TargetIcon,
      label: [t('features.strategy.line1'), t('features.strategy.line2')],
    },
    {
      icon: BulbIcon,
      label: [t('features.solutions.line1'), t('features.solutions.line2')],
    },
    {
      icon: ChartIcon,
      label: [t('features.results.line1'), t('features.results.line2')],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
        setFadeIn(true)
      }, 200)
      return () => clearTimeout(timeout)
    }, 3000)

    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <Box className="hero-fade-in" sx={{ width: '100%', position: 'relative' }}>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.01); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-fade-in {
          animation: heroFadeIn 0.5s ease-out both;
        }
        @keyframes textFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-4px); }
        }
        .service-text-in { animation: textFade 0.2s ease-out both; }
        .service-text-out { animation: textFadeOut 0.2s ease-in both; }

        @keyframes scrollBounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
        .scroll-indicator { animation: scrollBounce 2s ease-in-out infinite; }
      `}</style>

      <Stack
        direction="column"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          px: { xs: 2.5, sm: 4, md: 8, lg: 12 },
          // Marge haute augmentée pour dégager l'espace sous l'AppBar fixe
          pt: { xs: 14, sm: 16, md: 15, lg: 16 },
          pb: { xs: 8, md: 6 },
          textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
          overflow: 'hidden',
        }}
      >
        {/* Décors */}
        <HomeHeroDecoration isRtl={isRtl} />

        {/* ── 1. Badge Service Tournant ── */}
        <Stack
          direction="row"
          alignItems="center"
          sx={(theme) => ({
            mb: { xs: 2, md: 2.5 },
            width: 'fit-content',
            maxWidth: '100%',
            position: 'relative',
            zIndex: 2,
            px: 2,
            py: 0.75,
            borderRadius: 999,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(250,200,235,0.14)'
                : `${BRAND.primaryLight}55`,
            border:
              theme.palette.mode === 'dark'
                ? `1px solid ${BRAND.primaryLight}44`
                : '1px solid transparent',
          })}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              marginInlineEnd: 1,
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <Image
              src={Logo}
              alt="Nexsetia"
              fill
              sizes="20px"
              priority
              style={{
                objectFit: 'contain',
                filter: `drop-shadow(0 0 6px ${BRAND.primary}66)`,
              }}
            />
          </Box>

          <Box sx={{ overflow: 'hidden', position: 'relative', minHeight: '1.3em' }}>
            <Typography
              key={currentIndex}
              className={fadeIn ? 'service-text-in' : 'service-text-out'}
              sx={{
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 700,
                color: BRAND.primary,
                whiteSpace: 'nowrap',
              }}
            >
              {SERVICES_TEXTS[currentIndex]}
            </Typography>
          </Box>
        </Stack>

        {/* ── 2. Contenu Principal ── */}
        <Box
          sx={{
            textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
            maxWidth: { xs: '100%', md: 620, lg: 680 },
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Titre Principal H1 Optimisé & Calibré */}
          <Typography
            component="h1"
            sx={{
              mb: 1.5,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.6rem', lg: '2.85rem' },
              lineHeight: { xs: 1.25, md: 1.18 },
              fontWeight: 900,
              color: 'text.primary',
              letterSpacing: '-0.02em',
            }}
          >
            {t('title.line1')}{' '}
            <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
              {t('title.line2')}{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('title.highlight')}
              </Box>
            </Box>
          </Typography>

          {/* Barre décorative */}
          <Box
            sx={{
              width: 70,
              height: 3.5,
              borderRadius: 999,
              mb: 2,
              mx: { xs: 'auto', md: isRtl ? '0 0 0 auto' : '0 auto 0 0' },
              background: `linear-gradient(${isRtl ? '270deg' : '90deg'}, ${BRAND.primary} 0%, ${BRAND.primaryLight} 100%)`,
            }}
          />

          {/* Sous-titre (Signature) */}
          <Typography
            sx={(theme) => ({
              mb: 2,
              color:
                theme.palette.mode === 'dark'
                  ? BRAND.primaryLight
                  : BRAND.primaryDark,
              fontWeight: 700,
              lineHeight: isRtl ? 1.5 : 1.4,
              fontSize: { xs: 14.5, md: 16.5 },
            })}
          >
            {t('subtitle.line1')} <br />
            {t('subtitle.line2')}
          </Typography>

          {/* Description */}
          <Box
            sx={{
              borderInlineStart: `3px solid ${BRAND.primary}`,
              paddingInlineStart: 2,
              mb: 2.5,
              textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
              mx: { xs: 'auto', md: 0 },
              maxWidth: { xs: 480, md: '100%' },
            }}
          >
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                lineHeight: isRtl ? 1.7 : 1.55,
                fontSize: { xs: 13.5, sm: 14.5 },
              }}
            >
              {t('description.part1')} <strong>Nexsetia</strong> {t('description.part2')}
            </Typography>
          </Box>

          {/* Bloc Solution */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              mb: 3,
              textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
              mx: { xs: 'auto', md: 0 },
              maxWidth: { xs: 480, md: '100%' },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: 38,
                height: 38,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'rgba(250,200,235,0.14)'
                    : `${BRAND.primaryLight}55`,
                color: BRAND.primary,
              }}
            >
              <RocketIcon width={20} height={20} />
            </Box>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                lineHeight: isRtl ? 1.7 : 1.55,
                fontSize: { xs: 13.5, sm: 14 },
              }}
            >
              {t('solution.part1')} <strong>{t('solution.highlight1')}</strong>{' '}
              {t('solution.part2')} <strong>{t('solution.highlight2')}</strong>.
            </Typography>
          </Stack>

          {/* Boutons d'action */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
              alignItems: { xs: 'stretch', sm: 'center' },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Link
              to="home-services"
              offset={-80}
              spy
              smooth
              duration={400}
              style={{ display: 'block' }}
            >
              <Button
                fullWidth
                endIcon={<ArrowRightIcon width={18} height={18} isRtl={isRtl} />}
                sx={{
                  px: { xs: 3, md: 3.5 },
                  py: 1.1,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: 14, md: 15 },
                  color: '#fff',
                  backgroundColor: BRAND.primary,
                  boxShadow: `0 6px 18px ${BRAND.primary}4D`,
                  '&:hover': {
                    backgroundColor: BRAND.primaryDark,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {t('buttons.services')}
              </Button>
            </Link>

            <Button
              onClick={() => setOpenContact(true)}
              startIcon={<PhoneIcon width={18} height={18} />}
              sx={{
                px: { xs: 3, md: 3.5 },
                py: 1.1,
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: { xs: 14, md: 15 },
                color: BRAND.primaryDark,
                backgroundColor: '#fff',
                border: (theme) =>
                  theme.palette.mode === 'dark'
                    ? `1px solid rgba(250,200,235,0.4)`
                    : `1px solid ${BRAND.primaryLight}`,
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('buttons.contact')}
            </Button>

            {openContact && (
              <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
            )}
          </Stack>

          {/* Badges Features */}
          <Stack
            direction="row"
            divider={<Box sx={{ width: '1px', backgroundColor: 'divider', my: 0.5 }} />}
            spacing={{ xs: 1.5, md: 2.5 }}
            sx={{
              mt: 3,
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: 'wrap',
              rowGap: 1.5,
            }}
          >
            {FEATURES.map(({ icon: Icon, label }) => (
              <Stack
                key={label.join(' ')}
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Box
                  sx={{
                    color: BRAND.primary,
                    display: 'flex',
                    width: 32,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(250,200,235,0.12)'
                        : `${BRAND.primaryLight}40`,
                  }}
                >
                  <Icon width={16} height={16} />
                </Box>
                <Typography
                  sx={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: 'text.primary',
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                >
                  {label[0]}
                  <br />
                  {label[1]}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Scroll Indicator */}
        <Box
          className="scroll-indicator"
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            zIndex: 3,
            textAlign: 'center',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Link to="home-about" offset={0} spy smooth duration={400}>
            <Box
              component={MouseIcon}
              height={30}
              width={30}
              sx={(theme) => ({ color: theme.palette.text.secondary, mx: 'auto' })}
            />
            <Typography
              sx={{ color: 'text.disabled', fontWeight: 500, fontSize: 11, mt: 0.5 }}
            >
              {t('scroll')}
            </Typography>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default memo(HomeHeroContent)