'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useLocale } from 'next-intl'

interface Props {
  title: string
}

const FooterSectionTitle: FC<Props> = ({ title }) => {
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isRtl ? 'flex-end' : 'flex-start',
      }}
    >
      <Typography
        component="h4"
        sx={{
          fontSize: '0.8125rem',
          fontWeight: 800,
          letterSpacing: isRtl ? 0.5 : 1,
          textTransform: 'uppercase',
          color: '#FAC8EB',
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 36,
          height: 2.5,
          borderRadius: 2,
          backgroundColor: '#B5377A',
        }}
      />
    </Box>
  )
}

export default FooterSectionTitle