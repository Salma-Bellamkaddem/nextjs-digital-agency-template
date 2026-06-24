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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

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
    image: '/images/salma.jpeg',
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
    image: '/images/iman.png',
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

  return (
    <Box
      id='home-team'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: isDark
          ? '#130509'
          : `linear-gradient(135deg, ${BRAND.primarySoft} 0%, #fff 45%, ${BRAND.primarySoft} 100%)`,
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
          background: `radial-gradient(circle, ${BRAND.primary}0D 0%, transparent 70%)`,
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
              mb: 2.5,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 0.75,
              borderRadius: 10,
              backgroundColor: `${BRAND.primary}12`,
              border: `1px solid ${BRAND.primary}25`,
            }}
          >
            <GroupIcon sx={{ fontSize: 14, color: BRAND.primary }} />
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
              color: isDark ? '#fff' : BRAND.primaryDark,
              mb: 2,
            }}
          >
            Deux expertises,{' '}
            <Box component='span' sx={{ color: BRAND.primary }}>
              une même vision
            </Box>
          </Typography>

          <Typography
            sx={{
              color: isDark ? 'rgba(255,255,255,0.6)' : '#6b7280',
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.7,
              maxWidth: 560,
              mx: 'auto',
            }}
          >
            Nous combinons la puissance du digital et du marketing pour concevoir
            des solutions performantes qui accélèrent votre croissance.
          </Typography>
        </Box>

        {/* ── Cartes équipe (avec connecteur central sur desktop) ── */}
        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={{ xs: 3, md: 0 }} justifyContent='center'>
            {TEAM.map((member, i) => {
              const BadgeIcon = member.badgeIcon
              return (
                <Grid key={member.name} size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      borderRadius: 5,
                      overflow: 'hidden',
                      backgroundColor: isDark ? '#1f0a16' : '#fff',
                      border: `1px solid ${isDark ? BRAND.primaryDark : BRAND.primaryLight}`,
                      boxShadow: `0 4px 24px ${BRAND.primary}12`,
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      height: '100%',
                      mx: { md: i === 0 ? 0 : 0 },
                      animation: 'fadeUp 0.7s ease both',
                      animationDelay: member.delay,
                      '@keyframes fadeUp': {
                        from: { opacity: 0, transform: 'translateY(28px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                      },
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 48px ${BRAND.primary}22`,
                      },
                      '&:hover .photo-ring': {
                        opacity: 1,
                        transform: 'scale(1.04)',
                      },
                    }}
                  >
                    {/* ── Photo pleine hauteur avec anneau lumineux ── */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: { xs: '100%', sm: '42%' },
                        minHeight: { xs: 260, sm: 320 },
                        flexShrink: 0,
                        backgroundColor: BRAND.primaryDark,
                        overflow: 'hidden',
                      }}
                    >
                      {/* Anneau lumineux décoratif */}
                      <Box
                        className='photo-ring'
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          opacity: 0.85,
                          transition: 'opacity 0.4s ease, transform 0.4s ease',
                          background: `radial-gradient(circle at 50% 45%, transparent 38%, ${BRAND.primary}55 40%, transparent 42%)`,
                          zIndex: 1,
                          pointerEvents: 'none',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: `linear-gradient(180deg, ${BRAND.primaryDark}99 0%, transparent 35%, transparent 70%, ${BRAND.primaryDark}cc 100%)`,
                          zIndex: 1,
                        }}
                      />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>

                    {/* ── Contenu ── */}
                    <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

                      {/* Badge spécialité */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          px: 1.5,
                          py: 0.5,
                          mb: 1.5,
                          borderRadius: 10,
                          backgroundColor: `${BRAND.primary}12`,
                          border: `1px solid ${BRAND.primary}25`,
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

                      {/* Nom */}
                      <Typography
                        component='h3'
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 19, md: 21 },
                          color: isDark ? '#fff' : BRAND.primaryDark,
                          lineHeight: 1.25,
                          mb: 0.5,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 12.5, md: 13 },
                          fontWeight: 700,
                          color: BRAND.primary,
                          lineHeight: 1.4,
                          mb: 2,
                        }}
                      >
                        {member.role}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: isDark ? 'rgba(255,255,255,0.65)' : '#4b5563',
                          fontSize: { xs: 13, md: 13.5 },
                          lineHeight: 1.75,
                          mb: 2.5,
                        }}
                      >
                        {member.description}
                      </Typography>

                      {/* Skills avec icônes */}
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
                                backgroundColor: isDark ? `${BRAND.primary}15` : BRAND.primarySoft,
                                border: `1px solid ${isDark ? BRAND.primaryDark : BRAND.primaryLight}`,
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

                      {/* LinkedIn */}
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
                          backgroundColor: BRAND.primary,
                          px: 2,
                          py: 1,
                          borderRadius: 10,
                          fontWeight: 700,
                          fontSize: { xs: 12, md: 12.5 },
                          textDecoration: 'none',
                          width: 'fit-content',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '& svg.arrow': { transition: 'transform 0.25s ease' },
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 20px ${BRAND.primary}55`,
                          },
                          '&:hover svg.arrow': { transform: 'translateX(4px)' },
                        }}
                      >
                        <Box
                          component='svg'
                          xmlns='http://www.w3.org/2000/svg'
                          width={13}
                          height={13}
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
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

          {/* Connecteur central (logo / "X") entre les deux cartes — desktop uniquement */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              top: '32%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 64,
              height: 64,
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: BRAND.primary,
              border: `4px solid ${isDark ? '#130509' : '#fff'}`,
              boxShadow: `0 8px 24px ${BRAND.primary}55`,
              zIndex: 2,
              fontWeight: 800,
              fontSize: 22,
              color: '#fff',
              animation: 'fadeUp 0.8s ease 0.3s both',
              '@keyframes fadeUp': {
                from: { opacity: 0, transform: 'translate(-50%, -40%)' },
                to: { opacity: 1, transform: 'translate(-50%, -50%)' },
              },
            }}
          >
            +
          </Box>
        </Box>

        {/* ── Bandeau de stats ── */}
        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            p: { xs: 3, md: 3.5 },
            borderRadius: 5,
            backgroundColor: isDark ? '#1f0a16' : '#fff',
            border: `1px solid ${isDark ? BRAND.primaryDark : BRAND.primaryLight}`,
            boxShadow: `0 4px 24px ${BRAND.primary}12`,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 3, md: 2 },
            justifyContent: 'space-between',
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}
        >
          {/* Bloc principal */}
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
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 14.5, md: 15.5 },
                  color: isDark ? '#fff' : BRAND.primaryDark,
                  lineHeight: 1.3,
                }}
              >
                Notre complémentarité,{' '}
                <Box component='span' sx={{ color: BRAND.primary }}>
                  votre croissance.
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 12.5 },
                  color: isDark ? 'rgba(255,255,255,0.55)' : '#6b7280',
                  mt: 0.25,
                }}
              >
                De la stratégie à l&apos;exécution, nous sommes à vos côtés à chaque étape.
              </Typography>
            </Box>
          </Box>

          {/* Stats */}
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
                    backgroundColor: isDark ? `${BRAND.primary}20` : BRAND.primarySoft,
                    flexShrink: 0,
                  }}
                >
                  <StatIcon sx={{ color: BRAND.primary, fontSize: 18 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: isDark ? '#fff' : BRAND.primaryDark,
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11.5,
                      color: isDark ? 'rgba(255,255,255,0.55)' : '#6b7280',
                      lineHeight: 1.3,
                      maxWidth: 120,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            )
          })}

          {/* Citation */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1,
              maxWidth: 220,
              p: 1.5,
              borderRadius: 3,
              backgroundColor: isDark ? `${BRAND.primary}15` : BRAND.primarySoft,
            }}
          >
            <FormatQuoteIcon sx={{ color: BRAND.primary, fontSize: 20, flexShrink: 0, transform: 'scaleX(-1)' }} />
            <Typography
              sx={{
                fontSize: 11.5,
                fontStyle: 'italic',
                color: isDark ? 'rgba(255,255,255,0.75)' : BRAND.primaryDark,
                lineHeight: 1.5,
              }}
            >
              Nexsetia, votre partenaire digital pour transformer vos idées en succès.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeTeam