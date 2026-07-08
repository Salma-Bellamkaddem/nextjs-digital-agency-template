import { JSX } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import { AppConfig } from '@/configs'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexsetia.com'),

  title: {
    default: AppConfig.appName,
    template: `%s | ${AppConfig.appName}`,
  },

  description:
    'Agence digitale 360° spécialisée en marketing digital, SEO, GEO, SEA, branding, développement web, création de contenu, automatisation IA et solutions digitales sur mesure.',

  applicationName: 'Nexsetia',

  keywords: [
    'Agence Marketing Maroc',
    'Agence Marketing Marrakech',
    'Agence Digitale Maroc',
    'Marketing Digital',
    'SEO',
    'GEO',
    'SEA',
    'Google Ads',
    'Facebook Ads',
    'Création Site Web',
    'Développement Web',
    'Développement Mobile',
    'UI UX',
    'Branding',
    'Community Management',
    'Création de contenu',
    'Automatisation IA',
    'Agence IA',
    'Nexsetia',
  ],

  authors: [
    {
      name: 'Nexsetia',
      url: 'https://www.nexsetia.com',
    },
  ],

  creator: 'Nexsetia',

  publisher: 'Nexsetia',

  category: 'Marketing',

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

    title: 'Nexsetia | Agence Marketing Digital',

    description:
      'Agence digitale spécialisée dans le marketing digital, le branding, le SEO, le développement web, les solutions IA et la croissance des entreprises.',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexsetia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Nexsetia | Agence Marketing Digital',

    description:
      'Marketing Digital • SEO • Développement Web • Branding • IA',

    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  
    shortcut: '/favicon.ico',
  },
  
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="fr" suppressHydrationWarning>

      <body className={plusJakartaSans.variable}>
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