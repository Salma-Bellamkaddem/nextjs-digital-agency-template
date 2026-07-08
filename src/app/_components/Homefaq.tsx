'use client'

import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import ButtonBase from '@mui/material/ButtonBase'
import { FAQ_ITEMS, FaqIconKey } from '@/constants/home-faq.data'



const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

const PHONE_NUMBER = '+212600000000' // ⚠️ à remplacer par le vrai numéro

// ── Icônes inline ──
const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const DocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
)

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const HeadsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
    <path d="M21 15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3z" />
    <path d="M3 15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3z" />
    <path d="M18 21a4 4 0 0 0 4-4" />
  </svg>
)

const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
    <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const FAQ_ICONS: Record<FaqIconKey, (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  rocket: RocketIcon,
  clock: ClockIcon,
  document: DocumentIcon,
  globe: GlobeIcon,
  headset: HeadsetIcon,
}

const HomeFaq = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <Box
      component="section"
      sx={(theme) => ({
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 6, lg: 10 },
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#FDFAFC',
      })}
    >
      {/* ── En-tête ── */}
      <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography sx={{ color: BRAND.primary, fontWeight: 800, letterSpacing: 2, fontSize: 13, mb: 1 }}>
          FAQ
        </Typography>
        <Box sx={{ width: 32, height: 3, borderRadius: 999, backgroundColor: BRAND.primary, mb: 3 }} />
        <Typography
          component="h2"
          sx={(theme) => ({
            fontSize: { xs: 26, sm: 32, md: 42 },
            fontWeight: 800,
            lineHeight: 1.2,
            color: theme.palette.text.primary,
            mb: 2,
          })}
        >
          Vos questions,{' '}
          <Box component="span" sx={{ color: BRAND.primary }}>
            nos réponses
          </Box>
        </Typography>
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            fontSize: { xs: 15, md: 17 },
            maxWidth: 560,
            lineHeight: 1.6,
          })}
        >
          Vous avez des questions ? Voici les réponses aux interrogations les plus fréquentes de
          nos clients.
        </Typography>
      </Stack>

      {/* ── Contenu : illustration + accordéon ── */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ maxWidth: 1300, mx: 'auto' }}>
        {/* ── Carte illustration / CTA ── */}
        <Box
          sx={(theme) => ({
            flex: { md: '0 0 340px' },
            borderRadius: 4,
            p: 4,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(181,55,122,0.05)',
          })}
        >
          {/* Illustration bulles de discussion */}
          <Box sx={{ position: 'relative', height: 190, mb: 3 }}>
            <Box
              sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                width: 150,
                height: 150,
                borderRadius: '50%',
                border: `1.5px dashed ${BRAND.primary}55`,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 40,
                left: 0,
                width: 145,
                height: 110,
                borderRadius: '28px 28px 28px 4px',
                background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                boxShadow: `0 20px 30px ${BRAND.primary}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box key={i} sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#fff' }} />
              ))}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 95,
                left: 110,
                width: 100,
                height: 80,
                borderRadius: '22px 22px 4px 22px',
                backgroundColor: '#fff',
                boxShadow: '0 16px 26px rgba(87,13,63,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: BRAND.primary, fontWeight: 800, fontSize: 34, lineHeight: 1 }}>
                ?
              </Typography>
            </Box>
            <Typography sx={{ position: 'absolute', top: 0, right: 20, color: BRAND.primary, fontSize: 18 }}>
              ✦
            </Typography>
            <Typography sx={{ position: 'absolute', bottom: 10, left: 30, color: BRAND.primary, fontSize: 14 }}>
              ✦
            </Typography>
          </Box>

          <Typography
            sx={(theme) => ({
              fontSize: { xs: 20, md: 22 },
              fontWeight: 800,
              lineHeight: 1.3,
              color: theme.palette.text.primary,
              mb: 1.5,
            })}
          >
            Vous ne trouvez pas votre réponse ?
          </Typography>

          <Box sx={{ width: 32, height: 3, borderRadius: 999, backgroundColor: BRAND.primary, mb: 2 }} />

          <Typography
            sx={(theme) => ({
              fontSize: 14.5,
              lineHeight: 1.7,
              color: theme.palette.text.secondary,
              mb: 3,
            })}
          >
            Notre équipe est disponible pour répondre à toutes vos questions.
          </Typography>

          <ButtonBase
            onClick={handleCallClick}
            sx={(theme) => ({
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2.5,
              py: 1.6,
              borderRadius: 3,
              backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#fff',
              boxShadow: '0 8px 20px rgba(87,13,63,0.1)',
              color: BRAND.primary,
              fontWeight: 700,
              fontSize: 15,
              transition: 'transform 0.15s ease',
              '&:hover': { transform: 'translateY(-2px)' },
            })}
          >
            <Stack direction="row" spacing={1.2} alignItems="center">
              <CalendarIcon width={18} height={18} />
              <span>Réserver un appel</span>
            </Stack>
            <ArrowRightIcon width={16} height={16} />
          </ButtonBase>
        </Box>

        {/* ── Accordéon ── */}
        <Stack spacing={2} sx={{ flex: 1, minWidth: 0 }}>
          {FAQ_ITEMS.map((item) => {
            const Icon = FAQ_ICONS[item.icon]
            const isOpen = openId === item.id

            return (
              <Box
                key={item.id}
                sx={(theme) => ({
                  borderRadius: 3,
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : '#fff',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? 'none'
                      : '0 4px 18px rgba(87,13,63,0.06)',
                  border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  overflow: 'hidden',
                })}
              >
                <ButtonBase
                  onClick={() => handleToggle(item.id)}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 2.5, md: 3 },
                    py: 2.5,
                    textAlign: 'left',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: BRAND.primary,
                        backgroundColor: `${BRAND.primaryLight}40`,
                      }}
                    >
                      <Icon width={20} height={20} />
                    </Box>
                    <Typography
                      sx={(theme) => ({
                        fontSize: { xs: 15.5, md: 17 },
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      })}
                    >
                      {item.question}
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      flexShrink: 0,
                      color: BRAND.primary,
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <ChevronIcon width={18} height={18} />
                  </Box>
                </ButtonBase>

                <Collapse in={isOpen} timeout={200}>
                  <Box sx={{ px: { xs: 2.5, md: 3 }, pb: 2.75, pl: { xs: '4.5rem', md: '5rem' } }}>
                    <Typography
                      sx={(theme) => ({
                        fontSize: 14.5,
                        lineHeight: 1.75,
                        color: theme.palette.text.secondary,
                      })}
                    >
                      {item.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}

export default HomeFaq