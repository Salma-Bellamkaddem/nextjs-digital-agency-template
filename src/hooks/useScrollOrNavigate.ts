'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

const SCROLL_OFFSET = 90

export const useScrollOrNavigate = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const goTo = useCallback(
    (item: { path: string; sectionId?: string | null }) => {
      const { path, sectionId } = item
      const cleanPath = path.replace(/^\/(fr|ar|en)(?=\/|$)/, '') || '/'

      const isHomePage =
        pathname === `/${locale}` ||
        pathname === `/${locale}/` ||
        pathname === '/' ||
        pathname === ''

      // ── CAS 1 : C'est une vraie page dédiée (ex: /blog, /contact-us) ──
      if (!sectionId && cleanPath !== '/') {
        router.push(`/${locale}${cleanPath}`)
        return
      }

      // ── CAS 2 : C'est le retour en haut de la Home (Accueil) ──
      if (!sectionId && cleanPath === '/') {
        if (isHomePage) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          router.push(`/${locale}`)
        }
        return
      }

      // ── CAS 3 : C'est une ancre vers une section (#home-services, #home-method...) ──
      if (sectionId) {
        if (isHomePage) {
          scrollToId(sectionId)
        } else {
          // Navigue vers la home avec le hash
          router.push(`/${locale}/#${sectionId}`)

          let attempts = 0
          const interval = setInterval(() => {
            attempts += 1
            const el = document.getElementById(sectionId)
            if (el) {
              scrollToId(sectionId)
              clearInterval(interval)
            }
            if (attempts > 30) clearInterval(interval)
          }, 80)
        }
      }
    },
    [pathname, router, locale, scrollToId]
  )

  return goTo
}