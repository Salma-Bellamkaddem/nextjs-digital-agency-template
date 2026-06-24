'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import { SectionTitle } from '@/components/core'
import { useTheme } from '@mui/material/styles'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

interface Data {
  id: number
  title: string
  icon?: ReactNode
  color: string
}

export const data: Data[] = [
  { id: 1, title: 'Marketing Digital', icon: null, color: BRAND.primary },
  { id: 2, title: 'Design UI/UX', icon: null, color: BRAND.primaryDark },
  { id: 3, title: 'Développement Web', icon: null, color: '#B73B7B' },
  { id: 4, title: 'Stratégie & Branding', icon: null, color: '#590842' },
]

const FeatureItem = ({ item }: { item: Data }) => (
  <Box sx={{ '&:hover': { '& .circle': { borderRadius: 2 } } }}>
    <Box
      className='circle'
      sx={{
        backgroundColor: item.color,
        width: { xs: 36, md: 44 },
        height: { xs: 36, md: 44 },
        borderRadius: '50%',
        transition: (theme) => theme.transitions.create(['border-radius']),
      }}
    />
    <Typography sx={{ fontSize: { xs: 11, md: 13 }, fontWeight: 600, mt: 1 }}>
      {item.title}
    </Typography>
  </Box>
)

const HomeAbout = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-about'
      sx={{
        width: '100%',
        py: { xs: 7, md: 14, lg: 18 },
        backgroundColor: 'background.paper',
        overflow: 'hidden', // ← empêche tout débordement horizontal
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 4 }} alignItems='center'>

          {/* ── Colonne texte ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle sx={{ color: BRAND.primary, backgroundColor: BRAND.primarySoft }}>
              QUI SOMMES-NOUS ?
            </SectionTitle>

            <Typography
              component='h2'
              sx={{
                fontSize: { xs: 26, sm: 32, md: 36, lg: 40 },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2.5,
                mt: 1.5,
              }}
            >
              Une agence qui transforme vos idées en succès
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: 15, md: 18 },
                mb: 1.5,
                lineHeight: 1.6,
              }}
            >
              Une agence digitale qui croit en la force de la stratégie et de la créativité.
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: 14, md: 16 },
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Nous accompagnons les entreprises marocaines et internationales dans leur
              transformation digitale : marketing, design, développement et branding réunis
              pour donner vie à votre marque et générer des résultats concrets.
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2 }}>
              {data.map((item, index) => (
                <Grid key={String(item.id + index)} size={{ xs: 6, md: 3 }}>
                  <FeatureItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* ── Colonne images desktop ── */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                // Hauteur fixe pour contenir les images absolues
                height: 480,
                // Contient les images dans cette colonne
                overflow: 'visible',
              }}
            >
              {/* Blob SVG décoratif — centré dans la colonne */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -80,
                  left: -60,
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              >
                <svg width='500' height='500' viewBox='0 0 1358 1089' fill='none'>
                  <defs>
                    <linearGradient id='figure_moving' x1='0%' x2='86.603%' y1='50%' y2='0%'>
                      <stop
                        offset='0%'
                        stopColor={palette.mode === 'dark' ? '#171717' : BRAND.primarySoft}
                        stopOpacity='1'
                      />
                      <stop
                        offset='99%'
                        stopColor={palette.mode === 'dark' ? '#171717' : BRAND.primaryLight}
                        stopOpacity='0.6'
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d='M1357.57 464.94C1357.57 605.537 1180.32 1063.16 848.987 1088.34C505.565 1088.34 591.877 719.737 426.004 719.737C311.195 719.737 0 831.507 0 525.037C0 218.566 368.288 0.336304 674.758 0.336304C981.229 0.336304 1357.57 158.47 1357.57 464.94Z'
                    fill='url(#figure_moving)'
                  />
                </svg>
              </Box>

              {/* Points décoratifs */}
              <Box sx={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
                <Image src='/images/dotted-1.png' width={100} height={100} quality={97} alt='' />
              </Box>

              {/* Photo principale — en haut à droite */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 280,
                  height: 280,
                  borderRadius: 3,
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                }}
              >
                <Image
                  src='/images/about-1.jpg'
                  width={350}
                  height={350}
                  quality={100}
                  alt="Équipe EXSETIA"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Photo secondaire — décalée en bas à gauche */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 160,
                  left: 20,
                  width: 240,
                  height: 240,
                  borderRadius: 3,
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                }}
              >
                <Image
                  src='/images/about-2.jpg'
                  width={330}
                  height={330}
                  quality={100}
                  alt='Projet EXSETIA'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Forme décorative droite */}
              <Box sx={{ position: 'absolute', bottom: 60, right: -10, zIndex: 1 }}>
                <Image src='/images/shape-2-b.png' width={50} height={80} quality={97} alt='' />
              </Box>
            </Box>
          </Grid>

          {/* ── Images mobile côte à côte ── */}
          <Grid size={{ xs: 12 }} sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
            <Box sx={{ flex: 1, borderRadius: 3, overflow: 'hidden' }}>
              <Image
                src='/images/about-1.jpg'
                width={350}
                height={350}
                quality={100}
                alt="Équipe EXSETIA"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
            <Box sx={{ flex: 1, borderRadius: 3, overflow: 'hidden' }}>
              <Image
                src='/images/about-2.jpg'
                width={330}
                height={330}
                quality={100}
                alt='Projet EXSETIA'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default HomeAbout