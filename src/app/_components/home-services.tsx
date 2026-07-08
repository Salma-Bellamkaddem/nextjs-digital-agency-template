'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // Utilisation du routeur App Router standard
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { services } from '@/constants/service'
import { AppConfig } from '@/configs'
import ContactModal from './ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primarySoft: '#FEDDF6',
  primaryLight: '#f8e8f3',
}

const CTA_VARIANTS: ('pink' | 'dark')[] = ['pink', 'pink', 'dark', 'dark', 'pink', 'dark']

const ctaGradient = (variant: 'pink' | 'dark') =>
  variant === 'pink'
    ? `linear-gradient(90deg, ${BRAND.primary} 0%, #E0508F 100%)`
    : `linear-gradient(90deg, ${BRAND.primaryDark} 0%, #2A0619 100%)`

type ServiceItemProps = { item: IService; index: number }

const HomeServiceItem = ({ item, index }: ServiceItemProps) => {
  const router = useRouter()
  const [openContact, setOpenContact] = React.useState(false)
  const [showAll, setShowAll] = React.useState(false)
  
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'
  const variant = CTA_VARIANTS[index % CTA_VARIANTS.length]
  const number = String(index + 1).padStart(2, '0')

  // Validation stricte du tableau pour TypeScript
  const subServicesArray = item.subServices || []
  const hasSubServices = subServicesArray.length > 0
  
  // Sélection des sous-services à afficher
  const visibleSubServices = showAll ? subServicesArray : subServicesArray.slice(0, 3)
  const remainingCount = Math.max(0, subServicesArray.length - 3)

  const handleCardClick = () => {
    router.push(`/services/${item.slug}`)
  }

  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Box
        onClick={handleCardClick}
        sx={{
          position: 'relative',
          borderRadius: 4,
          px: { xs: 3.5, md: 4 },
          py: { xs: 4, md: 4.5 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: isDark ? '#1f0a16' : '#fff',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.35)' : '0 10px 30px rgba(181,55,122,0.08)',
          border: isDark ? `1px solid ${BRAND.primaryDark}` : '1px solid rgba(181,55,122,0.1)',
          animation: 'fadeUp 0.6s ease both',
          animationDelay: `${index * 0.1}s`,
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          cursor: 'pointer',
          transition: 'all 0.35s ease',
          '&:hover': {
            boxShadow: `0 20px 50px ${BRAND.primary}25`,
            transform: 'translateY(-8px)',
            border: `1px solid ${BRAND.primary}40`,
          },
        }}
      >
        {/* En-tête : icône + numéro filigrane */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5 }}>
          <Box
            sx={{
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDark ? `${BRAND.primary}20` : BRAND.primarySoft,
              flexShrink: 0,
            }}
          >
            <Image
              src={item.image || '/icons/mobile-app.png'}
              alt={item.title}
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: 36, md: 46 },
              fontWeight: 800,
              lineHeight: 1,
              color: isDark ? `${BRAND.primary}22` : `${BRAND.primary}14`,
              userSelect: 'none',
            }}
          >
            {number}
          </Typography>
        </Box>

        {/* Titre du service */}
        <Typography
          component='h3'
          sx={{
            fontSize: { xs: 18, md: 22 },
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.4,
            color: isDark ? '#fff' : '#111122',
          }}
        >
          {item.title}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: 44,
            height: 4,
            borderRadius: 1,
            backgroundColor: BRAND.primary,
            mb: 3,
          }}
        />

        {/* Liste dynamique des sous-services */}
        {hasSubServices && (
          <Box
            component='ul'
            sx={{
              m: 0,
              pl: 0,
              listStyle: 'none',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              mb: 4,
            }}
          >
            {visibleSubServices.map((sub: string) => (
              <Box
                component='li'
                key={sub}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  fontSize: { xs: 14, md: 15 },
                  color: isDark ? 'rgba(255,255,255,0.85)' : '#374151',
                  lineHeight: 1.6,
                  animation: 'fadeIn 0.25s ease both',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateY(-4px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: 19,
                    color: BRAND.primary,
                    flexShrink: 0,
                    mt: '2px',
                  }}
                />
                {sub}
              </Box>
            ))}

            {/* Bouton de déploiement */}
            {remainingCount > 0 && (
              <Box
                component='span'
                onClick={(e) => {
                  e.stopPropagation() // Bloque la redirection de la carte parent
                  setShowAll(!showAll)
                }}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 700,
                  color: BRAND.primary,
                  cursor: 'pointer',
                  mt: 1,
                  width: 'fit-content',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {showAll ? 'Voir moins ▲' : `+ ${remainingCount} autres services (Voir plus ▼)`}
              </Box>
            )}
          </Box>
        )}

        {/* CTA principal */}
        <Box
          onClick={(e) => {
            e.stopPropagation() // Bloque la redirection pour ouvrir la modal de contact
            setOpenContact(true)
          }}
          sx={{
            mt: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            px: 3,
            py: 1.7,
            borderRadius: 3.5,
            background: ctaGradient(variant),
            color: '#fff',
            fontWeight: 800,
            fontSize: { xs: 14, md: 15 },
            letterSpacing: '0.3px',
            cursor: 'pointer',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            boxShadow: `0 8px 24px ${variant === 'pink' ? BRAND.primary : BRAND.primaryDark}40`,
            '& svg': { transition: 'transform 0.25s ease', fontSize: 20 },
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: `0 12px 28px ${variant === 'pink' ? BRAND.primary : BRAND.primaryDark}60`,
            },
            '&:hover svg': { transform: 'translateX(5px)' },
          }}
        >
          {item.ctaLabel ?? 'Découvrir'}
          <ArrowForwardIcon />
        </Box>
      </Box>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </Grid>
  )
}

const HomeServices = () => {
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'

  return (
    <Box
      id='home-services'
      component='section'
      sx={{
        width: '100%',
        pt: { xs: 10, md: 16 },
        pb: { xs: 10, md: 16 },
        background: isDark
          ? 'linear-gradient(160deg, #1a0612 0%, #2d0f22 100%)'
          : 'linear-gradient(160deg, #fdf0f8 0%, #f9e4f3 40%, #fce8f5 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND.primary}12 0%, transparent 70%)`,
          pointerEvents: 'none',
         },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND.primary}10 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>

        {/* En-tête de section */}
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems='center' sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 2.5,
                animation: 'fadeDown 0.7s ease both',
                '@keyframes fadeDown': {
                  from: { opacity: 0, transform: 'translateY(-20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: BRAND.primary,
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.5, transform: 'scale(0.8)' },
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: 13,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: BRAND.primary,
                }}
              >
                Nos Services
              </Typography>
            </Box>

            <Typography
              component='h2'
              sx={{
                mb: 3,
                lineHeight: 1.2,
                fontWeight: 900,
                fontSize: { xs: 32, sm: 42, md: 52 },
                color: isDark ? '#fff' : '#1a1a2e',
                letterSpacing: '-1px',
              }}
            >
              Bâtissez une{' '}
              <Box component='span' sx={{ color: BRAND.primary }}>
                croissance durable
              </Box>
              , portée par le digital.
            </Typography>

            <Typography
              sx={{
                color: isDark ? 'rgba(255,255,255,0.7)' : '#4b5563',
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.8,
                maxWidth: 560,
              }}
            >
              Nous vous offrons une large gamme de services couvrant les différentes facettes
              du marketing digital, afin de{' '}
              <Box component='span' sx={{ fontWeight: 700, color: isDark ? '#fff' : '#1a1a2e' }}>
                répondre avec justesse aux besoins
              </Box>{' '}
              de votre entreprise, quels que soient vos objectifs, vos ambitions ou votre stade
              de développement.
            </Typography>
          </Grid>

          {/* Illustration décorative */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'relative', height: 340 }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  right: '-10%',
                  width: 340,
                  height: 340,
                  borderRadius: '50%',
                  background: `conic-gradient(from 200deg, ${BRAND.primary}, ${BRAND.primaryLight}, #fff 60%, ${BRAND.primary})`,
                  filter: 'blur(0.5px)',
                  opacity: 0.9,
                  WebkitMaskImage:
                    'radial-gradient(circle, transparent 38%, black 40%, black 62%, transparent 64%)',
                  maskImage:
                    'radial-gradient(circle, transparent 38%, black 40%, black 62%, transparent 64%)',
                  animation: 'spin 18s linear infinite',
                  '@keyframes spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                  },
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '18%',
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(181,55,122,0.25)',
                  animation: 'floatA 4s ease-in-out infinite',
                }}
              >
                <TrendingUpIcon sx={{ color: BRAND.primary, fontSize: 30 }} />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  top: '18%',
                  right: 0,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(181,55,122,0.25)',
                  animation: 'floatB 5s ease-in-out infinite',
                }}
              >
                <GroupIcon sx={{ color: BRAND.primary, fontSize: 26 }} />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  right: '14%',
                  width: 66,
                  height: 66,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(181,55,122,0.25)',
                  animation: 'floatC 4.5s ease-in-out infinite',
                }}
              >
                <GpsFixedIcon sx={{ color: BRAND.primary, fontSize: 28 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Grille des cartes de services */}
        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
          {services.map((item, index) => (
            <HomeServiceItem item={item} key={item.id} index={index} />
          ))}
        </Grid>

        {/* Footer de section */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#9ca3af', fontSize: { xs: 13, md: 14 } }}>
            Depuis sa création en 2026,{' '}
            <Box component='span' sx={{ color: BRAND.primary, fontWeight: 600 }}>
              {AppConfig.appName}
            </Box>{' '}
            accompagne les entreprises dans leur marketing digital.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeServices