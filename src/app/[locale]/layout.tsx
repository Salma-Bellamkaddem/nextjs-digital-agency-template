import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

import OrganizationSchema from '@/components/seo/OrganizationSchema'
import { AppContextProvider } from '@/contexts'
import MuiThemeProvider from '@/plugins/@mui/components/@mui-theme.provider'

import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'
import FloatingWhatsApp from '../_components/floating-whatsapp'
import FloatingLanguageSwitcher from '../_components/floating-language-switcher'

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

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

// ── Métadonnées dynamiques multilingues (FR / AR / EN) ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.root' })
  const siteUrl = 'https://www.nexsetia.com'

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('titleDefault'),
      template: '%s | Nexsetia',
    },
    description: t('description'),
    applicationName: 'Nexsetia',
    authors: [{ name: 'Nexsetia', url: siteUrl }],
    creator: 'Nexsetia',
    publisher: 'Nexsetia',
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        fr: `${siteUrl}/fr`,
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}/fr`,
      },
    },
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
    openGraph: {
      type: 'website',
      siteName: 'Nexsetia',
      title: t('ogTitle'),
      description: t('description'),
      url: `${siteUrl}/${locale}`,
      images: [
        {
          url: '/logo.webp',
          width: 1200,
          height: 630,
          alt: 'Nexsetia Digital Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('description'),
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

async function getMessagesForLocale(locale: string) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default
    return messages
  } catch (error) {
    console.error(`❌ ERROR loading messages/${locale}.json`, error)
    throw error
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  const isValidLocale = routing.locales.includes(locale as (typeof routing.locales)[number])

  if (!isValidLocale) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessagesForLocale(locale)
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={plusJakartaSans.variable}
        style={{
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100vw',
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <AppContextProvider>
              <MuiThemeProvider>
                <AppBar />
                <main>{children}</main>
                <Footer />
                <FloatingWhatsApp />
                <FloatingLanguageSwitcher />
              </MuiThemeProvider>
            </AppContextProvider>
          </AppRouterCacheProvider>
          <OrganizationSchema />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}