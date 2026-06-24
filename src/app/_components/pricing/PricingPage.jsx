'use client'

import React, { useState } from 'react'

// components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { SectionTitle, StyledButton } from '@/components/core'
import CheckIcon from '@mui/icons-material/Check'
import ContactModal from '@/components/ContactModal'

// data
import { PRICING_PACKS } from '@/constants/pricing'

// ─── Palette EXSETIA ──────────────────────────────────────────────────────────
const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const PackDetailCard = ({ pack, onRequestQuote }) => {
  const { name, target, tagline, services, highlighted } = pack

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        p: { xs: 3.5, md: 4.5 },
        position: 'relative',
        backgroundColor: highlighted ? BRAND.primary : 'background.paper',
        color: highlighted ? '#fff' : 'text.primary',
        border: '1px solid',
        borderColor: highlighted ? BRAND.primary : 'divider',
        boxShadow: highlighted
          ? `0 24px 48px ${BRAND.primary}40`
          : '0 4px 18px rgba(0,0,0,0.05)',
        transform: { md: highlighted ? 'translateY(-12px)' : 'none' },
      }}
    >
      {highlighted && (
        <Box
          sx={{
            position: 'absolute',
            top: -16,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: BRAND.primaryDark,
            color: '#fff',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.6,
            textTransform: 'uppercase',
            px: 2,
            py: 0.7,
            borderRadius: 99,
            whiteSpace: 'nowrap',
          }}
        >
          Le plus choisi
        </Box>
      )}

      <Typography
        component='h2'
        sx={{ fontSize: 26, fontWeight: 800, mb: 0.75, mt: highlighted ? 1 : 0 }}
      >
        Pack {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 700,
          mb: 1.5,
          color: highlighted ? BRAND.primaryLight : BRAND.primary,
        }}
      >
        {target}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          lineHeight: 1.6,
          mb: 3,
          color: highlighted ? 'rgba(255,255,255,0.88)' : 'text.secondary',
        }}
      >
        {tagline}
      </Typography>

      <Divider
        sx={{
          mb: 3,
          borderColor: highlighted ? 'rgba(255,255,255,0.2)' : 'divider',
        }}
      />

      <Box sx={{ flexGrow: 1, mb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.75 }}>
          {services.map((service) => (
            <Box key={service.label}>
              <Box sx={{ display: 'flex', gap: 1.25, mb: 0.5 }}>
                <CheckIcon
                  sx={{
                    fontSize: 20,
                    mt: '2px',
                    flexShrink: 0,
                    color: highlighted ? '#fff' : BRAND.primary,
                  }}
                />
                <Typography sx={{ fontSize: 15.5, fontWeight: 700 }}>
                  {service.label}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  pl: '30px',
                  color: highlighted ? 'rgba(255,255,255,0.82)' : 'text.secondary',
                }}
              >
                {service.detail}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  pl: '30px',
                  mt: 0.5,
                  color: highlighted ? BRAND.primaryLight : BRAND.primaryDark,
                }}
              >
                {service.duration}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <StyledButton
        fullWidth
        variant='contained'
        size='large'
        onClick={onRequestQuote}
        sx={{
          backgroundColor: highlighted ? '#fff' : BRAND.primary,
          color: highlighted ? BRAND.primary : '#fff',
          '&:hover': {
            backgroundColor: highlighted ? BRAND.primarySoft : BRAND.primaryDark,
          },
        }}
      >
        Demander un devis
      </StyledButton>
    </Box>
  )
}

const PricingPage = () => {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <Box component='main' sx={{ width: '100%' }}>
      {/* ── En-tête de page ── */}
      <Box
        sx={{
          width: '100%',
          pt: { xs: 12, md: 16 },
          pb: { xs: 6, md: 8 },
          textAlign: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth='md'>
          <SectionTitle
            sx={{
              mx: 'auto',
              color: BRAND.primary,
              backgroundColor: BRAND.primarySoft,
            }}
          >
            NOS TARIFS
          </SectionTitle>
          <Typography
            component='h1'
            variant='h1'
            sx={{
              fontSize: { xs: 28, md: 44 },
              fontWeight: 800,
              mt: 2,
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Des packs digitaux pensés pour chaque étape de votre croissance
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: 15, md: 18 },
              maxWidth: 680,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Création de site, référencement SEO, publicité en ligne et
            optimisation continue : choisissez le pack adapté à la taille de
            votre entreprise, ou demandez une offre sur mesure.
          </Typography>
        </Container>
      </Box>

      {/* ── Grille des 3 packs ── */}
      <Box sx={{ width: '100%', py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 3 }} alignItems='stretch'>
            {PRICING_PACKS.map((pack) => (
              <Grid key={pack.id} size={{ xs: 12, md: 4 }}>
                <PackDetailCard
                  pack={pack}
                  onRequestQuote={() => setContactOpen(true)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Bandeau CTA final ── */}
      <Box
        sx={{
          width: '100%',
          py: { xs: 7, md: 10 },
          textAlign: 'center',
          backgroundColor: BRAND.primaryDark,
          color: '#fff',
        }}
      >
        <Container maxWidth='sm'>
          <Typography sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, mb: 2 }}>
            Pas sûr du pack qui vous correspond ?
          </Typography>
          <Typography sx={{ fontSize: 15, mb: 4, color: 'rgba(255,255,255,0.85)' }}>
            Décrivez-nous votre projet : nous vous recommandons l&apos;offre la
            plus pertinente, sans engagement.
          </Typography>
          <StyledButton
            variant='contained'
            size='large'
            onClick={() => setContactOpen(true)}
            sx={{
              backgroundColor: '#fff',
              color: BRAND.primaryDark,
              '&:hover': { backgroundColor: BRAND.primarySoft },
            }}
          >
            Demander un devis gratuit
          </StyledButton>
        </Container>
      </Box>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

export default PricingPage