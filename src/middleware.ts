import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest } from 'next/server'

const handleI18nRouting = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  return handleI18nRouting(request)
}

export const config = {
  matcher: [
    // Capture toutes les routes sauf les fichiers statiques et assets internes
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}