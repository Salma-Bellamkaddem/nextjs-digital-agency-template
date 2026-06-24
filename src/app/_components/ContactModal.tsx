'use client'

import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid2'

// ─── Icônes SVG inline (pas de dépendance externe) ───────────────────────────
const IconMonitor = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/>
  </svg>
)
const IconPen = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M12 20h9'/><path d='M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z'/>
  </svg>
)
const IconShare = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='18' cy='5' r='3'/><circle cx='6' cy='12' r='3'/><circle cx='18' cy='19' r='3'/>
    <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'/><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'/>
  </svg>
)
const IconSearch = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='11' cy='11' r='8'/><line x1='21' y1='21' x2='16.65' y2='16.65'/>
  </svg>
)
const IconUsers = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/><circle cx='9' cy='7' r='4'/>
    <path d='M23 21v-2a4 4 0 00-3-3.87'/><path d='M16 3.13a4 4 0 010 7.75'/>
  </svg>
)
const IconCpu = () => (
  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='4' y='4' width='16' height='16' rx='2'/><rect x='9' y='9' width='6' height='6'/>
    <line x1='9' y1='1' x2='9' y2='4'/><line x1='15' y1='1' x2='15' y2='4'/>
    <line x1='9' y1='20' x2='9' y2='23'/><line x1='15' y1='20' x2='15' y2='23'/>
    <line x1='20' y1='9' x2='23' y2='9'/><line x1='20' y1='14' x2='23' y2='14'/>
    <line x1='1' y1='9' x2='4' y2='9'/><line x1='1' y1='14' x2='4' y2='14'/>
  </svg>
)

// ─── Palette EXSETIA ──────────────────────────────────────────────────────────
const BRAND = {
  primary: '#B5377A',
  primaryDark: '#570D3F',
  primaryLight: '#FAC8EB',
  primarySoft: '#FEDDF6',
}

// ─── Données ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { id: 'site-web', label: 'Création de site web', icon: <IconMonitor /> },
  { id: 'contenu', label: 'Création de contenu', icon: <IconPen /> },
  { id: 'social-ads', label: 'Publicité réseaux sociaux', sub: 'Facebook, Instagram, TikTok…', icon: <IconShare /> },
  { id: 'google-ads', label: 'Publicité Google Ads', icon: <IconSearch /> },
  { id: 'conseil', label: 'Accompagnement & Conseil', icon: <IconUsers /> },
  { id: 'ia', label: 'Automatisation IA', icon: <IconCpu /> },
]

const SECTEURS = [
  'E-commerce', 'Immobilier',
  'Santé & Cliniques', 'Tourisme',
  'Services Pro', 'Formation',
  'Automobile', 'Autre',
]

const initialForm = {
  nom: '',
  email: '',
  telephone: '',
  entreprise: '',
  message: '',
  autreSeceur: '',
}

// ─── Composant principal ──────────────────────────────────────────────────────
const ContactModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1)
  const [services, setServices] = useState<string[]>([])
  const [secteur, setSecteur] = useState('')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const TOTAL_STEPS = 3
  const progress = (step / TOTAL_STEPS) * 100

  // ── Handlers ──
  const toggleService = (id: string) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.nom.trim()) next.nom = 'Le nom est requis.'
    if (!form.telephone.trim()) next.telephone = 'Le téléphone est requis.'
    else if (!/^[\d+\s().-]{6,}$/.test(form.telephone.trim())) next.telephone = 'Numéro invalide.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'E-mail invalide.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleNext = () => {
    if (step === 1 && services.length === 0) return // optionnel : forcer un choix
    if (step < TOTAL_STEPS) setStep((s) => s + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1)
  }

  const handleClose = () => {
    if (status === 'loading') return
    onClose?.()
    setTimeout(() => {
      setStep(1)
      setServices([])
      setSecteur('')
      setForm(initialForm)
      setErrors({})
      setStatus('idle')
    }, 250)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services,
          secteur: secteur === 'Autre' ? form.autreSeceur : secteur,
          ...form,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='md'
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 4 },
          m: { xs: 0, sm: 2 },
          maxHeight: { xs: '100dvh', sm: '92vh' },
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        aria-label='Fermer'
        sx={{ position: 'absolute', top: 12, right: 12, zIndex: 10, color: 'text.secondary' }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {status === 'success' ? (
          /* ── Succès ── */
          <Stack alignItems='center' spacing={2.5} sx={{ py: 8, px: 4, textAlign: 'center' }}>
            <Box sx={{
              width: 72, height: 72, borderRadius: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
              color: '#fff', fontSize: 34,
            }}>✓</Box>
            <Typography sx={{ fontWeight: 800, fontSize: 22 }}>
              Merci, votre demande a été envoyée !
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 15, maxWidth: 360 }}>
              Notre équipe vous contactera sous 24h pour discuter de votre projet.
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 1, fontWeight: 700, color: BRAND.primary, textTransform: 'none' }}>
              Fermer
            </Button>
          </Stack>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
            {/* ── Header ── */}
            <Box sx={{ textAlign: 'center', pt: { xs: 4, sm: 5 }, pb: 2, px: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 0.5 }}>Parlons de</Typography>
              <Typography component='h2' sx={{ fontSize: { xs: 26, sm: 32 }, fontWeight: 800 }}>
                votre projet.
              </Typography>
            </Box>

            {/* ── Barre de progression ── */}
            <Box sx={{ px: { xs: 3, sm: 5 }, pt: 3, pb: 1 }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: BRAND.primary, mb: 1, letterSpacing: 0.5 }}>
                ÉTAPE {step} SUR {TOTAL_STEPS}
              </Typography>
              <LinearProgress
                variant='determinate'
                value={progress}
                sx={{
                  height: 4,
                  borderRadius: 99,
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: BRAND.primary,
                    borderRadius: 99,
                  },
                }}
              />
            </Box>

            {/* ── Contenu étapes ── */}
            <Box sx={{ flexGrow: 1, overflow: 'auto', px: { xs: 3, sm: 5 }, py: 3 }}>

              {/* ── ÉTAPE 1 : Services ── */}
              {step === 1 && (
                <Box>
                  <Typography component='h3' sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 800, mb: 0.5 }}>
                    Sélectionnez les services souhaités
                  </Typography>
                  <Typography sx={{ fontSize: 13.5, color: 'text.secondary', mb: 3 }}>
                    Plusieurs choix possibles.
                  </Typography>
                  <Grid container spacing={2}>
                    {SERVICES.map((s) => {
                      const selected = services.includes(s.id)
                      return (
                        <Grid key={s.id} size={{ xs: 12, sm: 6 }}>
                          <Box
                            onClick={() => toggleService(s.id)}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: { xs: 2, sm: 2.5 },
                              borderRadius: 3,
                              border: '1.5px solid',
                              borderColor: selected ? BRAND.primary : 'rgba(0,0,0,0.1)',
                              backgroundColor: selected ? BRAND.primarySoft : 'background.paper',
                              cursor: 'pointer',
                              transition: 'all 0.18s ease',
                              '&:hover': {
                                borderColor: BRAND.primary,
                                backgroundColor: BRAND.primarySoft,
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 44, height: 44, borderRadius: 2, flexShrink: 0,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: selected ? BRAND.primary : `${BRAND.primary}18`,
                                color: selected ? '#fff' : BRAND.primary,
                                transition: 'all 0.18s ease',
                              }}
                            >
                              {s.icon}
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.3 }}>
                                {s.label}
                              </Typography>
                              {s.sub && (
                                <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.3 }}>
                                  {s.sub}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
              )}

              {/* ── ÉTAPE 2 : Secteur ── */}
              {step === 2 && (
                <Box>
                  <Typography component='h3' sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 800, mb: 0.5 }}>
                    Votre secteur d&apos;activité
                  </Typography>
                  <Typography sx={{ fontSize: 13.5, color: 'text.secondary', mb: 3 }}>
                    Un seul choix.
                  </Typography>
                  <Grid container spacing={2}>
                    {SECTEURS.map((s) => {
                      const selected = secteur === s
                      const isAutre = s === 'Autre'
                      const fullWidth = isAutre || (SECTEURS.indexOf(s) === SECTEURS.length - 2)
                      return (
                        <Grid key={s} size={{ xs: 12, sm: fullWidth ? 12 : 6 }}>
                          <Box
                            onClick={() => setSecteur(s)}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              p: 2,
                              borderRadius: 3,
                              border: '1.5px solid',
                              borderColor: selected ? BRAND.primary : 'rgba(0,0,0,0.1)',
                              color: selected ? BRAND.primary : 'text.primary',
                              backgroundColor: selected ? BRAND.primarySoft : 'background.paper',
                              cursor: 'pointer',
                              fontWeight: 600,
                              fontSize: 15,
                              transition: 'all 0.18s ease',
                              textAlign: 'center',
                              '&:hover': {
                                borderColor: BRAND.primary,
                                backgroundColor: BRAND.primarySoft,
                                color: BRAND.primary,
                              },
                            }}
                          >
                            {s}
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                  {/* Champ "Autre" si sélectionné */}
                  {secteur === 'Autre' && (
                    <Box sx={{ mt: 2 }}>
                      <TextField
                        fullWidth
                        placeholder='Précisez votre secteur d activité...'
                        value={form.autreSeceur}
                        onChange={handleChange('autreSeceur')}
                        size='small'
                        sx={textFieldSx}
                      />
                    </Box>
                  )}
                </Box>
              )}

              {/* ── ÉTAPE 3 : Formulaire + Sidebar ── */}
              {step === 3 && (
                <Box component='form' onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={4}>
                    {/* Formulaire gauche */}
                    <Grid size={{ xs: 12, md: 7 }}>
                      <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 2 }}>
                        Nous vous répondons sous 24h.
                      </Typography>

                      {/* Tags services sélectionnés */}
                      {services.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {services.map((id) => {
                            const s = SERVICES.find((s) => s.id === id)
                            return s ? (
                              <Box
                                key={id}
                                sx={{
                                  px: 1.5, py: 0.5, borderRadius: 99,
                                  border: `1px solid ${BRAND.primary}`,
                                  color: BRAND.primary,
                                  fontSize: 12.5, fontWeight: 600,
                                }}
                              >
                                {s.label}
                              </Box>
                            ) : null
                          })}
                        </Box>
                      )}

                      <Stack spacing={2}>
                        <Box>
                          <Typography sx={labelSx}>Nom complet <Req /></Typography>
                          <TextField
                            fullWidth size='small'
                            placeholder='Votre nom complet'
                            value={form.nom}
                            onChange={handleChange('nom')}
                            error={Boolean(errors.nom)}
                            helperText={errors.nom}
                            sx={textFieldSx}
                          />
                        </Box>

                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelSx}>Téléphone <Req /></Typography>
                            <TextField
                              fullWidth size='small'
                              placeholder='06 XX XX XX XX'
                              value={form.telephone}
                              onChange={handleChange('telephone')}
                              error={Boolean(errors.telephone)}
                              helperText={errors.telephone}
                              sx={textFieldSx}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelSx}>Email <Req /></Typography>
                            <TextField
                              fullWidth size='small'
                              type='email'
                              placeholder='vous@exemple.com'
                              value={form.email}
                              onChange={handleChange('email')}
                              error={Boolean(errors.email)}
                              helperText={errors.email}
                              sx={textFieldSx}
                            />
                          </Grid>
                        </Grid>

                        <Box>
                          <Typography sx={labelSx}>Entreprise <Req /></Typography>
                          <TextField
                            fullWidth size='small'
                            placeholder='Nom de votre entreprise'
                            value={form.entreprise}
                            onChange={handleChange('entreprise')}
                            sx={textFieldSx}
                          />
                        </Box>

                        <Box>
                          <Typography sx={labelSx}>Message <Req /></Typography>
                          <TextField
                            fullWidth multiline minRows={4}
                            placeholder='Décrivez votre projet, vos objectifs, votre budget...'
                            value={form.message}
                            onChange={handleChange('message')}
                            sx={textFieldSx}
                          />
                        </Box>

                        {status === 'error' && (
                          <Typography sx={{ fontSize: 13, color: 'error.main' }}>
                            Une erreur est survenue. Merci de réessayer.
                          </Typography>
                        )}
                      </Stack>
                    </Grid>

                    {/* Sidebar droite */}
                    <Grid size={{ xs: 12, md: 5 }}>
                      <Stack spacing={2}>
                        {/* Coordonnées */}
                        <Box sx={{
                          borderRadius: 3, border: '1px solid', borderColor: 'divider',
                          p: 3, backgroundColor: 'background.paper',
                        }}>
                          <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 2 }}>
                            Nos coordonnées
                          </Typography>
                          <Stack spacing={2}>
                            {[
                              { label: 'Téléphone', value: '+212 6 00 00 00 00', icon: '📞' },
                              { label: 'Email', value: 'contact@exsetia.com', icon: '✉️' },
                              { label: 'Adresse', value: 'Marrakech, Maroc', icon: '📍' },
                            ].map((item) => (
                              <Box key={item.label} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                <Box
                                  sx={{
                                    width: 36, height: 36, borderRadius: 2, flexShrink: 0,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: BRAND.primarySoft, fontSize: 16,
                                  }}
                                >
                                  {item.icon}
                                </Box>
                                <Box>
                                  <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{item.label}</Typography>
                                  <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{item.value}</Typography>
                                </Box>
                              </Box>
                            ))}
                          </Stack>
                        </Box>

                        {/* Réseaux sociaux */}
                        <Box sx={{
                          borderRadius: 3, border: '1px solid', borderColor: 'divider',
                          p: 3, backgroundColor: 'background.paper',
                        }}>
                          <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 2 }}>
                            Suivez-nous
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1.5 }}>
                            {['f', 'in', '▶'].map((icon, i) => (
                              <Box
                                key={i}
                                sx={{
                                  width: 40, height: 40, borderRadius: 2,
                                  border: '1px solid', borderColor: 'divider',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  fontSize: 14, fontWeight: 700, color: 'text.secondary',
                                  cursor: 'pointer',
                                  '&:hover': { borderColor: BRAND.primary, color: BRAND.primary },
                                }}
                              >
                                {icon}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>

            {/* ── Footer boutons ── */}
            <Box
              sx={{
                px: { xs: 3, sm: 5 },
                py: 2.5,
                borderTop: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                gap: 2,
                backgroundColor: 'background.paper',
              }}
            >
              {step > 1 && (
                <Button
                  onClick={handleBack}
                  variant='outlined'
                  sx={{
                    minWidth: { xs: 90, sm: 140 },
                    py: 1.5,
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: 15,
                    borderColor: 'divider',
                    color: 'text.primary',
                    '&:hover': { borderColor: BRAND.primary, color: BRAND.primary },
                  }}
                >
                  ← Retour
                </Button>
              )}
              {step < TOTAL_STEPS ? (
                <Button
                  onClick={handleNext}
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#fff',
                    backgroundColor: BRAND.primary,
                    '&:hover': { backgroundColor: BRAND.primaryDark },
                  }}
                >
                  Suivant →
                </Button>
              ) : (
                <Button
                  type='submit'
                  fullWidth
                  disabled={status === 'loading'}
                  onClick={handleSubmit}
                  sx={{
                    py: 1.5,
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#fff',
                    background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%)`,
                    boxShadow: `0 8px 20px ${BRAND.primary}44`,
                    '&:hover': { background: `linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primaryDark} 100%)` },
                    '&:disabled': { color: '#fff', opacity: 0.7 },
                  }}
                >
                  {status === 'loading' ? (
                    <CircularProgress size={22} sx={{ color: '#fff' }} />
                  ) : (
                    '✉ Envoyer ma demande'
                  )}
                </Button>
              )}
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const Req = () => <Box component='span' sx={{ color: BRAND.primary }}> *</Box>

const labelSx = { fontSize: 13.5, fontWeight: 700, mb: 0.75 }

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    '& fieldset': { borderColor: 'rgba(0,0,0,0.12)' },
    '&:hover fieldset': { borderColor: BRAND.primary },
    '&.Mui-focused fieldset': { borderColor: BRAND.primary, borderWidth: 1.5 },
  },
}

export default ContactModal