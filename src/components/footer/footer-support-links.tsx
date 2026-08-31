'use client'

import React, { FC, ReactNode } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import RouterLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { FooterSectionTitle } from '@/components/footer'
import { supportLinks } from '@/constants/menus'

const BRAND = {
  primary: '#B5377A',
  primaryLight: '#FAC8EB',
}

interface LinkItemProps {
  label: string
  path: string
  icon?: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon }) => {
  const locale = useLocale()
  const isRtl = locale === 'ar'

  // Construction propre du lien avec la locale
  const cleanPath = path.replace(/^\/(fr|ar|en)(?=\/|$)/, '')
  const href = cleanPath.startsWith('/')
    ? `/${locale}${cleanPath}`
    : `/${locale}/${cleanPath}`

  return (
    <RouterLink
      href={href}
      style={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: '0.875rem',
        transition: 'color 0.2s ease',
      }}
    >
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: BRAND.primaryLight,
            '& svg': {
              fontSize: 16,
            },
          }}
        >
          {icon}
        </Box>
      )}

      <Typography
        component="span"
        sx={{
          fontSize: 'inherit',
          fontWeight: 500,
          textAlign: isRtl ? 'right' : 'left',
          '&:hover': {
            color: BRAND.primaryLight,
            textDecoration: 'underline',
          },
        }}
      >
        {label}
      </Typography>
    </RouterLink>
  )
}

const FooterSupportLinks: FC = () => {
  const tNav = useTranslations('Navigation')
  const tFooter = useTranslations('Footer.columns')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <FooterSectionTitle title={tFooter('support')} />
      <Stack spacing={1.2} sx={{ alignItems: isRtl ? 'flex-end' : 'flex-start' }}>
        {supportLinks.map((item, index) => {
          const label = item.labelKey
            ? tNav(item.labelKey.replace('Navigation.', ''))
            : (item as any).label || ''

          return (
            <LinkItem
              key={`${item.labelKey || index}-${index}`}
              label={label}
              path={item.path}
              icon={item.icon}
            />
          )
        })}
      </Stack>
    </Box>
  )
}

export default FooterSupportLinks