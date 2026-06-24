'use client'

import React, { FC, useState } from 'react'
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material'
import Logo from '@/assets/logo.svg'
import HeartIcon from '@/assets/icons/ion--heart-sharp.svg'
import { companyMenus, supportLinks } from '@/constants/menus'
import { services } from '@/constants/service'
import ContactModal from '@/app/_components/ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const socialLinks = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18'>
        <path d='M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z' />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18'>
        <path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z' />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/212600000000',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18'>
        <path d='M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z' />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='18' height='18'>
        <path d='M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z' />
      </svg>
    ),
  },
]

// ─── Vague décorative ─────────────────────────────────────────────────────────
const FooterWaveTop: FC = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      lineHeight: 0,
      transform: 'translateY(-99%)',
      '& svg': { width: '100%', display: 'block', height: { xs: 32, sm: 64 } },
    }}
  >
    <svg viewBox='0 0 1440 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={BRAND.primaryDark}
        d='M0,64 C240,112 480,16 720,32 C960,48 1200,112 1440,64 L1440,120 L0,120 Z'
      />
    </svg>
  </Box>
)

// ─── InfoColumn ───────────────────────────────────────────────────────────────
interface InfoColumnProps {
  title: string
  items: { label: string }[]
}

const InfoColumn: FC<InfoColumnProps> = ({ title, items }) => (
  <Box>
    <Typography
      sx={{
        fontSize: { xs: 12, sm: 13 },
        fontWeight: 800,
        letterSpacing: 0.6,
        textTransform: 'uppercase',
        color: BRAND.primaryLight,
        mb: { xs: 1.25, sm: 1.75 },
      }}
    >
      {title}
    </Typography>
    <Stack spacing={{ xs: 0.9, sm: 1.1 }}>
      {items.map((item, i) => (
        <Typography
          key={item.label + i}
          sx={{
            fontSize: { xs: 13, sm: 14.5 },
            fontWeight: 500,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.4,
            wordBreak: 'break-word',
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Stack>
  </Box>
)

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer: FC = () => {
  const [contactOpen, setContactOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        backgroundColor: BRAND.primaryDark,
        color: '#fff',
        // ✅ overflow: hidden sur le footer lui-même pour clipper la vague
        // mais on ne clip pas le contenu — le problème vient du Grid spacing
        width: '100%',
        mt: { xs: 6, sm: 10 },
      }}
    >
      <FooterWaveTop />

      {/* ✅ overflow: hidden ici pour absorber le margin négatif du Grid MUI */}
      <Box sx={{ overflow: 'hidden' }}>
        <Container
          maxWidth='lg'
          sx={{
            position: 'relative',
            // ✅ padding généreux sur mobile pour que le contenu ne sorte pas
            px: { xs: 3, sm: 4, md: 3 },
          }}
        >
          <Box sx={{ pt: { xs: 5, sm: 9 }, pb: { xs: 4, sm: 5 } }}>

            {/* ── CTA contact ── */}
            <Box
              sx={{
                borderRadius: { xs: 3, sm: 4 },
                p: { xs: 2.5, sm: 4 },
                mb: { xs: 5, sm: 7 },
                background: `linear-gradient(135deg, ${BRAND.primary} 0%, #8a2a60 100%)`,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'center' },
                justifyContent: 'space-between',
                gap: { xs: 2.25, sm: 3 },
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: 17, sm: 22 }, mb: 0.5 }}>
                  Un projet en tête ?
                </Typography>
                <Typography sx={{ fontSize: { xs: 13, sm: 14 }, color: 'rgba(255,255,255,0.85)' }}>
                  Discutons-en — réponse sous 24h, sans engagement.
                </Typography>
              </Box>
              <Button
                onClick={() => setContactOpen(true)}
                sx={{
                  flexShrink: 0,
                  width: { xs: '100%', sm: 'auto' },
                  px: 3.5,
                  py: { xs: 1.4, sm: 1.3 },
                  borderRadius: 2.5,
                  fontWeight: 700,
                  fontSize: 14.5,
                  textTransform: 'none',
                  color: BRAND.primaryDark,
                  backgroundColor: '#fff',
                  '&:hover': { backgroundColor: BRAND.primarySoft },
                }}
              >
                Nous contacter
              </Button>
            </Box>

            {/* ── Grille principale ── */}
            {/* ✅ Sur mobile : layout vertical empilé, pas de Grid qui déborde */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 6 },
              }}
            >
              {/* Colonne identité */}
              <Box sx={{ flexShrink: 0, width: { md: '33%' } }}>
                <Stack direction='row' gap={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                  <Box
                    component={Logo}
                    sx={{ height: { xs: 26, sm: 30 }, width: 'auto', color: '#fff' }}
                  />
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: 17, sm: 19 } }}>
                    EXSETIA
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: { xs: 13.5, sm: 14 },
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.75)',
                    mb: { xs: 2.5, sm: 3 },
                    maxWidth: { md: 300 },
                  }}
                >
                  Agence digitale basée à Marrakech : sites web, contenu, publicité et automatisation IA pour faire grandir votre activité.
                </Typography>

                <Stack spacing={{ xs: 1.1, sm: 1.3 }}>
                  <Typography
                    component='a'
                    href='mailto:contact@exsetia.com'
                    sx={{
                      fontSize: { xs: 13.5, sm: 14 },
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      wordBreak: 'break-all',
                      '&:hover': { color: BRAND.primaryLight },
                    }}
                  >
                    ✉️ contact@exsetia.com
                  </Typography>
                  <Typography
                    component='a'
                    href='https://wa.me/212600000000'
                    sx={{
                      fontSize: { xs: 13.5, sm: 14 },
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      textDecoration: 'none',
                      '&:hover': { color: BRAND.primaryLight },
                    }}
                  >
                    📞 +212 6 00 00 00 00
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 13.5, sm: 14 }, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}
                  >
                    📍 Marrakech, Maroc
                  </Typography>
                </Stack>
              </Box>

              {/* ✅ Colonnes infos : 3 colonnes côte à côte sur mobile ET desktop */}
              <Box
                sx={{
                  flex: 1,
                  display: 'grid',
                  // Sur mobile : 3 colonnes égales, sur desktop pareil
                  gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)' },
                  gap: { xs: 2, sm: 4 },
                }}
              >
                <InfoColumn
                  title='Services'
                  items={services.map((s) => ({ label: s.title }))}
                />
                <InfoColumn
                  title='Entreprise'
                  items={companyMenus.map((m) => ({ label: m.label }))}
                />
                <InfoColumn
                  title='Support'
                  items={supportLinks.map((s) => ({ label: s.label }))}
                />
              </Box>
            </Box>

            {/* ── Séparateur ── */}
            <Box
              sx={{
                height: 1,
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.12)',
                my: { xs: 3.5, sm: 5 },
              }}
            />

            {/* ── Bas de page ── */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 2.5, sm: 2 },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Stack
                direction='row'
                sx={{
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  order: { xs: 2, sm: 1 },
                  flexWrap: 'wrap',
                }}
              >
                <Typography sx={{ fontSize: { xs: 12.5, sm: 13.5 }, color: 'rgba(255,255,255,0.65)' }}>
                  © {year} EXSETIA — Fait avec
                </Typography>
                <Box
                  component={HeartIcon}
                  sx={{ width: 14, height: 'auto', color: BRAND.primary, mx: 0.6 }}
                />
                <Typography sx={{ fontSize: { xs: 12.5, sm: 13.5 }, color: 'rgba(255,255,255,0.65)' }}>
                  à Marrakech
                </Typography>
              </Stack>

              <Stack direction='row' spacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                {socialLinks.map((item) => (
                  <Box
                    key={item.name}
                    component='a'
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={item.name}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: BRAND.primary,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Stack>
            </Box>

          </Box>
        </Container>
      </Box>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

export default Footer