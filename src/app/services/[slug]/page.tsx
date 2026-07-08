'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTheme } from '@mui/material/styles'
import { services } from '@/constants/service'
import ContactModal from '../../_components/ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primarySoft: '#FEDDF6',
}

const SERVICE_IMAGES: Record<string, string> = {
  'etudes-marche': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'analyse-donnees': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'acquisition': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'social-media': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
  'branding': 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
  'dev': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [openContact, setOpenContact] = React.useState(false)
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'

  const slug = params?.slug as string
  const currentService = services.find((s) => s.slug === slug)

  if (!currentService) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Service introuvable</Typography>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => router.push('/')} 
          sx={{ color: BRAND.primary, textTransform: 'none', fontWeight: 600 }}
        >
          Retour à l&apos;accueil
        </Button>
      </Container>
    )
  }

  const coverImage = SERVICE_IMAGES[currentService.slug] || SERVICE_IMAGES['acquisition']

  return (
    <Box sx={{ bgcolor: isDark ? '#12040d' : '#fcf8fa', minHeight: '100vh', pt: { xs: 4, md: 8 }, pb: 10 }}>
      <Container maxWidth="md"> {/* "md" pour resserrer le bloc au centre et faire plus élégant */}
        
        {/* Bouton Retour */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{
            color: isDark ? '#fff' : '#1a1a2e',
            fontWeight: 700,
            mb: 4,
            textTransform: 'none',
            '&:hover': { color: BRAND.primary }
          }}
        >
          Retour aux services
        </Button>

        {/* ── LE BLOC UNIQUE DE DÉTAIL ── */}
        <Box
          sx={{
            backgroundColor: isDark ? '#1f0a16' : '#fff',
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.5)' : '0 15px 45px rgba(181,55,122,0.08)',
            border: isDark ? `1px solid ${BRAND.primaryDark}` : '1px solid rgba(181,55,122,0.08)',
          }}
        >
          {/* 1. Image du bloc en haut */}
          <Box sx={{ position: 'relative', width: '100%', height: { xs: 240, sm: 350, md: 400 } }}>
            <Image
              src={coverImage}
              alt={currentService.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            {/* Dégradé sur l'image pour l'intégration visuelle */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to bottom, transparent 40%, ${isDark ? '#1f0a16' : '#fff'} 100%)`,
              }}
            />
          </Box>

          {/* 2. Contenu textuel à l'intérieur du bloc */}
          <Box sx={{ p: { xs: 3.5, sm: 5, md: 6 }, pt: 0 }}>
            
            {/* Titre principal */}
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 26, sm: 34, md: 40 },
                fontWeight: 900,
                lineHeight: 1.3,
                color: isDark ? '#fff' : '#1a1a2e',
                mb: 3,
                letterSpacing: '-0.5px'
              }}
            >
              {currentService.title}
            </Typography>

            {/* Description introductive */}
            <Typography sx={{ fontSize: { xs: 15, md: 16.5 }, lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.7)' : '#4b5563', mb: 4 }}>
  {currentService.longDescription || currentService.description}
</Typography>

            {/* Séparateur discret */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)', mb: 4 }} />

            {/* Section Prestations */}
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: BRAND.primary }}>
              Ce que nous faisons concrètement :
            </Typography>

            {/* Liste des sous-services */}
            <Box 
              component="ul" 
              sx={{ 
                p: 0, 
                m: 0, 
                listStyle: 'none', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                mb: 5 
              }}
            >
              {(currentService.subServices || []).map((sub, idx) => (
                <Box
                  component="li"
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    fontSize: { xs: 14, md: 16 },
                    color: isDark ? 'rgba(255,255,255,0.85)' : '#374151',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircleIcon sx={{ color: BRAND.primary, fontSize: 22, flexShrink: 0, mt: '2px' }} />
                  {sub}
                </Box>
              ))}
            </Box>

            {/* Zone CTA recentrée */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => setOpenContact(true)}
                sx={{
                  background: `linear-gradient(90deg, ${BRAND.primary} 0%, #E0508F 100%)`,
                  color: '#fff',
                  fontWeight: 800,
                  px: { xs: 4, sm: 6 },
                  py: 1.8,
                  borderRadius: 3.5,
                  textTransform: 'none',
                  fontSize: { xs: 14, md: 15 },
                  boxShadow: `0 8px 24px ${BRAND.primary}40`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 28px ${BRAND.primary}60`,
                  },
                  transition: 'all 0.25s ease',
                  width: { xs: '100%', sm: 'auto' } // Pleine largeur sur mobile uniquement
                }}
              >
                Discuter de votre projet
              </Button>
            </Box>

          </Box>
        </Box>
        {/* ── FIN DU BLOC ── */}

      </Container>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </Box>
  )
}