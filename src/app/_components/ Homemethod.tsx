'use client'

import React from 'react'
import { useTranslations, useLocale } from 'next-intl'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const BarChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
)

const BulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.79.79 1.23 1.42 1.41 2.5" />
  </svg>
)

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
)

const PieChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
)

const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
    <path d="M16 7h6v6" />
  </svg>
)

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const ArrowRightIcon = ({ isRtl, ...props }: React.SVGProps<SVGSVGElement> & { isRtl?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: isRtl ? 'rotate(180deg)' : 'none' }}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const STEPS_CONFIG = [
  { number: '01', key: 'step1', icon: SearchIcon, color: BRAND.primary },
  { number: '02', key: 'step2', icon: BarChartIcon, color: BRAND.primaryDark },
  { number: '03', key: 'step3', icon: BulbIcon, color: BRAND.primary },
  { number: '04', key: 'step4', icon: CodeIcon, color: BRAND.primaryDark },
  { number: '05', key: 'step5', icon: PieChartIcon, color: BRAND.primary },
  { number: '06', key: 'step6', icon: TrendingUpIcon, color: BRAND.primaryDark },
]

const HomeMethodSection = () => {
  const t = useTranslations('Method')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box
      id="method"
      component="section"
      sx={(theme) => ({
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 6, lg: 10 },
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#FDFAFC',
      })}
    >
      {/* ── En-tête ── */}
      <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
        <Typography
          sx={{
            color: BRAND.primary,
            fontWeight: 800,
            letterSpacing: isRtl ? 1 : 2,
            fontSize: 13,
            mb: 1,
          }}
        >
          {t('badge')}
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 3,
            borderRadius: 999,
            backgroundColor: BRAND.primary,
            mb: 3,
          }}
        />
        <Typography
          component="h2"
          sx={(theme) => ({
            fontSize: { xs: 26, sm: 32, md: 42 },
            fontWeight: 800,
            lineHeight: isRtl ? 1.4 : 1.2,
            color: theme.palette.text.primary,
            mb: 2,
          })}
        >
          {t('title.part1')}{' '}
          <Box component="span" sx={{ color: BRAND.primary }}>
            {t('title.highlight')}
          </Box>
        </Typography>
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            fontSize: { xs: 15, md: 17 },
            maxWidth: 620,
            lineHeight: isRtl ? 1.8 : 1.6,
          })}
        >
          {t('description')}
        </Typography>
      </Stack>

      {/* ── Étapes ── */}
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        alignItems={{ xs: 'stretch', lg: 'flex-start' }}
        justifyContent="center"
        spacing={{ xs: 4, lg: 0 }}
        sx={{ maxWidth: 1400, mx: 'auto' }}
      >
        {STEPS_CONFIG.map((step, index) => {
          const Icon = step.icon
          const isLast = index === STEPS_CONFIG.length - 1

          return (
            <React.Fragment key={step.number}>
              <Stack alignItems="center" sx={{ flex: 1, minWidth: 0, px: { lg: 1 } }}>
                {/* Icône ronde */}
                <Box
                  sx={{
                    width: 74,
                    height: 74,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    background: `linear-gradient(135deg, ${step.color} 0%, ${BRAND.primaryDark} 100%)`,
                    boxShadow: `0 12px 24px ${step.color}55`,
                    mb: 2,
                  }}
                >
                  <Icon width={28} height={28} />
                </Box>

                {/* Numéro */}
                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: step.color,
                    mb: 0.5,
                  }}
                >
                  {step.number}
                </Typography>

                {/* Titre */}
                <Typography
                  sx={(theme) => ({
                    fontSize: 18,
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    mb: 1,
                    textAlign: 'center',
                  })}
                >
                  {t(`steps.${step.key}.title`)}
                </Typography>

                {/* Trait */}
                <Box
                  sx={{
                    width: 28,
                    height: 3,
                    borderRadius: 999,
                    backgroundColor: BRAND.primary,
                    mb: 2,
                  }}
                />

                {/* Carte description */}
                <Box
                  sx={(theme) => ({
                    width: '100%',
                    maxWidth: 260,
                    borderRadius: 3,
                    p: 2.5,
                    textAlign: 'center',
                    backgroundColor:
                      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(181,55,122,0.04)',
                  })}
                >
                  <Typography
                    sx={(theme) => ({
                      fontSize: 13.5,
                      lineHeight: isRtl ? 1.8 : 1.65,
                      color: theme.palette.text.secondary,
                    })}
                  >
                    {t(`steps.${step.key}.description`)}
                  </Typography>
                </Box>
              </Stack>

              {/* Flèche directionnelle (desktop) */}
              {!isLast && (
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: BRAND.primary,
                    px: 0.5,
                    pt: 4.5,
                  }}
                >
                  <ArrowRightIcon width={20} height={20} isRtl={isRtl} />
                </Box>
              )}
            </React.Fragment>
          )
        })}
      </Stack>

      {/* ── Bandeau final ── */}
      <Box
        sx={{
          mt: { xs: 6, md: 8 },
          maxWidth: 1400,
          mx: 'auto',
          borderRadius: 4,
          overflow: 'hidden',
          background: `linear-gradient(120deg, ${BRAND.primaryDark} 0%, #2A0A1F 60%, ${BRAND.primaryDark} 100%)`,
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 5 },
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 4 }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          textAlign={{ xs: 'center', md: isRtl ? 'right' : 'left' }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: 64,
              height: 64,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: BRAND.primaryLight,
              backgroundColor: 'rgba(255,255,255,0.08)',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <RocketIcon width={28} height={28} />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 19, md: 24 },
              fontWeight: 800,
              lineHeight: isRtl ? 1.5 : 1.3,
              color: '#fff',
              flexShrink: 0,
              maxWidth: { md: 400 },
            }}
          >
            {t('banner.title.part1')}{' '}
            <Box component="span" sx={{ color: BRAND.primaryLight }}>
              {t('banner.title.highlight')}
            </Box>
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '1px',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 14, md: 15 },
              lineHeight: isRtl ? 1.8 : 1.65,
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            {t('banner.text')}
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default HomeMethodSection