'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { keyframes } from '@emotion/react'
import { useTranslations, useLocale } from 'next-intl'

import SearchIcon from '@mui/icons-material/Search'
import ExtensionIcon from '@mui/icons-material/Extension'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const growLine = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`
const floatY = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-8px); }
`
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`
const dotPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
`

const TIMELINE_CONFIG = [
  {
    icon: TrackChangesIcon,
    key: 'item1',
    render: (t: any) => (
      <>
        {t('timeline.item1.part1')}
        <Box component="span" sx={{ color: BRAND.primary, fontWeight: 700 }}>
          {t('timeline.item1.highlight')}
        </Box>
        {t('timeline.item1.part2')}
      </>
    ),
  },
  {
    icon: SearchIcon,
    key: 'item2',
    render: (t: any) => (
      <>
        {t('timeline.item2.part1')}
        <Box component="span" sx={{ color: BRAND.primary, fontWeight: 700 }}>
          {t('timeline.item2.highlight')}
        </Box>
        {t('timeline.item2.part2')}
      </>
    ),
  },
  {
    icon: ExtensionIcon,
    key: 'item3',
    render: (t: any) => (
      <>
        {t('timeline.item3.part1')}
        <Box component="span" sx={{ color: BRAND.primary, fontWeight: 700 }}>
          {t('timeline.item3.highlight')}
        </Box>
        {t('timeline.item3.part2')}
      </>
    ),
  },
  {
    icon: TrendingUpIcon,
    key: 'item4',
    render: (t: any) => (
      <>
        {t('timeline.item4.part1')}
        <Box component="span" sx={{ color: BRAND.primary, fontWeight: 700 }}>
          {t('timeline.item4.highlight1')}
        </Box>
        {t('timeline.item4.part2')}
        <Box component="span" sx={{ color: BRAND.primary, fontWeight: 700 }}>
          {t('timeline.item4.highlight2')}
        </Box>
        {t('timeline.item4.part3')}
      </>
    ),
  },
]

const STAIR_BLOCKS = [
  { x: 110, y: 560, w: 40, h: 36 },
  { x: 185, y: 505, w: 42, h: 40 },
  { x: 262, y: 448, w: 44, h: 44, key: 'generate' },
  { x: 340, y: 386, w: 46, h: 48, key: 'act' },
  { x: 418, y: 320, w: 48, h: 52, glow: true, key: 'analyze' },
  { x: 496, y: 248, w: 50, h: 56, glow: true, top: true, key: 'understand' },
]

const isoTop = (x: number, y: number, w: number) =>
  `${x},${y - w * 0.35} ${x + w},${y} ${x},${y + w * 0.35} ${x - w},${y}`
const isoLeft = (x: number, y: number, w: number, h: number) =>
  `${x - w},${y} ${x},${y + w * 0.35} ${x},${y + w * 0.35 + h} ${x - w},${y + h}`
const isoRight = (x: number, y: number, w: number, h: number) =>
  `${x},${y + w * 0.35} ${x + w},${y} ${x + w},${y + h} ${x},${y + w * 0.35 + h}`

const LABEL_POS: Record<string, { top: string; left: string }> = {
  understand: { top: '13%', left: '58%' },
  analyze: { top: '30%', left: '40%' },
  act: { top: '58%', left: '78%' },
  generate: { top: '76%', left: '58%' },
}

const HomeVision = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const t = useTranslations('Vision')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const SECTION_BG = isDark
    ? '#07030A'
    : `linear-gradient(160deg, ${BRAND.primarySoft} 0%, #ffffff 55%, ${BRAND.primarySoft} 100%)`

  const ICON_CIRCLE_BG = isDark ? '#07030A' : '#ffffff'
  const TEXT_MAIN = isDark ? '#ffffff' : BRAND.primaryDark
  const TEXT_SECONDARY = isDark ? 'rgba(255,255,255,0.75)' : '#4b5563'
  const TEXT_MUTED = isDark ? 'rgba(255,255,255,0.55)' : '#6b7280'
  const LABEL_BG = isDark ? 'rgba(18,6,15,0.85)' : 'rgba(255,255,255,0.92)'
  const LABEL_BORDER = isDark ? `${BRAND.primary}55` : `${BRAND.primaryLight}`
  const LABEL_SHADOW = isDark ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(181,55,122,0.15)'
  const RING_BORDER = (opacity: string) => (isDark ? `${BRAND.primary}${opacity}` : `${BRAND.primaryLight}${opacity}`)

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: SECTION_BG,
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.4s ease',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          {/* ── Colonne texte + timeline ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
                animation: `${fadeUp} 0.6s ease both`,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11.5,
                  letterSpacing: isRtl ? 1 : 2,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: BRAND.primary,
                  whiteSpace: 'nowrap',
                }}
              >
                {t('badge')}
              </Typography>
              <Box
                sx={{
                  height: 1,
                  flexGrow: 1,
                  maxWidth: 60,
                  backgroundColor: `${BRAND.primary}66`,
                  transformOrigin: isRtl ? 'right' : 'left',
                  animation: `${growLine} 0.8s ease 0.2s both`,
                }}
              />
            </Box>

            {/* Titre */}
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 30, sm: 36, md: 42 },
                lineHeight: isRtl ? 1.35 : 1.15,
                color: TEXT_MAIN,
                mb: 4,
                animation: `${fadeUp} 0.7s ease 0.1s both`,
                transition: 'color 0.4s ease',
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              {t('title.line1')} <br />
              {t('title.line2')}{' '}
              <Box component="span" sx={{ color: BRAND.primary }}>
                {t('title.highlight')}
              </Box>
            </Typography>

            {/* Décoration connecteur */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                animation: `${fadeIn} 0.8s ease 0.3s both`,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: BRAND.primary,
                  animation: `${dotPulse} 2.4s ease-in-out infinite`,
                }}
              />
              <Box
                sx={{
                  height: 1,
                  width: 200,
                  background: `linear-gradient(${isRtl ? '270deg' : '90deg'}, ${BRAND.primary}aa, transparent)`,
                  transformOrigin: isRtl ? 'right' : 'left',
                  animation: `${growLine} 0.9s ease 0.35s both`,
                }}
              />
            </Box>

            {/* Timeline */}
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                  [isRtl ? 'right' : 'left']: 24,
                  top: 24,
                  bottom: 24,
                  width: '1px',
                  background: `linear-gradient(180deg, ${BRAND.primary}88, ${BRAND.primary}22)`,
                  zIndex: 0,
                  transformOrigin: 'top',
                  animation: `${growLine} 1s ease 0.4s both`,
                }}
              />
              {TIMELINE_CONFIG.map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <Box
                    key={item.key}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      gap: 3,
                      mb: i === TIMELINE_CONFIG.length - 1 ? 0 : 4,
                      animation: `${fadeUp} 0.6s ease ${0.45 + i * 0.15}s both`,
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: ICON_CIRCLE_BG,
                        border: `1.5px solid ${BRAND.primary}88`,
                        color: isDark ? BRAND.primaryLight : BRAND.primary,
                        transition:
                          'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          borderColor: BRAND.primary,
                          boxShadow: `0 0 16px ${BRAND.primary}66`,
                        },
                      }}
                    >
                      <ItemIcon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                      sx={{
                        color: TEXT_SECONDARY,
                        fontSize: { xs: 14, md: 15.5 },
                        lineHeight: isRtl ? 1.85 : 1.8,
                        pt: 1,
                        textAlign: isRtl ? 'right' : 'left',
                        transition: 'color 0.4s ease',
                      }}
                    >
                      {item.render(t)}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Grid>

          {/* ── Colonne illustration escalier (force LTR pour la géométrie) ── */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              animation: `${fadeIn} 1s ease 0.3s both`,
              direction: 'ltr',
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
              <Box sx={{ position: 'absolute', inset: 0 }}>
                {/* Anneaux */}
                {[520, 400, 290].map((size, i) => (
                  <Box
                    key={size}
                    sx={{
                      position: 'absolute',
                      top: '38%',
                      left: '58%',
                      transform: 'translate(-50%, -50%)',
                      width: size,
                      height: size,
                      borderRadius: '50%',
                      border: `1px solid ${RING_BORDER(i === 0 ? '22' : i === 1 ? '33' : '44')}`,
                      animation: `${fadeIn} 1.2s ease ${0.2 + i * 0.15}s both`,
                      transition: 'border-color 0.4s ease',
                    }}
                  />
                ))}

                {/* SVG escalier */}
                <Box
                  component="svg"
                  viewBox="0 0 600 620"
                  sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                >
                  <defs>
                    <linearGradient id="stepTop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={BRAND.primaryLight} stopOpacity="0.9" />
                      <stop offset="100%" stopColor={BRAND.primary} stopOpacity="0.55" />
                    </linearGradient>
                    <linearGradient id="stepLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={BRAND.primary} stopOpacity={isDark ? 0.5 : 0.35} />
                      <stop offset="100%" stopColor={BRAND.primaryDark} stopOpacity={isDark ? 0.6 : 0.4} />
                    </linearGradient>
                    <linearGradient id="stepRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={BRAND.primary} stopOpacity={isDark ? 0.75 : 0.55} />
                      <stop offset="100%" stopColor={BRAND.primaryDark} stopOpacity={isDark ? 0.85 : 0.6} />
                    </linearGradient>
                    <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                      <stop offset="40%" stopColor={BRAND.primaryLight} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={BRAND.primary} stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {STAIR_BLOCKS.map((b, i) => (
                    <g
                      key={i}
                      opacity={isDark ? 0.55 + i * 0.08 : 0.75 + i * 0.04}
                      style={{
                        transformOrigin: `${b.x}px ${b.y}px`,
                        animation: `${fadeUp} 0.6s ease ${0.2 + i * 0.1}s both`,
                      }}
                    >
                      <polygon
                        points={isoLeft(b.x, b.y, b.w, b.h)}
                        fill="url(#stepLeft)"
                        stroke={`${BRAND.primary}55`}
                        strokeWidth={0.5}
                      />
                      <polygon
                        points={isoRight(b.x, b.y, b.w, b.h)}
                        fill="url(#stepRight)"
                        stroke={`${BRAND.primary}55`}
                        strokeWidth={0.5}
                      />
                      <polygon
                        points={isoTop(b.x, b.y, b.w)}
                        fill="url(#stepTop)"
                        stroke={`${BRAND.primaryLight}88`}
                        strokeWidth={0.75}
                      />
                    </g>
                  ))}

                  {/* Étincelle sommitale */}
                  {STAIR_BLOCKS.filter((b) => b.top).map((b, i) => (
                    <circle
                      key={i}
                      cx={b.x + b.w * 0.3}
                      cy={b.y - 6}
                      r={26}
                      fill="url(#sparkGlow)"
                      style={{
                        transformOrigin: `${b.x + b.w * 0.3}px ${b.y - 6}px`,
                        animation: `${pulseGlow} 2.6s ease-in-out infinite`,
                      }}
                    />
                  ))}
                  {STAIR_BLOCKS.filter((b) => b.top).map((b, i) => (
                    <circle key={`dot-${i}`} cx={b.x + b.w * 0.3} cy={b.y - 6} r={3} fill="#fff" />
                  ))}
                </Box>

                {/* Libellés flottants */}
                {STAIR_BLOCKS.filter((b) => b.key).map((b, i) => {
                  const key = b.key as string
                  return (
                    <Box
                      key={key}
                      sx={{
                        position: 'absolute',
                        top: LABEL_POS[key].top,
                        left: LABEL_POS[key].left,
                        px: 2,
                        py: 1.25,
                        borderRadius: 2.5,
                        backgroundColor: LABEL_BG,
                        border: `1px solid ${LABEL_BORDER}`,
                        backdropFilter: 'blur(6px)',
                        minWidth: 150,
                        boxShadow: LABEL_SHADOW,
                        transformOrigin: 'center',
                        animation: `${floatY} ${4 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                        transition:
                          'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease',
                        '&:hover': {
                          borderColor: BRAND.primary,
                          boxShadow: `0 8px 28px ${BRAND.primary}44`,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.25 }}>
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            backgroundColor: BRAND.primary,
                            flexShrink: 0,
                            animation: `${dotPulse} 2s ease-in-out infinite`,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: 12.5,
                            fontWeight: 800,
                            color: TEXT_MAIN,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                          }}
                        >
                          {t(`stairs.${key}.label`)}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: 11.5, color: TEXT_MUTED, pl: 1.5 }}>
                        {t(`stairs.${key}.sub`)}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeVision