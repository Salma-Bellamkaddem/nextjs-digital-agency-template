'use client'

import React, { FC, Fragment, useCallback, useMemo, useState } from 'react'

// components
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import AppBarSwitchDarkMode from './switch-dark-mode'

// hooks
import { useWindowScroll } from 'react-use'
import { useMediaQuery } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'
import { usePathname } from 'next/navigation'

import { useScrollOrNavigate } from '../../hooks/useScrollOrNavigate'

// assets
import Logo from '@/assets/logo.svg'

// constants
import { companyMenus } from '@/constants/menus'
import ContactModal from '@/app/_components/ContactModal'
// ─── Palette EXSETIA ──────────────────────────────────────────────────────────
const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

// ─── Bouton "Devis gratuit" ───────────────────────────────────────────────────
const DevisButton: FC<{
  small?: boolean
  onClick: () => void
}> = ({ small, onClick }) => (
  <Box
    component="button"
    onClick={onClick}
    sx={{
      border: 'none',
      cursor: 'pointer',
      px: small ? '12px' : '18px',
      py: small ? '7px' : '9px',
      borderRadius: '2rem',
      fontSize: small ? 12 : 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      color: BRAND.white,
      background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
      boxShadow: `0 4px 14px ${BRAND.primary}55`,
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 6px 20px ${BRAND.primary}80`,
      },
      '&::before': {
        content: '"✦"',
        fontSize: 10,
        opacity: 0.85,
      },
    }}
  >
    {small ? 'Devis' : 'Devis gratuit'}
  </Box>
)

// ─── Logo + Nom stylisé (inspiré du design DigitalMa) ────────────────────────
const BrandLogo: FC<{ floating: boolean }> = ({ floating }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
    <Box
      component={Logo}
      sx={{
        height: floating ? 44 : 56,
        width: 'auto',
        transition: (theme: Theme) => theme.transitions.create(['height']),
        filter: `drop-shadow(0 0 8px ${BRAND.primary}55)`,
      }}
    />
    <Box
      sx={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
        fontSize: floating ? 26 : 34,
        lineHeight: 1,
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'baseline',
        userSelect: 'none',
        transition: (theme: Theme) => theme.transitions.create(['font-size']),
      }}
    >
      {/* "EXSE" — couleur claire/neutre, poids normal */}
      <Box
        component="span"
        sx={{
          color: (theme: Theme) =>
            theme.palette.mode === 'dark' ? '#F8CEEC' : '#570D3F',
          fontWeight: 500,
        }}
      >
        EXSE
      </Box>
      {/* "TIA" — rose vif + ultra bold, comme "Ma" dans le design */}
      <Box component="span" sx={{ color: BRAND.primary, fontWeight: 900 }}>
        TIA
      </Box>
    </Box>
  </Box>
)

// ─── Navigation desktop ───────────────────────────────────────────────────────
// Chaque item scrolle vers sa section sur la home (ou y navigue depuis ailleurs).
const DesktopNav: FC = () => {
  const pathName = usePathname()
  const goTo = useScrollOrNavigate()

  return (
    <Box sx={{ mx: 'auto', display: 'flex', alignItems: 'center' }}>
      {companyMenus.map((item, i) => {
        // "Actif" reste pertinent uniquement quand on est sur une vraie page
        // dédiée correspondante (ex: /pricing). Sur la home en scroll, on ne
        // force pas d'état actif basé sur le path.
        const isActive = pathName === item.path

        return (
          <Box
            key={i}
            component="button"
            onClick={() => goTo(item)}
            sx={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              font: 'inherit',
              py: '7px',
              px: '16px',
              mx: '3px',
              borderRadius: '2rem',
              fontSize: 14,
              fontWeight: isActive ? 700 : 500,
              textDecoration: 'none',
              display: 'inline-block',
              transition: (theme: Theme) =>
                theme.transitions.create(['background', 'color', 'box-shadow']),
              ...(isActive
                ? {
                    background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                    color: BRAND.white,
                    boxShadow: `0 4px 12px ${BRAND.primary}44`,
                  }
                : {
                    color: 'text.primary',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                      color: BRAND.white,
                      boxShadow: `0 4px 12px ${BRAND.primary}44`,
                    },
                  }),
            }}
          >
            {item.label}
          </Box>
        )
      })}
    </Box>
  )
}

// ─── Icône hamburger ──────────────────────────────────────────────────────────
const HamburgerIcon: FC<{ open: boolean; onClick: () => void }> = ({ open, onClick }) => (
  <IconButton onClick={onClick} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} sx={{ p: '6px' }}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <line x1="4" y1="8" x2="24" y2="8" stroke={BRAND.primary} strokeWidth="2.2" strokeLinecap="round"
        style={{ transformOrigin: '14px 14px', transform: open ? 'rotate(45deg) translateY(6px)' : 'none', transition: 'transform 0.3s ease' }} />
      <line x1="4" y1="14" x2="24" y2="14" stroke={BRAND.primary} strokeWidth="2.2" strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: 'opacity 0.2s ease' }} />
      <line x1="4" y1="20" x2="24" y2="20" stroke={BRAND.primary} strokeWidth="2.2" strokeLinecap="round"
        style={{ transformOrigin: '14px 14px', transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none', transition: 'transform 0.3s ease' }} />
    </svg>
  </IconButton>
)

// ─── Drawer mobile ────────────────────────────────────────────────────────────
const MobileDrawer: FC<{
  open: boolean
  onClose: () => void
  onOpenContact: () => void
}> = ({ open, onClose, onOpenContact }) => {  const pathName = usePathname()
  const goTo = useScrollOrNavigate()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          background: (theme: Theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(160deg, #1a0011 0%, #2d0520 100%)'
              : 'linear-gradient(160deg, #fff8fd 0%, #fce8f5 100%)',
          pt: 3,
          px: 2,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, px: 1 }}>
        <Box sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 22 }}>
          <Box component="span" sx={{ color: '#570D3F', fontWeight: 500 }}>EXSE</Box>
          <Box component="span" sx={{ color: BRAND.primary, fontWeight: 900 }}>TIA</Box>
        </Box>
        <IconButton onClick={onClose} size="small">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="3" y1="3" x2="17" y2="17" stroke={BRAND.primary} strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="3" x2="3" y2="17" stroke={BRAND.primary} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2, borderColor: `${BRAND.primary}33` }} />

      {/* Liens */}
      <List disablePadding>
        {companyMenus.map((item, i) => {
          const isActive = pathName === item.path
          return (
            <ListItem key={i} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  onClose()
                  goTo(item)
                }}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1.2,
                  ...(isActive
                    ? {
                        background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                        color: BRAND.white,
                      }
                    : {
                        '&:hover': { background: `${BRAND.primary}18`, color: BRAND.primary },
                      }),
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 15, fontWeight: isActive ? 700 : 500 }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      <Divider sx={{ my: 2, borderColor: `${BRAND.primary}33` }} />

      {/* Devis + dark mode */}
      <Box sx={{ px: 1 }}>
        <Box
        component="button"
        onClick={() => {
          onClose()
          onOpenContact()
        }}
          sx={{
            border: 'none',
cursor: 'pointer',
width: '100%',
            display: 'block',
            textAlign: 'center',
            py: '11px',
            borderRadius: '2rem',
            fontSize: 14,
            fontWeight: 700,
            textDecoration: 'none',
            color: BRAND.white,
            background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
            boxShadow: `0 4px 14px ${BRAND.primary}44`,
            letterSpacing: '0.04em',
            '&::before': { content: '"✦  "', fontSize: 11 },
          }}
        >
          Demander un devis gratuit
        </Box>
      </Box>

      <Box sx={{ mt: 2, px: 1, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ fontSize: 13, color: 'text.secondary', fontWeight: 500 }}>Mode sombre</Box>
        <Box sx={{ ml: 'auto' }}>
          <AppBarSwitchDarkMode />
        </Box>
      </Box>
    </Drawer>
  )
}

// ─── AppBar principal ─────────────────────────────────────────────────────────
const AppBar: FC = () => {
  const theme = useTheme()
  const { y: scrollY } = useWindowScroll()
  const mobileMatches = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const pathName = usePathname()

  const shouldFloating = useMemo(() => scrollY > 120, [scrollY])

  const backgroundColor = useMemo(() => {
    if (!shouldFloating) return 'transparent'
    return theme.palette.mode === 'light'
      ? 'rgb(255 248 253 / 85%)'
      : 'rgb(30 5 20 / 88%)'
  }, [shouldFloating, theme])

  const onClickLogo = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (pathName === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.location.href = '/'
      }
    }
  }, [pathName])

  return (
    <Fragment>
      <Box
        sx={{
          position: 'fixed',
          boxSizing: 'border-box',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, 0%)',
          width: { xs: '100%', md: 1200 },
          zIndex: 1100,
        }}
      >
        <Container sx={{ px: { xs: '16px !important', md: '0 !important' }, pt: { xs: 1, md: 0 } }}>
          <Box
            className={shouldFloating ? 'floating' : 'fixed-top'}
            sx={{
              mt: { xs: 1, md: 2.4 },
              backgroundColor,
              display: 'flex',
              alignItems: 'center',
              transition: (theme: Theme) =>
                theme.transitions.create(['transform', 'margin-top', 'background-color', 'padding']),
              backdropFilter: shouldFloating ? 'blur(12px)' : 'unset',
              border: shouldFloating ? `1px solid ${BRAND.primary}22` : '1px solid transparent',
              borderRadius: 10,
              padding: 0,
              '&.floating': {
                mt: 1.4,
                padding: { xs: '10px 16px', md: '12px 24px' },
                boxShadow: `0 8px 32px ${BRAND.primary}18`,
              },
            }}
          >
            <Box onClick={onClickLogo} sx={{ cursor: 'pointer' }}>
              <BrandLogo floating={shouldFloating} />
            </Box>

            {mobileMatches ? (
              <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
<DevisButton
  small
  onClick={() => setContactOpen(true)}
/>                <HamburgerIcon open={drawerOpen} onClick={() => setDrawerOpen(true)} />
              </Box>
            ) : (
              <>
                <DesktopNav />
                <AppBarSwitchDarkMode />
                <DevisButton
  onClick={() => setContactOpen(true)}
/>
              </>
            )}
          </Box>
        </Container>
      </Box>
      <MobileDrawer
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  onOpenContact={() => setContactOpen(true)}
/>
<ContactModal
  open={contactOpen}
  onClose={() => setContactOpen(false)}
/>
    </Fragment>
  )
}

export default AppBar