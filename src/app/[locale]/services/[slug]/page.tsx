import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { services } from '@/constants/service'
import { routing } from '@/i18n/routing'
import ServiceDetailClient from './service-detail-client'

interface ServicePageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = []

  for (const locale of routing.locales) {
    for (const service of services) {
      paramsList.push({
        locale,
        slug: service.slug,
      })
    }
  }

  return paramsList
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const currentService = services.find((s) => s.slug === slug)

  if (!currentService) {
    return {}
  }

  // Charge toutes les traductions pour la langue active
  const t = await getTranslations({ locale })
  
  // Récupération dynamique du titre et de la description spécifiques au service
  const title = t(currentService.titleKey)
  const description = t(currentService.descriptionKey)
  
  const siteUrl = 'https://www.nexsetia.com'
  const currentPath = `/${locale}/services/${slug}`

  return {
    // Si votre layout a un template "%s | Nexsetia", fournissez uniquement `title`.
    // Si aucun template n'est défini dans le layout, laissez `title: `${title} | Nexsetia``.
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${currentPath}`,
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
      url: `${siteUrl}${currentPath}`,
      siteName: 'Nexsetia',
      locale: locale === 'ar' ? 'ar_AR' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/logo.webp',
          width: 1200,
          height: 630,
          alt: `${title} - Nexsetia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Nexsetia`,
      description,
      images: ['/logo.webp'],
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale, slug } = await params
  const currentService = services.find((s) => s.slug === slug)

  if (!currentService) {
    notFound()
  }

  // Active le rendu statique pour la locale active
  setRequestLocale(locale)

  return <ServiceDetailClient slug={slug} />
}