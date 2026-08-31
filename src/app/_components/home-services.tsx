'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { services, IService } from '@/constants/service'
import { AppConfig } from '@/configs'
import ContactModal from './ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primarySoft: '#FEDDF6',
  primaryLight: '#f8e8f3',
}

const CTA_VARIANTS: ('pink' | 'dark')[] = ['pink', 'pink', 'dark', 'dark', 'pink', 'dark']

const ctaGradient = (variant: 'pink' | 'dark') =>
  variant === 'pink'
    ? `linear-gradient(90deg, ${BRAND.primary} 0%, #E0508F 100%)`
    : `linear-gradient(90deg, ${BRAND.primaryDark} 0%, #2A0619 100%)`

type ServiceItemProps = { item: IService; index: number }

const HomeServiceItem = ({ item, index }: ServiceItemProps) => {
  const router = useRouter()
  const t = useTranslations()
  const locale = useLocale()
  const isRtl = locale === 'ar'

  const [openContact, setOpenContact] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'
  const variant = CTA_VARIANTS[index % CTA_VARIANTS.length]
  const number = String(index + 1).padStart(2, '0')

  // Support des clés i18n et des valeurs de repli
  const itemTitle = item.titleKey ? t(item.titleKey) : (item as any).title || ''
  const itemDescription = item.descriptionKey ? t(item.descriptionKey) : (item as any).description || ''
  const itemCta = item.ctaLabelKey ? t(item.ctaLabelKey) : (item as any).ctaLabel || (isRtl ? 'اكتشف المزيد' : 'Découvrir')

  // Récupération des sous-services traduits
  const rawSubServices = item.subServicesKeys
    ? item.subServicesKeys.map((k) => t(k))
    : (item as any).subServices || []

  const hasSubServices = rawSubServices.length > 0
  const visibleSubServices = showAll ? rawSubServices : rawSubServices.slice(0, 3)
  const remainingCount = Math.max(0, rawSubServices.length - 3)

  const handleCardClick = () => {
    router.push(`/${locale}/services/${item.slug}`)
  }

  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
      <Box
        onClick={handleCardClick}
        sx={{
          position: 'relative',
          borderRadius: 4,
          px: { xs: 3, md: 3.5 },
          py: { xs: 3.5, md: 4 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          backgroundColor: isDark ? '#1f0716' : '#ffffff',
          boxShadow: isDark
            ? '0 6px 24px rgba(0,0,0,0.45)'
            : '0 10px 30px rgba(181, 55, 122, 0.07)',
          border: '1px solid',
          borderColor: isDark ? `${BRAND.primaryDark}80` : alpha(BRAND.primary, 0.1),
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: `0 18px 40px ${alpha(BRAND.primary, 0.22)}`,
            transform: 'translateY(-6px)',
            borderColor: alpha(BRAND.primary, 0.4),
          },
        }}
      >
        <Box>
          {/* En-tête : Icône + Numéro */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: { xs: 52, md: 60 },
                height: { xs: 52, md: 60 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isDark ? `${BRAND.primary}25` : BRAND.primarySoft,
                flexShrink: 0,
                p: 1.2,
              }}
            >
              <Image
                src={item.image || '/icons/mobile-app.png'}
                alt={itemTitle}
                width={32}
                height={32}
                style={{ objectFit: 'contain' }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 32, md: 40 },
                fontWeight: 800,
                lineHeight: 1,
                color: isDark ? `${BRAND.primary}30` : `${BRAND.primary}18`,
                userSelect: 'none',
              }}
            >
              {number}
            </Typography>
          </Box>

          {/* Séparateur coloré */}
          <Box
            sx={{
              width: 36,
              height: 3.5,
              borderRadius: 1,
              backgroundColor: BRAND.primary,
              mb: 2,
              marginInlineEnd: 'auto',
            }}
          />

          {/* Titre du service */}
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: 18, md: 20 },
              fontWeight: 800,
              mb: 1.5,
              lineHeight: isRtl ? 1.5 : 1.35,
              color: isDark ? '#ffffff' : '#111122',
              textAlign: isRtl ? 'right' : 'left',
            }}
          >
            {itemTitle}
          </Typography>

          {/* Description courte */}
          {itemDescription && (
            <Typography
              sx={{
                fontSize: 14,
                color: isDark ? 'rgba(255,255,255,0.7)' : '#4b5563',
                lineHeight: isRtl ? 1.8 : 1.6,
                mb: 3,
                textAlign: isRtl ? 'right' : 'left',
              }}
            >
              {itemDescription}
            </Typography>
          )}

          {/* Liste des sous-services */}
          {hasSubServices && (
            <Box
              component="ul"
              sx={{
                m: 0,
                p: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.2,
                mb: 3.5,
              }}
            >
              {visibleSubServices.map((sub: string, i: number) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.2,
                    fontSize: { xs: 13.5, md: 14 },
                    color: isDark ? 'rgba(255,255,255,0.85)' : '#374151',
                    lineHeight: 1.5,
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 18,
                      color: BRAND.primary,
                      flexShrink: 0,
                      mt: '2px',
                    }}
                  />
                  <span>{sub}</span>
                </Box>
              ))}

              {remainingCount > 0 && (
                <Box
                  component="span"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowAll(!showAll)
                  }}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    color: BRAND.primary,
                    cursor: 'pointer',
                    mt: 0.5,
                    width: 'fit-content',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {showAll
                    ? isRtl ? 'عرض أقل ▲' : 'Voir moins ▲'
                    : isRtl
                    ? `+ ${remainingCount} خدمات أخرى (عرض المزيد ▼)`
                    : `+ ${remainingCount} autres services (Voir plus ▼)`}
                </Box>
              )}
            </Box>
          )}
        </Box>

        {/* Bouton d'action CTA */}
        <Box
          onClick={(e) => {
            e.stopPropagation()
            setOpenContact(true)
          }}
          sx={{
            mt: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            px: 2.5,
            py: 1.4,
            borderRadius: '2rem',
            background: ctaGradient(variant),
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.2px',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: `0 6px 18px ${variant === 'pink' ? BRAND.primary : BRAND.primaryDark}40`,
            '& svg': {
              transition: 'transform 0.25s ease',
              fontSize: 18,
              transform: isRtl ? 'rotate(180deg)' : 'none',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 10px 24px ${variant === 'pink' ? BRAND.primary : BRAND.primaryDark}60`,
            },
            '&:hover svg': {
              transform: isRtl ? 'rotate(180deg) translateX(4px)' : 'translateX(4px)',
            },
          }}
        >
          <span>{itemCta}</span>
          <ArrowForwardIcon />
        </Box>
      </Box>

      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </Grid>
  )
}

const HomeServices = () => {
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'
  const t = useTranslations('Homee.services')
  const locale = useLocale()
  const isRtl = locale === 'ar'

  return (
    <Box
      id="homee-services"
      component="section"
      sx={{
        width: '100%',
        pt: { xs: 8, md: 14 },
        pb: { xs: 8, md: 14 },
        background: isDark
          ? 'linear-gradient(160deg, #15030f 0%, #26071d 100%)'
          : 'linear-gradient(160deg, #fdf4fa 0%, #fae8f5 40%, #fdf0f8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* En-tête de section */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                mb: 2,
                justifyContent: { xs: 'center', md: isRtl ? 'flex-end' : 'flex-start' },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: BRAND.primary,
                }}
              />
              <Typography
                sx={{
                  fontSize: 13,
                  letterSpacing: isRtl ? 1 : 2.5,
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: BRAND.primary,
                }}
              >
                {isRtl ? 'خدماتنا' : 'Nos Services'}
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                mb: 2.5,
                lineHeight: isRtl ? 1.4 : 1.2,
                fontWeight: 900,
                fontSize: { xs: 28, sm: 38, md: 46 },
                color: isDark ? '#ffffff' : '#1a1a2e',
                letterSpacing: isRtl ? '0' : '-0.8px',
                textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
              }}
            >
              {t('title.part1')}{' '}
              <Box component="span" sx={{ color: BRAND.primary }}>
                {t('title.highlight')}
              </Box>
              {t('title.part2')}
            </Typography>

            <Typography
              sx={{
                color: isDark ? 'rgba(255,255,255,0.7)' : '#4b5563',
                fontSize: { xs: 15, md: 16.5 },
                lineHeight: isRtl ? 1.8 : 1.6,
                maxWidth: 580,
                mx: { xs: 'auto', md: isRtl ? '0 0 0 auto' : '0 auto 0 0' },
                textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' },
              }}
            >
              {t('description')}
            </Typography>
          </Grid>

          {/* Illustration circulaire */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'relative', height: 320, direction: 'ltr' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '5%',
                  right: isRtl ? 'auto' : '-5%',
                  left: isRtl ? '-5%' : 'auto',
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  background: `conic-gradient(from 200deg, ${BRAND.primary}, ${BRAND.primaryLight}, #fff 60%, ${BRAND.primary})`,
                  opacity: 0.85,
                  WebkitMaskImage:
                    'radial-gradient(circle, transparent 38%, black 40%, black 62%, transparent 64%)',
                  maskImage:
                    'radial-gradient(circle, transparent 38%, black 40%, black 62%, transparent 64%)',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: isRtl ? 'auto' : '20%',
                  right: isRtl ? '20%' : 'auto',
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(181,55,122,0.22)',
                }}
              >
                <TrendingUpIcon sx={{ color: BRAND.primary, fontSize: 28 }} />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  right: isRtl ? 'auto' : 5,
                  left: isRtl ? 5 : 'auto',
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(181,55,122,0.22)',
                }}
              >
                <GroupIcon sx={{ color: BRAND.primary, fontSize: 24 }} />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: '12%',
                  right: isRtl ? 'auto' : '15%',
                  left: isRtl ? '15%' : 'auto',
                  width: 62,
                  height: 62,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(181,55,122,0.22)',
                }}
              >
                <GpsFixedIcon sx={{ color: BRAND.primary, fontSize: 26 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Grille des services */}
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {services.map((item, index) => (
            <HomeServiceItem item={item} key={item.id} index={index} />
          ))}
        </Grid>

        {/* Footer de section */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              color: isDark ? 'rgba(255,255,255,0.45)' : '#9ca3af',
              fontSize: { xs: 13, md: 14 },
            }}
          >
            {isRtl ? (
              <>
                منذ تأسيسها، ترافق{' '}
                <Box component="span" sx={{ color: BRAND.primary, fontWeight: 600 }}>
                  {AppConfig.appName}
                </Box>{' '}
                الشركات لتطوير حضورها الرقمي وتحقيق أهدافها.
              </>
            ) : (
              <>
                {AppConfig.appName} accompagne les entreprises dans leur accélération et transformation digitale.
              </>
            )}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeServices