'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { LOADER } from './loader'

const LoaderBackground: FC = () => (
  <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
    <Box sx={{ position: 'absolute', inset: 0, backgroundColor: LOADER.bg }} />

    <Box
      sx={{
        position: 'absolute',
        top: '-20%',
        right: '-25%',
        width: '90%',
        height: '160%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, rgba(181,55,122,0.55), rgba(86,18,68,0.15) 70%)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '-30%',
        right: '-15%',
        width: '65%',
        height: '110%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(250,200,235,0.45), transparent 70%)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '15%',
        left: '30%',
        width: 320,
        height: 320,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${LOADER.glow} 0%, transparent 70%)`,
        filter: 'blur(50px)',
      }}
    />
  </Box>
)

export default LoaderBackground