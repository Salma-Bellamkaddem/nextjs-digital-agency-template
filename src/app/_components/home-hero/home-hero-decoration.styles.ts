import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import {
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'

type AnimateDecoration = {
  sxRoot: SxProps<Theme>
  sxImgContainer: SxProps<Theme>
  initial: TargetAndTransition | VariantLabels | boolean
  animate: TargetAndTransition | VariantLabels | boolean,
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
    sxRoot: {
      top: 540,
      right: 400,
      zIndex: 3,
      transform: 'rotate(22deg)',
      display: { xs: 'none', lg: 'block' },
    },
    sxImgContainer: {
      width: 240,
    },
    initial: {
      rotate: -25,
      opacity: 0,
      y: 120,
    },
    animate: {
      rotate: 22,
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: 0.5,
      duration: 0.9,
    },
    image: {
      imageUrl: '/images/hero/edding.webp',
      width: 217,
      height: 320,
    },
  },

  {
    // Smartphone
    sxRoot: {
      bottom: -190,
      right: -110,
      zIndex: 5,
      display: { xs: 'none', lg: 'block' },
      pointerEvents: 'none',
    },
    sxImgContainer: {
      width: 640,
    },
    initial: {
      rotate: 22,
      opacity: 0,
      scale: 1.15,
      x: 120,
      y: 180,
    },
    animate: {
      rotate: 18,
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    transition: {
      delay: 0.9,
      duration: 1.1,
    },
    image: {
      imageUrl: '/images/hero/smartphone.webp',
      width: 820,
      height: 820,
    },
  },

  {
    // Camera
    sxRoot: {
      top: -25,
      right: 60,
      zIndex: 4,
      display: { xs: 'none', lg: 'block' },
    },
    sxImgContainer: {
      width: 440,
    },
    initial: {
      rotate: -12,
      opacity: 0,
      scale: 1.08,
      x: 120,
      y: -50,
    },
    animate: {
      rotate: -8,
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
    transition: {
      delay: 1.1,
      duration: 0.9,
    },
    image: {
      imageUrl: '/images/hero/camera.webp',
      width: 458,
      height: 309,
    },
  },
]