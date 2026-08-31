'use client'

import React, { FC, memo, ReactNode } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { useScrollOrNavigate } from '../../hooks/useScrollOrNavigate'
import { companyMenus } from '@/constants/menus'

// ─────────────────────────────────────────────
// BRAND
// ─────────────────────────────────────────────

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

// ─────────────────────────────────────────────
// PROPS
// ─────────────────────────────────────────────

interface LinkItemProps {
  label: string
  path: string
  sectionId?: string | null
  icon?: ReactNode
}

// ─────────────────────────────────────────────
// LINK ITEM
// ─────────────────────────────────────────────

const LinkItem: FC<LinkItemProps> = ({
  label,
  path,
  sectionId,
  icon,
}) => {
  const pathname = usePathname()
  const goTo = useScrollOrNavigate()

  // Retire /fr, /ar ou /en du pathname
  const normalizedPath =
    pathname?.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'

  // Normalise également le path du menu
  const normalizedMenuPath =
    path.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'

  const isActive =
    normalizedPath === normalizedMenuPath ||
    (sectionId !== null &&
      sectionId !== undefined &&
      pathname?.includes(sectionId))

  const handleClick = () => {
    goTo({
      path,
      sectionId,
    })
  }

  return (
    <Box
      component="button"
      type="button"
      onClick={handleClick}
      sx={{
        border: 'none',
        background: 'none',
        font: 'inherit',

        py: 0.8,
        px: 1.8,
        mx: 0.4,

        borderRadius: 10,

        cursor: 'pointer',
        overflow: 'hidden',

        alignItems: 'center',
        position: 'relative',

        textDecoration: 'none',
        display: 'inline-block',

        transition: (theme: Theme) =>
          theme.transitions.create([
            'background-color',
            'color',
            'box-shadow',
          ]),

        // ─────────────────────────────────────
        // ICON
        // ─────────────────────────────────────

        '& svg': {
          width: 18,
          height: 18,

          transform: 'translateX(-32px)',

          position: 'absolute',
          top: '50%',
          left: '14px',

          translate: '0 -50%',

          transition: (theme: Theme) =>
            theme.transitions.create([
              'transform',
            ]),
        },

        // ─────────────────────────────────────
        // ACTIVE
        // ─────────────────────────────────────

        ...(isActive && {
          background: `linear-gradient(
            135deg,
            ${BRAND.primary} 0%,
            ${BRAND.primaryDark} 100%
          )`,

          color: BRAND.white,

          boxShadow: `0 4px 12px ${BRAND.primary}44`,

          '& svg': {
            transform: 'translateX(0)',
          },

          '& p': {
            marginLeft: '26px',
          },
        }),

        // ─────────────────────────────────────
        // INACTIVE
        // ─────────────────────────────────────

        ...(!isActive && {
          color: 'text.primary',
        }),

        // ─────────────────────────────────────
        // HOVER
        // ─────────────────────────────────────

        '&:hover': {
          background: `linear-gradient(
            135deg,
            ${BRAND.primary} 0%,
            ${BRAND.primaryDark} 100%
          )`,

          color: BRAND.white,

          boxShadow: `0 4px 12px ${BRAND.primary}44`,

          '& svg': {
            transform: 'translateX(0)',
          },

          '& p': {
            marginLeft: '26px',
          },
        },
      }}
    >
      {icon}

      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: 14,

          fontWeight: isActive ? 700 : 500,

          display: 'inline-block',

          color: 'inherit',

          marginLeft: 0,

          transition: (theme: Theme) =>
            theme.transitions.create(['margin']),
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

// ─────────────────────────────────────────────
// MEMO
// ─────────────────────────────────────────────

const MemoizedLinkItem = memo(LinkItem)

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

interface Props {}

const AppBarNavigation: FC<Props> = () => {
  // IMPORTANT :
  // Le namespace doit correspondre à ton fichier messages/fr.json
  const t = useTranslations('Navigation')

  return (
    <Box sx={{ mx: 'auto' }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,

          display: 'flex',
          alignItems: 'center',

          listStyle: 'none',
        }}
      >
        {companyMenus.map((item, index) => (
          <MemoizedLinkItem
            key={`${item.labelKey}-${index}`}
            label={t(item.labelKey)}
            path={item.path}
            sectionId={item.sectionId}
            icon={item.icon}
          />
        ))}
      </Box>
    </Box>
  )
}

export default memo(AppBarNavigation)