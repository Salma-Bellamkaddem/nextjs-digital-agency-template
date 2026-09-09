'use client'

import React from 'react'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

interface ShareButtonsProps {
  url: string
  title: string
  primaryDark?: string
  primary?: string
  primarySoft?: string
}

export default function ShareButtons({
  url,
  title,
  primaryDark = '#570D3F',
  primary = '#B5377A',
  primarySoft = '#FEDDF6',
}: ShareButtonsProps) {
  const handleFacebookShare = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500')
  }

  const handleLinkedInShare = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600')
  }

  const handleNativeShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // Annulation utilisateur ignorée
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Lien copié dans le presse-papier !')
    }
  }

  return (
    <Stack direction="row" spacing={0.5}>
      <IconButton
        size="small"
        aria-label="Partager sur Facebook"
        onClick={handleFacebookShare}
        sx={{
          bgcolor: '#F3F4F6',
          color: primaryDark,
          '&:hover': { bgcolor: primarySoft, color: primary },
        }}
      >
        <FacebookIcon sx={{ fontSize: 16 }} />
      </IconButton>

      <IconButton
        size="small"
        aria-label="Partager sur LinkedIn"
        onClick={handleLinkedInShare}
        sx={{
          bgcolor: '#F3F4F6',
          color: primaryDark,
          '&:hover': { bgcolor: primarySoft, color: primary },
        }}
      >
        <LinkedInIcon sx={{ fontSize: 16 }} />
      </IconButton>

      <IconButton
        size="small"
        aria-label="Partager"
        onClick={handleNativeShare}
        sx={{
          bgcolor: '#F3F4F6',
          color: primaryDark,
          '&:hover': { bgcolor: primarySoft, color: primary },
        }}
      >
        <ShareOutlinedIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Stack>
  )
}