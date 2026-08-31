import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { TargetAndTransition, Transition, VariantLabels } from 'framer-motion'

export type AnimateDecoration = {
  sxRoot: (isRtl: boolean) => SxProps<Theme>
  sxImgContainer: SxProps<Theme>
  initial: (isRtl: boolean) => TargetAndTransition | VariantLabels | boolean
  animate: (isRtl: boolean) => TargetAndTransition | VariantLabels | boolean
  transition: Transition
  image: {
    imageUrl: string
    width: number
    height: number
  }
}

export const animatedDecorations: Array<AnimateDecoration> = [
  {
    // Stylo
    sxRoot: (isRtl) => ({
      top: 540,
      [isRtl ? 'left' : 'right']: { lg: 380, xl: 420 },
      zIndex: 3,
      transform: isRtl ? 'scaleX(-1) rotate(-22deg)' : 'rotate(22deg)',
      display: { xs: 'none', lg: 'block' },
    }),
    sxImgContainer: { width: 220 },
    initial: (isRtl) => ({
      rotate: isRtl ? 25 : -25,
      opacity: 0,
      y: 100,
    }),
    animate: (isRtl) => ({
      rotate: isRtl ? -22 : 22,
      opacity: 1,
      y: 0,
    }),
    transition: { delay: 0.5, duration: 0.8 },
    image: {
      imageUrl: '/images/hero/edding.webp',
      width: 217,
      height: 320,
    },
  },
  {
    // Smartphone
    sxRoot: (isRtl) => ({
      bottom: -180,
      [isRtl ? 'left' : 'right']: -100,
      zIndex: 1,
      display: { xs: 'none', lg: 'block' },
      pointerEvents: 'none',
      transform: isRtl ? 'scaleX(-1)' : 'none',
    }),
    sxImgContainer: { width: 620 },
    initial: (isRtl) => ({
      rotate: isRtl ? -22 : 22,
      opacity: 0,
      scale: 1.1,
      x: isRtl ? -100 : 100,
      y: 150,
    }),
    animate: (isRtl) => ({
      rotate: isRtl ? -18 : 18,
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    }),
    transition: { delay: 0.8, duration: 1.0 },
    image: {
      imageUrl: '/images/hero/smartphone.webp',
      width: 820,
      height: 820,
    },
  },
  {
    // Camera
    sxRoot: (isRtl) => ({
      top: -20,
      [isRtl ? 'left' : 'right']: 40,
      zIndex: 1,
      display: { xs: 'none', lg: 'block' },
    }),
    sxImgContainer: { width: 400 },
    initial: (isRtl) => ({
      rotate: isRtl ? 12 : -12,
      opacity: 0,
      x: isRtl ? -100 : 100,
      y: -40,
    }),
    animate: (isRtl) => ({
      rotate: isRtl ? 8 : -8,
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    }),
    transition: { delay: 1.0, duration: 0.8 },
    image: {
      imageUrl: '/images/hero/camera.webp',
      width: 458,
      height: 309,
    },
  },
]