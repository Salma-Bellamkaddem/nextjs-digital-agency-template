'use client'

import React, { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha, Theme } from '@mui/material/styles'
import ContactModal from './ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const CTA_BUTTON = {
  bg: '#561244',
  bgHover: '#40093B',
  text: '#FFFFFF',
}

const HomeCTA = () => {
  const t = useTranslations('Cta')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Box
      component="section"
      sx={(theme: Theme) => ({
        width: '100%',
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme: Theme) => ({
            position: 'relative',
            borderRadius: { xs: 4, md: 6 },
            overflow: 'hidden',
            backgroundColor:
              theme.palette.mode === 'dark' ? '#180313' : theme.palette.background.paper,
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(BRAND.primary, 0.2)
                : theme.palette.divider,
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 24px 70px rgba(0,0,0,0.55)'
                : '0 30px 80px -30px rgba(86,18,68,0.18)',
          })}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: { xs: 'column', md: isRtl ? 'row-reverse' : 'row' },
              alignItems: 'center',
              minHeight: { md: 460 },
            }}
          >
            {/* ── Colonne texte ── */}
            <Box
              sx={{
                flex: { md: '0 0 54%' },
                px: { xs: 3, sm: 5, md: 7 },
                py: { xs: 5, md: 6 },
                textAlign: isRtl ? 'right' : 'left',
                width: '100%',
              }}
            >
              {/* Badge */}
              <Box
                sx={(theme: Theme) => ({
                  mb: 2.5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: 10,
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? alpha(BRAND.primaryLight, 0.12)
                      : alpha(BRAND.primary, 0.08),
                  border: '1px solid',
                  borderColor:
                    theme.palette.mode === 'dark'
                      ? alpha(BRAND.primaryLight, 0.2)
                      : alpha(BRAND.primary, 0.15),
                })}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: BRAND.primary,
                    animation: 'ctaPulse 2s ease-in-out infinite',
                    '@keyframes ctaPulse': {
                      '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                      '50%': { opacity: 0.4, transform: 'scale(0.7)' },
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: 11, sm: 11.5 },
                    letterSpacing: isRtl ? 0.5 : 1,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: BRAND.primary,
                  }}
                >
                  {t('badge')}
                </Typography>
              </Box>

              {/* Titre */}
              <Typography
                component="h2"
                sx={(theme: Theme) => ({
                  fontWeight: 800,
                  fontSize: { xs: 26, sm: 34, md: 42 },
                  lineHeight: isRtl ? 1.35 : 1.18,
                  color: theme.palette.text.primary,
                  mb: 2,
                  letterSpacing: isRtl ? 0 : '-0.02em',
                })}
              >
                {t('title.line1')}
                <br />
                {t('title.line2')}
              </Typography>

              {/* Sous-titre */}
              <Typography
                sx={(theme: Theme) => ({
                  fontSize: { xs: 14.5, sm: 15.5 },
                  color: theme.palette.text.secondary,
                  lineHeight: isRtl ? 1.8 : 1.65,
                  mb: { xs: 3.5, md: 4 },
                  maxWidth: 460,
                  mx: { xs: 'auto', md: isRtl ? '0 0 0 auto' : '0 auto 0 0' },
                })}
              >
                {t('subtitle')}
              </Typography>

              {/* Boutons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1.5,
                  alignItems: { xs: 'stretch', sm: 'center' },
                  justifyContent: { xs: 'center', md: isRtl ? 'flex-end' : 'flex-start' },
                }}
              >
                <Box
                  component="button"
                  type="button"
                  onClick={() => setContactOpen(true)}
                  sx={{
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    px: { xs: 3, sm: 3.5 },
                    py: { xs: 1.4, md: 1.6 },
                    borderRadius: '2rem',
                    background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                    color: CTA_BUTTON.text,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    boxShadow: `0 8px 24px ${alpha(BRAND.primary, 0.4)}`,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 28px ${alpha(BRAND.primary, 0.55)}`,
                      filter: 'brightness(1.06)',
                    },
                  }}
                >
                  {t('buttons.consultation')}
                </Box>

                <Box
                  component="a"
                  href="#home-services"
                  sx={(theme: Theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 3, sm: 3.5 },
                    py: { xs: 1.3, md: 1.5 },
                    borderRadius: '2rem',
                    backgroundColor: 'transparent',
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    border: '1.5px solid',
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(BRAND.primaryLight, 0.2)
                        : alpha(BRAND.primary, 0.2),
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? alpha(BRAND.primaryLight, 0.08)
                          : alpha(BRAND.primary, 0.06),
                      borderColor: BRAND.primary,
                      transform: 'translateY(-2px)',
                    },
                  })}
                >
                  {t('buttons.services')}
                </Box>
              </Box>
            </Box>

            {/* ── Colonne droite : composition 3D ── */}
            <Box
              sx={{
                flex: { md: '0 0 46%' },
                display: { xs: 'none', md: 'flex' },
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                height: 460,
                width: '100%',
                direction: 'ltr',
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
// Composition 3D épurée et géométrie verrouillée LTR
// ─────────────────────────────────────────────────────────────
const CtaSceneDecoration = () => {
  return (
    <Box sx={{ position: 'relative', width: 380, height: 380 }}>
      {/* Anneaux orbitaux */}
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
          rx="170"
          ry="65"
          fill="none"
          stroke="#B73B7B"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          transform="rotate(-18 210 210)"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="145"
          ry="90"
          fill="none"
          stroke="#590842"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          transform="rotate(24 210 210)"
        />
      </Box>

      {/* Sphère centrale */}
      <Box
        sx={{
          position: 'absolute',
          top: 80,
          left: 80,
          width: 210,
          height: 210,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(238,225,236,0.75) 35%, rgba(183,59,123,0.35) 75%, rgba(86,18,68,0.25) 100%)',
          boxShadow: '0 30px 60px -20px rgba(86,18,68,0.35), inset 0 0 40px rgba(255,255,255,0.5)',
          backdropFilter: 'blur(2px)',
          animation: 'ctaFloatSlow 7s ease-in-out infinite',
          '@keyframes ctaFloatSlow': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-14px)' },
          },
        }}
      />

      {/* Torus / Anneau transparent */}
      <Box
        sx={{
          position: 'absolute',
          top: 45,
          left: 50,
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '20px solid transparent',
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
            '50%': { transform: 'translateY(8px) rotate(6deg)' },
          },
        }}
      />

      {/* Petit cube 3D */}
      <Box
        sx={{
          position: 'absolute',
          top: 35,
          right: 25,
          width: 54,
          height: 54,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-18deg) rotateY(28deg)',
          animation: 'ctaCubeFloat 6s ease-in-out infinite',
          '@keyframes ctaCubeFloat': {
            '0%, 100%': { transform: 'rotateX(-18deg) rotateY(28deg) translateY(0px)' },
            '50%': { transform: 'rotateX(-14deg) rotateY(40deg) translateY(-12px)' },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 54,
            height: 54,
            background: 'linear-gradient(135deg, #FDF8FC 0%, #E9D3E2 100%)',
            transform: 'translateZ(27px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 54,
            height: 54,
            background: 'linear-gradient(135deg, #B73B7B 0%, #590842 100%)',
            transform: 'rotateY(90deg) translateZ(27px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 54,
            height: 54,
            background: 'linear-gradient(135deg, #E9D3E2 0%, #B73B7B 100%)',
            transform: 'rotateX(90deg) translateZ(27px)',
          }}
        />
      </Box>

      {/* Sphère chaude */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 50,
          left: 45,
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #F3C77A 0%, #B73B7B 55%, #561244 100%)',
          boxShadow: '0 18px 34px -10px rgba(86,18,68,0.5)',
          animation: 'ctaFloatMed 9s ease-in-out infinite',
        }}
      />
    </Box>
  )
}

export default HomeCTA