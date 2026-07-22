'use client'

import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material/styles'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import DescriptionIcon from '@mui/icons-material/Description'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'

const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

const DARK_BG = '#0E0510'
const DARK_CARD = '#170A1B'
const DARK_BORDER = `${BRAND.primary}33`

const MAX_CV_SIZE_MB = 5
const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

interface FormErrors {
  fullName?: string
  phone?: string
  email?: string
  poste?: string
  message?: string
  cv?: string
}

const HomeTeam = () => {
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    poste: '',
    message: '',
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const pageBg = isDark
    ? `radial-gradient(circle at 50% 0%, ${BRAND.primaryDark}33 0%, ${DARK_BG} 55%)`
    : `linear-gradient(135deg, ${BRAND.primarySoft} 0%, #fff 45%, ${BRAND.primarySoft} 100%)`
  const cardBg = isDark ? DARK_CARD : '#fff'
  const cardBorder = isDark ? DARK_BORDER : BRAND.primaryLight
  const textMain = isDark ? '#fff' : BRAND.primaryDark
  const textMuted = isDark ? 'rgba(255,255,255,0.6)' : '#6b7280'

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2.5,
      backgroundColor: isDark ? `${BRAND.primary}0D` : BRAND.primarySoft + '55',
      '& fieldset': { borderColor: cardBorder },
      '&:hover fieldset': { borderColor: BRAND.primary },
      '&.Mui-focused fieldset': { borderColor: BRAND.primary },
    },
    '& .MuiInputLabel-root': { color: textMuted },
    '& .MuiInputLabel-root.Mui-focused': { color: BRAND.primary },
    '& .MuiOutlinedInput-input': { color: textMain, fontSize: 14 },
  }

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!ACCEPTED_CV_TYPES.includes(file.type)) {
      setErrors((prev) => ({ ...prev, cv: 'Formats acceptés : PDF, DOC, DOCX' }))
      return
    }
    if (file.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        cv: `Le fichier ne doit pas dépasser ${MAX_CV_SIZE_MB} Mo`,
      }))
      return
    }

    setCvFile(file)
    setErrors((prev) => ({ ...prev, cv: undefined }))
  }

  const removeFile = () => {
    setCvFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const validate = () => {
    const next: FormErrors = {}
    if (!form.fullName.trim()) next.fullName = 'Le nom complet est requis'
    if (!form.phone.trim()) next.phone = 'Le numéro de téléphone est requis'
    if (!form.email.trim()) next.email = "L'email est requis"
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Email invalide'
    if (!form.message.trim()) next.message = 'Un message de motivation est requis'
    if (!cvFile) next.cv = 'Merci de joindre votre CV'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const payload = new FormData()
      payload.append('fullName', form.fullName)
      payload.append('phone', form.phone)
      payload.append('email', form.email)
      payload.append('poste', form.poste)
      payload.append('message', form.message)
      if (cvFile) payload.append('cv', cvFile)

      const res = await fetch('/api/recrutement', { method: 'POST', body: payload })
      if (!res.ok) throw new Error('Echec de envoi')

      setStatus('success')
      setForm({ fullName: '', phone: '', email: '', poste: '', message: '' })
      removeFile()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box
      id='home-team'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: pageBg,
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND.primary}${
            isDark ? '22' : '0D'
          } 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          id='recrutement'
          sx={{
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark
              ? `0 20px 60px rgba(0,0,0,0.45)`
              : `0 4px 24px ${BRAND.primary}12`,
            animation: 'fadeUp 0.7s ease both',
            '@keyframes fadeUp': {
              from: { opacity: 0, transform: 'translateY(28px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Grid container>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                p: { xs: 3.5, md: 4.5 },
                background: `linear-gradient(160deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                }}
              />
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 2,
                  py: 0.6,
                  mb: 2.5,
                  borderRadius: 10,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  width: 'fit-content',
                }}
              >
                <WorkOutlineIcon sx={{ fontSize: 14, color: '#fff' }} />
                <Typography
                  sx={{
                    fontSize: 10.5,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  Recrutement
                </Typography>
              </Box>

              <Typography
                component='h3'
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 22, md: 24 },
                  color: '#fff',
                  lineHeight: 1.3,
                  mb: 1.5,
                }}
              >
                Envie de rejoindre l&apos;aventure ?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 13, md: 13.5 },
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.75,
                  mb: 3,
                }}
              >
                Partagez-nous vos coordonnées, votre motivation et votre CV. Nous étudions chaque
                candidature avec attention et revenons vers vous rapidement.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  { icon: BadgeOutlinedIcon, text: 'Réponse sous quelques jours ouvrés' },
                  { icon: DescriptionIcon, text: 'CV au format PDF, DOC ou DOCX' },
                ].map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                      <ItemIcon sx={{ fontSize: 16, color: '#fff', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: 12.5, color: 'rgba(255,255,255,0.85)' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 3, md: 4.5 } }}>
              {status === 'success' ? (
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: 1.5,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 48, color: BRAND.primary }} />
                  <Typography sx={{ fontWeight: 800, fontSize: 18, color: textMain }}>
                    Candidature envoyée !
                  </Typography>
                  <Typography sx={{ fontSize: 13.5, color: textMuted, maxWidth: 360 }}>
                    Merci pour votre intérêt. Notre équipe va étudier votre profil et reviendra vers
                    vous très prochainement.
                  </Typography>
                  <Button
                    onClick={() => setStatus('idle')}
                    sx={{
                      mt: 1,
                      textTransform: 'none',
                      fontWeight: 700,
                      color: BRAND.primary,
                      '&:hover': { backgroundColor: `${BRAND.primary}15` },
                    }}
                  >
                    Envoyer une autre candidature
                  </Button>
                </Box>
              ) : (
                <Box component='form' onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label='Nom complet'
                        placeholder='Votre nom et prénom'
                        value={form.fullName}
                        onChange={handleChange('fullName')}
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        InputProps={{
                          startAdornment: (
                            <PersonOutlineIcon sx={{ fontSize: 18, color: BRAND.primary, mr: 1 }} />
                          ),
                        }}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label='Téléphone'
                        placeholder='+212 6 00 00 00 00'
                        value={form.phone}
                        onChange={handleChange('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputProps={{
                          startAdornment: (
                            <PhoneIphoneIcon sx={{ fontSize: 18, color: BRAND.primary, mr: 1 }} />
                          ),
                        }}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        type='email'
                        label='Email'
                        placeholder='vous@exemple.com'
                        value={form.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{
                          startAdornment: (
                            <EmailOutlinedIcon sx={{ fontSize: 18, color: BRAND.primary, mr: 1 }} />
                          ),
                        }}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label='Poste souhaité (optionnel)'
                        placeholder='Ex : Développeur, Chargé(e) marketing…'
                        value={form.poste}
                        onChange={handleChange('poste')}
                        InputProps={{
                          startAdornment: (
                            <WorkOutlineIcon sx={{ fontSize: 18, color: BRAND.primary, mr: 1 }} />
                          ),
                        }}
                        sx={fieldSx}
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label='Message de motivation'
                        placeholder='Parlez-nous de vous, de vos compétences et de ce qui vous motive à nous rejoindre…'
                        value={form.message}
                        onChange={handleChange('message')}
                        error={!!errors.message}
                        helperText={errors.message}
                        sx={fieldSx}
                      />
                    </Grid>

                    <Grid size={12}>
                      <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: textMain, mb: 1 }}>
                        Votre CV
                      </Typography>

                      <input
                        ref={fileInputRef}
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                      />

                      {!cvFile ? (
                        <Box
                          onClick={() => fileInputRef.current?.click()}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            p: 3,
                            borderRadius: 3,
                            border: `1.5px dashed ${errors.cv ? '#d32f2f' : cardBorder}`,
                            backgroundColor: isDark
                              ? `${BRAND.primary}0D`
                              : BRAND.primarySoft + '55',
                            cursor: 'pointer',
                            transition: 'border-color 0.2s ease, background-color 0.2s ease',
                            '&:hover': {
                              borderColor: BRAND.primary,
                              backgroundColor: `${BRAND.primary}12`,
                            },
                          }}
                        >
                          <UploadFileIcon sx={{ fontSize: 26, color: BRAND.primary }} />
                          <Typography sx={{ fontSize: 13, fontWeight: 700, color: textMain }}>
                            Cliquez pour importer votre CV
                          </Typography>
                          <Typography sx={{ fontSize: 11.5, color: textMuted }}>
                            PDF, DOC ou DOCX — {MAX_CV_SIZE_MB} Mo maximum
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 1.5,
                            p: 1.75,
                            borderRadius: 3,
                            border: `1px solid ${cardBorder}`,
                            backgroundColor: isDark
                              ? `${BRAND.primary}12`
                              : BRAND.primarySoft,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.25,
                              minWidth: 0,
                            }}
                          >
                            <DescriptionIcon
                              sx={{ fontSize: 20, color: BRAND.primary, flexShrink: 0 }}
                            />
                            <Typography
                              sx={{
                                fontSize: 12.5,
                                fontWeight: 600,
                                color: textMain,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {cvFile.name}
                            </Typography>
                          </Box>
                          <Box
                            onClick={removeFile}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 26,
                              height: 26,
                              borderRadius: '50%',
                              flexShrink: 0,
                              cursor: 'pointer',
                              backgroundColor: isDark
                                ? 'rgba(255,255,255,0.08)'
                                : '#fff',
                              '&:hover': { backgroundColor: `${BRAND.primary}22` },
                            }}
                          >
                            <CloseIcon sx={{ fontSize: 15, color: textMuted }} />
                          </Box>
                        </Box>
                      )}
                      {errors.cv && (
                        <Typography sx={{ fontSize: 11.5, color: '#d32f2f', mt: 0.75, ml: 0.5 }}>
                          {errors.cv}
                        </Typography>
                      )}
                    </Grid>

                    <Grid size={12}>
                      {status === 'error' && (
                        <Typography sx={{ fontSize: 12.5, color: '#d32f2f', mb: 1.5 }}>
                          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer.
                        </Typography>
                      )}
                      <Button
                        type='submit'
                        disabled={status === 'submitting'}
                        endIcon={
                          status === 'submitting' ? null : <SendIcon sx={{ fontSize: 16 }} />
                        }
                        sx={{
                          color: '#fff',
                          background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                          px: 3.5,
                          py: 1.25,
                          borderRadius: 10,
                          fontWeight: 700,
                          fontSize: 13.5,
                          textTransform: 'none',
                          boxShadow: `0 8px 20px ${BRAND.primary}40`,
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 10px 24px ${BRAND.primary}55`,
                            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                          },
                          '&.Mui-disabled': { color: '#fff', opacity: 0.7 },
                        }}
                      >
                        {status === 'submitting' ? (
                          <CircularProgress size={18} sx={{ color: '#fff' }} />
                        ) : (
                          'Envoyer ma candidature'
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeTeam