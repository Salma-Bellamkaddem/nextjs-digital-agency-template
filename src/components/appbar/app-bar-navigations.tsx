'use client'

import React, { FC, memo, ReactElement } from 'react'

// components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// interfaces
import { Theme } from '@mui/material/styles'

// hooks
import { usePathname } from 'next/navigation'
import { useScrollOrNavigate } from '../../hooks/useScrollOrNavigate'

// constants
import { companyMenus } from '@/constants/menus'

// ─── Palette EXSETIA (dupliquée ici pour éviter un import croisé) ─────────────
const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  white: '#FFFFFF',
}

interface LinkItemProps extends Props {
  label: string
  path: string
  sectionId?: string | null
  icon?: ReactElement
}

const LinkItem: FC<LinkItemProps> = ({ label, path, sectionId, icon }: LinkItemProps) => {
  const pathName = usePathname()
  const goTo = useScrollOrNavigate()
  const isActive = pathName === path

  return (
    <Box
      component="button"
      onClick={() => goTo({ path, sectionId })}
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
          theme.transitions.create(['background-color', 'color', 'box-shadow']),

        // Icône
        '& svg': {
          fontSize: 18,
          transform: 'translateX(-32px)',
          position: 'absolute',
          top: '8px',
          transition: (theme: Theme) =>
            theme.transitions.create(['transform', 'margin']),
        },

        // ── État actif ──
        ...(isActive && {
          background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
          color: BRAND.white,
          boxShadow: `0 4px 12px ${BRAND.primary}44`,
        }),

        // ── État inactif ──
        ...(!isActive && {
          color: 'text.primary',
        }),

        // ── Hover ──
        '&:hover': {
          background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
          color: BRAND.white,
          boxShadow: `0 4px 12px ${BRAND.primary}44`,
          '& svg': {
            transform: 'translateX(0px)',
          },
          '& p': {
            marginLeft: '26px',
          },
        },
      }}
    >
      {icon}
      <Typography
        variant='h6'
        component='p'
        sx={{
          fontSize: 14,
          fontWeight: isActive ? 700 : 500,
          display: 'inline-block',
          color: 'inherit',
          marginLeft: '0',
          transition: (theme: Theme) => theme.transitions.create(['margin']),
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

const MemoizedLinkItem = memo(LinkItem)

interface Props {}

const AppBarNavigation: FC<Props> = () => {
  return (
    <Box sx={{ mx: 'auto' }}>
      <Box component='ul' sx={{ m: 0, lineHeight: 0, pl: 0 }}>
        {companyMenus.map((item, index) => (
          <MemoizedLinkItem
            key={String(index)}
            label={item.label}
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