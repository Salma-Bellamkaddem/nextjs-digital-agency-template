import Box from '@mui/material/Box'

// icons
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import FolderOutlinedIcon from '@/assets/icons/fluent--folder-32-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import ContactSupportOutlinedIcon from '@/assets/icons/material-symbols--contact-support-outline-rounded.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import EmailOutlinedIcon from '@/assets/icons/eva--email-outline.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'
import ConversationOutlinedIcon from '@/assets/icons/ci--chat-conversation.svg'

// ─── Menu principal (navigation) ───────────────────────────────────────────
// `path`      → utilisé si l'item correspond à une vraie page dédiée (ex: /pricing)
// `sectionId` → utilisé pour scroller vers l'ancre correspondante sur la home ('/')
//               - si on est déjà sur '/', on scrolle directement
//               - sinon, on navigue vers '/' puis on scrolle une fois arrivé
export const companyMenus: IMenu[] = [
  {
    label: 'Accueil',
    path: '/',
    sectionId: null, // scroll en haut de page, géré par onClickLogo / cas particulier
    icon: (
      <Box component={HomeOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Services',
    path: '/services',
    sectionId: 'home-services',
    icon: (
      <Box component={LayersOutlinedIcon} sx={{ width: 20, height: 'auto' }} />
    ),
  },
  {
    label: 'Réalisations',
    path: '/portfolio',
    sectionId: 'home-portfolio',
    icon: (
      <Box component={FolderOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Contact',
    path: '/contact',
    sectionId: 'home-contact',
    icon: (
      <Box component={ContactOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Tarifs',
    path: '/pricing',
    sectionId: null, // vraie page dédiée, pas une ancre sur la home
    icon: (
      <Box component={LayersOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Carrières',
    path: '/career',
    sectionId: 'home-career',
    icon: (
      <Box component={WorkOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'À propos',
    path: '/about',
    sectionId: 'home-about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

// ─── Liens d'assistance (footer / aide) ────────────────────────────────────
// Ce sont de vraies pages dédiées, donc pas de sectionId ici.
export const supportLinks: IMenu[] = [
  {
    label: "Centre d'aide",
    path: '/help-center',
    icon: (
      <Box
        component={ContactSupportOutlinedIcon}
        sx={{ width: 22, height: 'auto' }}
      />
    ),
  },
  {
    label: 'Contactez-nous',
    path: '/contact-us',
    icon: (
      <Box component={EmailOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: "Conditions d'utilisation",
    path: '/terms-of-services',
    icon: (
      <Box component={PaperOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Politique de confidentialité',
    path: '/privacy-policy',
    icon: (
      <Box component={ShieldOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Chat en direct',
    path: '/live-chat',
    icon: (
      <Box
        component={ConversationOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },
]