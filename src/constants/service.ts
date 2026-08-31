import { ReactElement } from 'react'

export interface IService {
  id: number
  slug: string
  titleKey: string
  descriptionKey: string
  longDescriptionKey: string
  ctaLabelKey: string
  subServicesKeys: string[]
  icon?: ReactElement
  image?: string
}

export const services: IService[] = [
  {
    id: 1,
    slug: 'etudes-marche',
    titleKey: 'Services.items.marketResearch.title',
    descriptionKey: 'Services.items.marketResearch.description',
    longDescriptionKey: 'Services.items.marketResearch.longDescription',
    ctaLabelKey: 'Services.items.marketResearch.ctaLabel',
    subServicesKeys: [
      'Services.items.marketResearch.sub1',
      'Services.items.marketResearch.sub2',
      'Services.items.marketResearch.sub3',
      'Services.items.marketResearch.sub4',
      'Services.items.marketResearch.sub5',
    ],
    image: '/icons/content-strategy.png',
  },
  {
    id: 2,
    slug: 'analyse-donnees',
    titleKey: 'Services.items.dataAnalytics.title',
    descriptionKey: 'Services.items.dataAnalytics.description',
    longDescriptionKey: 'Services.items.dataAnalytics.longDescription',
    ctaLabelKey: 'Services.items.dataAnalytics.ctaLabel',
    subServicesKeys: [
      'Services.items.dataAnalytics.sub1',
      'Services.items.dataAnalytics.sub2',
      'Services.items.dataAnalytics.sub3',
      'Services.items.dataAnalytics.sub4',
      'Services.items.dataAnalytics.sub5',
    ],
    image: '/icons/mobile-app.png',
  },
  {
    id: 3,
    slug: 'acquisition',
    titleKey: 'Services.items.acquisition.title',
    descriptionKey: 'Services.items.acquisition.description',
    longDescriptionKey: 'Services.items.acquisition.longDescription',
    ctaLabelKey: 'Services.items.acquisition.ctaLabel',
    subServicesKeys: [
      'Services.items.acquisition.sub1',
      'Services.items.acquisition.sub2',
      'Services.items.acquisition.sub3',
      'Services.items.acquisition.sub4',
      'Services.items.acquisition.sub5',
    ],
    image: '/icons/shopping.png',
  },
  {
    id: 4,
    slug: 'social-media',
    titleKey: 'Services.items.socialMedia.title',
    descriptionKey: 'Services.items.socialMedia.description',
    longDescriptionKey: 'Services.items.socialMedia.longDescription',
    ctaLabelKey: 'Services.items.socialMedia.ctaLabel',
    subServicesKeys: [
      'Services.items.socialMedia.sub1',
      'Services.items.socialMedia.sub2',
      'Services.items.socialMedia.sub3',
      'Services.items.socialMedia.sub4',
      'Services.items.socialMedia.sub5',
    ],
    image: '/icons/conversation.png',
  },
  {
    id: 5,
    slug: 'branding',
    titleKey: 'Services.items.branding.title',
    descriptionKey: 'Services.items.branding.description',
    longDescriptionKey: 'Services.items.branding.longDescription',
    ctaLabelKey: 'Services.items.branding.ctaLabel',
    subServicesKeys: [
      'Services.items.branding.sub1',
      'Services.items.branding.sub2',
      'Services.items.branding.sub3',
      'Services.items.branding.sub4',
    ],
    image: '/icons/pantone.png',
  },
  {
    id: 6,
    slug: 'dev',
    titleKey: 'Services.items.webDev.title',
    descriptionKey: 'Services.items.webDev.description',
    longDescriptionKey: 'Services.items.webDev.longDescription',
    ctaLabelKey: 'Services.items.webDev.ctaLabel',
    subServicesKeys: [
      'Services.items.webDev.sub1',
      'Services.items.webDev.sub2',
      'Services.items.webDev.sub3',
      'Services.items.webDev.sub4',
      'Services.items.webDev.sub5',
      'Services.items.webDev.sub6',
    ],
    image: '/icons/mobile-app.png',
  },
  {
    id: 7,
    slug: 'startups-mvp',
    titleKey: 'Services.items.startupsMvp.title',
    descriptionKey: 'Services.items.startupsMvp.description',
    longDescriptionKey: 'Services.items.startupsMvp.longDescription',
    ctaLabelKey: 'Services.items.startupsMvp.ctaLabel',
    subServicesKeys: [
      'Services.items.startupsMvp.sub1',
      'Services.items.startupsMvp.sub2',
      'Services.items.startupsMvp.sub3',
      'Services.items.startupsMvp.sub4',
    ],
    image: '/icons/mobile-app.png',
  },
  {
    id: 8,
    slug: 'ai-automation',
    titleKey: 'Services.items.aiAutomation.title',
    descriptionKey: 'Services.items.aiAutomation.description',
    longDescriptionKey: 'Services.items.aiAutomation.longDescription',
    ctaLabelKey: 'Services.items.aiAutomation.ctaLabel',
    subServicesKeys: [
      'Services.items.aiAutomation.sub1',
      'Services.items.aiAutomation.sub2',
      'Services.items.aiAutomation.sub3',
      'Services.items.aiAutomation.sub4',
    ],
    image: '/icons/content-strategy.png',
  },
  {
    id: 9,
    slug: 'enterprise-apps',
    titleKey: 'Services.items.enterpriseApps.title',
    descriptionKey: 'Services.items.enterpriseApps.description',
    longDescriptionKey: 'Services.items.enterpriseApps.longDescription',
    ctaLabelKey: 'Services.items.enterpriseApps.ctaLabel',
    subServicesKeys: [
      'Services.items.enterpriseApps.sub1',
      'Services.items.enterpriseApps.sub2',
      'Services.items.enterpriseApps.sub3',
      'Services.items.enterpriseApps.sub4',
    ],
    image: '/icons/shopping.png',
  },
]