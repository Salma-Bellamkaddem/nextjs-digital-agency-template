'use client'

import React, { FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  Theme,
  useMediaQuery,
} from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useWindowScroll } from 'react-use'

// components
import AppBarSwitchDarkMode from './switch-dark-mode'
import LanguageSwitcher from './language-switcher'
import ContactModal from '@/app/_components/ContactModal'

// hooks
import { useScrollOrNavigate } from '../../hooks/useScrollOrNavigate'

// assets
import Logo from '@/assets/logo.svg'

// constants
import { companyMenus } from '@/constants/menus'

// ─────────────────────────────────────────────────────────────
// BRAND CONSTANTS
// ─────────────────────────────────────────────────────────────

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

// ─────────────────────────────────────────────────────────────
// DEVIS BUTTON
// ─────────────────────────────────────────────────────────────

const DevisButton: FC<{
  small?: boolean
  onClick: () => void
}> = ({ small = false, onClick }) => {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        px: small ? { xs: 1.5, sm: 1.8 } : { md: 1.8, lg: 2.2 },
        py: small ? { xs: 0.65, sm: 0.8 } : 0.85,
        borderRadius: '2rem',
        fontSize: small ? { xs: '0.75rem', sm: '0.8125rem' } : { md: '0.8125rem', lg: '0.85rem' },
        fontWeight: 700,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        color: BRAND.white,
        background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
        boxShadow: `0 3px 12px ${alpha(BRAND.primary, 0.35)}`,
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-1.5px)',
          boxShadow: `0 6px 18px ${alpha(BRAND.primary, 0.5)}`,
          filter: 'brightness(1.05)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        '&::before': {
          content: '"✦"',
          fontSize: small ? 10 : 11,
          opacity: 0.9,
        },
      }}
    >
      {small ? 'Devis' : 'Devis gratuit'}
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
// BRAND LOGO (Hydration-Safe SVG wrapper)
// ─────────────────────────────────────────────────────────────

const BrandLogo: FC<{
  floating: boolean
}> = ({ floating }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        direction: 'ltr',
        gap: { xs: 1, md: 1.25 },
        minWidth: 0,
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          height: {
            xs: 26,
            sm: 30,
            md: floating ? 32 : 36,
            lg: floating ? 36 : 42,
          },
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          filter: `drop-shadow(0 2px 8px ${alpha(BRAND.primary, 0.25)})`,
        }}
      >
        <Logo
          style={{
            height: '100%',
            width: 'auto',
            display: 'block',
          }}
        />
      </Box>

      <Box
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: {
            xs: 17,
            sm: 19,
            md: floating ? 20 : 22,
            lg: floating ? 23 : 26,
          },
          lineHeight: 1,
          letterSpacing: '-0.01em',
          display: 'flex',
          flexDirection: 'row',
          direction: 'ltr',
          alignItems: 'baseline',
          whiteSpace: 'nowrap',
        }}
      >
        <Box
          component="span"
          sx={{
            color: isDark ? '#FCE8F5' : '#420830',
            fontWeight: 600,
          }}
        >
          NEXSE
        </Box>
        <Box
          component="span"
          sx={{
            color: BRAND.primary,
            fontWeight: 800,
          }}
        >
          TIA
        </Box>
      </Box>
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
// DESKTOP NAVIGATION
// ─────────────────────────────────────────────────────────────

const DesktopNav: FC = () => {
  const pathname = usePathname()
  const goTo = useScrollOrNavigate()
  const t = useTranslations()

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { md: 0.25, lg: 0.5 },
        flexShrink: 1,
        minWidth: 0,
      }}
    >
      {companyMenus.map((item, index) => {
        const normalizedPath =
          pathname?.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'
        const normalizedMenuPath =
          item.path.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'
        const isActive =
          normalizedPath === normalizedMenuPath ||
          (item.path === '/blog' && normalizedPath.startsWith('/blog'))

        const displayLabel = t.has(item.labelKey)
          ? t(item.labelKey)
          : item.labelKey.replace('Navigation.company.', '').replace('Navigation.', '')

        return (
          <Box
            key={`${item.labelKey}-${index}`}
            component="button"
            type="button"
            onClick={() => goTo(item)}
            sx={{
              border: 'none',
              backgroundColor: isActive
                ? alpha(BRAND.primary, 0.12)
                : 'transparent',
              cursor: 'pointer',
              font: 'inherit',
              py: '6px',
              px: { md: '8px', lg: '12px' },
              borderRadius: '2rem',
              fontSize: { md: '0.8125rem', lg: '0.85rem' },
              fontWeight: isActive ? 700 : 500,
              color: isActive ? BRAND.primary : 'text.primary',
              whiteSpace: 'nowrap',
              transition: (theme: Theme) =>
                theme.transitions.create(
                  ['background-color', 'color', 'transform'],
                  { duration: theme.transitions.duration.shorter }
                ),
              '&:hover': {
                backgroundColor: isActive
                  ? alpha(BRAND.primary, 0.18)
                  : alpha(BRAND.primary, 0.08),
                color: BRAND.primary,
              },
            }}
          >
            {displayLabel}
          </Box>
        )
      })}
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
// HAMBURGER ICON
// ─────────────────────────────────────────────────────────────

const HamburgerIcon: FC<{
  open: boolean
  onClick: () => void
}> = ({ open, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      sx={{
        p: 0.75,
        flexShrink: 0,
        color: BRAND.primary,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            transformOrigin: '12px 12px',
            transform: open ? 'rotate(45deg) translateY(6px)' : 'none',
            transition: 'transform 0.25s ease',
          }}
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }}
        />
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            transformOrigin: '12px 12px',
            transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none',
            transition: 'transform 0.25s ease',
          }}
        />
      </svg>
    </IconButton>
  )
}

// ─────────────────────────────────────────────────────────────
// MOBILE DRAWER
// ─────────────────────────────────────────────────────────────

const MobileDrawer: FC<{
  open: boolean
  onClose: () => void
  onOpenContact: () => void
}> = ({ open, onClose, onOpenContact }) => {
  const pathname = usePathname()
  const locale = useLocale()
  const goTo = useScrollOrNavigate()
  const t = useTranslations()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '82vw',
          maxWidth: 320,
          background: (theme: Theme) =>
            theme.palette.mode === 'dark'
              ? `linear-gradient(180deg, #180313 0%, #29051F 100%)`
              : `linear-gradient(180deg, #FFFFFF 0%, #FDF4FA 100%)`,
          py: 3,
          px: 2.5,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2.5,
          px: 0.5,
        }}
      >
        <Box
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          <Box
            component="span"
            sx={(theme: Theme) => ({
              color: theme.palette.mode === 'dark' ? '#FCE8F5' : '#420830',
              fontWeight: 600,
            })}
          >
            NEXSE
          </Box>
          <Box component="span" sx={{ color: BRAND.primary, fontWeight: 800 }}>
            TIA
          </Box>
        </Box>

        <IconButton onClick={onClose} size="small" sx={{ color: BRAND.primary }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line
              x1="4"
              y1="4"
              x2="16"
              y2="16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="4"
              x2="4"
              y2="16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2, borderColor: alpha(BRAND.primary, 0.15) }} />

      <List disablePadding sx={{ flex: '1 1 auto' }}>
        {companyMenus.map((item, index) => {
          const normalizedPath =
            pathname?.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'
          const normalizedMenuPath =
            item.path.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'
          const isActive =
            normalizedPath === normalizedMenuPath ||
            (item.path === '/blog' && normalizedPath.startsWith('/blog'))

          const displayLabel = t.has(item.labelKey)
            ? t(item.labelKey)
            : item.labelKey.replace('Navigation.company.', '').replace('Navigation.', '')

          return (
            <ListItem key={`${item.labelKey}-${index}`} disablePadding sx={{ mb: 0.5 }}>
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
                        background: alpha(BRAND.primary, 0.12),
                        color: BRAND.primary,
                      }
                    : {
                        color: 'text.primary',
                        '&:hover': {
                          background: alpha(BRAND.primary, 0.06),
                          color: BRAND.primary,
                        },
                      }),
                }}
              >
                <ListItemText
                  primary={displayLabel}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      <Divider sx={{ my: 2, borderColor: alpha(BRAND.primary, 0.15) }} />

      <Box sx={{ mb: 2 }}>
        <Box
          component="button"
          type="button"
          onClick={() => {
            onClose()
            onOpenContact()
          }}
          sx={{
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            py: '12px',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: BRAND.white,
            background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
            boxShadow: `0 4px 14px ${alpha(BRAND.primary, 0.35)}`,
            letterSpacing: '0.02em',
            '&::before': {
              content: '"✦ "',
              fontSize: 12,
            },
          }}
        >
          {locale === 'ar' ? 'طلب عرض سعر مجاني' : 'Demander un devis gratuit'}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          pt: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 0.5,
          }}
        >
          <Box sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 500 }}>
            {t.has('Navigation.language.label')
              ? t('Navigation.language.label')
              : 'Langue'}
          </Box>
          <LanguageSwitcher />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 0.5,
          }}
        >
          <Box sx={{ fontSize: '0.85rem', color: 'text.secondary', fontWeight: 500 }}>
            {locale === 'ar' ? 'الوضع الداكن' : 'Mode sombre'}
          </Box>
          <AppBarSwitchDarkMode />
        </Box>
      </Box>
    </Drawer>
  )
}

// ─────────────────────────────────────────────────────────────
// MAIN APP BAR
// ─────────────────────────────────────────────────────────────

const AppBar: FC = () => {
  const theme = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const { y: scrollY } = useWindowScroll()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const mobileMatches = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const isScrolled = useMemo(() => (mounted ? scrollY > 40 : false), [scrollY, mounted])
  const isMobile = mounted ? mobileMatches : false

  const onClickLogo = useCallback(() => {
    if (typeof window === 'undefined') return

    const isHome = pathname === '/' || /^\/(fr|ar|en)\/?$/.test(pathname || '')

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const locale = pathname?.match(/^\/(fr|ar|en)(?=\/|$)/)?.[1] || 'fr'
      router.push(`/${locale}`)
    }
  }, [pathname, router])

  return (
    <Fragment>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 1.5, sm: 2.5, md: 3 },
            pt: { xs: 1, md: isScrolled ? 1.2 : 2 },
            transition: 'padding 0.3s ease',
          }}
        >
          <Box
            sx={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 1, md: 1.5, lg: 2 },
              px: {
                xs: 1.5,
                sm: 2,
                md: 2,
                lg: 2.5,
              },
              py: {
                xs: 0.8,
                sm: 1,
                md: isScrolled ? 0.75 : 1,
              },
              borderRadius: '3rem',
              backgroundColor: isScrolled
                ? theme.palette.mode === 'dark'
                  ? alpha('#180313', 0.88)
                  : alpha('#FFFFFF', 0.88)
                : theme.palette.mode === 'dark'
                ? alpha('#180313', 0.65)
                : alpha('#FFFFFF', 0.65),
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid',
              borderColor: isScrolled
                ? alpha(BRAND.primary, 0.2)
                : alpha(BRAND.primary, 0.1),
              boxShadow: isScrolled
                ? `0 10px 30px -5px ${alpha(
                    theme.palette.mode === 'dark' ? '#000000' : BRAND.primary,
                    theme.palette.mode === 'dark' ? 0.5 : 0.12
                  )}`
                : `0 4px 20px -2px ${alpha(BRAND.primary, 0.05)}`,
              transition: (t: Theme) =>
                t.transitions.create(
                  ['background-color', 'border-color', 'box-shadow', 'padding'],
                  { duration: t.transitions.duration.standard }
                ),
            }}
          >
            {/* Logo */}
            <Box
              onClick={onClickLogo}
              sx={{
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <BrandLogo floating={isScrolled} />
            </Box>

            {/* Desktop Navigation & Actions */}
            {!isMobile ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { md: 1, lg: 1.5 },
                  flexShrink: 0,
                }}
              >
                <DesktopNav />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ my: 0.75, borderColor: alpha(BRAND.primary, 0.15) }}
                />
                <LanguageSwitcher />
                <AppBarSwitchDarkMode />
                <DevisButton onClick={() => setContactOpen(true)} />
              </Box>
            ) : (
              /* Mobile Actions */
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DevisButton small onClick={() => setContactOpen(true)} />
                <HamburgerIcon
                  open={drawerOpen}
                  onClick={() => setDrawerOpen(true)}
                />
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Fragment>
  )
}

export default AppBar