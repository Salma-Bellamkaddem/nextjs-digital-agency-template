'use client'

import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

const locales = [
  {
    code: 'fr',
    label: 'FR',
  },
  {
    code: 'ar',
    label: 'AR',
  },
  {
    code: 'en',
    label: 'EN',
  },
] as const

const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const t = useTranslations('Navigation.language')

  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const currentLocale =
    locales.find((item) => item.code === locale) ?? locales[0]

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    setAnchorEl(event.currentTarget)
    setOpen((previous) => !previous)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setOpen(false)
      return
    }

    // Retirer l'ancien locale
    const pathnameWithoutLocale =
      pathname.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'

    // Construire la nouvelle URL
    const newPath =
      pathnameWithoutLocale === '/'
        ? `/${newLocale}`
        : `/${newLocale}${pathnameWithoutLocale}`

    setOpen(false)

    router.push(newPath)
  }

  return (
    <>
      {/* ─────────────────────────────────────
          LANGUAGE BOX
      ───────────────────────────────────── */}

      <Box
        component="button"
        type="button"
        onClick={handleToggle}
        aria-label={t('label')}
        aria-expanded={open}
        sx={{
          border: '1px solid',
          borderColor: open
            ? BRAND.primary
            : `${BRAND.primary}33`,

          backgroundColor: open
            ? `${BRAND.primary}12`
            : 'transparent',

          color: 'text.primary',

          cursor: 'pointer',

          height: 38,

          px: 1.4,

          borderRadius: '2rem',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          gap: 0.7,

          fontFamily: 'inherit',

          transition:
            'all 0.2s ease',

          '&:hover': {
            borderColor: BRAND.primary,
            backgroundColor: `${BRAND.primary}12`,
          },
        }}
      >
        {/* Globe */}
        <Box
          component="span"
          sx={{
            width: 17,
            height: 17,

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            color: BRAND.primary,
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <path d="M12 3a14 14 0 0 1 0 18" />
            <path d="M12 3a14 14 0 0 0 0 18" />
          </svg>
        </Box>

        <Typography
          component="span"
          sx={{
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {currentLocale.label}
        </Typography>

        {/* Chevron */}
        <Box
          component="span"
          sx={{
            display: 'flex',
            transition: 'transform 0.2s ease',

            transform: open
              ? 'rotate(180deg)'
              : 'rotate(0deg)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Box>
      </Box>

      {/* ─────────────────────────────────────
          DROPDOWN
      ───────────────────────────────────── */}

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        sx={{
          zIndex: 1500,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            elevation={0}
            sx={{
              mt: 1,

              minWidth: 190,

              overflow: 'hidden',

              borderRadius: 3,

              border:
                `1px solid ${BRAND.primary}22`,

              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? '#1f0716'
                  : '#ffffff',

              boxShadow:
                `0 12px 35px ${BRAND.primary}20`,

              p: 0.7,
            }}
          >
            {/* Header */}

            <Box
              sx={{
                px: 1.5,
                py: 1,

                color: 'text.secondary',

                fontSize: 11,

                fontWeight: 700,

                textTransform: 'uppercase',

                letterSpacing: '0.08em',
              }}
            >
              {t('label')}
            </Box>

            {locales.map((item) => {
              const isActive =
                item.code === locale

              const languageName =
                t(item.code)

              return (
                <Box
                  key={item.code}
                  component="button"
                  type="button"
                  onClick={() =>
                    changeLanguage(item.code)
                  }
                  sx={{
                    width: '100%',

                    border: 'none',

                    cursor:
                      isActive
                        ? 'default'
                        : 'pointer',

                    background:
                      isActive
                        ? `linear-gradient(
                            135deg,
                            ${BRAND.primary},
                            ${BRAND.primaryDark}
                          )`
                        : 'transparent',

                    color:
                      isActive
                        ? BRAND.white
                        : 'text.primary',

                    borderRadius: 2,

                    px: 1.5,
                    py: 1,

                    mb: 0.3,

                    display: 'flex',
                    alignItems: 'center',

                    gap: 1,

                    textAlign: 'left',

                    fontFamily: 'inherit',

                    transition:
                      'all 0.2s ease',

                    '&:hover': {
                      background:
                        isActive
                          ? `linear-gradient(
                              135deg,
                              ${BRAND.primary},
                              ${BRAND.primaryDark}
                            )`
                          : `${BRAND.primary}12`,
                    },
                  }}
                >
                  {/* Code */}

                  <Box
                    sx={{
                      width: 30,
                      height: 30,

                      borderRadius: '50%',

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      background:
                        isActive
                          ? 'rgba(255,255,255,0.16)'
                          : `${BRAND.primary}12`,

                      color:
                        isActive
                          ? BRAND.white
                          : BRAND.primary,

                      fontSize: 10,

                      fontWeight: 800,
                    }}
                  >
                    {item.label}
                  </Box>

                  {/* Name */}

                  <Typography
                    component="span"
                    sx={{
                      flex: 1,

                      fontSize: 13,

                      fontWeight:
                        isActive
                          ? 700
                          : 500,

                      color: 'inherit',
                    }}
                  >
                    {languageName}
                  </Typography>

                  {/* Check */}

                  {isActive && (
                    <Box
                      component="span"
                      sx={{
                        display: 'flex',
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </Box>
                  )}
                </Box>
              )
            })}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  )
}

export default LanguageSwitcher