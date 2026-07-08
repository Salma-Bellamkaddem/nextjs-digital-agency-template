'use client'

import React, { FC, ReactNode, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { keyframes } from '@emotion/react'

const ACCENT = '#ff2f7e'
const DURATION = 900 // ms — rapide

const spin = keyframes`
  to { transform: rotate(360deg); }
`

type Phase = 'running' | 'done'

function useLoaderProgress(duration: number, onFinished: () => void) {
  const [percent, setPercent] = useState(0)
  const [phase, setPhase] = useState<Phase>('running')

  useEffect(() => {
    let raf: number
    let start: number | null = null

    const tick = (t: number) => {
      if (start === null) start = t
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setPercent(pct)

      if (pct >= 100) {
        setPhase('done')
        onFinished()
        return
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration])

  return { percent: Math.round(percent), phase }
}

interface PageLoaderProps {
  duration?: number
  children?: ReactNode
}

const PageLoader: FC<PageLoaderProps> = ({ duration = DURATION, children }) => {
  const [contentVisible, setContentVisible] = useState(false)
  const { phase } = useLoaderProgress(duration, () => setContentVisible(true))

  const showLoader = phase !== 'done'

  return (
    <>
      {showLoader && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '3px solid rgba(255,255,255,0.15)',
              borderTopColor: ACCENT,
              animation: `${spin} 0.6s linear infinite`,
            }}
          />
        </Box>
      )}

      {children && (
        <Box
          sx={{
            opacity: contentVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          {children}
        </Box>
      )}
    </>
  )
}

export default PageLoader