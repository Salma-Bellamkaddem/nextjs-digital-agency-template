'use client'

import { useEffect, useRef, useState } from 'react'
import { LOADER } from './loader'

export type LoaderPhase = 'running' | 'holding' | 'disintegrating' | 'done'

export function clamp01(v: number) {
  return Math.min(1, Math.max(0, v))
}

export function mapRange(value: number, inMin: number, inMax: number) {
  return clamp01((value - inMin) / (inMax - inMin))
}

export function useLoaderProgress(onFinished: () => void) {
  const [percent, setPercent] = useState(0)
  const [phase, setPhase] = useState<LoaderPhase>('running')
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    let raf: number

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const t = clamp01(elapsed / LOADER.duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setPercent(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase('holding')
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (phase === 'holding') {
      const t1 = setTimeout(() => setPhase('disintegrating'), 350)
      return () => clearTimeout(t1)
    }
    if (phase === 'disintegrating') {
      const t2 = setTimeout(() => {
        setPhase('done')
        onFinished()
      }, 650)
      return () => clearTimeout(t2)
    }
  }, [phase, onFinished])

  return { percent, phase }
}