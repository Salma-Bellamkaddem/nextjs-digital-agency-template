'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ContactModal from './ContactModal'

// Couleurs fixes (indépendantes du mode clair/sombre) pour le CTA principal
const CTA_BUTTON = {
  bg: '#561244',
  bgHover: '#40093B',
  text: '#FFFFFF',
}

const HomeCTA = () => {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Box
      id="home-cta"
      component="section"
      sx={(theme) => ({
        width: '100%',
        py: { xs: 5, md: 8 },
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            position: 'relative',
            borderRadius: { xs: 5, md: 7 },
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 30px 80px -30px rgba(86,18,68,0.18)',
          })}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              minHeight: { md: 480 },
            }}
          >
            {/* ── Colonne gauche : texte ── */}
            <Box
              sx={{
                flex: { md: '0 0 52%' },
                px: { xs: 3.5, sm: 5, md: 8 },
                py: { xs: 6, md: 0 },
                animation: 'ctaFadeUp 0.8s ease both',
                '@keyframes ctaFadeUp': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              {/* Badge */}
              <Box
                sx={(theme) => ({
                  mb: 3,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.25,
                  py: 0.8,
                  borderRadius: 10,
                  backgroundColor: theme.palette.divider,
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.text.disabled,
                    animation: 'ctaPulse 2s ease-in-out infinite',
                    '@keyframes ctaPulse': {
                      '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                      '50%': { opacity: 0.4, transform: 'scale(0.7)' },
                    },
                  })}
                />
                <Typography
                  sx={(theme) => ({
                    fontSize: { xs: 11, sm: 11.5, md: 12 },
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  })}
                >
                  Prêt à passer à l&apos;action
                </Typography>
              </Box>

              {/* Titre */}
              <Typography
                component="h2"
                sx={(theme) => ({
                  fontWeight: 800,
                  fontSize: { xs: 28, sm: 36, md: 44, lg: 50 },
                  lineHeight: 1.14,
                  color: theme.palette.text.primary,
                  mb: 2.5,
                  letterSpacing: '-0.02em',
                })}
              >
                Prêt à faire grandir
                <br />
                votre entreprise&nbsp;?
              </Typography>

              {/* Sous-titre */}
              <Typography
                sx={(theme) => ({
                  fontSize: { xs: 14.5, sm: 15.5, md: 17 },
                  fontWeight: 400,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.65,
                  mb: { xs: 4, md: 4.5 },
                  maxWidth: 440,
                })}
              >
                Construisons ensemble une stratégie digitale sur mesure.
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
                <Box
                  onClick={() => setContactOpen(true)}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    px: { xs: 3.5, sm: 4, md: 4.5 },
                    py: { xs: 1.6, md: 1.85 },
                    borderRadius: 10,
                    backgroundColor: CTA_BUTTON.bg,
                    color: CTA_BUTTON.text,
                    fontWeight: 700,
                    fontSize: { xs: 14, sm: 14.5, md: 15 },
                    letterSpacing: '0.01em',
                    lineHeight: 1.3,
                    cursor: 'pointer',
                    width: { xs: '100%', sm: 'auto' },
                    textAlign: 'center',
                    boxShadow: '0 10px 26px -8px rgba(86,18,68,0.55)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: CTA_BUTTON.bgHover,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 16px 34px -8px rgba(86,18,68,0.6)',
                    },
                  }}
                >
                  Réservez une consultation gratuite
                </Box>

                <Box
                  component="a"
                  href="#home-services"
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    px: { xs: 3.5, md: 4.25 },
                    py: { xs: 1.5, md: 1.75 },
                    borderRadius: 10,
                    backgroundColor: 'transparent',
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    fontSize: { xs: 13.5, md: 14.5 },
                    cursor: 'pointer',
                    width: { xs: '100%', sm: 'auto' },
                    textDecoration: 'none',
                    border: `1.5px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.divider,
                      transform: 'translateY(-3px)',
                    },
                  })}
                >
                  Voir nos services
                </Box>
              </Box>
            </Box>

            {/* ── Colonne droite : composition 3D ── */}
            <Box
              sx={{
                flex: { md: '0 0 48%' },
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                height: 480,
                width: '100%',
              }}
            >
              <CtaSceneDecoration />
            </Box>
          </Box>
        </Box>
      </Container>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
// Composition 3D flottante : anneaux orbitaux, sphère glassy,
// petit cube et sphère dégradée chaude — animations CSS pures.
// ─────────────────────────────────────────────────────────────
const CtaSceneDecoration = () => {
  return (
    <Box sx={{ position: 'relative', width: 420, height: 420 }}>
      {/* Anneaux orbitaux (SVG, rotation lente) */}
      <Box
        component="svg"
        viewBox="0 0 420 420"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          animation: 'ctaOrbitSpin 34s linear infinite',
          '@keyframes ctaOrbitSpin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        }}
      >
        <ellipse
          cx="210"
          cy="210"
          rx="175"
          ry="70"
          fill="none"
          stroke="#B73B7B"
          strokeOpacity="0.25"
          strokeWidth="1"
          transform="rotate(-18 210 210)"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="150"
          ry="95"
          fill="none"
          stroke="#590842"
          strokeOpacity="0.15"
          strokeWidth="1"
          transform="rotate(24 210 210)"
        />
      </Box>

      {/* Sphère centrale "glassy" */}
      <Box
        sx={{
          position: 'absolute',
          top: 90,
          left: 90,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(238,225,236,0.75) 35%, rgba(183,59,123,0.35) 75%, rgba(86,18,68,0.25) 100%)',
          boxShadow: '0 30px 60px -20px rgba(86,18,68,0.35), inset 0 0 40px rgba(255,255,255,0.5)',
          backdropFilter: 'blur(2px)',
          animation: 'ctaFloatSlow 7s ease-in-out infinite',
          '@keyframes ctaFloatSlow': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-16px)' },
          },
        }}
      />

      {/* Anneau / torus en haut à gauche de la sphère */}
      <Box
        sx={{
          position: 'absolute',
          top: 50,
          left: 60,
          width: 110,
          height: 110,
          borderRadius: '50%',
          border: '22px solid transparent',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(183,59,123,0.35)) border-box',
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0.85,
          filter: 'blur(0.3px)',
          animation: 'ctaFloatMed 8s ease-in-out infinite',
          '@keyframes ctaFloatMed': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(10px) rotate(6deg)' },
          },
        }}
      />

      {/* Petit cube 3D */}
      <Box
        sx={{
          position: 'absolute',
          top: 40,
          right: 30,
          width: 60,
          height: 60,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-18deg) rotateY(28deg)',
          animation: 'ctaCubeFloat 6s ease-in-out infinite',
          '@keyframes ctaCubeFloat': {
            '0%, 100%': { transform: 'rotateX(-18deg) rotateY(28deg) translateY(0px)' },
            '50%': { transform: 'rotateX(-14deg) rotateY(40deg) translateY(-14px)' },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 60,
            height: 60,
            background: 'linear-gradient(135deg, #FDF8FC 0%, #E9D3E2 100%)',
            transform: 'translateZ(30px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 60,
            height: 60,
            background: 'linear-gradient(135deg, #B73B7B 0%, #590842 100%)',
            transform: 'rotateY(90deg) translateZ(30px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 60,
            height: 60,
            background: 'linear-gradient(135deg, #E9D3E2 0%, #B73B7B 100%)',
            transform: 'rotateX(90deg) translateZ(30px)',
          }}
        />
      </Box>

      {/* Sphère dégradée chaude, en bas à gauche */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 55,
          left: 55,
          width: 78,
          height: 78,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #F3C77A 0%, #B73B7B 55%, #561244 100%)',
          boxShadow: '0 18px 34px -10px rgba(86,18,68,0.5)',
          animation: 'ctaFloatMed 9s ease-in-out infinite',
        }}
      />

      {/* Halo diffus derrière la scène */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          right: -20,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(183,59,123,0.18) 0%, rgba(183,59,123,0) 70%)',
          zIndex: -1,
        }}
      />

      {/* Points flottants */}
      {[
        { top: 20, left: 30, size: 6, dur: '4s' },
        { top: 55, right: 10, size: 5, dur: '5s' },
        { bottom: 90, left: 5, size: 4, dur: '3.5s' },
        { bottom: 15, right: 70, size: 5, dur: '4.5s' },
        { top: 140, left: 0, size: 3, dur: '6s' },
      ].map((p, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: '#B73B7B',
            animation: `ctaDotFloat ${p.dur} ease-in-out infinite`,
            '@keyframes ctaDotFloat': {
              '0%, 100%': { transform: 'translateY(0px)', opacity: 0.35 },
              '50%': { transform: 'translateY(-10px)', opacity: 0.9 },
            },
          }}
        />
      ))}
    </Box>
  )
}

export default HomeCTA