'use client'

import { useEffect, useState } from 'react'
import { PARTICLE_COLORS } from './loader'
import { Point2D } from 'framer-motion'
import { sampleSvgGroups, SvgSamplingConfig } from '@/lib/svg/ SVGSampler'

export interface EngineParticle {
  id: string
  targetX: number
  targetY: number
  startX: number
  startY: number
  size: number
  color: string
}

const CONFIG: SvgSamplingConfig = {
  url: '/loader/hummingbird.svg',
  viewBox: { w: 400, h: 300 },
  groups: {
    body: { ids: ['body', 'head', 'beak', 'legs'], count: 90 },
    wings: { ids: ['wing-back', 'wing-front'], count: 75 },
    tail: { ids: ['tail'], count: 40 },
  },
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function toParticles(points: Point2D[], prefix: string): EngineParticle[] {
  return points.map((point, i) => ({
    id: `${prefix}-${i}`,
    targetX: point.x,
    targetY: point.y,
    startX: rand(-20, 120),
    startY: rand(-40, 100),
    size: rand(1.2, 2.6),
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
  }))
}

export function useHummingbirdEngine() {
  const [groups, setGroups] = useState<{
    body: EngineParticle[]
    wings: EngineParticle[]
    tail: EngineParticle[]
  }>({ body: [], wings: [], tail: [] })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    sampleSvgGroups(CONFIG).then((sampled) => {
      if (cancelled) return
      setGroups({
        body: toParticles(sampled.body, 'body'),
        wings: toParticles(sampled.wings, 'wing'),
        tail: toParticles(sampled.tail, 'tail'),
      })
      setLoaded(true)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { ...groups, loaded }
}