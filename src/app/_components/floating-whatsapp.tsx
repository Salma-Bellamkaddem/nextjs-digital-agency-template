'use client'

import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useLocale } from 'next-intl'

const WHATSAPP_NUMBER = '212655760065' // Votre numéro sans le '+'
const DEFAULT_MESSAGE = 'Bonjour, je souhaite obtenir un devis.'

export default function FloatingWhatsApp() {
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 28 },
        right: isRtl ? 'auto' : { xs: 16, md: 24 },
        left: isRtl ? { xs: 16, md: 24 } : 'auto',
        zIndex: 1300,
      }}
    >
      <Tooltip title="WhatsApp" placement={isRtl ? 'right' : 'left'} arrow>
        <Box sx={{ position: 'relative' }}>
          {/* Badge rouge de notification */}
          <Box
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              width: 12,
              height: 12,
              backgroundColor: '#FF3B30',
              border: '2px solid #FFFFFF',
              borderRadius: '50%',
              zIndex: 2,
            }}
          />

          <IconButton
            onClick={handleClick}
            aria-label="WhatsApp"
            sx={{
              width: { xs: 52, md: 58 },
              height: { xs: 52, md: 58 },
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#20BA5A',
                transform: 'scale(1.08) translateY(-2px)',
                boxShadow: '0 12px 28px rgba(37, 211, 102, 0.6)',
              },
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
            </svg>
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  )
}