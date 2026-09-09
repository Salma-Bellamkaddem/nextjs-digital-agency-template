import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { serviceDetailsList } from '@/constants/service'
import { routing } from '@/i18n/routing'
import ServiceDetailClientView from './service-detail-client-view'

interface PageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = []

  for (const locale of routing.locales) {
    for (const slug of Object.keys(serviceDetailsList)) {
      paramsList.push({ locale, slug })
    }
  }

  return paramsList
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const service = serviceDetailsList[slug]
  if (!service) return {}

  const t = await getTranslations({ locale })
  const title = t.has(service.heroTitleKey) ? t(service.heroTitleKey) : 'Service Nexsetia'
  const description = t.has(service.heroSubtitleKey) ? t(service.heroSubtitleKey) : ''
  const siteUrl = 'https://www.nexsetia.com'

  return {
    title: `${title} | Nexsetia`,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/services/${slug}`,
      languages: {
        fr: `${siteUrl}/fr/services/${slug}`,
        ar: `${siteUrl}/ar/services/${slug}`,
        en: `${siteUrl}/en/services/${slug}`,
        'x-default': `${siteUrl}/fr/services/${slug}`,
      },
    },
    openGraph: {
      title: `${title} | Nexsetia`,
      description,
      url: `${siteUrl}/${locale}/services/${slug}`,
      type: 'website',
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params
  const service = serviceDetailsList[slug]

  if (!service) {
    notFound()
  }

  setRequestLocale(locale)

  return <ServiceDetailClientView service={service} locale={locale as 'fr' | 'en' | 'ar'} />
}