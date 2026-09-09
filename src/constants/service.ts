import { ReactElement } from 'react'

export interface IService {
  id: number
  slug: string
  number: string
  titleKey: string
  keywordsKey: string
  descriptionKey: string
  longDescriptionKey: string
  ctaLabelKey: string
  subServicesKeys: string[]
  icon?: ReactElement
  image?: string
}

export interface IServiceChannel {
  titleKey: string
  descKey: string
  ctaKey: string
  tags: string[]
  icon: 'google' | 'meta' | 'seo' | 'data' | 'code' | 'design'
}

export interface IServiceFaqItem {
  questionKey: string
  answerKey: string
}

export interface IServiceDetailConfig {
  id: number
  slug: string
  seoKeywords: string[]
  blogCategoryTag: string
  heroTagKey: string
  heroTitleKey: string
  heroSubtitleKey: string
  heroStats: {
    impressions: string
    clicks: string
    cpc: string
    growth: string
  }
  overview: {
    problemTitleKey: string
    problemDescKey: string
    solutionTitleKey: string
    solutionDescKey: string
  }
  processSteps: {
    stepNumber: string
    titleKey: string
    descKey: string
  }[]
  mainChannels: IServiceChannel[]
  subChannels: IServiceChannel[]
  whyChooseUs: {
    titleKey: string
    descKey: string
  }[]
  faq: IServiceFaqItem[]
}

// ── Liste des 6 services ──
export const services: IService[] = [
  {
    id: 1,
    slug: 'strategie-data',
    number: '01',
    titleKey: 'Services.items.strategy.title',
    keywordsKey: 'Services.items.strategy.keywords',
    descriptionKey: 'Services.items.strategy.description',
    longDescriptionKey: 'Services.items.strategy.longDescription',
    ctaLabelKey: 'Services.items.strategy.ctaLabel',
    subServicesKeys: [
      'Services.items.strategy.sub1',
      'Services.items.strategy.sub2',
      'Services.items.strategy.sub3',
      'Services.items.strategy.sub4',
    ],
  },
  {
    id: 2,
    slug: 'acquisition-digitale',
    number: '02',
    titleKey: 'Services.items.acquisition.title',
    keywordsKey: 'Services.items.acquisition.keywords',
    descriptionKey: 'Services.items.acquisition.description',
    longDescriptionKey: 'Services.items.acquisition.longDescription',
    ctaLabelKey: 'Services.items.acquisition.ctaLabel',
    subServicesKeys: [
      'Services.items.acquisition.sub1',
      'Services.items.acquisition.sub2',
      'Services.items.acquisition.sub3',
      'Services.items.acquisition.sub4',
    ],
  },
  {
    id: 3,
    slug: 'social-media-content',
    number: '03',
    titleKey: 'Services.items.socialMedia.title',
    keywordsKey: 'Services.items.socialMedia.keywords',
    descriptionKey: 'Services.items.socialMedia.description',
    longDescriptionKey: 'Services.items.socialMedia.longDescription',
    ctaLabelKey: 'Services.items.socialMedia.ctaLabel',
    subServicesKeys: [
      'Services.items.socialMedia.sub1',
      'Services.items.socialMedia.sub2',
      'Services.items.socialMedia.sub3',
      'Services.items.socialMedia.sub4',
    ],
  },
  {
    id: 4,
    slug: 'branding',
    number: '04',
    titleKey: 'Services.items.branding.title',
    keywordsKey: 'Services.items.branding.keywords',
    descriptionKey: 'Services.items.branding.description',
    longDescriptionKey: 'Services.items.branding.longDescription',
    ctaLabelKey: 'Services.items.branding.ctaLabel',
    subServicesKeys: [
      'Services.items.branding.sub1',
      'Services.items.branding.sub2',
      'Services.items.branding.sub3',
      'Services.items.branding.sub4',
    ],
  },
  {
    id: 5,
    slug: 'web-mobile',
    number: '05',
    titleKey: 'Services.items.webMobile.title',
    keywordsKey: 'Services.items.webMobile.keywords',
    descriptionKey: 'Services.items.webMobile.description',
    longDescriptionKey: 'Services.items.webMobile.longDescription',
    ctaLabelKey: 'Services.items.webMobile.ctaLabel',
    subServicesKeys: [
      'Services.items.webMobile.sub1',
      'Services.items.webMobile.sub2',
      'Services.items.webMobile.sub3',
      'Services.items.webMobile.sub4',
    ],
  },
  {
    id: 6,
    slug: 'data-performance',
    number: '06',
    titleKey: 'Services.items.dataPerformance.title',
    keywordsKey: 'Services.items.dataPerformance.keywords',
    descriptionKey: 'Services.items.dataPerformance.description',
    longDescriptionKey: 'Services.items.dataPerformance.longDescription',
    ctaLabelKey: 'Services.items.dataPerformance.ctaLabel',
    subServicesKeys: [
      'Services.items.dataPerformance.sub1',
      'Services.items.dataPerformance.sub2',
      'Services.items.dataPerformance.sub3',
      'Services.items.dataPerformance.sub4',
    ],
  },
]

// ── Détails exhaustifs des services ──
export const serviceDetailsList: Record<string, IServiceDetailConfig> = {
  'acquisition-digitale': {
    id: 2,
    slug: 'acquisition-digitale',
    seoKeywords: [
      'Agence Google Ads Maroc',
      'Référencement naturel SEO Casablanca',
      'Campagnes Meta Ads Instagram',
      'Optimisation IA GEO Search',
      'Génération de leads B2B Maroc',
      'Publicité digitale ROI',
    ],
    blogCategoryTag: 'acquisition',
    heroTagKey: 'ServicesDetail.acquisition.heroTag',
    heroTitleKey: 'ServicesDetail.acquisition.heroTitle',
    heroSubtitleKey: 'ServicesDetail.acquisition.heroSubtitle',
    heroStats: {
      impressions: '450,000+',
      clicks: '42,500',
      cpc: '0.35 DH',
      growth: '+340%',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.acquisition.overview.problemTitle',
      problemDescKey: 'ServicesDetail.acquisition.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.acquisition.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.acquisition.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.acquisition.process.s1Title', descKey: 'ServicesDetail.acquisition.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.acquisition.process.s2Title', descKey: 'ServicesDetail.acquisition.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.acquisition.process.s3Title', descKey: 'ServicesDetail.acquisition.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.acquisition.process.s4Title', descKey: 'ServicesDetail.acquisition.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.acquisition.main1Title',
        descKey: 'ServicesDetail.acquisition.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Search Ads', 'Display', 'YouTube Ads', 'Smart Bidding', 'Google Shopping'],
        icon: 'google',
      },
      {
        titleKey: 'ServicesDetail.acquisition.main2Title',
        descKey: 'ServicesDetail.acquisition.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Facebook Ads', 'Instagram Funnels', 'Retargeting CAPI', 'Audience Lookalike'],
        icon: 'meta',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.acquisition.sub1Title',
        descKey: 'ServicesDetail.acquisition.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Audit SEO', 'Maillage Interne'],
        icon: 'seo',
      },
      {
        titleKey: 'ServicesDetail.acquisition.sub2Title',
        descKey: 'ServicesDetail.acquisition.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Google Business', 'Pack Local'],
        icon: 'google',
      },
      {
        titleKey: 'ServicesDetail.acquisition.sub3Title',
        descKey: 'ServicesDetail.acquisition.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['GEO', 'Moteurs IA'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.acquisition.sub4Title',
        descKey: 'ServicesDetail.acquisition.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Landing Pages', 'Copywriting ROI'],
        icon: 'design',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.acquisition.faq.q1', answerKey: 'ServicesDetail.acquisition.faq.a1' },
      { questionKey: 'ServicesDetail.acquisition.faq.q2', answerKey: 'ServicesDetail.acquisition.faq.a2' },
      { questionKey: 'ServicesDetail.acquisition.faq.q3', answerKey: 'ServicesDetail.acquisition.faq.a3' },
      { questionKey: 'ServicesDetail.acquisition.faq.q4', answerKey: 'ServicesDetail.acquisition.faq.a4' },
    ],
  },
  'strategie-data': {
    id: 1,
    slug: 'strategie-data',
    seoKeywords: [
      'Étude de marché Maroc',
      'Audit stratégique digital',
      'Analyse concurrentielle Maroc',
      'Business Intelligence PME',
      'Plan stratégique marketing',
    ],
    blogCategoryTag: 'acquisition',
    heroTagKey: 'ServicesDetail.strategy.heroTag',
    heroTitleKey: 'ServicesDetail.strategy.heroTitle',
    heroSubtitleKey: 'ServicesDetail.strategy.heroSubtitle',
    heroStats: {
      impressions: '120,000+',
      clicks: '14,200',
      cpc: '0.18 DH',
      growth: '+185%',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.strategy.overview.problemTitle',
      problemDescKey: 'ServicesDetail.strategy.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.strategy.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.strategy.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.strategy.process.s1Title', descKey: 'ServicesDetail.strategy.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.strategy.process.s2Title', descKey: 'ServicesDetail.strategy.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.strategy.process.s3Title', descKey: 'ServicesDetail.strategy.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.strategy.process.s4Title', descKey: 'ServicesDetail.strategy.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.strategy.main1Title',
        descKey: 'ServicesDetail.strategy.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Étude Quant/Quali', 'Panels', 'Sémantique', 'Segmentation'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.strategy.main2Title',
        descKey: 'ServicesDetail.strategy.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Benchmark', 'SWOT Tech', 'Pricing Logic', 'Audit Marque'],
        icon: 'google',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.strategy.sub1Title',
        descKey: 'ServicesDetail.strategy.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Business Plan', 'Roadmap'],
        icon: 'seo',
      },
      {
        titleKey: 'ServicesDetail.strategy.sub2Title',
        descKey: 'ServicesDetail.strategy.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Tracking GA4', 'CAPI'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.strategy.sub3Title',
        descKey: 'ServicesDetail.strategy.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Personas', 'Journey Mapping'],
        icon: 'design',
      },
      {
        titleKey: 'ServicesDetail.strategy.sub4Title',
        descKey: 'ServicesDetail.strategy.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Growth Funnel', 'Testing'],
        icon: 'meta',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.strategy.faq.q1', answerKey: 'ServicesDetail.strategy.faq.a1' },
      { questionKey: 'ServicesDetail.strategy.faq.q2', answerKey: 'ServicesDetail.strategy.faq.a2' },
      { questionKey: 'ServicesDetail.strategy.faq.q3', answerKey: 'ServicesDetail.strategy.faq.a3' },
    ],
  },
  'social-media-content': {
    id: 3,
    slug: 'social-media-content',
    seoKeywords: [
      'Gestion réseaux sociaux Maroc',
      'Création de contenu Instagram Casablanca',
      'Stratégie LinkedIn B2B',
      'Production vidéo TikTok entreprise',
      'Community management professionnel',
    ],
    blogCategoryTag: 'socialMedia',
    heroTagKey: 'ServicesDetail.socialMedia.heroTag',
    heroTitleKey: 'ServicesDetail.socialMedia.heroTitle',
    heroSubtitleKey: 'ServicesDetail.socialMedia.heroSubtitle',
    heroStats: {
      impressions: '890,000+',
      clicks: '58,000',
      cpc: '0.12 DH',
      growth: '+420%',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.socialMedia.overview.problemTitle',
      problemDescKey: 'ServicesDetail.socialMedia.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.socialMedia.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.socialMedia.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.socialMedia.process.s1Title', descKey: 'ServicesDetail.socialMedia.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.socialMedia.process.s2Title', descKey: 'ServicesDetail.socialMedia.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.socialMedia.process.s3Title', descKey: 'ServicesDetail.socialMedia.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.socialMedia.process.s4Title', descKey: 'ServicesDetail.socialMedia.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.socialMedia.main1Title',
        descKey: 'ServicesDetail.socialMedia.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Reels', 'TikTok', 'Shorts', 'Tournage 4K'],
        icon: 'meta',
      },
      {
        titleKey: 'ServicesDetail.socialMedia.main2Title',
        descKey: 'ServicesDetail.socialMedia.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['LinkedIn Lead Gen', 'Thought Leadership', 'Carrousels'],
        icon: 'design',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.socialMedia.sub1Title',
        descKey: 'ServicesDetail.socialMedia.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Calendrier', 'Planification'],
        icon: 'design',
      },
      {
        titleKey: 'ServicesDetail.socialMedia.sub2Title',
        descKey: 'ServicesDetail.socialMedia.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Modération 24/7', 'DM Funnel'],
        icon: 'meta',
      },
      {
        titleKey: 'ServicesDetail.socialMedia.sub3Title',
        descKey: 'ServicesDetail.socialMedia.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Storytelling', 'Copywriting'],
        icon: 'google',
      },
      {
        titleKey: 'ServicesDetail.socialMedia.sub4Title',
        descKey: 'ServicesDetail.socialMedia.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Engagement Rate', 'Stats'],
        icon: 'data',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.socialMedia.faq.q1', answerKey: 'ServicesDetail.socialMedia.faq.a1' },
      { questionKey: 'ServicesDetail.socialMedia.faq.q2', answerKey: 'ServicesDetail.socialMedia.faq.a2' },
      { questionKey: 'ServicesDetail.socialMedia.faq.q3', answerKey: 'ServicesDetail.socialMedia.faq.a3' },
      { questionKey: 'ServicesDetail.socialMedia.faq.q4', answerKey: 'ServicesDetail.socialMedia.faq.a4' },
    ],
  },
  'branding': {
    id: 4,
    slug: 'branding',
    seoKeywords: [
      'Création logo entreprise Maroc',
      'Charte graphique professionnelle',
      'Identité visuelle de marque',
      'Design System Figma UI',
      'Rebranding entreprise Casablanca',
    ],
    blogCategoryTag: 'socialMedia',
    heroTagKey: 'ServicesDetail.branding.heroTag',
    heroTitleKey: 'ServicesDetail.branding.heroTitle',
    heroSubtitleKey: 'ServicesDetail.branding.heroSubtitle',
    heroStats: {
      impressions: '100%',
      clicks: 'Design System',
      cpc: 'Vectoriel',
      growth: 'Premium',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.branding.overview.problemTitle',
      problemDescKey: 'ServicesDetail.branding.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.branding.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.branding.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.branding.process.s1Title', descKey: 'ServicesDetail.branding.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.branding.process.s2Title', descKey: 'ServicesDetail.branding.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.branding.process.s3Title', descKey: 'ServicesDetail.branding.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.branding.process.s4Title', descKey: 'ServicesDetail.branding.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.branding.main1Title',
        descKey: 'ServicesDetail.branding.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Logo Guideline', 'Typographies', 'Color Palettes', 'Iconographie'],
        icon: 'design',
      },
      {
        titleKey: 'ServicesDetail.branding.main2Title',
        descKey: 'ServicesDetail.branding.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Figma System', 'UI Kit', 'Responsive Grid', 'Tokens'],
        icon: 'code',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.branding.sub1Title',
        descKey: 'ServicesDetail.branding.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Papeterie', 'Cartes de Visite'],
        icon: 'design',
      },
      {
        titleKey: 'ServicesDetail.branding.sub2Title',
        descKey: 'ServicesDetail.branding.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Decks B2B', 'Plaquettes'],
        icon: 'google',
      },
      {
        titleKey: 'ServicesDetail.branding.sub3Title',
        descKey: 'ServicesDetail.branding.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Kits Réseaux', 'Bannières'],
        icon: 'meta',
      },
      {
        titleKey: 'ServicesDetail.branding.sub4Title',
        descKey: 'ServicesDetail.branding.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Positionnement', 'Naming'],
        icon: 'data',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.branding.faq.q1', answerKey: 'ServicesDetail.branding.faq.a1' },
      { questionKey: 'ServicesDetail.branding.faq.q2', answerKey: 'ServicesDetail.branding.faq.a2' },
      { questionKey: 'ServicesDetail.branding.faq.q3', answerKey: 'ServicesDetail.branding.faq.a3' },
      { questionKey: 'ServicesDetail.branding.faq.q4', answerKey: 'ServicesDetail.branding.faq.a4' },
    ],
  },
  'web-mobile': {
    id: 5,
    slug: 'web-mobile',
    seoKeywords: [
      'Développement site web Next.js Maroc',
      'Application mobile Flutter Casablanca',
      'Création site e-commerce performant',
      'Agence web React TypeScript',
      'Refonte site vitrine haute conversion',
    ],
    blogCategoryTag: 'acquisition',
    heroTagKey: 'ServicesDetail.webMobile.heroTag',
    heroTitleKey: 'ServicesDetail.webMobile.heroTitle',
    heroSubtitleKey: 'ServicesDetail.webMobile.heroSubtitle',
    heroStats: {
      impressions: '< 0.8s',
      clicks: '100/100',
      cpc: 'TypeScript',
      growth: '+400% Conv',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.webMobile.overview.problemTitle',
      problemDescKey: 'ServicesDetail.webMobile.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.webMobile.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.webMobile.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.webMobile.process.s1Title', descKey: 'ServicesDetail.webMobile.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.webMobile.process.s2Title', descKey: 'ServicesDetail.webMobile.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.webMobile.process.s3Title', descKey: 'ServicesDetail.webMobile.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.webMobile.process.s4Title', descKey: 'ServicesDetail.webMobile.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.webMobile.main1Title',
        descKey: 'ServicesDetail.webMobile.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Next.js 15', 'React', 'Tailwind/MUI', 'App Router'],
        icon: 'code',
      },
      {
        titleKey: 'ServicesDetail.webMobile.main2Title',
        descKey: 'ServicesDetail.webMobile.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Flutter / React Native', 'iOS & Android', 'Push Notifs'],
        icon: 'design',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.webMobile.sub1Title',
        descKey: 'ServicesDetail.webMobile.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Checkout Rapide', 'Passerelles'],
        icon: 'google',
      },
      {
        titleKey: 'ServicesDetail.webMobile.sub2Title',
        descKey: 'ServicesDetail.webMobile.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Landing Page', 'CRO Funnel'],
        icon: 'meta',
      },
      {
        titleKey: 'ServicesDetail.webMobile.sub3Title',
        descKey: 'ServicesDetail.webMobile.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['REST APIs', 'PostgreSQL'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.webMobile.sub4Title',
        descKey: 'ServicesDetail.webMobile.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Maintenance SLA', 'Sécurité'],
        icon: 'seo',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.webMobile.faq.q1', answerKey: 'ServicesDetail.webMobile.faq.a1' },
      { questionKey: 'ServicesDetail.webMobile.faq.q2', answerKey: 'ServicesDetail.webMobile.faq.a2' },
      { questionKey: 'ServicesDetail.webMobile.faq.q3', answerKey: 'ServicesDetail.webMobile.faq.a3' },
      { questionKey: 'ServicesDetail.webMobile.faq.q4', answerKey: 'ServicesDetail.webMobile.faq.a4' },
      { questionKey: 'ServicesDetail.webMobile.faq.q5', answerKey: 'ServicesDetail.webMobile.faq.a5' },
    ],
  },
  'data-performance': {
    id: 6,
    slug: 'data-performance',
    seoKeywords: [
      'Tracking server-side Meta CAPI Maroc',
      'Configuration Google Analytics 4',
      'Tableau de bord Looker Studio',
      'Optimisation taux de conversion CRO',
      'Attribution marketing multicanale',
    ],
    blogCategoryTag: 'acquisition',
    heroTagKey: 'ServicesDetail.dataPerformance.heroTag',
    heroTitleKey: 'ServicesDetail.dataPerformance.heroTitle',
    heroSubtitleKey: 'ServicesDetail.dataPerformance.heroSubtitle',
    heroStats: {
      impressions: '100% Tracké',
      clicks: 'Temps Réel',
      cpc: 'CAPI First',
      growth: 'Zéro Perte',
    },
    overview: {
      problemTitleKey: 'ServicesDetail.dataPerformance.overview.problemTitle',
      problemDescKey: 'ServicesDetail.dataPerformance.overview.problemDesc',
      solutionTitleKey: 'ServicesDetail.dataPerformance.overview.solutionTitle',
      solutionDescKey: 'ServicesDetail.dataPerformance.overview.solutionDesc',
    },
    processSteps: [
      { stepNumber: '01', titleKey: 'ServicesDetail.dataPerformance.process.s1Title', descKey: 'ServicesDetail.dataPerformance.process.s1Desc' },
      { stepNumber: '02', titleKey: 'ServicesDetail.dataPerformance.process.s2Title', descKey: 'ServicesDetail.dataPerformance.process.s2Desc' },
      { stepNumber: '03', titleKey: 'ServicesDetail.dataPerformance.process.s3Title', descKey: 'ServicesDetail.dataPerformance.process.s3Desc' },
      { stepNumber: '04', titleKey: 'ServicesDetail.dataPerformance.process.s4Title', descKey: 'ServicesDetail.dataPerformance.process.s4Desc' },
    ],
    mainChannels: [
      {
        titleKey: 'ServicesDetail.dataPerformance.main1Title',
        descKey: 'ServicesDetail.dataPerformance.main1Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Server-Side GTM', 'Meta CAPI', 'Google Enhanced Conv'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.dataPerformance.main2Title',
        descKey: 'ServicesDetail.dataPerformance.main2Desc',
        ctaKey: 'ServicesDetail.common.exploreChannel',
        tags: ['Looker Studio', 'PowerBI', 'Tableaux KPI', 'Alertes'],
        icon: 'google',
      },
    ],
    subChannels: [
      {
        titleKey: 'ServicesDetail.dataPerformance.sub1Title',
        descKey: 'ServicesDetail.dataPerformance.sub1Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Attribution Multi-Touch'],
        icon: 'seo',
      },
      {
        titleKey: 'ServicesDetail.dataPerformance.sub2Title',
        descKey: 'ServicesDetail.dataPerformance.sub2Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['Audit GA4', 'Événements'],
        icon: 'data',
      },
      {
        titleKey: 'ServicesDetail.dataPerformance.sub3Title',
        descKey: 'ServicesDetail.dataPerformance.sub3Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['A/B Testing', 'Heatmaps'],
        icon: 'design',
      },
      {
        titleKey: 'ServicesDetail.dataPerformance.sub4Title',
        descKey: 'ServicesDetail.dataPerformance.sub4Desc',
        ctaKey: 'ServicesDetail.common.requestQuote',
        tags: ['HubSpot / Zoho CRM'],
        icon: 'code',
      },
    ],
    whyChooseUs: [
      { titleKey: 'ServicesDetail.whyUs.item1Title', descKey: 'ServicesDetail.whyUs.item1Desc' },
      { titleKey: 'ServicesDetail.whyUs.item2Title', descKey: 'ServicesDetail.whyUs.item2Desc' },
      { titleKey: 'ServicesDetail.whyUs.item3Title', descKey: 'ServicesDetail.whyUs.item3Desc' },
    ],
    faq: [
      { questionKey: 'ServicesDetail.dataPerformance.faq.q1', answerKey: 'ServicesDetail.dataPerformance.faq.a1' },
      { questionKey: 'ServicesDetail.dataPerformance.faq.q2', answerKey: 'ServicesDetail.dataPerformance.faq.a2' },
      { questionKey: 'ServicesDetail.dataPerformance.faq.q3', answerKey: 'ServicesDetail.dataPerformance.faq.a3' },
      { questionKey: 'ServicesDetail.dataPerformance.faq.q4', answerKey: 'ServicesDetail.dataPerformance.faq.a4' },
    ],
  },
}