import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import CaseStudyDetailView from './case-study-detail-view'

import { caseStudiesDetails } from '@/constants/case-study-detail'
import { routing } from '@/i18n/routing'

interface Props {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    for (const slug of Object.keys(caseStudiesDetails)) {
      paramsList.push({ locale, slug })
    }
  }
  return paramsList
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const study = caseStudiesDetails[slug]
  if (!study) return {}

  const t = await getTranslations({ locale })
  const title = t.has(study.heroTitleKey) ? t(study.heroTitleKey) : study.clientName
  const description = t.has(study.heroSubtitleKey) ? t(study.heroSubtitleKey) : ''

  return {
    title: `${title} | Nexsetia`,
    description,
    alternates: {
      canonical: `https://www.nexsetia.com/${locale}/case-studies/${slug}`,
    },
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const study = caseStudiesDetails[slug]

  if (!study) {
    notFound()
  }

  return <CaseStudyDetailView study={study} locale={locale as 'fr' | 'en' | 'ar'} />
}