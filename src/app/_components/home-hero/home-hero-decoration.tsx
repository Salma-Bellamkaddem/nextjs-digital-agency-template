'use client'
import React, { memo } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { animatedDecorations } from './home-hero-decoration.styles'

const HomeHeroDecoration = ({ isRtl = false }: { isRtl?: boolean }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {animatedDecorations.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              ...item.sxRoot(isRtl),
            }}
          >
            <m.div
              initial={item.initial(isRtl)}
              animate={item.animate(isRtl)}
              transition={item.transition}
            >
              <Box sx={{ ...item.sxImgContainer, position: 'relative' }}>
                <Image
                  src={item.image.imageUrl}
                  width={item.image.width}
                  height={item.image.height}
                  quality={75}
                  loading="lazy"
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                />
              </Box>
            </m.div>
          </Box>
        ))}
      </Box>
    </LazyMotion>
  )
}

export default memo(HomeHeroDecoration)