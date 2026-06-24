'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ContactModal from './ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const HomeCTA = () => {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Box
      id='home-cta'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 5, md: 8 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            position: 'relative',
            borderRadius: { xs: 5, md: 7 },
            overflow: 'hidden',
            backgroundImage: "url('/images/bg3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Overlay dégradé avec les vraies couleurs
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${BRAND.primaryDark}F2 0%, ${BRAND.primary}DD 60%, ${BRAND.primaryLight}99 100%)`,
              zIndex: 0,
            },
            // Cercle déco haut-droite
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -80,
              right: -80,
              width: { xs: 200, md: 320 },
              height: { xs: 200, md: 320 },
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              zIndex: 0,
            },
          }}
        >
          {/* Cercle déco bas-gauche */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: { xs: 140, md: 240 },
              height: { xs: 140, md: 240 },
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {/* Particules flottantes */}
          {[
            { top: '18%', left: '6%',   size: 7,  delay: '0s',   dur: '4s'   },
            { top: '72%', left: '4%',   size: 5,  delay: '1s',   dur: '5s'   },
            { top: '25%', right: '8%',  size: 6,  delay: '0.5s', dur: '3.5s' },
            { top: '78%', right: '6%',  size: 8,  delay: '1.5s', dur: '4.5s' },
            { top: '50%', left: '18%',  size: 4,  delay: '2s',   dur: '6s'   },
          ].map((p, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                top: p.top,
                left: p.left,
                right: p.right,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.25)',
                zIndex: 0,
                pointerEvents: 'none',
                animation: `floatDot ${p.dur} ease-in-out infinite`,
                animationDelay: p.delay,
                '@keyframes floatDot': {
                  '0%, 100%': { transform: 'translateY(0px)',   opacity: 0.25 },
                  '50%':      { transform: 'translateY(-12px)', opacity: 0.7  },
                },
              }}
            />
          ))}

          {/* ── Contenu ── */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              px: { xs: 3, sm: 6, md: 10 },
              py: { xs: 6, md: 8 },
              animation: 'fadeUp 0.8s ease both',
              '@keyframes fadeUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to:   { opacity: 1, transform: 'translateY(0)'    },
              },
            }}
          >
            {/* Badge */}
            <Box
              sx={{
                mb: 2.5,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 0.75,
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: BRAND.primarySoft,
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1,   transform: 'scale(1)'   },
                    '50%':      { opacity: 0.4, transform: 'scale(0.7)' },
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                Passons à l action
              </Typography>
            </Box>

            {/* Accroche */}
            <Typography
              sx={{
                fontSize: { xs: 13, md: 15 },
                fontWeight: 400,
                color: 'rgba(255,255,255,0.72)',
                mb: 1.5,
              }}
            >
              Vous avez un projet ? Une idée ? Un besoin ?
            </Typography>

            {/* Titre */}
            <Typography
              component='h2'
              sx={{
                fontWeight: 800,
                fontSize: { xs: 24, sm: 32, md: 42 },
                lineHeight: 1.2,
                color: '#fff',
                mb: 2,
                letterSpacing: '-0.5px',
                maxWidth: { xs: '100%', md: 680 },
              }}
            >
              Développons ensemble votre{' '}
              <Box
                component='span'
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  color: BRAND.primarySoft,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: { xs: 1, md: 2 },
                    left: 0,
                    width: '100%',
                    height: { xs: 2, md: 3 },
                    borderRadius: 2,
                    backgroundColor: BRAND.primaryLight,
                    opacity: 0.7,
                  },
                }}
              >
                présence digitale
              </Box>
            </Typography>

            {/* Sous-titre */}
            <Typography
              sx={{
                fontSize: { xs: 13.5, md: 15.5 },
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.75,
                mb: 4.5,
                maxWidth: { xs: '100%', md: 500 },
              }}
            >
              On vous accompagne pas à pas — de la stratégie jusqu à la mise en ligne —
              avec sérieux et transparence.
            </Typography>

            {/* Boutons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                alignItems: 'center',
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              {/* CTA principal */}
              <Box
                onClick={() => setContactOpen(true)}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  px: { xs: 3.5, md: 4.5 },
                  py: { xs: 1.5, md: 1.75 },
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  color: BRAND.primary,
                  fontWeight: 800,
                  fontSize: { xs: 13.5, md: 14.5 },
                  cursor: 'pointer',
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  '& svg': { transition: 'transform 0.3s ease' },
                  '&:hover': {
                    backgroundColor: BRAND.primarySoft,
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.2)',
                  },
                  '&:hover svg': { transform: 'translateX(5px)' },
                }}
              >
                Réservez une consultation gratuite
                <Box
                  component='svg'
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
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

              {/* CTA secondaire */}
              <Box
                component='a'
                href='#home-services'
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  px: { xs: 3.5, md: 4.5 },
                  py: { xs: 1.5, md: 1.75 },
                  borderRadius: 10,
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: 13.5, md: 14.5 },
                  cursor: 'pointer',
                  width: { xs: '100%', sm: 'auto' },
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.45)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.85)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                Voir nos services
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

export default HomeCTA