'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useTheme } from '@mui/material/styles'
import { m, LazyMotion, domAnimation } from 'framer-motion'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid2'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import BoltIcon from '@mui/icons-material/Bolt'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
}

const CounterAnimation: FC<{ target: number; suffix?: string; duration?: number; isDark: boolean }> = ({
  target,
  suffix = '',
  duration = 1800,
  isDark,
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const steps = duration / 16
    const increment = target / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return (
    <Box
      component="span"
      ref={ref}
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontSize: { xs: '2.3rem', sm: '2.7rem', md: '3.1rem' },
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: '-0.03em',
        fontVariantNumeric: 'tabular-nums',
        color: isDark ? '#FFFFFF' : '#111827',
      }}
    >
      {count}
      <Typography
        component="span"
        sx={{
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
          fontWeight: 800,
          color: BRAND.primary,
          marginInlineStart: 0.3,
        }}
      >
        {suffix}
      </Typography>
    </Box>
  )
}

const HomeMetrics: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const t = useTranslations('HomeMetrics')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const capabilities = ['SEO', 'ADS', 'WEB & APP', 'BRANDING', 'DATA', 'CONTENT']

  const metricsData = [
    {
      id: 1,
      icon: <AllInclusiveIcon sx={{ fontSize: { xs: 24, md: 28 }, color: BRAND.primary }} />,
      isCounter: true,
      target: 360,
      suffix: '°',
      title: t('metric1.title'),
      desc: t('metric1.desc'),
    },
    {
      id: 2,
      icon: <HubOutlinedIcon sx={{ fontSize: { xs: 24, md: 28 }, color: BRAND.primary }} />,
      isCounter: true,
      target: 6,
      suffix: '',
      title: t('metric2.title'),
      desc: t('metric2.desc'),
    },
    {
      id: 3,
      icon: <BoltIcon sx={{ fontSize: { xs: 24, md: 28 }, color: '#38BDF8' }} />,
      isCounter: false,
      textValue: '24/7',
      title: t('metric3.title'),
      desc: t('metric3.desc'),
    },
    {
      id: 4,
      icon: <HandshakeOutlinedIcon sx={{ fontSize: { xs: 24, md: 28 }, color: BRAND.primary }} />,
      isCounter: true,
      target: 1,
      suffix: '',
      title: t('metric4.title'),
      desc: t('metric4.desc'),
    },
  ]

  return (
    <LazyMotion features={domAnimation}>
      <Box
        component="section"
        id="home-metrics"
        sx={{
          py: { xs: 7, sm: 9, md: 12 },
          bgcolor: isDark ? '#0E020B' : '#FFFFFF',
          position: 'relative',
          direction: isRtl ? 'rtl' : 'ltr',
          overflow: 'hidden',
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* Halo d'ambiance adapté */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 300, sm: 500, md: 700 },
            height: { xs: 200, sm: 300, md: 400 },
            background: isDark
              ? `radial-gradient(circle, ${BRAND.primary}25 0%, transparent 70%)`
              : `radial-gradient(circle, ${BRAND.primaryLight}70 0%, transparent 70%)`,
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {metricsData.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      height: '100%',
                      borderRadius: 4,
                      bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#FAF5F9',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(250, 200, 235, 0.12)' : 'rgba(181, 55, 122, 0.15)',
                      boxShadow: isDark
                        ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                        : '0 8px 24px rgba(181, 55, 122, 0.08)',
                      backdropFilter: isDark ? 'blur(10px)' : 'none',
                      textAlign: isRtl ? 'right' : 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        borderColor: BRAND.primary,
                        transform: 'translateY(-5px)',
                        boxShadow: isDark
                          ? `0 16px 36px rgba(181, 55, 122, 0.25)`
                          : `0 14px 30px rgba(181, 55, 122, 0.15)`,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>

                    <Box sx={{ mb: 1.5 }}>
                      {item.isCounter ? (
                        <CounterAnimation
                          target={item.target || 0}
                          suffix={item.suffix}
                          isDark={isDark}
                        />
                      ) : (
                        <Typography
                          sx={{
                            fontSize: { xs: '2.3rem', sm: '2.7rem', md: '3.1rem' },
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: '-0.03em',
                            color: isDark ? '#FFFFFF' : '#111827',
                          }}
                        >
                          {item.textValue}
                        </Typography>
                      )}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 14.5 },
                        fontWeight: 800,
                        color: isDark ? '#FFFFFF' : '#111827',
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 12.5 },
                        color: isDark ? 'rgba(255, 255, 255, 0.65)' : '#6B7280',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </m.div>
              </Grid>
            ))}
          </Grid>

          {/* Badges de compétences */}
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 1, sm: 1.5, md: 2 }}
            sx={{ mt: { xs: 4, sm: 5, md: 6 } }}
          >
            {capabilities.map((cap) => (
              <Box
                key={cap}
                sx={{
                  px: { xs: 1.8, sm: 2.4 },
                  py: 0.7,
                  borderRadius: '2rem',
                  bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(181, 55, 122, 0.08)',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(250, 200, 235, 0.12)' : 'rgba(181, 55, 122, 0.2)',
                  color: isDark ? 'rgba(255, 255, 255, 0.85)' : BRAND.primaryDark,
                  fontWeight: 800,
                  fontSize: { xs: 11, sm: 12 },
                  letterSpacing: 0.8,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: BRAND.primary,
                    borderColor: BRAND.primary,
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {cap}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </LazyMotion>
  )
}

export default HomeMetrics