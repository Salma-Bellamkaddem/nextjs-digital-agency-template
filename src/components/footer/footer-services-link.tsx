'use client'

import React from 'react'
import RouterLink from 'next/link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLocale, useTranslations } from 'next-intl'
import { services } from '@/constants/service'
import FooterSectionTitle from './footer-section-title'

const FooterServicesLink = () => {
  const tGlobal = useTranslations()
  const tFooter = useTranslations('Footer.columns')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  // Affichage des 6 services principaux
  const displayedServices = services.slice(0, 6)

  return (
    <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <FooterSectionTitle title={tFooter('services')} />
      <Stack spacing={1.2} sx={{ alignItems: isRtl ? 'flex-end' : 'flex-start' }}>
        {displayedServices.map((item) => {
          const serviceTitle = item.titleKey
            ? tGlobal(item.titleKey)
            : (item as any).title || ''

          return (
            <RouterLink
              key={item.slug}
              href={`/${locale}/services/${item.slug}`}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s ease',
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 'inherit',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#FAC8EB',
                    textDecoration: 'underline',
                  },
                }}
              >
                {serviceTitle}
              </Typography>
            </RouterLink>
          )
        })}
      </Stack>
    </Box>
  )
}

export default FooterServicesLink