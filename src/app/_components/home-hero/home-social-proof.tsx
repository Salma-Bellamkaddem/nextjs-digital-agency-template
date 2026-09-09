'use client'

import React, { FC, useState } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import StarIcon from '@mui/icons-material/Star'

const CLIENT_LOGOS = [
  { name: 'Client 1', src: '/images/clients/client-1.png', width: 220, height: 80 },
]

const HomeSocialProof: FC = () => {
  const t = useTranslations('HomeSocialProof')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({})

  const handleImageError = (src: string) => {
    setBrokenImages((prev) => ({ ...prev, [src]: true }))
  }

  const validLogos = CLIENT_LOGOS.filter((logo) => !brokenImages[logo.src])
  const isMultiple = validLogos.length > 2
  const marqueeLogos = isMultiple ? [...validLogos, ...validLogos] : validLogos

  if (validLogos.length === 0) return null

  return (
    <Box
      component="section"
      id="home-social-proof"
      sx={(theme) => ({
        py: { xs: 4, sm: 5, md: 6 },
        bgcolor: theme.palette.mode === 'dark' ? '#0E020B' : '#FFFFFF',
        borderTop: `1px solid ${
          theme.palette.mode === 'dark' ? 'rgba(250, 200, 235, 0.08)' : 'rgba(181, 55, 122, 0.12)'
        }`,
        borderBottom: `1px solid ${
          theme.palette.mode === 'dark' ? 'rgba(250, 200, 235, 0.08)' : 'rgba(181, 55, 122, 0.12)'
        }`,
        position: 'relative',
        direction: isRtl ? 'rtl' : 'ltr',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      })}
    >
      {isMultiple && (
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(${isRtl ? '50%' : '-50%'}); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      )}

      <Container maxWidth="lg">
        {/* En-tête : Titre + Note */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 3 }}
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: { xs: 12, sm: 13, md: 14 },
              fontWeight: 700,
              letterSpacing: isRtl ? 0 : 1,
              textTransform: 'uppercase',
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.75)' : '#4B5563',
              textAlign: { xs: 'center', sm: isRtl ? 'right' : 'left' },
            })}
          >
            {t('heading')}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.8}
            sx={(theme) => ({
              px: 2,
              py: 0.6,
              borderRadius: 999,
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(181, 55, 122, 0.06)',
              border: `1px solid ${
                theme.palette.mode === 'dark' ? 'rgba(250, 200, 235, 0.18)' : 'rgba(181, 55, 122, 0.18)'
              }`,
            })}
          >
            <Stack direction="row" spacing={0.2} sx={{ color: '#FBBF24' }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: { xs: 14, sm: 16 } }} />
              ))}
            </Stack>
            <Typography
              sx={(theme) => ({
                fontSize: 12.5,
                fontWeight: 800,
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#111827',
              })}
            >
              4.9/5
            </Typography>
            <Typography
              sx={(theme) => ({
                fontSize: 11.5,
                color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : '#6B7280',
              })}
            >
              • {t('reviewPlatform')}
            </Typography>
          </Stack>
        </Stack>

        {/* Affichage du/des logo(s) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 1,
          }}
        >
          {isMultiple ? (
            <Box className="marquee-track">
              {marqueeLogos.map((client, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: { xs: 3, sm: 5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.25s ease',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    onError={() => handleImageError(client.src)}
                    style={{
                      objectFit: 'contain',
                      maxHeight: '70px',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            /* Affichage centré pour un client unique */
            <Box
              sx={(theme) => ({
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: 4,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'rgba(181, 55, 122, 0.03)',
                border: `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(250, 200, 235, 0.12)'
                    : 'rgba(181, 55, 122, 0.12)'
                }`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: 'rgba(181, 55, 122, 0.35)',
                },
              })}
            >
              <Image
                src={validLogos[0].src}
                alt={validLogos[0].name}
                width={validLogos[0].width}
                height={validLogos[0].height}
                onError={() => handleImageError(validLogos[0].src)}
                style={{
                  objectFit: 'contain',
                  maxHeight: '75px', // Taille bien visible et nette
                  width: 'auto',
                  height: 'auto',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.05))',
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default HomeSocialProof