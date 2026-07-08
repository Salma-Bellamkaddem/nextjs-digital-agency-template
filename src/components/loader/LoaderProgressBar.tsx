'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { LOADER } from './loader'

interface Props {
  percent: number
}

const LoaderProgressBar: FC<Props> = ({ percent }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.4 }}>
    <Box
      sx={{
        width: { xs: 180, md: 220 },
        height: 5,
        borderRadius: 999,
        backgroundColor: LOADER.barEmpty,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${percent}%`,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${LOADER.gradient.start}, ${LOADER.gradient.mid}, ${LOADER.gradient.end})`,
          boxShadow: `0 0 12px ${LOADER.glow}`,
          transition: 'width 0.15s linear',
        }}
      />
    </Box>

    <Typography
      sx={{
        fontSize: { xs: 13, md: 16 },
        fontWeight: 500,
        letterSpacing: '0.02em',
        color: LOADER.text,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {percent}%
    </Typography>
  </Box>
)

export default LoaderProgressBar