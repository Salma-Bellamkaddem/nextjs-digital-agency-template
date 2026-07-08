'use client'

import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  origin: { x: number; y: number } // % du container
  active: boolean
  disintegrate: boolean
  amplitude?: number // degrés
  speed?: number // secondes par cycle
}

const WingAnimator: FC<Props> = ({ children, origin, active, disintegrate, amplitude = 6, speed = 1 / 12 }) => (
  <motion.div
    style={{ position: 'absolute', inset: 0, transformOrigin: `${origin.x}% ${origin.y}%` }}
    animate={disintegrate ? { rotate: 0 } : active ? { rotate: [-amplitude, amplitude, -amplitude] } : { rotate: 0 }}
    transition={active && !disintegrate ? { duration: speed, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
  >
    {children}
  </motion.div>
)

export default WingAnimator