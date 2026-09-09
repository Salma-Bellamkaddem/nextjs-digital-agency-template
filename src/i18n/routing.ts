import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['fr', 'en', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'always',

  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/services/[slug]': '/services/[slug]',
    '/[city]': '/[city]',
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)