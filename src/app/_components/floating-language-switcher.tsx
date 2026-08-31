'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { useLocale } from 'next-intl'
import LanguageSwitcher from '@/components/appbar/language-switcher'

export default function FloatingLanguageSwitcher() {
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 28 },
        left: isRtl ? 'auto' : { xs: 16, md: 24 },
        right: isRtl ? { xs: 16, md: 24 } : 'auto',
        zIndex: 1300,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(31, 7, 22, 0.9)' : 'rgba(255, 255, 255, 0.95)',
        borderRadius: '2rem',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
      }}
    >
      <LanguageSwitcher />
    </Box>
  )
}