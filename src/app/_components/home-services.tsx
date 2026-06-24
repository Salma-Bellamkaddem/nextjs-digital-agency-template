'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { services } from '@/constants/service'
import { AppConfig } from '@/configs'
import ContactModal from './ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primarySoft: '#FEDDF6',
  primaryLight: '#f8e8f3',
}

type ServiceItemProps = { item: IService; index: number }

const HomeServiceItem = ({ item, index }: ServiceItemProps) => {
  const [openContact, setOpenContact] = React.useState(false)

  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Box
        sx={{
          borderRadius: 4,
          px: { xs: 3, md: 4 },
          py: { xs: 3, md: 4 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          boxShadow: '0 4px 20px rgba(181,55,122,0.08)',
          border: '1px solid rgba(181,55,122,0.08)',
          // Fade-up animation avec délai selon l'index
          animation: 'fadeUp 0.6s ease both',
          animationDelay: `${index * 0.1}s`,
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          '&:hover': {
            boxShadow: `0 20px 50px ${BRAND.primary}25`,
            transform: 'translateY(-8px)',
            border: `1px solid ${BRAND.primary}20`,
          },
          // Au hover, le bullet change de taille
          '&:hover .bullet-dot': {
            transform: 'scale(1.4)',
          },
        }}
      >
        {/* Icône avec animation pulse au hover */}
        <Box
          sx={{
            width: { xs: 52, md: 60 },
            height: { xs: 52, md: 60 },
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: BRAND.primarySoft,
            mb: 2.5,
            flexShrink: 0,
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            '.MuiBox-root:hover &': {
              backgroundColor: `${BRAND.primary}18`,
              transform: 'rotate(5deg) scale(1.05)',
            },
          }}
        >
          <Image
            src={item.image as string}
            alt={item.title}
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Titre */}
        <Typography
          component='h3'
          sx={{
            fontSize: { xs: 15, md: 17 },
            fontWeight: 700,
            mb: 1,
            lineHeight: 1.35,
            color: '#1a1a2e',
          }}
        >
          {item.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: '#6b7280',
            fontSize: { xs: 13, md: 13.5 },
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          {item.description}
        </Typography>

        {/* Divider animé */}
        <Box
          sx={{
            width: 40,
            height: 2,
            borderRadius: 1,
            backgroundColor: BRAND.primarySoft,
            mb: 2,
            transition: 'width 0.4s ease, background-color 0.3s ease',
            '.MuiBox-root:hover &': {
              width: 70,
              backgroundColor: BRAND.primary,
            },
          }}
        />

        {/* Sous-services */}
        {item.subServices && item.subServices.length > 0 && (
          <Box
            component='ul'
            sx={{
              m: 0,
              pl: 0,
              listStyle: 'none',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 0.75,
            }}
          >
            {item.subServices.map((sub) => (
              <Box
                component='li'
                key={sub}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.25,
                  fontSize: { xs: 12.5, md: 13 },
                  color: '#4b5563',
                  lineHeight: 1.5,
                }}
              >
                <Box
                  className='bullet-dot'
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: BRAND.primary,
                    flexShrink: 0,
                    mt: '5px',
                    transition: 'transform 0.25s ease',
                  }}
                />
                {sub}
              </Box>
            ))}
          </Box>
        )}

        {/* CTA */}
        <Box
          onClick={() => setOpenContact(true)}
          sx={{
            mt: 3,
            pt: 2,
            borderTop: `1px solid ${BRAND.primarySoft}`,
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            color: BRAND.primary,
            fontWeight: 700,
            fontSize: { xs: 13, md: 13.5 },
            cursor: 'pointer',
            width: 'fit-content',
            '& svg': { transition: 'transform 0.25s ease' },
            '&:hover svg': { transform: 'translateX(6px)' },
            '&:hover': { opacity: 0.8 },
          }}
        >
          Demander un devis
          <Box
            component='svg'
            xmlns='http://www.w3.org/2000/svg'
            width={15}
            height={15}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </Box>
        </Box>
      </Box>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </Grid>
  )
}

const HomeServices = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-services'
      component='section'
      sx={{
        width: '100%',
        pt: { xs: 8, md: 14 },
        pb: { xs: 8, md: 14 },
        // Background clair au lieu du bordeaux foncé
        background:
          palette.mode === 'dark'
            ? 'linear-gradient(160deg, #1a0612 0%, #2d0f22 100%)'
            : 'linear-gradient(160deg, #fdf0f8 0%, #f9e4f3 40%, #fce8f5 100%)',
        position: 'relative',
        overflow: 'hidden',
        // Cercles décoratifs en arrière-plan
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

        {/* ── En-tête ── */}
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: 'center',
            animation: 'fadeDown 0.7s ease both',
            '@keyframes fadeDown': {
              from: { opacity: 0, transform: 'translateY(-20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {/* Badge */}
          <Box
            sx={{
              mb: 3,
              borderRadius: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              padding: '6px 18px',
              backgroundColor: `${BRAND.primary}15`,
              border: `1px solid ${BRAND.primary}25`,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
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
                fontSize: 11,
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 700,
                color: BRAND.primary,
              }}
            >
              Nos services
            </Typography>
          </Box>

          <Typography
            component='h2'
            sx={{
              mb: 2.5,
              lineHeight: 1.25,
              fontWeight: 800,
              fontSize: { xs: 26, sm: 34, md: 46 },
              color: BRAND.primaryDark,
              letterSpacing: '-0.5px',
            }}
          >
            De quoi avez-vous besoin pour{' '}
            <Box
              component='span'
              sx={{
                color: BRAND.primary,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: `${BRAND.primary}40`,
                },
              }}
            >
              faire grandir
            </Box>{' '}
            votre entreprise&nbsp;?
          </Typography>

          <Typography
            sx={{
              color: '#6b7280',
              fontSize: { xs: 14, md: 17 },
              lineHeight: 1.7,
              maxWidth: 580,
              mx: 'auto',
            }}
          >
            Nous proposons une large gamme de services pour accompagner les entreprises
            dans leur croissance digitale.
          </Typography>
        </Box>

        {/* ── Grille services ── */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
          {services.map((item, index) => (
            <HomeServiceItem item={item} key={item.title} index={index} />
          ))}
        </Grid>

        {/* Note de bas */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
          <Typography sx={{ color: '#9ca3af', fontSize: { xs: 12, md: 13 } }}>
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