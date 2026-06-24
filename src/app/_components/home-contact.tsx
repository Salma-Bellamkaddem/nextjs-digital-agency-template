'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Divider from '@mui/material/Divider'
import { StyledButton } from '@/components/core'
import Image from 'next/image'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import SendIcon from '@/assets/icons/picon--send.svg'
import ContactModal from '../_components/ContactModal'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const HomeContact = () => {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Box
        id='home-contact'
        component='section'
        sx={{
          position: 'relative',
          backgroundColor: 'background.paper',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 8, md: 12 }, position: 'relative' }}>
          <Container maxWidth='md' sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    mb: 3,
                    borderRadius: 1,
                    display: 'inline-block',
                    padding: '6px 14px',
                    backgroundColor: BRAND.primarySoft,
                    color: BRAND.primary,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}
                    variant='h5'
                  >
                    Discutons de votre projet
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, fontSize: { xs: 22, md: 28, lg: 36 }, fontWeight: 800 }}>
                  Construisons quelque chose
                  <br /> de grand ensemble.
                </Typography>
                <Typography variant='h5' sx={{ color: 'text.secondary', mb: 2, fontWeight: 600, lineHeight: 1.8, fontSize: { xs: 15, md: 18 } }}>
                  Une question sur nos services ? Un nouveau projet en tête ? Notre équipe est
                  à votre écoute pour donner vie à votre prochaine campagne.
                </Typography>
              </Grid>

              <Grid
                size={{ xs: 12, md: 5 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignSelf: 'flex-end',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  mb: { xs: 0, md: 4 },
                }}
              >
                {/* Image enveloppe — masquée sur mobile */}
                <Box
                  sx={{
                    position: { xs: 'static', md: 'absolute' },
                    top: { md: -90 },
                    right: { md: 0 },
                    display: { xs: 'none', md: 'block' },
                    '& img': { width: { md: 500 } },
                  }}
                >
                  <Image src='/images/envelope-1.svg' alt='Contactez EXSETIA' width={500} height={500} />
                </Box>
                <Box sx={{ mt: { xs: 0, md: 4 } }}>
                  <Box
                    sx={{
                      backgroundColor: BRAND.primary,
                      '&:hover': { backgroundColor: BRAND.primaryDark },
                      display: 'inline-block',
                      borderRadius: 1,
                    }}
                  >
                    <StyledButton
                      variant='contained'
                      size='large'
                      onClick={() => setContactOpen(true)}
                      endIcon={<Box component={SendIcon} sx={{ mr: 1, width: 18, height: 18 }} />}
                    >
                      Travaillons ensemble
                    </StyledButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth='md'>
            <Divider sx={{ width: '100%', my: 4 }} />
          </Container>

          <Container maxWidth='md' sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  component='a'
                  href='mailto:contact@exsetia.com'
                  sx={{ fontWeight: 500, textDecoration: 'none', color: 'text.primary', ':hover': { color: BRAND.primary } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box component={EmailIcon} sx={{ mr: 1, width: 26, height: 26 }} />
                    <Typography sx={{ mb: 0 }} variant='h5'>contact@exsetia.com</Typography>
                  </Box>
                  <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>Réponse sous 24h</Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  component='a'
                  href='tel:+212600000000'
                  sx={{ fontWeight: 500, textDecoration: 'none', color: 'text.primary', ':hover': { color: BRAND.primary } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box component={PhoneIcon} sx={{ mr: 1, width: 25, height: 25 }} />
                    <Typography sx={{ mb: 0 }} variant='h5'>+212 6 00 00 00 00</Typography>
                  </Box>
                  <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>Lun - Ven / 9h - 18h</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

export default HomeContact