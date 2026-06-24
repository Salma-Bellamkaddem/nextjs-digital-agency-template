'use client'

import React, { memo, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-scroll'
import ContactModal from '../ContactModal'

import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import Logo from '@/assets/logo.svg'

import { motion, AnimatePresence } from 'framer-motion'

const MotionTypography = motion(Typography)

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [contactOpen, setContactOpen] = useState(false)

  const SERVICES_TEXTS = [
    'Marketing Digital',
    'Design UI/UX',
    'Développement Web & Mobile',
    'Solutions Cloud',
    'Données & Analytique',
    'Intelligence Artificielle',
    'Solutions E-Commerce',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15, type: 'spring', bounce: 0.15 }}
    >
      <Stack
        direction='column'
        sx={{
          position: 'relative',
          minHeight: { xs: '100svh', md: '100vh' },
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2.5, sm: 3, md: 0 },
          py: { xs: 6, md: 0 },
          textAlign: 'center',
        }}
      >
        {/* ── Étiquette service animée ── */}
        <Stack
          direction='row'
          sx={(theme) => ({
            mb: 2,
            maxWidth: '100%',
            position: 'relative',
            zIndex: 2,
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.complex,
            }),
          })}
        >
          <Box sx={{ width: { xs: 24, md: 30 }, height: 'auto', mr: { xs: 1, md: 1.5 }, mt: '2px', flexShrink: 0 }}>
            <Box
              component={Logo}
              sx={{
                width: { xs: 24, md: 30 },
                height: { xs: 24, md: 30 },
                filter: `drop-shadow(0 0 6px ${BRAND.primary}66)`,
              }}
            />
          </Box>

          <Box sx={{ overflow: 'hidden' }}>
            <AnimatePresence mode='wait'>
              <MotionTypography
                key={currentIndex}
                variants={{
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { opacity: 0, y: -20 },
                }}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                sx={{
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  fontWeight: '600',
                  whiteSpace: { xs: 'nowrap', md: 'normal' },
                  color: BRAND.primary,
                }}
              >
                {SERVICES_TEXTS[currentIndex]}
              </MotionTypography>
            </AnimatePresence>
          </Box>
        </Stack>

        {/* ── Contenu principal — toujours au-dessus des décorations ── */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: { xs: '100%', md: 760 },
            position: 'relative',
            zIndex: 2,
            // Fond semi-transparent sur mobile pour lisibilité
            backgroundColor: {
              xs: 'rgba(255,255,255,0.75)',
              md: 'transparent',
            },
            backdropFilter: { xs: 'blur(6px)', md: 'none' },
            borderRadius: { xs: 4, md: 0 },
            px: { xs: 2.5, md: 0 },
            py: { xs: 3, md: 0 },
          }}
        >
          <Typography
            component='h2'
            sx={{
              mb: { xs: 2.5, md: 4 },
              fontSize: { xs: 26, sm: 32, md: 40, lg: 52 },
              lineHeight: { xs: 1.3, md: 1.5 },
              fontWeight: '800',
              color: 'text.primary',
            }}
          >
            Nous sommes une Agence Digitale
            <br />
            <Box
              component='span'
              sx={{
                background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mondiale & Tech
            </Box>
          </Typography>

          <Typography
            sx={{
              mb: { xs: 3, md: 4 },
              color: 'text.primary',
              fontWeight: 500,
              lineHeight: { xs: 1.8, md: 2 },
              fontSize: { xs: 14, sm: 15, md: 17 },
              px: { xs: 0, md: 0 },
            }}
          >
            Une agence digitale moderne spécialisée en{' '}
            <strong>Design</strong>,{' '}
            <strong>Développement</strong>,{' '}
            <strong>Branding</strong>,{' '}
            et <strong>Marketing en ligne</strong> pour propulser votre entreprise.
          </Typography>

          <Button
            onClick={() => setContactOpen(true)}
            sx={{
              px: { xs: 4, md: 5 },
              py: { xs: 1.4, md: 1.6 },
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 700,
              fontSize: { xs: 15, md: 16.5 },
              color: '#fff',
              backgroundColor: BRAND.primary,
              boxShadow: `0 10px 24px ${BRAND.primary}4D`,
              transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
              '&:hover': {
                backgroundColor: BRAND.primaryDark,
                transform: 'translateY(-2px)',
                boxShadow: `0 14px 28px ${BRAND.primary}66`,
              },
            }}
          >
            Contactez-nous
          </Button>
        </Box>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0 }}
        >
          <Box
            sx={{
              mt: { xs: '48px', md: '120px' },
              mb: { xs: 0, md: '-120px' },
              textAlign: 'center',
              display: { xs: 'none', sm: 'block' },
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Link
              to='home-about'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'block' }}
            >
              <Box
                component={MouseIcon}
                height={50}
                width={50}
                sx={(theme) => ({ color: theme.palette.text.secondary })}
              />
              <Typography
                sx={{
                  color: 'text.disabled',
                  fontWeight: '500',
                  fontSize: 12,
                  mt: 1.2,
                }}
              >
                Défiler pour voir plus
              </Typography>
            </Link>
          </Box>
        </motion.div>
      </Stack>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </motion.div>
  )
}

export default memo(HomeHeroContent)