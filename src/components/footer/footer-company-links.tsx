'use client'

import React from 'react'
import RouterLink from 'next/link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLocale, useTranslations } from 'next-intl'
import { companyMenus } from '@/constants/menus'
import FooterSectionTitle from './footer-section-title'

const FooterCompanyLinks = () => {
  const tNav = useTranslations('Navigation')
  const tFooter = useTranslations('Footer.columns')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <FooterSectionTitle title={tFooter('company')} />
      <Stack spacing={1.2} sx={{ alignItems: isRtl ? 'flex-end' : 'flex-start' }}>
        {companyMenus.map((item, idx) => {
          const cleanPath = item.path.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'
          const href = cleanPath === '/' ? `/${locale}` : `/${locale}${cleanPath}`

          return (
            <RouterLink
              key={idx}
              href={href}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
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
                {tNav(item.labelKey.replace('Navigation.', ''))}
              </Typography>
            </RouterLink>
          )
        })}
      </Stack>
    </Box>
  )
}

export default FooterCompanyLinks