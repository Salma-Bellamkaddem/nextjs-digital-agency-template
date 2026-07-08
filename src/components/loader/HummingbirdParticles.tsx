'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { useHummingbirdEngine, type EngineParticle } from './useHummingbirdEngine'
import WingAnimator from './WingAnimator'

const WING_ORIGIN = { x: 52, y: 30 } // épaule, en % du viewBox 400x300 → ~(210,90)
const TAIL_ORIGIN = { x: 45, y: 55 } // base de la queue

interface RenderGroupProps {
  points: EngineParticle[]
  formProgress: number
  particleOpacity: number
  disintegrate: boolean
}

const RenderGroup: FC<RenderGroupProps> = ({ points, formProgress, particleOpacity, disintegrate }) => {
  const lerp = (start: number, target: number) => start + (target - start) * formProgress

  return (
    <>
      {points.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            left: `${lerp(p.startX, p.targetX)}%`,
            top: `${lerp(p.startY, p.targetY)}%`,
            opacity: disintegrate ? 0 : particleOpacity * (0.3 + formProgress * 0.7),
            scale: disintegrate ? 2.2 : 1,
          }}
          transition={{
            left: { duration: 0.4, ease: 'easeOut' },
            top: { duration: 0.4, ease: 'easeOut' },
            opacity: { duration: 0.4 },
            scale: { duration: 0.6, ease: 'easeOut' },
          }}
          style={{
            position: 'absolute',
            width: p.size * 2,
            height: p.size * 2,
            borderRadius: p.size > 2 ? '2px' : '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 1.4}px ${p.color}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  )
}

interface Props {
  formProgress: number
  particleOpacity: number
  wingBeatActive: boolean
  disintegrate: boolean
}

const HummingbirdParticles: FC<Props> = ({ formProgress, particleOpacity, wingBeatActive, disintegrate }) => {
  const { body, wings, tail, loaded } = useHummingbirdEngine()

  if (!loaded) return null

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <RenderGroup points={body} formProgress={formProgress} particleOpacity={particleOpacity} disintegrate={disintegrate} />
      </Box>

      <WingAnimator origin={WING_ORIGIN} active={wingBeatActive} disintegrate={disintegrate}>
        <RenderGroup points={wings} formProgress={formProgress} particleOpacity={particleOpacity} disintegrate={disintegrate} />
      </WingAnimator>

      <WingAnimator origin={TAIL_ORIGIN} active={wingBeatActive} disintegrate={disintegrate} amplitude={2} speed={0.5}>
        <RenderGroup points={tail} formProgress={formProgress} particleOpacity={particleOpacity} disintegrate={disintegrate} />
      </WingAnimator>
    </Box>
  )
}

export default HummingbirdParticles