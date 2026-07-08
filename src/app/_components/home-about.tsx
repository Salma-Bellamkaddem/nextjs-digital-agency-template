'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import { SectionTitle } from '@/components/core'
import { useTheme } from '@mui/material/styles'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

interface FeatureData {
  id: number
  title: string
  description: string
  icon: ReactNode
}

export const features: FeatureData[] = [
  {
    id: 1,
    title: 'Stratégie sur mesure',
    description:
      'Nous analysons vos enjeux pour créer des stratégies digitales adaptées à vos objectifs.',
    icon: <TrackChangesIcon sx={{ fontSize: 26 }} />,
  },
  {
    id: 2,
    title: 'Créativité & Innovation',
    description:
      'Des idées originales et des solutions innovantes pour vous démarquer.',
    icon: <DesignServicesIcon sx={{ fontSize: 26 }} />,
  },
  {
    id: 3,
    title: 'Résultats mesurables',
    description:
      'Nous mettons en place des actions orientées performance pour un impact durable.',
    icon: <TrendingUpIcon sx={{ fontSize: 26 }} />,
  },
  {
    id: 4,
    title: 'Accompagnement',
    description:
      'Nous vous accompagnons à chaque étape de votre développement digital.',
    icon: <GroupIcon sx={{ fontSize: 26 }} />,
  },
]

// Icône ronde associée à chaque paragraphe du bloc de texte (comme sur le visuel)
const paragraphIcon = (icon: ReactNode) => (
  <Box
    sx={{
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BRAND.primarySoft,
      color: BRAND.primary,
    }}
  >
    {icon}
  </Box>
)

const FeatureItem = ({ item, isLast }: { item: FeatureData; isLast: boolean }) => (
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        pr: { md: isLast ? 0 : 3 },
        borderRight: {
          xs: 'none',
          md: isLast ? 'none' : `1px solid ${BRAND.primarySoft}`,
        },
        height: '100%',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 52,
          height: 52,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: BRAND.primarySoft,
          color: BRAND.primary,
        }}
      >
        {item.icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: 14, md: 15 }, mb: 0.5 }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: 12.5, md: 13.5 }, color: 'text.secondary', lineHeight: 1.6 }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  </Grid>
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
        overflow: 'hidden',
        fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems='center'>

          {/* ── Colonne texte ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle sx={{ color: BRAND.primary, backgroundColor: BRAND.primarySoft }}>
              QUI SOMMES-NOUS ?
            </SectionTitle>

            <Typography
              component='h2'
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: 26, sm: 32, md: 36, lg: 40 },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2.5,
                mt: 1.5,
              }}
            >
              Nexsetia, votre partenaire <br />
              de <Box component='span' sx={{ color: BRAND.primary }}>croissance digitale</Box>
            </Typography>

            <Box
              sx={{
                width: 90,
                height: 5,
                borderRadius: 3,
                mb: 3,
                background: `linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.primaryLight} 100%)`,
              }}
            />

            {/* Paragraphe 1 — icône fusée */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2.5 }}>
              {paragraphIcon(<RocketLaunchIcon sx={{ fontSize: 22 }} />)}
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 14, md: 16 }, lineHeight: 1.8 }}>
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>Nexsetia</Box> est
                une agence digitale 360°, née de la volonté d&apos;une équipe de passionnés aux
                parcours complémentaires de mettre en commun leurs expertises, leur créativité
                et leur esprit d&apos;analyse pour accompagner les entreprises dans leur{' '}
                <Box component='span' sx={{ fontWeight: 700, color: BRAND.primary }}>développement digital</Box>.
              </Typography>
            </Box>

            {/* Paragraphe 2 — icône groupe */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2.5 }}>
              {paragraphIcon(<GroupIcon sx={{ fontSize: 22 }} />)}
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 14, md: 16 }, lineHeight: 1.8 }}>
                Aujourd&apos;hui, nous collaborons avec des entreprises issues d&apos;horizons variés,
                des jeunes structures aux entreprises déjà bien établies. Chaque projet est
                différent, tout comme les <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>défis</Box> qui l&apos;accompagnent.
              </Typography>
            </Box>

            {/* Paragraphe 3 — icône cible */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2.5 }}>
              {paragraphIcon(<TrackChangesIcon sx={{ fontSize: 22 }} />)}
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 14, md: 16 }, lineHeight: 1.8 }}>
                Certaines de nos clientes nous sollicitent pour concevoir l&apos;ensemble de leur{' '}
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>stratégie digitale</Box>, tandis que
                d&apos;autres recherchent un coup de boost ciblé, que ce soit pour optimiser leur{' '}
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
  référencement naturel (SEO)
</Box>
, développer leur{' '}
<Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
  communication digitale
</Box>
, piloter leurs campagnes
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>Google Ads</Box>, renforcer leur
                présence sur les <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>réseaux sociaux</Box> ou
                repenser leur <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>stratégie marketing</Box>.
              </Typography>
            </Box>

            {/* Paragraphe 4 — icône tendance */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 0 }}>
              {paragraphIcon(<TrendingUpIcon sx={{ fontSize: 22 }} />)}
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 14, md: 16 }, lineHeight: 1.8 }}>
                Quelle que soit l&apos;étape à laquelle se trouve votre entreprise, nous nous
                intégrons à votre projet pour intervenir là où nous pouvons avoir{' '}
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>le plus d&apos;impact</Box>. Notre
                objectif est de mettre en place les{' '}
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>solutions les plus adaptées</Box> afin
                de pérenniser <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>votre empreinte digitale</Box> et
                projeter votre visibilité, de manière optimale, au cœur de vos{' '}
                <Box component='span' sx={{ fontWeight: 700, color: 'text.primary' }}>audiences cibles</Box>.
              </Typography>
            </Box>
          </Grid>

          {/* ── Colonne images desktop ── */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'relative', height: 560 }}>

              {/* Blob SVG décoratif */}
              <Box sx={{ position: 'absolute', top: -60, right: -60, zIndex: 0, pointerEvents: 'none' }}>
                <svg width='560' height='560' viewBox='0 0 1358 1089' fill='none'>
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

              {/* Photo principale — large, haut droite (équipe autour de la table) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 420,
                  height: 340,
                  borderRadius: 4,
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }}
              >
                <Image
                  src='/images/about-1.webp'
                  width={840}
                  height={680}
                  quality={100}
                  alt='Équipe Nexsetia'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Photo secondaire — verticale, bas gauche (réunion / whiteboard) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 250,
                  left: -20,
                  width: 300,
                  height: 300,
                  borderRadius: 4,
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }}
              >
                <Image
                  src='/images/about-2.webp'
                  width={600}
                  height={600}
                  quality={100}
                  alt='Projet Nexsetia'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Badge logo "N" */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 220,
                  left: -20,
                  zIndex: 4,
                  width: 64,
                  height: 64,
                  borderRadius: 2.5,
                  backgroundColor: BRAND.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 24px rgba(181,55,122,0.35)',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 24 }}>N</Typography>
              </Box>

              {/* Carte citation */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  right: 0,
                  zIndex: 4,
                  width: 250,
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'flex-start',
                }}
              >
                <FormatQuoteIcon sx={{ color: BRAND.primary, fontSize: 28, flexShrink: 0 }} />
                <Typography sx={{ fontSize: 14, fontWeight: 700, lineHeight: 1.5 }}>
                  Nous transformons vos idées en{' '}
                  <Box component='span' sx={{ color: BRAND.primary }}>résultats concrets</Box>.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ── Images mobile côte à côte ── */}
          <Grid size={{ xs: 12 }} sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
            <Box sx={{ flex: 1, borderRadius: 3, overflow: 'hidden' }}>
              <Image
                src='/images/about-1.webp'
                width={350}
                height={350}
                quality={100}
                alt='Équipe Nexsetia'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
            <Box sx={{ flex: 1, borderRadius: 3, overflow: 'hidden' }}>
              <Image
                src='/images/about-2.webp'
                width={330}
                height={330}
                quality={100}
                alt='Projet Nexsetia'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </Grid>

        </Grid>

        {/* ── Rangée de features (pleine largeur) ── */}
        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            backgroundColor: 'background.default',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}
        >
          <Grid container spacing={{ xs: 3, md: 2 }}>
            {features.map((item, index) => (
              <FeatureItem key={item.id} item={item} isLast={index === features.length - 1} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeAbout