'use client'

import React, { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-scroll'
import HomeHeroDecoration from './home-hero-decoration'

import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import Logo from '@/assets/logo.webp'

// ── ContactModal chargé uniquement quand on en a besoin (au clic) ──
// Évite d'alourdir le bundle initial du Hero.
const ContactModal = dynamic(() => import('../ContactModal'), {
  ssr: false,
})

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

// ── Petites icônes SVG inline (pas de dépendance externe) ──
const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const BulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.79.79 1.23 1.42 1.41 2.5" />
  </svg>
)

const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="M18.4 8.6 12 15l-3-3-4 4" />
  </svg>
)

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const FEATURES = [
  { icon: TargetIcon, label: ['Stratégie', 'sur mesure'] },
  { icon: BulbIcon, label: ['Solutions', 'innovantes'] },
  { icon: ChartIcon, label: ['Résultats', 'mesurables'] },
]

const SERVICES_TEXTS = [
  'Marketing Digital',
  'Design UI/UX',
  'Développement Web & Mobile',
  'Données & Analytique',
  'Solutions E-Commerce',
]

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      // Petit fondu CSS (pas de Framer Motion) pour changer le texte
      setFadeIn(false)
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
        setFadeIn(true)
      }, 200)
      return () => clearTimeout(timeout)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    // ── Le wrapper Framer Motion a été supprimé ──
    // Remplacé par une simple animation CSS d'apparition (voir <style> plus bas),
    // ce qui retire une dépendance JS lourde du chemin critique de rendu.
    <Box className="hero-fade-in">
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-fade-in {
          animation: heroFadeIn 0.5s ease-out both;
        }
        @keyframes textFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
        .service-text-in { animation: textFade 0.2s ease-out both; }
        .service-text-out { animation: textFadeOut 0.2s ease-in both; }
        @keyframes scrollBounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }
        .scroll-indicator {
          animation: scrollBounce 2s ease-in-out infinite;
        }
      `}</style>

      <Stack
        direction="column"
        sx={{
          position: 'relative',
          minHeight: { xs: '100svh', md: '100vh' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          px: { xs: 2.5, sm: 3, md: 10 },
          py: { xs: 6, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
          overflow: 'hidden',
        }}
      >
        {/* ── Décor animé : chargé après le contenu principal, non bloquant ── */}
        <HomeHeroDecoration />

        {/* ── Étiquette service animée ── */}
        <Stack
          direction="row"
          alignItems="center"
          sx={(theme) => ({
            mb: 3,
            width: 'fit-content',
            maxWidth: '100%',
            position: 'relative',
            zIndex: 2,
            px: 2.5,
            py: 1.2,
            borderRadius: 999,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250,200,235,0.14)' : `${BRAND.primaryLight}66`,
            border: theme.palette.mode === 'dark' ? `1px solid ${BRAND.primaryLight}55` : 'none',
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.complex,
            }),
          })}
        >
          <Box sx={{ width: { xs: 26, md: 28 }, height: { xs: 26, md: 28 }, mr: 1.2, flexShrink: 0, position: 'relative' }}>
            {/* ── next/image au lieu de <img> : optimisation auto + lazy loading ── */}
            <Image
              src={Logo}
              alt="Nexsetia"
              fill
              sizes="28px"
              priority
              style={{
                objectFit: 'contain',
                filter: `drop-shadow(0 0 6px ${BRAND.primary}66)`,
              }}
            />
          </Box>

          <Box sx={{ overflow: 'hidden', position: 'relative', minHeight: '1.4em' }}>
            <Typography
              key={currentIndex}
              className={fadeIn ? 'service-text-in' : 'service-text-out'}
              sx={{
                fontSize: { xs: 15, sm: 16, md: 17 },
                fontWeight: '700',
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                color: BRAND.primary,
              }}
            >
              {SERVICES_TEXTS[currentIndex]}
            </Typography>
          </Box>
        </Stack>

        {/* ── Contenu principal ── */}
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: 620 },
            position: 'relative',
            zIndex: 2,
            backgroundColor: { xs: 'rgba(255,255,255,0.75)', md: 'transparent' },
            backdropFilter: { xs: 'blur(6px)', md: 'none' },
            borderRadius: { xs: 4, md: 0 },
            px: { xs: 2.5, md: 0 },
            py: { xs: 3, md: 0 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              mb: 2,
              fontSize: { xs: 32, sm: 40, md: 48, lg: 60 },
              lineHeight: 1.1,
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            Les marques{' '}
            <Box component="span" sx={{ display: 'block' }}>
              qu&apos;on{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                remarque
              </Box>
            </Box>
          </Typography>

          {/* ── Barre décorative dégradée ── */}
          <Box
            sx={{
              width: 90,
              height: 5,
              borderRadius: 999,
              mb: 3,
              mx: { xs: 'auto', md: 0 },
              background: `linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.primaryLight} 100%)`,
            }}
          />

          <Typography
            sx={(theme) => ({
              mb: 2,
              color: theme.palette.mode === 'dark' ? BRAND.primaryLight : BRAND.primaryDark,
              fontWeight: 700,
              lineHeight: 1.4,
              fontSize: { xs: 17, md: 20 },
            })}
          >
            C&apos;est notre signature,
            <br />
            mais surtout votre horizon.
          </Typography>

          <Box
            sx={{
              borderLeft: `3px solid ${BRAND.primary}`,
              pl: 2,
              mb: 3,
              textAlign: 'left',
              mx: { xs: 'auto', md: 0 },
              maxWidth: { xs: 480, md: '100%' },
            }}
          >
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                lineHeight: 1.7,
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              Chez <strong>Nexsetia</strong>, nous sommes convaincus que les meilleures
              stratégies sont celles qui prennent racine dans une parfaite compréhension
              de votre activité.
            </Typography>
          </Box>

          {/* ── Bloc icône + texte ── */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="flex-start"
            sx={{ mb: 4, textAlign: 'left', mx: { xs: 'auto', md: 0 }, maxWidth: { xs: 480, md: '100%' } }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(250,200,235,0.14)' : `${BRAND.primaryLight}55`),
                color: BRAND.primary,
              }}
            >
              <RocketIcon width={22} height={22} />
            </Box>
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                lineHeight: 1.7,
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              C&apos;est ainsi que naissent des <strong>solutions digitales sur mesure</strong>,
              pensées exclusivement pour répondre aux <strong>réalités de votre secteur</strong>.
            </Typography>
          </Stack>

          {/* ── Rangée de 2 boutons : CTA principal + réserver un appel ── */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              alignItems: { xs: 'stretch', sm: 'center' },
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Link to="home-services" offset={-80} spy smooth duration={400} style={{ display: 'block' }}>
              <Button
                fullWidth
                endIcon={<ArrowRightIcon width={18} height={18} />}
                sx={{
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  borderRadius: 3,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: 15, md: 16.5 },
                  color: '#fff',
                  backgroundColor: BRAND.primary,
                  boxShadow: `0 10px 24px ${BRAND.primary}4D`,
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: BRAND.primaryDark,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 14px 28px ${BRAND.primary}66`,
                  },
                }}
              >
                Découvrir nos services
              </Button>
            </Link>

            {/* ── ContactModal n'est monté que si on l'a ouvert au moins une fois ── */}
            {openContact && (
              <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
            )}

            <Button
              onClick={() => setOpenContact(true)}
              startIcon={<PhoneIcon width={18} height={18} />}
              sx={{
                px: { xs: 4, md: 5 },
                py: { xs: 1.4, md: 1.6 },
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 700,
                fontSize: { xs: 15, md: 16.5 },
                color: BRAND.primaryDark,
                backgroundColor: '#fff',
                border: (theme) =>
                  theme.palette.mode === 'dark'
                    ? `1px solid rgba(250,200,235,0.4)`
                    : `1px solid ${BRAND.primaryLight}`,
                boxShadow: '0 6px 16px rgba(30,10,25,0.08)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
                '&:hover': (theme) => ({
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250,200,235,0.12)' : `${BRAND.primaryLight}30`,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(30,10,25,0.12)',
                }),
              }}
            >
              Planifier un échange gratuit
            </Button>
          </Stack>

          {/* ── Rangée de 3 points forts ── */}
          <Stack
            direction="row"
            divider={<Box sx={{ width: '1px', backgroundColor: 'divider' }} />}
            spacing={{ xs: 2.5, md: 4 }}
            sx={{
              mt: 4,
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: 'wrap',
              rowGap: 2,
            }}
          >
            {FEATURES.map(({ icon: Icon, label }) => (
              <Stack key={label.join(' ')} direction="row" spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    color: BRAND.primary,
                    display: 'flex',
                    width: 36,
                    height: 36,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(250,200,235,0.12)' : `${BRAND.primaryLight}40`),
                  }}
                >
                  <Icon width={20} height={20} />
                </Box>
                <Typography
                  sx={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: 'text.primary',
                    textAlign: 'left',
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

        {/* ── Scroll indicator : animation CSS au lieu de Framer Motion ── */}
        <Box
          className="scroll-indicator"
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            zIndex: 3,
            textAlign: 'center',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Link to="home-about" offset={0} spy smooth duration={400} style={{ display: 'block' }}>
            <Box
              component={MouseIcon}
              height={40}
              width={40}
              sx={(theme) => ({ color: theme.palette.text.secondary, mx: 'auto' })}
            />
            <Typography sx={{ color: 'text.disabled', fontWeight: '500', fontSize: 12, mt: 1 }}>
              Défiler pour voir plus
            </Typography>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default memo(HomeHeroContent)