'use client'
import React, { memo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { animatedCards, BRAND, DecorationCardType } from './home-hero-decoration.styles'

const CardShell = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      borderRadius: 3.5,
      backgroundColor: '#fff',
      boxShadow: '0 18px 36px rgba(87,13,63,0.12)',
      border: `1px solid ${BRAND.primaryLight}66`,
      overflow: 'hidden',
    }}
  >
    {children}
  </Box>
)

const WebsiteCard = () => (
  <CardShell>
    <Stack
      direction="row"
      spacing={0.8}
      alignItems="center"
      sx={{
        px: 1.6,
        py: 1.1,
        backgroundColor: '#F7EEF4',
        borderBottom: `1px solid ${BRAND.primaryLight}55`,
      }}
    >
      {['#F3A6C9', '#F3C9DE', '#E9E9EF'].map((c) => (
        <Box key={c} sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c }} />
      ))}
      <Box
        sx={{
          ml: 1.2,
          flex: 1,
          height: 18,
          borderRadius: 999,
          backgroundColor: '#fff',
          fontSize: 10,
          color: BRAND.primaryDark,
          display: 'flex',
          alignItems: 'center',
          px: 1.2,
          fontWeight: 700,
        }}
      >
        nexsetia.com
      </Box>
    </Stack>
    <Box sx={{ p: 1.8 }}>
      <Box sx={{ width: '55%', height: 10, borderRadius: 999, backgroundColor: BRAND.primaryDark, mb: 1 }} />
      <Box sx={{ width: '80%', height: 6, borderRadius: 999, backgroundColor: '#EEE1EA', mb: 0.8 }} />
      <Box sx={{ width: '65%', height: 6, borderRadius: 999, backgroundColor: '#EEE1EA', mb: 1.5 }} />
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            px: 1.5,
            py: 0.6,
            borderRadius: 999,
            backgroundColor: BRAND.primary,
            fontSize: 9.5,
            fontWeight: 700,
            color: '#fff',
          }}
        >
          Nos services
        </Box>
        <Box sx={{ flex: 1, height: 22, borderRadius: 1.5, backgroundColor: '#F7EEF4' }} />
      </Stack>
    </Box>
  </CardShell>
)

const SocialCard = () => (
  <CardShell>
    <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.4, py: 1.1 }}>
      <Box
        sx={{
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
          flexShrink: 0,
        }}
      />
      <Box>
        <Box sx={{ width: 75, height: 7, borderRadius: 999, backgroundColor: BRAND.primaryDark, mb: 0.5 }} />
        <Box sx={{ width: 48, height: 6, borderRadius: 999, backgroundColor: '#EEE1EA' }} />
      </Box>
    </Stack>
    <Box
      sx={{
        mx: 1.4,
        mb: 1.3,
        height: 85,
        borderRadius: 2,
        background: `linear-gradient(135deg, ${BRAND.primaryLight}88, ${BRAND.primary}55)`,
      }}
    />
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ px: 1.4, pb: 1.2 }}>
      <Typography sx={{ fontSize: 12, color: BRAND.primary }}>♥</Typography>
      <Typography sx={{ fontSize: 10, fontWeight: 700, color: BRAND.primaryDark }}>
        1,2k mentions j&rsquo;aime
      </Typography>
    </Stack>
  </CardShell>
)

const SeoCard = () => (
  <CardShell>
    <Box sx={{ p: 1.6 }}>
      <Stack direction="row" spacing={0.8} alignItems="center" sx={{ mb: 1 }}>
        <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F1E4EE' }} />
        <Typography sx={{ fontSize: 10, fontWeight: 700, color: '#5F6368' }}>Google</Typography>
      </Stack>
      <Typography sx={{ fontSize: 11.5, fontWeight: 700, color: '#1A0DAB', lineHeight: 1.3 }}>
        Nexsetia — Agence digitale
      </Typography>
      <Typography sx={{ fontSize: 9, color: '#006621', mb: 0.6 }}>www.nexsetia.com</Typography>
      <Stack direction="row" spacing={0.4} sx={{ mb: 0.8 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Typography key={i} sx={{ fontSize: 10, color: BRAND.primary, lineHeight: 1 }}>
            ★
          </Typography>
        ))}
      </Stack>
      <Box sx={{ width: '90%', height: 5, borderRadius: 999, backgroundColor: '#ECECEC', mb: 0.5 }} />
      <Box sx={{ width: '70%', height: 5, borderRadius: 999, backgroundColor: '#ECECEC' }} />
    </Box>
  </CardShell>
)

const AnalyticsCard = () => (
  <CardShell>
    <Box sx={{ p: 1.8 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 0.8 }}>
        <Box>
          <Typography sx={{ fontSize: 9.5, fontWeight: 700, color: '#8A8A99', letterSpacing: 0.2 }}>
            Visiteurs
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 900, color: BRAND.primaryDark, lineHeight: 1.1 }}>
            +34%
          </Typography>
        </Box>
        <Box
          sx={{
            px: 1,
            py: 0.4,
            borderRadius: 999,
            backgroundColor: `${BRAND.growth}1A`,
            color: BRAND.growth,
            fontSize: 10,
            fontWeight: 800,
          }}
        >
          ↗
        </Box>
      </Stack>
      <Box component="svg" viewBox="0 0 160 46" sx={{ width: '100%', height: 52, display: 'block' }}>
        <m.polyline
          points="2,38 26,30 50,34 74,18 98,22 122,8 158,4"
          fill="none"
          stroke={BRAND.primary}
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.1, ease: 'easeOut' }}
        />
      </Box>
    </Box>
  </CardShell>
)

const CARD_RENDERERS: Record<DecorationCardType, React.FC> = {
  website: WebsiteCard,
  social: SocialCard,
  seo: SeoCard,
  analytics: AnalyticsCard,
}

const FlowLine = ({ isRtl }: { isRtl: boolean }) => (
  <Box
    component="svg"
    viewBox="0 0 600 600"
    sx={{
      position: 'absolute',
      top: 50,
      insetInlineEnd: { lg: 0, xl: 30 },
      width: { lg: 580, xl: 640 },
      height: 560,
      zIndex: 0,
      display: { xs: 'none', lg: 'block' },
      transform: isRtl ? 'scaleX(-1)' : 'none',
      pointerEvents: 'none',
    }}
  >
    <m.path
      d="M 220 160 C 320 140, 420 150, 430 220 C 440 300, 340 330, 260 370 C 180 410, 240 500, 420 480"
      fill="none"
      stroke={BRAND.primary}
      strokeOpacity={0.25}
      strokeWidth={2}
      strokeDasharray="2 8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.0, duration: 1.4, ease: 'easeOut' }}
    />
  </Box>
)

const HomeHeroDecoration = ({ isRtl = false }: { isRtl?: boolean }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Box
        key={isRtl ? 'hero-deco-rtl' : 'hero-deco-ltr'}
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          direction: isRtl ? 'rtl' : 'ltr',
        }}
      >
        <FlowLine isRtl={isRtl} />

        {animatedCards.map((card) => {
          const Renderer = CARD_RENDERERS[card.type]
          return (
            <Box
              key={card.type}
              sx={{
                position: 'absolute',
                ...card.sxRoot(),
                width: card.width,
              }}
            >
              <m.div
                initial={card.initial(isRtl)}
                animate={card.animate(isRtl)}
                transition={card.entranceTransition}
              >
                <m.div animate={card.floatAnimate} transition={card.floatTransition}>
                  <Renderer />
                </m.div>
              </m.div>
            </Box>
          )
        })}
      </Box>
    </LazyMotion>
  )
}

export default memo(HomeHeroDecoration)