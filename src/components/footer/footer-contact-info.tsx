'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLocale, useTranslations } from 'next-intl'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import FooterSectionTitle from './footer-section-title'

const FooterContactInfo = () => {
  const t = useTranslations('Footer')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <FooterSectionTitle title={t('columns.contact')} />
      <Stack spacing={1.6} sx={{ alignItems: isRtl ? 'flex-end' : 'flex-start' }}>
        {/* Email */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          sx={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}
        >
          {!isRtl && <EmailOutlinedIcon sx={{ fontSize: 18, color: '#FAC8EB' }} />}
          <Box
            component="a"
            href="mailto:nexsetia@gmail.com"
            sx={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              '&:hover': { color: '#FAC8EB', textDecoration: 'underline' },
            }}
          >
            nexsetia@gmail.com
          </Box>
          {isRtl && <EmailOutlinedIcon sx={{ fontSize: 18, color: '#FAC8EB' }} />}
        </Stack>

        {/* Téléphone */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          sx={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}
        >
          {!isRtl && <PhoneOutlinedIcon sx={{ fontSize: 18, color: '#FAC8EB' }} />}
          <Box
            component="a"
            href="tel:+212600000000"
            sx={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              direction: 'ltr',
              '&:hover': { color: '#FAC8EB', textDecoration: 'underline' },
            }}
          >
            +212 6 00 00 00 00
          </Box>
          {isRtl && <PhoneOutlinedIcon sx={{ fontSize: 18, color: '#FAC8EB' }} />}
        </Stack>

        {/* Localisation */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="flex-start"
          sx={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}
        >
          {!isRtl && (
            <LocationOnOutlinedIcon sx={{ fontSize: 19, color: '#FAC8EB', mt: 0.2 }} />
          )}
          <Box>
            <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              {t('contact.location')}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              {t('contact.subLocation')}
            </Typography>
          </Box>
          {isRtl && (
            <LocationOnOutlinedIcon sx={{ fontSize: 19, color: '#FAC8EB', mt: 0.2 }} />
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default FooterContactInfo