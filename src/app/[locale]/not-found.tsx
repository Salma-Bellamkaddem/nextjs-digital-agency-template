'use client'

import React from 'react'
import RouterLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function NotFoundPage() {
  const t = useTranslations('Metadata.notFound')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 8, md: 12 },
        px: 2,
        direction: isRtl ? 'rtl' : 'ltr',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          sx={{
            fontSize: { xs: 72, sm: 110 },
            fontWeight: 900,
            color: '#B5377A',
            lineHeight: 1,
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          404
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 20, sm: 26 },
            fontWeight: 800,
            color: '#570D3F',
            mb: 1.5,
          }}
        >
          {t('title')}
        </Typography>

        <Typography
          sx={{
            color: '#4B5563',
            fontSize: { xs: 14, sm: 16 },
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          {t('description')}
        </Typography>

        <Button
          component={RouterLink}
          href={`/${locale}`}
          sx={{
            backgroundColor: '#B5377A',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: 14,
            borderRadius: '2rem',
            px: 3.5,
            py: 1.2,
            textTransform: 'none',
            boxShadow: '0 4px 14px rgba(181, 55, 122, 0.35)',
            '&:hover': {
              backgroundColor: '#570D3F',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          {isRtl ? 'العودة إلى الصفحة الرئيسية' : "Retour à l'accueil"}
        </Button>
      </Container>
    </Box>
  )
}