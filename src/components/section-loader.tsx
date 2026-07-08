'use client'

import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { keyframes } from '@emotion/react'

const BRAND = {
  pink: '#ff2f7e',
  pinkLight: '#ff6fa8',
  purple: '#7a1e5c',
  purpleDark: '#2b0a20',
}

const LOADER_DURATION = 2400 // ms

// ─── Keyframes ────────────────────────────────────────────────────────────
const flicker = keyframes`
  0%, 100% { opacity: 0.55; }
  25% { opacity: 1; }
  50% { opacity: 0.7; }
  75% { opacity: 0.9; }
`

const bob = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-1deg); }
`

const drift = keyframes`
  0% { transform: translateX(0) translateY(0) scale(1); opacity: 0.9; }
  100% { transform: translateX(-140px) translateY(var(--driftY, 0px)) scale(0.3); opacity: 0; }
`

const streak = keyframes`
  0% { transform: translateX(0); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateX(-220px); opacity: 0; }
`

const pulseGlow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 12px rgba(255,47,126,0.55)); }
  50% { filter: drop-shadow(0 0 26px rgba(255,47,126,0.9)); }
`

const barShine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
`

// ─── Particules ───────────────────────────────────────────────────────────
interface Particle {
  id: number
  top: number
  size: number
  duration: number
  delay: number
  driftY: number
}

function useParticles(count: number): Particle[] {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 70 + 5,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 1.6 + 1.2,
        delay: Math.random() * 1.5,
        driftY: (Math.random() - 0.5) * 60,
      })),
    [count]
  )
}

// ─── Colibri low-poly (SVG inline) ────────────────────────────────────────
const HummingbirdSvg: FC<{ disintegrate: boolean }> = ({ disintegrate }) => (
  <Box
    component='svg'
    viewBox='0 0 400 300'
    sx={{
      width: { xs: 220, sm: 300, md: 360 },
      height: 'auto',
      position: 'relative',
      zIndex: 2,
      opacity: disintegrate ? 0 : 1,
      transform: disintegrate ? 'scale(1.3)' : 'scale(1)',
      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      animation: disintegrate
        ? 'none'
        : `${bob} 4s ease-in-out infinite, ${pulseGlow} 3s ease-in-out infinite`,
    }}
  >
    <defs>
      <linearGradient id='wingGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor={BRAND.pink} stopOpacity='0.85' />
        <stop offset='100%' stopColor={BRAND.purple} stopOpacity='0.35' />
      </linearGradient>
      <linearGradient id='bodyGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor={BRAND.pinkLight} />
        <stop offset='100%' stopColor={BRAND.purple} />
      </linearGradient>
      <linearGradient id='tailGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor={BRAND.purple} stopOpacity='0.8' />
        <stop offset='100%' stopColor={BRAND.pink} stopOpacity='0.3' />
      </linearGradient>
    </defs>

    <g opacity={0.85}>
      <polygon points='150,40 210,10 230,70 175,90' fill='url(#wingGrad)' stroke={BRAND.pinkLight} strokeWidth='0.6' />
      <polygon points='210,10 260,20 245,80 230,70' fill='url(#wingGrad)' stroke={BRAND.pinkLight} strokeWidth='0.6' opacity={0.8} />
      <polygon points='175,90 230,70 245,80 210,110' fill='url(#wingGrad)' stroke={BRAND.pinkLight} strokeWidth='0.6' opacity={0.7} />
    </g>

    <g style={{ animation: disintegrate ? 'none' : `${flicker} 2.4s ease-in-out infinite` }}>
      <polygon points='140,70 195,55 210,110 165,125' fill='url(#wingGrad)' stroke={BRAND.pink} strokeWidth='0.6' />
      <polygon points='195,55 235,60 225,115 210,110' fill='url(#wingGrad)' stroke={BRAND.pink} strokeWidth='0.6' opacity={0.85} />
    </g>

    <g style={{ animation: disintegrate ? 'none' : `${flicker} 3s ease-in-out infinite 0.4s` }}>
      <polygon points='150,150 190,140 210,220 175,235' fill='url(#tailGrad)' stroke={BRAND.purple} strokeWidth='0.5' />
      <polygon points='130,160 165,150 175,235 140,245' fill='url(#tailGrad)' stroke={BRAND.purple} strokeWidth='0.5' opacity={0.75} />
      <polygon points='110,170 150,158 140,245 105,250' fill='url(#tailGrad)' stroke={BRAND.purple} strokeWidth='0.5' opacity={0.6} />
    </g>

    <g>
      <polygon points='210,80 260,95 275,140 250,190 205,175 190,120' fill='url(#bodyGrad)' stroke={BRAND.pinkLight} strokeWidth='0.7' />
      <polygon points='260,95 300,110 290,150 275,140' fill='url(#bodyGrad)' stroke={BRAND.pinkLight} strokeWidth='0.6' opacity={0.9} />
      <polygon points='205,175 250,190 235,220 200,210' fill='url(#bodyGrad)' stroke={BRAND.purple} strokeWidth='0.6' opacity={0.8} />
    </g>

    <g>
      <polygon points='290,100 320,90 335,110 320,130 295,125' fill='url(#bodyGrad)' stroke={BRAND.pinkLight} strokeWidth='0.7' />
      <circle cx='308' cy='104' r='3.2' fill='#0a0a0a' stroke={BRAND.pinkLight} strokeWidth='0.5' />
    </g>

    <path d='M335,110 L390,104 L335,116 Z' fill={BRAND.pinkLight} opacity={0.9} />

    <path
      d='M235,215 L245,240 M248,222 L258,244'
      stroke={BRAND.pink}
      strokeWidth='1.4'
      strokeLinecap='round'
      fill='none'
      opacity={0.7}
    />
  </Box>
)

// ─── Progression + phases (auto, ne dépend plus d'un prop statique) ───────
type LoaderPhase = 'running' | 'disintegrating' | 'done'

function useLoaderProgress(duration: number, onFinished: () => void) {
  const [percent, setPercent] = useState(0)
  const [phase, setPhase] = useState<LoaderPhase>('running')

  useEffect(() => {
    let raf: number
    let start: number | null = null
    let finishTimeout: ReturnType<typeof setTimeout>

    const tick = (t: number) => {
      if (start === null) start = t
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setPercent(pct)

      if (pct >= 100) {
        setPhase('disintegrating')
        finishTimeout = setTimeout(() => {
          setPhase('done')
          onFinished()
        }, 600)
        return
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(finishTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration])

  return { percent: Math.round(percent), phase }
}

// ─── PageLoader ────────────────────────────────────────────────────────────
interface PageLoaderProps {
  duration?: number
  children?: ReactNode
}

const PageLoader: FC<PageLoaderProps> = ({ duration = LOADER_DURATION, children }) => {
  const particles = useParticles(22)
  const [contentVisible, setContentVisible] = useState(false)
  const { percent, phase } = useLoaderProgress(duration, () => setContentVisible(true))

  const disintegrate = phase === 'disintegrating'
  const showLoader = phase !== 'done'

  return (
    <>
      {showLoader && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            opacity: disintegrate ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, sm: 6 },
            backgroundColor: '#050004',
            backgroundImage:
              'radial-gradient(ellipse at 55% 45%, rgba(122,30,92,0.35) 0%, rgba(5,0,4,0.9) 60%, #050004 100%)',
            overflow: 'hidden',
          }}
        >
          {/* ── Scène oiseau + particules ── */}
          <Box
            sx={{
              position: 'relative',
              width: { xs: 300, sm: 420, md: 520 },
              height: { xs: 220, sm: 300, md: 360 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {[0, 0.3, 0.6, 0.9].map((delay, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  left: '10%',
                  top: `${45 + i * 3}%`,
                  width: 160,
                  height: i === 1 ? 3 : 1.4,
                  background: `linear-gradient(90deg, transparent, ${BRAND.pink}, transparent)`,
                  animation: disintegrate ? 'none' : `${streak} 1.8s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: disintegrate ? 0 : 1,
                  transition: 'opacity 0.3s',
                  zIndex: 1,
                  borderRadius: 4,
                }}
              />
            ))}

            {particles.map((p) => (
              <Box
                key={p.id}
                sx={
                  {
                    position: 'absolute',
                    left: '30%',
                    top: `${p.top}%`,
                    width: p.size,
                    height: p.size,
                    backgroundColor: BRAND.pink,
                    borderRadius: '2px',
                    boxShadow: `0 0 6px ${BRAND.pink}`,
                    animation: disintegrate ? 'none' : `${drift} ${p.duration}s ease-out infinite`,
                    animationDelay: `${p.delay}s`,
                    opacity: disintegrate ? 0 : 1,
                    transition: 'opacity 0.3s',
                    zIndex: 1,
                    '--driftY': `${p.driftY}px`,
                  } as React.CSSProperties
                }
              />
            ))}

            <HummingbirdSvg disintegrate={disintegrate} />
          </Box>

          {/* ── Barre de progression ── */}
          <Box
            sx={{
              width: { xs: 260, sm: 340, md: 400 },
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              opacity: disintegrate ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                flex: 1,
                height: 8,
                borderRadius: 6,
                backgroundColor: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: `${percent}%`,
                  borderRadius: 6,
                  background: `linear-gradient(90deg, ${BRAND.pink}, ${BRAND.purple})`,
                  boxShadow: `0 0 12px ${BRAND.pink}`,
                  transition: 'width 0.2s ease-out',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '40%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
                    animation: `${barShine} 1.6s linear infinite`,
                  }}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 14,
                color: '#fff',
                minWidth: 42,
                letterSpacing: 0.5,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {percent}%
            </Typography>
          </Box>
        </Box>
      )}

      {/* ── Contenu réel, révélé une fois le loader terminé ── */}
      {children && (
        <Box
          sx={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          {children}
        </Box>
      )}
    </>
  )
}

export default PageLoader