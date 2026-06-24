'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

/**
 * useScrollOrNavigate
 * ────────────────────────────────────────────────────────────────────────
 * Comportement "hybride" pour les liens du menu :
 * - Si on est déjà sur la home ('/') → scroll fluide direct vers la section.
 * - Si on est sur une autre page → on navigue vers '/' avec le hash de la
 *   section (#sectionId), puis on scrolle dès que la home est montée
 *   (on écoute le hash après la navigation).
 * - Si l'item a un `sectionId` null (ex: "Accueil") → on remonte tout en haut.
 *
 * Utilisation :
 *   const goTo = useScrollOrNavigate()
 *   <Box onClick={() => goTo(item)} /> où item = { path, sectionId }
 */

const SCROLL_OFFSET = 90 // hauteur approx. de l'AppBar flottante, à ajuster si besoin

export const useScrollOrNavigate = () => {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const goTo = useCallback(
    (item: { path: string; sectionId?: string | null }) => {
      const { path, sectionId } = item

      // Pas de section associée :
      // - soit c'est "Accueil" (path === '/') → on remonte en haut / on y va
      // - soit c'est une vraie page dédiée (ex: /pricing) → navigation classique
      if (!sectionId) {
        if (path === '/') {
          if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            router.push('/')
          }
        } else {
          router.push(path)
        }
        return
      }

      // Déjà sur la home → scroll direct
      if (pathname === '/') {
        scrollToId(sectionId)
        return
      }

      // Sur une autre page → on navigue vers la home avec un hash, puis on
      // scrolle une fois le DOM de la home monté.
      router.push(`/#${sectionId}`)

      // On retente le scroll pendant quelques centaines de ms, le temps que
      // la nouvelle page (et ses sections) soit montée dans le DOM.
      let attempts = 0
      const interval = setInterval(() => {
        attempts += 1
        const el = document.getElementById(sectionId)
        if (el) {
          scrollToId(sectionId)
          clearInterval(interval)
        }
        if (attempts > 20) clearInterval(interval) // ~2s max
      }, 100)
    },
    [pathname, router, scrollToId]
  )

  return goTo
}