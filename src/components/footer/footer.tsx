'use client'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Box, Container, Typography, Stack, Button, useTheme } from '@mui/material'
import MuiLink from '@mui/material/Link'
import RouterLink from 'next/link'
import { keyframes } from '@emotion/react'
import Logo from '@/assets/logo.webp'
import ContactModal from '@/app/_components/ContactModal'
import { companyMenus } from '@/constants/menus'
// import { services } from '@/constants/service' // décommente si tu as ce fichier
import Image from 'next/image'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

// ─── Contenu ───────────────────────────────────────────────────────────────
// Services : en attendant constants/service.ts, on définit ici label + href.
// Remplace par `services.map(s => ({ label: s.title, href: `/services/${s.slug}` }))`
// dès que tu me partages ce fichier.
const servicesList = [
  { label: 'Études de marché', href: '/services/etudes-de-marche' },
  { label: 'SEO • GEO • SEA', href: '/services/seo-geo-sea' },
  { label: 'Branding', href: '/services/branding' },
  { label: 'Social Media', href: '/services/social-media' },
  { label: 'Développement Web & Mobile', href: '/services/developpement-web-mobile' },
]

// Entreprise : on ne garde de companyMenus que les labels utilisés dans le footer,
// et on construit le href en fonction du sectionId (ancre sur la home) ou du path.
const entrepriseLabels = ['Accueil', 'À propos', 'Notre vision', 'Contact']
const entrepriseList = entrepriseLabels
  .map((label) => companyMenus.find((m) => m.label === label))
  .filter(Boolean)
  .map((m) => ({
    label: m!.label,
    href: m!.sectionId ? `/#${m!.sectionId}` : m!.path,
  }))

const legalLinks = ['Mentions légales', 'Politique de confidentialité']

const socialLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/nexsetia/?viewAsMember=true',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='17' height='17'>
        <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 8.9a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.52c0-2.42-1.29-3.55-3.02-3.55-1.39 0-2.01.77-2.36 1.3v-1.1h-2.66c.04.75 0 8.24 0 8.24h2.66v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.44-1.03 1.02 0 1.43.78 1.43 1.92v4.39h2.66z' />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/nexsetia.agency/',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='17' height='17'>
        <path d='M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z' />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@nexsetia',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='17' height='17'>
        <path d='M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.16v13.44a2.6 2.6 0 1 1-1.83-2.48V9.9a5.76 5.76 0 1 0 4.99 5.71c0-.03 0-.06 0-.09V9.4a7.9 7.9 0 0 0 4.4 1.34V7.58a4.85 4.85 0 0 1-3-1.76z' />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/people/Nexsetia/61590831196216/',
    icon: (
      <svg fill='currentColor' viewBox='0 0 24 24' width='17' height='17'>
        <path d='M12 2C6.49 2 2 6.49 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.51-4.49-10-10-10z' />
      </svg>
    ),
  },
]

// ─── Keyframes ───────────────────────────────────────────────────────────────
const floatY = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  50% { transform: translateY(-22px) rotateX(12deg) rotateY(10deg); }
`

const floatY2 = keyframes`
  0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  50% { transform: translateY(18px) rotateX(-10deg) rotateY(-14deg); }
`

const spin3d = keyframes`
  0% { transform: rotateZ(0deg) rotateX(6deg); }
  100% { transform: rotateZ(360deg) rotateX(6deg); }
`

// ─── Reveal on scroll hook ────────────────────────────────────────────────────
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

const Reveal: FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  )
}

// ─── Orbe flottant avec parallaxe ────────────────────────────────────────────
interface OrbProps {
  size: number
  top: string
  left?: string
  right?: string
  bottom?: string
  gradient: string
  duration: number
  reverse?: boolean
  parallax: { x: number; y: number }
  factor?: number
  opacity?: number
}

const Orb: FC<OrbProps> = ({
  size,
  top,
  left,
  right,
  bottom,
  gradient,
  duration,
  reverse,
  parallax,
  factor = 12,
  opacity = 1,
}) => (
  <Box
    sx={{
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width: size,
      height: size,
      borderRadius: '50%',
      background: gradient,
      filter: 'blur(0.5px)',
      opacity,
      pointerEvents: 'none',
      transformStyle: 'preserve-3d',
      animation: `${reverse ? floatY2 : floatY} ${duration}s ease-in-out infinite`,
      transition: 'transform 0.3s ease-out',
      willChange: 'transform',
      translate: `${parallax.x * factor}px ${parallax.y * factor}px`,
    }}
  />
)

// ─── Vague décorative ─────────────────────────────────────────────────────────
const FooterWaveTop: FC<{ color: string }> = ({ color }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      lineHeight: 0,
      transform: 'translateY(-99%)',
      '& svg': { width: '100%', display: 'block', height: { xs: 32, sm: 64 } },
    }}
  >
    <svg viewBox='0 0 1440 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={color}
        d='M0,64 C240,112 480,16 720,32 C960,48 1200,112 1440,64 L1440,120 L0,120 Z'
      />
    </svg>
  </Box>
)

// ─── Colonne de liens ─────────────────────────────────────────────────────────
interface ColumnItem {
  label: string
  href: string
}

interface ColumnProps {
  title: string
  items: ColumnItem[]
  delay?: number
}

const FooterColumn: FC<ColumnProps> = ({ title, items, delay = 0 }) => (
  <Reveal delay={delay}>
    <Box>
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 13 },
          fontWeight: 800,
          letterSpacing: 0.5,
          mb: { xs: 1.5, sm: 2 },
          color: (t) => (t.palette.mode === 'dark' ? BRAND.primaryLight : BRAND.primary),
        }}
      >
        {title}
      </Typography>
      <Stack spacing={1.1}>
        {items.map((item) => (
          <MuiLink
            key={item.label}
            component={RouterLink}
            href={item.href}
            sx={{
              fontSize: { xs: 13.5, sm: 14.5 },
              fontWeight: 500,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.4,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': { color: BRAND.primaryLight },
            }}
          >
            {item.label}
          </MuiLink>
        ))}
      </Stack>
    </Box>
  </Reveal>
)

// ─── Colonne Contact ──────────────────────────────────────────────────────────
const FooterContactColumn: FC<{ delay?: number }> = ({ delay = 0 }) => (
  <Reveal delay={delay}>
    <Box>
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 13 },
          fontWeight: 800,
          letterSpacing: 0.5,
          mb: { xs: 1.5, sm: 2 },
          color: (t) => (t.palette.mode === 'dark' ? BRAND.primaryLight : BRAND.primary),
        }}
      >
        Contact
      </Typography>
      <Stack spacing={1.1}>
      <Stack direction="row" spacing={1} alignItems="center">
  <EmailOutlinedIcon
    sx={{
      fontSize: 18,
      color: 'rgba(255,255,255,0.72)',
    }}
  />

  <Typography
    component="a"
    href="mailto:nexsetia@gmail.com"
    sx={{
      fontSize: { xs: 13.5, sm: 14.5 },
      fontWeight: 500,
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none',
      wordBreak: 'break-all',
      '&:hover': { color: BRAND.primaryLight },
    }}
  >
    nexsetia@gmail.com
  </Typography>
</Stack>
<Stack direction="row" spacing={1} alignItems="center">
  <PhoneOutlinedIcon
    sx={{
      fontSize: 18,
      color: 'rgba(255,255,255,0.72)',
    }}
  />

  <Typography
    component="a"
    href="tel:+212655760065"
    sx={{
      fontSize: { xs: 13.5, sm: 14.5 },
      fontWeight: 500,
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none',
      '&:hover': { color: BRAND.primaryLight },
    }}
  >
    +212 655 760 065
  </Typography>
</Stack>
        <Typography sx={{ fontSize: { xs: 13.5, sm: 14.5 }, fontWeight: 500, color: 'rgba(255,255,255,0.72)', mt: 1 }}>
          Disponible partout au Maroc
        </Typography>
        <Typography sx={{ fontSize: { xs: 13.5, sm: 14.5 }, fontWeight: 500, color: 'rgba(255,255,255,0.72)' }}>
          À distance & en visioconférence
        </Typography>
      </Stack>
    </Box>
  </Reveal>
)

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer: FC = () => {
  const [contactOpen, setContactOpen] = useState(false)
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const year = new Date().getFullYear()

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setParallax({ x, y })
  }

  const handleMouseLeave = () => setParallax({ x: 0, y: 0 })

  const waveColor = isDark ? '#120a10' : BRAND.primaryDark
  const bgGradient = isDark
    ? 'linear-gradient(160deg, #1c0e17 0%, #2b0f22 55%, #120a10 100%)'
    : `linear-gradient(160deg, ${BRAND.primaryDark} 0%, #6e1c4d 55%, ${BRAND.primaryDark} 100%)`

  return (
    <Box
      component='footer'
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        background: bgGradient,
        color: '#fff',
        width: '100%',
        mt: { xs: 6, sm: 10 },
        overflow: 'hidden',
      }}
    >
      <FooterWaveTop color={waveColor} />

      {/* ── Fond animé : orbes en parallaxe / rotation 3D ── */}
      <Box sx={{ position: 'absolute', inset: 0, perspective: '900px', zIndex: 0 }}>
        <Orb
          size={140}
          top='4%'
          left='10%'
          gradient={`radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), ${BRAND.primaryLight}55)`}
          duration={9}
          parallax={parallax}
          factor={16}
          opacity={0.5}
        />
        <Orb
          size={80}
          top='14%'
          left='38%'
          gradient='radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.05))'
          duration={7}
          reverse
          parallax={parallax}
          factor={10}
          opacity={0.35}
        />
        <Orb
          size={60}
          top='2%'
          right='30%'
          gradient='radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(255,255,255,0.05))'
          duration={6}
          parallax={parallax}
          factor={8}
          opacity={0.3}
        />
        <Orb
          size={70}
          top='auto'
          bottom='30%'
          right='6%'
          gradient={`radial-gradient(circle at 30% 30%, ${BRAND.primaryLight}, ${BRAND.primary})`}
          duration={8}
          reverse
          parallax={parallax}
          factor={-14}
          opacity={0.85}
        />
        <Orb
          size={26}
          top='auto'
          bottom='10%'
          right='24%'
          gradient={`radial-gradient(circle at 30% 30%, ${BRAND.primaryLight}, ${BRAND.primary})`}
          duration={5}
          parallax={parallax}
          factor={-8}
          opacity={0.9}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '18%',
            right: '4%',
            width: 90,
            height: 90,
            transformStyle: 'preserve-3d',
            animation: `${spin3d} 22s linear infinite`,
            opacity: 0.5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '30%',
              border: `2px solid ${BRAND.primaryLight}`,
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: -40,
            left: -40,
            width: 160,
            height: 160,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            borderLeft: '1px solid rgba(255,255,255,0.12)',
            transform: 'rotate(45deg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            right: -60,
            width: 220,
            height: 220,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            transform: 'rotate(-35deg)',
          }}
        />
      </Box>

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1, px: { xs: 3, sm: 4, md: 3 } }}>
        <Box sx={{ pt: { xs: 6, sm: 10 }, pb: { xs: 4, sm: 5 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.4fr 1fr 1fr 1fr' },
              gap: { xs: 5, md: 6 },
            }}
          >
            <Reveal>
              <Box sx={{ maxWidth: { md: 340 } }}>
                <Stack direction='row' gap={1.2} sx={{ alignItems: 'center', mb: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Image
    src={Logo}
    alt="Logo"
    style={{
      height: 30,
      width: 'auto',
    }}
  />
</Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 22, letterSpacing: 0.3 }}>
                    Nexsetia
                  </Typography>
                </Stack>

                <Typography
                  component='h3'
                  sx={{ fontWeight: 800, fontSize: { xs: 24, sm: 27 }, lineHeight: 1.25, mb: 2 }}
                >
                  Les marques <br /> qu&apos;on remarque.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.72)',
                    mb: 3,
                  }}
                >
                  Nous créons des stratégies digitales, des expériences web et des solutions
                  marketing qui accompagnent durablement la croissance des entreprises.
                </Typography>

                <Button
                  onClick={() => setContactOpen(true)}
                  sx={{
                    px: 3.2,
                    py: 1.3,
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: 14,
                    textTransform: 'none',
                    color: '#fff',
                    backgroundColor: BRAND.primary,
                    boxShadow: `0 12px 28px ${BRAND.primary}55`,
                    transition: 'transform 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      backgroundColor: '#9c2e69',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Réserver une consultation
                </Button>
              </Box>
            </Reveal>

            <FooterColumn title='Services' items={servicesList} delay={0.1} />
            <FooterColumn title='Entreprise' items={entrepriseList} delay={0.2} />
            <FooterContactColumn delay={0.3} />
          </Box>

          <Box sx={{ height: 1, width: '100%', backgroundColor: 'rgba(255,255,255,0.12)', my: { xs: 4, sm: 5 } }} />

          <Reveal delay={0.35}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 2.5, sm: 2 },
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 0.8, sm: 2.5 }}
                sx={{ alignItems: 'center', order: { xs: 2, sm: 1 } }}
              >
                <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                  © {year} Nexsetia
                </Typography>
                {legalLinks.map((label) => (
                  <Typography
                    key={label}
                    component='a'
                    href='#'
                    sx={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      '&:hover': { color: BRAND.primaryLight },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>

              <Stack direction='row' spacing={1.2} sx={{ order: { xs: 1, sm: 2 } }}>
                {socialLinks.map((item) => (
                  <Box
                    key={item.name}
                    component='a'
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={item.name}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: BRAND.primary,
                      backgroundColor: '#fff',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: BRAND.primary,
                        color: '#fff',
                        transform: 'translateY(-3px) scale(1.05)',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Reveal>
        </Box>
      </Container>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  )
}

export default Footer