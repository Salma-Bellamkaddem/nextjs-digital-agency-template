import React from 'react'
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

// ============================================================
// IMPORTS SYNCHRONES (Above the fold)
// ============================================================

import HomeHero from '@/app/_components/home-hero'
import HomeSocialProof from '@/app/_components/home-hero/home-social-proof'
import HomeValueProposition from '../_components/home-hero/HomeValueProposition'
import HomeVision from '../_components/Homevision'

// ============================================================
// IMPORTS DYNAMIQUES (Performance & SEO)
// ============================================================

const HomeServices = dynamic(
  () => import('@/app/_components/home-services')
)

// const HomeCaseStudies = dynamic(
//   () => import('../_components/home-hero/home-case-studies')
// )

const HomeMethodSection = dynamic(
  () => import('../_components/ Homemethod')
)

const HomeWhyNexsetia = dynamic(
  () => import('../_components/home-hero/home-why-nexsetia')
)

const HomeAbout = dynamic(
  () => import('@/app/_components/home-about')
)

const HomeTeam = dynamic(
  () => import('@/app/_components/home-our-motivation')
)

const HomeBlogSection = dynamic(
  () => import('@/app/_components/home-hero/home-blog')
)

const HomeFaq = dynamic(
  () => import('@/app/_components/Homefaq')
)

const HomeCta = dynamic(
  () => import('@/app/_components/home-cta')
)



// ============================================================
// HOMEPAGE
// ============================================================

export default function HomePage() {
  return (
    <Stack
      direction="column"
      sx={{
        width: '100%',
      }}
    >
      {/* 01 — HERO (Accroche & Proposition de valeur) */}
      <HomeHero />

      {/* 02 — SOCIAL PROOF (Réassurance immédiate) */}
      <HomeSocialProof />
      <Box id="home-value-proposition">
  <HomeValueProposition />
</Box>
<Box id="home-services">
        <HomeServices />
      </Box>
      <Box id="home-method">
        <HomeMethodSection />
      </Box>
  {/* 06 — POURQUOI NEXSETIA (4 piliers : Stratégie, Data, Exécution, Performance) */}
  <Box id="home-why-nexsetia">
        <HomeWhyNexsetia />
      </Box>
      {/* 03 — SERVICES (Solutions digitales proposées) */}
      <Box id="home-vision">

        <HomeVision />

      </Box>

      {/* 04 — ÉTUDES DE CAS (En pause pour le moment) */}
      {/*
      <Box id="home-case-studies">
        <HomeCaseStudies />
      </Box>
      */}

      {/* 05 — MÉTHODE (Processus d'accompagnement étape par étape) */}
      

      {/* 06 — POURQUOI NEXSETIA (4 piliers : Stratégie, Data, Exécution, Performance) */}
    

      {/* 07 — ABOUT (Présentation de l'agence et vision) */}
      <Box id="home-about">
        <HomeAbout />
      </Box>

      {/* 08 — ÉQUIPE (Visages et expertises fondatrices) */}
      <Box id="home-team">
        <HomeTeam />
      </Box>

      {/* 09 — BLOG / ACTUALITÉS (Expertise métier & SEO) */}
      <Box id="home-insights">
        <HomeBlogSection />
      </Box>

      {/* 10 — FAQ (Levée des objections avant contact) */}
      <Box id="home-faq">
        <HomeFaq />
      </Box>

      {/* 11 — CTA (Invitation à l'action) */}
      <Box id="home-cta">
        <HomeCta />
      </Box>

    
  
    </Stack>
  )
}