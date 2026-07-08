'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
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

// Palette "dark UI" dérivée de BRAND, pour coller au mockup
const DARK_BG = '#0E0510'
const DARK_CARD = '#170A1B'
const DARK_BORDER = `${BRAND.primary}33`

const TEAM = [
  {
    name: 'Salma Bellamkaddem',
    role: 'Co-fondatrice & Experte Solutions Digitales',
    badge: 'Solutions digitales',
    badgeIcon: CodeIcon,
    description:
      "Ingénieure d'État en Informatique et Réseaux, Salma conçoit et développe des solutions digitales sur mesure qui automatisent vos processus, optimisent vos performances et soutiennent votre croissance.",
    skills: [
      { label: 'Solutions Web & Applications métier', icon: DesktopWindowsIcon },
      { label: 'Automatisation & Optimisation', icon: SettingsIcon },
      { label: 'Analyse de données & Power BI', icon: InsightsIcon },
    ],
    image: '/images/salma.webp',
    linkedin: 'https://www.linkedin.com/in/salma-bellamkaddem',
    delay: '0s',
  },
  {
    name: 'Imane Elafati',
    role: 'Co-fondatrice & Experte Marketing Digital',
    badge: 'Marketing digital',
    badgeIcon: CampaignIcon,
    description:
      "Spécialiste en marketing, communication et stratégie de contenu, Imane aide les marques à se démarquer, attirer leur audience et convertir grâce à des stratégies digitales créatives et orientées résultats.",
    skills: [
      { label: 'Stratégie Marketing & Études de marché', icon: TrackChangesIcon },
      { label: 'Branding & Communication digitale', icon: EditIcon },
      { label: 'Création de contenu & Acquisition', icon: GroupsIcon },
    ],
    image: '/images/iman.webp',
    linkedin: 'https://www.linkedin.com/in/imane-elafati',
    delay: '0.15s',
  },
]

const STATS = [
  { icon: GroupIcon, value: '2', label: 'Expertes complémentaires' },
  { icon: TrackChangesIcon, value: '1', label: 'Vision commune orientée résultats' },
  { icon: TrendingUpIcon, value: '100%', label: 'Engagées pour votre réussite' },
]

const HomeTeam = () => {
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'

  const pageBg = isDark
    ? `radial-gradient(circle at 50% 0%, ${BRAND.primaryDark}33 0%, ${DARK_BG} 55%)`
    : `linear-gradient(135deg, ${BRAND.primarySoft} 0%, #fff 45%, ${BRAND.primarySoft} 100%)`
  const cardBg = isDark ? DARK_CARD : '#fff'
  const cardBorder = isDark ? DARK_BORDER : BRAND.primaryLight
  const textMain = isDark ? '#fff' : BRAND.primaryDark
  const textMuted = isDark ? 'rgba(255,255,255,0.6)' : '#6b7280'
  const textBody = isDark ? 'rgba(255,255,255,0.65)' : '#4b5563'

  return (
    <Box
      id='home-team'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: pageBg,
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND.primary}${isDark ? '22' : '0D'} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        {/* ── En-tête ── */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            animation: 'fadeDown 0.7s ease both',
            '@keyframes fadeDown': {
              from: { opacity: 0, transform: 'translateY(-16px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: BRAND.primary,
              mx: 'auto',
              mb: 1,
              opacity: 0.8,
            }}
          />

          <Box
            sx={{
              mb: 2.5,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 0.75,
              borderRadius: 10,
              backgroundColor: `${BRAND.primary}1A`,
              border: `1px solid ${BRAND.primary}40`,
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: BRAND.primary, flexShrink: 0 }} />
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 700,
                color: BRAND.primary,
              }}
            >
              Notre équipe
            </Typography>
          </Box>

          <Typography
            component='h2'
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, sm: 32, md: 40 },
              lineHeight: 1.25,
              color: textMain,
              mb: 2,
            }}
          >
            Deux expertises,{' '}
            <Box
              component='span'
              sx={{
                background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryLight})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              une même vision
            </Box>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.75, mb: 2.5 }}>
            <Box
              sx={{
                width: 44,
                height: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryLight})`,
              }}
            />
            <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: BRAND.primaryLight }} />
          </Box>

          <Typography
            sx={{
              color: textMuted,
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.7,
              maxWidth: 560,
              mx: 'auto',
            }}
          >
            Nous combinons la puissance du digital et du marketing pour concevoir
            des solutions performantes qui{' '}
            <Box component='span' sx={{ color: BRAND.primary, fontWeight: 700 }}>
              accélèrent votre croissance
            </Box>
            .
          </Typography>
        </Box>

        {/* ── Bloc équipe fusionné : séparateur plein hauteur + connecteur central ── */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark ? `0 20px 60px rgba(0,0,0,0.45)` : `0 4px 24px ${BRAND.primary}12`,
            animation: 'fadeUp 0.7s ease both',
            '@keyframes fadeUp': {
              from: { opacity: 0, transform: 'translateY(28px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Grid container>
            {TEAM.map((member, i) => {
              const BadgeIcon = member.badgeIcon
              return (
                <Grid
                  key={member.name}
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    borderTop: { xs: i === 1 ? `1px solid ${cardBorder}` : 'none', md: 'none' },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%' }}>
                    {/* ── Photo encadrée : marge visible + grille de points + halo ── */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: '100%', sm: '42%' },
                        minHeight: { xs: 300, sm: 360 },
                        flexShrink: 0,
                        p: { xs: 2, sm: 2.25 },
                        backgroundColor: isDark ? '#120715' : BRAND.primarySoft,
                        backgroundImage: `radial-gradient(${isDark ? BRAND.primaryLight + '40' : BRAND.primary + '30'} 1px, transparent 1px)`,
                        backgroundSize: '16px 16px',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          borderRadius: 3,
                          overflow: 'hidden',
                          transition: 'transform 0.4s ease',
                          '&:hover': { transform: 'scale(1.02)' },
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `radial-gradient(circle at 50% 40%, ${BRAND.primary}66 0%, transparent 55%)`,
                            zIndex: 1,
                          }}
                        />
                        <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                      </Box>
                    </Box>

                    {/* ── Contenu ── */}
                    <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          px: 1.5,
                          py: 0.5,
                          mb: 1.5,
                          borderRadius: 10,
                          backgroundColor: `${BRAND.primary}1A`,
                          border: `1px solid ${BRAND.primary}40`,
                          width: 'fit-content',
                        }}
                      >
                        <BadgeIcon sx={{ fontSize: 13, color: BRAND.primary }} />
                        <Typography
                          sx={{
                            fontSize: 10.5,
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            color: BRAND.primary,
                          }}
                        >
                          {member.badge}
                        </Typography>
                      </Box>

                      <Typography
                        component='h3'
                        sx={{ fontWeight: 800, fontSize: { xs: 19, md: 21 }, color: textMain, lineHeight: 1.25, mb: 0.5 }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 12.5, md: 13 }, fontWeight: 700, color: BRAND.primary, lineHeight: 1.4, mb: 2 }}
                      >
                        {member.role}
                      </Typography>

                      <Typography sx={{ color: textBody, fontSize: { xs: 13, md: 13.5 }, lineHeight: 1.75, mb: 2.5 }}>
                        {member.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
                        {member.skills.map((skill) => {
                          const SkillIcon = skill.icon
                          return (
                            <Box
                              key={skill.label}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.25,
                                px: 1.5,
                                py: 1,
                                borderRadius: 2.5,
                                backgroundColor: isDark ? `${BRAND.primary}12` : BRAND.primarySoft,
                                border: `1px solid ${isDark ? DARK_BORDER : BRAND.primaryLight}`,
                              }}
                            >
                              <SkillIcon sx={{ fontSize: 16, color: BRAND.primary, flexShrink: 0 }} />
                              <Typography
                                sx={{
                                  fontSize: { xs: 12, md: 12.5 },
                                  fontWeight: 600,
                                  color: isDark ? 'rgba(255,255,255,0.85)' : BRAND.primaryDark,
                                }}
                              >
                                {skill.label}
                              </Typography>
                            </Box>
                          )
                        })}
                      </Box>

                      <Box
                        component='a'
                        href={member.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        sx={{
                          mt: 'auto',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                          color: '#fff',
                          background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                          px: 2,
                          py: 1,
                          borderRadius: 10,
                          fontWeight: 700,
                          fontSize: { xs: 12, md: 12.5 },
                          textDecoration: 'none',
                          width: 'fit-content',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '& svg.arrow': { transition: 'transform 0.25s ease' },
                          '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 8px 20px ${BRAND.primary}55` },
                          '&:hover svg.arrow': { transform: 'translateX(4px)' },
                        }}
                      >
                        <Box component='svg' xmlns='http://www.w3.org/2000/svg' width={13} height={13} viewBox='0 0 24 24' fill='currentColor'>
                          <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 8.96a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.5c0-2.41-1.29-3.53-3-3.53-1.38 0-2 0.76-2.34 1.3v-1.11H10.3c0.03 0.7 0 8.24 0 8.24h2.67v-4.6c0-0.25 0.02-0.5 0.1-0.68 0.2-0.5 0.66-1.03 1.44-1.03 1.02 0 1.43 0.78 1.43 1.92v4.39h2.4z' />
                        </Box>
                        Voir le profil LinkedIn
                        <Box
                          className='arrow'
                          component='svg'
                          xmlns='http://www.w3.org/2000/svg'
                          width={13}
                          height={13}
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth={2.5}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 12h14M12 5l7 7-7 7' />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>

          {/* Séparateur vertical plein hauteur (desktop uniquement) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '1px',
              backgroundColor: cardBorder,
              zIndex: 1,
            }}
          />

          {/* Connecteur central — logo rond "N" entre les deux photos */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              top: 190,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 60,
              height: 60,
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
              border: `4px solid ${cardBg}`,
              boxShadow: `0 8px 24px ${BRAND.primary}66`,
              zIndex: 3,
              animation: 'popIn 0.8s ease 0.3s both',
              '@keyframes popIn': {
                from: { opacity: 0, transform: 'translate(-50%, -30%) scale(0.6)' },
                to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
              },
            }}
          >
            <Typography sx={{ fontWeight: 900, fontSize: 22, color: '#fff', fontStyle: 'italic', lineHeight: 1 }}>
              N
            </Typography>
          </Box>
        </Box>

        {/* ── Bandeau de stats ── */}
        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            p: { xs: 3, md: 3.5 },
            borderRadius: 5,
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark ? `0 20px 60px rgba(0,0,0,0.45)` : `0 4px 24px ${BRAND.primary}12`,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 3, md: 2 },
            justifyContent: 'space-between',
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: { md: '0 0 auto' } }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                flexShrink: 0,
                boxShadow: `0 8px 20px ${BRAND.primary}40`,
              }}
            >
              <RocketLaunchIcon sx={{ color: '#fff', fontSize: 24 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: { xs: 14.5, md: 15.5 }, color: textMain, lineHeight: 1.3 }}>
                Notre complémentarité,{' '}
                <Box component='span' sx={{ color: BRAND.primary }}>
                  votre croissance.
                </Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: 12, md: 12.5 }, color: textMuted, mt: 0.25 }}>
                De la stratégie à l&apos;exécution, nous sommes à vos côtés à chaque étape.
              </Typography>
            </Box>
          </Box>

          {STATS.map((stat) => {
            const StatIcon = stat.icon
            return (
              <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDark ? `${BRAND.primary}25` : BRAND.primarySoft,
                    flexShrink: 0,
                  }}
                >
                  <StatIcon sx={{ color: BRAND.primary, fontSize: 18 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 18, color: textMain, lineHeight: 1.1 }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ fontSize: 11.5, color: textMuted, lineHeight: 1.3, maxWidth: 120 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            )
          })}

        
        </Box>
      </Container>
    </Box>
  )
}

export default HomeTeam