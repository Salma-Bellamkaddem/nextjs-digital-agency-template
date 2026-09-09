import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { TargetAndTransition, Transition, VariantLabels } from 'framer-motion'

// ─────────────────────────────────────────────
// Brand tokens (kept in sync with home-hero-content.tsx)
// ─────────────────────────────────────────────
export const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  growth: '#1F8A5C',
}

export type DecorationCardType = 'website' | 'social' | 'seo' | 'analytics'

export type AnimatedCard = {
  type: DecorationCardType
  sxRoot: () => SxProps<Theme>
  width: { xs: number; lg: number; xl: number }
  initial: (isRtl: boolean) => TargetAndTransition | VariantLabels | boolean
  animate: (isRtl: boolean) => TargetAndTransition | VariantLabels | boolean
  entranceTransition: Transition
  floatAnimate: TargetAndTransition
  floatTransition: Transition
}

// Ordered so the flow line drawn behind them reads Website → Social → SEO → Analytics,
// i.e. "we build the site, drive the traffic, get you found, prove the results."
export const animatedCards: Array<AnimatedCard> = [
  {
    // Mini browser mockup - Haut extérieur
    type: 'website',
    sxRoot: () => ({
      top: { lg: 100, xl: 110 },
      insetInlineEnd: { lg: '2%', xl: '5%' },
      zIndex: 2,
      display: { xs: 'none', lg: 'block' },
    }),
    width: { xs: 260, lg: 310, xl: 340 },
    initial: (isRtl) => ({ opacity: 0, y: -20, x: isRtl ? -30 : 30 }),
    animate: () => ({ opacity: 1, y: 0, x: 0 }),
    entranceTransition: { delay: 0.3, duration: 0.7, ease: 'easeOut' },
    floatAnimate: { y: [0, -8, 0] },
    floatTransition: { delay: 1.0, duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    // Google SEO card - Haut intérieur (vers le centre)
    type: 'seo',
    sxRoot: () => ({
      top: { lg: 90, xl: 100 },
      insetInlineEnd: { lg: '24%', xl: '26%' },
      zIndex: 1,
      display: { xs: 'none', lg: 'block' },
    }),
    width: { xs: 210, lg: 250, xl: 270 },
    initial: (isRtl) => ({ opacity: 0, y: -20, x: isRtl ? -20 : 20 }),
    animate: () => ({ opacity: 1, y: 0, x: 0 }),
    entranceTransition: { delay: 0.5, duration: 0.7, ease: 'easeOut' },
    floatAnimate: { y: [0, -6, 0] },
    floatTransition: { delay: 1.2, duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    // Analytics card - Milieu
    type: 'analytics',
    sxRoot: () => ({
      top: { lg: 300, xl: 320 },
      insetInlineEnd: { lg: '18%', xl: '20%' },
      zIndex: 4,
      display: { xs: 'none', lg: 'block' },
    }),
    width: { xs: 220, lg: 260, xl: 280 },
    initial: (isRtl) => ({ opacity: 0, y: 20, scale: 0.95 }),
    animate: () => ({ opacity: 1, y: 0, scale: 1 }),
    entranceTransition: { delay: 0.7, duration: 0.7, ease: 'easeOut' },
    floatAnimate: { y: [0, -7, 0] },
    floatTransition: { delay: 1.4, duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
  },
  {
    // Social media card - Bas extérieur
    type: 'social',
    sxRoot: () => ({
      top: { lg: 410, xl: 430 },
      insetInlineEnd: { lg: '3%', xl: '6%' },
      zIndex: 3,
      display: { xs: 'none', lg: 'block' },
    }),
    width: { xs: 190, lg: 240, xl: 260 },
    initial: (isRtl) => ({ opacity: 0, y: 20, x: isRtl ? -30 : 30 }),
    animate: () => ({ opacity: 1, y: 0, x: 0 }),
    entranceTransition: { delay: 0.9, duration: 0.7, ease: 'easeOut' },
    floatAnimate: { y: [0, 8, 0] },
    floatTransition: { delay: 1.6, duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
]