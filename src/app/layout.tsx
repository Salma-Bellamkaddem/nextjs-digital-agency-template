import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import OrganizationSchema from '@/components/seo/OrganizationSchema'

import { AppContextProvider } from '@/contexts'
import MuiThemeProvider from '@/plugins/@mui/components/@mui-theme.provider'

import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B5377A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexsetia.com'),
  title: {
    default: 'Nexsetia | Agence Marketing Digital & Développement Web au Maroc',
    template: `%s | Nexsetia`,
  },
  description:
    "Nexsetia est une agence marketing digital 360° qui imagine des stratégies sur mesure pour développer votre visibilité, optimiser votre acquisition digitale, générer des prospects qualifiés et accélérer durablement votre croissance.",
  applicationName: 'Nexsetia',
  keywords: [
    'Nexsetia',
    'Nexsetia Maroc',
    'Agence Nexsetia',
    'Agence marketing digital',
    'Agence marketing digital Maroc',
    'Agence digitale Maroc',
    'Agence web',
    'Agence web Maroc',
    'Agence de communication digitale',
    'Communication digitale',
    'Stratégie digitale',
    'Marketing digital',
    'Acquisition digitale',
    'Génération de leads',
    'SEO',
    'Référencement naturel',
    'Google Ads',
    'Facebook Ads',
    'Développement web',
    'Branding',
    'Identité visuelle',
    'Solutions digitales',
  ],
  authors: [{ name: 'Nexsetia', url: 'https://www.nexsetia.com' }],
  creator: 'Nexsetia',
  publisher: 'Nexsetia',
  category: 'Marketing & Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.nexsetia.com',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.nexsetia.com',
    siteName: 'Nexsetia',
    title: 'Nexsetia | Agence Marketing Digital & Développement Web',
    description:
      "Nexsetia est une agence marketing digital 360° spécialisée en stratégie digitale, acquisition, SEO, branding, développement web et solutions IA.",
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Nexsetia Agence Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexsetia | Agence Marketing Digital',
    description:
      "Agence marketing digital 360° • Stratégie digitale • Acquisition • SEO • Développement Web • Branding",
    images: ['/logo.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={plusJakartaSans.variable}
        style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}
      >
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <AppContextProvider>
            <MuiThemeProvider>
              <AppBar />
              <main>{children}</main>
              <Footer />
            </MuiThemeProvider>
          </AppContextProvider>
        </AppRouterCacheProvider>
        <OrganizationSchema />
      </body>
    </html>
  )
}