import React from 'react'
import Box from '@mui/material/Box'

// icons
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import ContactSupportOutlinedIcon from '@/assets/icons/material-symbols--contact-support-outline-rounded.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import EmailOutlinedIcon from '@/assets/icons/eva--email-outline.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'
import ConversationOutlinedIcon from '@/assets/icons/ci--chat-conversation.svg'

export interface IMenu {
  labelKey: string
  path: string
  sectionId?: string | null
  icon?: React.ReactNode
}

export const companyMenus: IMenu[] = [
  {
    labelKey: 'company.home',
    path: '/',
    sectionId: null,
    icon: (
      <Box
        component={HomeOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'company.services',
    path: '/#home-services',
    sectionId: 'home-services',
    icon: (
      <Box
        component={LayersOutlinedIcon}
        sx={{ width: 20, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'company.method',
    path: '/#home-method',
    sectionId: 'home-method',
    icon: (
      <Box
        component={WorkOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'company.vision',
    path: '/#home-vision',
    sectionId: 'home-vision',
    icon: (
      <Box
        component={InfoOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'company.about',
    path: '/#home-team',
    sectionId: 'home-team',
    icon: (
      <Box
        component={InfoOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  // ── Ajout de la page Blog ──
  {
    labelKey: 'company.blog',
    path: '/blog',
    sectionId: null,
    icon: (
      <Box
        component={PaperOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },
]

export const supportLinks: IMenu[] = [
  {
    labelKey: 'Navigation.support.helpCenter',
    path: '/help-center',
    icon: (
      <Box
        component={ContactSupportOutlinedIcon}
        sx={{ width: 22, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'Navigation.support.contact',
    path: '/contact-us',
    icon: (
      <Box
        component={EmailOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'Navigation.support.terms',
    path: '/terms-of-services',
    icon: (
      <Box
        component={PaperOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'Navigation.support.privacy',
    path: '/privacy-policy',
    icon: (
      <Box
        component={ShieldOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },

  {
    labelKey: 'Navigation.support.liveChat',
    path: '/live-chat',
    icon: (
      <Box
        component={ConversationOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },
]