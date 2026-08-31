'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useTheme, alpha } from '@mui/material/styles'

import CodeIcon from '@mui/icons-material/Code'
import CampaignIcon from '@mui/icons-material/Campaign'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import SettingsIcon from '@mui/icons-material/Settings'
import InsightsIcon from '@mui/icons-material/Insights'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import EditIcon from '@mui/icons-material/Edit'
import GroupsIcon from '@mui/icons-material/Groups'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import GroupIcon from '@mui/icons-material/Group'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const MEMBERS = [
  {
    key: 'salma',
    badgeIcon: CodeIcon,
    image: '/images/salma.webp',
    linkedin: 'https://www.linkedin.com/in/salma-bellamkaddem',
    skills: [
      { key: 's1', icon: DesktopWindowsIcon },
      { key: 's2', icon: SettingsIcon },
      { key: 's3', icon: InsightsIcon },
    ],
  },
  {
    key: 'imane',
    badgeIcon: CampaignIcon,
    image: '/images/iman.webp',
    linkedin: 'https://www.linkedin.com/in/imane-elafati',
    skills: [
      { key: 's1', icon: TrackChangesIcon },
      { key: 's2', icon: EditIcon },
      { key: 's3', icon: GroupsIcon },
    ],
  },
]

const HomeOurMotivation = () => {
  const t = useTranslations('Team')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'

  const cardBg = isDark ? '#190616' : '#FFFFFF'
  const cardBorder = isDark ? alpha(BRAND.primaryLight, 0.15) : alpha(BRAND.primary, 0.1)
  const textMain = isDark ? '#FFFFFF' : '#1F0519'
  const textMuted = isDark ? 'rgba(255,255,255,0.65)' : '#4B5563'

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: isDark ? '#0F030E' : '#FDF7FB',
      }}
    >
      <Container maxWidth="lg">
        {/* ── En-tête ── */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 620,
            mx: 'auto',
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.6,
              mb: 2,
              borderRadius: '2rem',
              backgroundColor: alpha(BRAND.primary, 0.1),
              border: `1px solid ${alpha(BRAND.primary, 0.25)}`,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: BRAND.primary,
              }}
            />
            <Typography
              sx={{
                fontSize: 11.5,
                letterSpacing: isRtl ? 0.5 : 1.5,
                textTransform: 'uppercase',
                fontWeight: 700,
                color: BRAND.primary,
              }}
            >
              {t('badge')}
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, sm: 34, md: 40 },
              lineHeight: isRtl ? 1.35 : 1.2,
              color: textMain,
              mb: 1.5,
            }}
          >
            {t('title.part1')}{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${BRAND.primary} 0%, #D84E97 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('title.highlight')}
            </Box>
          </Typography>

          <Typography
            sx={{
              color: textMuted,
              fontSize: { xs: 14.5, md: 16 },
              lineHeight: isRtl ? 1.8 : 1.6,
            }}
          >
            {t('description')}
          </Typography>
        </Box>

        {/* ── Cartes Membres (2 colonnes élégantes) ── */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {MEMBERS.map((member) => {
            const BadgeIcon = member.badgeIcon
            return (
              <Grid size={{ xs: 12, md: 6 }} key={member.key}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    borderRadius: 4,
                    overflow: 'hidden',
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorder}`,
                    boxShadow: isDark
                      ? '0 12px 35px rgba(0,0,0,0.5)'
                      : '0 12px 35px rgba(181,55,122,0.06)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 18px 45px ${alpha(BRAND.primary, 0.16)}`,
                      borderColor: alpha(BRAND.primary, 0.35),
                    },
                  }}
                >
                  {/* Photo */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '100%', sm: '40%' },
                      minHeight: { xs: 240, sm: '100%' },
                      flexShrink: 0,
                      backgroundColor: isDark ? '#120410' : '#F8E9F3',
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={t(`members.${member.key}.name`)}
                      fill
                      sizes="(max-width: 600px) 100vw, 300px"
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Détails */}
                  <Box
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                      textAlign: isRtl ? 'right' : 'left',
                    }}
                  >
                    <Box>
                      {/* Badge rôle */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.8,
                          px: 1.4,
                          py: 0.4,
                          mb: 1.5,
                          borderRadius: '2rem',
                          backgroundColor: alpha(BRAND.primary, 0.1),
                        }}
                      >
                        <BadgeIcon sx={{ fontSize: 13, color: BRAND.primary }} />
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: BRAND.primary,
                            letterSpacing: 0.5,
                          }}
                        >
                          {t(`members.${member.key}.badge`)}
                        </Typography>
                      </Box>

                      {/* Nom & Titre */}
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 18, md: 20 },
                          color: textMain,
                          lineHeight: 1.25,
                        }}
                      >
                        {t(`members.${member.key}.name`)}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: BRAND.primary,
                          mb: 1.5,
                          mt: 0.25,
                        }}
                      >
                        {t(`members.${member.key}.role`)}
                      </Typography>

                      {/* Description concise */}
                      <Typography
                        sx={{
                          color: textMuted,
                          fontSize: 13,
                          lineHeight: isRtl ? 1.75 : 1.6,
                          mb: 2.5,
                        }}
                      >
                        {t(`members.${member.key}.description`)}
                      </Typography>

                      {/* Compétences clés */}
                      <Stack spacing={1} sx={{ mb: 3 }}>
                        {member.skills.map((skill) => {
                          const Icon = skill.icon
                          return (
                            <Box
                              key={skill.key}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                                px: 1.5,
                                py: 0.8,
                                borderRadius: 2,
                                backgroundColor: isDark
                                  ? alpha(BRAND.primary, 0.08)
                                  : '#FAF0F6',
                                border: `1px solid ${cardBorder}`,
                              }}
                            >
                              <Icon sx={{ fontSize: 15, color: BRAND.primary, flexShrink: 0 }} />
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  fontWeight: 600,
                                  color: textMain,
                                }}
                              >
                                {t(`members.${member.key}.skills.${skill.key}`)}
                              </Typography>
                            </Box>
                          )
                        })}
                      </Stack>
                    </Box>

                    {/* Lien LinkedIn minimaliste */}
                    <Box
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: BRAND.primary,
                        textDecoration: 'none',
                        width: 'fit-content',
                        marginInlineStart: isRtl ? 'auto' : 0,
                        transition: 'opacity 0.2s ease',
                        '&:hover': {
                          opacity: 0.8,
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <Box
                        component="svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 8.96a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.5c0-2.41-1.29-3.53-3-3.53-1.38 0-2 0.76-2.34 1.3v-1.11H10.3c0.03 0.7 0 8.24 0 8.24h2.67v-4.6c0-0.25 0.02-0.5 0.1-0.68 0.2-0.5 0.66-1.03 1.44-1.03 1.02 0 1.43 0.78 1.43 1.92v4.39h2.4z" />
                      </Box>
                      <span>{t(`members.${member.key}.cta`)}</span>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>

        {/* ── Bandeau Stats / Valeur ── */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            p: { xs: 2.5, md: 3 },
            borderRadius: 3.5,
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textAlign: isRtl ? 'right' : 'left' }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                color: '#fff',
                flexShrink: 0,
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: 14.5, color: textMain }}>
                {t('stats.bannerTitle')}{' '}
                <Box component="span" sx={{ color: BRAND.primary }}>
                  {t('stats.bannerHighlight')}
                </Box>
              </Typography>
              <Typography sx={{ fontSize: 12, color: textMuted }}>
                {t('stats.bannerSub')}
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={{ xs: 2.5, sm: 4 }} alignItems="center">
            {[
              { icon: GroupIcon, val: '2', labelKey: 's1' },
              { icon: TrackChangesIcon, val: '1', labelKey: 's2' },
              { icon: TrendingUpIcon, val: '100%', labelKey: 's3' },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <Box key={stat.labelKey} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon sx={{ color: BRAND.primary, fontSize: 18 }} />
                  <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: 16, color: textMain, lineHeight: 1 }}>
                      {stat.val}
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: textMuted, lineHeight: 1.2 }}>
                      {t(`stats.${stat.labelKey}`)}
                    </Typography>
                  </Box>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeOurMotivation